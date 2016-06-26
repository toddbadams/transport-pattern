(function(){
    'use strict';
    
    angular.module('t.caseItem.dataService',['t.caseItem.type'])
        .factory('caseItemDataService', caseItemDataService);

    caseItemDataService.$inject = ['$q', 'caseItemType'];
    function caseItemDataService($q, caseItemType){
        var service = {
            list: list
        },
        alertListStub = [
        {
            id: 1,
            type: caseItemType.alert,
            title: 'cat',
            status: 'open',
            parentId: 54,
            childId: 1001
        },
        {
            id: 2,
            type: caseItemType.alert,
            title: 'dog',
            status: 'resolved',
            parentId: 99,
            childId: 1002
        }
    ];;

        function list(){
            var d = $q.defer();

                d.resolve(alertListStub);
            return d.promise;
        }

        return service;
    }
})();