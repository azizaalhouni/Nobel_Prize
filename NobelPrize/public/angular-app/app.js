angular.module("nobelPrize",["ngRoute"]).config(config);

function config($routeProvider, $locationProvider){
    $locationProvider.hashPrefix("");
    $routeProvider.when("/",{
        templateUrl:"angular-app/prizes-list/prizeList.html",
        controller: "NobelPrizeController",
        controllerAs: "vm"
    }).when("/prizes/:id",{
        templateUrl: "angular-app/prize-one/prize-one.html",
        controller: "NobelPrizeOneController",
        controllerAs: "vm"
    });
}