import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EditorComponent } from './editor.component';
import { AuthGuardService } from '../core';
import { EditableArticleResolver } from './editable-article-resolver.service';

const routes: Routes = [
  {
    path: '',
    component: EditorComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: ':slug',
    component: EditorComponent,
    canActivate: [AuthGuardService],
    resolve: {
      article: EditableArticleResolver
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EditorRoutingModule { }
