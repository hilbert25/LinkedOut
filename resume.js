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
        var count = 0;
        for(var i=0;i<value.length;i++){
            if(value[i]=="'"){
                value = value.substring(0,i)+'"'+value.substring(i+1,value.length);
                count++;
            }
            if(count == 3){
                break;
            }
        }
        value = value.substring(0,value.length-2)+'"'+value.substring(value.length-1,value.length);
        var dict = JSON.parse(value);
        for(var k in dict){
            LocalContractStorage.set(k,dict[k]);
        }
    }
}
module.exports = ResumeContract;