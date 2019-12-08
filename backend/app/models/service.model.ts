import {Table, Column, Model, HasMany, BelongsTo, ForeignKey} from 'sequelize-typescript';
import {User} from './User.model';


@Table
export class Service extends Model<Service> {

  @ForeignKey(()=>User)
  @Column
  userid!: number;

  @BelongsTo(()=> User)
  user!: User;

  @Column
  title !: string;

  @Column
  description !: string;

  @Column
  typ !: string;


  toSimplification(): any {
    return {
      'id': this.id,
      'title': this.title,
      'userid': this.userid,
      'description': this.description,
      'typ': this.typ
    };
  }

  fromSimplification(simplification: any): void {
    this.id = simplification['id'];
    this.title = simplification['title'];
    this.userid = simplification['userid'];
    this.description = simplification['description'];
    this.typ = simplification['typ'];
  }

}
