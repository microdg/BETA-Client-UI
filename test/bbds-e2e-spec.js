describe('MicroDG App', function() {
  
  beforeEach(function() {
    browser.get('http://127.0.0.1:8887/BBDS-dashboard.html');
  });
    
  it('should have a title', function() {
      expect(browser.getTitle()).toEqual('Base Business Details Service Dashboard');
  });

    
  it('should return the correct business details from a search based on the "ALL" parameter', function() {   
      
      //Click to Return all business in the list
      element(by.id('allSearch')).click();
      
      //Retrieve the count
      var count = element(by.binding('bbds_business_list.length'));
      
      //Retrieve the first, middle and last value for each row and column
      var name1 = element(by.exactRepeater("record in bbds_business_list").row(0).column("record.name"));
      var address1 = element(by.exactRepeater("record in bbds_business_list").row(0).column("record.address"));
      var town1 = element(by.exactRepeater("record in bbds_business_list").row(0).column("record.town"));
      var county1 = element(by.exactRepeater("record in bbds_business_list").row(0).column("record.county"));
      var region1 = element(by.exactRepeater("record in bbds_business_list").row(0).column("record.region"));
      
      var name11 = element(by.exactRepeater("record in bbds_business_list").row(11).column("record.name"));
      var address11 = element(by.exactRepeater("record in bbds_business_list").row(11).column("record.address"));
      var town11 = element(by.exactRepeater("record in bbds_business_list").row(11).column("record.town"));
      var county11 = element(by.exactRepeater("record in bbds_business_list").row(11).column("record.county"));
      var region11 = element(by.exactRepeater("record in bbds_business_list").row(11).column("record.region"));
      
      var name22 = element(by.exactRepeater("record in bbds_business_list").row(22).column("record.name"));
      var address22 = element(by.exactRepeater("record in bbds_business_list").row(22).column("record.address"));
      var town22 = element(by.exactRepeater("record in bbds_business_list").row(22).column("record.town"));
      var county22 = element(by.exactRepeater("record in bbds_business_list").row(22).column("record.county"));
      var region22 = element(by.exactRepeater("record in bbds_business_list").row(22).column("record.region"));
      
      //Check the expected results
      expect(count.getText()).toEqual("38");
      
      expect(name1.getText()).toEqual("Brooks Hire");
      expect(address1.getText()).toEqual("Unit BC5 M1 Business Park Courtlough Balbriggan Co. Dublin");
      expect(town1.getText()).toEqual("Balbriggan");
      expect(county1.getText()).toEqual("Dublin");
      expect(region1.getText()).toEqual("Leinster");
      
      expect(name11.getText()).toEqual("Landmark Estates");
      expect(address11.getText()).toEqual("21 Drogheda Street Balbriggan Co. Dublin");
      expect(town11.getText()).toEqual("Balbriggan");
      expect(county11.getText()).toEqual("Dublin");
      expect(region11.getText()).toEqual("Leinster");
      
      expect(name22.getText()).toEqual("The Lifeboat Restaurant");
      expect(address22.getText()).toEqual("Harbour Road Skerries Co Dublin");
      expect(town22.getText()).toEqual("Skerries");
      expect(county22.getText()).toEqual("Dublin");
      expect(region22.getText()).toEqual("Leinster");
      
      //Check the detailed record viewer
      element(by.model('p1')).sendKeys(0);
      
      expect(element(by.binding('bbds_business_list[p1].name')).getText()).toEqual('Name: Brooks Hire');
      expect(element(by.binding('bbds_business_list[p1].channel')).getText()).toEqual('Catagorey: retail ( hire )');
      expect(element(by.binding('bbds_business_list[p1].phone')).getText()).toEqual('Phone: +35318410436');
      expect(element(by.binding('bbds_business_list[p1].address')).getText()).toEqual('Address: Unit BC5 M1 Business Park Courtlough Balbriggan Co. Dublin');
      expect(element(by.binding('bbds_business_list[p1].town')).getText()).toEqual('Town: Balbriggan');
      expect(element(by.binding('bbds_business_list[p1].county')).getText()).toEqual('County: Dublin');
      expect(element(by.binding('bbds_business_list[p1].region')).getText()).toEqual('Region: Leinster');
      
      
  });
    
    it('should return the correct business details from a search based on the "TOWN" parameter', function() {   
      
      element(by.model('townOptions.townParam')).sendKeys('Balbriggan');
      //Click to Return all business in the list
      element(by.id('townSearch')).click();
      
      //Retrieve the count
      var count = element(by.binding('bbds_business_list.length'));
      
      //Retrieve the first, middle and last value for each row and column
      var name1 = element(by.exactRepeater("record in bbds_business_list").row(0).column("record.name"));
      var address1 = element(by.exactRepeater("record in bbds_business_list").row(0).column("record.address"));
      var town1 = element(by.exactRepeater("record in bbds_business_list").row(0).column("record.town"));
      var county1 = element(by.exactRepeater("record in bbds_business_list").row(0).column("record.county"));
      var region1 = element(by.exactRepeater("record in bbds_business_list").row(0).column("record.region"));
        
      var name5 = element(by.exactRepeater("record in bbds_business_list").row(5).column("record.name"));
      var address5 = element(by.exactRepeater("record in bbds_business_list").row(5).column("record.address"));
      var town5 = element(by.exactRepeater("record in bbds_business_list").row(5).column("record.town"));
      var county5 = element(by.exactRepeater("record in bbds_business_list").row(5).column("record.county"));
      var region5 = element(by.exactRepeater("record in bbds_business_list").row(5).column("record.region"));
      
      var name11 = element(by.exactRepeater("record in bbds_business_list").row(11).column("record.name"));
      var address11 = element(by.exactRepeater("record in bbds_business_list").row(11).column("record.address"));
      var town11 = element(by.exactRepeater("record in bbds_business_list").row(11).column("record.town"));
      var county11 = element(by.exactRepeater("record in bbds_business_list").row(11).column("record.county"));
      var region11 = element(by.exactRepeater("record in bbds_business_list").row(11).column("record.region"));
      
      //Check the expected results
      expect(count.getText()).toEqual("12");
      
      expect(name1.getText()).toEqual("Brooks Hire");
      expect(address1.getText()).toEqual("Unit BC5 M1 Business Park Courtlough Balbriggan Co. Dublin");
      expect(town1.getText()).toEqual("Balbriggan");
      expect(county1.getText()).toEqual("Dublin");
      expect(region1.getText()).toEqual("Leinster");
           
      expect(name5.getText()).toEqual("Harvest Inn");
      expect(address5.getText()).toEqual("Drogheda Street Balbriggan Co. Dublin");
      expect(town5.getText()).toEqual("Balbriggan");
      expect(county5.getText()).toEqual("Dublin");
      expect(region5.getText()).toEqual("Leinster");
        
      expect(name11.getText()).toEqual("Landmark Estates");
      expect(address11.getText()).toEqual("21 Drogheda Street Balbriggan Co. Dublin");
      expect(town11.getText()).toEqual("Balbriggan");
      expect(county11.getText()).toEqual("Dublin");
      expect(region11.getText()).toEqual("Leinster");

      
      //Check the detailed record viewer
      element(by.model('p1')).sendKeys(0);
      
      expect(element(by.binding('bbds_business_list[p1].name')).getText()).toEqual('Name: Brooks Hire');
      expect(element(by.binding('bbds_business_list[p1].channel')).getText()).toEqual('Catagorey: retail ( hire )');
      expect(element(by.binding('bbds_business_list[p1].phone')).getText()).toEqual('Phone: +35318410436');
      expect(element(by.binding('bbds_business_list[p1].address')).getText()).toEqual('Address: Unit BC5 M1 Business Park Courtlough Balbriggan Co. Dublin');
      expect(element(by.binding('bbds_business_list[p1].town')).getText()).toEqual('Town: Balbriggan');
      expect(element(by.binding('bbds_business_list[p1].county')).getText()).toEqual('County: Dublin');
      expect(element(by.binding('bbds_business_list[p1].region')).getText()).toEqual('Region: Leinster');
      
      
  });
    
  it('should return the correct business details from a search based on the "COUNTY" parameter', function() {   
      
      element(by.model('countyOptions.countyParam')).sendKeys('Dublin');
      //Click to Return all business in the list
      element(by.id('countySearch')).click();
      
      //Retrieve the count
      var count = element(by.binding('bbds_business_list.length'));
      
      //Retrieve the first, middle and last value for each row and column
      var name1 = element(by.exactRepeater("record in bbds_business_list").row(0).column("record.name"));
      var address1 = element(by.exactRepeater("record in bbds_business_list").row(0).column("record.address"));
      var town1 = element(by.exactRepeater("record in bbds_business_list").row(0).column("record.town"));
      var county1 = element(by.exactRepeater("record in bbds_business_list").row(0).column("record.county"));
      var region1 = element(by.exactRepeater("record in bbds_business_list").row(0).column("record.region"));
      
      var name11 = element(by.exactRepeater("record in bbds_business_list").row(11).column("record.name"));
      var address11 = element(by.exactRepeater("record in bbds_business_list").row(11).column("record.address"));
      var town11 = element(by.exactRepeater("record in bbds_business_list").row(11).column("record.town"));
      var county11 = element(by.exactRepeater("record in bbds_business_list").row(11).column("record.county"));
      var region11 = element(by.exactRepeater("record in bbds_business_list").row(11).column("record.region"));
      
      var name22 = element(by.exactRepeater("record in bbds_business_list").row(22).column("record.name"));
      var address22 = element(by.exactRepeater("record in bbds_business_list").row(22).column("record.address"));
      var town22 = element(by.exactRepeater("record in bbds_business_list").row(22).column("record.town"));
      var county22 = element(by.exactRepeater("record in bbds_business_list").row(22).column("record.county"));
      var region22 = element(by.exactRepeater("record in bbds_business_list").row(22).column("record.region"));
      
      //Check the expected results
      expect(count.getText()).toEqual("23");
      
      expect(name1.getText()).toEqual("Brooks Hire");
      expect(address1.getText()).toEqual("Unit BC5 M1 Business Park Courtlough Balbriggan Co. Dublin");
      expect(town1.getText()).toEqual("Balbriggan");
      expect(county1.getText()).toEqual("Dublin");
      expect(region1.getText()).toEqual("Leinster");
      
      expect(name11.getText()).toEqual("Landmark Estates");
      expect(address11.getText()).toEqual("21 Drogheda Street Balbriggan Co. Dublin");
      expect(town11.getText()).toEqual("Balbriggan");
      expect(county11.getText()).toEqual("Dublin");
      expect(region11.getText()).toEqual("Leinster");
      
      expect(name22.getText()).toEqual("The Lifeboat Restaurant");
      expect(address22.getText()).toEqual("Harbour Road Skerries Co Dublin");
      expect(town22.getText()).toEqual("Skerries");
      expect(county22.getText()).toEqual("Dublin");
      expect(region22.getText()).toEqual("Leinster");
      
      //Check the detailed record viewer
      element(by.model('p1')).sendKeys(0);
      
      expect(element(by.binding('bbds_business_list[p1].name')).getText()).toEqual('Name: Brooks Hire');
      expect(element(by.binding('bbds_business_list[p1].channel')).getText()).toEqual('Catagorey: retail ( hire )');
      expect(element(by.binding('bbds_business_list[p1].phone')).getText()).toEqual('Phone: +35318410436');
      expect(element(by.binding('bbds_business_list[p1].address')).getText()).toEqual('Address: Unit BC5 M1 Business Park Courtlough Balbriggan Co. Dublin');
      expect(element(by.binding('bbds_business_list[p1].town')).getText()).toEqual('Town: Balbriggan');
      expect(element(by.binding('bbds_business_list[p1].county')).getText()).toEqual('County: Dublin');
      expect(element(by.binding('bbds_business_list[p1].region')).getText()).toEqual('Region: Leinster');
      
      
  });
    
  it('should return the correct business details from a search based on the "REGIONS" parameter', function() {   
      
      element(by.model('regionOptions.regionParam')).sendKeys('Leinster');
      //Click to Return all business in the list
      element(by.id('regionSearch')).click();
      
      //Retrieve the count
      var count = element(by.binding('bbds_business_list.length'));
      
      //Retrieve the first, middle and last value for each row and column
      var name1 = element(by.exactRepeater("record in bbds_business_list").row(0).column("record.name"));
      var address1 = element(by.exactRepeater("record in bbds_business_list").row(0).column("record.address"));
      var town1 = element(by.exactRepeater("record in bbds_business_list").row(0).column("record.town"));
      var county1 = element(by.exactRepeater("record in bbds_business_list").row(0).column("record.county"));
      var region1 = element(by.exactRepeater("record in bbds_business_list").row(0).column("record.region"));
      
      var name11 = element(by.exactRepeater("record in bbds_business_list").row(11).column("record.name"));
      var address11 = element(by.exactRepeater("record in bbds_business_list").row(11).column("record.address"));
      var town11 = element(by.exactRepeater("record in bbds_business_list").row(11).column("record.town"));
      var county11 = element(by.exactRepeater("record in bbds_business_list").row(11).column("record.county"));
      var region11 = element(by.exactRepeater("record in bbds_business_list").row(11).column("record.region"));
      
      var name22 = element(by.exactRepeater("record in bbds_business_list").row(22).column("record.name"));
      var address22 = element(by.exactRepeater("record in bbds_business_list").row(22).column("record.address"));
      var town22 = element(by.exactRepeater("record in bbds_business_list").row(22).column("record.town"));
      var county22 = element(by.exactRepeater("record in bbds_business_list").row(22).column("record.county"));
      var region22 = element(by.exactRepeater("record in bbds_business_list").row(22).column("record.region"));
      
      //Check the expected results
      expect(count.getText()).toEqual("23");
      
      expect(name1.getText()).toEqual("Brooks Hire");
      expect(address1.getText()).toEqual("Unit BC5 M1 Business Park Courtlough Balbriggan Co. Dublin");
      expect(town1.getText()).toEqual("Balbriggan");
      expect(county1.getText()).toEqual("Dublin");
      expect(region1.getText()).toEqual("Leinster");
      
      expect(name11.getText()).toEqual("Landmark Estates");
      expect(address11.getText()).toEqual("21 Drogheda Street Balbriggan Co. Dublin");
      expect(town11.getText()).toEqual("Balbriggan");
      expect(county11.getText()).toEqual("Dublin");
      expect(region11.getText()).toEqual("Leinster");
      
      expect(name22.getText()).toEqual("The Lifeboat Restaurant");
      expect(address22.getText()).toEqual("Harbour Road Skerries Co Dublin");
      expect(town22.getText()).toEqual("Skerries");
      expect(county22.getText()).toEqual("Dublin");
      expect(region22.getText()).toEqual("Leinster");
      
      //Check the detailed record viewer
      element(by.model('p1')).sendKeys(0);
      
      expect(element(by.binding('bbds_business_list[p1].name')).getText()).toEqual('Name: Brooks Hire');
      expect(element(by.binding('bbds_business_list[p1].channel')).getText()).toEqual('Catagorey: retail ( hire )');
      expect(element(by.binding('bbds_business_list[p1].phone')).getText()).toEqual('Phone: +35318410436');
      expect(element(by.binding('bbds_business_list[p1].address')).getText()).toEqual('Address: Unit BC5 M1 Business Park Courtlough Balbriggan Co. Dublin');
      expect(element(by.binding('bbds_business_list[p1].town')).getText()).toEqual('Town: Balbriggan');
      expect(element(by.binding('bbds_business_list[p1].county')).getText()).toEqual('County: Dublin');
      expect(element(by.binding('bbds_business_list[p1].region')).getText()).toEqual('Region: Leinster');
      
      
  });
    
    
});
