angular.module("nobelPrize").controller("NobelPrizeController",NobelPrizeController);

function NobelPrizeController(NobelPrizeDataFactory,$route,$routeParams){
    const vm = this;
    vm.count = 4;
    vm.offset = 0;
    const prizeId = $routeParams.prizeId;
    vm.title = "Nobel Prize  : ";
    NobelPrizeDataFactory.getAllPrizes().then(function(response){
        vm.prizes = response;
    });
    loadData1 = (count, offset) => {
        NobelPrizeDataFactory.getAllPrizes(count, offset).then(function({ prizes, maxCount }) {
            vm.prizes = prizes;
            vm.maxCount = maxCount;
        });

    }
    loadData1(vm.count, vm.offset);
    
    vm.nextPage = (type) => {
        //if type is next we go next otherwise we go back 
        vm.offset = (type == "next") ? vm.offset + vm.count : vm.offset - vm.count;
        console.log(vm.offset);
        loadData1(vm.count, vm.offset);
    }
    vm.addNewPerson = function(){
        const newPerson = {
            firstname: vm.newPersonFirstName,
            surname : vm.newPersonSurname,
            born : vm.NewPersonBorn,
            // bornCountry : newPersonBornCountry,
            category : vm.newPersonCategory,
            year : vm.newPersonYear,
        };
        if(vm.prizeForm.$valid){
            NobelPrizeDataFactory.addNewPerson(newPerson).then(function(response){
                console.log("new Person saved...",newPerson);
                $route.reload();
        }).catch(function(error){
            console.log(error);
        });
}
  }
    
}

   
    
    