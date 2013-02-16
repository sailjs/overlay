define(['overlay'],
function(Overlay) {

  describe("overlay", function() {
    
    it('should export constructor', function() {
      expect(Overlay).to.exist;
      expect(Overlay).to.be.a('function');
    });
    
  });
  
  return { name: "test.overlay" }
});
