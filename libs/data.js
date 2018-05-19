
function createResumeJSON(name,birth_year,gender,phone_number,email,position,edu_exp,work_exp,pass_count,pending_count,reject_count,undeal_count){
    var resume = {};
    resume['name'] = name;
    resume['birth_year'] = birth_year;
    resume['gender'] = gender;
    resume['phone_number']=phone_number;
    resume['email']=email;
    resume['position']=position;
    resume['edu_exp']=edu_exp;
    resume['work_exp']=work_exp;
    resume['pass_count'] = pass_count;
    resume['reject_count'] = reject_count;
    resume['pending_count'] = pending_count;
    resume['undeal_count'] = undeal_count;
    return JSON.stringify(resume);
}

function createEduExp(school,begin_year,end_year,major){
    var edu_exp=[];
    for(var i=0;i<school.length;i++){
        var edu = {};
        edu['school']=school[i];
        edu['begin_year']=begin_year[i];
        edu['end_year']=end_year[i];
        edu['major']=major[i];
        edu_exp.push(edu);
    }
    return JSON.stringify(edu_exp);
}
function createWorkExp(corporation,begin_year,begin_month,end_year,end_month,position,description){
    var work_exp=[];
    for(var i=0;i<corporation.length;i++){
        var work = {};
        work['corporation'] = corporation[i];
        work['begin_year'] = begin_year[i];
        work['begin_month'] = begin_month[i];
        work['end_year'] = end_year[i];
        work['end_month'] = end_month[i];
        work['position'] = position[i];
        work['description'] = description[i];
        work_exp.push(work);
    }
    return JSON.stringify(work_exp);
}

function createPersonalRecord(pass,pending,reject,undeal){
    var personalRecord={};
    personalRecord['pass'] = pass;
    personalRecord['pending'] = pending;
    personalRecord['reject'] = reject;
    personalRecord['undeal']= undeal;
    return JSON.stringify(personalRecord);
}
