var TYPE = "-type";
var PWD = "-pwd";
var RESUME = "-resume";
var USER = "";
var COMPANY = "";
function getContractAddress(){
    return "n1pFAiC6ceTQq3EQ31Z3jvtR3v6xDieWjKF";
}

function dicToMyJSON(dict){
    return JSON.stringify(dict).replace(/"/g,"\'");
}

function myJSONParse(data){
    return JSON.parse(data.replace(/'/g,'"'));
}
