import assert from "assert";
import allFromTown from "../allFromTown.js";

describe('Test my fromWhere-allFromTownFunction' , function(){
    it("it should return all the registration numbers in the string that is for that town " , function(){
        var fromStellies = allFromTown('CL 124,CY 567,CL 345, CJ 456,CL 341','CL');
        assert.deepEqual(fromStellies, ['CL 124', 'CL 345', 'CL 341'])

        assert.deepEqual([2,2],[2,2]);
    });
    it("it should return all the registration numbers in the string that is for that town " , function(){
        var fromStellies = allFromTown('CL 124,CY 567,CL 345, CJ 456,CL 341','CJ');
        assert.deepEqual(fromStellies, ['CJ 456']);

        assert.deepEqual([2,2],[2,2]);
    });
    it("it should return all the registration numbers in the string that is for that town " , function(){
        var fromKuilsriver = allFromTown('CL 124,CY 567,CL 345, CJ 456,CL 341','CF');
        assert.deepEqual(fromKuilsriver, []);

        assert.deepEqual([2,2],[2,2]);
    });

});