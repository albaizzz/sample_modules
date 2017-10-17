'use strict';

var expect = require("chai").expect;
var numFormatter = require('../index');


describe("#numFormatter", function(){
    it("should convert digits", function(){
        var result = numFormatter(100);
        expect(result).to.equal('100');
    });
});
