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
        value = value.replace(/'/g,'"');
        var dict = JSON.parse(value);
        for(var k in dict){
            LocalContractStorage.set(k,dict[k]);
        }
    }
}
module.exports = ResumeContract;