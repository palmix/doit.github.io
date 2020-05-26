
  var editor = CodeMirror.fromTextArea(document.getElementById("newCode"), {
    mode: "text/html",
    readOnly: true,
    htmlMode: true,
   lineNumbers: true,
    lineWrapping: true,
    smartIndent: false,
    addModeClass: true

  });
function b64EncodeUnicode(e){return btoa(unescape(encodeURIComponent(e)))}function b64DecodeUnicode(e){return decodeURIComponent(escape(atob(e)))}var awsec=window.location.hostname,awsecdom=awsec.substring(awsec.lastIndexOf(".",awsec.lastIndexOf(".")-1)+1),b64awsec=b64EncodeUnicode(awsecdom);

document.addEventListener('DOMContentLoaded', function () {
		
	var sizeCols = "";
	var sizeRows = "";
	var tableColor = "";
	var tableColor2 = "";
	var tableColor2b = "";
	var tableDesign = "";
	var tableInfo = "";
	var tableHighlight = "";
	var tableJS = "";
	var tableCSS = "";
	var tableHTML = "";
	var pageTableHTML = "";
	var tableEND = "";
	var newTable = "";
	var newTableCode = "";
	var awHighlight = "";
	var awHighlightb = "";
  
	var textaligntable = "";
	var borderawtable = "";
	var backgroundtable = "";
	var borderth = "";
	var backgroundtr = "";
	var bordertd = "";
	var backgroundtrhover = "";
	var awtablefontsize;
	var thfontsize;
	var tdfontsize;
	var awtableborderwidth;
	var thawtableborderwidth;
	var tdawtableborderwidth;
	var awtablewidthpx;
	var awtablewidthpercent;
	var awtablewidth;
	var awtablethpadding;
	var awtabletdpadding;
	var awtablecolor;
	var tdtablecolor;

	function makeTableCode(){
		if (b64awsec == "ZG9pdGYuY29t"){
		tableColor = document.getElementById('tableColor').value;
		tableDesign = document.getElementById('tableDesign').value;
		sizeCols = document.getElementById('sizeCols').value;
		sizeRows = document.getElementById('sizeRows').value;
		textaligntable = document.getElementById('textaligntable').value;
		if (sizeCols == "0"){sizeCols = "1";document.getElementById('sizeCols').value = "1";}
		if (sizeRows == "0"){sizeRows = "1";document.getElementById('sizeRows').value = "1";}
		tableInfo = document.getElementById('tableInfo');
		tableHighlight = document.getElementById('tableHighlight');
		tableCSS = "";

			if(tableColor == "Blue"){

              borderawtable = '#729ea5;';
              backgroundtable ='#acc8cc;';
              borderth ='#d4e3e5;';
              backgroundtr ='#d4e3e5;';
              bordertd ='#729ea5;';
              backgroundtrhover ='#ffffff;';
              awtablecolor ='#000;';
              tdtablecolor ='#000;';
              
              
		if(tableDesign == "alternating"){
        backgroundtable ='#acc8cc;';
        }else if(tableDesign == "minimal"){
              backgroundtable ='#729ea5;';
              backgroundtr ='#ffffff;';
              backgroundtrhover ='#d4e3e5;';
		}else if(tableDesign == "alternatingXY"){
			tableCSS = "<!-- alternatingXY -->\n";
		}else if(tableDesign == "minimalXY"){
			tableCSS = "<!-- minimalXY -->\n";
		}else if(tableDesign == "noStyle"){
			tableCSS = "";
		}
              
			}else if(tableColor == "Green"){

              
              borderawtable = '#9dcc7a;';
              backgroundtable ='#abd28e;';
              borderth ='#9dcc7a;';
              backgroundtr ='#bedda7;';
              bordertd ='#9dcc7a;';
              backgroundtrhover ='#ffffff;';
              awtablecolor ='#333333;';
              tdtablecolor ='#333333;';
		if(tableDesign == "alternating"){
        backgroundtable ='#abd28e;';
        }else if(tableDesign == "minimal"){
              backgroundtable ='#abd28e;';
              backgroundtr ='#ffffff;';
              backgroundtrhover ='#abd28e;';
		}else if(tableDesign == "alternatingXY"){
			tableCSS = "<!-- alternatingXY -->\n";
		}else if(tableDesign == "minimalXY"){
			tableCSS = "<!-- minimalXY -->\n";
		}else if(tableDesign == "noStyle"){
			tableCSS = "";
		}
              

                     
			
			}else if(tableColor == "Grey"){

              
              awtablecolor ='#333333;';
              borderawtable = '#a9a9a9;';
              backgroundtable ='#b8b8b8;';
              borderth ='#a9a9a9;';
              backgroundtr ='#cdcdcd;';
              bordertd ='#a9a9a9;';
              backgroundtrhover ='#ffffff;';
              tdtablecolor ='#333333;';

		if(tableDesign == "alternating"){

        }else if(tableDesign == "minimal"){
              backgroundtable ='#b8b8b8;';
              backgroundtr ='#ffffff;';
              backgroundtrhover ='#b8b8b8;';
		}else if(tableDesign == "alternatingXY"){
			tableCSS = "<!-- alternatingXY -->\n";
		}else if(tableDesign == "minimalXY"){
			tableCSS = "<!-- minimalXY -->\n";
		}else if(tableDesign == "noStyle"){
			tableCSS = "";
		}
				
			}else if(tableColor == "Orange"){

              
              
              
              
              awtablecolor ='#333333;';
              tdtablecolor ='#333333;';
              borderawtable = '#ebab3a;';
              backgroundtable ='#e6983b;';
              borderth ='#ebab3a;';
              backgroundtr ='#f0c169;';
              bordertd ='#ebab3a;';
              backgroundtrhover ='#ffffff;';
		if(tableDesign == "alternating"){

        }else if(tableDesign == "minimal"){
              backgroundtable ='#e6983b;';
              backgroundtr ='#ffffff;';
              backgroundtrhover ='#e6983b;';
		}else if(tableDesign == "alternatingXY"){
			tableCSS = "<!-- alternatingXY -->\n";
		}else if(tableDesign == "minimalXY"){
			tableCSS = "<!-- minimalXY -->\n";
		}else if(tableDesign == "noStyle"){
			tableCSS = "";
		}

			}else if(tableColor == "Brown"){
              
              
              
              
              awtablecolor ='#333333;';
              tdtablecolor ='#333333;';
              borderawtable = '#bcaf91;';
              backgroundtable ='#ded0b0;';
              borderth ='#bcaf91;';
              backgroundtr ='#e9dbbb;';
              bordertd ='#bcaf91;';
              backgroundtrhover ='#ffffff;';
		if(tableDesign == "alternating"){

        }else if(tableDesign == "minimal"){
              backgroundtable ='#bcaf91;';
              backgroundtr ='#ffffff;';
              backgroundtrhover ='#bcaf91;';
		}else if(tableDesign == "alternatingXY"){
			tableCSS = "<!-- alternatingXY -->\n";
		}else if(tableDesign == "minimalXY"){
			tableCSS = "<!-- minimalXY -->\n";
		}else if(tableDesign == "noStyle"){
			tableCSS = "";
		}
              

				
			}else if(tableColor == "Black"){

              awtablecolor ='#fbfbfb;';
              tdtablecolor ='#fbfbfb;';
              borderawtable = '#686767;';
              backgroundtable ='#171515;';
              borderth ='#686767;';
              backgroundtr ='#2f2f2f;';
              bordertd ='#686767;';
              backgroundtrhover ='#171515;'; 
		if(tableDesign == "alternating"){

        }else if(tableDesign == "minimal"){
              backgroundtable ='#686767;';
              backgroundtr ='#ffffff;';
              backgroundtrhover ='#686767;';
              tdtablecolor ='#000;';
              awtablecolor ='#fbfbfb;';

		}else if(tableDesign == "alternatingXY"){
			tableCSS = "<!-- alternatingXY -->\n";
		}else if(tableDesign == "minimalXY"){
			tableCSS = "<!-- minimalXY -->\n";
		}else if(tableDesign == "noStyle"){
			tableCSS = "";
		}
   

				
			}else if(tableColor == "None"){
              awtablecolor ='#000000;';
              borderawtable = '#000000;';
              backgroundtable ='none;';
              borderth ='#000000;';
              backgroundtr ='none;';
              bordertd ='#000000;';
              backgroundtrhover ='none;'; 
			}
          
          
          
          
          
          
          
          
          
          
          
				
              awtablefontsize = 12;
              thfontsize = 12;
              tdfontsize = 12;
              

              awtableborderwidth = 1;
              thawtableborderwidth = 1;
              tdawtableborderwidth = 1;

              awtablewidthpx = 'px;';
              awtablewidthpercent = '%;';
              awtablewidth = 100;
              
              awtablethpadding = 8;
              awtabletdpadding = 8;

              
				tableCSS += '<style type="text/css">\n';
				tableCSS += '.awtable{';
				tableCSS += 'color:'+awtablecolor+';';
				if(textaligntable != "none"){
                     tableCSS += 'text-align:'+textaligntable+';';
                  }
				tableCSS += 'font-size:'+awtablefontsize+'px;';
				tableCSS += 'width:'+awtablewidth+awtablewidthpercent;
				tableCSS += 'border-width:'+awtableborderwidth+'px;';
				tableCSS += 'border-color:'+borderawtable;
				tableCSS += 'border-collapse:collapse;';
				tableCSS += '}\n';
              
				tableCSS += '.awtable th{';
				tableCSS += 'font-size:'+thfontsize+'px;';
				tableCSS += 'background-color:'+backgroundtable;
				tableCSS += 'border-width:'+thawtableborderwidth+'px;';
				tableCSS += 'padding: '+awtablethpadding+'px;';
				tableCSS += 'border-style: solid;';
				tableCSS += 'border-color:'+borderth;
				tableCSS += '}\n';

				tableCSS += '.awtable tr{';
				tableCSS += 'background-color:'+backgroundtr;
				tableCSS += '}\n';
              
				tableCSS += '.awtable td{';
				tableCSS += 'font-size:'+tdfontsize+'px;';
				tableCSS += 'border-width:'+tdawtableborderwidth+'px;';
				tableCSS += 'padding:'+awtabletdpadding+'px;';
				tableCSS += 'border-style:solid;';
				tableCSS += 'border-color:'+bordertd;
                tableCSS += 'color:'+tdtablecolor;
				tableCSS += '}\n';
              
				if (tableHighlight.checked == true){
					if(tableColor != "None"){
                      tableCSS += '.awtable tr:hover {background-color:'+backgroundtrhover+';}\n';
                    }
                }
				tableCSS += '</style>\n\n';
          
          
          

			
		//Start table
		tableHTML = '<table class="awtable" border="1">\n<tr>';
		//Make header
		var ii = 0;
		var iii = 0;
		var iiii = 0;
		while(ii< sizeCols){
			iii = ii + 1;
           if (tableInfo.checked == true){
			tableHTML += '<th>عنوان '+iii+'</th>';
           }else{
           tableHTML += '<th> </th>';
           }
			ii++;
		}
		tableHTML += "</tr>\n";
		//make rows
		var i = 0;
		while(i< sizeRows -1){
			tableHTML = tableHTML + "<tr>";
			var ii = 0;
			while(ii< sizeCols){
				iii = i + 1;
				iiii = ii + 1;
              
              
              
         if (tableInfo.checked == true){
     	tableHTML = tableHTML + "<td>صف:"+iii+" عمود:"+iiii+"</td>";
              }else{
      		tableHTML = tableHTML + "<td> </td>";
              } 
			ii++;
			}
			tableHTML = tableHTML + "</tr>\n";
		i++;
		}
		tableHTML += "</table>\n\n";

		
		
		//PREPARE A TABLE FOR DISPLAY ON THE PAGE
		if (tableInfo.checked == true){
			pageTableHTML = '<table class="awtable" border="1"><tbody><tr><th>عنوان 1</th><th>عنوان 2</th><th>عنوان 3</th><th>عنوان 4</th><th>عنوان 5</th></tr><tr><td>صف:1 عمود:1</td><td>صف:1 عمود:2</td><td>صف:1 عمود:3</td><td>صف:1 عمود:4</td><td>صف:1 عمود:5</td></tr><tr><td>صف:2 عمود:1</td><td>صف:2 عمود:2</td><td>صف:2 عمود:3</td><td>صف:2 عمود:4</td><td>صف:2 عمود:5</td></tr><tr><td>صف:3 عمود:1</td><td>صف:3 عمود:2</td><td>صف:3 عمود:3</td><td>صف:3 عمود:4</td><td>صف:3 عمود:5</td></tr><tr><td>صف:4 عمود:1</td><td>صف:4 عمود:2</td><td>صف:4 عمود:3</td><td>صف:4 عمود:4</td><td>صف:4 عمود:5</td></tr><tr><td>صف:5 عمود:1</td><td>صف:5 عمود:2</td><td>صف:5 عمود:3</td><td>صف:5 عمود:4</td><td>صف:5 عمود:5</td></tr><tr><td>صف:6 عمود:1</td><td>صف:6 عمود:2</td><td>صف:6 عمود:3</td><td>صف:6 عمود:4</td><td>صف:6 عمود:5</td></tr></tbody></table>';
		}else{
			pageTableHTML = '<table class="awtable" border="1"><tbody><tr><th> </th><th> </th><th> </th><th> </th><th> </th></tr><tr><td> </td><td> </td><td> </td><td> </td><td> </td></tr><tr><td> </td><td> </td><td> </td><td> </td><td> </td></tr><tr><td> </td><td> </td><td> </td><td> </td><td> </td></tr><tr><td> </td><td> </td><td> </td><td> </td><td> </td></tr><tr><td> </td><td> </td><td> </td><td> </td><td> </td></tr><tr><td> </td><td> </td><td> </td><td> </td><td> </td></tr></tbody></table>';			
		}
		
		tableEND = '';
		

		
		newTable = tableCSS + pageTableHTML;
		newTableCode = tableJS + tableCSS + tableHTML + tableEND;
		
		document.getElementById('newTable').innerHTML = newTable;
		document.getElementById('newCode').value = newTableCode;
		editor.setValue(newTableCode);
		var btncopy = document.getElementById("buttoncopy");
		btncopy.setAttribute('data-clipboard-text' , newTableCode);

		
}}
	
	
	//Listener for sizeCols
	var el1 = document.getElementById('setcodenew');
	el1.onclick = function() {
    	sizeCols = document.getElementById('sizeCols').value;
		document.getElementById("sizeCols").value = sizeCols;

	
 	//Listener for sizeRows
		sizeRows = document.getElementById("sizeRows").value;
		document.getElementById("sizeRows").value = sizeRows;
	
		tableColor = document.getElementById('tableColor').value;
		tableDesign = document.getElementById('tableDesign').value;
		if (tableColor == "None"){document.getElementById("tableDesign").selectedIndex = 2;}
		if (tableColor != "None" && tableDesign == "noStyle"){document.getElementById("tableDesign").selectedIndex = 0;}
 
		tableColor = document.getElementById('tableColor').value;
		tableDesign = document.getElementById('tableDesign').value;
		if (tableDesign == "noStyle"){document.getElementById("tableColor").selectedIndex = 6;}
		if (tableDesign != "noStyle" && tableColor == "None"){document.getElementById("tableColor").selectedIndex = 0;}
 
 	makeTableCode();
       editor.setValue(newTableCode);

  var text = document.getElementById("newCode").value;
  var btncopy = document.getElementById("buttoncopy");

 
  document.getElementById("newTable").innerHTML = newTableCode;
btncopy.setAttribute('data-clipboard-text' , newTableCode);
	  
 	};	 
	
	
	//intialize on entry
	makeTableCode(); 


});
