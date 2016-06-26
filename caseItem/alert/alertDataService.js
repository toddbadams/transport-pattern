(function(){
    'use strict';
    
    angular.module('t.caseItem.alert.dataService',[
        't.caseItem.alert.type', 
        't.caseItem.alert.statusType'])
        .factory('alertDataService', alertDataService);

    alertDataService.$inject = ['$q', 'alertType', 'alertStatusType'];
    function alertDataService($q, alertType, alertStatusType){
        var service = {
            getById: getById,
            panic: panic,
            remainCalm: remainCalm
        },

        alertListStub = [
            {
                id: 1001,
                message: 'I am a cat alert',
                type: alertType.cat,
                status: alertStatusType.open,
                parentId: 1
            },
            {
                id: 1002,
                message: 'I am a dog alert',
                type: alertType.dog,
                status: alertStatusType.resolved,
                parentId: 2
            }
        ];

        function getById(id){
            var d = $q.defer();
            for(var i=0; i< alertListStub.length; i++){
                if(alertListStub[i].id === id){
                    d.resolve(alertListStub[i]);
                }
            }
            return d.promise;
        }

        function remainCalm(id){
            var d = $q.defer();
            d.resolve(true);
            return d.promise;
        }

        function panic(id){
            var d = $q.defer();
            d.resolve(true);
            return d.promise;
        }

        return service;
    }
})();