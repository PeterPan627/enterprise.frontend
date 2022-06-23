import { Injectable } from '@angular/core';
import * as signalR from '@microsoft/signalr';
import { Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import { ConfigurationService } from './configuration.service';
import { NbAuthService, NbAuthToken } from '@nebular/auth';

@Injectable({
  providedIn: 'root',
})
export class CommunicationsChatRealTimeService {
  private featureName = 'sms-iq';
  private hubConnection: signalR.HubConnection;
  chats = new Subject<any>();
  endPoint: string;

  constructor(
    private configService: ConfigurationService,
    private authService: NbAuthService,
  ) {
    const chat = this.configService.configuration.tenant.features.find(f => f.name === this.featureName);
    this.endPoint = chat.api;
  }

  public startConnection = (onConnection: () => void) => {
    Object.defineProperty(WebSocket, 'OPEN', { value: 1 });
    this.hubConnection = new  signalR.HubConnectionBuilder()
    .withUrl(`${this.endPoint}/communications.chat-notifications-hub`, {
      accessTokenFactory: async () => {
        return this.authService.getToken().pipe(
          map((token: NbAuthToken) => token.getValue()),
        ).toPromise();
      },

    })
    .withAutomaticReconnect()
    .build();
    this.hubConnection.start().then(() => {
      onConnection();
    }).catch(err => {

    });


    this.hubConnection.on('ReceiveChatMessage', (message) => {
      this.chats.next(message);
    });
  }

  public joinChatGroup(identifier: string, clientPhoneNumber: string) {
    return this.hubConnection.invoke('JoinChatGroup', identifier, clientPhoneNumber);
  }

  public leaveChatGroup(identifier: string, clientPhoneNumber: string) {
    return this.hubConnection.invoke('LeaveChatGroup', identifier, clientPhoneNumber);
  }

  public stopConnection = () => {
    if (this.hubConnection) {
      this.hubConnection.stop();
      this.hubConnection = null;
    }
  }
}
