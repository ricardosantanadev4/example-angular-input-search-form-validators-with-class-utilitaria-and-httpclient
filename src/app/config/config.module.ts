import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConfigRoutingModule } from './config-routing.module';
import { ConfigComponent } from './containers/config/config.component';
import { AppMaterialModule } from '../shared/app-material/app-material.module';
import { ConfigSearchComponent } from './components/config-search/config-search.component';
import { ConfigListComponent } from './components/config-list/config-list.component';


@NgModule({
  declarations: [
    ConfigComponent,
    ConfigSearchComponent,
    ConfigListComponent
  ],
  imports: [
    CommonModule,
    ConfigRoutingModule,
    AppMaterialModule
  ]
})
export class ConfigModule { }
