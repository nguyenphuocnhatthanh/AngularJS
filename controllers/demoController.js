demoApp.controller('demoController', ['$scope', function($scope){
    $scope.values = [{name : 'Ron', city : 'VN'}, {name : 'John', city : 'USA'}];
    $scope.lists = [];
    $scope.submit = function() {
        if ($scope.username) {
            $scope.lists.push(this.username);
            $scope.username = '';
        }
    };
}]);
