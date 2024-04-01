import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'config',
    loadChildren: () => import('./config/config.module').then(m => m.ConfigModule)
  },
  {
    path: '',
    redirectTo: 'config',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
