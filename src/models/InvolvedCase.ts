// src/models/InvolvedCase.ts
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
  import Party from "./Party";
  import UserType from "./UserType";
  import Case from "./Case";
  import Decision from "./Decision";
  import Observation from "./Observation";
  
  @Table({ tableName: "involved_cases" })
  export default class InvolvedCase extends Model {
    @PrimaryKey
    @AutoIncrement
    @Column
    id: number;
  
    @ForeignKey(() => Party)
    @Column({ field: "person_id" })
    personId: number;
  
    @ForeignKey(() => UserType)
    @Column({ field: "user_type_id" })
    userTypeId: number;
  
    @ForeignKey(() => Case)
    @Column({ field: "case_id" })
    caseId: number;
  
    @BelongsTo(() => Party)
    party: Party;
  
    @BelongsTo(() => UserType)
    userType: UserType;
  
    @BelongsTo(() => Case)
    case: Case;
  
    @HasMany(() => Decision)
    decisions: Decision[];
  
    @HasMany(() => Observation)
    observations: Observation[];
  }
  