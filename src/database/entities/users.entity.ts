import {
  BaseEntity,
  BeforeInsert,
  BeforeUpdate,
  Column,
  CreateDateColumn,
  Entity,
  PrimaryColumn,
  UpdateDateColumn,
} from "typeorm";

@Entity({ name: "users" })
export class UserEntity extends BaseEntity {
  @PrimaryColumn({ name: "user_id" })
  userId!: string;
  @Column({ name: "name" })
  name!: string;

  @Column({ name: "email" })
  email!: string;

  @Column({ name: "password" })
  password!: string;

  @CreateDateColumn({ name: "created_at" })
  userCreatedAt!: Date;

  @UpdateDateColumn({ name: "updated_at" })
  userUpdatedAt?: Date;

  @BeforeInsert()
  beforeInsert() {
    this.userCreatedAt = new Date();
    this.userUpdatedAt = new Date();
  }

  @BeforeUpdate()
  beforeUpdate() {
    this.userUpdatedAt = new Date();
  }
}
