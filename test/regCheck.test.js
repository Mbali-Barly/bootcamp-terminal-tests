import assert from "assert";
import regCheck from "../regCheck.js";

describe('Test my regCheckFunction' , function(){
    it('it should check if a registration number is for GP, L, EC, MP registration plates' , function(){
        assert.equal(regCheck('DC 55 YU GP', 'GP'), true);

        assert.deepEqual([2,2],[2,2]);
    });
    it('it should check if a registration number is for GP, L, EC, MP registration plates' , function(){
        assert.equal(regCheck('DC 55 YU GP', 'EC'), false);

        assert.deepEqual([2,2],[2,2]);
    });
    it('it should check if a registration number is for GP, L, EC, MP registration plates' , function(){
        assert.equal(regCheck('5566 L', 'L'), true);

        assert.deepEqual([2,2],[2,2]);
    });
    it('it should check if a registration number is for GP, L, EC, MP registration plates' , function(){
        assert.equal(regCheck('5566 L', 'M'), false);

        assert.deepEqual([2,2],[2,2]);
    });
    it('it should check if a registration number is for GP, L, EC, MP registration plates' , function(){
        assert.equal(regCheck('ERT 123 EC', 'EC'), true);

        assert.deepEqual([2,2],[2,2]);
    });
    it('it should check if a registration number is for GP, L, EC, MP registration plates' , function(){
        assert.equal(regCheck('ERT 123 EC', 'GP'), false);

        assert.deepEqual([2,2],[2,2]);
    });
    it('it should check if a registration number is for GP, L, EC, MP registration plates' , function(){
        assert.equal(regCheck('FGT 123 MP', 'MP'), true);

        assert.deepEqual([2,2],[2,2]);
    });
    it('it should check if a registration number is for GP, L, EC, MP registration plates' , function(){
        assert.equal(regCheck('FGT 123 MM', 'MP'), false);

        assert.deepEqual([2,2],[2,2]);
    });

});