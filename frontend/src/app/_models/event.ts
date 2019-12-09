export class Event {

  constructor(
    public id: number,
    public userid: string,
    public title: string,
    public description: string,
    public wann: string,
    public wo: string,
    public need: string,
    public email: string,
    public image: string
  ) {}
  static fromSimplification(instance: any): Event {
    // tslint:disable-next-line:max-line-length
    return new Event(instance.id, instance.userid, instance.title, instance.description, instance.need, instance.wann, instance.wo, instance.email, instance.image);
  }
  toSimplification(): any {
    return {
      title: this.title,
      userid: this.userid,
      wann: this.wann,
      description: this.description,
      wo: this.wo,
      need: this.need,
      email: this.email,
      image: this.image
    };
  }

}
