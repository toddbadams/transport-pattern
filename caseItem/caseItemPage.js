(function(){
    'use strict';
    
    angular.module('t.caseItem.page',[
        't.caseItem.dataService'
        ])
        .component('caseItemPage', {
            templateUrl: 'caseItem/caseItemPage.html',
            controller: CaseItemPage,
            controllerAs: 'vm'
            });

    CaseItemPage.$inject = ['caseItemDataService'];
    function CaseItemPage(caseItemDataService){
       var vm = this;

        function postLoadCaseItems(data){
            vm.caseItems = data;
            vm.selectedCaseItem = null;
        }

        function loadCaseItems(){
            caseItemDataService.list()
                .then(postLoadCaseItems);
        }

        function select(caseItem){
            if(caseItem !== undefined){
                vm.selectedCaseItem = caseItem;
            }
        }

        function onInit(){
            vm.caseItems = null;
            vm.selectedCaseItem = null;
            vm.select = select;
            loadCaseItems();
        }

        vm.$onInit = onInit;
    }
})();