import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'hinv-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.scss']
})
export class RoomComponent implements OnInit {

  hotelName: string = 'Sheraton Hotel';
  hotelAddress: string = "7177 Village Walk, Mississauga.";
  hotelPostalCode: string = 'L5W 1X2';

  totalRoomsInHotel: number = 100;

  hideAvailableRooms: boolean = false;

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  toggleHotelName(): void {
    this.hideAvailableRooms = !this.hideAvailableRooms;
  }
}
