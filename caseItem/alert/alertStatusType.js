(function(){
    'use strict';

    var alertStatusTypes = {
        open: 'open',
        resolved: 'resolved'
    };
    
    angular.module('t.caseItem.alert.statusType',[])
        .constant('alertStatusType',alertStatusTypes);
})();