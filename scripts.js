// Buttons
const steps = Array.from(document.querySelectorAll("form .step"));
const nextBtn = document.querySelectorAll("form .next-btn");
const prevBtn = document.querySelectorAll("form .previous-btn");
const form = document.querySelector("form");

nextBtn.forEach((button) => {
button.addEventListener("click", () => {
changeStep("next");
});
});
prevBtn.forEach((button) => {
button.addEventListener("click", () => {
changeStep("prev");
});
});
form.addEventListener("submit", (e) => {
e.preventDefault();
const inputs = [];
form.querySelectorAll("input").forEach((input) => {
const { name, value } = input;
inputs.push({ name, value });
});
console.log(inputs);
form.reset();
});
function changeStep(btn) {
let index = 0;
const active = document.querySelector(".active");
index = steps.indexOf(active);
steps[index].classList.remove("active");
if (btn === "next") {
index++;
} else if (btn === "prev") {
index--;
}
steps[index].classList.add("active");
}

// Hidden Radio and Checkbox Buttons //
function show1(){
  document.getElementById('div1').style.display = 'block';
}
function show2(){
  document.getElementById('div2').style.display = 'block';
}
function show3(){
  document.getElementById('div3').style.display = 'block';
}
function show4(){
  document.getElementById('div4').style.display = 'block';
}
function show5(){
  document.getElementById('div5').style.display = 'block';
}
function show6(){
  document.getElementById('div6').style.display = 'block';
}
function show7(){
	  document.getElementById('div7').style.display = 'block';
}
function show8(){
  document.getElementById('div8').style.display = 'block';
}
function show9(){
  document.getElementById('div9').style.display = 'block';
}
function show10(){
  document.getElementById('div10').style.display = 'block';
}
function show11(){
  document.getElementById('div11').style.display = 'block';
}
function show12(){
  document.getElementById('div12').style.display = 'block';
}
function show13(){
  document.getElementById('div13').style.display = 'block';
}
function show14(){
  document.getElementById('div14').style.display = 'block';
}
function show15(){
  document.getElementById('div15').style.display = 'block';
}
function show16(){
  document.getElementById('div16').style.display = 'block';
}
function show17(){
  document.getElementById('div17').style.display = 'block';
}
function show18(){
  document.getElementById('div18').style.display = 'block';
}
function show19(){
  document.getElementById('div19').style.display = 'block';
}
function show20(){
  document.getElementById('div20').style.display = 'block';
}
function show21(){
  document.getElementById('div21').style.display = 'block';
}
function show22(){
  document.getElementById('div22').style.display = 'block';
}
function show23(){
  document.getElementById('div23').style.display = 'block';
}
function show24(){
  document.getElementById('div24').style.display = 'block';
}
function show25(){
  document.getElementById('div25').style.display = 'block';
}
function show26(){
  document.getElementById('div26').style.display = 'block';
}
function show27(){
  document.getElementById('div27').style.display = 'block';
}
function show28(){
  document.getElementById('div28').style.display = 'block';
}
function show29(){
  document.getElementById('div29').style.display = 'block';
}
function show30(){
  document.getElementById('div30').style.display = 'block';
}
function show31(){
  document.getElementById('div31').style.display = 'block';
}
function show32(){
  document.getElementById('div32').style.display = 'block';
}
function show33(){
  document.getElementById('div33').style.display = 'block';
}
function show34(){
  document.getElementById('div34').style.display = 'block';
}
function show35(){
  document.getElementById('div35').style.display = 'block';
}
function show36(){
  document.getElementById('div36').style.display = 'block';
}
function show37(){
  document.getElementById('div37').style.display = 'block';
}
function show38(){
  document.getElementById('div38').style.display = 'block';
}
function show39(){
  document.getElementById('div39').style.display = 'block';
}
function show40(){
  document.getElementById('div40').style.display = 'block';
}
function show41(){
  document.getElementById('div41').style.display = 'block';
}
function show42(){
  document.getElementById('div42').style.display = 'block';
}
function show43(){
  document.getElementById('div43').style.display = 'block';
}
function show44(){
  document.getElementById('div44').style.display = 'block';
}
function show45(){
  document.getElementById('div45').style.display = 'block';
}
function show46(){
  document.getElementById('div46').style.display = 'block';
}
function show47(){
  document.getElementById('div47').style.display = 'block';
}
function show48(){
  document.getElementById('div48').style.display = 'block';
}
function show49(){
  document.getElementById('div49').style.display = 'block';
}
function show50(){
  document.getElementById('div50').style.display = 'block';
}
function show51(){
  document.getElementById('div51').style.display = 'block';
}
function show52(){
  document.getElementById('div52').style.display = 'block';
}
function show53(){
  document.getElementById('div53').style.display = 'block';
}
function show54(){
  document.getElementById('div54').style.display = 'block';
}
function show55(){
  document.getElementById('div55').style.display = 'block';
}
function show56(){
  document.getElementById('div56').style.display = 'block';
}
function show57(){
  document.getElementById('div57').style.display = 'block';
}
function show58(){
  document.getElementById('div58').style.display = 'block';
}
function show59(){
  document.getElementById('div59').style.display = 'block';
}
function show60(){
  document.getElementById('div60').style.display = 'block';
}
function show61(){
  document.getElementById('div61').style.display = 'block';
}
function show62(){
  document.getElementById('div62').style.display = 'block';
}
function show63(){
  document.getElementById('div63').style.display = 'block';
}
function show64(){
  document.getElementById('div64').style.display = 'block';
}
function show65(){
  document.getElementById('div65').style.display = 'block';
}
function show66(){
  document.getElementById('div66').style.display = 'block';
}
function show67(){
  document.getElementById('div67').style.display = 'block';
}
function show68(){
  document.getElementById('div68').style.display = 'block';
}
	
	// Automatic Computation Of Age //
	function formatDate(date){
	var d = new Date(date),
	month = '' + (d.getMonth() + 1),
	day = '' + d.getDate(),
	year = d.getFullYear();
	
	if (month.length < 2) month = '0' + month;
	if (day.length < 2) day = '0' + day;
	
	return [year, month, day].join('-');
	}
	
	function getAge(dateString){
	var birthdate = new Date().getTime();
	if (typeof dateString === 'undefined' || dateString === null || (String(dateString) === 'NaN')){
	//
	birthdate = new Date().getTime();
	}
	birthdate = new Date(dateString).getTime();
	var now = new Date().getTime();
	//
	var n = (now - birthdate)/1000;
	if (n < 604800){ // less than a week
	var day_n = Math.floor(n/86400);
	if (typeof day_n === 'undefined' || day_n === null || (String(day_n) === 'NaN')){
	//
	return '';
	}else{
	return day_n + ' day' + (day_n > 1 ? 's' : '') + ' old';
	}
	} else if (n < 2629743){ // less than a month
	var week_n = Math.floor(n/604800);
	if (typeof week_n === 'undefined' || week_n === null || (String(week_n) === 'NaN')){
	return '';
	}else{
	return week_n + ' week' + (week_n > 1 ? 's' : '') + ' old';
	}
	} else if (n < 31562417){ // less than 24 months
	var month_n = Math.floor(n/2629743);
	if (typeof month_n === 'undefined' || month_n === null || (String(month_n) === 'NaN')){
	return '';
	}else{
	return month_n + ' month' + (month_n > 1 ? 's' : '') + ' old';
	}
	}else{
	var year_n = Math.floor(n/31556926);
	if (typeof year_n === 'undefined' || year_n === null || (String(year_n) === 'NaN')){
	return year_n = '';
	}else{
	return year_n + ' year' + (year_n > 1 ? 's' : '') + ' old';
	}
	}
	}
	
	function getAgeVal(pid){
	var birthdate = formatDate(document.getElementById("txtbirthdate").value);
	var count = document.getElementById("txtbirthdate").value.length;
	if (count=='10'){
	var age = getAge(birthdate);
	var str = age;
	var res = str.substring(0, 1);
	if (res =='-' || res =='0'){
	document.getElementById("txtbirthdate").value = "";
	document.getElementById("txtage").value = "";
	$('#txtbirthdate').focus();
	return false;
	}else{
	document.getElementById("txtage").value = age;
	}
	}else{
	document.getElementById("txtage").value = "";
	return false;
	}
	}

