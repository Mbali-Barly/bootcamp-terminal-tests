import assert from "assert";
import greet from "../greet.js";

describe('Test my greetFunction' , function(){
    it("it should return 'Mbali' when called with 'Mbali' " , function(){
        assert.equal("Hello, Mbali", greet("Mbali"));    

        assert.deepEqual([2,2],[2,2]);
    });
    it("it should return 'Tsholo' when called with 'Tsholo' " , function(){
       assert.equal("Hello, Tsholo", greet("Tsholo"));    
   });
    it("it should return 'Gugu' when called with 'Gugu' " , function(){
       assert.equal("Hello, Gugu", greet("Gugu"));    
   });

});