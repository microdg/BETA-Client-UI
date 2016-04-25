describe('MicroDG App', function() {
  
  beforeEach(function() {
    browser.get('http://127.0.0.1:8887/PCS-dashboard.html');
  });
    
  it('should have a title', function() {
      expect(browser.getTitle()).toEqual('Process Controller Service Dashboard');
  });

    
  it('should return the correct business details based on the "ALL" parameter', function() {   
      
      //Click to Return all business in the list
      element(by.id('allSearch')).click();
     
      //Retrieve the first, middle and last value for each row and column
      var name1 = element(by.exactRepeater("record in obj").row(0).column("record.b_name"));
      var address1 = element(by.exactRepeater("record in obj").row(0).column("record.b_addres"));
      var phone1 = element(by.exactRepeater("record in obj").row(0).column("record.b_phone"));
      var lat1 = element(by.exactRepeater("record in obj").row(0).column("record.b_lat"));
      var lng1 = element(by.exactRepeater("record in obj").row(0).column("record.b_lng"));
      
      var name11 = element(by.exactRepeater("record in obj").row(11).column("record.b_name"));
      var address11 = element(by.exactRepeater("record in obj").row(11).column("record.b_addres"));
      var phone11 = element(by.exactRepeater("record in obj").row(11).column("record.b_phone"));
      var lat11 = element(by.exactRepeater("record in obj").row(11).column("record.b_lat"));
      var lng11 = element(by.exactRepeater("record in obj").row(11).column("record.b_lng"));
      
      var name22 = element(by.exactRepeater("record in obj").row(22).column("record.b_name"));
      var address22 = element(by.exactRepeater("record in obj").row(22).column("record.b_addres"));
      var phone22 = element(by.exactRepeater("record in obj").row(22).column("record.b_phone"));
      var lat22 = element(by.exactRepeater("record in obj").row(22).column("record.b_lat"));
      var lng22 = element(by.exactRepeater("record in obj").row(22).column("record.b_lng"));
      
      expect(name1.getText()).toEqual("Brooks Hire");
      expect(address1.getText()).toEqual("Unit BC5 M1 Business Park Courtlough Balbriggan Co. Dublin");
      expect(phone1.getText()).toEqual("+35318410436");
      expect(lat1.getText()).toEqual("53.56284059999999");
      expect(lng1.getText()).toEqual("-6.183885099999999");
      
      expect(name11.getText()).toEqual("Landmark Estates");
      expect(address11.getText()).toEqual("21 Drogheda Street Balbriggan Co. Dublin");
      expect(phone11.getText()).toEqual("+35318414726");
      expect(lat11.getText()).toEqual("53.61055959999999");
      expect(lng11.getText()).toEqual("-6.1846006");
      
      expect(name22.getText()).toEqual("The Lifeboat Restaurant");
      expect(address22.getText()).toEqual("Harbour Road Skerries Co Dublin");
      expect(phone22.getText()).toEqual("+35318490109");
      expect(lat22.getText()).toEqual("53.585465");
      expect(lng22.getText()).toEqual("-6.1037089");
      
      //Check that the download link is valid using regex
      //expect(element(by.binding('obj[0].file_location')).toMatch(/https:\/\/s3-eu-west-1.amazonaws.com\/microdg-test\/.*.json/);
      
      
  });
    
  it('should return the correct business details from a search based on the "TOWN" parameter', function() {   
      
      element(by.model('townOptions.townParam')).sendKeys('Balbriggan');
      //Click to Return all business in the list
      element(by.id('townSearch')).click();
      
      
      //Retrieve the first, middle and last value for each row and column
      var name1 = element(by.exactRepeater("record in obj").row(0).column("record.b_name"));
      var address1 = element(by.exactRepeater("record in obj").row(0).column("record.b_address"));
      var phone1 = element(by.exactRepeater("record in obj").row(0).column("record.b_phone"));
      var lat1 = element(by.exactRepeater("record in obj").row(0).column("record.b_lat"));
      var lng1 = element(by.exactRepeater("record in obj").row(0).column("record.b_lng"));
        
      var name5 = element(by.exactRepeater("record in obj").row(5).column("record.b_name"));
      var address5 = element(by.exactRepeater("record in obj").row(5).column("record.b_address"));
      var phone5 = element(by.exactRepeater("record in obj").row(5).column("record.b_phone"));
      var lat5 = element(by.exactRepeater("record in obj").row(5).column("record.b_lat"));
      var lng5 = element(by.exactRepeater("record in obj").row(5).column("record.b_lng"));;
      
      var name11 = element(by.exactRepeater("record in obj").row(11).column("record.b_name"));
      var address11 = element(by.exactRepeater("record in obj").row(11).column("record.b_addres"));
      var phone11 = element(by.exactRepeater("record in obj").row(11).column("record.b_phone"));
      var lat11 = element(by.exactRepeater("record in obj").row(11).column("record.b_lat"));
      var lng11 = element(by.exactRepeater("record in obj").row(11).column("record.b_lng"));
      
      
      expect(name1.getText()).toEqual("Brooks Hire");
      expect(address1.getText()).toEqual("Unit BC5 M1 Business Park Courtlough Balbriggan Co. Dublin");
      expect(phone1.getText()).toEqual("+35318410436");
      expect(lat1.getText()).toEqual("53.56284059999999");
      expect(lng1.getText()).toEqual("-6.183885099999999");
           
      expect(name5.getText()).toEqual("Harvest Inn");
      expect(address5.getText()).toEqual("Drogheda Street Balbriggan Co. Dublin");
      expect(phone5.getText()).toEqual("+35318411265");
      expect(lat5.getText()).toEqual("53.6170923");
      expect(lng5.getText()).toEqual("-6.183674099999999");
        
      expect(name11.getText()).toEqual("Landmark Estates");
      expect(address11.getText()).toEqual("21 Drogheda Street Balbriggan Co. Dublin");
      expect(phone11.getText()).toEqual("+35318414726");
      expect(lat11.getText()).toEqual("53.61055959999999");
      expect(lng11.getText()).toEqual("-6.1846006");
      
      
  });
    
it('should return the correct business details based on the "COUNTY" parameter', function() {   
      
      element(by.model('countyOptions.countyParam')).sendKeys('Dublin');
      //Click to Return all business in the list
      element(by.id('countySearch')).click();
     
      //Retrieve the first, middle and last value for each row and column
      var name1 = element(by.exactRepeater("record in obj").row(0).column("record.b_name"));
      var address1 = element(by.exactRepeater("record in obj").row(0).column("record.b_addres"));
      var phone1 = element(by.exactRepeater("record in obj").row(0).column("record.b_phone"));
      var lat1 = element(by.exactRepeater("record in obj").row(0).column("record.b_lat"));
      var lng1 = element(by.exactRepeater("record in obj").row(0).column("record.b_lng"));
      
      var name11 = element(by.exactRepeater("record in obj").row(11).column("record.b_name"));
      var address11 = element(by.exactRepeater("record in obj").row(11).column("record.b_addres"));
      var phone11 = element(by.exactRepeater("record in obj").row(11).column("record.b_phone"));
      var lat11 = element(by.exactRepeater("record in obj").row(11).column("record.b_lat"));
      var lng11 = element(by.exactRepeater("record in obj").row(11).column("record.b_lng"));
      
      var name22 = element(by.exactRepeater("record in obj").row(22).column("record.b_name"));
      var address22 = element(by.exactRepeater("record in obj").row(22).column("record.b_addres"));
      var phone22 = element(by.exactRepeater("record in obj").row(22).column("record.b_phone"));
      var lat22 = element(by.exactRepeater("record in obj").row(22).column("record.b_lat"));
      var lng22 = element(by.exactRepeater("record in obj").row(22).column("record.b_lng"));
      
      expect(name1.getText()).toEqual("Brooks Hire");
      expect(address1.getText()).toEqual("Unit BC5 M1 Business Park Courtlough Balbriggan Co. Dublin");
      expect(phone1.getText()).toEqual("+35318410436");
      expect(lat1.getText()).toEqual("53.56284059999999");
      expect(lng1.getText()).toEqual("-6.183885099999999");
      
      expect(name11.getText()).toEqual("Landmark Estates");
      expect(address11.getText()).toEqual("21 Drogheda Street Balbriggan Co. Dublin");
      expect(phone11.getText()).toEqual("+35318414726");
      expect(lat11.getText()).toEqual("53.61055959999999");
      expect(lng11.getText()).toEqual("-6.1846006");
      
      expect(name22.getText()).toEqual("The Lifeboat Restaurant");
      expect(address22.getText()).toEqual("Harbour Road Skerries Co Dublin");
      expect(phone22.getText()).toEqual("+35318490109");
      expect(lat22.getText()).toEqual("53.585465");
      expect(lng22.getText()).toEqual("-6.1037089");
      
      //Check that the download link is valid using regex
      //expect(element(by.binding('obj[0].file_location')).toMatch(/https:\/\/s3-eu-west-1.amazonaws.com\/microdg-test\/.*.json/);
      
      
  });
    
it('should return the correct business details based on the "REGION" parameter', function() {   
      
      element(by.model('regionOptions.regionParam')).sendKeys('Leinster');
      //Click to Return all business in the list
      element(by.id('regionSearch')).click();
     
      //Retrieve the first, middle and last value for each row and column
      var name1 = element(by.exactRepeater("record in obj").row(0).column("record.b_name"));
      var address1 = element(by.exactRepeater("record in obj").row(0).column("record.b_addres"));
      var phone1 = element(by.exactRepeater("record in obj").row(0).column("record.b_phone"));
      var lat1 = element(by.exactRepeater("record in obj").row(0).column("record.b_lat"));
      var lng1 = element(by.exactRepeater("record in obj").row(0).column("record.b_lng"));
      
      var name11 = element(by.exactRepeater("record in obj").row(11).column("record.b_name"));
      var address11 = element(by.exactRepeater("record in obj").row(11).column("record.b_addres"));
      var phone11 = element(by.exactRepeater("record in obj").row(11).column("record.b_phone"));
      var lat11 = element(by.exactRepeater("record in obj").row(11).column("record.b_lat"));
      var lng11 = element(by.exactRepeater("record in obj").row(11).column("record.b_lng"));
      
      var name22 = element(by.exactRepeater("record in obj").row(22).column("record.b_name"));
      var address22 = element(by.exactRepeater("record in obj").row(22).column("record.b_addres"));
      var phone22 = element(by.exactRepeater("record in obj").row(22).column("record.b_phone"));
      var lat22 = element(by.exactRepeater("record in obj").row(22).column("record.b_lat"));
      var lng22 = element(by.exactRepeater("record in obj").row(22).column("record.b_lng"));
      
      expect(name1.getText()).toEqual("Brooks Hire");
      expect(address1.getText()).toEqual("Unit BC5 M1 Business Park Courtlough Balbriggan Co. Dublin");
      expect(phone1.getText()).toEqual("+35318410436");
      expect(lat1.getText()).toEqual("53.56284059999999");
      expect(lng1.getText()).toEqual("-6.183885099999999");
      
      expect(name11.getText()).toEqual("Landmark Estates");
      expect(address11.getText()).toEqual("21 Drogheda Street Balbriggan Co. Dublin");
      expect(phone11.getText()).toEqual("+35318414726");
      expect(lat11.getText()).toEqual("53.61055959999999");
      expect(lng11.getText()).toEqual("-6.1846006");
      
      expect(name22.getText()).toEqual("The Lifeboat Restaurant");
      expect(address22.getText()).toEqual("Harbour Road Skerries Co Dublin");
      expect(phone22.getText()).toEqual("+35318490109");
      expect(lat22.getText()).toEqual("53.585465");
      expect(lng22.getText()).toEqual("-6.1037089");
      
      //Check that the download link is valid using regex
      //expect(element(by.binding('obj[0].file_location')).toMatch(/https:\/\/s3-eu-west-1.amazonaws.com\/microdg-test\/.*.json/);
      
      
  });
    
    
});
