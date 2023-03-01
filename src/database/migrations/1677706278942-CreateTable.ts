import { MigrationInterface, QueryRunner, Table, TableIndex } from "typeorm";

export class CreateTable1677706278942 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "recados",
        columns: [
          {
            name: "id_recado",
            type: "varchar",
            isPrimary: true,
            isNullable: false,
            length: "80",
          },
          {
            name: "titulo",
            type: "varchar",
            length: "45",
            isNullable: false,
          },
          {
            name: "descricao",
            type: "varchar",
            length: "150",
            isNullable: false,
          },
          {
            name: "user_id",
            type: "varchar",
            length: "80",
            isNullable: false,
            isUnique: false,
          },
          {
            name: "created_at",
            type: "timestamp",
            isNullable: false,
            default: "current_timestamp",
          },
          {
            name: "updated_at",
            type: "timestamp",
            isNullable: false,
            default: "current_timestamp",
          },
        ],
        foreignKeys: [
          {
            name: "FK_users_user_id",
            referencedTableName: "users",
            referencedColumnNames: ["user_id"],
            columnNames: ["user_id"],
            onDelete: "CASCADE",
            onUpdate: "CASCADE",
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {}
}
