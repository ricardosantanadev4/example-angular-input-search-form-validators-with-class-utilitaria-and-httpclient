import { Component, EventEmitter, Output } from '@angular/core';
import { NonNullableFormBuilder, Validators } from '@angular/forms';
import { FormUtilsService } from 'src/app/shared/forms/form-utils.service';

@Component({
  selector: 'app-config-search',
  templateUrl: './config-search.component.html',
  styleUrls: ['./config-search.component.scss']
})
export class ConfigSearchComponent {

  formSearch = this.formBuilder.control('', [Validators.required, Validators.minLength(1)]);

  @Output() newConfigEvent = new EventEmitter<string>();

  constructor(private formBuilder: NonNullableFormBuilder, public formUtils: FormUtilsService) { }

  onSearch() {
    // console.log(this.formSearch.value);
    return this.newConfigEvent.emit(this.formSearch.value);
  }
}