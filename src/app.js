var myapp = angular.module('sortableApp', ['ngRoute', 'ui.sortable']);


myapp.controller('sortableController', function ($scope) {
  var tmpList = [];

  for (var i = 1; i <= 6; i++){
    tmpList.push({
      text: 'Item ' + i,
      value: i,
      locked: i == 1 || i == 6 || i == 3
    });
  }

  $scope.list = tmpList;

  $scope.sortingLog = [];

  $scope.sortableOptions = {
    update: function(e, ui) {
      var logEntry = tmpList.map(function(i){
        return i.value;
      }).join(', ');
      $scope.sortingLog.push('Update: ' + logEntry);
    },
    stop: function(e, ui) {
      // this callback has the changed model
      var logEntry = tmpList.map(function(i){
        return i.value;
      }).join(', ');
      $scope.sortingLog.push('Stop: ' + logEntry);
      return true;
    },
    // The `cancel` option is preferable,
    // in case that you are
    // updating the item classes on runtime
    // eg: adding/removing the `not-sortable` class
    // cancel: ".not-sortable"
    // The `items` works in case that
    // you are not manipulating the items.
    // It also prevents us from placing an item
    // above "Item 1" or below "Item 6"
    items: "li:not(.not-sortable)"
  };
});
