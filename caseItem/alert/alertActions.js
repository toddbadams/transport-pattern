(function(){
    'use strict';
   
    angular.module('t.caseItem.alert.actions',[
        't.caseItem.alert.dataService' ])
        .factory('alertActionComponent', {
            templateUrl: 'src/alertComponent.html',
            controller: AlertActionComponent,
            controllerAs: 'vm',
            bindings: {
                caseItem: '<'
            }
        });

    AlertActionComponent.$inject = [ 'alertDataService'];
    function AlertActionComponent( alertDataService){
        var vm = this;

        function postRemainCalm(data){
            vm.alert.isRemainCalm = data;
            vm.alert.isPanic = !data;
        }

        function remainCalm(){
            alertDataService.remainCalm(vm.caseItem.childId)
                .then(postRemainCalm);
        }

        function postPanic(data){
            vm.alert.isRemainCalm = !data;
            vm.alert.isPanic = data;
        }

        function panic(){
            alertDataService.remainCalm(vm.caseItem.childId)
                .then(postPanic);
        }

        function onInit(){
            vm.remainCalm = remainCalm;
            vm.isTypanicpeDog = panic;
        }


        vm.onInit = onInit;
    }
})();