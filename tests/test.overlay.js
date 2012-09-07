define(['overlay/overlay',
        'chai'],
function(Overlay, chai) {
  var expect = chai.expect;

  describe("overlay", function() {
    
    it('should export constructor', function() {
      expect(Overlay).to.exist;
      expect(Overlay).to.be.a('function');
    });
    
  });
  
  return { name: "test.overlay" }
});
