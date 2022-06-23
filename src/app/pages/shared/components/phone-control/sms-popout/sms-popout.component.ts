import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Direction, TextMessageHistoryItem, TextMessage } from '../../../../../@core/interfaces/common/communications.data';
import { CommunicationsService } from '../../../../../@core/backend/common/services/communications.service';
import { NbToastrService, NbGlobalPhysicalPosition } from '@nebular/theme';
import { CommunicationsChatRealTimeService } from '../../../../../@services/communications-chat.realtime.service';

@Component({
    selector: 'ngx-sms-popout',
    templateUrl: './sms-popout.component.html',
    styleUrls: ['./sms-popout.component.scss'],
})
export class SmsPopOutComponent implements OnInit, OnDestroy {
    @Input() recipient: string;
    @Input() phoneNumber: string;
    @Input() identifier: string;
    form: FormGroup;
    messages: TextMessageHistoryItem[] = [];

    constructor(
        private commService: CommunicationsService,
        private commSignalr: CommunicationsChatRealTimeService,
        private fb: FormBuilder,
        private toastService: NbToastrService,
    ) {
     }

    autogrow() {
        const textArea = document.getElementById('messageTextbox');
        textArea.style.overflow = 'hidden';
        textArea.style.height = '0px';
        textArea.style.height = textArea.scrollHeight + 'px';
        let height = parseInt(textArea.style.height,  10);
        if (height > 150) {
            height = 150;
            textArea.style.height = height + 'px';
            textArea.style.overflow = 'auto hidden';
        }
      }

    ngOnInit() {
        this.form = this.initForm(this.fb);
        this.commService.getMessages(this.phoneNumber).subscribe(m => {
            for (let i = 0; i < m.length; i++) {
                this.messages.push({
                    message: m[i].message,
                    direction: (m[i].direction === 'incoming' ? Direction.incoming : Direction.outgoing),
                    date: new Date(m[i].createdDate + 'Z'),
                    multiMedia: m.media,
                });
            }
        });
        this.commSignalr.startConnection(() => {
            this.commSignalr.joinChatGroup(this.identifier, this.phoneNumber);
        });
        this.commSignalr.chats.subscribe(m => {
            this.messages.push({
                message: m.message,
                direction: Direction.incoming,
                date: new Date(),
                multiMedia: m.multiMedia,
            });
        });
    }

    ngOnDestroy(): void {
        this.commSignalr.leaveChatGroup(this.identifier, this.phoneNumber).then(() => {
            this.commSignalr.stopConnection();
        }).catch(() => {
            this.commSignalr.stopConnection();
        });
    }

    initForm(fb: FormBuilder) {
        const form = fb.group({
            messageText: fb.control('', [Validators.required, Validators.minLength(1)]),
        }, {updateOn: 'change'});

        return form;
    }

    sendText($event) {
        const textMessage: TextMessage = {
            from: '',
            to: this.phoneNumber,
            message: $event.message,
            multiMedia: $event.files.map((file) => {
                return file.src;
            }),
        };
        this.commService.sendTextMessage(textMessage).subscribe(c => {
            this.form.reset();

            this.messages.push({
                message: textMessage.message,
                direction: Direction.outgoing,
                date: new Date(),
                multiMedia: textMessage.multiMedia,
            });
        }, () => {
            this.toastService.danger('Unfortunately, your text was not sent', 'Error Sending Text', {
                icon: 'email-outline',
                position: NbGlobalPhysicalPosition.TOP_RIGHT,
                hasIcon: true,
            });
        });
    }
}




