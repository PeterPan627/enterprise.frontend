import { Component, Input, TemplateRef, OnDestroy, forwardRef, ViewChild } from '@angular/core';
import { NbDialogConfig, NbDialogService, NbWindowService, NbWindowConfig, NbWindowRef, NbDialogRef } from '@nebular/theme';
import { ConfigurationService } from '../../../../@services/configuration.service';
import { NbRoleProvider } from '@nebular/security';
import { ROLES } from '../../../../@auth/roles';
import { FormControl, NG_VALUE_ACCESSOR, ControlValueAccessor, FormControlDirective, ControlContainer } from '@angular/forms';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
@Component({
    selector: 'ngx-email-control',
    styleUrls: ['./email-control.component.scss'],
    templateUrl: './email-control.component.html',
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => EmailControlComponent),
            multi: true,
        },
    ],
})
export class EmailControlComponent implements OnDestroy, ControlValueAccessor {

    public featureDisabled: boolean = false;
    private emailRef: NbWindowRef;
    private destroy$ = new Subject();
    private emailSalesPage: NbDialogRef<any>;
    get email() { return this.control; }


    @ViewChild(FormControlDirective, { static: true }) formControlDirective: FormControlDirective;
    @Input() formControl: FormControl;
    @Input() formControlName: string;
    @Input() recipient: string;
    @Input() identifier: string;

    currentRole: string;

    constructor(
        private configService: ConfigurationService,
        private roleProvider: NbRoleProvider,
        private windowService: NbWindowService,
        private dialogService: NbDialogService,
        private controlContainer: ControlContainer,
    ) {
        const feature = this.configService.configuration.tenant.features.find((f) => {
            return f.name === 'sms-iq';
        });
        this.featureDisabled = (feature === null || feature === undefined);
        if (this.featureDisabled) {
            this.roleProvider.getRole().pipe(takeUntil(this.destroy$)).subscribe(r => {
                if (Array.isArray(r)) {
                    this.currentRole = r[0];
                } else {
                    this.currentRole = r.toString();
                }
            });
        }
    }

    get control() {
        return this.formControl || this.controlContainer.control.get(this.formControlName);
    }
    writeValue(val: any): void {
        this.formControlDirective.valueAccessor.writeValue(val);
    }

    registerOnChange(fn: any): void {
        this.formControlDirective.valueAccessor.registerOnChange(fn);
    }

    registerOnTouched(fn: any): void {
        this.formControlDirective.valueAccessor.registerOnTouched(fn);
    }

    setDisabledState?(isDisabled: boolean): void {
        this.formControlDirective.valueAccessor.setDisabledState(isDisabled);
    }

    ngOnDestroy(): void {
        if (this.emailSalesPage != null) {
            this.emailSalesPage.close();
        }
        if (this.emailRef != null) {
            this.emailRef.close();
        }
        if (this.emailRef != null) {
            this.emailRef.close();
        }
        this.destroy$.next();
        this.destroy$.complete();
    }

    isValidEmail() {
        const regularExpression = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return (
            !(this.email.value === null
            || this.email.value === undefined)
            && regularExpression.test(this.email.value));
    }

    showEmailPopout(dialog: TemplateRef<any>) {
        if (this.featureDisabled) {
            if (this.currentRole !== ROLES.ADMIN) {
                alert('This feature hasn\'t been paid for yet');
            } else {
                this.emailSalesPage = this.dialogService.open(dialog, new NbDialogConfig({
                    autoFocus: true,
                    closeOnEsc: true,
                    closeOnBackdropClick: true,
                }));
                this.emailSalesPage.onClose.pipe(takeUntil(this.destroy$)).subscribe(() => {
                    this.emailSalesPage = null;
                });
            }
        } else {
            if (this.emailRef == null) {
                this.emailRef = this.windowService.open(dialog, new NbWindowConfig({
                    title: this.recipient,
                    hasBackdrop: true,
                    closeOnBackdropClick: false,
                    closeOnEsc: true,
                }));
                this.emailRef.onClose.pipe(takeUntil(this.destroy$)).subscribe(() => {
                    this.emailRef = null;
                });
            } else {
                this.emailRef.maximize();
            }
        }
    }
}
