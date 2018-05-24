var TYPE = "-type";
var PWD = "-pwd";
var RESUME = "-resume";
var COMPANY_LIST = "company_list";
var COMPANY_AUTH_LIST = "company_auth_list_";
var COMPANY_REJECT_LIST = "company_reject_list_";
var COMPANY_ACCEPTED_LIST = "company_ACCEPTED_list_";
var SCHOOL_LIST = "school_list";
var SCHOOL_AUTH_LIST = "school_auth_list";
function getContractAddress(){
    return "n1zY8zmyPH2N6vyydUwaqyWG2MAcH6kiqLJ";
}

function dicToMyJSON(dict){
    return JSON.stringify(dict).replace(/"/g,"\'");
}

function myJSONParse(data){
    return JSON.parse(data.replace(/'/g,'"'));
}
