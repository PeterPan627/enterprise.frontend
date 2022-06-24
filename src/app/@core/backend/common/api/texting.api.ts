import { Injectable } from "@angular/core";
import { ExternalHttpService } from "./external-http.service";
import { ConfigurationService } from "../../../../@services/configuration.service";
import { HttpClient } from "@angular/common/http";
import { TextMessage } from "../../../interfaces/common/communications.data";

@Injectable()
export class TextMessageApi {
  private readonly featureName: string = "sms-iq";
  private readonly apiController: string = "TextMessage";
  private api: ExternalHttpService;

  constructor(private http: HttpClient, private config: ConfigurationService) {
    this.api = new ExternalHttpService(
      this.http,
      this.config,
      this.featureName
    );
  }

  post(message: TextMessage) {
    const response = this.api.post(`${this.apiController}`, message);
    return response;
  }

  get(phoneNumber: string) {
    const response = this.api.get(`${this.apiController}/${phoneNumber}`);
    return response;
  }
}
