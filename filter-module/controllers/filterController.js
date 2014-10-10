
App.controller('filterController', ['$scope', function($scope) {


    /// FilterFilter
    $scope.searchTerm = $scope.searchTermTwo = "";

    $scope.someData = [
        "Var1",
        "Var3",
        "Destroy",
        "Plugin",
        "Target",
        "Game",
        "Missile",
        "House",
        "Pilot",
        "Authorize",
        "Sofa",
        "Dump",
        "Evaluate",
        "Demonstration",
        "Xor",
        "Namespace",
        "H"
    ];

    $scope.superComparator = function (actual, expected) {
        var l1 = actual.length;
        var l2 = expected.length;
        return (l1 <= l2);
    };

    /// BuiltIn Filter Values
    $scope.cashAmount = 0;


}]);