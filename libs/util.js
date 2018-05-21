var TYPE = "-type";
var PWD = "-pwd";
var RESUME = "-resume";
function getContractAddress(){
    return "n1tucGYf2q4aF4DK5XzBy7t3WEfs5wZfYSo";
}

function dicToMyJSON(dict){
    return JSON.stringify(dict).replace(/"/g,"\'");
}

function myJSONParse(data){
    return JSON.parse(data.replace(/'/g,'"'));
}