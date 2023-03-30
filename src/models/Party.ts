// src/models/Party.ts
import {
    Table,
    Column,
    Model,
    PrimaryKey,
    AutoIncrement,
    ForeignKey,
    BelongsTo,
    HasMany,
  } from "sequelize-typescript";
  import Neighborhood from "./Neighborhood";
  import InvolvedCase from "./InvolvedCase";
  
  @Table({ tableName: "parties" })
  export default class Party extends Model {
    @PrimaryKey
    @AutoIncrement
    @Column
    id: number;
  
    @ForeignKey(() => Neighborhood)
    @Column({ field: "neighborhood_id" })
    neighborhoodId: number;
  
    @Column
    name: string;
  
    @Column
    address: string;
  
    @Column
    phone: string;
  
    @Column
    email: string;
  
    @BelongsTo(() => Neighborhood)
    neighborhood: Neighborhood;
  
    @HasMany(() => InvolvedCase)
    involvedCases: InvolvedCase[];
  }
  