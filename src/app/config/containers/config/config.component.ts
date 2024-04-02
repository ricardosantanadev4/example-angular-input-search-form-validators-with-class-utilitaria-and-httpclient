import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Config } from '../../models/config';
import { ConfigService } from '../../services/config.service';

@Component({
  selector: 'app-config',
  templateUrl: './config.component.html',
  styleUrls: ['./config.component.scss']
})
export class ConfigComponent {

  config$!: Observable<Config[]>;

  constructor(private configService: ConfigService) {
    this.showConfig('');
  }

  showConfig(value: string) {
    console.log(value);
    this.config$ = this.configService.getConfig(value);
  }
}
