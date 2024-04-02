import { Component, EventEmitter, Output } from '@angular/core';
import { NonNullableFormBuilder } from '@angular/forms';

@Component({
  selector: 'app-config-search',
  templateUrl: './config-search.component.html',
  styleUrls: ['./config-search.component.scss']
})
export class ConfigSearchComponent {

  formSearch = this.formBuilder.control('');

  @Output() newConfigEvent = new EventEmitter<string>();

  constructor(private formBuilder: NonNullableFormBuilder) { }

  onSearch() {
    // console.log(this.formSearch.value);
    return this.newConfigEvent.emit(this.formSearch.value);
  }
}