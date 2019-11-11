import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserDataComponent } from './user-data/user-data.component'
import { from } from 'rxjs';
import { NotFoundComponent } from './not-found/not-found.component';
import { UserReposComponent } from './user-repos/user-repos.component';



const routes: Routes = [
  {path: 'user-data', component: UserDataComponent},
  {path: 'user-repos', component: UserReposComponent},
  {path: '', redirectTo: '/user-data', pathMatch: 'full'},
  {path: '**', component : NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
