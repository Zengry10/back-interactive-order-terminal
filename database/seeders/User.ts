
import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import User from 'App/Models/User'


export default class UserSeeder extends BaseSeeder {

  public async run () {
    await User.createMany([
      {
        firstname: "Remi",
        lastname: "Lemoust",
        email: 'admin@dev.com',
        password: 'password',
        role: 'admin'
      },
      {
        firstname: "cuisine",
        lastname: "cuisine",
        email: 'cuisine@dev.com',
        password: 'password',
        role: 'cuisine'
      },
      {
        firstname: "client",
        lastname: "client",
        email: 'client@dev.com',
        password: 'password'
      },
      {
        firstname: "Ryan",
        lastname: "Bouwman",
        email: 'ryan@dev.com',
        password: 'password'
      },

      {
        firstname: "Moustapha",
        lastname: "Zermati",
        email: 'mous@drogue.com',
        password: 'password'
      },

      {
        firstname: "Cacem",
        lastname: "Bouzid",
        email: 'cacem@bts.com',
        password: 'password'
      },

      {
        firstname: "Hector",
        lastname: "Moulin",
        email: 'hector@avocat.com',
        password: 'password'
      },

      {
        firstname: "Ilias",
        lastname: "Azouz",
        email: 'ilias@rif.com',
        password: 'password'
      },

      {
        firstname: "Zaki",
        lastname: "Ouahbi",
        email: 'zaki@haraga.com',
        password: 'password'
      },

      {
        firstname: "Emir",
        lastname: "Aouad",
        email: 'emir@dev++.com',
        password: 'password'
      },
    ])
  }

}
