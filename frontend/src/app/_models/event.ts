export class Event {

  constructor(
    public id: number,
    public userid: string,
    public title: string,
    public description: string,
    public wann: string,
    public wo: string,
    public image: string
  ) {}
  static fromSimplification(instance: any): Event {
    return new Event(instance.id, instance.userid, instance.title, instance.description, instance.wann, instance.wo, instance.image);
  }
  toSimplification(): any {
    return {
      title: this.title,
      userid: this.userid,
      wann: this.wann,
      description: this.description,
      wo: this.wo,
      image: this.image
    };
  }

}
