import {Table, Column, Model, HasMany, BelongsTo, ForeignKey} from 'sequelize-typescript';


@Table
export class Service extends Model<Service> {


  @Column
  id !: number;

  @Column
  title !: string;

  @Column
  creator !: string;

  @Column
  description !: string;


  toSimplification(): any {
    return {
      'id': this.id,
      'title': this.title,
      'creator': this.creator,
      'description': this.description
    };
  }

  fromSimplification(simplification: any): void {
    this.id = simplification['id'];
    this.title = simplification['title'];
    this.creator = simplification['creator'];
    this.description = simplification['description'];
  }

}
