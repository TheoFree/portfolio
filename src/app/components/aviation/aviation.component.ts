import { Component, OnInit } from '@angular/core';
import { AviationService } from "../../services/aviation/aviation.service";
@Component({
  selector: 'app-aviation',
  templateUrl: './aviation.component.html',
  styleUrls: ['./aviation.component.scss']
})
export class AviationComponent implements OnInit {

  constructor(private av:AviationService) { }
  images = this.av.getImages();
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
