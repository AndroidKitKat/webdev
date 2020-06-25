angular.module('app', ['ngMaterial', 'ngMessages']);

/*--------------------- Home Component ---------------------*/
const home = {
    templateUrl: './html/home.html',
    controller: 'homeController',
}

// Home Component with Routing (Routed / Stateful)
angular.module('app').component('home', home);

function homeController (homeService) {

  const controller = this;


  var dbData = null;
  homeService ()
    .then (result => dbData = result.data.items);
    controller.items = dbData;
}

angular.module('app').controller('homeController', homeController);

angular.module('app').service('homeService', homeService); 


homeController.$inject = ['homeService'];

function homeServiceTwo() {
    var x = document.getElementById("item-input").value;
    document.getElementById("showItem").innerHTML = x;
}


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

function itemController(itemService) {
    const controller = this;
    
    //query item db

    // what the actual frick
    controller.itemSearch = function(){
      itemService().then(function(result){
        var needle = document.getElementById('item-input').value;
        for (var i = 0; i < result.data.items.length; i++){
          if (result.data.items[i].name == needle){
            controller.Selected = result.data.items[i];
            break;
          } else {
            // yes this works
            controller.Selected = {
              "name": "Item not found in Database"
            }
          }
        }
      })
    }
  }



itemController.$inject = ['itemService'];
angular.module('app').controller('itemController', itemController);

/*--------------------- Item Service ---------------------*/


// TODO
// get the data from the db ✅
function itemService($http) {
    return () => $http
    .get("./db.json")
}
angular.module('app').service('itemService', itemService)




