// src/models/Observation.ts
import {
    Table,
    Column,
    Model,
    PrimaryKey,
    AutoIncrement,
    ForeignKey,
    BelongsTo,
  } from "sequelize-typescript";
  import InvolvedCase from "./InvolvedCase";
  
  @Table({ tableName: "observations" })
  export default class Observation extends Model {
    @PrimaryKey
    @AutoIncrement
    @Column
    id: number;
  
    @ForeignKey(() => InvolvedCase)
    @Column({ field: "user_id" })
    userId: number;
  
    @Column
    text: string;
  
    @Column({ field: "observation_date" })
    observationDate: Date;
  
    @BelongsTo(() => InvolvedCase)
    involvedCase: InvolvedCase;
  }
  