import {Table, Column, Model, HasMany, BelongsTo, ForeignKey} from 'sequelize-typescript';
import {User} from './User.model';


@Table
export class Event extends Model<Event> {

  @ForeignKey(()=>User)
  @Column
  userid!: number;

  @BelongsTo(()=> User)
  user!: User;

  @Column
  title!: string;

  @Column
  description !: string;

  @Column
  wann !: string;

  @Column
  wo !: string;



  toSimplification(): any {
    return {
      'id': this.id,
      'title': this.title,
      'description': this.description,
      'userid': this.userid,
      'wann': this.wann,
      'wo': this.wo
    };
  }

  fromSimplification(simplification: any): void {
    this.title = simplification['title'];
    this.description = simplification['description'];
    this.userid = simplification['userid'];
    this.id = simplification['id'];
    this.wann = simplification['wann'];
    this.wo = simplification['wo'];
  }

}
