export class Ort {

  constructor(
    public id: number,
    public userid: string,
    public title: string,
    public description: string,
    public area: string,
    public image: string
  ) {}

  static fromSimplification(instance: any): Ort {
    return new Ort(instance.id, instance.userid, instance.title, instance.description, instance.area, instance.image);
  }
  toSimplification(): any {
    return {
      title: this.title,
      userid: this.userid,
      image: this.image,
      description: this.description,
      area: this.area
    };
  }
}
