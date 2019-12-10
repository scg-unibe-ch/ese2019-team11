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
    return new Event(instance.id, instance.userid, instance.title, instance.description, instance.wann, instance.wo, instance.need, instance.email, instance.image);
  }

  /**
   * use this to change existing events
   */
  toSimplification(): any {
    return {
      id: this.id,
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

  /**
   * use this to create events otherwise ID is -1
   */
  toSimplificationWithoutId(): any {
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