//Automatic Computation of Body Mass Index //
function computeBMI() {
	var height = Number(document.getElementById("height").value);
	var heightunits = document.getElementById("heightunits").value;
	var weight = Number(document.getElementById("weight").value);
	var weightunits = document.getElementById("weightunits").value;

//Convert units to metric
	if (heightunits == "inches") height /= 39.3700787;
	if (weightunits == "lb") weight /= 2.20462;

//The Calculation
	//var BMI = weight /Math.pow(height, 2)*10000;
	var BMI = Math.round(weight / Math.pow(height, 2) * 10000);
	  
//Display the result of BMI
document.getElementById("output").innerText = Math.round(BMI * 100) / 100;
	var output = Math.round(BMI * 100) / 100
		if (output < 18.5)
			document.getElementById("comment").innerText = "Underweight";
		else if (output >= 18.5 && output <= 25)
			document.getElementById("comment").innerText = "Normal";
		else if (output >= 25 && output <= 30)
			document.getElementById("comment").innerText = "Obese";
		else if (output > 30)
			document.getElementById("comment").innerText = "Overweight";
		// document.getElementById("answer").value = output; 
}

//Input Image //
const image_input = document.querySelector("#image-input");

image_input.addEventListener("change", function() {
  const reader = new FileReader();
  reader.addEventListener("load", () => {
    const uploaded_image = reader.result;
    document.querySelector("#display-image").style.backgroundImage = `url(${uploaded_image})`;
  });
  reader.readAsDataURL(this.files[0]);
});

