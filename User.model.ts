import {Table, Column, Model, HasMany, BelongsTo, ForeignKey} from 'sequelize-typescript';

//Move to version 3 to store users DONE
@Table
export class User extends Model<User> {

  @Column
  id!: number;

  @Column
  name!: string;

  @Column
  email !: string;

  @Column
  password!: string;


  toSimplification(): any {
    return {
      'id': this.id,
      'name': this.name,
      'email': this.email,
      'password': this.password
    };
  }

  fromSimplification(simplification: any): void {
    this.name = simplification['name'];
    this.email = simplification['email'];
    this.password = simplification['password'];
    this.id = simplification['id'];
  }

}
