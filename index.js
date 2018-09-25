// Vue.component('todo-item',{
//     props:['todo'],
//     template: '<li>{{ todo.text }}</li>'
// })
//
// var app = new Vue({
//     el: '#app',
//     data: {
//         message: 'Hello Vue!',
//         seen: true
//     },
//     methods:{
//         handle: function(){
//             this.seen = this.seen ? false: true;
//         }
//     }
// })
//
// var app_1 = new Vue({
//     el: '#app-1',
//     data: {
//         message: 'Page was loaded at '+ new Date().toLocaleDateString()
//     }
// })
//
// var app_2 = new Vue({
//     el: '#app-2',
//     data: {
//         items:[
//             {text:'1'},
//             {text:'2'},
//             {text:'3'}
//         ]
//     }
// })
//
// var app_3 = new Vue({
//     el: '#app-3',
//     data: {
//         message :''
//     }
// })
//
// var app_4 = new Vue({
//     el: '#app-4',
//     data: {
//         todos: [
//             {id: 0, text: 'Buy breakfeast.'},
//             {id: 1, text: 'Go to office.'},
//             {id: 2, text: 'Handle emails.'}
//         ]
//     }
// })
//
// var nums = {nums : [1,2,3,4,5]}
//
// var app_5 = new Vue({
//     el: '#app-5',
//     data: nums,
//     created() {
//         console.log("app-5 created!")
//     },
//     computed:{
//         midifiedData: function(){
//             this.nums[0] = 9
//             return this.nums
//         }
//     }
// })
//
// var axios_example = new Vue({
//     el: '#axios-example',
//     data:{
//         question: '',
//         answer: 'Please input a question end with ?'
//     },
//     watch: {
//         question: function(oldQuestion, newQuestion){
//             this.answer = 'Waiting for you to stop typing...'
//             this.debouncedGetAnswer();
//         }
//     },
//     created: function(){
//         this.debouncedGetAnswer = _.debounce(this.getAnswer, 500)
//     },
//     methods: {
//         getAnswer: function () {
//             if (this.question.indexOf('?') === -1){
//                 this.answer = 'Questions usually contain a question mark. ;-)'
//                 return
//             }
//             this.answer = 'Thinking...'
//             var vm = this
//             axios.get('https://yesno.wtf/api')
//                 .then(function (response) {
//                     vm.answer = _.capitalize(response.data.answer)
//                 })
//                 .catch(function (error) {
//                     vm.answer = 'Error! Could not reach the API.' + error
//                 })
//         }
//     }
// });
//
// var app_6 = new Vue({
//     el: '#app-6',
//     data:{
//         message: ''
//     },
//     computed: {
//         computedMessage: function () {
//             return this.message.split('').join('-');
//         }
//     }
// })
//
//
Vue.component('todo-item',{
    props: ['todo'],
    template: '<li>{{ todo.text }}</li>'
})

var container = new Vue({
    el: '#container',
    data:{
        fakeInput: '',
        todos: [],
        index: 0
    },
    methods:{
        addTodo:function (event) {
            var obj = {}
            this.index ++
            obj.id = this.index
            obj.text = this.fakeInput
            this.todos.push(obj)
        }
    }
})
