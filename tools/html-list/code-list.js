document.getElementById("html-list").addEventListener("click", function () {
	
	var allHTML = document.getElementById("oldCode").value;
	var headstatus = document.getElementById("headstatus").checked;
	var litype = document.getElementById("litype");
	var litypeval= litype.options[litype.selectedIndex].value;
	var septype = document.getElementById("septype");
	var septypeval= septype.options[septype.selectedIndex].value;
	
	if (septypeval == "lines" || septypeval == ""){
		septypeval = '\n';
	}
	allHTML = allHTML.trim();
	allHTML = allHTML.replace(new RegExp(septypeval,"gi"),'</li>\n<li>');
	allHTML = "<li>"+allHTML+"</li>";
	if (litypeval == "ordered"){
		allHTML = "<ol>\n"+allHTML+"\n</ol>";
	}else{
		allHTML = "<ul>\n"+allHTML+"\n</ul>";
	}
	if(headstatus == true){
		//Compress all the things!
		allHTML = allHTML.replace(/(\r\n|\n|\r|\t)/gm,"");
		allHTML = allHTML.replace(/\s+/g," ");
	}
editor.setValue(allHTML);

});	

//reset text areas
document.getElementById("clearText").addEventListener("click", function () {
	document.getElementById("oldCode").value = "";
	editor.setValue("");
	document.getElementById("oldCode").focus();
});
document.getElementById("oldCode").value = "أمثلة/n مثال 1/n مثال 2/n مثال 3/n";
  var editor = CodeMirror.fromTextArea(document.getElementById("newCode"), {
    mode: "text/html",
    readOnly: true,
    htmlMode: true,
   lineNumbers: true,
    lineWrapping: true,
    smartIndent: false,
    addModeClass: true,
	value: "<ul>/n	<li>أمثلة</li>/n	<li>مثال 1</li>/n	<li>مثال 2</li>/n	<li>مثال 3</li>/n</ul>"
  });
