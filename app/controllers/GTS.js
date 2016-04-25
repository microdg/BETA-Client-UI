app.controller('gtsCtrl', function($scope, $http) {
    
    $scope.loadStatus = "";
    
    $scope.getGeoTag = function(addressParam){
         $scope.loadStatus = "Retrieving Data...";
         $http.get("http://localhost:8082/geoTaggings/addresses/"+addressParam)
                      .then(function (response) {
                        $scope.g_cords_list = response.data;
                        $scope.query_address = addressParam;
                        $scope.loadStatus = "Data Retrieved";
         });
    };  
});