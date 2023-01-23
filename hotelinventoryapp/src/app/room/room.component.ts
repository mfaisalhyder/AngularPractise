import { Component, OnInit } from '@angular/core';
import { Room, RoomList } from './room';

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

  // Directives
  rooms: Room = {
    totalRooms: 20,
    availableRooms: 9,
    bookedRooms: 5
  };

  roomsList: RoomList[] = [
    {
      roomNumber: 1,
      roomType: 'Deluxe Room',
      ameneties: 'Air Conditioner, Attached Bath, Balcony, Free Wifi, Food',
      price: 1000,
      photo: 'https://i.ebayimg.com/images/g/pacAAOSwMxlivIOt/s-l500.jpg',
      checkInTime: new Date('11-Nov-2022'),
      checkOutTime: new Date('13-Nov-2022')
    },
    {
      roomNumber: 2,
      roomType: 'Classic Room',
      ameneties: 'Air Conditioner, Attached Bath, Free Wifi',
      price: 600,
      photo: 'https://i.ebayimg.com/images/g/pacAAOSwMxlivIOt/s-l500.jpg',
      checkInTime: new Date('11-Nov-2022'),
      checkOutTime: new Date('13-Nov-2022')
    },
    {
      roomNumber: 3,
      roomType: 'Deluxe Royal Room',
      ameneties: 'Air Conditioner, Attached Bath, Balcony, Free Wifi, Food, Anything you order!',
      price: 1400,
      photo: 'https://i.ebayimg.com/images/g/pacAAOSwMxlivIOt/s-l500.jpg',
      checkInTime: new Date('15-Jan-2022'),
      checkOutTime: new Date('20-Jan-2022')
    }
  ];

}