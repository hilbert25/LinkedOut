var value ={"name":"a","age":"1","exp":"{\"org\":\"xiaomi\"}"};
value = JSON.stringify(value);
value = JSON.parse(value);
for(var k in value){
    console.log(k,value[k]);
}
function replaceCharByPos(str,pos,rep){
    return str.substring(0,pos)+rep+str.substring(pos+1,str.length);
}
console.log(replaceCharByPos("abc",1,"c"));