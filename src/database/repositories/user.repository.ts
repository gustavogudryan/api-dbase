import { UserEntity } from "../entities/users.entity";
import { pgHelper } from "../pg-helper";

export class UserRepository {
  async createUser(
    name: string,
    email: string,
    password: string
  ): Promise<UserEntity> {
    const manager = pgHelper.client.manager;

    const newUser = manager.create(UserEntity, {
      name,
      email,
      password,
    });

    return await manager.save(newUser);
  }

  async checkEmail(email: string): Promise<boolean> {
    const manager = pgHelper.client.manager;
    const user = await manager.findOne(UserEntity, {
      where: { email },
    });
    return !!user;
  }

  async checkUser(userId: string): Promise<boolean> {
    const manager = pgHelper.client.manager;
    const user = await manager.findOne(UserEntity, {
      where: { userId },
    });
    return !!user;
  }

  async checkLogin(
    email: string,
    password: string
  ): Promise<UserEntity | null> {
    const manager = pgHelper.client.manager;
    const user = await manager.findOne(UserEntity, {
      where: {
        email,
        password,
      },
    });
    return user;
  }
}
