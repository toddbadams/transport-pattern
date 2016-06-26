(function(){
    'use strict';

    var alertTypes = {
        cat: 'cat',
        dog: 'dog'
    };
    
    angular.module('t.caseItem.alert.type',[])
        .constant('alertType',alertTypes);
})();