import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'passwordmask' })
export class PasswordMaskPipe implements PipeTransform {
    transform(phrase: string) {    
        return phrase.replace(phrase, "xxxxxxx");
    }
}