import { NgModule } from '@angular/core';

import { EditorRoutingModule } from './editor-routing.module';
import { SharedModule } from '../shared';
import { EditableArticleResolver } from './editable-article-resolver.service';
import { EditorComponent } from './editor.component';

@NgModule({
  declarations: [ EditorComponent ],
  imports: [
    EditorRoutingModule,
    SharedModule
  ],
  providers: [ EditableArticleResolver ]
})
export class EditorModule { }
