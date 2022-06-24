import { Injectable } from "@angular/core";

export type User = {
  address: string;
  hash: string;
  first_name: string;
  last_name: string;
  email: string;
  entity_id: string;
};

@Injectable()
export class AppService {
  userInfo: User;

  constructor() {
    this.userInfo = null;
  }

  setUser(user: User): void {
    this.userInfo = user;
  }

  getUser(): User {
    return this.userInfo;
  }

  isLogged(): boolean {
    return Boolean(
      this.userInfo?.address &&
        this.userInfo?.hash &&
        this.userInfo?.first_name &&
        this.userInfo?.last_name &&
        this.userInfo?.entity_id &&
        this.userInfo?.email
    );
  }
}
