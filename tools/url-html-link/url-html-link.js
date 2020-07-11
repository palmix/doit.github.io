
document.getElementById("newtext1").focus();

document.getElementById("addnewurl").addEventListener("click", function () {
var numberOfOptions = $('div.numurl').length + 1;

$('#urlhtmlall').append('<div class="input-group input-group-sm mt-1 mb-2 numurl"> <div class="input-group-prepend"><span class="input-group-text">'+numberOfOptions+'</span> </div><div class="input-group-prepend"><label for="newtext'+numberOfOptions+'" class="input-group-text">نص الرابط</label> </div> <input type="text" placeholder="أدخل نص الرابط..." name="pages_title['+numberOfOptions+']" id="newtext'+numberOfOptions+'" class="form-control"> <div class="input-group-prepend"> <label for="newurl'+numberOfOptions+'" class="input-group-text">عنوان URL</label> </div> <input type="text" placeholder="أدخل رابط URL..." name="pages_url['+numberOfOptions+']" id="newurl'+numberOfOptions+'" class="form-control"> </div>');
document.getElementById("newtext"+numberOfOptions).focus();

});







document.getElementById("convertURL").addEventListener("click", function () {
				document.getElementById("pages_title").value = "";
				document.getElementById("pages_url").value = "";
$('input[name^="pages_title"]').each(function() {
document.getElementById("pages_title").value += $(this).val()+"\n";
});
$('input[name^="pages_url"]').each(function() {
document.getElementById("pages_url").value += $(this).val()+"\n";
});







	//Get parameters
	var urlformat = document.getElementById("urlformat").value;
	var lTarget = document.getElementById("lTarget").value;
	var newCode = document.getElementById("pages_title").value ;
	var newCodeUrl = document.getElementById("pages_url").value ;

	
	var formatStart = "";
	var formatEnd = "";
	var targetCode = "";
	if(urlformat == "paragraph"){
		formatStart = "<p>";
		formatEnd = "</p>";
	}else if(urlformat == "br"){
		formatStart = "";
		formatEnd = "<br />";
	}else if(urlformat == "div"){
		formatStart = "<div>";
		formatEnd = "</div>";
	}else if(urlformat == "ul"){
		formatStart = "<li>";
		formatEnd = "</li>";
	}else if(urlformat == "ol"){
		formatStart = "<li>";
		formatEnd = "</li>";
	}else{
		formatStart = "";
		formatEnd = "";
	}
	if(lTarget != "nope"){
		targetCode = ' target="' + lTarget + '"';
	}
			
			var pages_title; 
				newCode = newCode.replace(/(\n\r|\n|\r)/gm,"XbreakX");
				re1a = /\s+/g;
				newCode = newCode.replace(re1a,"");
				re1b = /XbreakX/gi;
				newCode = newCode.replace(re1b," ");
				newCode = newCode.replace(re1a," ");
				newCode = newCode.trim();

				newCodeUrl = newCodeUrl.replace(/(\n\r|\n|\r)/gm,"XbreakX");
				re1a = /\s+/g;
				newCodeUrl = newCodeUrl.replace(re1a,"");
				re1b = /XbreakX/gi;
				newCodeUrl = newCodeUrl.replace(re1b," ");
				newCodeUrl = newCodeUrl.replace(re1a," ");
				newCodeUrl = newCodeUrl.trim();

				var newCodeArray = newCode.split(" ");
				var newCodeUrlArray = newCodeUrl.split(" ");
				newCode = "";
                for (var i = 0; i < newCodeArray.length; i++) {
				for (var i = 0; i < newCodeUrlArray.length; i++) {
					if (newCodeArray[i] != ""){
						if(i == newCodeArray.length -1 && urlformat == "br"){
							newCodeArray[i] = formatStart + '<a href="' + newCodeUrlArray[i] +'"' + targetCode + '>'+ newCodeArray[i] +'</a>\n';
						}else{
							newCodeArray[i] = formatStart + '<a href="' + newCodeUrlArray[i] +'"' + targetCode + '>'+ newCodeArray[i] +'</a>'+ formatEnd +'\n';
	    				}
						newCode = newCode + newCodeArray[i];
					}
				}
				}
				if(urlformat == "br"){
					newCode = "<p>\n" + newCode + "</p>";
				}
				if(urlformat == "ul"){
					newCode = "<ul>\n" + newCode + "</ul>";
				}
				if(urlformat == "ol"){
					newCode = "<ol>\n" + newCode + "</ol>";
				}
				
				document.getElementById("newCode").value = newCode;
				var preview = newCode.replace(/target="/g, 'data-target="')
				var preview = preview.replace(/href="/g, 'target="_blank" href="')
				document.getElementById("previewcode").innerHTML = preview;
	
	
});	

	//reset text areas
	document.getElementById("clearText").addEventListener("click", function () {
		document.getElementById("newCode").value = "";
        $("input:text").val("");
		document.getElementById("newtext1").focus();
	});	

	var textBox = document.getElementById("newCode");
	textBox.onfocus = function() {
		textBox.select();
		textBox.onmouseup = function() {
			textBox.onmouseup = null;
			return false;
		};
	};