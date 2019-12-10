import {User} from './User.model';
import {Table, Column, Model, HasMany, BelongsTo, ForeignKey, DataType} from 'sequelize-typescript';

/**
 * model for the Ort(locations) table
 */

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

  @Column
  availability !: string;

  @Column
  email !: string;

  @Column
  rent !: string;

  @Column
  address !: string;


  toSimplification(): any {
    return {
      'id': this.id,
      'title': this.title,
      'userid': this.userid,
      'description': this.description,
      'area': this.area,
      'availability': this.availability,
      'email': this.email,
      'rent': this.rent,
      'image': this.image,
      'address': this.address
    };
  }

  fromSimplification(simplification: any): void {
    this.id = simplification['id'];
    this.title = simplification['title'];
    this.userid = simplification['userid'];
    this.description = simplification['description'];
    this.area = simplification['area'];
    this.rent = simplification['rent'];
    this.availability = simplification['availability'];
    this.email = simplification['email'];
    this.address = simplification['address'];
    this.image = simplification['image'];
  }

}
