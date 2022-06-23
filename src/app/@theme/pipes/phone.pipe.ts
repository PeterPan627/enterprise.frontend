import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'ngxPhone' })
export class PhonePipe implements PipeTransform {
    transform(input: string): string {
        const cleaned = ('' + input).replace(/\D/g, '');
        const match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/);

        if (match) {
            return '(' + match[1] + ') ' + match[2] + '-' + match[3];
        }
        return input;
    }
}
