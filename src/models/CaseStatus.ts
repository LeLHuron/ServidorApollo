// src/models/CaseStatus.ts
import {
    Table,
    Column,
    Model,
    PrimaryKey,
    AutoIncrement,
    HasMany,
  } from "sequelize-typescript";
  import Case from "./Case";
  
  @Table({ tableName: "case_status" })
  export default class CaseStatus extends Model {
    @PrimaryKey
    @AutoIncrement
    @Column
    id: number;
  
    @Column({ field: "status_name" })
    statusName: string;
  
    @Column
    description: string;
  
    @HasMany(() => Case)
    cases: Case[];
  }
  