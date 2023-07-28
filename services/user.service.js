import boom from "@hapi/boom";
import { sequelizeClient } from "../libs/sequelize.js";

class UserService {

  constructor(){
  }
  async create(data) {
    return await sequelizeClient.models.User.create(data);
  }

  async find() {
    return await sequelizeClient.models.User.findAll();
  }

  async findOne(id) {
    const user = await sequelizeClient.models.User.findByPk(id);
    if(!user) {
      throw boom.notFound('user not found');
    }
    return user;
  }

  async update(id, changes) {
    const user = await this.findOne(id);
    return await user.update(changes);
  }

  async delete(id) {
    const user = await this.findOne(id);
    await user.destroy();
    return id;  
  }

}

export { UserService };