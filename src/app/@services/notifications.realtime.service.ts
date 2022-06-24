import { Injectable } from "@angular/core";
import * as signalR from "@microsoft/signalr";
import { Subject } from "rxjs";
import { map } from "rxjs/operators";
import { ConfigurationService } from "./configuration.service";
import { NbAuthService, NbAuthToken } from "@nebular/auth";

@Injectable({
  providedIn: "root",
})
export class NotificationsRealTimeService {
  private featureName = "notifications";
  private hubConnection: signalR.HubConnection;
  notifications = new Subject<any>();
  alerts = new Subject<any>();
  endPoint: string;

  constructor(
    private configService: ConfigurationService,
    private authService: NbAuthService
  ) {
    const notification = this.configService.configuration.tenant.features.find(
      (f) => f.name === this.featureName
    );
    this.endPoint = notification.api;
  }

  public startConnection = () => {
    Object.defineProperty(WebSocket, "OPEN", { value: 1 });
    this.hubConnection = new signalR.HubConnectionBuilder()
      .withUrl(`${this.endPoint}/notifications.notifications-hub`, {
        accessTokenFactory: async () => {
          return this.authService
            .getToken()
            .pipe(map((token: NbAuthToken) => token.getValue()))
            .toPromise();
        },
      })
      .withAutomaticReconnect()
      .build();
    this.hubConnection
      .start()
      .then((a) => {})
      .catch((err) => {});

    this.hubConnection.on("Notify", (notification) => {
      this.notifications.next(notification);
    });

    this.hubConnection.on("Alert", (alert) => {
      this.alerts.next(alert);
    });
  };

  public stopConnection = () => {
    if (this.hubConnection) {
      this.hubConnection.stop();
      this.hubConnection = null;
    }
  };
}
