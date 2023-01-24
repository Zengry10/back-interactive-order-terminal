/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| This file is dedicated for defining HTTP routes. A single file is enough
| for majority of projects, however you can define routes in different
| files and just make sure to import them inside this file. For example
|
| Define routes in following two files
| ├── start/routes/cart.ts
| ├── start/routes/customer.ts
|
| and then import them inside `start/routes.ts` as follows
|
| import './routes/cart'
| import './routes/customer'
|
*/

import Route from '@ioc:Adonis/Core/Route'
import User from '../app/Models/User'
import Ingredient from '../app/Models/Ingredient'
import Plat from '../app/Models/Plat'

Route.get('/', async () => {
  return { hello: 'world' }
})

Route.get('/read', async () => {
  return  User.all()
})



Route.group(() => {
  Route.get('/read', async () => {
  return Ingredient.all()
  }).middleware('auth')
  Route.get('me', 'AuthController.me').middleware(['auth'])
  Route.post('/createIngredient', 'IngredientsController.createRecette')
  }).prefix('user')

Route.get('/allPlats', 'PlatsController.index')

  
  Route.get('/readPlat/:id', "PlatsController.show")
Route.post('/createPlat', "PlatsController.create")

Route.post('/register', 'AuthController.register')
Route.post('/login', 'AuthController.login')
Route.delete('/delete/:id', 'AuthController.delete')