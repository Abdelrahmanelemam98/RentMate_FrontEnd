export class property {

    constructor(
         public ownerId:number,
         public title:string ,
         public propertyType:number ,
         public propertyPrice:number ,
         public city:number ,
         public streetDetails:string ,
         public noOfBedsPerApartment:number ,
         public noOfBedsInTheRoom:number ,
         public noOfRooms:number ,
         public noOfBathroom:number ,
         public appartmentArea:number ,
         public floorNumber:number ,
         public hasKitchen: boolean,
         public hasAirConditioner: boolean,
         public hasMicrowave: boolean,
         public hasDishWasher: boolean,
         public hasWifi: boolean,
         public hasRefrigerator: boolean,
         public hasDishesAndSilverware: boolean,
         public hasParking: boolean,
         public hasWaterHeater: boolean,
         public hasElivator: boolean
          

           ) {
        
    }
}
