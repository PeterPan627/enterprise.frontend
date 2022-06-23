import { Injectable, ComponentFactoryResolver, ApplicationRef, Injector } from '@angular/core';
import { NgElement, WithProperties } from '@angular/elements';
import { Device, Connection } from 'twilio-client';
import { CommunicationsService } from '../@core/backend/common/services/communications.service';
import { IncomingCallComponent } from '../pages/shared/components/incoming-call/incoming-call.component';
import { ConfigurationService } from './configuration.service';
import { ConnectedCallComponent } from '../pages/shared/components/connected-call/connected-call.component';

@Injectable({
    providedIn: 'root',
  })
  export class PhoneDeviceService {
    private featureName = 'sms-iq';
    public Device: Device;

    constructor(
      private communicationsService: CommunicationsService,
      private configurationSevice: ConfigurationService,
    ) {
      if (this.hasCommunicationsService()) {
        this.communicationsService.getAccessToken().subscribe(r => {
          try {
            this.Device = new Device(r.token);
          } catch (ex) { }
        }, err => {    });
      }
    }

    public init( initalizers: {
      onCancel?: (conn: Connection) => void,
      onConnect?: (conn: Connection) => void,
      onDisconnect?: (conn: Connection) => void,
      onIncoming?: (conn: Connection) => void,
    } = null) {
      if (this.hasCommunicationsService()) {
        this.communicationsService.getAccessToken().subscribe(r => {
          try {
            this.Device = new Device(r.token);

            this.Device.on('offline', () => {
              this.refresh();
            });

            this.Device.on('ready', () => {

              this.Device.on('cancel', (conn: Connection) => {
                this.closeIncomingCall();
                if (initalizers.onCancel != null) {
                  initalizers.onCancel(conn);
                }
              });

              this.Device.on('connect', (conn: Connection) => {
                let participant: string = '';
                if (conn.customParameters.size > 0) {
                  participant = conn.customParameters.get('ClientName');
                } else {
                  participant = conn.parameters['phonenumber'];
                }

                this.showConnectedCall(participant, (num) => {
                  conn.sendDigits(num);
                }, () => {
                  conn.disconnect();
                });
                if (initalizers.onConnect != null) {
                  initalizers.onConnect(conn);
                }
              });

              this.Device.on('incoming', (conn: Connection) => {
                let caller: string = '';
                if (conn.customParameters.size > 0) {
                  caller = conn.customParameters.get('ClientName');
                } else {
                  caller = conn.parameters['phonenumber'];
                }
                this.showIncomingCall(caller, () => { conn.accept(); }, () => { conn.reject(); } );
                if (initalizers.onIncoming != null) {
                  initalizers.onIncoming(conn);
                }
              });

              this.Device.on('disconnect', (conn: Connection) => {
                this.closeConnectedCall();
                if (initalizers.onDisconnect != null) {
                  initalizers.onDisconnect(conn);
                }
              });
            });
          } catch (ex) { }
        }, err => {  });
      }
    }

    private hasCommunicationsService(): boolean {
      const feature = this.configurationSevice.configuration.tenant.features.find(f => f.name === this.featureName);
      return !(feature === null || feature === undefined);
    }

    private showIncomingCall(caller: string, onAccept?: () => void, onReject?: () => void) {
      const incomingCall: NgElement & WithProperties<IncomingCallComponent> = document.createElement('ngx-incoming-call') as any;
      incomingCall.id = 'incoming-call-id';

      incomingCall.addEventListener('onAccept', () => {
        if (onAccept != null) {
          onAccept();
        }
        this.closeIncomingCall();
      });

      incomingCall.addEventListener('onReject', () => {
        if (onReject != null) {
          onReject();
        }
        this.closeIncomingCall();
      });

      incomingCall.caller = caller;

      document.body.appendChild(incomingCall);
    }

    private closeIncomingCall() {
      if (document.getElementById('incoming-call-id') !== null) {
        const incomingCall = document.getElementById('incoming-call-id');
        document.body.removeChild(incomingCall);
      }
    }

    private showConnectedCall(participant: string, onDial?: (num) => void, onHangup?: () => void ) {

      const connectedCall: NgElement & WithProperties<ConnectedCallComponent> = document.createElement('ngx-connected-call') as any;

      connectedCall.id = 'connected-call-id';

      connectedCall.participant = participant;

      connectedCall.addEventListener('onDial', (num: CustomEvent) => {
        if (onDial != null) {
          onDial(num.detail);
        }
      });

      connectedCall.addEventListener('onHangup', () => {
        if (onHangup != null) {
          onHangup();
        }
      });

      document.body.appendChild(connectedCall);
    }

    private closeConnectedCall() {
      if (document.getElementById('connected-call-id') !== null) {
        const connectedCall = document.getElementById('connected-call-id');
        document.body.removeChild(connectedCall);
      }
    }

    public refresh() {
      if (this.hasCommunicationsService()) {
        this.communicationsService.getAccessToken().subscribe(r => {
          this.Device.setup(r.token);
        }, err => {  });
      }
    }

    public destroy() {
      if (!(this.Device === null || this.Device === undefined)) {
        this.Device.destroy();
      }
    }
  }
