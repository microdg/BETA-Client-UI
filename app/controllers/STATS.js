//This is the main controller for the application registered to the myApp module

app.controller('dealsCtrl', function($scope, $http) {
    
    
    $scope.getSampleStats = function(){
         $http.get("http://localhost:8083/api/processControllers/processA/getSampleStatistics")
                      .then(function (response) {
                        
                    //Read in Stats API Data
                    $scope.stats = response.data;
                    
                    //The controller loads synchronously and therefor if I try to inject the groupon data into the chart data source objects
                    //below as they are being declared the application will break as the Scope.groupon object will not be avialable to them
                    //I can assign the values within this function and Angular will update the objects itself later  
        
                    $scope.lineChartDataSource_pcs.data[0].label = $scope.stats[0].time_stamp.toString();
                    $scope.lineChartDataSource_pcs.data[0].value = $scope.stats[0].num_records_returned;
                    
                    $scope.lineChartDataSource_pcs.data[1].label = $scope.stats[1].time_stamp.toString();
                    $scope.lineChartDataSource_pcs.data[1].value = $scope.stats[1].num_records_returned;
        
                    $scope.lineChartDataSource_pcs.data[2].label = $scope.stats[2].time_stamp.toString();
                    $scope.lineChartDataSource_pcs.data[2].value = $scope.stats[2].num_records_returned;
        
                    $scope.lineChartDataSource_pcs.data[3].label = $scope.stats[3].time_stamp.toString();
                    $scope.lineChartDataSource_pcs.data[3].value = $scope.stats[3].num_records_returned;
        
                    $scope.lineChartDataSource_pcs.data[4].label = $scope.stats[4].time_stamp.toString();
                    $scope.lineChartDataSource_pcs.data[4].value = $scope.stats[4].num_records_returned;
        
                    //Assign values to Column Chart Data
                    $scope.columnChartDataSource_pcs.data[0].label = $scope.stats[0].num_records_returned.toString();
                    $scope.columnChartDataSource_pcs.data[0].value = $scope.stats[0].runtime_pc;
                    
                    $scope.columnChartDataSource_pcs.data[1].label = $scope.stats[1].num_records_returned.toString();
                    $scope.columnChartDataSource_pcs.data[1].value = $scope.stats[1].runtime_pc;
        
                    $scope.columnChartDataSource_pcs.data[2].label = $scope.stats[2].num_records_returned.toString();
                    $scope.columnChartDataSource_pcs.data[2].value = $scope.stats[2].runtime_pc;
        
                    $scope.columnChartDataSource_pcs.data[3].label = $scope.stats[3].num_records_returned.toString();
                    $scope.columnChartDataSource_pcs.data[3].value = $scope.stats[3].runtime_pc;
        
                    $scope.columnChartDataSource_pcs.data[4].label = $scope.stats[4].num_records_returned.toString();
                    $scope.columnChartDataSource_pcs.data[4].value = $scope.stats[4].runtime_pc;
        
                    
                    $scope.columnChartDataSource_bbds.data[0].label = $scope.stats[0].num_records_returned.toString();
                    $scope.columnChartDataSource_bbds.data[0].value = $scope.stats[0].runtime_bbds;
                    
                    $scope.columnChartDataSource_bbds.data[1].label = $scope.stats[1].num_records_returned.toString();
                    $scope.columnChartDataSource_bbds.data[1].value = $scope.stats[1].runtime_bbds;
        
                    $scope.columnChartDataSource_bbds.data[2].label = $scope.stats[2].num_records_returned.toString();
                    $scope.columnChartDataSource_bbds.data[2].value = $scope.stats[2].runtime_bbds;
        
                    $scope.columnChartDataSource_bbds.data[3].label = $scope.stats[3].num_records_returned.toString();
                    $scope.columnChartDataSource_bbds.data[3].value = $scope.stats[3].runtime_bbds;
        
                    $scope.columnChartDataSource_bbds.data[4].label = $scope.stats[4].num_records_returned.toString();
                    $scope.columnChartDataSource_bbds.data[4].value = $scope.stats[4].runtime_bbds;
                    
                    
                    $scope.columnChartDataSource_gts.data[0].label = $scope.stats[0].num_records_returned.toString();
                    $scope.columnChartDataSource_gts.data[0].value = $scope.stats[0].runtime_gts;
                    
                    $scope.columnChartDataSource_gts.data[1].label = $scope.stats[1].num_records_returned.toString();
                    $scope.columnChartDataSource_gts.data[1].value = $scope.stats[1].runtime_gts;
        
                    $scope.columnChartDataSource_gts.data[2].label = $scope.stats[2].num_records_returned.toString();
                    $scope.columnChartDataSource_gts.data[2].value = $scope.stats[2].runtime_gts;
        
                    $scope.columnChartDataSource_gts.data[3].label = $scope.stats[3].num_records_returned.toString();
                    $scope.columnChartDataSource_gts.data[3].value = $scope.stats[3].runtime_gts;
        
                    $scope.columnChartDataSource_gts.data[4].label = $scope.stats[4].num_records_returned.toString();
                    $scope.columnChartDataSource_gts.data[4].value = $scope.stats[4].runtime_gts;
                    
                    
                    $scope.columnChartDataSource_ss.data[0].label = $scope.stats[0].num_records_returned.toString();
                    $scope.columnChartDataSource_ss.data[0].value = $scope.stats[0].runtime_ss;
                    
                    $scope.columnChartDataSource_ss.data[1].label = $scope.stats[1].num_records_returned.toString();
                    $scope.columnChartDataSource_ss.data[1].value = $scope.stats[1].runtime_ss;
        
                    $scope.columnChartDataSource_ss.data[2].label = $scope.stats[2].num_records_returned.toString();
                    $scope.columnChartDataSource_ss.data[2].value = $scope.stats[2].runtime_ss;
        
                    $scope.columnChartDataSource_ss.data[3].label = $scope.stats[3].num_records_returned.toString();
                    $scope.columnChartDataSource_ss.data[3].value = $scope.stats[3].runtime_ss;
        
                    $scope.columnChartDataSource_ss.data[4].label = $scope.stats[4].num_records_returned.toString();
                    $scope.columnChartDataSource_ss.data[4].value = $scope.stats[4].runtime_ss;
         });
    };

    
    //The Controller accepts the standard $scope directive as well as the built in angular $http directive
    $http.get("http://localhost:8083/api/processControllers/processA/getStatistics")
                  .then(function (response) {
    
    
                    //Read in Stats Data
                    $scope.stats = response.data;
                    
                    //The controller loads synchronously and therefor if I try to inject the groupon data into the chart data source objects
                    //below as they are being declared the application will break as the Scope.groupon object will not be avialable to them
                    //I can assign the values within this function and Angular will update the objects itself later  
        
                    $scope.lineChartDataSource_pcs.data[0].label = $scope.stats[0].time_stamp.toString();
                    $scope.lineChartDataSource_pcs.data[0].value = $scope.stats[0].num_records_returned;
                    
                    $scope.lineChartDataSource_pcs.data[1].label = $scope.stats[1].time_stamp.toString();
                    $scope.lineChartDataSource_pcs.data[1].value = $scope.stats[1].num_records_returned;
        
                    $scope.lineChartDataSource_pcs.data[2].label = $scope.stats[2].time_stamp.toString();
                    $scope.lineChartDataSource_pcs.data[2].value = $scope.stats[2].num_records_returned;
        
                    $scope.lineChartDataSource_pcs.data[3].label = $scope.stats[3].time_stamp.toString();
                    $scope.lineChartDataSource_pcs.data[3].value = $scope.stats[3].num_records_returned;
        
                    $scope.lineChartDataSource_pcs.data[4].label = $scope.stats[4].time_stamp.toString();
                    $scope.lineChartDataSource_pcs.data[4].value = $scope.stats[4].num_records_returned;
        
                    //Assign values to Column Chart Data
                    $scope.columnChartDataSource_pcs.data[0].label = $scope.stats[0].num_records_returned.toString();
                    $scope.columnChartDataSource_pcs.data[0].value = $scope.stats[0].runtime_pc;
                    
                    $scope.columnChartDataSource_pcs.data[1].label = $scope.stats[1].num_records_returned.toString();
                    $scope.columnChartDataSource_pcs.data[1].value = $scope.stats[1].runtime_pc;
        
                    $scope.columnChartDataSource_pcs.data[2].label = $scope.stats[2].num_records_returned.toString();
                    $scope.columnChartDataSource_pcs.data[2].value = $scope.stats[2].runtime_pc;
        
                    $scope.columnChartDataSource_pcs.data[3].label = $scope.stats[3].num_records_returned.toString();
                    $scope.columnChartDataSource_pcs.data[3].value = $scope.stats[3].runtime_pc;
        
                    $scope.columnChartDataSource_pcs.data[4].label = $scope.stats[4].num_records_returned.toString();
                    $scope.columnChartDataSource_pcs.data[4].value = $scope.stats[4].runtime_pc;
        
                    
                    $scope.columnChartDataSource_bbds.data[0].label = $scope.stats[0].num_records_returned.toString();
                    $scope.columnChartDataSource_bbds.data[0].value = $scope.stats[0].runtime_bbds;
                    
                    $scope.columnChartDataSource_bbds.data[1].label = $scope.stats[1].num_records_returned.toString();
                    $scope.columnChartDataSource_bbds.data[1].value = $scope.stats[1].runtime_bbds;
        
                    $scope.columnChartDataSource_bbds.data[2].label = $scope.stats[2].num_records_returned.toString();
                    $scope.columnChartDataSource_bbds.data[2].value = $scope.stats[2].runtime_bbds;
        
                    $scope.columnChartDataSource_bbds.data[3].label = $scope.stats[3].num_records_returned.toString();
                    $scope.columnChartDataSource_bbds.data[3].value = $scope.stats[3].runtime_bbds;
        
                    $scope.columnChartDataSource_bbds.data[4].label = $scope.stats[4].num_records_returned.toString();
                    $scope.columnChartDataSource_bbds.data[4].value = $scope.stats[4].runtime_bbds;
                    
                    
                    $scope.columnChartDataSource_gts.data[0].label = $scope.stats[0].num_records_returned.toString();
                    $scope.columnChartDataSource_gts.data[0].value = $scope.stats[0].runtime_gts;
                    
                    $scope.columnChartDataSource_gts.data[1].label = $scope.stats[1].num_records_returned.toString();
                    $scope.columnChartDataSource_gts.data[1].value = $scope.stats[1].runtime_gts;
        
                    $scope.columnChartDataSource_gts.data[2].label = $scope.stats[2].num_records_returned.toString();
                    $scope.columnChartDataSource_gts.data[2].value = $scope.stats[2].runtime_gts;
        
                    $scope.columnChartDataSource_gts.data[3].label = $scope.stats[3].num_records_returned.toString();
                    $scope.columnChartDataSource_gts.data[3].value = $scope.stats[3].runtime_gts;
        
                    $scope.columnChartDataSource_gts.data[4].label = $scope.stats[4].num_records_returned.toString();
                    $scope.columnChartDataSource_gts.data[4].value = $scope.stats[4].runtime_gts;
                    
                    
                    $scope.columnChartDataSource_ss.data[0].label = $scope.stats[0].num_records_returned.toString();
                    $scope.columnChartDataSource_ss.data[0].value = $scope.stats[0].runtime_ss;
                    
                    $scope.columnChartDataSource_ss.data[1].label = $scope.stats[1].num_records_returned.toString();
                    $scope.columnChartDataSource_ss.data[1].value = $scope.stats[1].runtime_ss;
        
                    $scope.columnChartDataSource_ss.data[2].label = $scope.stats[2].num_records_returned.toString();
                    $scope.columnChartDataSource_ss.data[2].value = $scope.stats[2].runtime_ss;
        
                    $scope.columnChartDataSource_ss.data[3].label = $scope.stats[3].num_records_returned.toString();
                    $scope.columnChartDataSource_ss.data[3].value = $scope.stats[3].runtime_ss;
        
                    $scope.columnChartDataSource_ss.data[4].label = $scope.stats[4].num_records_returned.toString();
                    $scope.columnChartDataSource_ss.data[4].value = $scope.stats[4].runtime_ss;
                    
                                   
                    
    });
    
    
    //Below are the JSON object used to populate the charts

     $scope.lineChartDataSource_pcs = {
      
        "chart": {
        "caption": "Number of records returned per request",
        "subCaption": "Based on the last 5 requests",
        "xAxisName": "Date",
        "yAxisName": "No. of records",
        "lineThickness": "2",
        "paletteColors": "#0075c2",
        "baseFontColor": "#333333",
        "baseFont": "Helvetica Neue,Arial",
        "captionFontSize": "14",
        "subcaptionFontSize": "14",
        "subcaptionFontBold": "0",
        "showBorder": "0",
        "bgColor": "#ffffff",
        "showShadow": "0",
        "canvasBgColor": "#ffffff",
        "canvasBorderAlpha": "0",
        "divlineAlpha": "100",
        "divlineColor": "#999999",
        "divlineThickness": "1",
        "divLineDashed": "1",
        "divLineDashLen": "1",
        "divLineGapLen": "1",
        "showXAxisLine": "1",
        "xAxisLineThickness": "1",
        "xAxisLineColor": "#999999",
        "showAlternateHGridColor": "0"
    },
        "data": [{"label":"", "value": ""}, {"label":"", "value": ""}, {"label":"", "value": ""}, {"label":"", "value": ""},{"label":"", "value": ""}]

    };
            
    //Define Column Chart Data Object
    $scope.columnChartDataSource_pcs = {
      
        "chart": {
        "caption": "Process Controller Service Run Time",
        "subCaption": "Time in Milliseconds",
        "yFormatNumberScale": "0",
        "xFormatNumberScale": "0",
        "xAxisName": "Number of Records Returned",
        "yAxisName": "Runtime (Milliseconds)",
        "paletteColors": "#0075c2",
        "bgColor": "#ffffff",
        "borderAlpha": "20",
        "canvasBorderAlpha": "0",
        "usePlotGradientColor": "0",
        "plotBorderAlpha": "10",
        "placevaluesInside": "1",
        "rotatevalues": "1",
        "valueFontColor": "#ffffff",
        "showXAxisLine": "1",
        "xAxisLineColor": "#999999",
        "divlineColor": "#999999",
        "divLineDashed": "1",
        "showAlternateHGridColor": "0",
        "subcaptionFontBold": "0",
        "labelDisplay": "auto",
        "yFormatNumberScale": "0",    
        "subcaptionFontSize": "14"
    },
        "data": [{"label":"", "value": ""}, {"label":"", "value": ""}, {"label":"", "value": ""}, {"label":"", "value": ""},{"label":"", "value": ""}]

    };
    
    $scope.columnChartDataSource_bbds = {
      
        "chart": {
        "yFormatNumberScale": "0",
        "xFormatNumberScale": "0",
        "caption": "Base Business Details Service Run Time",
        "subCaption": "Time in Milliseconds",
        "xAxisName": "Number of Records Returned",
        "yAxisName": "Runtime (Milliseconds)",
        "paletteColors": "#0075c2",
        "bgColor": "#ffffff",
        "borderAlpha": "20",
        "canvasBorderAlpha": "0",
        "usePlotGradientColor": "0",
        "plotBorderAlpha": "10",
        "placevaluesInside": "1",
        "rotatevalues": "1",
        "valueFontColor": "#ffffff",
        "showXAxisLine": "1",
        "xAxisLineColor": "#999999",
        "divlineColor": "#999999",
        "divLineDashed": "1",
        "showAlternateHGridColor": "0",
        "subcaptionFontBold": "0",
        "labelDisplay": "auto",
        "yFormatNumberScale": "0",    
        "subcaptionFontSize": "14"
    },
        "data": [{"label":"", "value": ""}, {"label":"", "value": ""}, {"label":"", "value": ""}, {"label":"", "value": ""},{"label":"", "value": ""}]

    };
    
    $scope.columnChartDataSource_gts = {
      
        "chart": {
        "yFormatNumberScale": "0",
        "xFormatNumberScale": "0",
        "caption": "Geo Tagging Service Run Time",
        "subCaption": "Time in Milliseconds",
        "xAxisName": "Number of Records Returned",
        "yAxisName": "Runtime (Milliseconds)",
        "paletteColors": "#0075c2",
        "bgColor": "#ffffff",
        "borderAlpha": "20",
        "canvasBorderAlpha": "0",
        "usePlotGradientColor": "0",
        "plotBorderAlpha": "10",
        "placevaluesInside": "1",
        "rotatevalues": "1",
        "valueFontColor": "#ffffff",
        "showXAxisLine": "1",
        "xAxisLineColor": "#999999",
        "divlineColor": "#999999",
        "divLineDashed": "1",
        "showAlternateHGridColor": "0",
        "subcaptionFontBold": "0",
        "labelDisplay": "auto",
        "yFormatNumberScale": "0",    
        "subcaptionFontSize": "14"
    },
        "data": [{"label":"", "value": ""}, {"label":"", "value": ""}, {"label":"", "value": ""}, {"label":"", "value": ""},{"label":"", "value": ""}]

    };
    
    $scope.columnChartDataSource_ss = {
      
        "chart": {
        "yFormatNumberScale": "0",
        "xFormatNumberScale": "0",
        "caption": "Storage Service Run Time",
        "subCaption": "Time in Milliseconds",
        "xAxisName": "Number of Records Returned",
        "yAxisName": "Runtime (Milliseconds)",
        "paletteColors": "#0075c2",
        "bgColor": "#ffffff",
        "borderAlpha": "20",
        "canvasBorderAlpha": "0",
        "usePlotGradientColor": "0",
        "plotBorderAlpha": "10",
        "placevaluesInside": "1",
        "rotatevalues": "1",
        "valueFontColor": "#ffffff",
        "showXAxisLine": "1",
        "xAxisLineColor": "#999999",
        "divlineColor": "#999999",
        "divLineDashed": "1",
        "showAlternateHGridColor": "0",
        "subcaptionFontBold": "0",
        "labelDisplay": "auto",
        "yFormatNumberScale": "0",    
        "subcaptionFontSize": "14"
    },
        "data": [{"label":"", "value": ""}, {"label":"", "value": ""}, {"label":"", "value": ""}, {"label":"", "value": ""},{"label":"", "value": ""}]

    };
    
});