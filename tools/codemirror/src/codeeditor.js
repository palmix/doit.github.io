         CodeMirror.modeURL = "https://get.doitf.com/tools/codemirror/mode/%N/%N.js";

 var sel_top = document.getElementById("buffers");
CodeMirror.on(sel_top, "change", function() {
  selectBuffer(editor, sel_top.options[sel_top.selectedIndex].value);
});


var buffers = {};

function openBuffer(name, text, mode) {
  buffers[name] = CodeMirror.Doc(text, mode);
  var opt = document.createElement("option");
  opt.appendChild(document.createTextNode(name));
  sel_top.appendChild(opt);
}

function newBuf(where) {
var modeInput = document.getElementById("mode");
var name = modeInput.value
CodeMirror.on(modeInput, "keypress", function(e) {
  if (e.keyCode == 13) change();
});



  var val = modeInput.value, m, mode, spec;
  if (m = /.+\.([^.]+)$/.exec(val)) {
    var info = CodeMirror.findModeByExtension(m[1]);
    if (info) {
      mode = info.mode;
      spec = info.mime;
    }
  } else if (/\//.test(val)) {
    var info = CodeMirror.findModeByMIME(val);
    if (info) {
      mode = info.mode;
      spec = val;
    }
  } else {
    mode = spec = val;
  }

if (name == null) return;
  if (buffers.hasOwnProperty(name)) {
$("#filealready").html("<div class='alert alert-danger alert-dismissible fade show' role='alert'> يوجد بالفعل ملف بإسم <strong>"+name+"</strong>.<button onclick='remobacfile()' type='button' class='close' data-dismiss='alert' aria-label='Close'> <span aria-hidden='true'>&times;</span> </button> </div>");
document.getElementById("buffers").style.backgroundColor = "#d4edda";
    return;
  }else{
  
  
  
    if (mode) {
$("#filedonecreated").html("<div class='alert alert-success alert-dismissible fade show' role='alert'> تم إنشاء ملف <strong>"+name+"</strong> بنجاح.<button onclick='remobacfile()' type='button' class='close' data-dismiss='alert' aria-label='Close'> <span aria-hidden='true'>&times;</span> </button> </div>");
document.getElementById("buffers").style.backgroundColor = "#d4edda";



  if ($("#select option[id='"+spec+"']").length){
CodeMirror.autoLoadMode(editor, mode);
$("#select option[id='"+spec+"']").attr("selected", "selected");
   }else{
    $("#select").append($("<option>", {
    id: spec,
    value: mode,
    selected:"selected",
    text: "اللغة " +mode + " - "+ spec
}));
CodeMirror.autoLoadMode(editor, mode);
}
  } else {

$("#filecreated").last().html("<div class='alert alert-warning alert-dismissible fade show' role='alert'> تم إنشاء الملف <strong>"+val+" </strong> ولكن تعذر علينا العثور على لغة البرمجة، يرجى تحديد لغة البرمجة من الخيارات.<button onclick='remobac()' type='button' class='close' data-dismiss='alert' aria-label='Close'> <span aria-hidden='true'>&times;</span> </button> </div>");
document.getElementById("select").style.backgroundColor = "#fff3cd";
$("#select").val("textile").change();
$('#select').change(function(){
   editor.setOption("mode", $(this).val() );
});
  }
  
  

  }
  openBuffer(name, "", spec);
  selectBuffer(where == "top" ? editor : ed_bot, name);
  var sel = sel_top;
  sel.value = name;
}

function selectBuffer(editor, name) {
  var buf = buffers[name];
  if (buf.getEditor()) buf = buf.linkedDoc({sharedHist: true});
  var old = editor.swapDoc(buf);
  var linked = old.iterLinkedDocs(function(doc) {linked = doc;});
  if (linked) {
    // Make sure the document in buffers is the one the other view is looking at
    for (var name in buffers) if (buffers[name] == old) buffers[name] = linked;
    old.unlinkDoc(linked);
  }
  editor.focus();
}

