import {User} from './User.model';
import {Table, Column, Model, HasMany, BelongsTo, ForeignKey, DataType} from 'sequelize-typescript';


@Table
export class Ort extends Model<Ort> {

  @ForeignKey(()=>User)
  @Column
  userid!: number;

  @BelongsTo(()=> User)
  user!: User;

  @Column
  title !: string;

  @Column(DataType.TEXT)
  description !: string;

  @Column
  area !: string;

  @Column(DataType.TEXT)
  image !: string;


  toSimplification(): any {
    return {
      'id': this.id,
      'title': this.title,
      'userid': this.userid,
      'description': this.description,
      'area': this.area,
      'image': this.image
    };
  }

  fromSimplification(simplification: any): void {
    this.id = simplification['id'];
    this.title = simplification['title'];
    this.userid = simplification['userid'];
    this.description = simplification['description'];
    this.area = simplification['area'];
    this.image = simplification['image'];
  }

}
