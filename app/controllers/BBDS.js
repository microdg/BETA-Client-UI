app.controller('bbdsCtrl', function($scope, $http) {
    
    $scope.loadStatus = "";
    
    
    $scope.visibility_status = false;
    
    $scope.getBusinessList = function(){
        $scope.loadStatus = "Retrieving Data...";
        $http.get("http://localhost:8081/baseBusinesses/all/details")
                      .then(function (response) {
                        $scope.bbds_business_list = response.data;
                        $scope.count = response.length;
                        $scope.status_image = "http://www.clker.com/cliparts/1/f/c/1/12379140591570510706dholler_ok.svg.med.png"
                        $scope.visibility_status = true;
                        $scope.loadStatus = "Data Retrieved";
         });
    };
    
    
     $scope.getBusinessListByTown = function(townParam){
         $scope.loadStatus = "Retrieving Data...";
         $http.get("http://localhost:8081/baseBusinesses/all/details/towns/"+townParam)
                      .then(function (response) {
                        $scope.bbds_business_list = response.data;
                        $scope.count = response.length;
                        $scope.status_image = "http://www.clker.com/cliparts/1/f/c/1/12379140591570510706dholler_ok.svg.med.png"
                        $scope.visibility_status = true;
                        $scope.loadStatus = "Data Retrieved";
         });
    };
    
    $scope.getBusinessById = function(idParam){
        $scope.loadStatus = "Retrieving Data...";
        $http.get("http://localhost:8081/baseBusinesses/"+idParam+"/details/")
                      .then(function (response) {
                        $scope.bbds_business_list = response.data;
                        $scope.count = response.length;
                        $scope.status_image = "http://www.clker.com/cliparts/1/f/c/1/12379140591570510706dholler_ok.svg.med.png"
                        $scope.visibility_status = true;
                        $scope.loadStatus = "Data Retrieved";
         });
    };
    
    $scope.getBusinessByCounty = function(countyParam){
         $http.get("http://localhost:8081/baseBusinesses/all/details/counties/"+countyParam)
                      .then(function (response) {
                        $scope.bbds_business_list = response.data;
                        $scope.count = response.length;
                        $scope.status_image = "http://www.clker.com/cliparts/1/f/c/1/12379140591570510706dholler_ok.svg.med.png"
                        $scope.visibility_status = true;
                        $scope.loadStatus = "Data Retrieved";
         });
    };
    
    $scope.getBusinessByRegion = function(regionParam){
        $scope.loadStatus = "Retrieving Data...";
         $http.get("http://localhost:8081/baseBusinesses/all/details/regions/"+regionParam)
                      .then(function (response) {
                        $scope.bbds_business_list = response.data;
                        $scope.count = response.length;
                        $scope.status_image = "http://www.clker.com/cliparts/1/f/c/1/12379140591570510706dholler_ok.svg.med.png"
                        $scope.visibility_status = true;
                        $scope.loadStatus = "Data Retrieved";
         });
    };
    
    $scope.townOptions = {
    repeatSelect: null,
    availableOptions: [
      {id: 'Balbriggan', name: 'Balbriggan'},
      {id: 'Skerries', name: 'Skerries'},
      {id: 'Cork', name: 'Cork'},
      {id: 'Galway', name: 'Galway'},
      {id: 'Belfast', name: 'Belfast'}
    ],
   }
    
   $scope.countyOptions = {
    repeatSelect: null,
    availableOptions: [
      {id: 'Dublin', name: 'Dublin'},
      {id: 'Cork', name: 'Cork'},
      {id: 'Galway', name: 'Galway'},
      {id: 'Antrim', name: 'Antrim'}
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


