var TYPE = "-type";
var PWD = "-pwd";
var RESUME = "-resume";
function getContractAddress(){
    return "n1pV9NTmvV3HrJeP3WgBzzTiinZr7Gtc5Nt";
}

function dicToMyJSON(dict){
    return JSON.stringify(dict).replace(/"/g,"\'");
}

function replaceCharByPos(str,pos,rep){
    return str.substring(0,pos)+rep+str.substring(pos+1,str.length);
}

function myJSONParse(value){
    var count = 0;
    for(var i=0;i<value.length;i++){
        if(value[i]=="'"){
            value = replaceCharByPos(value,i,'"');
            count++;
        }
        if(count == 3){
            break;
        }
    }
    value = replaceCharByPos(value,value.length-2,'"');
    return JSON.parse(value);
}