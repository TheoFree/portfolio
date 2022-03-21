import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class JobsService {
  jobs = [
    {
      title:"Assembler II",
      company:"Align Precision - Cedar City",
      dates:"Oct 2020 - Present",
      desc:`Build complex military and commercial aircraft parts following blue prints and customer specifications.
      Learn new tools and skills quickly to take on more challenging assemblies.
      Create new methods for approaching difficult problems in complex assemblies.
      Help mentor new Assemblers on a variety of jobs and skills.
       `
    },
    {
      title:"Head Line Service Technician",
      company:"Fly Elite Aviation",
      dates:"May 2017 - Oct 2019",
      desc:`Manage fuel farm, train new employees, maintain fuel trucks, fuel, move, clean customer and flight school aircraft. Provide 
      customer service to all customers in FBO. Assist mechanics when able. Help management ensure compliance with fire and safety standards.
      Keep business website up to date with current fuel prices and services.`
    },
    {
      title:"IT Intern",
      company:"The City of Boulder IT Department",
      dates:"Jun 2014 - Dec 2014",
      desc:`Provide excellent customer service while responding to helpdesk tickets. Manage computer software for various city departments and employees. Service
      hardware around the city. Exchange employee workstations following regular cycle. Destroy confidential information on computers to be recycled.`
    }
    

  ]
  getJobs=() => this.jobs;
  constructor() { }
}
