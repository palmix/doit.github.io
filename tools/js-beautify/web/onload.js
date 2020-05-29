/*jshint node:false, jquery:true, strict:false */
$(function() {

  read_settings_from_cookie();

  $.getJSON("https://get.doitf.com/tools/js-beautify/package.json", function(data) {
    $('#version-number').text('(v' + data.version + ')');
  });
  var default_html="<!--هذا مجرد نموذج للرمز البرمجي، إلصق الكود الحقيقي \n يمكنك تغيير نوع الرمز البرمجي من أعلى هذ الصندوق .-->\n\n<!DOCTYPE html> <html dir='rtl'> <head> <meta charset='utf-8'>\n\n<title>موقع أدوات ويب</title></head><body><h1>كيف يمكن إعادة ترتيب ملفات html </h1>\n<p>أداة إعادة ترتيب الرموز البرمجية لمحتويات الويب</p> <p id='demo'>\n\n</p><script> var text = 'إختبار إعادة تنظيم الملفات'; document.getElementById('demo').innerHTML = text;</script></body></html>";
var default_css = "/*=== هذا مجرد نموذج للرمز البرمجي، إلصق الكود الحقيقي \n يمكنك تغيير نوع الرمز البرمجي من أعلى هذ الصندوق . ===*/\n/*=== مرحبا في أداة تنظيم الرموز البرمجية ===*/\n\n#adawatweb{border: 1px solid #eee;height:auto;padding:15px;text-align:center;}\n.adawatweb h1{color:red}.adawatweb p{color:#579bd5}";
  var default_text =
    "// هذا مجرد نموذج للرمز البرمجي، إلصق الكود الحقيقي \n //يمكنك تغيير نوع الرمز البرمجي من أعلى هذ الصندوق .\n\nif ('this_is'==/an_example/){of_beautifier();}else{var a=b?(c%d):e[f];}";
  var textArea = $('#source')[0];
  $('#source').val(default_text);

  if (the.use_codemirror && typeof CodeMirror !== 'undefined') {

    the.editor = CodeMirror.fromTextArea(textArea, {
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
  $('select').change(beautify);
  $(':checkbox').change(beautify);
  $('#additional-options').change(beautify);


});
