const students = {
  name: "Ashish",
  marks: "100",
  prop: this, //global scope
  getname: function () {
    console.log(this);
    return this.name;
  },

  getmarks: () => {
    console.log(this);
    return this.marks;
  },

  getinfo1: function() {
    setTimeout( function() {
       console.log("ashish kumar") 
    }, 2000);
  },
  getinfo2: function(){
    setTimeout(() => {
      
    }, timeout);
  }  
};


