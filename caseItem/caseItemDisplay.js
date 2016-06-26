(function(){
    'use strict';
   
    angular.module('t.caseItem.display',['t.caseItem.type'])
        .component('caseItemDisplay', {
            templateUrl: 'caseItem/caseItemDisplay.html',
            controller: CaseItemDisplay,
            controllerAs: 'vm',
            bindings: {
                caseItem: '<'
            }
        });

    CaseItemDisplay.$inject = ['caseItemType'];
    function CaseItemDisplay(caseItemType){
        var vm = this;

        function isAlert(){
           return vm.caseItem && vm.caseItem.type === caseItemType.alert;
        }

        function canOpen(){
           return true;
        }

        function canResolve(){
           return true
        }

        function onInit(){
            vm.isAlert = isAlert;
            vm.canOpen = canOpen;
            vm.canResolve = canResolve;
        }

        vm.$onInit = onInit;
    }
})();