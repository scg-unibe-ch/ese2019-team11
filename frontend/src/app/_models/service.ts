export class Service {

  constructor(
    public id: number,
    public userid: string,
    public title: string,
    public image: string,
    public typ: string,
    public hourlywage: string,
    public availability: string,
    public description: string,
    public email: string
  ) {}
S
  static fromSimplification(instance: any): Service {
    // tslint:disable-next-line:max-line-length
    return new Service(instance.id, instance.userid, instance.title, instance.image, instance.typ, instance.availability, instance.hourlywage, instance.description, instance.email);
  }
  toSimplification(): any {
    return {
      title: this.title,
      userid: this.userid,
      image: this.image,
      description: this.description,
      typ: this.typ,
      hourlywage: this.hourlywage,
      availability: this.availability,
      email: this.email
    };
  }
}
