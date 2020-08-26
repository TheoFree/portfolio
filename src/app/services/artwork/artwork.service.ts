import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ArtworkService {
  artPiece = {
    title:String,
    date:String,
    src:String,
    dsc:String
  }

artwork =
 [
  [
    {
      title: "Theo Portrait",
      date: "2017-02-15",
      src: "assets/images/Art/Theo.jpg",
      dsc: "First real portrait for my first DnD character, Theo. Human Fighter Battlemaster"
    },
    {
      title: "Blind Theo",
      date: "2017-03-12",
      src: "assets/images/Art/BlindTheoPortrait.jpg",
      dsc: "Larger, more polished portrait of Theo. Was given a magical blindfold that he could never take off once put on, but granted dark-vision"
    }
  ],
  [
    {
      title: "Surt's Escape",
      date: "2017-06-19",
      src: "assets/images/Art/Surt's Escape.jpg",
      dsc: "This is a character from the second campaign I played in."
    },
    {
      title: "Steam Profile",
      date: "2018-01-12",
      src: "assets/images/Art/SteamProfile.jpg",
      dsc: "This is a remake of my original steam profile picture that I did when I was probably 14. The first time around I just found a skull on the internet and dumped red paint in spots on it in MS Paint. I lost the original file and decided to make it again on my own."
    }
  ],
  [
    {
      title: "Old Man Theo",
      date: "2018-01-28",
      src: "assets/images/Art/oldmanTheo.jpg",
      dsc: "Theo is a character that I've already used for a couple campaigns. I like the continuity of his story and painted this for a future campaign that I might run for my friends some time. It's got some issues with proportion in my opinion, but I still like it."
    },
    {
      title: "King",
      date: "2020-07-05",
      src: "assets/images/Art/King.jpg",
      dsc: "My character King from a current(2020) campaign. A Winged Tiefling Barbarian-Fighter. Recently he accidentally became a god, which has been really interesting to play."
    }
  ],
  [
    {
      title: "Captain Vet Ehn",
      date: "2020-08-02",
      src: "assets/images/Art/CaptVetEhn.png",
      dsc: "A character for a Star Wars one shot campaign. Comes from a werewolf like species. A smuggler and mercenary."
    }
  ]
]

  getArtwork=()=>{return this.artwork;}
  constructor() { }
}
