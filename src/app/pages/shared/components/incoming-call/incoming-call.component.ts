import { Component, HostBinding, Input, Output, EventEmitter } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
    selector: 'ngx-incoming-call',
    templateUrl: './incoming-call.component.html',
    styleUrls: ['./incoming-call.component.scss'],
    animations: [
        trigger('state', [
            state('ringing', style({transform: 'translateY(10%)'})),
            state('not-ringing', style({transform: 'translateY(0%)', opacity: 0})),
            transition('* => *', animate('1000ms ease-in')),
        ]),
    ],
})
export class IncomingCallComponent {
    @HostBinding('@state')
    state: 'ringing' | 'not-ringing' = 'not-ringing';

    @Input()
    get caller(): string {
        return this._caller;
    }
    set caller(caller: string) {
        this._caller = caller;
        this.state = 'ringing';
    }
    private _caller: string;

    @Output()
    onAccept = new EventEmitter();

    @Output()
    onReject = new EventEmitter();

    answer() {
        this.onAccept.emit();
    }

    reject() {
        this.onReject.emit();
    }
}
