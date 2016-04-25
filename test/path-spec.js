describe('MicroDG App', function() {
  
  beforeEach(function() {
    browser.get('http://127.0.0.1:8887/index.html');
  });
    
  it('should have a title', function() {
      expect(browser.getTitle()).toEqual('MicroDG');
      
      element(by.id('sgBtn1')).click();
      
      
      expect(browser.getTitle()).toEqual('Service Gateway');
  });
    
});