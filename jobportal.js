let postJobSubmit = document.getElementById("postJobSubmit");
let postCompanyName = document.getElementById("postCompanyName");
let postJobRole = document.getElementById("postJobRole");
let imageUrl = document.getElementById("imageUrl");
let WorkLocation = document.getElementById("WorkLocation");
let postStipend = document.getElementById("postStipend");
let postOpenings = document.getElementById("postOpenings");
let postApplyDate = document.getElementById("postApplyDate");
let postEducationCriteria = document.getElementById("postEducationCriteria");
let postYearOfGraduation = document.getElementById("postYearOfGraduation");
let postSkillsRequired = document.getElementById("postSkillsRequired");
let postInterviewProcess = document.getElementById("postInterviewProcess");
let alljobcontainer = document.getElementById("alljobcontainer");


let protebut=document.getElementById("protebut");
protebut.addEventListener("click",function(event)
{
    location.href="jobportalprofile.html";
    //F:\3rd year\web technologies\wt_lab_programs\jobportalprofile.html
});



//let jobpostlist = [];
let a = JSON.parse(localStorage.getItem("jobpostlist"));
console.log(a);
let jobpostlist = JSON.parse(localStorage.getItem("jobpostlist"));

let filtercompany = document.getElementById("filtercompany");
let filterlocation = document.getElementById("filterlocation");
let filterSearchButton = document.getElementById("filterSearchButton");

filterSearchButton.addEventListener("click", 
    function()
    {
        console.log("searching***************");
        let filcmpname = filtercompany.value;
        let filcmploc = filterlocation.value;
        console.log("filcmpname",filcmpname);
        console.log("filcmploc",filcmploc);

        if (filcmpname === "" && filcmploc === "") 
        {
            console.log("entered1");
            alljobcontainer.textContent = "";
            for (let item of jobpostlist) 
            {
                
                craeteAndAppend(item);
            }
            
        }
        else
        {
            alljobcontainer.textContent = "";
            for (let item of jobpostlist) 
            {
                console.log("entered2");
                /*if (item.companyname === filcmpname && item.locations === filcmploc) {
                    craeteAndAppend(item);
                    //item.name.toLowerCase().includes(event.target.value.toLowerCase())
                }*/
                /*console.log(item.comapanyname.toLowerCase(),filcmpname.toLowerCase());
                console.log(item.locations.toLowerCase(),filcmploc.toLowerCase());*/
                /*console.log((item.companyname).toLowerCase(),filcmpname.toLowerCase());
                console.log((item.locations).toLowerCase(),filcmploc.toLowerCase());*/
                if((item.comapanyname.toLowerCase().includes(filcmpname.toLowerCase())) && (item.locations.toLowerCase().includes(filcmploc.toLowerCase())))
                {
                    craeteAndAppend(item);
                }
            }   
        }


    }
);


console.log("test", jobpostlist);
for (let item of jobpostlist) {
    craeteAndAppend(item);
    console.log(item.imageurl, typeof(item.imageurl),"*-*-*--");
}

function updateLocalStorage(jobpostlist) {
    localStorage.setItem("jobpostlist", JSON.stringify(jobpostlist));
    jobpostlist = JSON.parse(localStorage.getItem("jobpostlist"));
    //console.log(jobpostlist);
}

function onAddJob() {
    let newJob = {
        comapanyname: postCompanyName.value,
        role: postJobRole.value,
        imageurl: imageUrl.value,
        locations: WorkLocation.value,
        stipend: postStipend.value,
        openings: postOpenings.value,
        applyby: postApplyDate.value,
        educationcriteria: postEducationCriteria.value,
        yearofgraduation: postYearOfGraduation.value,
        primaryskills: postSkillsRequired.value,
        interviewprocess: postInterviewProcess.value,
    };
    jobpostlist.push(newJob);
    updateLocalStorage(jobpostlist);
    alljobcontainer.textContent = "";
    //craeteAndAppend(newJob);
    for (let item of jobpostlist) {
        craeteAndAppend(item);
    }
}
postJobSubmit.addEventListener("click", onAddJob);







let postobj = {
    companyname: "WeVerve",
    role: "UI Developer Intern",
    imgurl: "https://res.cloudinary.com/learning-platform/image/fetch/dpr_auto,w_auto,f_auto,q_auto/https%3A%2F%2Fmedia.licdn.com%2Fdms%2Fimage%2FC560BAQHtCX4crNjDsg%2Fcompany-logo_200_200%2F0%2F1635608697084%3Fe%3D1700697600%26v%3Dbeta%26t%3DE5OGMe8US7SOfdVm5ozZOVKl-LiQv4o6unjtUa_cJVo",
    locations: "Work From Home",
    stipend: 10000,
    openings: 10,
    applyby: "8/24/2023",
    educationcriteria: "Any",
    yearofgraduation: 2024,
    primaryskills: "HTML,CSS,PYTHON,JAVASCRIPT",
    interviewprocess: "Profile Screening,Discussion,Technical Round"
};

