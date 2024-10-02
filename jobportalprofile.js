let profileForm = document.getElementById("profileForm");
let pfname = document.getElementById("pfname");
let plname = document.getElementById("plname");
let male = document.getElementById("male");
let female = document.getElementById("female");
let date = document.getElementById("date");
let fathname = document.getElementById("fathname");
let mothname = document.getElementById("mothname");
let ppno = document.getElementById("ppno");
let pemail = document.getElementById("pemail");
let pcountry = document.getElementById("pcountry");
let pstate = document.getElementById("pstate");
let pdistrict = document.getElementById("pdistrict");
let ppincode = document.getElementById("ppincode");
let pcity = document.getElementById("pcity");
let psubmit = document.getElementById("psubmit");
console.log("******************");
/*let userProList = [];
localStorage.setItem("userProList", JSON.stringify(userProList));*/
let userProList=JSON.parse(localStorage.getItem("userProList"));
let currentInsertionUser=JSON.parse(localStorage.getItem("currentUser"));
function insertionset(item)
{
    
    pfname.value=item.firstname
    plname.value=item.lastname
    /*if(item.gender==="male")
    {

    }*/
    date.value=item.dateofbirth
    fathname.value=item.father
    mothname.value=item.mother
    ppno.value=item.phoneno
    pemail.value=item.email
    pcountry.value=item.country
    pstate.value=item.state
    pdistrict.value=item.district
    ppincode.value=item.pincode
    pcity.value=item.city
   
}
let ramu;
let tejflag= userProList.findIndex(function(eachItem) {
    if (currentInsertionUser == eachItem.email) {
        //ramu=eachItem[email];
        return true;
    }
});
console.log(tejflag,"///////",currentInsertionUser);;

if(tejflag=== -1)
{
    //localStorage.setItem("jet",JSON.stringify(userProList[0][email]));
    alert("Enter all details to apply for jobs******");
}
else{
    //localStorage.setItem("jet",JSON.stringify(userProList[0][email]));
    let item=userProList[tejflag];
    //localStorage.setItem("chet",JSON.stringify(item));
    insertionset(item);
}



function validation(userProList, puobj) {
    let itemIndex = userProList.findIndex(function(eachItem) {
        if (puobj.email === eachItem.email) {
            return true;
        }
    });
    console.log(itemIndex);
    if (itemIndex !== -1) {
        console.log("already exists");
        userProList.splice(itemIndex, 1, puobj);
        console.log("already exists");
    } else if (itemIndex === -1) {
        console.log("Entered");
        userProList.push(puobj);
        console.log("Entered");
    }
    localStorage.setItem("userProList", JSON.stringify(userProList));
    userProList = JSON.parse(localStorage.getItem("userProList"));
    console.log("result userProList",userProList);
}

let puobj = {
        firstname: "",
        lastname: "",
        gender: "",
        dateofbirth: "",
        father: "",
        mother: "",
        phoneno: "",
        email: "",
        country: "",
        state: "",
        district: "",
        pincode: "",
        city: ""
    };
male.addEventListener("change", function(event) {
        puobj.gender = event.target.value;
    });
    female.addEventListener("change", function(event) {
        puobj.gender = event.target.value;
    });
psubmit.addEventListener("click", function(event) {
    event.preventDefault();
        puobj.firstname= pfname.value;
        puobj.lastname= plname.value;
        puobj.dateofbirth= date.value;
        puobj.father= fathname.value;
        puobj.mother= mothname.value;
        puobj.phoneno= ppno.value;
        puobj.email= pemail.value;
        puobj.country= pcountry.value;
        puobj.state= pstate.value;
        puobj.district= pdistrict.value;
        puobj.pincode= ppincode.value;
        puobj.city= pcity.value;
    console.log("hi****",puobj);
    console.log("******************************************");
    let flag = 0;
    for (let item in puobj) {
        console.log(typeof(puobj[item]),item);
        if(typeof(puobj[item])==="undefined" || puobj[item]==="" )
        {
            console.log("true");
            flag = 1;
            break;
        }
    }
    if (flag === 1) {
        alert("Enter all the details");
        return;
    }
    console.log(puobj);
    userProList = JSON.parse(localStorage.getItem("userProList"));
    console.log(userProList);
    validation(userProList, puobj);
    
    //userProList.push(puobj);
    //localStorage.setItem("userProList", JSON.stringify(userProList));
   /* let a = localStorage.getItem("userProList");
    console.log(a);*/
});


