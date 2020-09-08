import { FormGroup, ValidationErrors, Validator} from '@angular/forms';
import {Injectable} from '@angular/core';

@Injectable({ providedIn: 'root' })
export class MatchPassword implements Validator {
  public validate(formGroup: FormGroup ): ValidationErrors | null {
    const { password, passwordConfirmation } = formGroup.value;
    if (password === passwordConfirmation) {
      return null;
    } else {
      return { passwordsDontMatch: true };
    }
  }
}
