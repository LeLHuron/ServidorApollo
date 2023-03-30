// src/models/CaseDescription.ts
import {
    Table,
    Column,
    Model,
    PrimaryKey,
    AutoIncrement,
    ForeignKey,
    BelongsTo,
  } from "sequelize-typescript";
  import Case from "./Case";
  
  @Table({ tableName: "case_descriptions" })
  export default class CaseDescription extends Model {
    @PrimaryKey
    @AutoIncrement
    @Column
    id: number;
  
    @ForeignKey(() => Case)
    @Column({ field: "case_id" })
    caseId: number;
  
    @Column
    description: string;
  
    @BelongsTo(() => Case)
    case: Case;
  }  