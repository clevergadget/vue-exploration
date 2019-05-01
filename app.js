Vue.component('todo-item', {
  props: ['todo'],
  template: '<li>{{todo.text}}</li>',
  beforeCreated: function() {
    console.log('beforeCreated')
  },
  created: function() {
    console.log('created')
  },
  beforeMount: function() {
    console.log('beforeMount')
  },
  mounted: function() {
    console.log('mounted')
  },
  beforeUpdate: function() {
    console.log('beforeUpdate')
  },
  updated: function() {
    console.log('updated')
  },
  beforeDestroy: function() {
    console.log('beforeDestroy')
  },
  destroyed: function() {
    console.log('destroyed')
  }
})

new Vue({
    el: '#app',
    data: {
      message: 'Hello Vue.js!',
      seen: true,
      todos: [
        { text: 'Learn JavaScript' }
      ],
      groceryList: [
        {id:0, text: "Bread"}
      ]
    },
    methods: {
      reverseMessage : function() { this.message = this.message.split('').reverse('').join('')}
    }
  })
