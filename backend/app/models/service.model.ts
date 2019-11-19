import {Column, PrimaryKey, Model, Table, ForeignKey, AutoIncrement, BelongsTo} from 'sequelize-typescript';
import { User } from './user.model';

@Table
export class Service extends Model<Service> {

  @PrimaryKey
  @AutoIncrement
  @Column
  id!: Number;

  @Column
  @BelongsTo(() => User)
  creator!: User;

  @Column
  title!: String;

  @Column
  description!: String;

  @Column
  category!: String;

  @Column
  location!: String;

  @Column
  price!: Number;

  toSimplification(): any {
    return {
      'id': this.id,
      'title': this.title,
      'creator': this.creator,
      'description' : this.description,
      'category' : this.category,
      'location' : this.location,
      'price' : this.price
    };
  }

  fromSimplification(simplification: any): void {
    this.id = simplification['id'];
    this.title = simplification['title'];
    this.creator = simplification['creator'];
    this.description = simplification['description'];
    this.category = simplification['category'];
    this.location = simplification['location'];
    this.price = simplification['price'];
  }

}
