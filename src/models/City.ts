// src/models/City.ts
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
  import State from "./State";
  import Neighborhood from "./Neighborhood";
  
  @Table({ tableName: "cities" })
  export default class City extends Model {
    @PrimaryKey
    @AutoIncrement
    @Column
    id: number;
  
    @ForeignKey(() => State)
    @Column({ field: "state_id" })
    stateId: number;
  
    @Column
    name: string;
  
    @BelongsTo(() => State)
    state: State;
  
    @HasMany(() => Neighborhood)
    neighborhoods: Neighborhood[];
  }
  