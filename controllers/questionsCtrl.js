angular.module("devJeopardy").controller("questionCtrl", function($scope, devJeopardySrv){
    
    
    
    
    //Enter players name
    
    $scope.player1 = null;
    $scope.player2 = null;
    $scope.promptPlayer = function(){
        $scope.player1 = prompt("enter team 1 name");       
        $scope.player2 = prompt("enter team 2 name");
        $scope.players= $scope.player1.push(players);
        $scope.player2 = $scope.player2.push(players);
        
    }
    
    
      
    //show and hide questions in questions.html
    $scope.showAnswer="false";
    $scope.question = function(){
    $scope.showAnswer = !$scope.showAnswer;
     
    }
    
    //keep track of score
    $scope.p1score = 0;
    $scope.p2score = 0;
    
    $scope.p1points = function(){
        $scope.p1score = $scope.p1score + 1;
    }
    
    $scope.p2points = function(){
        $scope.p2score = $scope.p2score + 1;
    }
    
    
    
    
    
    
    
//    $scope.goAway = false;
//    $scope.hide = function()   
//        $scope.Array200 = !$scope.Array200;
//    }
    
    //ng-click to show questions per category and $amount
    $scope.Array200 = function(){
    $scope.Array200 = devJeopardySrv.Array200;    
      
    }
    
    
    
    $scope.goAway1 = false;
    $scope.hide1 = function(){
        
        $scope.Array400 = !$scope.Array400;
    }
    $scope.Array400 = function(){ 
        $scope.Array400 = devJeopardySrv.Array400;      
    }
    
    
    
    
     $scope.goAway2 = false;
    $scope.hide2 = function(){
        
        $scope.Array600 = !$scope.Array600;
    }
    $scope.Array600 = function(){
        $scope.Array600 = devJeopardySrv.Array600; 
    }
    
    
    
    
    
     $scope.goAway3 = false;
    $scope.hide3 = function(){
        
        $scope.Array800 = !$scope.Array800;
    }
    $scope.Array800 = function(){
        $scope.Array800 = devJeopardySrv.Array800; 
    }
    
    
    
    
     $scope.goAway4 = false;
    $scope.hide4 = function(){
        
        $scope.Array1000 = !$scope.Array1000;
    }
    $scope.array1000 = function(){
        $scope.Array1000 = devJeopardySrv.Array1000; 
    }
    
    
    
     $scope.goAway5 = false;
    $scope.hide5 = function(){
        
        $scope.object200 = !$scope.object200;
    }
    $scope.object200 = function(){
       $scope.object200 = devJeopardySrv.Objects200;  
    }
    
    
    
    
    $scope.goAway6 = false;
    $scope.hide6 = function(){
        
        $scope.object400 = !$scope.object400;
    }
    $scope.object400 = function(){
        $scope.object400 = devJeopardySrv.Objects400; 
    }
    
    
    
    
    
    $scope.goAway7 = false;
    $scope.hide7 = function(){
        
        $scope.object600 = !$scope.object600;
    }
    $scope.object600 = function(){
        $scope.object600 = devJeopardySrv.Objects600; 
    }
    
    
    
    
    $scope.goAway8 = false;
    $scope.hide8 = function(){
        
        $scope.object800 = !$scope.object800;
    }
    $scope.object800 = function(){
        $scope.object800 = devJeopardySrv.Objects800; 
    }
    
    
    
//    
    $scope.goAway9 = false;
    $scope.hide9 = function(){
        
        $scope.object1000 = !$scope.object1000;
    }
    $scope.object1000 = function(){
        $scope.object1000 = devJeopardySrv.Objects1000; 
    }
    
    
    
    
    
    
    $scope.goAway10 = false;
    $scope.hide10 = function(){
        
        $scope.functions200 = !$scope.functions200;
    }
    $scope.functions200 = function(){
        $scope.functions200 = devJeopardySrv.functions200; 
    }
    
    
    
    
    $scope.goAway11 = false;
    $scope.hide11 = function(){
        
        $scope.functions400 = !$scope.functions400;
    }
    $scope.functions400 = function(){
        $scope.functions400 = devJeopardySrv.functions400; 
    }
    
    
    
    
    
        $scope.goAway12 = false;
        $scope.hide12 = function(){

            $scope.functions600 = !$scope.functions600;
        }
    $scope.functions600 = function(){
        $scope.functions600 = devJeopardySrv.functions600; 
    }
    
    
    
    
    
    $scope.goAway13 = false;
    $scope.hide13 = function(){
        
        $scope.functions800 = !$scope.functions800;
    }
    $scope.functions800 = function(){
        $scope.functions800 = devJeopardySrv.functions800; 
    }
    
    
    
    
    
    $scope.goAway14 = false;
    $scope.hide14 = function(){
        
        $scope.functions1000 = !$scope.functions1000;
    }
    $scope.functions1000 = function(){
        $scope.functions1000 = devJeopardySrv.functions1000; 
    }
    
    
    
    
    
//    $scope.goAway15 = false;
//    $scope.hide15 = function()        
//        $scope.frameworks200 = !$scope.frameworks200;
//    }
    $scope.frameworks200 = function(){
        $scope.frameworks200 = devJeopardySrv.frameworks200; 
    }
    
    
    
    
    
//    $scope.goAway16 = false;
//    $scope.hide16 = function()        
//        $scope.frameworks400 = !$scope.frameworks400;
//    }
    $scope.frameworks400 = function(){
        $scope.frameworks400 = devJeopardySrv.frameworks400; 
    }
    
    
    
    
    
//    $scope.goAway17 = false;
//    $scope.hide17 = function()        
//        $scope.frameworks600 = !$scope.frameworks600;
//    }
    $scope.framework600 = function(){
        $scope.framework600 = devJeopardySrv.frameworks600; 
    }
    
    
    
    
    
//    $scope.goAway18 = false;
//    $scope.hide18 = function()        
//        $scope.frameworks800 = !$scope.frameworks800;
//    }
    $scope.frameworks800 = function(){
        $scope.frameworks800 = devJeopardySrv.frameworks800; 
    }
    
    
    
    
//    $scope.goAway19 = false;
//    $scope.hide19 = function()        
//        $scope.frameworks1000 = !$scope.frameworks1000;
//    }
    $scope.frameworks1000 = function(){
       $scope.frameworks1000 = devJeopardySrv.frameworks1000;  
    }
    
    
    
    
})