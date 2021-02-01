import { Component, OnInit } from '@angular/core';
import { JobsService} from '../../services/jobs/jobs.service'
@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss'],
  
})
export class ResumeComponent implements OnInit {
  
  constructor(private js:JobsService) { }
  jobs = this.js.getJobs();
  ngOnInit(): void {
  }

}
