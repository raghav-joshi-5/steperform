import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function phoneNumberValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const phoneNumber = control.value;
    const phoneNumberPattern = /^[6-9]\d{9}$/;
    if (phoneNumber && !phoneNumberPattern.test(phoneNumber)) {
      return { invalidPhoneNumber: true };
    }
    return null;
  };
}
