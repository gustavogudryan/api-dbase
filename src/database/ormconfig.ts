import { DataSourceOptions } from "typeorm";
import { RecadoEntity } from "./entities/recados.entity";
import { UserEntity } from "./entities/users.entity";
import { CreateTable1677705971569 } from "./migrations/1677705971569-CreateTable";
import { CreateTable1677706278942 } from "./migrations/1677706278942-CreateTable";

const config: DataSourceOptions = {
  type: "postgres",
  url: process.env.DATABASE_URL,
  synchronize: false,
  logging: false,
  entities: [UserEntity, RecadoEntity],
  migrations: [CreateTable1677705971569, CreateTable1677706278942],
};

export default config;