function nodeContent(id) {
  var node = document.getElementById(id), val = node.textContent || node.innerText;
  val = val.slice(val.match(/^\s*/)[0].length, val.length - val.match(/\s*$/)[0].length) + "\n";
  return val;
}


            var mixedMode = {
        name: "htmlmixed",
        scriptTypes: [{matches: /\/x-handlebars-template|\/x-mustache/i,
                       mode: null},
                      {matches: /(text|application)\/(x-)?vb(a|script)/i,
                       mode: "vbscript"}]
      };

openBuffer("ملف HTML", nodeContent("testhtml"), mixedMode);
openBuffer("ملف CSS", nodeContent("teststyle"), "css");
openBuffer("ملف JS", nodeContent("testscript"), "javascript");
























CodeMirror.defineMode("mustache", function(config, parserConfig) {
  var mustacheOverlay = {
    token: function(stream, state) {
      var ch;
      if (stream.match("{{")) {
        while ((ch = stream.next()) != null)
          if (ch == "}" && stream.next() == "}") {
            stream.eat("}");
            return "mustache";
          }
      }
      while (stream.next() != null && !stream.match("{{", false)) {}
      return null;
    }
  };
  return CodeMirror.overlayMode(CodeMirror.getMode(config, parserConfig.backdrop || "text/html"), mustacheOverlay);
});









      var dummy = {
        attrs: {
          color: ["red", "green", "blue", "purple", "white", "black", "yellow"],
          size: ["large", "medium", "small"],
          description: null
        },
        children: []
      };

      var tags = {
   "!top": ["div","span","a","nav","body","head","html"],
        "!attrs": {
          id:  ["awtest1", "awtest2", "awtest3"],
          class: ["aw-test1", "aw-test2", "aw-test3"]
        },
        html: {
          attrs: {
            lang: ["ar","en", "de", "fr", "nl"],
            dir: ["rtl","ltr"],
          },
          children: ["animal", "plant"]
        },
        animal: {
          attrs: {
            name: null,
            isduck: ["yes", "no"]
          },
          children: ["wings", "feet", "body", "head", "tail"]
        },
        plant: {
          attrs: {name: null},
          children: ["leaves", "stem", "flowers"]
        },
        wings: dummy, feet: dummy, body: dummy, head: dummy, tail: dummy,
        leaves: dummy, stem: dummy, flowers: dummy
      };

      function completeAfter(cm, pred) {
        var cur = cm.getCursor();
        if (!pred || pred()) setTimeout(function() {
          if (!cm.state.completionActive)
            cm.showHint({completeSingle: false});
        }, 100);
        return CodeMirror.Pass;
      }

      function completeIfAfterLt(cm) {
        return completeAfter(cm, function() {
          var cur = cm.getCursor();
          return cm.getRange(CodeMirror.Pos(cur.line, cur.ch - 1), cur) == "<";
        });
      }

      function completeIfInTag(cm) {
        return completeAfter(cm, function() {
          var tok = cm.getTokenAt(cm.getCursor());
          if (tok.type == "string" && (!/['"]/.test(tok.string.charAt(tok.string.length - 1)) || tok.string.length == 1)) return false;
          var inner = CodeMirror.innerMode(cm.getMode(), tok.state).state;
          return inner.tagName;
        });
      }




if (b64awsec == "ZG9pdGYuY29t"){
var editor  = CodeMirror.fromTextArea(document.getElementById("code"), {
        mode: mixedMode,
        selectionPointer: true,
  lineNumbers: true,
  styleActiveLine: true,
  autoCloseTags: false,
  lineWrapping: true,
    autoCloseBrackets:false,
  viewportMargin: Infinity,
      lint: true,
  extraKeys: {"F11": function(cm) { cm.setOption("fullScreen", !cm.getOption("fullScreen")); }, "Esc": function(cm) { if (cm.getOption("fullScreen")) cm.setOption("fullScreen", false); },"Alt-F": "findPersistent","Ctrl-Space": "autocomplete","Ctrl-Q": function(cm){ cm.foldCode(cm.getCursor());}},
          foldGutter: true,
    gutters: ["CodeMirror-linenumbers", "CodeMirror-foldgutter","CodeMirror-lint-markers"],
      direction: "ltr",
       highlightSelectionMatches:false,
       scrollbarStyle: "simple",
       showTrailingSpace:false,
       hintOptions: false

});
editor.on("change", function(){
window.addEventListener("beforeunload", function(event) {
  event.returnValue = "ربما لم يتم حفظ التعديلات! خروج على اي حال؟";
});
});
}



  function selectTheme() {
    var inputTheme = document.getElementById("selecttheme");
          var expiryDate = new Date();
        expiryDate.setDate(expiryDate.getDate() + 9600);
        expiryDate = expiryDate.toUTCString();
    var theme = inputTheme.options[inputTheme.selectedIndex].value;
    var thememode = inputTheme.options[inputTheme.selectedIndex].textContent;
    if(theme == "default"){
    theme = "default";
        editor.setOption("theme", theme);
            document.cookie="themes=default; expires=" + expiryDate;
    document.cookie="themesmode=default; expires=" + expiryDate;

    }else{
 var themecss = document.createElement('link');
 themecss.href = "https://get.doitf.com/tools/codemirror/theme/"+theme+".css";
 themecss.rel = "stylesheet";
 document.getElementsByTagName('head')[0].appendChild(themecss);
    editor.setOption("theme", thememode);
    document.cookie="themes=" + theme + "; expires=" + expiryDate;
    document.cookie="themesmode=" + thememode + "; expires=" + expiryDate;

    }
}
  

      
      
      
      
  function looksLikeScheme(code) {
    return !/^\s*\(\s*function\b/.test(code) && /^\s*[;\(]/.test(code);
  }

        var modeInput = document.getElementById("select");
        
function selectMode() {
  var myindex  = modeInput.selectedIndex;
  var modefly = modeInput.options[myindex].value.toLowerCase();
  var modeflymode = modeInput.options[myindex].id.toLowerCase();
CodeMirror.autoLoadMode(editor, modefly);
      editor.setOption("mode", looksLikeScheme(editor.getValue()) ? "mixedMode" : modeflymode);
      
  }


selectBuffer(editor, "ملف HTML");





var delay;
editor.on("change", function() {
clearTimeout(delay);
delay = setTimeout(previewcheck(), 300);
});

function previewcheck() {
  var checkBox = document.getElementById("previewcheck");
  if (checkBox.checked == true){
      function updatePreview() {
        var previewFrame = document.getElementById('previewiframe');
        var preview =  previewFrame.contentDocument ||  previewFrame.contentWindow.document;
        preview.open();
        preview.write(editor.getValue());
        preview.close();
      }
      setTimeout(updatePreview, 300);
      document.getElementById("previewiframe").style.display = "block";
  }else{
document.getElementById("previewiframe").style.display = "none";
}
  
}













function selectsizecode(val) {
document.getElementsByClassName("CodeMirror")[0].style.height = val+"px";
 }


function sizecodes() {
  var checkBox = document.getElementById("sizecodes");
  var checkBoxsize = document.getElementById("setsizecodes");
  if (checkBox.checked == true){
document.getElementsByClassName("CodeMirror")[0].style.height = "auto";
checkBoxsize.setAttribute("disabled","disabled");
checkBoxsize.style.display = "none"
} else{
document.getElementsByClassName("CodeMirror")[0].style.height = checkBoxsize.value+"px";;
checkBoxsize.style.display = "inline-block";
checkBoxsize.removeAttribute("disabled");
    }
}





function hintOptionsshow() {
  var checkBox = document.getElementById("hintOptions");
  if (checkBox.checked == true){    
  var script6 = document.createElement('script');
script6.src = "https://get.doitf.com/tools/codemirror/addon/hint/xml-hint.js";
document.getElementsByTagName('head')[0].appendChild(script6);

editor.setOption("hintOptions", {schemaInfo: tags})
editor.setOption("extraKeys", {"'<'": completeAfter, "'/'": completeIfAfterLt, "' '": completeIfInTag, "'='": completeIfInTag,"F11": function(cm) { cm.setOption("fullScreen", !cm.getOption("fullScreen")); }, "Esc": function(cm) { if (cm.getOption("fullScreen")) cm.setOption("fullScreen", false); },"Alt-F": "findPersistent","Ctrl-Space": "autocomplete","Ctrl-Q": function(cm){ cm.foldCode(cm.getCursor());}})
} else {
    editor.setOption("hintOptions", false)  
    }
}


function showTrailingSpace() {
  var checkBox = document.getElementById("showTrailingSpace");
  if (checkBox.checked == true){    
editor.setOption("showTrailingSpace", true)
} else {
    editor.setOption("showTrailingSpace", false)  
    }
}

function closetags() {
  var checkBox = document.getElementById("closetag");
  if (checkBox.checked == true){
    editor.setOption("autoCloseTags", true)
  } else {
    editor.setOption("autoCloseTags", false)
    }
}
function checkBoxdir() {
  var checkBox = document.getElementById("rtl");
  if (checkBox.checked == true){
    editor.setOption("direction", "rtl")
  } else {
    editor.setOption("direction", "ltr")  
    }
}
function lineNumbers() {
  var checkBox = document.getElementById("lineNumbers");
  if (checkBox.checked == true){
    editor.setOption("lineNumbers", true)
  } else {
    editor.setOption("lineNumbers", false)  
    }
}
function autoCloseBrackets() {
  var checkBox = document.getElementById("autoCloseBrackets");
  if (checkBox.checked == true){
    editor.setOption("autoCloseBrackets", true)
  } else {
    editor.setOption("autoCloseBrackets", false)  
    }
}

function foldGutter() {
  var checkBox = document.getElementById("foldGutter");
  if (checkBox.checked == true){
    editor.setOption("foldGutter", true)
  } else {
    editor.setOption("foldGutter", false)  
    }
}
function styleActiveLine() {
  var checkBox = document.getElementById("styleActiveLine");
  if (checkBox.checked == true){
    editor.setOption("styleActiveLine", true)
  } else {
    editor.setOption("styleActiveLine", false)  
    }
}
function highlightSelectionMatches() {
  var checkBox = document.getElementById("highlightSelectionMatches");
  if (checkBox.checked == true){
    editor.setOption("highlightSelectionMatches", {showToken: /\w/, annotateScrollbar: true})
  } else {
    editor.setOption("highlightSelectionMatches", false)  
    }
}
function lineWrapping() {
  var checkBox = document.getElementById("lineWrapping");
  if (checkBox.checked == true){
    editor.setOption("lineWrapping", true)
  } else {
    editor.setOption("lineWrapping", false)  
    }
}
function linterror() {
  var checkBox = document.getElementById("linterror");
  if (checkBox.checked == false){
    editor.setOption("linterror", false)
    $('link[href="https://get.doitf.com/tools/codemirror/addon/lint/lint.css"][rel=stylesheet]').remove();
    $('script[src="https://unpkg.com/jshint@2.9.6/dist/jshint.js"]').remove();
    $('script[src="https://unpkg.com/jsonlint@1.6.3/web/jsonlint.js"]').remove();
    $('script[src="https://unpkg.com/csslint@1.0.5/dist/csslint.js"]').remove();
    $('script[src="https://get.doitf.com/tools/codemirror/addon/lint/javascript-lint.js"]').remove();
    $('script[src="https://get.doitf.com/tools/codemirror/addon/lint/json-lint.js"]').remove();
    $('script[src="https://get.doitf.com/tools/codemirror/addon/lint/css-lint.js"]').remove();
  } else {
  
var link1 = document.createElement('link');
link1.href = "https://get.doitf.com/tools/codemirror/addon/lint/lint.css";
link1.rel = "stylesheet";
document.getElementsByTagName('head')[0].appendChild(link1);


var script1 = document.createElement('script');
script1.src = "https://unpkg.com/jshint@2.9.6/dist/jshint.js";
document.getElementsByTagName('head')[0].appendChild(script1);

var script2 = document.createElement('script');
script2.src = "https://unpkg.com/jsonlint@1.6.3/web/jsonlint.js";
document.getElementsByTagName('head')[0].appendChild(script2);

var script3 = document.createElement('script');
script3.src = "https://unpkg.com/csslint@1.0.5/dist/csslint.js";
document.getElementsByTagName('head')[0].appendChild(script3);


var script4 = document.createElement('script');
script4.src = "https://get.doitf.com/tools/codemirror/addon/lint/javascript-lint.js";
document.getElementsByTagName('head')[0].appendChild(script4);

var script5 = document.createElement('script');
script5.src = "https://get.doitf.com/tools/codemirror/addon/lint/json-lint.js";
document.getElementsByTagName('head')[0].appendChild(script5);

var script6 = document.createElement('script');
script6.src = "https://get.doitf.com/tools/codemirror/addon/lint/css-lint.js";
document.getElementsByTagName('head')[0].appendChild(script6);
    editor.setOption("linterror", true)  
    }
}


function remobac(){
document.getElementById("select").style.backgroundColor = "";
}

function remobacfile(){
document.getElementById("buffers").style.backgroundColor = "";
}


/// Cookie theme

var cookieValuethemes = document.cookie.replace(/(?:(?:^|.*;\s*)themes\s*\=\s*([^;]*).*$)|^.*$/, "$1");
var cookieValuethemesmode = document.cookie.replace(/(?:(?:^|.*;\s*)themesmode\s*\=\s*([^;]*).*$)|^.*$/, "$1");
if (cookieValuethemes) {
if(cookieValuethemes == "default"){
 }else{
  var themecss = document.createElement("link");
 themecss.href = "https://get.doitf.com/tools/codemirror/theme/"+cookieValuethemes+".css";
 themecss.rel = "stylesheet";
 document.getElementsByTagName('head')[0].appendChild(themecss);
 }
    editor.setOption("theme", cookieValuethemesmode);
    $("#selecttheme").val(cookieValuethemes);

} 




/// Cookie Option
function getCookieValue(a) {
    var b = document.cookie.match('(^|;)\\s*' + a + '\\s*=\\s*([^;]+)');
    return b ? b.pop() : '';
}

$(document).ready(function(){

    var inputc1El = $('input[value="inputc1"]');
    var inputc2El = $('input[value="inputc2"]');
    var inputc3El = $('input[value="inputc3"]');
    var inputc4El = $('input[value="inputc4"]');
    var inputc5El = $('input[value="inputc5"]');
    var inputc6El = $('input[value="inputc6"]');
    var inputc7El = $('input[value="inputc7"]');
    var inputc8El = $('input[value="inputc8"]');
    var inputc9El = $('input[value="inputc9"]');
    var inputc10El = $('input[value="inputc10"]');
    var inputc11El = $('input[value="inputc11"]');
    var inputc12El = $('input[value="inputc12"]');
    var inputc13El = $('input[value="inputc13"]');

    if (document.cookie.indexOf('inputc1=') != -1) {
        inputc1El.prop("checked", $.parseJSON(getCookieValue("inputc1")));
                  if (inputc1El.prop('checked')==true){
        editor.setOption("direction", "rtl")
      }else{
        editor.setOption("direction", "ltr")
      }
    }
    if (document.cookie.indexOf('inputc2=') != -1) {
        inputc2El.prop("checked", $.parseJSON(getCookieValue("inputc2")));
      if (inputc2El.prop('checked')==true){
        editor.setOption("lineWrapping", true)
      }else{
        editor.setOption("lineWrapping", false)
      }
        
    }

    if (document.cookie.indexOf('inputc3=') != -1) {
        inputc3El.prop("checked", $.parseJSON(getCookieValue("inputc3")));
            if (inputc3El.prop('checked')==true){
        editor.setOption("autoCloseTags", true)
      }else{
        editor.setOption("autoCloseTags", false)
      }
    }
    if (document.cookie.indexOf('inputc4=') != -1) {
        inputc4El.prop("checked", $.parseJSON(getCookieValue("inputc4")));
            if (inputc4El.prop('checked')==true){
        editor.setOption("autoCloseBrackets", true)
      }else{
        editor.setOption("autoCloseBrackets", false)
      }
    }
    if (document.cookie.indexOf('inputc5=') != -1) {
        inputc5El.prop("checked", $.parseJSON(getCookieValue("inputc5")));
            if (inputc5El.prop('checked')==true){
        editor.setOption("lineNumbers", true)
      }else{
        editor.setOption("lineNumbers", false)
      }
    }
    if (document.cookie.indexOf('inputc6=') != -1) {
        inputc6El.prop("checked", $.parseJSON(getCookieValue("inputc6")));
            if (inputc6El.prop('checked')==true){
        editor.setOption("foldGutter", true)
      }else{
        editor.setOption("foldGutter", false)
      }
    }
    if (document.cookie.indexOf('inputc7=') != -1) {
        inputc7El.prop("checked", $.parseJSON(getCookieValue("inputc7")));
            if (inputc7El.prop('checked')==true){
        editor.setOption("styleActiveLine", true)
      }else{
        editor.setOption("styleActiveLine", false)
      }
    }
    if (document.cookie.indexOf('inputc8=') != -1) {
        inputc8El.prop("checked", $.parseJSON(getCookieValue("inputc8")));
            if (inputc8El.prop('checked')==true){
    editor.setOption("highlightSelectionMatches", {showToken: /\w/, annotateScrollbar: true})
      }else{
        editor.setOption("highlightSelectionMatches", false)
      }
    }
    if (document.cookie.indexOf('inputc9=') != -1) {
        inputc9El.prop("checked", $.parseJSON(getCookieValue("inputc9")));
            if (inputc9El.prop('checked')==true){
var link1 = document.createElement('link');
link1.href = "https://get.doitf.com/tools/codemirror/addon/lint/lint.css";
link1.rel = "stylesheet";
document.getElementsByTagName('head')[0].appendChild(link1);


var script1 = document.createElement('script');
script1.src = "https://unpkg.com/jshint@2.9.6/dist/jshint.js";
document.getElementsByTagName('head')[0].appendChild(script1);

var script2 = document.createElement('script');
script2.src = "https://unpkg.com/jsonlint@1.6.3/web/jsonlint.js";
document.getElementsByTagName('head')[0].appendChild(script2);

var script3 = document.createElement('script');
script3.src = "https://unpkg.com/csslint@1.0.5/dist/csslint.js";
document.getElementsByTagName('head')[0].appendChild(script3);


var script4 = document.createElement('script');
script4.src = "https://get.doitf.com/tools/codemirror/addon/lint/javascript-lint.js";
document.getElementsByTagName('head')[0].appendChild(script4);

var script5 = document.createElement('script');
script5.src = "https://get.doitf.com/tools/codemirror/addon/lint/json-lint.js";
document.getElementsByTagName('head')[0].appendChild(script5);

var script6 = document.createElement('script');
script6.src = "https://get.doitf.com/tools/codemirror/addon/lint/css-lint.js";
document.getElementsByTagName('head')[0].appendChild(script6);
    editor.setOption("linterror", true)  

      }else{
        editor.setOption("linterror", false)
      }
    }
    if (document.cookie.indexOf('inputc10=') != -1) {
        inputc10El.prop("checked", $.parseJSON(getCookieValue("inputc10")));
            if (inputc10El.prop('checked')==true){
      $(".inputc3").toggle(inputc10El.prop("checked", false));
      }else{
      $(".inputc3").toggle(inputc10El.prop("checked", false));
      }
    }
    if (document.cookie.indexOf('inputc11=') != -1) {
        inputc11El.prop("checked", $.parseJSON(getCookieValue("inputc11")));
            if (inputc11El.prop('checked')==true){
        editor.setOption("showTrailingSpace", true)
      }else{
        editor.setOption("showTrailingSpace", false)
      }
    }
    if (document.cookie.indexOf('inputc12=') != -1) {
        inputc12El.prop("checked", $.parseJSON(getCookieValue("inputc12")));
            if (inputc12El.prop('checked')==true){
        editor.setOption("hintOptions", true)
      }else{
        editor.setOption("hintOptions", false)
      }
    }
    if (document.cookie.indexOf('inputc13=') != -1) {
      var checkBoxsize = document.getElementById("setsizecodes");
        inputc13El.prop("checked", $.parseJSON(getCookieValue("inputc13")));
            if (inputc13El.prop('checked')==true){
document.getElementsByClassName("CodeMirror")[0].style.height = "auto";
checkBoxsize.style.display = "none"
      }else{
document.getElementsByClassName("CodeMirror")[0].style.height = checkBoxsize.value+"px";
checkBoxsize.style.display = "inline-block";
      }
    }


    $(".inputc1").toggle(inputc1El.prop("checked"));
    $(".inputc2").toggle(inputc2El.prop("checked"));
    $(".inputc3").toggle(inputc3El.prop("checked"));
    $(".inputc4").toggle(inputc4El.prop("checked"));
    $(".inputc5").toggle(inputc5El.prop("checked"));
    $(".inputc6").toggle(inputc6El.prop("checked"));
    $(".inputc7").toggle(inputc7El.prop("checked"));
    $(".inputc8").toggle(inputc8El.prop("checked"));
    $(".inputc9").toggle(inputc9El.prop("checked"));
    $(".inputc10").toggle(input103El.prop("checked"));
    $(".inputc11").toggle(inputc11El.prop("checked"));
    $(".inputc12").toggle(inputc12El.prop("checked"));
    $(".inputc13").toggle(inputc13El.prop("checked"));

    $('input[type="checkbox"]').click(function(){

        var expiryDate = new Date();
        expiryDate.setDate(expiryDate.getDate() + 9600);
        expiryDate = expiryDate.toUTCString();

        if($(this).attr("value")=="inputc1"){
            $(".inputc1").toggle(this.checked);
            document.cookie="inputc1=" + this.checked.toString() + "; expires=" + expiryDate;
        }
        if($(this).attr("value")=="inputc2"){
            $(".inputc2").toggle(this.checked);
            document.cookie="inputc2=" + this.checked.toString() + "; expires=" + expiryDate;
        }
        if($(this).attr("value")=="inputc3"){
            $(".inputc3").toggle(this.checked);
            document.cookie="inputc3=" + this.checked.toString() + "; expires=" + expiryDate;
        }
        if($(this).attr("value")=="inputc3"){
            $(".inputc3").toggle(this.checked);
            document.cookie="inputc3=" + this.checked.toString() + "; expires=" + expiryDate;
        }
        if($(this).attr("value")=="inputc4"){
            $(".inputc4").toggle(this.checked);
            document.cookie="inputc4=" + this.checked.toString() + "; expires=" + expiryDate;
        }
        if($(this).attr("value")=="inputc5"){
            $(".inputc5").toggle(this.checked);
            document.cookie="inputc5=" + this.checked.toString() + "; expires=" + expiryDate;
        }
        if($(this).attr("value")=="inputc6"){
            $(".inputc6").toggle(this.checked);
            document.cookie="inputc6=" + this.checked.toString() + "; expires=" + expiryDate;
        }
        if($(this).attr("value")=="inputc7"){
            $(".inputc7").toggle(this.checked);
            document.cookie="inputc7=" + this.checked.toString() + "; expires=" + expiryDate;
        }
        if($(this).attr("value")=="inputc8"){
            $(".inputc8").toggle(this.checked);
            document.cookie="inputc8=" + this.checked.toString() + "; expires=" + expiryDate;
        }
        if($(this).attr("value")=="inputc9"){
            $(".inputc9").toggle(this.checked);
            document.cookie="inputc9=" + this.checked.toString() + "; expires=" + expiryDate;
        }
        if($(this).attr("value")=="inputc10"){
            $(".inputc10").toggle(this.checked);
            document.cookie="inputc10=" + this.checked.toString() + "; expires=" + expiryDate;
        }
        if($(this).attr("value")=="inputc11"){
            $(".inputc11").toggle(this.checked);
            document.cookie="inputc11=" + this.checked.toString() + "; expires=" + expiryDate;
        }
        if($(this).attr("value")=="inputc12"){
            $(".inputc12").toggle(this.checked);
            document.cookie="inputc12=" + this.checked.toString() + "; expires=" + expiryDate;
        }
        if($(this).attr("value")=="inputc13"){
            $(".inputc13").toggle(this.checked);
            document.cookie="inputc13=" + this.checked.toString() + "; expires=" + expiryDate;
        }
    });
    $("#clear-cart").click( function(e){
document.cookie ='inputc1=; expires=Thu, 01 Jan 1970 00:00:01 GMT;';
document.cookie ='inputc2=; expires=Thu, 01 Jan 1970 00:00:01 GMT;';
document.cookie ='inputc3=; expires=Thu, 01 Jan 1970 00:00:01 GMT;';
document.cookie ='inputc4=; expires=Thu, 01 Jan 1970 00:00:01 GMT;';
document.cookie ='inputc5=; expires=Thu, 01 Jan 1970 00:00:01 GMT;';
document.cookie ='inputc6=; expires=Thu, 01 Jan 1970 00:00:01 GMT;';
document.cookie ='inputc7=; expires=Thu, 01 Jan 1970 00:00:01 GMT;';
document.cookie ='inputc8=; expires=Thu, 01 Jan 1970 00:00:01 GMT;';
document.cookie ='inputc9=; expires=Thu, 01 Jan 1970 00:00:01 GMT;';
document.cookie ='inputc10=; expires=Thu, 01 Jan 1970 00:00:01 GMT;';
document.cookie ='inputc11=; expires=Thu, 01 Jan 1970 00:00:01 GMT;';
document.cookie ='inputc12=; expires=Thu, 01 Jan 1970 00:00:01 GMT;';
document.cookie ='inputc13=; expires=Thu, 01 Jan 1970 00:00:01 GMT;';
document.cookie ='themes=; expires=Thu, 01 Jan 1970 00:00:01 GMT;';
document.cookie ='themesmode=; expires=Thu, 01 Jan 1970 00:00:01 GMT;';




editor.setOption("theme", "default");
editor.setOption("direction", "ltr");
editor.setOption("lineWrapping", true);
editor.setOption("autoCloseTags", false);
editor.setOption("autoCloseBrackets", false);
editor.setOption("lineNumbers", true);
editor.setOption("foldGutter", true);
editor.setOption("styleActiveLine", true);
editor.setOption("highlightSelectionMatches", false);
editor.setOption("linterror", false);
editor.setOption("showTrailingSpace", false);
editor.setOption("hintOptions", false);

$(".inputc1").toggle(inputc1El.prop("checked", false));
$(".inputc2").toggle(inputc2El.prop("checked", true));
$(".inputc3").toggle(inputc3El.prop("checked", false));
$(".inputc4").toggle(inputc4El.prop("checked", false));
$(".inputc5").toggle(inputc5El.prop("checked", true));
$(".inputc6").toggle(inputc6El.prop("checked", true));
$(".inputc7").toggle(inputc7El.prop("checked", true));
$(".inputc8").toggle(inputc8El.prop("checked", false));
$(".inputc9").toggle(inputc9El.prop("checked", false));
$(".inputc10").toggle(inputc10El.prop("checked", false));
$(".inputc11").toggle(inputc11El.prop("checked", false));
$(".inputc12").toggle(inputc12El.prop("checked", false));
$(".inputc13").toggle(inputc13El.prop("checked", false));
$("#selecttheme").val("default");
document.getElementById("previewiframe").style.display = "none";
var checkBoxsize = document.getElementById("setsizecodes");
document.getElementsByClassName("CodeMirror")[0].style.height = "400px";
checkBoxsize.removeAttribute("disabled");
checkBoxsize.style.display = "inline-block";
});
});
