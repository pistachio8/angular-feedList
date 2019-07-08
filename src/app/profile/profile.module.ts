import { NgModule } from '@angular/core';
import { SharedModule } from '../shared';
import { ProfileArticlesComponent } from './profile-articles.component';
import { ProfileComponent } from './profile.component';
import { ProfileFavoritesComponent } from './profile-favorites.component';
import { ProfileResolver } from './profile-resolver.service';
import { ProfileRoutingModule } from './profile-routing.module';

@NgModule({
  declarations: [
    ProfileArticlesComponent,
    ProfileComponent,
    ProfileFavoritesComponent,
  ],
  imports: [
    ProfileRoutingModule,
    SharedModule,
  ],
  providers: [ ProfileResolver ]
})
export class ProfileModule { }
