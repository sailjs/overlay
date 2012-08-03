define(['view',
        'anchor/class'],
function(View, clazz) {
  
  function Overlay(el, options) {
    options = options || {};
    
    Overlay.super_.call(this, el);
    this._autoRemove = options.autoRemove !== undefined ? options.autoRemove : true;
    this._init(options);
  }
  clazz.inherits(Overlay, View);
  
  Overlay.prototype._init = function(options) {
    var el = this.el
      , self = this;
      
    // TODO: Only append elements if they are not already present
    el.appendTo(document.body);
    if (options.closable) {
      el.on('click', function() {
        self.hide();
        return false;
      });
    }
  }
  
  Overlay.prototype.show = function() {
    this.emit('show');
    this.el.removeClass('hide');
    return this;
  }
  
  Overlay.prototype.hide = function() {
    var self = this;
    this.emit('hide');
    this.el.addClass('hide');
    if (this._autoRemove) {
      setTimeout(function() {
        self.el.remove();
      }, 2000);
    }
    return this;
  }
  
  return Overlay;
});
