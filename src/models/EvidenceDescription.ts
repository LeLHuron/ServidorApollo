// src/models/EvidenceDescription.ts
import {
    Table,
    Column,
    Model,
    PrimaryKey,
    AutoIncrement,
    ForeignKey,
    BelongsTo,
  } from "sequelize-typescript";
  import Evidence from "./Evidence";
  
  @Table({ tableName: "evidence_descriptions" })
  export default class EvidenceDescription extends Model {
    @PrimaryKey
    @AutoIncrement
    @Column
    id: number;
  
    @ForeignKey(() => Evidence)
    @Column({ field: "evidence_id" })
    evidenceId: number;
  
    @Column
    description: string;
  
    @Column
    file: Buffer;
  
    @BelongsTo(() => Evidence)
    evidence: Evidence;
  }
  