
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  
  {
    path: "", 
    loadChildren: "./home/home.module#HomeModule"
  },
 
  {
    path:"about",
    loadChildren: "./about/about.module#AboutModule"
  },
  {
    path: "test",
    loadChildren: "./test/test.module#TestModule"
  },

  {
    path:"**",
    component:PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
