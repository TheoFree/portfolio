import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {
  private projects= [
    {
      title: "DnD 5e Character Sheet",
      date: "2020-07-24T00:00Z",
      description: "A character sheet tool where users can create, edit, and download characters. \nThe character sheet does some extra useful things for players like:",
      img: "/assets/images/CharSheetPreview.png",
      bullets: [
        "Compute Modifiers",
        "Simple damage and healing buttons",
        "A spellbook page where players can keep track of spells of all levels"
      ],
      gitURL: "https://github.com/TheoFree/Dnd5eCharacterSheet",
      hostedURL: "https://dnd5e-character-sheet.web.app/home"
    }
    ,
    {
      title: "Api Explorer",
      date: "2020-08-13T00:00Z",
      description: "This evolved into a project as I was working on learning about APIs.\nAPIs implemented:",
      img: "",
      bullets: [
        "Google Maps with a search bar that tries to autocomplete user entries",
        "An interface for a local server and mongodb database that I made",
        "Three different NASA APIs"
      ],
      gitURL: "",
      hostedURL: ""
    }
  ]
  public get_projects =()=>{return this.projects;}
  constructor() {
  }
}
