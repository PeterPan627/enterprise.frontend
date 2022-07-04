import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import {
  BankBalancesResponse,
  BroadcastMode,
  LcdClient,
  setupAuthExtension,
  setupBankExtension,
  SigningCosmosClient,
  BroadcastTxResult,
  StdFee,
  coins,
  assertIsBroadcastTxSuccess,
} from "@cosmjs/launchpad";
import { CosmWasmClient, MsgExecuteContract } from "@cosmjs/cosmwasm";
import config from "../../environments/config";
import { Observable } from "rxjs";
import { SigningCosmWasmClient } from "@cosmjs/cosmwasm-stargate";
import { GasPrice } from "@cosmjs/stargate";
import { Keplr } from "@keplr-wallet/types";
declare let window: any;
declare let document: any;

export function toMicroAmount(amount: string, coinDecimals: string) {
  return (
    Number.parseFloat(amount) * Math.pow(10, Number.parseInt(coinDecimals))
  );
}

let savedKeplr: Keplr;

export async function getKeplr(): Promise<Keplr> {
  let keplr: Keplr | undefined;
  if (savedKeplr) {
    keplr = savedKeplr;
  } else if (window.keplr) {
    keplr = window.keplr;
  } else if (document.readyState === "complete") {
    keplr = window.keplr;
  } else {
    keplr = await new Promise((resolve) => {
      const documentStateChange = (event: Event) => {
        if (
          event.target &&
          (event.target as Document).readyState === "complete"
        ) {
          resolve(window.keplr);
          document.removeEventListener("readystatechange", documentStateChange);
        }
      };

      document.addEventListener("readystatechange", documentStateChange);
    });
  }

  if (!keplr) throw new Error("Keplr not found");
  if (!savedKeplr) savedKeplr = keplr;

  return keplr;
}

export interface ExBankBalancesResponse {
  address: String;
  balance: BankBalancesResponse;
  hash: string;
  info: { [key: string]: any };
}
@Injectable({
  providedIn: "root",
})
export class KeplrService {
  private enable: any;
  client = LcdClient.withExtensions(
    { apiUrl: config.restEndpoint, broadcastMode: BroadcastMode.Block }
    // setupAuthExtension,
    // setupBankExtension
  );

  wasmClient = new CosmWasmClient(config.restEndpoint, BroadcastMode.Block);

  constructor(private http: HttpClient) {
    window.onload = async () => {
      // Keplr extension injects the offline signer that is compatible with cosmJS.
      // You can get this offline signer from `window.getOfflineSigner(chainId:string)` after load event.
      // And it also injects the helper function to `window.keplr`.
      // If `window.getOfflineSigner` or `window.keplr` is null, Keplr extension may be not installed on browser.
      if (!window.getOfflineSigner || !window.keplr) {
        alert("Please install keplr extension");
      } else {
        if (window.keplr.experimentalSuggestChain) {
          try {
            await window.keplr.experimentalSuggestChain({
              // Chain-id of the Cosmos SDK chain.
              chainId: config.chainId,
              // The name of the chain to be displayed to the user.
              chainName: config.chainName,
              // RPC endpoint of the chain.
              rpc: config.rpcEndpoint,
              // REST endpoint of the chain.
              rest: config.restEndpoint,
              // Staking coin information
              stakeCurrency: {
                // Coin denomination to be displayed to the user.
                coinDenom: config.denom,
                // Actual denom (i.e. uatom, uscrt) used by the blockchain.
                coinMinimalDenom: config.microDenom,
                // # of decimal points to convert minimal denomination to user-facing denomination.
                coinDecimals: config.coinDecimals,
                // (Optional) Keplr can show the fiat value of the coin if a coingecko id is provided.
                // You can get id from https://api.coingecko.com/api/v3/coins/list if it is listed.
                // coinGeckoId: ""
              },
              // (Optional) If you have a wallet webpage used to stake the coin then provide the url to the website in `walletUrlForStaking`.
              // The 'stake' button in Keplr extension will link to the webpage.
              // walletUrlForStaking: "",
              // The BIP44 path.
              bip44: {
                // You can only set the coin type of BIP44.
                // 'Purpose' is fixed to 44.
                coinType: 118,
              },
              // Bech32 configuration to show the address to user.
              // This field is the interface of
              // {
              //   bech32PrefixAccAddr: string;
              //   bech32PrefixAccPub: string;
              //   bech32PrefixValAddr: string;
              //   bech32PrefixValPub: string;
              //   bech32PrefixConsAddr: string;
              //   bech32PrefixConsPub: string;
              // }
              bech32Config: {
                bech32PrefixAccAddr: config.addressPrefix,
                bech32PrefixAccPub: `${config.addressPrefix}pub`,
                bech32PrefixValAddr: `${config.addressPrefix}valoper`,
                bech32PrefixValPub: `${config.addressPrefix}valoperpub`,
                bech32PrefixConsAddr: `${config.addressPrefix}valcons`,
                bech32PrefixConsPub: `${config.addressPrefix}valconspub`,
              },
              // List of all coin/tokens used in this chain.
              currencies: [
                {
                  // Coin denomination to be displayed to the user.
                  coinDenom: config.denom,
                  // Actual denom (i.e. uatom, uscrt) used by the blockchain.
                  coinMinimalDenom: config.microDenom,
                  // # of decimal points to convert minimal denomination to user-facing denomination.
                  coinDecimals: config.coinDecimals,
                  // (Optional) Keplr can show the fiat value of the coin if a coingecko id is provided.
                  // You can get id from https://api.coingecko.com/api/v3/coins/list if it is listed.
                  // coinGeckoId: ""
                },
              ],
              // List of coin/tokens used as a fee token in this chain.
              feeCurrencies: [
                {
                  // Coin denomination to be displayed to the user.
                  coinDenom: config.denom,
                  // Actual denom (i.e. uatom, uscrt) used by the blockchain.
                  coinMinimalDenom: config.microDenom,
                  // # of decimal points to convert minimal denomination to user-facing denomination.
                  coinDecimals: 6,
                  // (Optional) Keplr can show the fiat value of the coin if a coingecko id is provided.
                  // You can get id from https://api.coingecko.com/api/v3/coins/list if it is listed.
                  // coinGeckoId: ""
                },
              ],
              // (Optional) The number of the coin type.
              // This field is only used to fetch the address from ENS.
              // Ideally, it is recommended to be the same with BIP44 path's coin type.
              // However, some early chains may choose to use the Cosmos Hub BIP44 path of '118'.
              // So, this is separated to support such chains.
              coinType: 118,
              // (Optional) This is used to set the fee of the transaction.
              // If this field is not provided, Keplr extension will set the default gas price as (low: 0.01, average: 0.025, high: 0.04).
              // Currently, Keplr doesn't support dynamic calculation of the gas prices based on on-chain data.
              // Make sure that the gas prices are higher than the minimum gas prices accepted by chain validators and RPC/REST endpoint.
              gasPriceStep: {
                low: config.gasPrice / 2,
                average: config.gasPrice,
                high: config.gasPrice * 2,
              },
            });
          } catch {
            alert("Failed to suggest the chain");
          }
        } else {
          alert("Please use the recent version of keplr extension");
        }
      }

      await window.keplr.enable(config.chainId);
      // const offlineSigner = window.getOfflineSigner(this.chainId);

      // You can get the address/public keys by `getAccounts` method.
      // It can return the array of address/public key.
      // But, currently, Keplr extension manages only one address/public key pair.
      // XXX: This line is needed to set the sender address for SigningCosmosClient.
      // const accounts = await offlineSigner.getAccounts();

      // Initialize the gaia api with the offline signer that is injected by Keplr extension.
      // const cosmJS = new SigningCosmosClient(
      //   config.lightClient,
      //   accounts[0].address,
      //   offlineSigner,
      // );
    };
  }

