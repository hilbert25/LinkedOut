var TYPE = "-type";
var PWD = "-pwd";
var RESUME = "-resume";
var COMPANY_LIST = "company_list";
var COMPANY_AUTH_LIST = "company_auth_list_";
var COMPANY_REJECT_LIST = "company_reject_list_";
var COMPANY_ACCEPTED_LIST = "company_ACCEPTED_list_";
var SCHOOL_LIST = "school_list";
var SCHOOL_AUTH_LIST = "school_auth_list";
var BASIC_INFO = "basic_info";
var WORK_EXP = "work_exp";
var EDU_EXP = "edu_exp";
function getContractAddress(){
    return "n1zY8zmyPH2N6vyydUwaqyWG2MAcH6kiqLJ";
}

function dicToMyJSON(dict){
    return JSON.stringify(dict).replace(/"/g,"\'");
}

function myJSONParse(data){
    if(data!=null)
        return JSON.parse(data.replace(/'/g,'"'));
    else
        return data;
}
