
$(document).ready(function() {
$('.loadingFullscreen').addClass('d-none');
});

function selecttypetext(){
$('#g4').val('none');
$('#g9_1').val('none');
$('#AnimalClass').val('none');
$('#g5').val('none');
$('#g10').val('none');
$('#g11').val('none');
$('#ga8_1').val('none');
$('#Multipleimages').val('none');

var selecttypetextvar = $('#selecttypetext').val();
if(selecttypetextvar != 'sortby1'){
  $('.sortby1').addClass('d-none');
}else{
  $('.sortby1').removeClass('d-none');
}
if(selecttypetextvar != 'sortby2'){
  $('.sortby2').addClass('d-none');
}else{
  $('.sortby2').removeClass('d-none');
}
if(selecttypetextvar != 'sortby3'){
  $('.sortby3').addClass('d-none');
}else{
  $('.sortby3').removeClass('d-none');
}
if(selecttypetextvar != 'sortby4'){
  $('.sortby4').addClass('d-none');
}else{
  $('.sortby4').removeClass('d-none');
}
if(selecttypetextvar != 'sortby5'){
  $('.sortby5').addClass('d-none');
}else{
  $('.sortby5').removeClass('d-none');
}
if(selecttypetextvar != 'sortby6'){
  $('.sortby6').addClass('d-none');
} else{
  $('.sortby6').removeClass('d-none');
}
if(selecttypetextvar != 'sortby7'){
  $('.sortby7').addClass('d-none');
} else{
  $('.sortby7').removeClass('d-none');
}
if(selecttypetextvar != 'sortby8'){
  $('.sortby8').addClass('d-none');
}else{
  $('.sortby8').removeClass('d-none');
}
  
$('#btnfilter').attr("disabled", "disabled");

  
}
   
   
   
   
   
   
   
function g9_1(){
var s = $('#g9_1').val();
if(s != 'none'){
$('#btnfilter').removeAttr("disabled");
}else{
$('#btnfilter').attr("disabled","disabled");
}
}

   

  
  
function g4(){
var s = $('#g4').val();
if(s != 'none'){
$('#btnfilter').removeAttr("disabled");
}else{
$('#btnfilter').attr("disabled","disabled");
}
}
  
  
function AnimalClass(){
var s = $('#AnimalClass').val();
if(s != 'none'){
$('#btnfilter').removeAttr("disabled");
}else{
$('#btnfilter').attr("disabled","disabled");
}
}
  
  
function g5(){
var s = $('#g5').val();
if(s != 'none'){
$('#btnfilter').removeAttr("disabled");
}else{
$('#btnfilter').attr("disabled","disabled");
}
}
  
function g10(){
var s = $('#g10').val();
if(s != 'none'){
$('#btnfilter').removeAttr("disabled");
}else{
$('#btnfilter').attr("disabled","disabled");
}
}
  
  
function g11(){
var s = $('#g11').val();
if(s != 'none'){
$('#btnfilter').removeAttr("disabled");
}else{
$('#btnfilter').attr("disabled","disabled");
}
}
  
  
function ga8_1(){
var s = $('#ga8_1').val();
if(s != 'none'){
$('#btnfilter').removeAttr("disabled");
}else{
$('#btnfilter').attr("disabled","disabled");
}
}
  
