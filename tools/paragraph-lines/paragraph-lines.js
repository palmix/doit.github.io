function textalign() {
var x = document.getElementById("textalign").value;
if (x == "right"){
document.getElementById("oldText").style.textAlign = "right";
document.getElementById("oldText").style.direction = "rtl";
}else{
document.getElementById("oldText").style.textAlign = "left";
document.getElementById("oldText").style.direction = "ltr";
}}
function singleLine(){

var noBreaksText = document.getElementById("oldText").value;

noBreaksText = noBreaksText.replace(/(\r\n|\n|\r)/gm,"<1br />");

re1 = /<1br \/><1br \/>/gi;
re1a = /<1br \/><1br \/><1br \/>/gi;


noBreaksText = noBreaksText.replace(re1," ");


re2 = /\<1br \/>/gi;
noBreaksText = noBreaksText.replace(re2, " ");

re3 = /\s+/g;
noBreaksText = noBreaksText.replace(re3," ");

re4 = /<2br \/>/gi;
noBreaksText = noBreaksText.replace(re4,"\n\n");
document.getElementById("oldText").value = noBreaksText;
}

//reset text areas
document.getElementById("clearText").addEventListener("click", function () {
	document.getElementById("oldText").value = "";
	document.getElementById("oldText").focus();
});

var textBox = document.getElementById("oldText");
	textBox.onfocus = function() {
	textBox.select();
	textBox.onmouseup = function() {
		textBox.onmouseup = null;
		return false;
	};
};	