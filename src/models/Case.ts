// src/models/Case.ts
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
  import CaseStatus from "./CaseStatus";
  import CaseDescription from "./CaseDescription";
  import Stage from "./Stage";
  import InvolvedCase from "./InvolvedCase";
  
  @Table({ tableName: "cases" })
  export default class Case extends Model {
    @PrimaryKey
    @AutoIncrement
    @Column
    id: number;
  
    @Column({ field: "case_number" })
    caseNumber: string;
  
    @Column({ field: "start_date" })
    startDate: Date;
  
    @ForeignKey(() => CaseStatus)
    @Column({ field: "status_id" })
    statusId: number;
  
    @BelongsTo(() => CaseStatus)
    caseStatus: CaseStatus;
  
    @HasMany(() => CaseDescription)
    caseDescriptions: CaseDescription[];
  
    @HasMany(() => Stage)
    stages: Stage[];
  
    @HasMany(() => InvolvedCase)
    involvedCases: InvolvedCase[];
  }
  