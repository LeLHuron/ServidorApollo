// src/models/Evidence.ts
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
  import Stage from "./Stage";
  import EvidenceDescription from "./EvidenceDescription";
  
  @Table({ tableName: "evidence" })
  export default class Evidence extends Model {
    @PrimaryKey
    @AutoIncrement
    @Column
    id: number;
  
    @ForeignKey(() => Stage)
    @Column({ field: "stage_id" })
    stageId: number;
  
    @Column({ field: "submit_date" })
    submitDate: Date;
  
    @BelongsTo(() => Stage)
    stage: Stage;
  
    @HasMany(() => EvidenceDescription)
    evidenceDescriptions: EvidenceDescription[];
  }
  