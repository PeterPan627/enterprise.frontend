import { Injectable } from "@angular/core";
import { AccountInfo } from "../@auth/components";

export type User = {
  address: string;
  hash: string;
  first_name: string;
  last_name: string;
  email: string;
  entity_id: string;
  isWhiteListed: string;
  registered: boolean;
};

export type MintInfo = {
  count: number;
  denom: string;
  image_url: string;
  max_nft: number;
  nft_address: string;
  owner: string;
  price: number;
  total_nft: number;
  url: string;
};
@Injectable()
export class AppService {
  userInfo: User;
  mintInfo: MintInfo;
  isAdmin: boolean;
  logged: boolean;

  constructor() {
    this.userInfo = null;
  }

  setUser(user: User, walletInfo: AccountInfo): void {
    this.userInfo = user;
    this.isAdmin = this.mintInfo.owner === this.userInfo?.address;
    window.localStorage.setItem("account-info", JSON.stringify(walletInfo));
  }

  clearUser() {
    this.userInfo = null;
    window.localStorage.clearItem("account-info");
  }

  getUser(): User {
    return this.userInfo;
  }

  isLogged(): boolean {
    return this.logged;
  }

  setLogged(logged: boolean) {
    this.logged = logged;
  }

  setMintInfo(mintInfo: MintInfo) {
    this.mintInfo = mintInfo;
    this.isAdmin = this.mintInfo.owner === this.userInfo?.address;
    window.localStorage.setItem("isAdmin", JSON.stringify(this.isAdmin));
    window.localStorage.setItem("mint-info", JSON.stringify(mintInfo));
  }

  getMintInfo() {
    return this.mintInfo;
  }

  getIsAdmin() {
    return this.isAdmin;
  }
}
