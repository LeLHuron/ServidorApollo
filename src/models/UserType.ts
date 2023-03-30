// src/models/UserType.ts
import {
    Table,
    Column,
    Model,
    PrimaryKey,
    AutoIncrement,
    HasMany,
  } from "sequelize-typescript";
  import InvolvedCase from "./InvolvedCase";
  
  @Table({ tableName: "user_types" })
  export default class UserType extends Model {
    @PrimaryKey
    @AutoIncrement
    @Column
    id: number;
  
    @Column({ field: "type_name" })
    typeName: string;
  
    @Column
    description: string;
  
    @HasMany(() => InvolvedCase)
    involvedCases: InvolvedCase[];
  }
  