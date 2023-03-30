// src/models/Decision.ts
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
  import Stage from "./Stage";
  import InvolvedCase from "./InvolvedCase";
  
  @Table({ tableName: "decisions" })
  export default class Decision extends Model {
    @PrimaryKey
    @AutoIncrement
    @Column
    id: number;
  
    @ForeignKey(() => Case)
    @Column({ field: "case_id" })
    caseId: number;
  
    @ForeignKey(() => Stage)
    @Column({ field: "stage_id" })
    stageId: number;
  
    @ForeignKey(() => InvolvedCase)
    @Column({ field: "user_id" })
    userId: number;
  
    @Column({ field: "decision_date" })
    decisionDate: Date;
  
    @Column({ field: "decision_text" })
    decisionText: string;
  
    @BelongsTo(() => Case)
    case: Case;
  
    @BelongsTo(() => Stage)
    stage: Stage;
  
    @BelongsTo(() => InvolvedCase)
    involvedCase: InvolvedCase;
  }
  