angular.module("nobelPrize").controller("NobelPrizeOneController", NobelPrizeOneController);

function NobelPrizeOneController($routeParams, NobelPrizeDataFactory,$location){
    const vm = this;
    const prizeId = $routeParams.id;
    NobelPrizeDataFactory.getOnePrize(prizeId).then(function(response){
        vm.prize = response;
        console.log("Data ",response);
        
    });
    vm.deleteOnePerson = function(){
        NobelPrizeDataFactory.deleteOnePerson(prizeId).then(function(response){
            console.log("person deleted");
            $location.path("/");
        });
    }
    
}