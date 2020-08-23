import { Component, OnInit, ViewChild, ElementRef, ChangeDetectorRef } from '@angular/core';
import { ProjectsService } from 'src/app/services/projects.service';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { ModalComponent } from './modal/modal.component'
@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  closeResult = "";
  current_page = 1;
  pages = [];
  projects_display = [];

  constructor(private ps: ProjectsService, private ModalSvc: NgbModal, private cdr: ChangeDetectorRef) { }
  open(project) {
    if (project.details.text) {
      const modal = this.ModalSvc.open(ModalComponent, { ariaLabelledBy: 'projectDetail', size: 'lg' });
      modal.componentInstance.project = project;


      modal.result.then((result) => {
        this.closeResult = `Closed with: ${result}`;
      }, (reason) => {
        this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
      });
    } else {
      console.log(`Project '${project.title}' has no detailed information to show.`)
    }
  }
  
  projects = this.ps.get_projects();
  nProjects = this.projects.length;
  nPages = Math.ceil(this.nProjects/2);
  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }
 
  projectsPage = (page = 0) => {
    this.nProjects;
    if (this.nProjects <= 2) this.projects_display =this.projects;
    else {
      var start = page*2;
      this.cdr.detach();
      this.projects_display = this.projects.slice(start,start+2);
      this.current_page = page;
      this.cdr.detectChanges();
      this.cdr.reattach();
    }
  }
  
  
  ngOnInit(): void {
    for(var i = 1; i<this.nPages+1;i++)this.pages.push(i);
    this.projectsPage();
   
  }

}
