angular.module('app', ['ngMaterial', 'ngMessages']);

/*--------------------- Home Component ---------------------*/
const home = {
    templateUrl: './html/home.html',
    controller: 'homeController'
}

// Home Component with Routing (Routed / Stateful)
angular.module('app').component('home', home);

/* what exactly is the empty home controller function for? */
function homeController(homeService){

}
angular.module('app').controller('homeController', homeController);

angular.module('app').service('homeService', homeService); 

homeController.$inject = ['homeService'];

/* home service that queries the db */
function homeService ($http) {

    const ctrl = this;
    $http.get("./db.json").then(function(response){
        ctrl.items = response.data.items;
        console.log(ctrl.items);
    })
}



/*--------------------- Settings Component ---------------------*/
const item = {
    templateUrl: './html/item.html',
    controller: 'ItemController'
}

// Settings Component with Routing (Routed / Stateful)
angular.module('app').component('item', item)

// Settings Controller with dependency injection using $inject method
function ItemController(ExampleService) {

}
ItemController.$inject = ['ExampleService'];
angular.module('app').controller('ItemController', ItemController);
/*--------------------- Settings Component ---------------------*/

/*--------------------- Example Service ---------------------*/


// TODO
function ExampleService() {
}
angular.module('app').service('ExampleService', ExampleService)
/*--------------------- Example Service ---------------------*/



