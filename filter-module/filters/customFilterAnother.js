

App.filter('customFilterAnother', function() {
    return function(input) {
        var n = parseFloat(input);
        if (n >= 0 ) {
            return n * n;
        } else {
            return -1;
        }
    };
});
