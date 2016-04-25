app.controller('pcsCtrl', function($scope, $http) {
       
    $scope.loadStatus = "";
    
    $scope.getBusinessesByAll = function(townParam){
        $scope.loadStatus = "Retrieving Data...";
        $http.get("http://localhost:8083/api/processControllers/processA/locationType/all/locationValue/All/withStats")
                      .then(function (response) {
                        $scope.obj = response.data;
                        $scope.loadStatus = "Data Retrieved";
         });
    };
    
    $scope.getBusinessesByTown = function(townParam){
        $scope.loadStatus = "Retrieving Data...";
        $http.get("http://localhost:8083/api/processControllers/processA/locationType/town/locationValue/"+townParam+"/withStats")
                      .then(function (response) {
                        $scope.obj = response.data;
                        $scope.loadStatus = "Data Retrieved";
         });
    };
    
     $scope.getBusinessesByCounty = function(countyParam){
         $scope.loadStatus = "Retrieving Data...";
         $http.get("http://localhost:8083/api/processControllers/processA/locationType/county/locationValue/"+countyParam+"/withStats")
                      .then(function (response) {
                        $scope.obj = response.data;
                        $scope.loadStatus = "Data Retrieved";
         });
    };
    
     $scope.getBusinessesByRegion = function(regionParam){
         $scope.loadStatus = "Retrieving Data...";
         $http.get("http://localhost:8083/api/processControllers/processA/locationType/region/locationValue/"+regionParam+"/withStats")
                      .then(function (response) {
                        $scope.obj = response.data;
                        $scope.loadStatus = "Data Retrieved";
         });
    };
    
    
    $scope.townOptions = {
      repeatSelect: null,
      availableOptions: [
        {id: 'Balbriggan', name: 'Balbriggan'},
        {id: 'Skerries', name: 'Skerries'}
      ],
    }
    
   $scope.countyOptions = {
    repeatSelect: null,
    availableOptions: [
      {id: 'Dublin', name: 'Dublin'}
    ],
   }
   
   $scope.regionOptions = {
    repeatSelect: null,
    availableOptions: [
      {id: 'Leinster', name: 'Leinster'},
      {id: 'Munster', name: 'Munster'},
      {id: 'Connact', name: 'Connact'},
      {id: 'Ulster', name: 'Ulster'}
    ],
   }
    
});