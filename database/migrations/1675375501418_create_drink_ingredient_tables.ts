import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'create_drink_ingredient_tables'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.integer('drink_id').unsigned().references('drinks.id').onDelete('CASCADE')
      table.integer('ingredient_id').unsigned().references('ingredients.id').onDelete('CASCADE')
      table.unique(['ingredient_id', 'drink_id'])

      /**
       * Uses timestamptz for PostgreSQL and DATETIME2 for MSSQL
       */
      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
