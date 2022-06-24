import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { DataSource } from "ng2-smart-table/lib/lib/data-source/data-source";
import { ServerDataSource } from "ng2-smart-table";
import { ConfigurationService } from "../../../../@services/configuration.service";

export class ExternalHttpService {
  private _apiUrl: string;
  get apiUrl(): string {
    return `${this._apiUrl}/api`;
  }

  constructor(
    private http: HttpClient,
    private config: ConfigurationService,
    private featureName: string = ""
  ) {
    try {
      const feature = this.config.configuration.tenant.features.find(
        (f) => f.name === this.featureName
      );
      if (feature === null || feature === undefined) {
        this._apiUrl = this.config.configuration.tenant.api;
      } else {
        this._apiUrl = feature.api;
      }
    } catch (e) {
      console.error("error", e);
    }
  }

  getServerDataSource(uri: string): DataSource {
    const source = new ServerDataSource(this.http, {
      endPoint: `${this.apiUrl}/${uri}`,
      dataKey: "",
      pagerPageKey: "pageNumber",
      pagerLimitKey: "pageSize",
      filterFieldKey: "filterBy#field#",
      sortFieldKey: "sortBy",
      sortDirKey: "orderBy",
    });
    return source;
  }

  get(endpoint: string, options?): Observable<any> {
    return this.http.get(`${this.apiUrl}/${endpoint}`, options);
  }

  post(endpoint: string, data, options?): Observable<any> {
    return this.http.post(`${this.apiUrl}/${endpoint}`, data, options);
  }

  put(endpoint: string, data, options?): Observable<any> {
    return this.http.put(`${this.apiUrl}/${endpoint}`, data, options);
  }

  delete(endpoint: string, options?): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${endpoint}`, options);
  }

  patch(endpoint: string, data, options?): Observable<any> {
    return this.http.patch(`${this.apiUrl}/${endpoint}`, data, options);
  }
}
