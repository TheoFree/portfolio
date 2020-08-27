import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule } from '@angular/platform-browser/animations'
// import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ResumeComponent } from './components/resume/resume.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { AboutmeComponent } from './components/aboutme/aboutme.component';
import { AviationComponent } from './components/aviation/aviation.component';
import { ArtworkComponent } from './components/artwork/artwork.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './components/home/home.component';
import { ModalComponent } from './components/projects/modal/modal.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
@NgModule({
  declarations: [
    AppComponent,
    ResumeComponent,
    NavbarComponent,
    ProjectsComponent,
    AboutmeComponent,
    AviationComponent,
    ArtworkComponent,
    HomeComponent,
    ModalComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    NgbModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    // NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
