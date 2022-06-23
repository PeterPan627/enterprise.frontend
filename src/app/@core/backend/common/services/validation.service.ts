import { AbstractControl } from '@angular/forms';
import { IntakeFormData } from '../../../interfaces/common/intakeFormData';

export class CustomValidator {
    static validate(service: any, id: string, data: IntakeFormData) {
        return (ctrl: AbstractControl) => {
            data.value = ctrl.value;
            return service.update(id, data)
                .toPromise()
                .then((response) => {
                    return response ? null : { success : false };
                })
                .catch(() => {
                    return { success : false };
                });
        };
    }
}
