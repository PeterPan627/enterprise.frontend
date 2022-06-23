import { Component, Input, TemplateRef, OnDestroy, forwardRef, ViewChild } from '@angular/core';
import { NbDialogConfig, NbDialogService, NbWindowService, NbWindowConfig, NbWindowRef, NbDialogRef } from '@nebular/theme';
import { ConfigurationService } from '../../../../@services/configuration.service';
import { NbRoleProvider } from '@nebular/security';
import { ROLES } from '../../../../@auth/roles';
import { FormControl, NG_VALUE_ACCESSOR, ControlValueAccessor, FormControlDirective, ControlContainer } from '@angular/forms';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
@Component({
    selector: 'ngx-phone-control',
    styleUrls: ['./phone-control.component.scss'],
    templateUrl: './phone-control.component.html',
    providers: [
        {
          provide: NG_VALUE_ACCESSOR,
          useExisting: forwardRef(() => PhoneControlComponent),
          multi: true,
        },
    ],
})
export class PhoneControlComponent implements OnDestroy, ControlValueAccessor {

    public featureDisabled: boolean = false;
    private smsRef: NbWindowRef;
    private callRef: NbWindowRef;
    private smsSalesPage: NbDialogRef<any>;
    private destroy$ = new Subject();
    get phoneNumber() { return this.control; }

    @ViewChild(FormControlDirective, {static: true}) formControlDirective: FormControlDirective;
    @Input() formControl: FormControl;
    @Input() formControlName: string;
    @Input() recipient: string;
    @Input() identifier: string;
    @Input() isMobile: boolean = false;

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
        if (this.smsSalesPage != null) {
            this.smsSalesPage.close();
        }
        if (this.smsRef != null) {
            this.smsRef.close();
        }
        if (this.callRef != null) {
            this.callRef.close();
        }
        this.destroy$.next();
        this.destroy$.complete();
    }

    isValidPhoneNumber() {
        // we're defining a valid phone number as not being empty
        return !(this.phoneNumber.value === null || this.phoneNumber.value === undefined) && this.phoneNumber.value.length >= 10;
    }

    showCallPopout(dialog: TemplateRef<any>) {
        if (this.featureDisabled) {
            alert('This feature hasn\'t been paid for yet');
        } else {
            if (this.callRef == null) {
                this.callRef = this.windowService.open(dialog, new NbWindowConfig({
                    title: this.recipient,
                    hasBackdrop: true,
                    closeOnBackdropClick: false,
                    closeOnEsc: true,
                  }));
                this.callRef.onClose.pipe(takeUntil(this.destroy$)).subscribe(  () => {
                    this.callRef =  null;
                });
            } else {
                this.callRef.maximize();
            }
        }
    }

    showSMSPopout(dialog: TemplateRef<any>) {
        if (this.featureDisabled) {
            if (this.currentRole !== ROLES.ADMIN) {
                alert('This feature hasn\'t been paid for yet');
            } else {
               this.smsSalesPage = this.dialogService.open(dialog, new NbDialogConfig({
                    autoFocus: true,
                    closeOnEsc: true,
                    closeOnBackdropClick: true,
                }));
                this.smsSalesPage.onClose.pipe(takeUntil(this.destroy$)).subscribe( () => {
                    this.smsSalesPage = null;
                });
            }
        } else {
            if (this.smsRef == null) {
                this.smsRef = this.windowService.open(dialog, new NbWindowConfig({
                    title: this.recipient,
                    hasBackdrop: true,
                    closeOnBackdropClick: false,
                    closeOnEsc: true,
                  }));
                this.smsRef.onClose.pipe(takeUntil(this.destroy$)).subscribe(  () => {
                    this.smsRef =  null;
                });
            } else {
                this.smsRef.maximize();
            }
        }
    }
}
