export class Service {

  constructor(
    public id: number,
    public userid: string,
    public title: string,
    public description: string,
    public typ: string,
    public image: string
  ) {}

  static fromSimplification(instance: any): Service {
    return new Service(instance.id, instance.userid, instance.title, instance.description, instance.typ, instance.image);
  }
  toSimplification(): any {
    return {
      title: this.title,
      userid: this.userid,
      image: this.image,
      description: this.description,
      typ: this.typ
    };
  }
}
