angular.module("devJeopardy", ["ui.router", "firebase"])
.config(function($stateProvider, $urlRouterProvider){
    $stateProvider
    .state("home", {
           
            url:"/",
        templateUrl:"/views/homeTmpl.html",
        
           
           })
    .state("game", {
         url:"/play",
        templateUrl:"/views/game.html",
        controller: "questionCtrl"
        
    })
    .state("howToPlay", {           
            url:"/howToPlay",
        templateUrl:"/views/howToPlayTmpl.html",
           })
    
    $urlRouterProvider
        .otherwise("/")
    
})



.directive("players", function(){
    return {
        templateUrl: "/views/players.html",
//        controller: "questionsCtrl"
        
    }
})

.directive("navbar", function() {
    return {
        templateUrl: "/views/navbar.html"
    }
})
.directive("questions", function(){
    return {
        templateUrl: "/views/questions.html",
//        controller: "questionCtrl"
    }
})
.directive("answer", function(){
    return {
        templateUrl: "/views/answer.html",
        controller: "questionCtrl"
    }
})