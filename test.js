// var value = "{'a-resume':'{'name':'二狗','gender':'男','email':'1','birth_year':'1900','phone_number':'2','edu_exp':'[{'school':'a','major':'a','degree':'学士','edu_begin_year':'1900','edu_begin_month':'1','edu_end_year':'1900','edu_end_month':'1','edu_auth_state':'尚未认证'}]'}'}";
// function myJSONParse(value){
//     value = value.replace(/'/g,'"');
//     return JSON.parse(value);
// }

var data = {"a-resume":{"name":"","gender":"男","email":"","birth_year":"1900","phone_number":""}};
data = JSON.stringify(data);
data = data.replace(/"/g,"'");
data = data.replace(/'/g,'"');
data = JSON.parse(data);
for(k in data){
    console.log(k,data[k]);
}

