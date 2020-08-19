import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {
  private projects = [
    {
      title: "DnD 5e Character Sheet",
      date: "2020-07-24T00:00Z",
      description: "A character sheet tool where users can create, edit, and download characters. \nThe character sheet does some extra useful things for players like:",
      details: {
        text: `This is my first real personal driven web-app. It was built using Angular with Bootstrap and a free Bootstrap theme from Bootswatch.com.
      It has three main displays which are a basic home screen, the main character sheet, and the character's spellbook. 
      Users just starting simply click on the new character button to bring up the display as normal. The fields will populate with default values for stats and empty strings for everything else.
      A couple of extras I added were buttons for damaging or healing character for ease of use. A characters spellbook is available from a button on the Attacks and Spells section of the character sheet.

      When I made it, I hadn't learned about using popovers or modals so all spell information is displayed openly in the table which does overflow and needs to be reworked. 
      The user can add spells and cantrips, and clicking on a different spell level pulls up the spell list that corresponds with that level.
      
      Users can save their character by clicking the button in the bottom right, which prompts for a save file name before downloading it to their local storage. 
      Clicking on Open Existing Character prompts the user for a character file, and accepts a JSON file with their character data. 

      Future updates that I'm planning on:`,
        bullets: ["Fixing up the spellbook view so that it displays better on multiple display sizes.",
          "Improving on the add spell functionality.",
          "Adding a dice roller.",
          "Making app fully responsive.",
          "Attaching a database that users can store their charactersheets in rather than downloading to save changes.  "]
      },
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
      details:{
        text: `This project is simply the result of my trying to learn more about using APIs. 
        It uses Angular, Node.js, Express, MongoDB, DevExtreme, and Joi. It started with building a web-app that I could access a local database through. Then I added Google Maps API, and a few NASA API's. I used DevExtreme to make a windrose from the wind data from Mars. Express, MongoDB, Joi and some other tools were used for developing the local database API`,
        bullets: []
      },
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
  public get_projects = () => { return this.projects; }
  constructor() {
  }
}
