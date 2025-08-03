import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';
export function dobValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const dob = control.value;
    if (!dob) {
      return null; // Don't validate empty values
    }
    const today = new Date();
    const birthDate = new Date(dob);
    const age = today.getFullYear() - birthDate.getFullYear();
    const monthDifference = today.getMonth() - birthDate.getMonth();
    // Check if the user is at least 21 years old
    if (
      age < 21 ||
      (age === 21 && monthDifference < 0) ||
      (age === 21 &&
        monthDifference === 0 &&
        today.getDate() < birthDate.getDate())
    ) {
      return { underage: true };
    }
    return null;
  };
}
