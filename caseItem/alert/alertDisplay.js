(function(){
    'use strict';
   
    angular.module('t.caseItem.alert.display',[
        't.caseItem.alert.dataService',
        't.caseItem.alert.type', 
        't.caseItem.alert.statusType' ])
        .component('alertDisplay', {
            templateUrl: 'caseItem/alert/alertDisplay.html',
            controller: AlertDisplay,
            controllerAs: 'vm',
            bindings: {
                caseItem: '<'
            }
        });

    AlertDisplay.$inject = ['alertType', 'alertStatusType', 'alertDataService'];
    function AlertDisplay(alertType, alertStatusType, alertDataService){
        var vm = this;

        function isTypeCat(){
            return vm.alert && vm.alert.type === alertType.cat;
        }

        function isTypeDog(){
            return vm.alert && vm.alert.type === alertType.dog;
        }

        function isStatusOpen(){
            return vm.alert && vm.alert.status === alertStatusType.open;
        }

        function isStatusResolved(){
            return vm.alert && vm.alert.status === alertStatusType.resolved;
        }

        function postGetById(data){
            vm.alert = data;
        }

        function onInit(){
            vm.isTypeCat = isTypeCat;
            vm.isTypeDog = isTypeDog;
            vm.isStatusOpen = isStatusOpen;
            vm.isStatusResolved = isStatusResolved;
        }

        function onChange(){
            alertDataService.getById(vm.caseItem.childId)
                .then(postGetById);
        }

        vm.$onInit = onInit;
        vm.$onChanges = onChange;
        vm.alert = null;
    }
})();