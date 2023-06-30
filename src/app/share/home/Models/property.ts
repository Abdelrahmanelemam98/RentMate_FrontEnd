export enum PropertyType {
  Apartment = 1,
  Room = 2,
  Bed = 3
}

export interface Property {
  type: string;
  nBed: number;
  nBath: number;
  area: number;
  price: number;
  id: number;
  title: string;
  propertyType: PropertyType;
  propertyPrice: number;
  mainPhotoUrl: string;
  noOfRooms: number;
  noOfBathroom: number;
  appartmentArea: number;
  governorate: string;
  city: string;
  streetDetails: string;
  averageRating: number;
  ownerPhoto: string;
  ownerFullName: string;
}