  // queries
  async getAccount(): Promise<ExBankBalancesResponse> {
    const response: ExBankBalancesResponse = <ExBankBalancesResponse>{};
    const offlineSigner = window.getOfflineSigner(config.chainId);
    const accounts = await offlineSigner.getAccounts();
    const keys = await offlineSigner?.keplr?.getKey(config.chainId);
    const hash = await window.keplr.signArbitrary(
      config.chainId,
      accounts[0].address,
      accounts[0].address
    );
    response.address = accounts[0].address;
    // response.balance = await this.client.bank.balances(accounts[0].address);
    response.info = keys;
    response.hash = hash.signature;
    return response;
  }

  runQuery(contractAddress: string, queryMsg: any): Promise<any> {
    return this.wasmClient.queryContractSmart(contractAddress, queryMsg);
  }

  async runExecute(
    contractAddress: string,
    executeMsg: any,
    option?: { memo?: string; funds?: string }
    // ): Promise<BroadcastTxResult> {
  ): Promise<any> {
    // const keplr = await getKeplr();
    // await keplr.enable(config.chainId);
    const offlineSigner = window.getOfflineSigner(config.chainId);
    // const offlineSigner = await keplr.getOfflineSignerAuto(config.chainId);
    const accounts = await offlineSigner.getAccounts();

    const client = await SigningCosmWasmClient.connectWithSigner(
      config.rpcEndpoint,
      offlineSigner,
      {
        gasPrice: GasPrice.fromString(
          `${config["gasPrice"]}${config["microDenom"]}`
        ),
      }
    );

    return client.execute(
      accounts[0].address,
      contractAddress,
      executeMsg,
      "auto",
      option?.memo,
      option?.funds
        ? coins(
            toMicroAmount(option.funds, config["coinDecimals"]),
            config["microDenom"]
          )
        : undefined
    );
  }

  async sendToken(amount: number, recipient: string): Promise<any> {
    if (!amount || !recipient) return;
    const offlineSigner = window.getOfflineSigner(config.chainId);
    const accounts = await offlineSigner.getAccounts();
    const client = await SigningCosmWasmClient.connectWithSigner(
      config.rpcEndpoint,
      offlineSigner,
      {
        gasPrice: GasPrice.fromString(
          `${config["gasPrice"]}${config["microDenom"]}`
        ),
      }
    );
    const result = await client.sendTokens(
      accounts[0].address,
      recipient,
      coins(
        toMicroAmount("" + amount, config["coinDecimals"]),
        config["microDenom"]
      ),
      "auto",
      ""
    );
    assertIsBroadcastTxSuccess({
      transactionHash: result.transactionHash,
      height: result.height,
      code: result.code,
      rawLog: result.rawLog || "",
    });
  }

  async getBalance(address): Promise<any> {
    const offlineSigner = window.getOfflineSigner(config.chainId);
    const accounts = await offlineSigner.getAccounts();

    const client = await SigningCosmWasmClient.connectWithSigner(
      config.rpcEndpoint,
      offlineSigner,
      {
        gasPrice: GasPrice.fromString(
          `${config["gasPrice"]}${config["microDenom"]}`
        ),
      }
    );
    return client.getBalance(address, config["microDenom"]);
  }
}
