import { Component, OnInit } from '@angular/core';
import { ArtworkService } from "../../services/artwork/artwork.service";
@Component({
  selector: 'app-artwork',
  templateUrl: './artwork.component.html',
  styleUrls: ['./artwork.component.scss']
})
export class ArtworkComponent implements OnInit {

  constructor(private art:ArtworkService) { }
  images = this.art.getArtwork();
  imgRows = this.images.length;
  row = [];
  rowIndex;
  viewRow = (row)=>{
    if(0<row && row<=this.imgRows){
      this.rowIndex = row;
      this.row = this.images[this.rowIndex-1];
    }
    console.log("Out of bounds");
  }
  ngOnInit(): void {
    this.viewRow(1)
  }

}
