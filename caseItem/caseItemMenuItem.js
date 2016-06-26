(function(){
    'use strict';
   
    angular.module('t.caseItem.menuItem',[])
        .component('caseItemMenuItem', {
            templateUrl: 'caseItem/caseItemMenuItem.html',
            bindings: {
                caseItem: '=',
                onSelect: '&'
            }
        });
})();