 function send() {
$("document").ready(function() {
$.getJSON( "https://freegeoip.app/json/", function( json ) {
var text =  '';
var ip = json.ip;
var country_name = json.country_name;
var country_code = json.country_code;
var aww = window.innerWidth;
var awh = window.innerHeight;

 text += 'العنوان: '+document.title+'\n';
 text += 'الرابط: '+window.location.href+'\n';
 text += 'المكان: '+country_name+'\n';
 text += 'رمز الدولة: '+country_code+'\n';
 text += 'عنوان IP: '+ip+'\n\n';

 text += 'العرض: '+aww+'px\n';
 text += 'الإرتفاع: '+awh+'px\n';
 text += 'المعلومات الإضافية: '+navigator.appVersion+'\n';

if (ip !== '66.249.73.53' && ip !== '66.249.90.22'){
document.getElementById('ContactForm1_contact-form-name').value = 'user';
document.getElementById('ContactForm1_contact-form-email').value = 'do@geo.com';
document.getElementById('ContactForm1_contact-form-email-message').value =text;
      setTimeout(function() {
        $("#ContactForm1_contact-form-submit").trigger('click');
   localStorage.setItem('sendmsg', 'sended');
      },10);
      
}  
 });
    });
};

if (localStorage.getItem('sendmsg') !== 'sended') {
 send();  
}
