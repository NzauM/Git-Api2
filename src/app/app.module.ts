import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { SearchUserComponent } from './search-user/search-user.component';
import { UserDataComponent } from './user-data/user-data.component';
import { UserReposComponent } from './user-repos/user-repos.component';
import { from } from 'rxjs';
import { FormsModule } from '@angular/forms';
import { HighlightLogoDirective } from './highlight-logo.directive'

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    NotFoundComponent,
    SearchUserComponent,
    UserDataComponent,
    UserReposComponent,
    HighlightLogoDirective

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
