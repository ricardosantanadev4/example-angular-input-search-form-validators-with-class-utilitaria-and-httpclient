import { Injectable } from '@angular/core';
import { UntypedFormControl } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class FormUtilsService {

  constructor() { }

  getErrorMessageFromField(field: UntypedFormControl) {
    if (field?.hasError('required')) {
      return 'Você deve inserir um valor';
    }

    if (field?.hasError('minlength')) {
      const requiredLength = field.errors ? field.errors['minlength']['requiredLength'] : 1;
      return `O campo deve conter no mínimo ${requiredLength} caracteres`;
    }

    if (field?.hasError('maxlength')) {
      const requiredLength = field.errors ? field.errors['maxlength']['requiredLength'] : 1;
      return `O campo deve conter no máximo ${requiredLength} caracters`;
    }

    return 'Erro!';
  }
}
