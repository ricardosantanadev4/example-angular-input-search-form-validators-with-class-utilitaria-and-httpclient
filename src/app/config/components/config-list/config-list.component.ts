import { Component, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { Config } from '../../models/config';

@Component({
  selector: 'app-config-list',
  templateUrl: './config-list.component.html',
  styleUrls: ['./config-list.component.scss']
})
export class ConfigListComponent {
  displayedColumns: string[] = ['heroesUrl', 'textfile', 'date'];
  @Input() configList$!: Observable<Config[]>;
}
