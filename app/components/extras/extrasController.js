app.controller("extrasController", function($scope, $route, $location, $routeParams) {

    $scope.board = ["", "", "", "", "", "", "", "", ""];
    var numTurns = 0;
    var wins = [
        [0, 1, 2], //r1
        [3, 4, 5], //r2
        [6, 7, 8], //r3
        [0, 3, 6], //c1
        [1, 4, 7], //c2
        [2, 5, 8], //c3
        [0, 4, 8], //d1
        [2, 4, 6]  //d2
    ]   

    $scope.mark = function(event) {
        numTurns++;
        //console.log(numTurns);
        var pSpace = event.target.id;
        if($scope.board[pSpace] == "") {
            $scope.board[pSpace] = "X";
            var taken = true;            
            while(taken && numTurns < 5) {
                var cSpace = Math.floor(Math.random() * 9);
                if($scope.board[cSpace] == "") {
                    $scope.board[cSpace] = "O";
                    taken = false;
                }
            }
            checkForWinner();
        } else {
            alert("That space is taken. Try again.");
        }        
    }

    function checkForWinner() {
        var winner = null;
        //console.log("Checking for winner...");
        if(isXWin()) {
            winner = "X";
            console.log("X wins");
        }
        if(isOWin()) {
            winner = "O";
            console.log("O wins");
        }
        if(winner) {
            setTimeout(alert.bind(null, `${winner} won!`));
        } else if(!winner && numTurns == 5) {
            setTimeout(alert.bind(null, "Draw!"));        
        }
    }

    function isXWin() {
        for(var i = 0; i < wins.length - 1; i++) {
            if(
                ($scope.board[wins[i][0]] == "X" && $scope.board[wins[i][1]] == "X" && $scope.board[wins[i][2]] == "X") ||
                ($scope.board[2] == "X" && $scope.board[4] == "X" && $scope.board[6] == "X") ||
                ($scope.board[0] == "X" && $scope.board[4] == "X" && $scope.board[8] == "X")
            ) {
                return true;
            }
            //if()
        }
        return false;
    }

    function isOWin() {
        for(var i = 0; i < wins.length - 1; i++) {
            if(
                ($scope.board[wins[i][0]] == "O" && $scope.board[wins[i][1]] == "O" && $scope.board[wins[i][2]] == "O") ||
                ($scope.board[2] == "O" && $scope.board[4] == "O" && $scope.board[6] == "O") ||
                ($scope.board[0] == "O" && $scope.board[4] == "O" && $scope.board[8] == "O")
            ) {
                return true;
            }
            //if()
        }
        return false;
    }

   
});