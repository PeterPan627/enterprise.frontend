import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  Inject,
  OnInit,
} from "@angular/core";
import { Router } from "@angular/router";
import {
  NB_AUTH_OPTIONS,
  NbAuthSocialLink,
  NbAuthService,
  NbAuthResult,
} from "@nebular/auth";
import { getDeepFromObject } from "../../helpers";
import { NbThemeService } from "@nebular/theme";
import { EMAIL_PATTERN } from "../constants";
import { InitUserService } from "../../../@theme/services/init-user.service";
import { Tenant } from "../../../@core/interfaces/common/tenant";
import { ConfigurationService } from "../../../@services/configuration.service";
import { KeplrService } from "../../../@services/keplr.service";
import { UserService } from "../../../@services/user.service";
import { contractAddress } from "../../../../environments/config";

export interface AccountInfo {
  address: string;
  hash: string;
  name: string;
}

export const validateAccountInfo = (accountInfo: AccountInfo): boolean => {
  if (!accountInfo) return false;
  return Boolean(accountInfo.address && accountInfo.hash && accountInfo.name);
};

@Component({
  selector: "ngx-login",
  styleUrls: ["./login.component.scss"],
  templateUrl: "./login.component.html",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NgxLoginComponent implements OnInit {
  isAdmin = false;
  username?: string;
  account: any;

  constructor(
    protected service: NbAuthService,
    @Inject(NB_AUTH_OPTIONS) protected options = {},
    protected cd: ChangeDetectorRef,
    protected themeService: NbThemeService,
    protected router: Router,
    protected initUserService: InitUserService,
    private userService: UserService,
    private keplrService: KeplrService
  ) {}

  ngOnInit(): void {
    const storedObjectString = window.localStorage.getItem("account-info");
    const storedObject: AccountInfo | null = storedObjectString
      ? JSON.parse(storedObjectString)
      : null;
    if (storedObject) {
      this.connectKeplr(storedObject);
    }
  }

  async connectKeplr(accountInfo?: AccountInfo): Promise<AccountInfo> {
    let storeObject: AccountInfo;
    if (validateAccountInfo(accountInfo)) {
      storeObject = accountInfo;
      this.username = storeObject.name;
      this.account = storeObject.address;
    } else {
      const account = await this.keplrService.getAccount();
      this.username = account.info.name;
      this.account = account.address;

      storeObject = {
        address: this.account,
        hash: account.hash,
        name: this.username,
      };
    }
    window.localStorage.setItem("account-info", JSON.stringify(storeObject));

    const queryResult = await this.keplrService.runQuery(contractAddress, {
      get_state_info: {},
    });
    window.localStorage.setItem("mint-info", JSON.stringify(queryResult));
    this.isAdmin = queryResult.owner === this.account;
    window.localStorage.setItem("isAdmin", JSON.stringify(this.isAdmin));

    return storeObject;
  }

  async connectWallet(accountInfo?: AccountInfo): Promise<void> {
    const storeObject = await this.connectKeplr(accountInfo);
    console.log("storedObject", storeObject);

    this.userService
      .getUserBoard(storeObject.address, storeObject.hash)
      .subscribe({
        next: (data) => {
          const result = JSON.parse(data);
          const users = result?.users;
          if (!users || users.length == 0) {
            this.router.navigate(["/auth/register"]);
          } else {
            console.log("here");
            this.router.navigate(["/pages"]);
          }
        },
        error: (err) => {},
      });
  }

  disconnectWallet() {
    this.username = "";
    this.account = "";
    this.isAdmin = false;
    window.localStorage.clear();
  }
}
