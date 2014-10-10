

App.filter('customFilterOne', function() {
    return function(input, arg) {
        var res = "";

        var len = input.length;
        while(len--) {
            res = res.concat(input[len]);
        }

        return res + " .. " + arg;
    };
});
