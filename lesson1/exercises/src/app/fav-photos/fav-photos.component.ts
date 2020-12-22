import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-photos',
  templateUrl: './fav-photos.component.html',
  styleUrls: ['./fav-photos.component.css']
})
export class FavPhotosComponent implements OnInit {
  photosTitle = 'My Favorite Photos';
  image1 = 'https://www.launchcode.org/assets/icons/target-00c7a0bc7776901e3c5cdc4c36c465f19e41a249bc7267a595f0bfa14ab944b7.png';
  image2 = 'https://scontent-dfw5-2.xx.fbcdn.net/v/t1.0-0/p526x296/12718087_1150868191611782_8326781797889051492_n.jpg?_nc_cat=107&ccb=2&_nc_sid=9267fe&_nc_ohc=uSveNCLroDIAX-6-rGU&_nc_ht=scontent-dfw5-2.xx&tp=6&oh=6b5b6bd122bdf0f7375731bee5ac5ecf&oe=6000F2F5';
  image3 = 'https://steemitimages.com/p/3HaJVvr6qfoEFgBir1jy4DeK1wwhDm7oNHzc1b8roaJY8MKhB2ariRHrN3ScpvQX8mzGFS3rwxfBZ41vPRdmCoYLWmr1eBHxndfnLPQ?format=match&mode=fit&width=640';

  constructor() { }

  ngOnInit() {
  }

}