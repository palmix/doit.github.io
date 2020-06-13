document.getElementById("code-list").addEventListener("click", function () {
	
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
document.getElementById("oldCode").value = "أمثلة\nمثال 1\nمثال 2\nمثال 3";
  var editor = CodeMirror.fromTextArea(document.getElementById("newCode"), {
    mode: "text/html",
    readOnly: true,
    htmlMode: true,
   lineNumbers: true,
    lineWrapping: true,
    smartIndent: false,
    addModeClass: true
  });
	editor.setValue(" <ul>\n	<li>أمثلة</li>\n	<li>مثال 1</li>\n	<li>مثال 2</li>\n	<li>مثال 3</li>\n </ul>");