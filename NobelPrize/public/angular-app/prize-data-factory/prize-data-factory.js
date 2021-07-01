angular.module("nobelPrize").factory("NobelPrizeDataFactory", NobelPrizeDataFactory);

function NobelPrizeDataFactory($http) {
    return{
   getAllPrizes : getAllPrizes,
   getOnePrize :getOnePrize,
   deleteOnePerson : deleteOnePerson,
   addNewPerson : addNewPerson
};
// function getAllPrizes(){
//     return $http.get("/api/prizes").then(complete).catch(failed);
//     // return $http.get(`/api/prizes?count=${count}&offset = ${offset}`).then(complete).catch(failed);
//  };
 function getAllPrizes(count, offset) {
    return $http.get(`/api/prizes?count=${count}&offset=${offset}`).then(complete).catch(failed);
};
 function getOnePrize(prizeId){
    return $http.get("/api/prizes/"+ prizeId).then(complete).catch(failed);
 };
 function deleteOnePerson(prizeId){
    return $http.delete("api/prizes/"+prizeId).then(complete).catch(failed);
};
function addNewPerson(newPerson){
    return $http.post("/api/prizes",newPerson).then(complete).catch(failed);
};
 function complete(response){
    return response.data;
}
function failed(err){
    return error.status.statusText;
}
}