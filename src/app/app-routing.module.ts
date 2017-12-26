import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CountDownComponent } from './count-down/count-down.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path:'',
    redirectTo:'/countdown',
    pathMatch:'full'
  },{
  path: 'countdown',
  component: CountDownComponent,
  pathMatch:'full'
},{
  path:'birthday',
  component:HomeComponent,
  pathMatch:'full'
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
