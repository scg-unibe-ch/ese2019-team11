export class Ort {

  constructor(
    public id: number,
    public userid: string,
    public title: string,
    public address: string,
    public description: string,
    public area: string,
    public rent: string,
    public email: string,
    public availability: string,
    public image: string
  ) {}

  static fromSimplification(instance: any): Ort {
    // tslint:disable-next-line:max-line-length
    return new Ort(instance.id, instance.userid, instance.title, instance.address, instance.description, instance.area, instance.rent, instance.availability, instance.email, instance.image);
  }
  toSimplification(): any {
    return {
      id: this.id,
      title: this.title,
      address: this.address,
      userid: this.userid,
      image: this.image,
      availability: this.availability,
      rent: this.rent,
      email: this.email,
      description: this.description,
      area: this.area
    };
  }

  toSimplificationWithoutId(): any {
    return {
      title: this.title,
      address: this.address,
      userid: this.userid,
      image: this.image,
      availability: this.availability,
      rent: this.rent,
      email: this.email,
      description: this.description,
      area: this.area
    };
  }
}
