export class Property {
  constructor(
    public _id: Number,
    public Title: String,
    public PropertyType: string,
    public Description: String,
    public PropertyPrice: number,
    public NoOfRooms: number,
    public NoOfBathroom: number,
    public Area: number,
    public Photo: Array<String>,
    public City: String,
    public Governorate: String,
    public Street: String,
    public IsRented: boolean,
    public AverageRating: Number,
    public OwnerFullName: String,
    public OwnerPhoto: String
  ) {}
}
