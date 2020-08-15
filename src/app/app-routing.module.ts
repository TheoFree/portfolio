import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ResumeComponent } from './components/resume/resume.component';
import { AboutmeComponent } from './components/aboutme/aboutme.component';
import { AviationComponent } from './components/aviation/aviation.component';
import { ArtworkComponent } from './components/artwork/artwork.component';


const routes: Routes = [
  {
    path:"resume",
    
    component:ResumeComponent
  },
  {
    path:"",
    pathMatch:"full",
    redirectTo:"resume"
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
    component:ResumeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
