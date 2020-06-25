angular.module('app', ['ngMaterial', 'ngMessages']);

/*--------------------- Home Component ---------------------*/
const home = {
    templateUrl: './html/home.html',
    controller: 'homeController',
    sex: 'fuck'
}

// Home Component with Routing (Routed / Stateful)
angular.module('app').component('home', home);

/* what exactly is the empty home controller function for? */
function homeController (homeService) {

  const controller = this

  homeService ()
    .then (result => controller.items = result.data.items)
}

angular.module('app').controller('homeController', homeController);

angular.module('app').service('homeService', homeService); 

homeController.$inject = ['homeService'];

/* home service that queries the db */
function homeService ($http) {
  return () => $http
    .get("./db.json")
}

/*--------------------- Settings Component ---------------------*/
const item = {
    templateUrl: './html/item.html',
    controller: 'itemController'
}

// Settings Component with Routing (Routed / Stateful)
angular.module('app').component('item', item)

// will update the item name based on the selected element?
function itemController(itemService) {
    const controller = this;
    
    //query item db
    itemService ()
      .then (result => // do what i need to do now?
        document.getElementById('item-selector').addEventListener('change', function(){
            var selectorElement = document.getElementById('item-selector');
            var selected = selectorElement.options[selectorElement.selectedIndex].innerHTML;
            controller.item = selected;
            console.log(selected)
        }));


}
itemController.$inject = ['itemService'];
angular.module('app').controller('itemController', itemController);
/*--------------------- Settings Component ---------------------*/

/*--------------------- Example Service ---------------------*/


// TODO
// get the data from the db
function itemService($http) {
    return () => $http
    .get("./db.json")
}
angular.module('app').service('itemService', itemService)
/*--------------------- Example Service ---------------------*/


