/*jshint node:false, jquery:true, strict:false */
$(function() {

  read_settings_from_cookie();

  $.getJSON("https://get.doitf.com/tools/js-beautify/package.json", function(data) {
    $('#version-number').text('(v' + data.version + ')');
  });
  var default_html="<!--هذا مجرد نموذج للرمز البرمجي، إلصق الكود الحقيقي \n يمكنك تغيير لغة الرمز البرمجي من أعلى هذا الصندوق .-->\n\n<table class='awtable' border='1'>\n <tr><th>عنوان 1</th><th>عنوان 2</th><th>عنوان 3</th><th>عنوان 4</th><th>عنوان 5</th></tr>\n <tr><td>صف:1 عمود:1</td><td>صف:1 عمود:2</td><td>صف:1 عمود:3</td><td>صف:1 عمود:4</td><td>صف:1 عمود:5</td></tr>\n <tr><td>صف:2 عمود:1</td><td>صف:2 عمود:2</td><td>صف:2 عمود:3</td><td>صف:2 عمود:4</td><td>صف:2 عمود:5</td></tr>\n <tr><td>صف:3 عمود:1</td><td>صف:3 عمود:2</td><td>صف:3 عمود:3</td><td>صف:3 عمود:4</td><td>صف:3 عمود:5</td></tr>\n <tr><td>صف:4 عمود:1</td><td>صف:4 عمود:2</td><td>صف:4 عمود:3</td><td>صف:4 عمود:4</td><td>صف:4 عمود:5</td></tr>\n <tr><td>صف:5 عمود:1</td><td>صف:5 عمود:2</td><td>صف:5 عمود:3</td><td>صف:5 عمود:4</td><td>صف:5 عمود:5</td></tr>\n <tr><td>صف:6 عمود:1</td><td>صف:6 عمود:2</td><td>صف:6 عمود:3</td><td>صف:6 عمود:4</td><td>صف:6 عمود:5</td></tr>\n </table>\n<!--إضغط على زر تطبيق لمشاهدة مثال-->";
var default_css = "/*===\nهذا مجرد نموذج للرمز البرمجي، إلصق الكود الحقيقي \n يمكنك تغيير لغة الرمز البرمجي من أعلى هذا الصندوق. \n===*/\n\n#adawatweb{border: 1px solid #eee;height:auto;padding:15px;text-align:center;}\n.adawatweb h1{color:red}.adawatweb p{color:#579bd5}\n/*إضغط على زر تطبيق لمشاهدة مثال*/";
  var default_text =
    "// هذا مجرد نموذج للرمز البرمجي، إلصق الكود الحقيقي \n //يمكنك تغيير لغة الرمز البرمجي من أعلى هذا الصندوق .\n\nif ('this_is'==/an_example/){of_beautifier();}else{var a=b?(c%d):e[f];}\n//إضغط على زر تطبيق لمشاهدة مثال";
  var textArea = $('#source')[0];
  
  
$('#language').change(function() {
if ($("#language").val() === "css"){
if (the.editor.getValue() === default_css){
			the.editor.setValue(default_css);
      }else if (the.editor.getValue() === default_html){
			the.editor.setValue(default_html);
      }else if (the.editor.getValue() === default_text){
			the.editor.setValue(default_text);
      } 
}else if ($("#language").val() === "html"){
if (the.editor.getValue() === default_html){
			the.editor.setValue(default_html);
      }else if (the.editor.getValue() === default_css){
			the.editor.setValue(default_css);
      }else if (the.editor.getValue() === default_text){
			the.editor.setValue(default_text);
      } 
}else if($("#language").val() === "js"){
if(the.editor.getValue() === default_text){
			the.editor.setValue(default_text);
      }else if (the.editor.getValue() === default_css){
			the.editor.setValue(default_css);
      }else if (the.editor.getValue() === default_html){
			the.editor.setValue(default_html);
      } 
}
});

		  if ($("#language").val() === "css"){
			$('#source').val(default_css);
      }else if ($("#language").val() === "html"){
		 $('#source').val(default_html);
	  }else if($("#language").val() === "js"){
		  $('#source').val(default_text);
	  }else{
  $('#source').val(default_text);
	}
  if (the.use_codemirror && typeof CodeMirror !== 'undefined') {

    the.editor = CodeMirror.fromTextArea(textArea, {
		foldGutter: true,
		gutters: ["CodeMirror-linenumbers", "CodeMirror-foldgutter"],
      lineNumbers: true
    });
    set_editor_mode();
    the.editor.focus();

    $('.CodeMirror').click(function() {
		  if (the.editor.getValue() === default_css){
			the.editor.setValue('');
      }else if (the.editor.getValue() === default_html){
		  the.editor.setValue('');
	  }else if(the.editor.getValue() === default_text){
		  the.editor.setValue('');
	  }
    });
  } else {
    $('#source').bind('click focus', function() {
		  if ($(this).val() === default_css){
			$(this).val('');
      }else if ($(this).val() === default_html){
		$(this).val('');
	  }else if($(this).val() === default_text){
		 $(this).val('');
	  }

    }).bind('blur', function() {
      if (!$(this).val()) {
		  if ($("#language").val() === "css"){
			$(this).val(default_css);
      }else if ($("#language").val() === "html"){
		  $(this).val(default_html);
	  }else if($("#language").val() === "js"){
		  $(this).val(default_text);
	  }}
    });
  }
  $(window).bind('keydown', function(e) {
    if (e.ctrlKey && e.keyCode === 13) {
      beautify();
    }
  });

  $('.submit').click(beautify);
  $(':checkbox').change(beautify);
  $('#additional-options').change(beautify);
  $('#tabsize').change(beautify);
  $('#max-preserve-newlines').change(beautify);
  $('#wrap-line-length').change(beautify);
  $('#brace-style').change(beautify);
  $('#indent-scripts').change(beautify);


});
