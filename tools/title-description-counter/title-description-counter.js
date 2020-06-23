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
if (titleText.length < 61 ){
	titles = '<b class="text-success">'+titleText.length+'</b>';
}else{
	titles = '<b class="text-danger">'+titleText.length+'</b>';
}
if (titleDesc.length < 161 ){
	titledescs = '<b class="text-success">'+titleDesc.length+'</b>';
}else{
	titledescs = '<b class="text-danger">'+titleDesc.length+'</b>';
}



				if (titleText !== ""){
					var pTitleLen = "<table class='table table-bordered'><tr><th>العنوان</th><td>"+titles+" حرف.</td></tr>"; 
				}else{
					var pTitleLen = "<table class='table table-bordered'>";
				}

				if (titleDesc !== ""){
					var pDescLen = "<tr><th scope='row'>الوصف</th><td scope='row'>" + titledescs + "  حرف.</td></tr>"; 
				}else{
					var pDescLen = "</table>";
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