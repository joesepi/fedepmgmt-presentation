define(['robot'], function(robot) {
    var speak = function () {
        robot('beep');
    };

    return speak;
});
