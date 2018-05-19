var value ={"name":"a","age":"1"};
value = JSON.stringify(value);
value = value.replace(/"/g, "\"");
value = "\""+value+"\"";
console.log(value);
value = value.substring(1,value.length-1);
console.log(value);
// value = JSON.parse(value.replace(/'/g, '"'));
// console.log(value);
// for(var i =0;i<value.length;i++){
//     console.log(value[i]);
// }