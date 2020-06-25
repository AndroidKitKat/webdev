angular.module('app', ['ngMaterial', 'ngMessages']);

/*--------------------- Home Component ---------------------*/
const home = {
    templateUrl: './html/home.html',
    controller: 'homeController'
}

// Home Component with Routing (Routed / Stateful)
angular.module('app').component('home', home);

function homeController(homeService){
    
}
angular.module('app').controller('homeController', homeController);

angular.module('app').service('homeService', homeService); 

homeController.$inject = ['homeService'];

function homeService ($http) {
    const ctrl = this;

    $http.get("./db.json").then(function(response){
        ctrl.items = response.data.items;
        console.log(ctrl.items);
    })

    console.log('we here');
}


/* {

    const ctrl = this;

    // holy jesus // put in service
    $http.get("./db.json").then(function(response) {
        ctrl.items = response.data.items
        console.log(ctrl.items)
    })

}]);*/
//i gtg get on my call o7 o7




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
// we should maybe do something with this? 

//query the db
function ExampleService() {
    // Services are Singletons
    // Properties
    // Methods
}
angular.module('app').service('ExampleService', ExampleService)
/*--------------------- Example Service ---------------------*/



