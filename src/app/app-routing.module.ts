import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

const routes: Routes = [
  {
    path: 'article',
    loadChildren: './article/article.module#ArticleModule' // lazy loading : path/to/file#exportName 
  },
  // {
  //   path: 'profile',
  //   loadChildren: './profile/profile.module#ProfileModule' 
  // },
  // {
  //   path: 'editor',
  //   loadChildren: './editor/editor.module#EditorModule' 
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
