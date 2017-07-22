
// Exercise 1
// new Vue({
//   el: '#app',
//   data: {
//     title: 'Hello World!',
//     link: 'http://google.com',
//     finishedLink: '<a href="http://google.com">Google</a>'
//   },
//   methods: {
//     sayHello: function() {
//       this.title = 'Hello';
//       return this.title;
//     }
//   }

// });

// Exercise 2 - Assignment Type
// new Vue ({
//   el: '#exercise',
//   data: {
//     name: 'Rohit',
//     age : '27',
//     image: 'http://www.familiesmattercoop.ca/files/familiesmattercoop/node-images/sunshine_.jpg'
//   },
//   methods: {
//     randomNum: function() {
//       min = Math.ceil(0);
//       max = Math.floor(1);
//       return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive
//     }
//   }
// })

// Exercise 3
// new Vue ({
//   el: '#app',
//   data: {
//     counter: 0,
//     x: 0,
//     y: 0
//   },
//   methods: {
//     increase: function(step, event) {
//       this.counter += step;
//     },
//     updateCoordinates: function(event) {
//       this.x = event.clientX;
//       this.y = event.clientY;
//     },
//     alertMe: function() {
//       alert('Alert!');
//     }

//   }
// })
  // Exercise 4 - Events Exercise
// new Vue ({
//   el: '#exercise',
//   data: {
//     value: ''
//   },
//   methods: {
//     showAlert: function(){
//       alert('Clicked!');
//     },
//     storeValue: function(event){
//       this.value = event.target.value;
//     }

//   }
// })

// Exercise 5 - 2 Way Binding
// new Vue({
//   el:'#app',
//   data: {
//     name:'Rohit'
//   }
// })

// Exercise 6 - Reacting to changes with 2 way properties
// new Vue({
//   el: '#app',
//   data: {
//     counter: 0,
//     secondCounter: 0
//   },
//   computed: {
//     output: function(){
//       console.log('Computed');
//       return this.counter > 5 ? 'Greater 5' : 'Smaller than 5';
//     }
//   },
//   methods: {
//     result: function(){
//       console.log('Method');
//       return this.counter > 5 ? 'Greater 5' : 'Smaller than 5';
//     }
//   }

// })

