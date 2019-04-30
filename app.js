Vue.component('todo-item', {
  props: ['todo'],
  template: '<li>{{todo.text}}</li>'
})

new Vue({
    el: '#app',
    data: {
      message: 'Hello Vue.js!',
      seen: true,
      todos: [
        { text: 'Learn JavaScript' },
        { text: 'Learn Vue' },
        { text: 'Build something awesome' }
      ],
      groceryList: [
        {id:0, text: "Bread"}, {id:1, text: "Milk"}, {id:2, text:"Chocolate"}
      ]
    },
    methods: {
      reverseMessage : function() { this.message = this.message.split('').reverse('').join('')}
    }
  })
