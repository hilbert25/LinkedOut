// var value = "{'a-resume':'{'name':'二狗','gender':'男','email':'1','birth_year':'1900','phone_number':'2','edu_exp':'[{'school':'a','major':'a','degree':'学士','edu_begin_year':'1900','edu_begin_month':'1','edu_end_year':'1900','edu_end_month':'1','edu_auth_state':'尚未认证'}]'}'}";
// function myJSONParse(value){
//     value = value.replace(/'/g,'"');
//     return JSON.parse(value);
// }

var data ={};
data["a-resume"]={"name":"","gender":"男","email":"","birth_year":"1900","phone_number":""};
var t = {"school":"x","degree":"doctor"}
data["edu"]=t;
console.log(data);
data = JSON.stringify(data);
data = data.replace(/"/g,"'");
data = data.replace(/'/g,'"');

data = JSON.parse(data);

resume = eval(data["a-resume"]);
for(k in resume){
    console.log(k,resume[k]);
}
edu = eval(data['edu'])
for(k in edu){
    console.log(k,edu[k]);
}

