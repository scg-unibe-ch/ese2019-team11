import {Column, PrimaryKey, Model, Table} from 'sequelize-typescript';

@Table
export class User extends Model<User> {


  @Column
  username!: String;

  @Column
  password!: String;

  @PrimaryKey
  @Column
  email!: String;

  @Column
  city!: String;

  @Column
  phonenr!: String;

  toSimplification(): any {
    return {
      'username': this.username,
      'password': this.password,
      'email': this.email,
      'city' : this.city,
      'phonenr' : this.phonenr
    };
  }

  fromSimplification(simplification: any): void {
    this.username = simplification['username'];
    this.password = simplification['password'];
    this.email = simplification['email'];
    this.city = simplification['city'];
    this.phonenr = simplification['phonenr'];
  }

}
