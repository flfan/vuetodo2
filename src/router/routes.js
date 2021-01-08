import Todo from '../views/todo/todo.vue'

export default [
  {
    path: '/',
    redirect: '/app'
  },
  {
    path: '/app',
    component: Todo,
    name: 'todo'
  }
]
