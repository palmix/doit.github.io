(function() {
  // get all data in form and return object
  function getFormData(form) {
    var elements = form.elements;
    var honeypot;

    var fields = Object.keys(elements).filter(function(k) {
      if (elements[k].name === "honeypot") {
        honeypot = elements[k].value;
        return false;
      }
      return true;
    }).map(function(k) {
      if(elements[k].name !== undefined) {
        return elements[k].name;
      // special case for Edge's html collection
      }else if(elements[k].length > 0){
        return elements[k].item(0).name;
      }
    }).filter(function(item, pos, self) {
      return self.indexOf(item) == pos && item;
    });

    var formData = {};
    fields.forEach(function(name){
      var element = elements[name];
      
      // singular form elements just have one value
      formData[name] = element.value;

      // when our element has multiple items, get their values
      if (element.length) {
        var data = [];
        for (var i = 0; i < element.length; i++) {
          var item = element.item(i);
          if (item.checked || item.selected) {
            data.push(item.value);
          }
        }
        formData[name] = data.join(', ');
      }
    });

    // add form-specific values into the data
    formData.formDataNameOrder = JSON.stringify(fields);
    formData.formGoogleSheetName = form.dataset.sheet || "responses"; // default sheet name
    formData.formGoogleSendEmail
      = form.dataset.email || ""; // no email by default

    return {data: formData, honeypot: honeypot};
  }

  function handleFormSubmit(event) {  // handles form submit without any jquery
    event.preventDefault();           // we are submitting via xhr below
    var form = event.target;
    var formData = getFormData(form);
    var data = formData.data;

    // If a honeypot field is filled, assume it was done so by a spam bot.
    if (formData.honeypot) {
      return false;
    }

$("#SetSendSummary .progress-bar").css("width","80%");
$("#SetSendSummary .CreateAFile").html('إنشاء الملف <i class="fa fa-check text-success" aria-hidden="true"></i>');
$("#SetSendSummary .SendAFile").html('إرسال الملف <i class="fa fa-check text-success" aria-hidden="true"></i>');
$("#SetSendSummary .SendAFile2").html('تحضير الملف <div class="spinner-grow spinner-grow-sm text-primary" role="status"><span class="visually-hidden">إنتظار...</span></div>');
$("#SetSendSummary .GetAFile").html('إنشاء رابط <div class="spinner-border spinner-border-sm text-primary" role="status"><span class="visually-hidden">إنتظار...</span></div>');

$("#SetSendSummary .SetSummary").html('جاري تحضير الملف <div class="spinner-border spinner-border-sm" role="status"><span class="visually-hidden">إنتظار...</span></div>');


    disableAllButtons(form);
    var url = form.action;
    var xhr = new XMLHttpRequest();
    xhr.open('POST', url);
    // xhr.withCredentials = true;
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
$("#SetSendSummary .progress-bar").css("width","100%");
$("#SetSendSummary .CreateAFile").html('إنشاء الملف <i class="fa fa-check text-success" aria-hidden="true"></i>');
$("#SetSendSummary .SendAFile").html('إرسال الملف <i class="fa fa-check text-success" aria-hidden="true"></i>');
$("#SetSendSummary .SendAFile2").html('تحضير الملف <i class="fa fa-check text-success" aria-hidden="true"></i>');
$("#SetSendSummary .GetAFile").html('إنشاء رابط <div class="spinner-grow spinner-grow-sm text-primary" role="status"><span class="visually-hidden">إنتظار...</span></div>');

$("#SetSendSummary .SetSummary").html('جاري إنشاء رابط <div class="spinner-border spinner-border-sm" role="status"><span class="visually-hidden">إنتظار...</span></div>');
          
          
          
$.getJSON("https://sheets.googleapis.com/v4/spreadsheets/15Va2cpK8HdVl9CgpAbL1g2aU94LUBVozbL5RRulAem4?", {
    key: "AIzaSyDpCuvAcL0ESYhI5X9amoy12NGpswwXdlQ",
    fields: "sheets(properties.gridProperties.rowCount)"
}).done(function(recosts) {
    var id = recosts.sheets[0].properties.gridProperties.rowCount;
 		id = id - 3;
		var els = $('#SendSettings');
		els.addClass('btn-success');
		els.removeClass('btn-primary');
		$('#viewsender').html('مشاهدة البطاقة المرسلة');
		$("#SetSendSummary").css("display","none");
		$("#sendToSheet .spinner-border").css("display","none");
		$("#sendToSheet .fa-paper-plane").css("display","inline-block");
		$("#SetSendSummary .CreateAFile").html('');
		$("#SetSendSummary .SendAFile").html('');
		$("#SetSendSummary .SendAFile2").html('');
		$("#SetSendSummary .GetAFile").html('');
		$("#SetSendSummary .SetSummary").html('تم إرسال الملف بنجاح <i class="fa fa-check text-success" aria-hidden="true"></i>');
		$("#SetSendSummary .progress").css("display","none");
		$("#SetSendSummary .progress-bar").css("width","0%");
		$(".btnNewform").css("display","inline-block");
		$("#btnModifyClose").removeAttr("disabled");
		$("#thankyou_message").css("display","block");
		$("#SendSettings").attr("onclick","javascript:SendOut()");
  
		$(".SummarySendit").html('<li> إنشاء الملف <i class="fa fa-check text-success" aria-hidden="true"></i></li> <li> إرسال الملف <i class="fa fa-check text-success" aria-hidden="true"></i></li> <li> تحضير الملف <i class="fa fa-check text-success" aria-hidden="true"></i></li> <li> إنشاء رابط <i class="fa fa-check text-success" aria-hidden="true"></i> <a href="https://card.geoarabic.com/p/card.html?card=ID1000000'+id+'" target="_blank"><i class="fa fa-external-link fa-flip-horizontal" style="font-size:0.8rem" aria-hidden="true"></i></a></li> <li> تم إرسال الملف بنجاح <i class="fa fa-check text-success" aria-hidden="true"></i></li> <br/><br/> نشكرك على المساهمة في جمع ونشر المعلومات <br/> سيتم مراجعة النموذج الذي أدخلته ونشره على موقعنا قريبًا<br/>ومع ذلك يمكنك مشاهدة ومشاركة بطاقتك في الرابط التالي:<br/><a href="https://card.geoarabic.com/p/card.html?card=ID1000000'+id+'" target="_blank">https://card.geoarabic.com/p/card.html?card=ID1000000'+id+'</a><br/>');

});
          



          form.reset();
          var formElements = form.querySelector(".form-sheet")
          if (formElements) {
            formElements.style.display = "none"; // hide form
			UploadfileJsonToDrive();
          }
          var thankYouMessage = form.querySelector(".thankyou_message");
          if (thankYouMessage) {
            thankYouMessage.style.display = "block";
          }
        }
    };
    // url encode form data for sending as post data
    var encoded = Object.keys(data).map(function(k) {
        return encodeURIComponent(k) + "=" + encodeURIComponent(data[k]);
    }).join('&');
    xhr.send(encoded);
  }
  
  function loaded() {
    // bind to the submit event of our form
    var forms = document.querySelectorAll("form.gformUser");
    for (var i = 0; i < forms.length; i++) {
      forms[i].addEventListener("submit", handleFormSubmit, false);
    }
  };
  document.addEventListener("DOMContentLoaded", loaded, false);

  function disableAllButtons(form) {
    var buttons = form.querySelectorAll("button");
    for (var i = 0; i < buttons.length; i++) {
      buttons[i].disabled = true;
    }
  }
})();
