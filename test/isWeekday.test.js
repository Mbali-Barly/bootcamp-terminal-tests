import assert from "assert";
import isWeekday from "../isWeekday.js";

describe('Test my isWeekdayFunction' , function(){
    it("it should find out if the parameter passed in is a day of the week" , function(){
        assert.equal(isWeekday('Monday'), true); 

        assert.deepEqual([2,2],[2,2]);
    });

    it("it should find out if the parameter passed in is a day of the week" , function(){
        assert.equal(isWeekday('Tuesday'), true);  

        assert.deepEqual([2,2],[2,2]);
    });
    it("it should find out if the parameter passed in is a day of the week" , function(){
        assert.equal(isWeekday('Wednesday'), true);  

        assert.deepEqual([2,2],[2,2]);
    });
    it("it should find out if the parameter passed in is a day of the week" , function(){
        assert.equal(isWeekday('Thursday'), true);  

        assert.deepEqual([2,2],[2,2]);
    });
    it("it should find out if the parameter passed in is a day of the week" , function(){
        assert.equal(isWeekday('Friday'), true);  

        assert.deepEqual([2,2],[2,2]);
    });
    it("it should find out if the parameter passed in is a day of the week" , function(){
        assert.equal(isWeekday('Saturday'), false);  

        assert.deepEqual([2,2],[2,2]);
    });
    it("it should find out if the parameter passed in is a day of the week" , function(){
        assert.equal(isWeekday('Sunday'), false);  

        assert.deepEqual([2,2],[2,2]);
    });

});