// src/models/Address.ts
import {
    Table,
    Column,
    Model,
    PrimaryKey,
    AutoIncrement,
    ForeignKey,
    BelongsTo,
  } from "sequelize-typescript";
  import Neighborhood from "./Neighborhood";
  
  @Table({ tableName: "addresses" })
  export default class Address extends Model {
    @PrimaryKey
    @AutoIncrement
    @Column
    id: number;
  
    @ForeignKey(() => Neighborhood)
    @Column({ field: "neighborhood_id" })
    neighborhoodId: number;
  
    @Column
    street: string;
  
    @Column({ field: "exterior_number" })
    exteriorNumber: string;
  
    @Column({ field: "interior_number" })
    interiorNumber: string;
  
    @Column({ field: "postal_code" })
    postalCode: string;
  
    @BelongsTo(() => Neighborhood)
    neighborhood: Neighborhood;
  }
  