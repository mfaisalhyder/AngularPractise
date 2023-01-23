export interface Room {
    totalRooms: number;
    availableRooms?: number;
    bookedRooms?: number;
}

export interface RoomList {
    roomNumber: number,
    roomType: string;
    ameneties: string;
    price: number;
    photo: string;
    checkInTime: Date;
    checkOutTime: Date;
}