function Multipleimages(){
var s = $('#Multipleimages').val();
if(s != 'none'){
$('#btnfilter').removeAttr("disabled");
}else{
$('#btnfilter').attr("disabled","disabled");
}
}

   
   
   
   
   
   
   
   
   
function filter(){
  $('.loadingFullscreen').removeClass('d-none');
   $.getJSON("https://sheets.googleapis.com/v4/spreadsheets/"+sheetId+"/?", {
    key: keyGeoArabic,
    alt: "json",
    fields: "sheets(data.rowData.values.formattedValue)"
    }).catch(function(error) {
$('.loadingFullscreen').addClass('d-none');
   $("#cardslistall").html('<div class="alert alert-danger d-flex align-items-center" role="alert"><i class="fa fa-info-circle mx-2" aria-hidden="true"></i><div>حدث خطأ ما! يرجى إعادة المحاولة، رمز الخطأ: '+error.status+'</div></div>');
     

     
     
     
     
    }).done(function(recosts) {


     
var cardse = '<div class="row row-cols-1 row-cols-md-3 g-4 mt-2">';
var cards1 = [cardse];
var cards1num=0;
     
     
     
var windowW = window.innerWidth;
var windowH = window.innerHeight;

$.each(recosts.sheets[0].data[0].rowData.reverse(),function( i, item ) {



var Img_W = 214;
var Img_H = 160;
var widthcard = '15rem;';
var paddingx = 2;
var margint = 2;
var mx = 'auto'
var windowW = window.innerWidth;
var windowH = window.innerHeight;
if(windowW <= 300){
	Img_W = 272;
	Img_H = 203;
	widthcard = '100%;';
	paddingx = 3;
	margint = 2;
    
}else if(windowW >= 301 && windowW <= 350 ){
	Img_W = 150;
	Img_H = 112;
	widthcard = '10rem;';
	paddingx = 1;
	margint = 2;
    
}else if(windowW >= 351 && windowW <= 400 ){
	Img_W = 166;
	Img_H = 124;
	widthcard = '11rem;';
	paddingx = 1;
	margint = 2;
    
}else if(windowW >= 401 && windowW <= 457 ){
	Img_W = 182;
	Img_H = 136;
	widthcard = '12rem;';
	paddingx = 1;
	margint = 2;
    
}else if(windowW >= 458 && windowW <= 934 ){
	Img_W = 190;
	Img_H = 148;
	widthcard = '13rem;';
	paddingx = 1;
	margint = 2;
    
}else if(windowW >= 935){
	Img_W = 214;
	Img_H = 160;
	widthcard = '15rem;';
	paddingx = 2;
	margint = 3;
    mx = 0;
    
}






      

var Timestamp = item.values[0].formattedValue;//تاريخ النشر
var ResponseNumber = item.values[1].formattedValue;//ID
var Published = item.values[2].formattedValue;//حالة النشر
var UserStatus = item.values[3].formattedValue;//حالة الحساب
var CommonName_Question = item.values[4].formattedValue;//الإسم الشائع
var CommonName_Answer = item.values[5].formattedValue;//الإسم الشائع هو
var CommonName_Answer_En = item.values[6].formattedValue;//الإسم الشائع بالانجليزية هو
var ScientificName_Question = item.values[7].formattedValue;//الاسم العلمي
var ScientificName_Answer = item.values[8].formattedValue;//الاسم العلمي هو
var Type_Question = item.values[9].formattedValue;//النوع
var Type_Answer = item.values[10].formattedValue;//النوع هو
var Class_Question = item.values[11].formattedValue;//الطائفة
var Class_AnswerAR = item.values[12].formattedValue;//إسم الطائفة
var Class_AnswerEN = item.values[13].formattedValue;//الإسم العلمي للطائفة
var Order_Question = item.values[14].formattedValue;//الرتبة
var Order_Answer = item.values[15].formattedValue;//الرتبة هي
var Subfamily_Question = item.values[16].formattedValue;//الفصيلة
var Subfamily_Answer = item.values[17].formattedValue;//الفصيلة هي
var Diet_Question = item.values[18].formattedValue;//النظام الغذائي
var Diet_Answer = item.values[19].formattedValue;//النظام الغذائي هو
var Age_Question = item.values[20].formattedValue;//متوسط العمر
var Age_Answer = item.values[21].formattedValue;//متوسط العمر هو
var Size_Question = item.values[22].formattedValue;//الحجم
var Size_Answer = item.values[23].formattedValue;//الحجم هو
var Weight_Question = item.values[24].formattedValue;//الوزن
var Weight_Answer = item.values[25].formattedValue;//الوزن هو
var PopulationTrend_Question = item.values[26].formattedValue;//إتجاه السكان الحالي
var PopulationTrend_Answer = item.values[27].formattedValue;//إتجاه السكان الحالي هو
var PopulationTrend_Code = item.values[28].formattedValue;//رمز إتجاه السكان الحالي
var PopulationTrend_Num = item.values[29].formattedValue;//رقم إتجاه السكان الحالي
var RedList_Question = item.values[30].formattedValue;//حالة القائمة الحمراء (IUCN)
var RedList_Answer = item.values[31].formattedValue;//حالة القائمة الحمراء (IUCN) هي
var RedList_Num = item.values[32].formattedValue;//رقم حالة القائمة الحمراء (IUCN)
var Speed_Question = item.values[33].formattedValue;//السرعة
var Speed_Answer = item.values[34].formattedValue;//السرعة هي
var DurationPregnancy_Question = item.values[35].formattedValue;//مدة الحمل
var DurationPregnancy_Answer = item.values[36].formattedValue;//مدة الحمل هي
var NumBirths_Question = item.values[37].formattedValue;//عدد الصغار/البيض
var NumBirths_Answer = item.values[38].formattedValue;//عدد الصغار/البيض هو
var EcologicalHabitat_Question = item.values[39].formattedValue;//الموطن البيئي
var EcologicalHabitat_Answer = item.values[40].formattedValue;//الموطن البيئي هو
var Color_Question = item.values[41].formattedValue;//الألوان
var Color_Answer = item.values[42].formattedValue;//الألوان هي
var Enemy_Question = item.values[43].formattedValue;//الأعداء
var Enemy_Answer = item.values[44].formattedValue;//الأعداء هم
var FeedOn_Question = item.values[45].formattedValue;//الغذاء
var FeedOn_Answer = item.values[46].formattedValue;//الغذاء هو
var Img_Question = item.values[47].formattedValue;//صورة الحيوان
var Img_Answer = item.values[48].formattedValue;//عنوان صورة الحيوان
var ImgInDrive_Question = item.values[49].formattedValue;//الصورة في درايف
var ImgInDrive_Answer = item.values[50].formattedValue;//رابط الصور في درايف
var ImgCover_Question = item.values[51].formattedValue;//صورة الغلاف
var ImgCover_Answer = item.values[52].formattedValue;//عنوان صورة الغلاف
var MultipleImages_Question = item.values[53].formattedValue;//صور متعددة
var MultipleImages_Answer = item.values[54].formattedValue;//روابط الصور المتعددة
var JsonFileIdInDrive_Question = item.values[55].formattedValue;//ملف Json
var JsonFileIdInDrive_Answer = item.values[56].formattedValue;//معرف ملف Json
var ImgSizeComparison_Question = item.values[57].formattedValue;//صورة مقارنة الحجم
var ImgSizeComparison_Answer = item.values[58].formattedValue;//عنوان صورة مقارنة الحجم
var info1_Question = item.values[59].formattedValue;//المعلومات الإضافية 1
var info1_Answer = item.values[60].formattedValue;//المعلومات الإضافية 1 هي
var info2_Question = item.values[61].formattedValue;//المعلومات الإضافية 2
var info2_Answer = item.values[62].formattedValue;//المعلومات الإضافية 2 هي
var info3_Question = item.values[63].formattedValue;//المعلومات الإضافية 3
var info3_Answer = item.values[64].formattedValue;//المعلومات الإضافية 3 هي
var info4_Question = item.values[65].formattedValue;//المعلومات الإضافية 4
var info4_Answer = item.values[66].formattedValue;//المعلومات الإضافية 4 هي
var DidYouKnow_Question = item.values[67].formattedValue;//هل تعلم
var DidYouKnow_Answer = item.values[68].formattedValue;//معلومات هل تعلم
var UserAccountId = item.values[69].formattedValue;//معرف حساب المستخدم
var UserLoginWith = item.values[70].formattedValue;//تسجيل دخول بإستخدام
var UserAccountImg = item.values[71].formattedValue;//صورة الملف الشخصي للمستخدم
var UserName = item.values[72].formattedValue;//إسم المستخدم
var UserEmail = item.values[73].formattedValue;//البريد الإلكتروني
var Name_publishing = item.values[74].formattedValue;//اظهار معلومات الناشر
var PageTitle = item.values[75].formattedValue;//عنوان الصفحة
var PageLink = item.values[76].formattedValue;//رابط الصفحة
var SourceInfo_Question = item.values[77].formattedValue;//المراجع
var SourceInfo_Answer_Title = item.values[78].formattedValue;//عنوان المراجع
var SourceInfo_Answer_link = item.values[79].formattedValue;//رابط المراجع
var TheState = item.values[80].formattedValue;//الدولة
var CountryCode = item.values[81].formattedValue;//رمز الدولة
var IPAddress = item.values[82].formattedValue;//عنوان IP
var ScreenWidth = item.values[83].formattedValue;//عرض الشاشة
var ScreenHeight = item.values[84].formattedValue;//إرتفاع الشاشة
var MoreInformation = item.values[85].formattedValue;//معلومات إضافية
var dateID = item.values[86].formattedValue;//معرف تاريخ المنشور
var PostUrlInSite_Question = item.values[87].formattedValue;//رابط المنشور
var PostUrlInSite_Answer = item.values[88].formattedValue;//رابط المنشور هو
var PostIdInSite_Question = item.values[89].formattedValue;//معرف المنشور هو
var PostIdInSite_Answer = item.values[90].formattedValue;//معرف المنشور
var SummaryPage_Question = item.values[91].formattedValue;//وصف الموضوع
var SummaryPage_Answer = item.values[92].formattedValue;//وصف الموضوع هو
var ImgMaps_Question = item.values[93].formattedValue;//صورة خريطة التواجد
var ImgMaps_Answer = item.values[94].formattedValue;//الخارطة URL

  
  
  
 UserStatus = parseInt(UserStatus);//حالة الحساب
 PopulationTrend_Num = parseInt(PopulationTrend_Num);//رقم إتجاه السكان الحالي
 RedList_Num = parseInt(RedList_Num);//رقم حالة القائمة الحمراء (IUCN)

var cardURL = 'http://card.geoarabic.com/p/card.html?id='+ResponseNumber;

if(CommonName_Answer.length >= 30){
CommonName_Answer =  CommonName_Answer.substring(0,30)+'...';
}

  
if(ScientificName_Answer == "" || ScientificName_Answer == "NoData"){
ScientificName_Answer = "";
}
if(CommonName_Answer_En == "" || CommonName_Answer_En == "NoData"){
CommonName_Answer_En = "";
}
if(Img_Answer == "" || Img_Answer == "NoData"){
Img_Answer = "https://lh3.googleusercontent.com/-nngQTpjLnLk/WwI4sFyHQfI/AAAAAAAACdM/CFZJhtiKCMgR6syKazo7tsM4_xVtpML7gCEwYBhgL/w214-h160-p/GeoArabic.png";
}
    
    
    
ImgCover_Answer = ImgCover_Answer.toString().replace(/\/s200\/|\/s320\/|\/h120\/|\/s1600\//gi,'/w'+Img_W+'-h'+Img_H+'-p/');
ImgCover_Answer = ImgCover_Answer.replace('=s120', '=w'+Img_W+'-h'+Img_H+'-p');

Img_Answer = Img_Answer.toString().replace(/\/s200\/|\/s320\/|\/h120\/|\/s1600\//gi,'/w'+Img_W+'-h'+Img_H+'-p/');
Img_Answer = Img_Answer.replace('=s120', '=w'+Img_W+'-h'+Img_H+'-p');

  
  
if(ImgCover_Answer == "NoData" || ImgCover_Answer == ""){
ImgCover_Answer = Img_Answer;
}
  
  
  
  
if (Published === "0"){
}else if(Published === "حالة النشر"){
}else if(Published === "Published"){
}else{
var showModalClassImg = 'showModal';
var showModalOnClickImg = 'return false;';
var showModalClass = 'showModal';
var showModalOnClick = 'return false;';
  
  
if(Openframe == 0){
showModalClassImg = '';
showModalOnClickImg = '';
showModalClass = '';
showModalOnClick = '';
}else if(Openframe == 1){
showModalClassImg = '';
showModalOnClickImg = '';
showModalClass = 'showModal';
showModalOnClick = 'return false;';
}else if(Openframe == 2){
showModalClassImg = 'showModal';
showModalOnClickImg = 'return false;';
showModalClass = 'showModal';
showModalOnClick = 'return false;';
}
  
  
  
  
  
  
function GetList(num) {
 num.push('<div class="col mx-'+mx+' px-'+paddingx+' mt-'+margint+'" style="width:'+widthcard+'">');
 num.push('<div class="card">');
 num.push('<a href="'+PostUrlInSite_Answer+'" data-post-id="'+PostIdInSite_Answer+'" data-card-href="'+cardURL+'" style="height:'+Img_H+'px;" class="'+showModalClassImg+' dataimg" onclick="'+showModalOnClickImg+'" data-id="'+ResponseNumber+'" title="'+ScientificName_Answer+'"><img src="'+ImgCover_Answer+'" width="'+Img_W+'" height="'+Img_H+'" loading="lazy" class="card-img-top lazyload" alt="'+CommonName_Answer+'"></a>');
 num.push('<div class="card-body text-center p-0 rounded-bottom">');
 num.push('<a href="'+PostUrlInSite_Answer+'" data-post-id="'+PostIdInSite_Answer+'" data-card-href="'+cardURL+'" data-id="'+ResponseNumber+'" onclick="'+showModalOnClick+'" title="'+CommonName_Answer_En+'" class="list-group-item list-group-item-action border-0 '+showModalClass+'">'+CommonName_Answer+'</a>');
 num.push('</div>');
 num.push('</div>');
 num.push('</div>');
}
  


  
var p1 = $('#g9_1').val();// الحجم
var p2 = $('#g4').val();// النوع
var p3 = $('#AnimalClass').val();// الطائفة
var p4 = $('#g5').val();// النظام الغذائي
var p5 = $('#g10').val();// اتجاه السكان
var p6 = $('#g11').val();// حالة الحفظ
var p7 = $('#ga8_1').val();// هل تعلم
var p8 = $('#Multipleimages').val();// بها صور


  
  
  
  
  

if(p1 != 'none'){
  if(p1 == '1'){
  	if(ImgSizeComparison_Question == 'الحجم بالنسبة للمشبك'){
		cards1num += 1;
		GetList(cards1);
 	 }
  }else if(p1 == '2'){
  	if(ImgSizeComparison_Question == 'الحجم بالنسبة للفنجان'){
		cards1num += 1;
		GetList(cards1);
 	 }
  }else if(p1 == '3'){
  	if(ImgSizeComparison_Question == 'الحجم بالنسبة للإنسان'){
		cards1num += 1;
		GetList(cards1);
 	 }
  }else if(p1 == '4'){
  	if(ImgSizeComparison_Question == 'الحجم بالنسبة للحافلة'){
		cards1num += 1;
		GetList(cards1);
 	 }
  }
}
  
  
if(p2 != 'none'){
  if(p2 == 'Mammalia'){
  	if(Type_Answer == 'الثدييات'){
		cards1num += 1;
		GetList(cards1);
 	 }
  }else if(p2 == 'Aves'){
  	if(Type_Answer == 'طيور'){
		cards1num += 1;
		GetList(cards1);
 	 }
  }else if(p2 == 'Pisces'){
  	if(Type_Answer == 'أسماك'){
		cards1num += 1;
		GetList(cards1);
 	 }
  }else if(p2 == 'Reptilia'){
  	if(Type_Answer == 'الزواحف'){
		cards1num += 1;
		GetList(cards1);
 	 }
  }else if(p2 == 'Amphibia'){
  	if(Type_Answer == 'البرمائيات'){
		cards1num += 1;
		GetList(cards1);
 	 }
  }else if(p2 == 'Insecta'){
  	if(Type_Answer == 'الحشرات'){
		cards1num += 1;
		GetList(cards1);
 	 }
  }else if(p2 == 'Invertebrata'){
  	if(Type_Answer == 'اللافقاريات'){
		cards1num += 1;
		GetList(cards1);
 	 }
  }else if(p2 == 'PrehistoricAnimals'){
  	if(Type_Answer == 'حيوانات ما قبل التاريخ'){
		cards1num += 1;
		GetList(cards1);
 	 }
  }
  }
  
  

  
  
if(p3 != 'none'){
  if(p3 == 'Mammalia'){
  	if(Class_AnswerEN == 'Mammalia'){
		cards1num += 1;
		GetList(cards1);
 	 }
  }else if(p3 == 'Aves'){
  	if(Class_AnswerEN == 'Aves'){
		cards1num += 1;
		GetList(cards1);
 	 }
  }else if(p3 == 'Pisces'){
  	if(Type_Answer == 'أسماك'){
		cards1num += 1;
		GetList(cards1);
 	 }
  }else if(p3 == 'Reptilia'){
  	if(Class_AnswerEN == 'Reptilia'){
		cards1num += 1;
		GetList(cards1);
 	 }
  }else if(p3 == 'Amphibia'){
  	if(Class_AnswerEN == 'Amphibia'){
		cards1num += 1;
		GetList(cards1);
 	 }
  }else if(p3 == 'Insecta'){
  	if(Class_AnswerEN == 'Insecta'){
		cards1num += 1;
		GetList(cards1);
 	 }
  }else if(p3 == 'Invertebrata'){
  	if(Class_AnswerEN == 'Invertebrata'){
		cards1num += 1;
		GetList(cards1);
 	 }
  }else if(p3 == 'Dinosauria'){
  	if(Class_AnswerEN == 'Dinosauria'){
		cards1num += 1;
		GetList(cards1);
 	 }
  }else if(p3 == 'Actinopterygii'){
  	if(Class_AnswerEN == 'Actinopterygii'){
		cards1num += 1;
		GetList(cards1);
 	 }
  }else if(p3 == 'Chondrichthyes'){
  	if(Class_AnswerEN == 'Chondrichthyes'){
		cards1num += 1;
		GetList(cards1);
 	 }
  }else if(p3 == 'Sarcopterygii'){
  	if(Class_AnswerEN == 'Sarcopterygii'){
		cards1num += 1;
		GetList(cards1);
 	 }
  }else if(p3 == 'Arachnida'){
  	if(Class_AnswerEN == 'Arachnida'){
		cards1num += 1;
		GetList(cards1);
 	 }
  }else if(p3 == 'Arthropoda'){
  	if(Class_AnswerEN == 'Arthropoda'){
		cards1num += 1;
		GetList(cards1);
 	 }
  }else if(p3 == 'Worms'){
  	if(Class_AnswerEN == 'Worms'){
		cards1num += 1;
		GetList(cards1);
 	 }
  }else if(p3 == 'Mollusks'){
  	if(Class_AnswerEN == 'Mollusks'){
		cards1num += 1;
		GetList(cards1);
 	 }
  }else if(p3 == 'Gastropoda'){
  	if(Class_AnswerEN == 'Gastropoda'){
		cards1num += 1;
		GetList(cards1);
 	 }
  }else if(p3 == 'Chilopoda'){
  	if(Class_AnswerEN == 'Chilopoda'){
		cards1num += 1;
		GetList(cards1);
 	 }
  }else if(p3 == 'Cephalopoda'){
  	if(Class_AnswerEN == 'Cephalopoda'){
		cards1num += 1;
		GetList(cards1);
 	 }
  }else if(p3 == 'Sponges'){
  	if(Class_AnswerEN == 'Sponges'){
		cards1num += 1;
		GetList(cards1);
 	 }
  }else if(p3 == 'Bivalvia'){
  	if(Class_AnswerEN == 'Bivalvia'){
		cards1num += 1;
		GetList(cards1);
 	 }
  }else if(p3 == 'Crustaceans'){
  	if(Class_AnswerEN == 'Crustaceans'){
		cards1num += 1;
		GetList(cards1);
 	 }
  }else if(p3 == 'Echiniderms'){
  	if(Class_AnswerEN == 'Echiniderms'){
		cards1num += 1;
		GetList(cards1);
 	 }
  }else if(p3 == 'Annelida'){
  	if(Class_AnswerEN == 'Annelida'){
		cards1num += 1;
		GetList(cards1);
 	 }
  }else if(p3 == 'Malacostraca'){
  	if(Class_AnswerEN == 'Malacostraca'){
		cards1num += 1;
		GetList(cards1);
 	 }
  }else if(p3 == 'Scyphozoa'){
  	if(Class_AnswerEN == 'Scyphozoa'){
		cards1num += 1;
		GetList(cards1);
 	 }
  }else if(p3 == 'Actiniaria'){
  	if(Class_AnswerEN == 'Actiniaria'){
		cards1num += 1;
		GetList(cards1);
 	 }
  }else if(p3 == 'Anthozoa'){
  	if(Class_AnswerEN == 'Anthozoa'){
		cards1num += 1;
		GetList(cards1);
 	 }
  }else if(p3 == 'Hydrozoa'){
  	if(Class_AnswerEN == 'Hydrozoa'){
		cards1num += 1;
		GetList(cards1);
 	 }
  }else if(p3 == 'Asteroidea'){
  	if(Class_AnswerEN == 'Asteroidea'){
		cards1num += 1;
		GetList(cards1);
 	 }
  }
}
  
  
  
  
  
if(p4 != 'none'){
  if(p4 == 'Carnivore'){
  	if(Diet_Answer == 'آكل لحوم'){
		cards1num += 1;
		GetList(cards1);
 	 }
  }else if(p4 == 'Herbivore'){
  	if(Diet_Answer == 'آكل أعشاب'){
		cards1num += 1;
		GetList(cards1);
 	 }
  }else if(p4 == 'Omnivore'){
  	if(Diet_Answer == 'قارت'){
		cards1num += 1;
		GetList(cards1);
 	 }
  }else if(p4 == 'Fungivore'){
  	if(Diet_Answer == 'آكل فطريات'){
		cards1num += 1;
		GetList(cards1);
 	 }
  }else if(p4 == 'Bacterivore'){
  	if(Diet_Answer == 'آكل بكتيريا'){
		cards1num += 1;
		GetList(cards1);
 	 }
  }else if(p4 == 'Planktivore'){
  	if(Diet_Answer == 'يتغذى على العوالق'){
		cards1num += 1;
		GetList(cards1);
 	 }
  }
}
  
  
  
if(p5 != 'none'){
  if(p5 == 'Decreasing'){
  	if(PopulationTrend_Num == '0'){
		cards1num += 1;
		GetList(cards1);
 	 }
  }else if(p5 == 'stable'){
  	if(PopulationTrend_Num == '1'){
		cards1num += 1;
		GetList(cards1);
 	 }
  }else if(p5 == 'Increasing'){
  	if(PopulationTrend_Num == '2'){
		cards1num += 1;
		GetList(cards1);
 	 }
  }else if(p5 == 'unknown'){
  	if(PopulationTrend_Num == '3' && RedList_Num != '7'){
		cards1num += 1;
		GetList(cards1);
 	 }
  }else if(p5 == 'extinct'){
  	if(RedList_Num == '7'){
		cards1num += 1;
		GetList(cards1);
 	 }
  }
}
  
  
  
  
  
if(p6 != 'none'){
  if(p6 == '1'){
  	if(RedList_Num == '1'){
		cards1num += 1;
		GetList(cards1);
 	 }
  }else if(p6 == '2'){
  	if(RedList_Num == '2'){
		cards1num += 1;
		GetList(cards1);
 	 }
  }else if(p6 == '3'){
  	if(RedList_Num == '3'){
		cards1num += 1;
		GetList(cards1);
 	 }
  }else if(p6 == '4'){
  	if(RedList_Num == '4'){
		cards1num += 1;
		GetList(cards1);
 	 }
  }else if(p6 == '5'){
  	if(RedList_Num == '5'){
		cards1num += 1;
		GetList(cards1);
 	 }
  }else if(p6 == '6'){
  	if(RedList_Num == '6'){
		cards1num += 1;
		GetList(cards1);
 	 }
  }else if(p6 == '7'){
  	if(RedList_Num == '7'){
		cards1num += 1;
		GetList(cards1);
 	 }
  }else if(p6 == '8'){
  	if(RedList_Num == '8'){
		cards1num += 1;
		GetList(cards1);
 	 }
  }else if(p6 == '9'){
  	if(RedList_Num == '9'){
		cards1num += 1;
		GetList(cards1);
 	 }
  }
}
  
  
if(p7 != 'none'){
  if(p7 == '1'){
  	if(DidYouKnow_Answer != 'NoData'){
		cards1num += 1;
		GetList(cards1);
 	 }
  }else if(p7 == '2'){
  	if(DidYouKnow_Answer == 'NoData'){
		cards1num += 1;
		GetList(cards1);
 	 }
  }
}
  
  
if(p8 != 'none'){
  if(p8 == '1'){
  	if(MultipleImages_Answer != 'NoData'){
		cards1num += 1;
		GetList(cards1);
 	 }
  }else if(p8 == '2'){
  	if(MultipleImages_Answer == 'NoData'){
		cards1num += 1;
		GetList(cards1);
 	 }
  }
}
  
}








});

cards1.push('</div>');


document.getElementById('cardslistall').innerHTML = '';

if(cards1num > 1){
document.getElementById('cardslistall').innerHTML +=  cards1.join('');
}else{
document.getElementById('cardslistall').innerHTML += '<div class="alert alert-warning d-flex align-items-center mx-4" role="alert"><i class="fa fa-info-circle mx-2" aria-hidden="true"></i><div>عذرًا! لا يوجد محتوى مطابق.</div></div>';
  
}
imglazy();
$('.loadingFullscreen').addClass('d-none');
$(document).ready(function() {

$(".showModal").click(function(e) {
setSizeModal();
    $(".spinnercard").css("display","block");
    $("#cardinfo").css("display","none");
$("#showingCard").html("")
    
    
    $("#showingCardModal").modal("show");

//star
  
  
  
  
    var getIdCard = $(this).attr("data-id");
    var IdCard = getIdCard.replace('ID1000000', '');
    var IdCards = parseInt(IdCard)
    var IdCard = IdCards + 3;
    if (getBackgroundCard != "") {
        $("body.bg-light").attr("style", "background-color:#" + getBackgroundCard + "!important")
    }
    $.getJSON("https://sheets.googleapis.com/v4/spreadsheets/"+sheetId+"/values/responses?", {
        key: keyGeoArabic,
        range: "A" + IdCard + ":ZZ" + IdCard,
        majorDimension: "COLUMNS"
    }).catch(function(error) {
if (error.status == 0){
	 $('#cardinfo').html('<div class="alert alert-danger m-4" role="alert"> يرجى التحقق من إتصالك بالإنترنت</div>');
	console.log(error.status);
 }else if (error.status == 404){
	$('#cardinfo').html('<div class="alert alert-danger m-4" role="alert">حدث خطأ في جلب المحتوى</div>');
 }else if (error.status == 400){
	$('#cardinfo').html('<div class="alert alert-danger m-4" role="alert"> حدث خطأ، لا يوجد تصريح لعرض المحتوى</div>');
 }else{
	$('#cardinfo').html('<div class="alert alert-danger m-4" role="alert"> حدث خطأ ما، يرجى إعادة المحاولة <br/>رمز الخطأ: '+error.status+' </div>');
 }
$(".spinnercard").css("display","none");
$("#cardinfo").css("display","block");
    }).done(function(recosts) {
        var item = recosts.values;

var Timestamp = item[0];//تاريخ النشر
var ResponseNumber = item[1];//ID
var Published = item[2];//حالة النشر
var UserStatus = item[3];//حالة الحساب
var CommonName_Question = item[4];//الإسم الشائع
var CommonName_Answer = item[5];//الإسم الشائع هو
var CommonName_Answer_En = item[6];//الإسم الشائع بالانجليزية هو
var ScientificName_Question = item[7];//الاسم العلمي
var ScientificName_Answer = item[8];//الاسم العلمي هو
var Type_Question = item[9];//النوع
var Type_Answer = item[10];//النوع هو
var Class_Question = item[11];//الطائفة
var Class_AnswerAR = item[12];//إسم الطائفة
var Class_AnswerEN = item[13];//الإسم العلمي للطائفة
var Order_Question = item[14];//الرتبة
var Order_Answer = item[15];//الرتبة هي
var Subfamily_Question = item[16];//الفصيلة
var Subfamily_Answer = item[17];//الفصيلة هي
var Diet_Question = item[18];//النظام الغذائي
var Diet_Answer = item[19];//النظام الغذائي هو
var Age_Question = item[20];//متوسط العمر
var Age_Answer = item[21];//متوسط العمر هو
var Size_Question = item[22];//الحجم
var Size_Answer = item[23];//الحجم هو
var Weight_Question = item[24];//الوزن
var Weight_Answer = item[25];//الوزن هو
var PopulationTrend_Question = item[26];//إتجاه السكان الحالي
var PopulationTrend_Answer = item[27];//إتجاه السكان الحالي هو
var PopulationTrend_Code = item[28];//رمز إتجاه السكان الحالي
var PopulationTrend_Num = item[29];//رقم إتجاه السكان الحالي
var RedList_Question = item[30];//حالة القائمة الحمراء (IUCN)
var RedList_Answer = item[31];//حالة القائمة الحمراء (IUCN) هي
var RedList_Num = item[32];//رقم حالة القائمة الحمراء (IUCN)
var Speed_Question = item[33];//السرعة
var Speed_Answer = item[34];//السرعة هي
var DurationPregnancy_Question = item[35];//مدة الحمل
var DurationPregnancy_Answer = item[36];//مدة الحمل هي
var NumBirths_Question = item[37];//عدد الصغار/البيض
var NumBirths_Answer = item[38];//عدد الصغار/البيض هو
var EcologicalHabitat_Question = item[39];//الموطن البيئي
var EcologicalHabitat_Answer = item[40];//الموطن البيئي هو
var Color_Question = item[41];//الألوان
var Color_Answer = item[42];//الألوان هي
var Enemy_Question = item[43];//الأعداء
var Enemy_Answer = item[44];//الأعداء هم
var FeedOn_Question = item[45];//الغذاء
var FeedOn_Answer = item[46];//الغذاء هو
var Img_Question = item[47];//صورة الحيوان
var Img_Answer = item[48];//عنوان صورة الحيوان
var ImgInDrive_Question = item[49];//الصورة في درايف
var ImgInDrive_Answer = item[50];//رابط الصور في درايف
var ImgCover_Question = item[51];//صورة الغلاف
var ImgCover_Answer = item[52];//عنوان صورة الغلاف
var MultipleImages_Question = item[53];//صور متعددة
var MultipleImages_Answer = item[54];//روابط الصور المتعددة
var JsonFileIdInDrive_Question = item[55];//ملف Json
var JsonFileIdInDrive_Answer = item[56];//معرف ملف Json
var ImgSizeComparison_Question = item[57];//صورة مقارنة الحجم
var ImgSizeComparison_Answer = item[58];//عنوان صورة مقارنة الحجم
var info1_Question = item[59];//المعلومات الإضافية 1
var info1_Answer = item[60];//المعلومات الإضافية 1 هي
var info2_Question = item[61];//المعلومات الإضافية 2
var info2_Answer = item[62];//المعلومات الإضافية 2 هي
var info3_Question = item[63];//المعلومات الإضافية 3
var info3_Answer = item[64];//المعلومات الإضافية 3 هي
var info4_Question = item[65];//المعلومات الإضافية 4
var info4_Answer = item[66];//المعلومات الإضافية 4 هي
var DidYouKnow_Question = item[67];//هل تعلم
var DidYouKnow_Answer = item[68];//معلومات هل تعلم
var UserAccountId = item[69];//معرف حساب المستخدم
var UserLoginWith = item[70];//تسجيل دخول بإستخدام
var UserAccountImg = item[71];//صورة الملف الشخصي للمستخدم
var UserName = item[72];//إسم المستخدم
var UserEmail = item[73];//البريد الإلكتروني
var Name_publishing = item[74];//اظهار معلومات الناشر
var PageTitle = item[75];//عنوان الصفحة
var PageLink = item[76];//رابط الصفحة
var SourceInfo_Question = item[77];//المراجع
var SourceInfo_Answer_Title = item[78];//عنوان المراجع
var SourceInfo_Answer_link = item[79];//رابط المراجع
var TheState = item[80];//الدولة
var CountryCode = item[81];//رمز الدولة
var IPAddress = item[82];//عنوان IP
var ScreenWidth = item[83];//عرض الشاشة
var ScreenHeight = item[84];//إرتفاع الشاشة
var MoreInformation = item[85];//معلومات إضافية
var dateID = item[86];//معرف تاريخ المنشور
var PostUrlInSite_Question = item[87];//رابط المنشور
var PostUrlInSite_Answer = item[88];//رابط المنشور هو
var PostIdInSite_Question = item[89];//معرف المنشور هو
var PostIdInSite_Answer = item[90];//معرف المنشور
var SummaryPage_Question = item[91];//وصف الموضوع
var SummaryPage_Answer = item[92];//وصف الموضوع هو
var ImgMaps_Question = item[93];//صورة خريطة التواجد
var ImgMaps_Answer = item[94];//الخارطة URL

var setIDCard = getIdCard;
var IDURL = PostUrlInSite_Answer.toString();
IDURL = IDURL.replace('http://','https://');
var IDTitle = CommonName_Answer.toString();
var IDDescription = SummaryPage_Answer.toString();

conLinkShort(PostUrlInSite_Answer);

if(IDURL == "" || IDURL == "NoData"){
IDURL = "https://card.geoarabic.com"
}
if(IDTitle == "" || IDTitle == "NoData"){
IDTitle = "جيو عربي"
}
if(IDDescription == "" || IDDescription == "NoData"){
IDDescription = "بطاقة معلومات الحيوانات"
}

$("#IDURL").val(IDURL);
$("#IDTitle").val(IDTitle);
$("#IDDescription").val(IDDescription);
$("#linkcardb").val(setIDCard);
      
      Published = parseInt(Published); //حالة النشر
        UserStatus = parseInt(UserStatus); //حالة الحساب
        PopulationTrend_Num = parseInt(PopulationTrend_Num); //رقم إتجاه السكان الحالي
        RedList_Num = parseInt(RedList_Num); //رقم حالة القائمة الحمراء (IUCN)
        Img_Answer = Img_Answer.toString().replace(/\/s200\/|\/s320\/|\/h120\/|\/s1600\//gi, "/w136-h136-p/");
		Img_Answer = Img_Answer.replace(/=s200|=s320|=s160|=h160|=h120|=s120|=s1600/gi, "=w136-h136-p");
        ImgSizeComparison_Answer = ImgSizeComparison_Answer.toString().replace(/\/s200\/|\/s320\/|\/h120\/|\/s1600\//gi, "/s162/");
        ImgSizeComparison_Answer = ImgSizeComparison_Answer.replace('=s120', '=s162');
        ImgMaps_Answer = ImgMaps_Answer.toString().replace(/\/s200\/|\/s320\/|\/h120\/|\/s1600\//gi, "/s162/");
		ImgMaps_Answer = ImgMaps_Answer.replace(/=s200|=s320|=s160|=h160|=h120|=s120|=s1600/gi, "=s162");
      
        var PstatusSymbol;
        if (PopulationTrend_Num == 1) {
            PstatusSymbol = '<span class="cardinfo_stable"></span>';
        } else if (PopulationTrend_Num == 1) {
            PstatusSymbol = '<span class="cardinfo_stable"></span>';
        } else if (PopulationTrend_Num == 0) {
            PstatusSymbol = '<span class="cardinfo_decreasing"></span>';
        } else if (PopulationTrend_Num == 2) {
            PstatusSymbol = '<span class="cardinfo_increase"></span>';
        } else {
            PstatusSymbol = '';
        }








var vapp1,vapp2,vapp3,titleNameEng;

if (CommonName_Answer_En != 'NoData') {
titleNameEng = ' ('+CommonName_Answer_En+')';
} else {
titleNameEng = '';
}

vapp1 = 'data-description="';
vapp2 = '"';
vapp3 = ': ';








        if (Published == 0) {
            var table = ['<div class="alert alert-secondary" role="alert"> هذه البطاقة غير متوفرة! </div>'];
        } else {
			var SummaryPage = vapp1+SummaryPage_Answer+vapp2;
			if(SummaryPage_Answer == "NoData"){
				SummaryPage = "";
			}
            var table = ['<span '+SummaryPage+' class="incardbackgroundimage"><span class="cardbackgroundimage" style="background-image: url(&quot;' + Img_Answer + '&quot;);"></span></span>'];
            table.push('<div class="TableDiv">');
            table.push('<table class="FastFactsTable" style="overflow-x:auto"><tbody>');
            if (CommonName_Answer != 'NoData' && typeof CommonName_Answer !== 'undefined' && CommonName_Answer != '') {
                $('#showingCard').html(CommonName_Answer);
                $('title').html(CommonName_Answer + ' - جيو عربي');
                table.push('<tr '+vapp1+CommonName_Question+vapp3+CommonName_Answer+titleNameEng+vapp2+'><td class="cardinfoname">' + CommonName_Question + '</td><td class="answercardinfo">' + CommonName_Answer + '</td></tr>');
            }
            if (ScientificName_Answer != 'NoData' && typeof ScientificName_Answer !== 'undefined' && ScientificName_Answer != '') {


                table.push('<tr '+vapp1+ScientificName_Question+vapp3+ScientificName_Answer+vapp2+'><td class="cardinfoname">' + ScientificName_Question + '</td><td class="answercardinfo">' + ScientificName_Answer + '</td></tr>');
            }
            if (Type_Answer != 'NoData' && typeof Type_Answer !== 'undefined' && Type_Answer != '' && Type_Answer.toString() != Class_AnswerAR.toString()) {
                table.push('<tr '+vapp1+Type_Question+vapp3+Type_Answer+vapp2+'><td class="cardinfoname">' + Type_Question + '</td><td class="answercardinfo">' + Type_Answer + '</td></tr>');
            }
            if (Class_AnswerEN != 'None' && Class_AnswerAR != 'NoData' && typeof Class_AnswerAR !== 'undefined' && Class_AnswerAR != '') {
                table.push('<tr '+vapp1+Class_Question+vapp3+Class_AnswerAR+vapp2+'><td class="cardinfoname">' + Class_Question + '</td><td class="answercardinfo">' + Class_AnswerAR + '</td></tr>');
            }
            if (Order_Answer != 'NoData' && typeof Order_Answer !== 'undefined' && Order_Answer != '') {
                table.push('<tr '+vapp1+Order_Question+vapp3+Order_Answer+vapp2+'><td class="cardinfoname">' + Order_Question + '</td><td class="answercardinfo">' + Order_Answer + '</td></tr>');
            }
            if (Subfamily_Answer != 'NoData' && typeof Subfamily_Answer !== 'undefined' && Subfamily_Answer != '') {
                table.push('<tr '+vapp1+Subfamily_Question+vapp3+Subfamily_Answer+vapp2+'><td class="cardinfoname">' + Subfamily_Question + '</td><td class="answercardinfo">' + Subfamily_Answer + '</td></tr>');
            }
            if (EcologicalHabitat_Answer != 'NoData' && typeof EcologicalHabitat_Answer !== 'undefined' && EcologicalHabitat_Answer != '') {
                table.push('<tr '+vapp1+EcologicalHabitat_Question+vapp3+EcologicalHabitat_Answer+vapp2+'><td class="cardinfoname">' + EcologicalHabitat_Question + '</td><td class="answercardinfo">' + EcologicalHabitat_Answer + '</td></tr>')
            }
            if (Diet_Answer != 'NoData' && typeof Diet_Answer !== 'undefined' && Diet_Answer != '') {
                table.push('<tr '+vapp1+Diet_Question+vapp3+Diet_Answer+vapp2+'><td class="cardinfoname">' + Diet_Question + '</td><td class="answercardinfo">' + Diet_Answer + '</td></tr>');
            }
            if (FeedOn_Answer != 'NoData' && typeof FeedOn_Answer !== 'undefined' && FeedOn_Answer != '') {
                table.push('<tr '+vapp1+FeedOn_Question+vapp3+FeedOn_Answer+vapp2+'><td class="cardinfoname">' + FeedOn_Question + '</td><td class="answercardinfo">' + FeedOn_Answer + '</td></tr>');
            }
            if (Enemy_Answer != 'NoData' && typeof Enemy_Answer !== 'undefined' && Enemy_Answer != '') {
                table.push('<tr '+vapp1+Enemy_Question+vapp3+Enemy_Answer+vapp2+'><td class="cardinfoname">' + Enemy_Question + '</td><td class="answercardinfo">' + Enemy_Answer + '</td></tr>');
            }
            if (Age_Answer != 'NoData' && typeof Age_Answer !== 'undefined' && Age_Answer != '') {
                table.push('<tr '+vapp1+Age_Question+vapp3+Age_Answer+vapp2+'><td class="cardinfoname">' + Age_Question + '</td><td class="answercardinfo">' + Age_Answer + '</td></tr>');
            }
            if (Size_Answer != 'NoData' && typeof Size_Answer !== 'undefined' && Size_Answer != '') {
                table.push('<tr '+vapp1+Size_Question+vapp3+Size_Answer+vapp2+'><td class="cardinfoname">' + Size_Question + '</td><td class="answercardinfo">' + Size_Answer + '</td></tr>');
            }
            if (Weight_Answer != 'NoData' && typeof Weight_Answer !== 'undefined' && Weight_Answer != '') {
                table.push('<tr '+vapp1+Weight_Question+vapp3+Weight_Answer+vapp2+'><td class="cardinfoname">' + Weight_Question + '</td><td class="answercardinfo">' + Weight_Answer + '</td></tr>');
            }
            if (Speed_Answer != 'NoData' && typeof Speed_Answer !== 'undefined' && Speed_Answer != '') {
                table.push('<tr '+vapp1+Speed_Question+vapp3+Speed_Answer+vapp2+'><td class="cardinfoname">' + Speed_Question + '</td><td class="answercardinfo">' + Speed_Answer + '</td></tr>');
            }
            if (DurationPregnancy_Answer != 'NoData' && typeof DurationPregnancy_Answer !== 'undefined' && DurationPregnancy_Answer != '') {
                table.push('<tr '+vapp1+DurationPregnancy_Question+vapp3+DurationPregnancy_Answer+vapp2+'><td class="cardinfoname">' + DurationPregnancy_Question + '</td><td class="answercardinfo">' + DurationPregnancy_Answer + '</td></tr>');
            }
            if (NumBirths_Answer != 'NoData' && typeof NumBirths_Answer !== 'undefined' && NumBirths_Answer != '') {
                table.push('<tr '+vapp1+NumBirths_Question+vapp3+NumBirths_Answer+vapp2+'><td class="cardinfoname">' + NumBirths_Question + '</td><td class="answercardinfo">' + NumBirths_Answer + '</td></tr>');
            }
            if (Color_Answer != 'NoData' && typeof Color_Answer !== 'undefined' && Color_Answer != '') {
                table.push('<tr '+vapp1+Color_Question+vapp3+Color_Answer+vapp2+'><td class="cardinfoname">' + Color_Question + '</td><td class="answercardinfo">' + Color_Answer + '</td></tr>');
            }
            if (info1_Answer != 'NoData' && typeof info1_Answer !== 'undefined' && info1_Answer != '') {
                table.push('<tr '+vapp1+info1_Question+vapp3+info1_Answer+vapp2+'><td class="cardinfoname">' + info1_Question + '</td><td class="answercardinfo">' + info1_Answer + '</td></tr>');
            }
            if (info2_Answer != 'NoData' && typeof info2_Answer !== 'undefined' && info2_Answer != '') {
                table.push('<tr '+vapp1+info2_Question+vapp3+info2_Answer+vapp2+'><td class="cardinfoname">' + info2_Question + '</td><td class="answercardinfo">' + info2_Answer + '</td></tr>');
            }
            if (info3_Answer != 'NoData' && typeof info3_Answer !== 'undefined' && info3_Answer != '') {
                table.push('<tr '+vapp1+info3_Question+vapp3+info3_Answer+vapp2+'><td class="cardinfoname">' + info3_Question + '</td><td class="answercardinfo">' + info3_Answer + '</td></tr>');
            }
            if (info4_Answer != 'NoData' && typeof info4_Answer !== 'undefined' && info4_Answer != '') {
                table.push('<tr '+vapp1+info4_Question+vapp3+info4_Answer+vapp2+'><td class="cardinfoname">' + info4_Question + '</td><td class="answercardinfo">' + info4_Answer + '</td></tr>');
            }
            if (PopulationTrend_Num >= 0 && PopulationTrend_Num <= 2) {
                table.push('<tr '+vapp1+PopulationTrend_Question+vapp3+PopulationTrend_Answer+vapp2+'><td class="cardinfoname">' + PopulationTrend_Question + '</td><td class="answercardinfo">' + PopulationTrend_Answer + PstatusSymbol + '</td></tr>');
            }
            if (MultipleImages_Answer != 'NoData' && typeof MultipleImages_Answer !== 'undefined' && MultipleImages_Answer != '') {
                if (IncludeImg == 4) {
                    table.push('<tr><td class="cardinfoname">الصور</td><td class="answercardinfo">');
                    $(MultipleImages_Answer.toString()).each(function() {
                        var nomli = -1;
                        $(this).find('li').each(function() {
                            nomli += 1;
                            var getimgs = $(this).html();
                            getimgs = getimgs.replace(/\/s200\/|\/s320\/|\/h120\/|\/s120\/|\/s1600\//gi, "/s1600/");
                            getimgs = getimgs.replace(/=s200|=s320|=s160|=h160|=h120|=s120|=s1600/gi, "=s1600");
                            if (nomli == 0) {
                                table.push('<a href="' + getimgs + '" class="spotlight"><i class="fa fa-picture-o" aria-hidden="true"></i></a>');
                            } else {
                                table.push('<a href="' + getimgs + '" class="spotlight"></a>');
                            }
                        });
                    });
                    table.push('</td></tr>');
                }
            }

            table.push('</tbody></table>');


          
            table.push('</div>');
          

          
   //       table.push('<div id="text-center p-0 m-0 overflow-visible adsCenterCard"><div id="adSlotCenter1" class="mb-0 m-auto" style="display: none;"></div> <div id="adSlotCenter2" class="mb-0 m-auto" style="display: none;"></div> <div id="adSlotCenter3" class="mb-0 m-auto" style="display: none;"></div></div>');
          
          
          
          
if (RedList_Num >= 1 && RedList_Num <= 9) {
var disnone; 
	if (IncludeIUCN == 1) {
		disnone = '';
	if (RedList_Num == 8 || RedList_Num == 9) {
	disnone = 'd-none';
}
			


                  
SetIUCNHTML(table,disnone,RedList_Num);                  
                  

                }
            }    
if (ImgSizeComparison_Answer != 'NoData' && typeof ImgSizeComparison_Answer !== 'undefined' && ImgSizeComparison_Answer != '' || ImgMaps_Answer != 'NoData' && typeof ImgMaps_Answer !== 'undefined' && ImgMaps_Answer != '') {
 table.push('<div class="row row-cols-1 row-cols-md-3 g-0 mt-2">');
}
if (ImgSizeComparison_Answer != 'NoData' && typeof ImgSizeComparison_Answer !== 'undefined' && ImgSizeComparison_Answer != '') {
var ImgSizeComparison = ImgSizeComparison_Answer.toString().replace(/\/s200\/|\/s320\/|\/s160\/|\/h160\/|\/h120\/|\/s120\/|\/s1600\//gi, "/s162/");
ImgSizeComparison = ImgSizeComparison.replace(/=s200|=s320|=s160|=h160|=h120|=s120/gi, "=s162");
  
  table.push('<div class="col m-auto mb-2"  style="width:13rem"><div class="card"><img src="'+ImgSizeComparison+'" class="card-img-top" alt="'+ImgSizeComparison_Question+'"><div class="card-body p-1 text-center border-top"><p class="card-text">'+ImgSizeComparison_Question+'</p></div></div></div>');
  }
if (ImgMaps_Answer != 'NoData' && typeof ImgMaps_Answer !== 'undefined' && ImgMaps_Answer != '') {
var ImgMapsAnswer = ImgMaps_Answer.toString().replace(/\/s200\/|\/s320\/|\/s160\/|\/h160\/|\/h120\/|\/s120\/|\/s1600\//gi, "/s162/");
ImgMapsAnswer = ImgMapsAnswer.replace(/=s200|=s320|=s160|=h160|=h120|=s120/gi, "=s162");
  table.push('<div class="col m-auto mb-2"  style="width:13rem"><div class="card"><img src="'+ImgMapsAnswer+'" class="card-img-top" alt="'+ImgSizeComparison_Question+'"><div class="card-body p-1 text-center"><p class="card-text">'+ImgMaps_Question+'</p></div></div></div>');
            
}  
if (ImgSizeComparison_Answer != 'NoData' && typeof ImgSizeComparison_Answer !== 'undefined' && ImgSizeComparison_Answer != '' || ImgMaps_Answer != 'NoData' && typeof ImgMaps_Answer !== 'undefined' && ImgMaps_Answer != '') {
 table.push('</div>');
}
          
            if (DidYouKnow_Answer != 'NoData' && typeof DidYouKnow_Answer !== 'undefined' && DidYouKnow_Answer != '') {
                if (IncludeDidUknow == 1) {
var sharelink = $("#linkShareforcopy").val();
conDidYouKnow(table,DidYouKnow_Answer,sharelink);
                }
            }
            if (MultipleImages_Answer != 'NoData' && typeof MultipleImages_Answer !== 'undefined' && MultipleImages_Answer != '') {
                if (IncludeImg == 1) {
                    table.push('<hr/>');
                    table.push('<div id="carouselImg" class="carousel slide carousel-fade" data-bs-ride="carousel">');
                    $(MultipleImages_Answer.toString()).each(function() {
                        table.push('<ol class="carousel-indicators">');
                        var nom = -1;
                        $(this).find('li').each(function() {
                            nom += 1;
                            if (nom == 0) {
                                table.push('<li data-bs-target="#carouselImg" data-bs-slide-to="' + nom + '" class="active"></li>');
                            } else {
                                table.push('<li data-bs-target="#carouselImg" data-bs-slide-to="' + nom + '"></li>');
                            }
                        });
                        table.push('</ol>');
                        table.push('<div class="carousel-inner">');
                        var noms = -1
                        $(this).find('li').each(function() {
                            var getimgs = $(this).html();
                            noms += 1;
                            getimgs = getimgs.replace(/\/s200\/|\/s320\/|\/h120\/|\/s120\/|\/s400\/|\/s1600\//gi, "/s120/");
                            getimgs = getimgs.replace(/=s200|=s320|=h120|=s120|=s400|=s1600/gi, "=s120");
                            var getimgs1600 = getimgs.replace("/s120/", "/s1600/");
                            getimgs1600 = getimgs1600.replace("=s120", "=s1600");
                            var getimgs600 = getimgs.replace("/s120/", "/h300-w568-c/");
                            getimgs600 = getimgs600.replace("=s120", "=h300-w568-c");
                            if (noms == 0) {
                                table.push('<div class="carousel-item active">');
                                table.push('<a href="' + getimgs1600 + '" class="spotlight"><img src="' + getimgs600 + '" class="d-block w-100 rounded" alt="' + CommonName_Answer + ' - جيو عربي"></a>');
                                table.push('</div>');
                            } else {
                                table.push('<div class="carousel-item">');
                                table.push('<a href="' + getimgs1600 + '" class="spotlight"><img src="' + getimgs600 + '" class="d-block w-100 rounded" alt="' + CommonName_Answer + ' - جيو عربي"></a>');
                                table.push('</div>');
                            }
                        });
                        table.push('<a class="carousel-control-prev" href="#carouselImg" role="button" data-bs-slide="prev"> <span class="carousel-control-prev-icon" aria-hidden="true"></span> <span class="visually-hidden">السابق</span> </a> <a class="carousel-control-next" href="#carouselImg" role="button" data-bs-slide="next"> <span class="carousel-control-next-icon" aria-hidden="true"></span> <span class="visually-hidden">التالي</span></a>');
                        table.push('</div>');
                    });
                    table.push('</div>');
                } else if (IncludeImg == 2) {
                    var noms = -1
                    table.push('<hr class="hrTOPcarouselImg"/>');
                    table.push("<div id='carouselImg'><div class='carouselImgspinners p-4 text-center'><strong class='mt-2'>جارٍ تحميل الصور...</strong><br/><div class='mt-2 spinner-border text-danger'role='status'></div></div><div class='owl-carousel owl-theme'>");
                    $(MultipleImages_Answer.toString()).each(function() {
                        $(this).find('li').each(function() {
                           noms +=1;
                            var getimgs = $(this).html();
                            getimgs = getimgs.replace(/\/s200\/|\/s320\/|\/h120\/|\/s120\/|\/s400\/|\/s1600\//gi, "/s120/");
                            getimgs = getimgs.replace(/=s200|=s320|=h120|=s120|=s400|=s1600/gi, "=s120");
                            var getimgs1600 = getimgs.replace("/s120/", "/s1600/");
                            getimgs1600 = getimgs1600.replace("=s120", "=s1600");
                            var getimgs600 = getimgs.replace("/s120/", "/h300-w568-c/");
                            getimgs600 = getimgs600.replace("=s120", "=h300-w568-c");
                          if(noms == 0){
                            table.push('<div class="item active" style="width:100%">');
                            table.push('<a href="' + getimgs1600 + '" class="spotlight"><img src="' + getimgs600 + '" class="d-block w-100 rounded" alt="' + CommonName_Answer + ' - جيو عربي"></a>');
                            table.push('</div>');
                          }else{
                            table.push('<div class="item" style="width:100%">');
                            table.push('<a href="' + getimgs1600 + '" class="spotlight"><img src="' + getimgs600 + '" class="d-block w-100 rounded" alt="' + CommonName_Answer + ' - جيو عربي"></a>');
                            table.push('</div>');
                          }
                        });
                    });
                    table.push('</div></div>');
                } else if (IncludeImg == 3) {
                    table.push('<hr/>');
                    table.push("<div id='carouselImg'><div class='carouselImgspinners p-4 text-center'><strong class='mt-2'>جارٍ تحميل الصور...</strong><br/><div class='mt-2 spinner-border text-danger'role='status'></div></div><div class='owl-carousel owl-theme'>");
                    $(MultipleImages_Answer.toString()).each(function() {
                        $(this).find('li').each(function() {
                            var getimgs = $(this).html();
                            getimgs = getimgs.replace(/\/s200\/|\/s320\/|\/h120\/|\/s120\/|\/s400\/|\/s1600\//gi, "/s120/");
                            getimgs = getimgs.replace(/=s200|=s320|=h120|=s120|=s400|=s1600/gi, "=s120");
                            var getimgs1600 = getimgs.replace("/s120/", "/s1600/");
                            getimgs1600 = getimgs1600.replace("=s120", "=s1600");
                            var getimgs600 = getimgs.replace("/s120/", "/h93-w176-c/");
                            getimgs600 = getimgs600.replace("=s120", "=h93-w176-c");
                            table.push('<div class="item" style="width:100%">');
                            table.push('<a href="' + getimgs1600 + '" class="spotlight"><img src="' + getimgs600 + '" class="d-block w-100 rounded" alt="' + CommonName_Answer + ' - جيو عربي"></a>');
                            table.push('</div>');
                        });
                    });
                    table.push('</div></div>');
                }else if(IncludeImg == 5){
                    table.push('<hr class="hrTOPcarouselImg"/>');
function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}
var nomtest = getRandomInt(999999);
                    table.push("<div id='carouselImg'><div class='carouselImgspinners p-4 text-center'><strong class='mt-2'>جارٍ تحميل الصور...</strong><br/><div class='progress mt-4 mb-2'><div id='progressImg' class='progress-bar progress-bar-striped progress-bar-animated bg-danger' role='progressbar' style='width:10%;' aria-valuenow='10' aria-valuemin='10' aria-valuemax='100'>0%</div></div></div><div class='row row-cols-2 row-cols-md-4 g-2 card-gallery mx-1 my-2 d-none' style='direction:ltr' id='iimmgg"+nomtest+"' itemscope itemtype='http://schema.org/ImageGallery'>");
                    $(MultipleImages_Answer.toString()).each(function() {
                      var imglength = $(this).find('li').length;
                      var nom = 0;
                        $(this).find('li').each(function() {
                          
                            var getimgs = $(this).html();
                            getimgs = getimgs.replace(/\/s200\/|\/s320\/|\/h120\/|\/s120\/|\/s400\/|\/s1600\//gi, "/s120/");
                            getimgs = getimgs.replace(/=s200|=s320|=h120|=s120|=s400|=s1600/gi, "=s120");
                            var getimgs1600 = getimgs.replace("/s120/", "/s1600/");
                            getimgs1600 = getimgs1600.replace("=s120", "=s1600");
                            var getimgs162 = getimgs.replace("/s120/", "/h85-w162-c/");
                            getimgs162 = getimgs162.replace("=s120", "=h85-w162-c");
                          
                          



var img = new Image();

img.onload = function() {
    nom++;
    var height = img.height;
    var width = img.width;
    $("#iimmgg"+nomtest).append('<a class="col" href="' + getimgs1600 + '" data-size="' + width + 'x' + height + '" data-med="' + getimgs1600 + '" data-med-size="' + width + 'x' + height + '" data-author="Geo Arabic"><img src="' + getimgs162 + '" alt="' + CommonName_Answer + '" class="card-img"/></a>');



    var pPos = imglength;
    var pEarned = nom;
    var perc = "";
    if (isNaN(pPos) || isNaN(pEarned)) {
        perc = " ";
    } else {
        perc = ((pEarned / pPos) * 100).toFixed(3);
        perc = Math.trunc(perc)
    }

    $('#progressImg').css('width', perc + '%');
    $('#progressImg').attr('aria-valuenow', perc);
    $('#progressImg').html(perc + '%');



    if (perc == 100) {
        $(".carouselImgspinners").css("display", "none");
        $("#iimmgg"+nomtest).removeClass("d-none");
        cardimgG();
    }




}
img.src = getimgs1600;                          




                          
                          
                          
                          
                        });
                    });
                    table.push('</div></div>');
                }
            }
        }
        var getsetIdCard = getIdCard;
        var CardName = CommonName_Answer;
        var CardTimestamp = Timestamp;
        var CardUserName = UserName;
        var CardUserImg = UserAccountImg;
        CardUserImg = CardUserImg.toString().replace("=s96-c", "=s50-c");
              if (SourceInfo_Answer_Title != 'NoData' && typeof SourceInfo_Answer_Title !== 'undefined' && SourceInfo_Answer_Title != '') {
          CardName = "معلومات حول " + CommonName_Answer + " - " + ScientificName_Answer;
        }else{
          CardName = "معلومات حول " + CommonName_Answer;
        }


        var alertcard = "<div class='alert alert-warning' role='alert'><h4 class='alert-heading'>لم يتم التحقق</h4><p>لم يتم التحقق من صحة المعلومات الواردة في هذه البطاقة.</p></div>";
        var removedcard = "";
        if (UserStatus == 0) {
            CardUserImg = "https://lh3.googleusercontent.com/-JPG5eyRPzoo/X-tSuV6Ef5I/AAAAAAAAGAo/xuCf9t2NqcskDbeB3vFVX7e9OaE5FPLBgCLcBGAsYHQ/"+SizeImgUserInfo+"/default-user-image.png";
            CardUserName = "مجهول";
        } else if (UserStatus == 1) {
            CardUserName = CardUserName;
            CardUserImg = UserAccountImg;
        } else if (UserStatus == 2) {
            CardUserName = "<i class='fa fa-check-circle text-primary' aria-hidden='true'></i> " + CardUserName;
            CardUserImg = UserAccountImg;
        } else if (UserStatus == 3) {
            CardUserName = "<i class='fa fa-check-circle text-primary' aria-hidden='true'></i> Geo Arabic";
            CardUserImg = "https://lh3.googleusercontent.com/-nngQTpjLnLk/WwI4sFyHQfI/AAAAAAAACdM/CFZJhtiKCMgR6syKazo7tsM4_xVtpML7gCEwYBhgL/"+SizeImgUserInfo+"/GeoArabic.png";
        } else {
            CardUserImg = "https://lh3.googleusercontent.com/-JPG5eyRPzoo/X-tSuV6Ef5I/AAAAAAAAGAo/xuCf9t2NqcskDbeB3vFVX7e9OaE5FPLBgCLcBGAsYHQ/"+SizeImgUserInfo+"/default-user-image.png";
            CardUserName = "مجهول";
        }
        if (Published == 3) {
            alertcard = "<div class='alert alert-success' role='alert'><h5 class='alert-heading'>تم التحقق</h5><p class='alertp'>قام أحد مشرفي جيو عربي بالتحقق من صحة المعلومات الواردة في هذه البطاقة.</p></div>";
        } else if (Published == 2) {
            alertcard = "<div class='alert alert-primary' role='alert'><h5 class='alert-heading'>تم التحقق</h5><p class='alertp'>تم التحقق من صحة المعلومات الواردة في هذه البطاقة بواسطة الناشر.</p></div>";
        } else if (Published == 1) {
            alertcard = "<div class='alert alert-warning' role='alert'><h5 class='alert-heading'>لم يتم التحقق</h5><p class='alertp'>لم يتم التحقق من صحة المعلومات الواردة في هذه البطاقة.</p></div>";
        } else if (Published == 0) {
            alertcard = "<div class='alert alert-danger' role='alert'><h5 class='alert-heading'>تم إزالة هذه البطاقة</h5><p class='alertp'>تم إزالة هذه البطاقة لعدم صحة البيانات الواردة بها او لعدم كفاية المعلومات المطلوبة.</p></div>";
            removedcard = " d-none";
            CardUserImg = "https://lh3.googleusercontent.com/-JPG5eyRPzoo/X-tSuV6Ef5I/AAAAAAAAGAo/xuCf9t2NqcskDbeB3vFVX7e9OaE5FPLBgCLcBGAsYHQ/"+SizeImgUserInfo+"/default-user-image.png";
            CardUserName = "مجهول";
        } else {
            alertcard = "<div class='alert alert-warning' role='alert'><h5 class='alert-heading'>لم يتم التحقق</h5><p class='alertp'>لم يتم التحقق من صحة المعلومات الواردة في هذه البطاقة.</p></div>";
        }
        if (Name_publishing == "no") {
            CardUserImg = "https://lh3.googleusercontent.com/-JPG5eyRPzoo/X-tSuV6Ef5I/AAAAAAAAGAo/xuCf9t2NqcskDbeB3vFVX7e9OaE5FPLBgCLcBGAsYHQ/"+SizeImgUserInfo+"/default-user-image.png";
            CardUserName = "مجهول";
        }
      
      
        

          
        

$("#ShareACard").html("<button type='button' class= 'btn btn-sm btn-danger' data-bs-toggle='modal' data-bs-target='#modalsharecard'><i title='مشاركة' class='fa fa-share-alt' aria-hidden='true'></i> مشاركة</button>");

$("#InfoaboutCard").html("<button type='button' class='btn btn-sm btn-secondary' data-bs-toggle='collapse' onclick='Infoaboutpublisher()' data-bs-target='#Infoaboutpublisher' role='button' aria-expanded='false' aria-controls='Infoaboutpublisher'><i title='حول هذه البطاقة' class='fa fa-info-circle' aria-hidden='true'></i></button>");

$("#InfoPostViewsCard").html("<a name='"+PostIdInSite_Answer+"'></a> <i class='fa fa-eye'></i> <span id='postviews'></span>");

function postviews(){
var elem = $("#postviews");
var blogStats = new Firebase("https://geoarabic1.firebaseio.com/pages/id/"+PostIdInSite_Answer);
blogStats.once("value", function(snapshot) {
var data = snapshot.val();
var isnew = false;
if(data == null) {
data= {};
data.value = 0;
data.url = PostUrlInSite_Answer;
data.id = PostIdInSite_Answer;
data.iddrive = IdCard.toString();
data.img = Img_Answer.replace("=w136-h136-p","=s1600");
data.title = CommonName_Answer;
isnew = true;
}
elem.text(data.value);
data.value++;
if(isnew){
blogStats.set(data);
}else{
blogStats.child("value").set(data.value);
}
});
}


$("#ShareACard").css("display","block");
$("#InfoaboutCard").css("display","block");
      
      
      
        table.push("<div id='Infoaboutpublisher' class='my-2 mt-4 collapse'>");
        table.push("<hr/>" + alertcard + "<hr style='background-color:#999999'/><ul class='list-group list-group-flush text-center'><li class='list-group-item'><img src='" + CardUserImg + "' alt='Avatar' class='avatar'><br>" + CardUserName + "</li><li class='list-group-item'>" + CardTimestamp + "</li><li class='list-group-item" + removedcard + "'><a class='sharer sharer-fb' href='https://www.facebook.com/dialog/feed?app_id=453684218377321&display=popup&link=https://card.geoarabic.com/p/card.html?id=" + getsetIdCard + "&redirect_uri=https://card.geoarabic.com/p/card.html?id=" + getsetIdCard + "&quote="+CardName+"&hashtag=#جيو_عربي' onclick='window.open(this.href,&quot;popupwindow&quot;,&quot;status=0,height=500,width=500,resizable=0,top=50,left=100&quot;);return false;' rel='nofollow' target='_blank' title='Facebook'><i class='fa fa-facebook-square' aria-hidden='true'></i></a><a class='sharer sharer-tw' href='https://twitter.com/intent/tweet?hashtags=جيو_عربي&url=https://card.geoarabic.com/p/card.html?id=" + getsetIdCard + "&text=" + CardName + "&via=GeoArabs&related=GeoArabs' onclick='window.open(this.href,&quot;popupwindow&quot;,&quot;status=0,height=500,width=500,resizable=0,top=50,left=100&quot;);return false;' rel='nofollow' target='_blank' title='Twitter'><i class='fa fa-twitter' aria-hidden='true'></i></a> <a class='sharer sharer-wa' data-action='share/whatsapp/share' href='https://api.whatsapp.com/send?text=" + CardName + "   https://card.geoarabic.com/p/card.html?id=" + getsetIdCard + "' onclick='window.open(this.href,&quot;popupwindow&quot;,&quot;status=0,height=500,width=500,resizable=0,top=50,left=100&quot;);return false;' rel='nofollow' target='_blank' title='WhatsApp'><i class='fa fa-whatsapp' aria-hidden='true'></i></a><div class='sharer sharer-copy copy' data-clipboard-text='https://card.geoarabic.com/p/card.html?id=" + PostUrlInSite_Answer + "' rel='nofollow' title='copy link'><i class='fa fa-clone' aria-hidden='true'></i></div></li></ul>");
        $("#linkcardb").val(getsetIdCard);
        if (SourceInfo_Answer_link != 'NoData' && typeof SourceInfo_Answer_link !== 'undefined' && SourceInfo_Answer_link != '') {
            table.push("<hr/><p class='py-2 fspcard'>المزيد من المعلومات حول " + CommonName_Answer + ": <a href='" + SourceInfo_Answer_link + "' target='_blank'>" + SourceInfo_Answer_Title + " <i class='fa fa-external-link fa-flip-horizontal' style='font-size:0.8rem' aria-hidden='true'></i></a></p>");
        }
        table.push("<hr /><p class='fspcard'><strong>حول:</strong> تم إنشاء هذه البطاقة عبر <a target='_blank' href='https://card.geoarabic.com/p/create-card.html'> أداة نشر البطاقات</a>في جيو عربي، يمكنك تقديم طلب لإنشاء ونشر بطاقات جديدة.</p>");
        table.push("</div>");
        document.getElementById('cardinfo').innerHTML = table.join('');
      $(".spinnercard").css("display","none");
$("#cardinfo").css("display","block");

        setiframe();
        if (MultipleImages_Answer != 'NoData' && typeof MultipleImages_Answer !== 'undefined' && MultipleImages_Answer != '') {
            if (IncludeImg == 1) {
                var carouselImg = document.querySelector('#carouselImg')
                var carousel = new bootstrap.Carousel(carouselImg, {
                    interval: 5000,
                    slide: "carousel",
                    wrap: true
                });
            } else if (IncludeImg == 2) {
                var img = $('#carouselImg img'),
                    totalImg = img.length;
                $('img').on('load', function() {
                    totalImg--;
                    if (totalImg == 0) {
                        $(".carouselImgspinners").css("display", "none");
                        $('#carouselImg .owl-carousel').owlCarousel({
                            responsiveClass: true,
                            autoHeight: true,
                            rtl: true,
                            items: 1,
                            autoplay: true,
                            autoplayTimeout: 3000,
                            autoplayHoverPause: true,
                            stagePadding: 0,
                            loop: false,
                            margin: 20,
                            nav: true,
                            animateOut: 'fadeOut',
                            animateIn: 'flipInX',
                            lazyLoad: true
                        });
                        $('#carouselImg .owl-next').html('<span class="fa-stack fs-4"><i class="fa fa-circle fa-stack-2x"></i><i class="fa fa-angle-left fa-stack-1x fs-2"></i></span>');
                        $('#carouselImg .owl-prev').html('<span class="fa-stack fs-4"><i class="fa fa-circle fa-stack-2x"></i><i class="fa fa-angle-right fa-stack-1x fs-2"></i></span>');
                    }
                }).on('error', function() {
                    $(".carouselImgspinners").html("حدث خطأ في تحميل الصور");
                });
            } else if (IncludeImg == 3) {
                var img = $('#carouselImg img'),
                    totalImg = img.length;
                $('img').on('load', function() {
                    totalImg--;
                    if (totalImg == 0) {
                        $(".carouselImgspinners").css("display", "none");
                        $('#carouselImg .owl-carousel').owlCarousel({
                            autoHeight: true,
                            rtl: true,
                            items: 3,
                            autoplay: true,
                            autoplayTimeout: 3000,
                            autoplayHoverPause: true,
                            stagePadding: 0,
                            loop: false,
                            margin: 20,
                            nav: false,
                            lazyLoad: true,
                            smartSpeed: 4000,
                            dotsSpeed: 250,
                            dragEndSpeed: 250
                        })
                        $('#carouselImg .owl-dots').css('margin-top', '10px');
                    }
                }).on('error', function() {
                    $(".carouselImgspinners").html("حدث خطأ في تحميل الصور");
                });
            }
        }
        if (DidYouKnow_Answer != 'NoData' && typeof DidYouKnow_Answer !== 'undefined' && DidYouKnow_Answer != '') {
            if (IncludeDidUknow == 1) {
                $('#didyouknow .owl-carousel').owlCarousel({
                    responsiveClass: true,
                    autoHeight: true,
                    rtl: true,
                    items: 1,
                    autoplay: true,
                    autoplayTimeout: 5000,
                    autoplayHoverPause: true,
                    stagePadding: 30,
                    loop: true,
                    margin: 50,
                    nav: true,
                })
            }
        }



postviews();
dataDescription();
    });
//end
  });

  });


});
}
