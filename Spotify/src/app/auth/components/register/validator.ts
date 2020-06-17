import { AbstractControl } from "@angular/forms";

export function emailValidator(control: AbstractControl) {
  if (control && (control.value !== null || control.value !== undefined)) {
    const emailConfirmationValue = control.value;
    const emailControl = control.root.get("email");
    if (emailControl) {
      const emailValue = emailControl.value;
      if (emailValue != emailConfirmationValue) {
        return {
          isError: true,
        };
      }
    }
  }

  return null;
}
