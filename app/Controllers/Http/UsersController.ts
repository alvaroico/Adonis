import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class UsersController {
  public async create({ request, response }: HttpContextContract) {
    const data = request.only(["name", "username"]);
    console.log(data);
    response.send(data)
  }
}