function craeteAndAppend(companypostobj) {
    //comapanyname
    //console.log("just entered",companypostobj,companypostobj.companyname);
    let alljobcontainer = document.getElementById("alljobcontainer");
    let jobCardContainer = document.createElement("div");
    jobCardContainer.classList.add("col-5", "mr-3", "jobCardContainer", "p-3", "mt-2");
    alljobcontainer.appendChild(jobCardContainer);

    let companyContainer = document.createElement("div");
    companyContainer.classList.add("d-flex", "flex-row");
    jobCardContainer.appendChild(companyContainer);

    let companyTextContainer = document.createElement("div");
    companyContainer.appendChild(companyTextContainer);

    let companyHeading = document.createElement("p");
    //console.log("at the time of append heading",companypostobj.companyname);
    companyHeading.textContent = companypostobj.comapanyname;
    companyHeading.classList.add("cmpHead");
    companyTextContainer.appendChild(companyHeading);

    let companyRole = document.createElement("p");
    companyRole.textContent = companypostobj.role;
    companyRole.classList.add("cmpRole");
    companyTextContainer.appendChild(companyRole);

    let companyImage = document.createElement("img");
    companyImage.classList.add("cmpIconPro", "ml-auto");
    //console.log("at the time of append image",companypostobj.imageurl);
    companyImage.setAttribute("src", companypostobj.imageurl);
    companyContainer.appendChild(companyImage);

    let detailsContainer = document.createElement("div");
    detailsContainer.classList.add("d-flex", "flex-row", "justify-content-start", "mt-4");
    jobCardContainer.appendChild(detailsContainer);

    let locationContainer = document.createElement("div");
    locationContainer.classList.add("pro");
    detailsContainer.appendChild(locationContainer);

    let locationIcon = document.createElement("i");
    locationIcon.classList.add("fa-solid", "fa-location-dot", "proIcon");
    locationContainer.appendChild(locationIcon);

    let locationSpan = document.createElement("span");
    locationSpan.classList.add("proHead");
    locationSpan.textContent ="LOCATION" ;
    locationContainer.appendChild(locationSpan);

    let breakElement = document.createElement("br");
    locationContainer.appendChild(breakElement);

    let locationDesc = document.createElement("p");
    locationDesc.textContent = companypostobj.locations;
    locationDesc.classList.add("proDesc");
    locationContainer.appendChild(locationDesc);

    let stipendContainer = document.createElement("div");
    stipendContainer.classList.add("pro");
    detailsContainer.appendChild(stipendContainer);

    let stipendIcon = document.createElement("i");
    stipendIcon.classList.add("fa-solid", "fa-location-dot", "proIcon");
    stipendContainer.appendChild(stipendIcon);

    let stipendSpan = document.createElement("span");
    stipendSpan.classList.add("proHead");
    stipendSpan.textContent = "STIPEND";
    stipendContainer.appendChild(stipendSpan);

    //let breakElement=document.createElement("br");
    stipendContainer.appendChild(breakElement);

    let stipendDesc = document.createElement("p");
    stipendDesc.textContent = companypostobj.stipend;
    stipendDesc.classList.add("proDesc");
    stipendContainer.appendChild(stipendDesc);


    let openingContainer = document.createElement("div");
    openingContainer.classList.add("pro");
    detailsContainer.appendChild(openingContainer);

    let openingIcon = document.createElement("i");
    openingIcon.classList.add("fa-solid", "fa-location-dot", "proIcon");
    openingContainer.appendChild(openingIcon);

    let openingSpan = document.createElement("span");
    openingSpan.classList.add("proHead");
    openingSpan.textContent = "OPENINGS";
    openingContainer.appendChild(openingSpan);

    //let breakElement=document.createElement("br");
    openingContainer.appendChild(breakElement);

    let openingDesc = document.createElement("p");
    openingDesc.textContent = companypostobj.openings;
    openingDesc.classList.add("proDesc");
    openingContainer.appendChild(openingDesc);

    let applyContainer = document.createElement("div");
    applyContainer.classList.add("pro");
    jobCardContainer.appendChild(applyContainer);

    let applyIcon = document.createElement("i");
    applyIcon.classList.add("fa-solid", "fa-location-dot", "proIcon");
    applyContainer.appendChild(applyIcon);

    let applySpan = document.createElement("span");
    applySpan.classList.add("proHead");
    applySpan.textContent = "APPLY BY";
    applyContainer.appendChild(applySpan);

    //let breakElement=document.createElement("br");
    applyContainer.appendChild(breakElement);

    let applyDesc = document.createElement("p");
    applyDesc.textContent = companypostobj.applyby;
    applyDesc.classList.add("proDesc");
    applyContainer.appendChild(applyDesc);

    let viewDetails = document.createElement("button");
    viewDetails.textContent = "ApplyNow";
    viewDetails.classList.add("ml-auto","postbut");
    jobCardContainer.appendChild(viewDetails);

    viewDetails.addEventListener("click",function(event)
    {
        console.log(event.target.textContent);
        if(event.target.textContent==="ApplyNow")
        {
        event.target.textContent="Applied";
        
        console.log(event.target.textContent);
        alert("You are now applied for this Job  and your profile details are shared whith the company",companypostobj.comapanyname);
        }
        else if(event.target.textContent==="Applied"){
            alert("You are already applied");
        }

    });

    let arrowIcon = document.createElement("i");
    arrowIcon.classList.add("fa-solid", "fa-arrow-right");
    viewDetails.appendChild(arrowIcon);
}

/*craeteAndAppend(postobj);
craeteAndAppend(postobj);
craeteAndAppend(postobj);
craeteAndAppend(postobj);*/