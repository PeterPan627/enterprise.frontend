import { HttpParams } from "@angular/common/http";
import { NbThemeService } from "@nebular/theme";
import { ConfigurationService } from "./configuration.service";
import { Configuration } from "../@core/interfaces/common/configuration";
import { Tenant } from "../@core/interfaces/common/tenant";
import { ConfigurationApi } from "../@core/backend/common/api/configuration.api";
import { Injector } from "@angular/core";
import { InitUserService } from "../@theme/services/init-user.service";
import { AppService } from "./app.service";
import { AccountInfo } from "../@auth/components";
import { UserService } from "./user.service";
import { contractAddress } from "../../environments/config";
import { KeplrService } from "./keplr.service";

export function initApp(
  injector: Injector,
  api: ConfigurationApi,
  configService: ConfigurationService,
  themeService: NbThemeService,
  appService: AppService,
  userService: UserService,
  keplrService: KeplrService
) {
  const host = window.location.host;
  const subdomain = host.split(".")[0];
  const storedObjectString = window.localStorage.getItem("account-info");
  const storedObject: AccountInfo | null = storedObjectString
    ? JSON.parse(storedObjectString)
    : null;

  const httpParams = new HttpParams().set("Tenant", subdomain);
  const response = () =>
    api
      .get(httpParams)
      .then((config) => {
        configService.configuration = config;
        themeService.changeTheme(configService.configuration.tenant.theme);
      })
      .then(() => {
        new Promise<any>((resolve: Function) => {
          const initUserService = injector.get(InitUserService);
          initUserService.initCurrentUser().subscribe(
            () => {},
            () => resolve(),
            () => resolve()
          ); // a place for logging error
        });
      })
      .catch((e) => {
        const googleLogo =
          "https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png";
        const configuration = {} as Configuration;
        configuration.tenant = {} as Tenant;
        configuration.tenant.name = "Google";
        configuration.tenant.logo = googleLogo;
        configuration.tenant.theme = "corporate";
        configuration.tenant.features = [
          {
            name: "notifications",
            api: "https://sdflksdlfalsdkfj",
          },
        ];

        configService.configuration = configuration;
        themeService.changeTheme(configuration.tenant.theme);
      })
      .finally(() => {
        if (storedObject) {
          userService
            .getUserBoard(storedObject.address, storedObject.hash)
            .subscribe({
              next: async (data) => {
                const result = JSON.parse(data);
                const users = result?.users;
                if (!users || users.length == 0) {
                  appService.clearUser();
                } else {
                  appService.setUser(users[0], storedObject);
                }
                const queryResult = await keplrService.runQuery(
                  contractAddress,
                  {
                    get_state_info: {},
                  }
                );
                appService.setMintInfo({
                  ...queryResult,
                  count: Number(queryResult.count),
                  max_nft: Number(queryResult.max_nft),
                  price: Number(queryResult.price),
                  total_nft: Number(queryResult.total_nft),
                });
              },
              error: (err) => {},
            });
        }
      });
  return response;
}
