'use strict'

/*
|--------------------------------------------------------------------------
| Router
|--------------------------------------------------------------------------
|
| AdonisJs Router helps you in defining urls and their actions. It supports
| all major HTTP conventions to keep your routes file descriptive and
| clean.
|
| @example
| Route.get('/user', 'UserController.index')
| Route.post('/user', 'UserController.store')
| Route.resource('user', 'UserController')
*/

const Route = use('Route')
const Validator = use('Adonis/Addons/Validator')
const rules = {
  title: 'required',
  content: 'required'
}

const messages = { required: 'This field is required to complete the registration process.' }

Route.on('/').render('welcome')
Route.post('/', function * (request, response) {
  const validation = yield Validator.validate(
    request.all(),
    rules,
    messages
  )

  if (validation.fails()) {
    response.json(validation.messages())
    return
  }

  response.json({
    success: true,
    message: "Post Added"
  })
})
