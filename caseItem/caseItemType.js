(function(){
    'use strict';

    var caseItemTypes = {
        alert: 'alert',
        request: 'request'
    };
    
    angular.module('t.caseItem.type',[])
        .constant('caseItemType',caseItemTypes);

})();