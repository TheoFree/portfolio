import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AviationService {
  images =
    [
      [
        {
          name: "Practical Completion",
          src: "assets/images/Aviation/citabria on practical completion.jpg",
          dsc: "Here I am just after completing my practical test for earning my certificate with the aircraft I did most of my training in: a Citabria 7GCBC N9116L"
        },
        {
          name: "First Trip",
          src: "assets/images/Aviation/flight_home_with_leah.jpg",
          dsc: "The first trip I made after my certificate was with Leah from our local airort to Taos,NM->Santa Fe,NM->Pueblo,CO->home. It was a week long trip and we had a great time."
        }
      ],
      [
        {
          name: "Return Leg",
          src: "assets/images/Aviation/red_lights_w_leah.jpg",
          dsc: "On our way back from Pueblo it got dark really fast so we put on head-lamps with red light to preserve our night vision. It was a great experience coming home in the dark!"
        },
        {
          name: "Aerobatics with Dad",
          src: "assets/images/Aviation/Decathalon_w_dad.jpg",
          dsc: "My Dad was my instructor for my certificate. As a world class Aerobatic pilot he also taught me how to do spins, loops, and rolls in the flight school's Super Decathalon N960RM"
        }
      ],
      [
        {
          name: "Flight with my brother",
          src: "assets/images/Aviation/citabria w sam.jpg",
          dsc: "After getting my certificate, one of the first people I took up was my brother Sam. We had a great flight over the mountains."
        }
      ]
    ]
  getImages = () => {
    return this.images;
  }
  constructor() { }
}
