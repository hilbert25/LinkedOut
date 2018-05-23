var data = {};
data = JSON.stringify(data);
data = eval(data);
for(k in data){
    console.log(k,data[k]);
}