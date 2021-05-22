import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class JobsService {
  jobs = [
    {
      title:"IT Intern",
      company:"The City of Boulder",
      dates:"Jun 2014 - Dec 2014",
      desc:`Assist city employees to solve technical difficulties. Manage computer software for various city departments and employees. Service
      hardware around the city. Cycle out old hardware for new, set up new workstations. Destroy confidential information on computers to be recycled.`
    },
    {
      title:"Assembler 1",
      company:"Metalcraft Technologies Inc.",
      dates:"Oct 2020 - Present",
      desc:`Complete assemblies from parts for customers in the aerospace industry. Commonly used tools: drills,
       a variety of rivet squeezes, socket wrenches, countersinks, and so on. Responsible for completing jobs quickly
       while maintaining high level of quality; staying within tight tolerances for error and keeping parts clean and 
       clear of debris. `
    },
    {
      title:"Head Line Service Technician",
      company:"Fly Elite Aviation",
      dates:"May 2017 - Oct 2019",
      desc:`Manage fuel farm, train new employees, maintain fuel trucks, fuel, move, clean customer and flight school aircraft. Provide 
      customer service to all customers in FBO. Assist mechanics when able. Help management ensure compliance with fire and safety standards.`
    }
    

  ]
  getJobs=() => this.jobs;
  constructor() { }
}
