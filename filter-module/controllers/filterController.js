
App.controller('filterController', ['$scope', '$filter', function($scope, $filter) {


    /// FilterFilter
    $scope.searchTerm = $scope.searchTermTwo = "";

    $scope.someData = [
        "Var1",
        "Destroy",
        "Plugin",
        "House",
        "Target",
        "Game",
        "Missile",
        "Var3",
        "Authorize",
        "Sofa",
        "Pilot",
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

    $scope.inputDate = "2095-11-21";
    $scope.dateFormats = [
        "EEEE, MMMM d",
        "MMM, d y",
        "yyyy-MM-dd",
        "dd.MM.yyyy",
        "MM/dd/yyyy",
        "fullDate",
        "longDate",
        "mediumDate",
        "shortDate"
    ];
    $scope.dateFormat = "shortDate";

    $scope.inputText = "This is a text. It is very long.";
    $scope.limitTextLength = 3;

    // Custom Filter Variables

    $scope.inputStr = "This is a some input value.";
    $scope.inputStr2 = "1.4142135623730951";
    $scope.inputStr3 = "This is.";

    // Doer
    $scope.doer = function(value) {
        return $filter('customFilterOne')(value, "AAA");
    }

}]);