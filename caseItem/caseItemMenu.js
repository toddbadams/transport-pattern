(function(){
    'use strict';
   
    angular.module('t.caseItem.menu',[])
        .component('caseItemMenu', {
            templateUrl: 'caseItem/caseItemMenu.html',
            controller: CaseItemMenu,
            controllerAs: 'vm',
            bindings: {
                caseItems: '<',
                onSelect: '&'
            }
        });

    CaseItemMenu.$inject = [];
    function CaseItemMenu(){
        var vm = this;

        function onClick(caseItem){
           vm.onSelect({caseItem: caseItem});
        }

        function onInit(){
            vm.onClick = onClick;
        }

        vm.$onInit = onInit;
    }
})();