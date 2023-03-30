// src/models/State.ts
import {
    Table,
    Column,
    Model,
    PrimaryKey,
    AutoIncrement,
    HasMany,
  } from "sequelize-typescript";
  import City from "./City";
  
  @Table({ tableName: "states" })
  export default class State extends Model {
    @PrimaryKey
    @AutoIncrement
    @Column
    id: number;
  
    @Column
    name: string;
  
    @HasMany(() => City)
    cities: City[];
  }
  