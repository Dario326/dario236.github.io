angular.module("devJeopardy").service("devJeopardySrv", function(){
    
   this.Array200 = 
       {
       question: "How would you change a string into an array?",
       points: "200",
       answer: "split() method",
       
       }
       
      this.Array400 = { 
       question: "The reduce property does what?",
       points: "400",
       answer:"The reduce() method applies a function against an accumulator and each value of the array (from left-to-right) to reduce it to a single value."
      }
      this.Aray600 =
       {
       question: "The filter method take in what parameters?",
       points: "600",
       answer: "Array, Index, and Element"
       }
      this.Array800 =
       {
       question: "How would you loop through every index of an array?",
       points : "800",
       answer: "for loop"
       }
      this.Array1000 =
       {
       question: "what is the syntax for looping through an array returning each index in the array?",
       points: "1000",   
       answer: "for(var i = 0; i < arr.length; i++) { return arr[i]}"
       }
    

   this.Objects200 = 
           {
       question: "What is the syntax for writing an object?",
       points: "200",
       answer: "var car = {type:'Fiat', model:'500', color:'white'};"
       }
   this.Objects400 =
       {
       question: "How do you loop through the properties of an object?",
       points: "400",
       answer: "for in loop "
       }
   this.Objects600 =
       {
       question: "What does the bind() method do??",
       points: "600",
       answer: "The bind() method creates a new function that, when called, has its this keyword set to the provided value, with a given sequence of arguments preceding any provided when the new function is called."
       }
   this.Objects800 =
       {
       question: "What does the apply method do??",
       points: "600",
       answer: "The apply() method calls a function with a given this value and arguments provided as an array "
       }
   this.Objects1000 =
       {
       question: "What does the call method do?",
       points: "1000",
       answer: "The call() method calls a function with a given this value and arguments provided individually."
       }
           
   this.functions200 = 
           {
       question: "Write out a function that returns the number 5?",
       points: "200",
       answer: "function number(){return 5;}"
       }
   this.functions400 =
       {
       question: "What is anonomous function?",
       points: "400",
       answer: " An anonymous function is a function that was declared without any named identifier to refer to it."
       }
   this.functions600 =
       {
       question: "What is a callback function?",
       points: "600",
       answer: "A callback function, also known as a higher-order function, is a function that is passed to another function (let's call this other function “otherFunction”) as a parameter, and the callback function is called (or executed) inside the otherFunction."
       }
   this.functions800 =
       {
       question: "What is the difference between perameters and arguments?",
       points: "800",
       answer: "A parameter is a variable in a method definition"
       }
   this.functions1000=
       {
       question: "What is a recursive function?",
       points: "1000",
       answer: "Recursion is a programming concept that lets a function call a function on itself."
       }
           
   this.frameworks200 = 
           {
       question: "What does the empty array mean when defining an app in Angular?",
       points: "200",
       answer: "That array is meant to add various module to your current app which is mentioned in your first part of angular.module as string`, You could simply say for injecting various dependency."
       }
   this.frameworks400 =
       {
       question: "What does a controller do in angular?",
       points: "400",
       answer: "Controls the view using $scope"
       }
   this.frameworks600 =
       {
       question: "What is a promise?",
       points: "600",
       answer: "a mechanism that lets you defer a stated action or series of actions at an earlier point of time until you explicitly declare that promise to be fulfilled (or resolved). Promises are useful for asynchronous operations   "
       }
   this.frameworks800 =
       {
       question: "When using ui-router what must you inject into the callback function?",
       points: "800",
       answer: "$stateProvider and $urlRouterProvider"
       }
   this.frameworks1000 =
       {
       question: "In order to connect an API to a service you must inject blank in to the service?",
       points: "1000",
       answer: "$http"
       }
        
   
})