const config = {
  "juno-mainnet": {
    chainName: "Juno Mainnet",
    chainId: "juno-1",
    rpcEndpoint: "https://rpc-juno.itastakers.com/",
    restEndpoint: "https://lcd-juno.itastakers.com/",
    faucetEndpoint: "",
    addressPrefix: "juno",
    microDenom: "ujuno",
    coinDecimals: "6",
    gasPrice: 0.025,
    denom: "JUNO",
  },
  "juno-uni": {
    chainName: "Juno Testnet - Uni",
    chainId: "uni-3",
    rpcEndpoint: "https://rpc.uni.juno.deuslabs.fi",
    restEndpoint: "https://lcd.uni.juno.deuslabs.fi",
    addressPrefix: "juno",
    microDenom: "ujunox",
    coinDecimals: "6",
    gasPrice: 0.025,
    denom: "JUNO",
  },
  "juno-local-test": {
    chainName: "Juno Local Test",
    chainId: "testing",
    rpcEndpoint: "http://localhost:26657",
    restEndpoint: "http://localhost:1317",
    faucetEndpoint: "http://localhost:8000",
    addressPrefix: "juno",
    microDenom: "ujunox",
    coinDecimals: "6",
    gasPrice: 0.025,
    denom: "JUNO",
  },
};

export default config["juno-uni"];

export const contractAddress =
  "juno1z85xze7aqu07gemy35ht7yjtctjrpuhplmhfedq4hr3w6740kejqzhq2pt";

export const API_URL = "http://localhost:4000/api/";
