import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutmeComponent } from './components/aboutme/aboutme.component';
import { AviationComponent } from './components/aviation/aviation.component';
import { ArtworkComponent } from './components/artwork/artwork.component';


const routes: Routes = [
  {
    path:"home",
    
    component:HomeComponent
  },
  {
    path:"",
    pathMatch:"full",
    redirectTo:"home"
  },
  {
    path:"about",
    component:AboutmeComponent
  },
  {
    path:"aviation",
    component:AviationComponent
  },
  {
    path:"artwork",
    component:ArtworkComponent
  },
  {
    path:"**",
    component:HomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
