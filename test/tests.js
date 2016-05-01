var assert = require("chai").assert;

describe("Learning Tests", function(){

  var then;

  beforeEach(function(){
    console.time("Test took");
  })

  afterEach(function(){
    console.timeEnd("Test took");
  })

  describe("If Statements", function(){
    describe("Incrementation", function(){
      it("should only enter 1 statement [ if(i++) ]", function(){
        var i = 0; // Our iterator
        var j = 0; // Our "If statement counter"
        if(i++) j+=1;
        if(i++) j+=1;
        assert.equal(j, 1);
      })

      it("should should enter both statements [ if(++i) ]", function(){
        var i = 0; // Our iterator
        var j = 0; // Our "If statement counter"
        if(++i) j+=1;
        if(++i) j+=1;
        assert.equal(j, 2);
      })
    })
  })

  describe("For Loops", function(){
    describe("Playground", function(){
      it("should skip the nth value", function(){
        var n = 5; // Value to skip
        var m = 10; // Target value
        
        for(var i=0, a=i-n; a<m-n; i++, a++){
          if(a){
            assert.notEqual(n, i);
          }
        }
      })

      it("should also skip the nth value, slightly faster", function(){
        var then = Date.now();
        var n = 5; // Value to skip
        var m = 10; // Target value
        
        for(var i=0; i<m; i++){
          switch(i){ // This works well for multiple skip values.
            case n:
              break;
            default:
              assert.notEqual(n, i);
            break;
          }
        }
      })
    })
  })
})
