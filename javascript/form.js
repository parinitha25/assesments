function signup(){
var reg= /^([A-Za-z0-9_\-\.]){1,}\@([A-Za-z_\-\.]){1,}\.([A-Za-z]){2,4}$/;
var reg1=/^([A-Za-z0-9\@]){8,}$/;
var reg2=/^([0-9]){3}-([0-9]){3}-([0-9]){4}$/;
var reg3=/^([0-9]){4,}$/;
var reg4=/^([A-Za-z0-9\@]){8,}$/;
var firstname=document.forms.fname.value;
var lastname=document.forms.lname.value;
var email=document.forms.ename.value;
var phone=document.forms.pname.value;
var str1=document.forms.s1name.value;
var str2=document.forms.s2name.value;
var city=document.forms.cname.value;
var state=document.forms.sname.value;
var zip=document.forms.zname.value;
var pwd=document.forms.crname.value;
var vpwd=document.forms.vname.value;


if(firstname=='null' || firstname=="") {
document.getElementById("pfname").innerHTML="First name cananot be blank";
document.getElementById("fname1").style.color="#ff0000b5";
document.getElementById("ifname").style.border="1px solid #ff0000b5";
}
if(lastname=='null' || lastname=="") {
document.getElementById("plname").innerHTML="last name cananot be blank";
document.getElementById("lname1").style.color="#ff0000b5";
document.getElementById("ilname").style.border="1px solid #ff0000b5";
}
if(email=='null' || email=="") {
document.getElementById("pename").innerHTML="email  cananot be blank";
document.getElementById("ename1").style.color="#ff0000b5";
document.getElementById("iename").style.border="1px solid #ff0000b5";
}
else if(reg.test(email)){

}
else{
	document.getElementById("pename").innerHTML="Please enter valid email";

}
if(phone=='null' || phone=="") {
document.getElementById("pname").innerHTML="phone number cananot be blank";
document.getElementById("pname1").style.color="#ff0000b5";
document.getElementById("ipname").style.border="1px solid #ff0000b5";
}
else if(reg2.test(phone)){

}
else{
	document.getElementById("pname").innerHTML="Please enter valid phone number";
}
if(str1=='null' || str1=="") {
document.getElementById("ps1name").innerHTML="address1  cananot be blank";
document.getElementById("s1name1").style.color="#ff0000b5";
document.getElementById("is1name").style.border="1px solid #ff0000b5";
}
if(str2=='null' || str2=="") {
document.getElementById("ps2name").innerHTML="address2  cananot be blank";
document.getElementById("s2name1").style.color="#ff0000b5";
document.getElementById("is2name").style.border="1px solid #ff0000b5";
}
if(city=='null' || city=="") {
document.getElementById("pcname").innerHTML="city name cananot be blank";
document.getElementById("cname1").style.color="#ff0000b5";
document.getElementById("icname").style.border="1px solid #ff0000b5";
}
if(state=='null' || state=="") {
document.getElementById("psname").innerHTML="state name  cananot be blank";
document.getElementById("sname1").style.color="#ff0000b5";
document.getElementById("isname").style.border="1px solid #ff0000b5";
}
if(zip=='null' || zip=="") {
document.getElementById("pzname").innerHTML="zip code  cananot be blank";
document.getElementById("zname1").style.color="#ff0000b5";
document.getElementById("izname").style.border="1px solid #ff0000b5";
}
else if(reg3.test(zip)){

}
else{
	document.getElementById("pzname").innerHTML="Please enter valid zip code";
}
if(pwd=='null' || pwd=="") {
document.getElementById("pcrname").innerHTML="password  cananot be blank";
document.getElementById("crname1").style.color="#ff0000b5";
document.getElementById("icrname").style.border="1px solid #ff0000b5";
}
else if(reg1.test(pwd)){

}
else{
	document.getElementById("pcrname").innerHTML="Please enter valid password";

}
if(vpwd=='null' || vpwd=="") {
document.getElementById("pvname").innerHTML="verify password  cananot be blank";
document.getElementById("vname1").style.color="#ff0000b5";
document.getElementById("ivname").style.border="1px solid #ff0000b5";
}
else if(reg4.test(vpwd) && pwd==vpwd){

}
else{
	document.getElementById("pvname").innerHTML="mismatch password";
}	
}
