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
import { AppService } from "../../../@services/app.service";

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
  public tenant: Tenant;
  isAdmin = false;
  username?: string;
  account: any;
  strategy: string = this.getConfigValue("forms.login.strategy");

  constructor(
    protected service: NbAuthService,
    @Inject(NB_AUTH_OPTIONS) protected options = {},
    protected cd: ChangeDetectorRef,
    protected themeService: NbThemeService,
    protected router: Router,
    protected initUserService: InitUserService,
    private userService: UserService,
    private appService: AppService,
    private configuration: ConfigurationService,
    private keplrService: KeplrService
  ) {
    this.tenant = this.configuration.configuration.tenant;
  }

  ngOnInit(): void {
    const isLogged = this.appService.isLogged();
    if (isLogged) this.router.navigate(["/pages"]);
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

    const queryResult = await this.keplrService.runQuery(contractAddress, {
      get_state_info: {},
    });
    this.appService.setMintInfo({
      ...queryResult,
      count: Number(queryResult.count),
      max_nft: Number(queryResult.max_nft),
      price: Number(queryResult.price),
      total_nft: Number(queryResult.total_nft),
    });

    return storeObject;
  }

  async connectWallet(accountInfo?: AccountInfo): Promise<void> {
    const storeObject = await this.connectKeplr(accountInfo);

    this.userService
      .getUserBoard(storeObject.address, storeObject.hash)
      .subscribe({
        next: (data) => {
          const result = JSON.parse(data);
          const users = result?.users;
          if (!users || users.length == 0) {
            window.localStorage.setItem(
              "account-info",
              JSON.stringify(storeObject)
            );
            this.router.navigate(["/auth/register"]);
          } else {
            const user = users[0];
            this.appService.setUser(user, storeObject);
            const isAdmin = this.appService.getIsAdmin();
            if (!isAdmin && !!user.isWhiteListed) {
              this.router.navigate(["/auth/whitelist"]);
            } else {
              this.appService.setLogged(true);
              this.router.navigate(["/pages"]);
            }
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

  getConfigValue(key: string): any {
    return getDeepFromObject(this.options, key, null);
  }
}