// Range Slider //
var slider = document.getElementById("myRange");
var output = document.getElementById("demo");
output.innerHTML = slider.value;

slider.oninput = function() {
  output.innerHTML = this.value;
}

//Adding New rows to the table //
function create_tr(table_id) {
    let table_body = document.getElementById(table_id),
        first_tr   = table_body.firstElementChild
        tr_clone   = first_tr.cloneNode(true);
    table_body.append(tr_clone);
    clean_first_tr(table_body.firstElementChild);
}
function create_tr(table_id) {
    let table_first = document.getElementById(table_id),
        first_tr   = table_first.firstElementChild
        tr_clone   = first_tr.cloneNode(true);
    table_first.append(tr_clone);
    clean_first_tr(table_first.firstElementChild);
}
function create_tr(table_id) {
    let table_second = document.getElementById(table_id),
        first_tr   = table_second.firstElementChild
        tr_clone   = first_tr.cloneNode(true);
	table_second.append(tr_clone);
    clean_first_tr(table_second.firstElementChild);
}
function create_tr(table_id) {
    let table_third = document.getElementById(table_id),
        first_tr   = table_third.firstElementChild
        tr_clone   = first_tr.cloneNode(true);
	table_third.append(tr_clone);
    clean_first_tr(table_third.firstElementChild);
}
function create_tr(table_id) {
    let table_fourth = document.getElementById(table_id),
        first_tr   = table_fourth.firstElementChild
        tr_clone   = first_tr.cloneNode(true);
	table_fourth.append(tr_clone);
    clean_first_tr(table_fourth.firstElementChild);
}
function create_tr(table_id) {
    let table_fifth = document.getElementById(table_id),
        first_tr   = table_fifth.firstElementChild
        tr_clone   = first_tr.cloneNode(true);
	table_fifth.append(tr_clone);
    clean_first_tr(table_fifth.firstElementChild);
}
function create_tr(table_id) {
    let table_sixth = document.getElementById(table_id),
        first_tr   = table_sixth.firstElementChild
        tr_clone   = first_tr.cloneNode(true);
	table_sixth.append(tr_clone);
    clean_first_tr(table_sixth.firstElementChild);
}
function create_tr(table_id) {
    let table_seventh = document.getElementById(table_id),
        first_tr   = table_seventh.firstElementChild
        tr_clone   = first_tr.cloneNode(true);
	table_seventh.append(tr_clone);
    clean_first_tr(table_seventh.firstElementChild);
}
function create_tr(table_id) {
    let table_eight = document.getElementById(table_id),
        first_tr   = table_eight.firstElementChild
        tr_clone   = first_tr.cloneNode(true);
	table_eight.append(tr_clone);
    clean_first_tr(table_eight.firstElementChild);
}
function create_tr(table_id) {
    let table_ninth = document.getElementById(table_id),
        first_tr   = table_ninth.firstElementChild
        tr_clone   = first_tr.cloneNode(true);
	table_ninth.append(tr_clone);
    clean_first_tr(table_ninth.firstElementChild);
}
function create_tr(table_id) {
    let table_tenth = document.getElementById(table_id),
        first_tr   = table_tenth.firstElementChild
        tr_clone   = first_tr.cloneNode(true);
	table_tenth.append(tr_clone);
    clean_first_tr(table_tenth.firstElementChild);
}
function create_tr(table_id) {
    let table_eleven = document.getElementById(table_id),
        first_tr   = table_eleven.firstElementChild
        tr_clone   = first_tr.cloneNode(true);
	table_eleven.append(tr_clone);
    clean_first_tr(table_eleven.firstElementChild);
}
function clean_first_tr(firstTr) {
    let children = firstTr.children;
    
    children = Array.isArray(children) ? children : Object.values(children);
    children.forEach(x=>{
        if(x !== firstTr.lastElementChild)
        {
            x.firstElementChild.value = '';
        }
    });
}

// Review of Section Automatic count of Checked Radio //
$(document).ready(function() {
    $('input').change(function(){
        var ADL = $('.ADL-radio:checked').length
        var IADL = $('.IADL-radio:checked').length 
        $('.ADL-radio_results').text(ADL)
        $('.IADL-radio_results').text(IADL)                        
    })
});