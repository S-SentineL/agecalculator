const inputDate = document.getElementById("inputDate");
const inputMonth = document.getElementById("inputMonth");
const inputYear = document.getElementById("inputYear");
const button = document.getElementById("button");
const resultDate = document.getElementById("resultDate");
const resultMonth = document.getElementById("resultMonth");
const resultYear = document.getElementById("resultYear");

const redday = document.getElementById("redday");
const redmonth = document.getElementById("redmonth");
const redyear = document.getElementById("redyear");
const inputfield = document.getElementsByClassName("input-field")
const inputtext = document.getElementsByClassName("input-text")

const todayDateObject = new Date();
const todayDate = todayDateObject.getDate();
const todayMonth = todayDateObject.getMonth() + 1;
const todayYear = todayDateObject.getFullYear();

function datetoOb(d, m, y) {
    const date = [d, m, y];
    return date;
}

function calculateAge(dob, tod) {
    const [dobDay, dobMonth, dobYear] = dob.map(Number);
    const [todDay, todMonth, todYear] = tod.map(Number);

    let ageYears = todYear - dobYear;
    let ageMonths = todMonth - dobMonth;
    let ageDays = todDay - dobDay;

    if (ageMonths < 0 || (ageMonths === 0 && ageDays < 0)) {
        ageYears--;
        ageMonths += 12;
    }

    if (ageDays < 0) {
        const tempDate = new Date(todYear, todMonth - 1, 0);
        ageDays += tempDate.getDate();
        ageMonths--;
    }

    return [ageYears, ageMonths, ageDays];
}

function originalColor1() {
    redday.style.display = "none";
    inputfield[0].style.color = "";
    inputtext[0].style.border = "";
}

function originalColor2(){
    redmonth.style.display = "none";
    inputfield[1].style.color = "";
    inputtext[1].style.border = "";
}
function originalColor3(){
    redyear.style.display = "none";
    inputfield[2].style.color = "";
    inputtext[2].style.border = "";
}

function changeColor1() {
    redday.style.display = "block";
    inputfield[0].style.color = "red";
    inputtext[0].style.border = "solid 1px red";
}

function changeColor2(){
    redmonth.style.display = "block";
    inputfield[1].style.color = "red";
    inputtext[1].style.border = "solid 1px red";
}
function changeColor3(){
    redyear.style.display = "block";
    inputfield[2].style.color = "red";
    inputtext[2].style.border = "solid 1px red";
}

function onButtonclick() {
    const userDate = inputDate.value;
    const userMonth = inputMonth.value;
    const userYear = inputYear.value;

    if(userDate===0 && userMonth===0 && userYear===0){
        changeColor2();
        changeColor1();
        changeColor3();
    }

    else{
        originalColor1();
        originalColor2();
        originalColor3();
    }

    if (!userDate||userDate<=0||userDate>31) {
        changeColor1(); 
    }

    else if (userDate >= 0 && userDate <= 31){
        originalColor1();   
    }

    if (!userMonth||userMonth<=0 || userMonth>12) {
        changeColor2();

    }   

    else if (userMonth >= 0 && userMonth <= 12){
        originalColor2();
    }
    
    if (!userYear||userYear<=0 || userYear>2024) {
        changeColor3();     
    }

    else if (userYear >= 0 && userYear <= 2024){
        originalColor3();
    }


    const startDate = datetoOb(userDate, userMonth, userYear);
    const endDate = datetoOb(todayDate, todayMonth, todayYear);
    const age = calculateAge(startDate, endDate);
    console.log(age);

    resultYear.innerHTML = age[0];
    resultMonth.innerHTML = age[1];
    resultDate.innerHTML = age[2];
}

button.addEventListener("click", onButtonclick);    