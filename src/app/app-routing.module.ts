import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

const routes: Routes = [
  // {
  //   path: 'settings',
  //   loadChildren: './settings/settings.module#SettingsModule'
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    // preload all modules
    preloadingStrategy: PreloadAllModules
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
