import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

// Example from Stackoverflow
export function lettersOnlyValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const isValid = /^[a-zA-Z\s]+$/.test(control.value);
    return !isValid ? { 'lettersOnly': true } : null;
  };
  
}
export function countryValidator(allowedCountry: string): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } | null => {
      return control.value !== allowedCountry ? { invalidCountry: { value: control.value } } : null;
    };
}
