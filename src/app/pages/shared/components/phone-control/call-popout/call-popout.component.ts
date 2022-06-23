
import { OnInit, OnDestroy, Component, Input } from '@angular/core';
import { Device, Connection } from 'twilio-client';
import { NbTokenService } from '@nebular/auth';
import { CommunicationsService } from '../../../../../@core/backend/common/services/communications.service';
import { Observable } from 'rxjs';
import { PhoneDeviceService } from '../../../../../@services/phone-device.service';
import { CallHistoryItem, Direction } from '../../../../../@core/interfaces/common/communications.data';
import * as moment from 'moment';

@Component({
    selector: 'ngx-call-popout',
    templateUrl: './call-popout.component.html',
    styleUrls: ['./call-popout.component.scss'],
})
export class CallPopOutComponent implements OnInit {
    @Input() recipient: string;
    @Input() phoneNumber: string;
    @Input() identifier: string;
    public twilioToken: string = '';
    public calls: CallHistoryItem[] = [];
    private connection: Connection;

    public constructor(
        private tokenService: NbTokenService,
        private phoneService: PhoneDeviceService,
        private communicationService: CommunicationsService,
    ) { }

    ngOnInit(): void {
        this.communicationService.getPhoneCalls(this.phoneNumber).subscribe( c => {
            for (let i = 0 ; i < c.length; i++) {
                const duration = moment.duration(c[i].createdDate, c[i].endDate);
                const call: CallHistoryItem =  {
                    direction: (c[i].direction === 'incoming' ? Direction.incoming : Direction.outgoing),
                    date: new Date(c[i].createdDate + 'Z'),
                    duration: duration.humanize(),
                };
                this.calls.push(call);
            }
        });
    }

    hangUp() {
        if (this.connection != null) {
            this.connection.disconnect();
        }
    }

    callClient() {
        this.tokenService.get().subscribe(t => {
            this.connection = this.phoneService.Device.connect({
                'UserToken': t.getValue(),
                'To': this.phoneNumber,
                'ClientIdentifier': this.identifier,
                'ClientName': this.recipient,
                'Notes': '',
            });
        });
    }
}
