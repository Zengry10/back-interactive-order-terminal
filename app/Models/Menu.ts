import { DateTime } from 'luxon'
import { BaseModel, column, manyToMany, ManyToMany } from '@ioc:Adonis/Lucid/Orm'
// import { LucidModel } from '@ioc:Adonis/Lucid/Orm'
import Drink from './Drink'
import Complement from './Complement'
import Burger from './Burger'

export default class Menu extends BaseModel {

    @column({ isPrimary: true })

    public id: number
    
    @column()
    public name: string

    @column()
    public description: string

    @column()
    public picture: string

    @column()
    public price: number

    @manyToMany(() => Drink, {
    pivotTable: 'create_menu_drink_tables',
        })
    public drinks: ManyToMany<typeof Drink>
    

    @manyToMany(() => Complement, {
    pivotTable: 'create_menu_complement_tables',
        })
    public complements: ManyToMany<typeof Complement>


    @manyToMany(() => Burger, {
    pivotTable: 'create_menu_burger_tables',
        })
    public burgers: ManyToMany<typeof Burger>



    @column.dateTime({ autoCreate: true })
    public createdAt: DateTime

    @column.dateTime({ autoCreate: true, autoUpdate: true })
    public updatedAt: DateTime
}