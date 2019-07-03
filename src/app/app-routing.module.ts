import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

const routes: Routes = [
  {
    path: 'article',
    loadChildren: './article/article.module#ArticleModule' // path/to/file#exportName
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    // preload all modules
    preloadingStrategy: PreloadAllModules
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
