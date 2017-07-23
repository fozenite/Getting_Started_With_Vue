
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

// Exercise 7 - Alternative to computed
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
//   watch: {
//     counter: function(value) {
//       var vm = this;
//       setTimeout(function(){
//         vm.counter = 0;
//       }, 2000);
//     }
//   },
//   methods: {
//     result: function(){
//       console.log('Method');
//       return this.counter > 5 ? 'Greater 5' : 'Smaller than 5';
//     }
//   }

// })

//Exercise 8 - Using Shorthands
// new Vue({
//   el: '#app',
//   data: {
//     link: 'http://google.com'
//   },
//   methods: {
//     changeLink: function() {
//       this.link = 'http://apple.com'
//     }
//   }
// });

// Exercise 9 - Using Computed Values and Watch Exercise
// new Vue({
//   el: '#exercise',
//   data: {
//     value: 0,
//     timeoutVal: 5000
//   },
//   methods: {
//     changeTimeout: function(event) {
//       this.timeoutVal = event.target.value * 1000;
//     }
//   },
//   computed: {
//     result: function(){
//       return this.value < 37 ? 'not there yet' : 'done'
//     }
//   },
//   watch: {
//     value: function() {
//       vm = this;
//       setTimeout(function(){
//         vm.value = 0;
//       }, vm.timeoutVal)

//     }
//   }
// })

// Exercise 10 - CSS Classes
// new Vue({
//   el: '#app',
//   data: {
//     attachRed: false,
//     color: 'green'
//   },
//   computed: {
//     divClasses: function(){
//       return {
//         red: this.attachRed,
//         blue: !this.attachRed
//       };
//     }
//   }
// });

// Exercise 11 - Inline Styling
// new Vue({
//   el: '#app',
//   data: {
//     color: 'gray',
//     width: 100
//   },
//   computed: {
//     myStyle: function() {
//       return {
//         backgroundColor: this.color,
//         width: this.width + 'px'
//       }
//     }
//   }
// });

// Exercise 12 - CSS Assignment
// new Vue({
//   el: '#exercise',
//   data: {
//     effect: '',
//     greenHulk: 'greenHulk',
//     bat: 'bat',
//     selectClass: 'Type class here',
//     selectClass_B:'Type class here',
//     addOnClass : 'false',
//     selectStyles : 'none',
//     width: 0,
//     height: 30
//   },
//   computed: {
//     divClasses: function() {
//       return this.addOnClass === 'true' ? 'bat' : '';
//     },
//     divSelectStyles: function() {
//      return this.selectStyles === 'bright' ?
//         {
//           backgroundColor: 'yellow',
//           width: '50px',
//           height: '20px'
//         }
//       : '';
//     },
//     progressBar: function() {
//       return {
//         backgroundColor: 'blue',
//         width: this.width + 'px',
//         height: this.height + 'px'
//       }
//     }
//   },
//   methods: {
//     startEffect: function() {
//     vm = this;
//     console.log(vm.effect);
//       setInterval(function() {
//         vm.effect !== 'highlight' ? vm.effect = 'highlight' : vm.effect = 'shrink';
//       },5000);
//     },
//     startProgress: function() {
//       vm = this;
//       setInterval(function(){
//         vm.width < 100 ? vm.width += 10 : null;
//         },2000)
//     }
//   }
// });

// Exercise 13 - Conditional Rendering
new Vue({
  el: '#app',
  data: {
    show: true
  }
});