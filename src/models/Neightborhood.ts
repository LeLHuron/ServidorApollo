// src/models/Neighborhood.ts
import {
    Table,
    Column,
    Model,
    PrimaryKey,
    AutoIncrement,
    ForeignKey,
    BelongsTo,
  } from "sequelize-typescript";
  import City from "./City";
  
  @Table({ tableName: "neighborhoods" })
  export default class Neighborhood extends Model {
    @PrimaryKey
    @AutoIncrement
    @Column
    id: number;
  
    @ForeignKey(() => City)
    @Column({ field: "city_id" })
    cityId: number;
  
    @Column
    name: string;
  
    @BelongsTo(() => City)
    city: City;
  }
  