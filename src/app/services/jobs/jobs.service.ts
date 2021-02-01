import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class JobsService {
  jobs = [
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
      title:"Line Service Technician",
      company:"Journeys Aviation",
      dates:"Feb 2020 - March 2020",
      desc:`Act as customer service representative to customers inside FBO. Fuel, tow, clean aircraft. Dispatch aircraft
      rentals. Terminated due to Covid-19.`
    },
    {
      title:"Route Delivery Driver",
      company:"Longmont Dairy Farm",
      dates:"Oct 2019 - Dec 2019",
      desc:`Deliver dairy products overnight to customers along pre-determined route. Responsible for loading correct product into truck,
      driving to customer's homes safely and expediently, delivering all product to correct customers before 6:30AM, returning to unload
      at the end of each night.`
    },
    {
      title:"Head Line Service Technician",
      company:"Fly Elite Aviation",
      dates:"May 2017 - Oct 2019",
      desc:`Manage fuel farm, train new employees, maintain fuel trucks, fuel, move, clean customer and flight school aircraft. Provide 
      customer service to all customers in FBO. Assist mechanics when able. Help management ensure compliance with fire and safety standards.`
    },
    {
      title:"Delivery Driver",
      company:"Jimmy Johns on the Hill",
      dates:"May 2016 - Oct 2016",
      desc:`Deliver sandwiches and other products to customers quickly and accurately. Maintain deli tidiness, provide excelent customer service
      both in shop and to customers at delivery location. Help make sandwiches when able. `
    },
    {
      title:"IT Intern",
      company:"The City of Boulder",
      dates:"Jun 2014 - Dec 2014",
      desc:`Assist city employees to solve technical difficulties. Manage computer software for various city departments and employees. Service
      hardware around the city. Cycle out old hardware for new, set up new workstations. Destroy confidential information on computers to be recycled.`
    }

  ]
  getJobs=() => this.jobs;
  constructor() { }
}
