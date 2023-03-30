// src/models/Stage.ts
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
  import Case from "./Case";
  import Evidence from "./Evidence";
  import Decision from "./Decision";
  
  @Table({ tableName: "stages" })
  export default class Stage extends Model {
    @PrimaryKey
    @AutoIncrement
    @Column
    id: number;
  
    @ForeignKey(() => Case)
    @Column({ field: "case_id" })
    caseId: number;
  
    @Column({ field: "stage_name" })
    stageName: string;
  
    @Column
    description: string;
  
    @BelongsTo(() => Case)
    case: Case;
  
    @HasMany(() => Evidence)
    evidence: Evidence[];
  
    @HasMany(() => Decision)
    decisions: Decision[];
  }
  