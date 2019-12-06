const Ray = () => {
  return {
    length : 0,
  
  push: function(value) {
  this[this.length] = value
  this.length ++
  },
  pop : function(){
    const previous = this[this.length - 1];
    delete this[this.length - 1];
    this.length--;
    
    return previous

  },

  shift: function(){
    const firstItem = this[0];
      for (let i = 0; i < this.length - 1; i++) {
        this[i] = this[i + 1]
      }

      delete this[this.length - 1];
      this.length--;
      return firstItem;
   
  },

  unshift : function(value){
    for (let i = this.length; i > 0; i--) {
      this[i] = this[i - 1]
    }
    this[0] = value;
    this.length++;
  },
}
}

module.exports = {
  Ray,
}