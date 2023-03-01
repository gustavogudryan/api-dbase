import {
  BaseEntity,
  BeforeInsert,
  BeforeUpdate,
  Column,
  ManyToOne,
  JoinColumn,
  CreateDateColumn,
  Entity,
  PrimaryColumn,
  UpdateDateColumn,
} from "typeorm";
import { UserEntity } from "./users.entity";

@Entity({ name: "recados" })
export class RecadoEntity extends BaseEntity {
  @PrimaryColumn({ name: "id_recado" })
  idRecado!: string;

  @Column({ name: "titulo" })
  recadoTitulo!: string;

  @Column({ name: "descricao" })
  recadoDescricao!: string;

  @ManyToOne(() => UserEntity)
  @JoinColumn({ name: "user_id" })
  userId!: string;

  @CreateDateColumn({ name: "created_at" })
  recadoCreatedAt!: Date;

  @UpdateDateColumn({ name: "updated_at" })
  recadoUpdatedAt?: Date;

  @BeforeInsert()
  beforeInsert() {
    this.idRecado = new Date().getTime().toString();
    this.recadoCreatedAt = new Date();
  }
  @BeforeUpdate()
  beforeUpdate() {
    this.recadoUpdatedAt = new Date();
  }
}
