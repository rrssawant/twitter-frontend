import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SearchComponent } from 'src/app/search/search.component';
import { NoPageComponent } from 'src/app/no-page/no-page.component';

const routes: Routes = [
  {path:'',redirectTo: 'search',    pathMatch: 'full'},
  {path:'search',component:SearchComponent},

  { path: '**', component: NoPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
