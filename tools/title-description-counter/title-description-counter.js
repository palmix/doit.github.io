function countCharacters(){
	
		//get title text
		var titleText = document.getElementById("oldText").value;
		titleText = titleText.trim();
		//get rid of extra white spaces
		re1 = /\s+/g;
		titleText = titleText.replace(re1," ");
		
		//get desscription text
		var titleDesc = document.getElementById("newText").value;
		titleDesc = titleDesc.trim();
		//get rid of extra white spaces
		re1 = /\s+/g;
		titleDesc = titleDesc.replace(re1," ");


		if (titleText == "" && titleDesc == ""){
			var zeResults = "&nbsp;";
		}else{
			var titles;
			var titledescs;
if (titleText.length < 60 ){
	titles = '<b class="text-success">'+titleText.length+'</b>';
}else{
	titles = '<b class="text-danger">'+titleText.length+'</b>';
}
if (titleDesc.length < 160 ){
	titledescs = '<b class="text-success">'+titleDesc.length+'</b>';
}else{
	titledescs = '<b class="text-danger">'+titleDesc.length+'</b>';
}



				if (titleText !== ""){
					var pTitleLen = "<p><b>العنوان:</b> " + titles + " حرف.</p>"; 
				}else{
					var pTitleLen = "";
				}

				if (titleDesc !== ""){
					var pDescLen = "<p><b>الوصف:</b> " + titledescs + " حرف.</p>"; 
				}else{
					var pDescLen = "";
				}
					var zeResults = pTitleLen + pDescLen + "&nbsp;";
			
		}





		
		
		
		//Put new title back in place
		document.getElementById("oldText").value = titleText;
		document.getElementById("newText").value = titleDesc;
		document.getElementById("copyStr").value = titleText + "&nbsp;\r\n\r\n" + titleDesc;
		document.getElementById("theResults").innerHTML = zeResults;
		}

//reset text areas
document.getElementById("clearText").addEventListener("click", function () {
	document.getElementById("theResults").innerHTML = "&nbsp;";
	document.getElementById("oldText").value = "";
	document.getElementById("newText").value = "";
	document.getElementById("copyStr").value = "";
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