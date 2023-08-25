import { Table, Column, Model, DataType } from "sequelize-typescript";

@Table({ tableName: "books" })
class Book extends Model<Book> {
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  title: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  author: string;
}

export default Book;
