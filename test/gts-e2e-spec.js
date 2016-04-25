describe('MicroDG App', function() {
  
  beforeEach(function() {
    browser.get('http://127.0.0.1:8887/GTS-dashboard.html');
  });
    
  it('should have a title', function() {
      expect(browser.getTitle()).toEqual('Geo Tagging Service Dashboard');
  });

    
  it('should return the correct lat & ln values', function() {   
      element(by.model('addressParam')).sendKeys('115A Sarsfield Park Lucan Co Dublin');
      
      element(by.id('callWS')).click();
      
      expect(element(by.binding('query_address')).getText()).
        toEqual('115A Sarsfield Park Lucan Co Dublin');
      
      expect(element(by.binding('g_cords_list[0].lat')).getText()).
        toEqual('53.35870269999999');
      
      expect(element(by.binding('g_cords_list[0].lng')).getText()).
        toEqual('-6.4438657'); 
  });
    
    
});