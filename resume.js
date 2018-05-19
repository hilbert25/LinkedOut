'use strict';
var god_address = "n1cYKNHTeVW9v1NQRWuhZZn9ETbqAYozckh";
var ResumeContract = function () {
};
ResumeContract.prototype = {
    init : function () {

    },
    get: function(key){
        return LocalContractStorage.get(key);
    },
    set:function(value){//序列化为JSON
        var dict = JSON.parse(value.replace(/'/g, '"'));
        for(var k in dict){
            LocalContractStorage.set(k,dict[k]);
        }
    }
}
module.exports = ResumeContract;