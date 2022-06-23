import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Direction, EmailMessage, TextMessage } from '../../../../../@core/interfaces/common/communications.data';
import { CommunicationsService } from '../../../../../@core/backend/common/services/communications.service';
import { NbToastrService, NbGlobalPhysicalPosition } from '@nebular/theme';

@Component({
    selector: 'ngx-email-popout',
    templateUrl: './email-popout.component.html',
    styleUrls: ['./email-popout.component.scss'],
})
export class EmailPopOutComponent implements OnInit, OnDestroy {
    @Input() recipient: string;
    @Input() email: string;
    @Input() identifier: string;
    form: FormGroup;
    messages: any;
    messageData: any = {};

    constructor(
        private commService: CommunicationsService,
        private fb: FormBuilder,
        private toastService: NbToastrService,
    ) {
    }

    autogrow() {
        const textArea = document.getElementById('messageTextbox');
        textArea.style.overflow = 'hidden';
        textArea.style.height = '0px';
        textArea.style.height = textArea.scrollHeight + 'px';
        let height = parseInt(textArea.style.height, 10);
        if (height > 150) {
            height = 150;
            textArea.style.height = height + 'px';
            textArea.style.overflow = 'auto hidden';
        }
    }



    ngOnInit() {
        this.form = this.initForm(this.fb);
    }

    ngOnDestroy(): void {

    }

    initForm(fb: FormBuilder) {
        const form = fb.group({
            messageEmail: fb.control('', [Validators.required, Validators.minLength(1)]),
        }, { updateOn: 'change' });

        return form;
    }

    sendEmail($event) {
        const textMessage: TextMessage = {
            from: '',
            to: this.email,
            message: $event.message,
            multiMedia: $event.files.map((file) => {
                return file.src;
            }),
        };
        this.commService.getEmail(this.email).subscribe(c => {
            this.form.reset();


        }, () => {
            this.toastService.danger('Unfortunately, your Email was not sent', 'Error Sending Email', {
                icon: 'email-outline',
                position: NbGlobalPhysicalPosition.TOP_RIGHT,
                hasIcon: true,
            });
        });
    }

}




