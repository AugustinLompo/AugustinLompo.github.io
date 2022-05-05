import { Component, OnInit } from '@angular/core';
import { ImageInfo } from 'src/app/imageInfo';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{
  games: any[] = ["../../../assets/sport-1.png","../../../assets/sport-2.png","../../../assets/commerce.jpg","../../../assets/clinic.png","../../../assets/sport.jpg","../../../assets/delivery.png","../../../assets/photoshop.png","../../../assets/chat.png","../../../assets/game.png"];
  titles:any[] = ["Sport app","Sport app","Commerce app","Clinc app", "Fitness app", "Delivery app", "Paint app", "Chat app", "Scrabble app"];
  imageMap:ImageInfo[] = [];

  constructor() {
    for (let index = 0; index < this.games.length; index++) {
      this.imageMap.push({title:this.titles[index],path:this.games[index]});
      
    }
  }
  ngOnInit(): void {
  }



}
