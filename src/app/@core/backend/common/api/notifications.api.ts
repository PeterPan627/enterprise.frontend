import { Injectable } from "@angular/core";
import { ExternalHttpService } from "./external-http.service";
import { HttpClient } from "@angular/common/http";
import { ConfigurationService } from "../../../../@services/configuration.service";
import { Observable } from "rxjs";

@Injectable()
export class NotificationsApi {
  private readonly apiController: string = "notifications";
  private api: ExternalHttpService;
  private readonly featureName: string = "notifications";

  constructor(private http: HttpClient, private config: ConfigurationService) {
    this.api = new ExternalHttpService(
      this.http,
      this.config,
      this.featureName
    );
  }

  get(): Observable<any> {
    return this.api.get(`${this.apiController}`);
  }

  acknowledge(id: number) {
    return this.api.patch(`${this.apiController}/${id}`, {});
  }
}
