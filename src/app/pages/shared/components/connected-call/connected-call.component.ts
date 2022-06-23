import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Connection } from 'twilio-client';

@Component({
    selector: 'ngx-connected-call',
    templateUrl: './connected-call.component.html',
    styleUrls: ['./connected-call.component.scss']
})
export class ConnectedCallComponent {
    private _minimized: boolean = false;
    @Input()
    get participant(): string {
        return this._participant;
    }
    set participant(participant: string) {
        this._participant = participant;
    }
    private _participant: string;

    get DialedDigits(): string {
        if (this._dialedDigits.length >= 13) {
            return '...' + this._dialedDigits.substr( this._dialedDigits.length - 10);
        }
        return this._dialedDigits;
    }
    private _dialedDigits: string = '';

    @Input()
    connection: Connection;

    @Output()
    onHangup = new EventEmitter();

    hangUp() {
        this.onHangup.emit();
    }

    toggle_Minimization() {
        this._minimized = !this._minimized;
    }

    delete() {
        if (this._dialedDigits.length > 0) {
            this._dialedDigits = this._dialedDigits.slice(0, -1);
        }
    }

    dial(num) {
        this._dialedDigits = this._dialedDigits.concat(num);
        this.onDial.emit(num);
    }

    isMini() {
        return this._minimized;
    }

    @Output()
    onDial = new EventEmitter();

    hasDigits() {
        return this._dialedDigits.length > 0;
    }

}
