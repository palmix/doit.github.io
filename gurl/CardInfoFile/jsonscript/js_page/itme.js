var textjson = textjson;
var  obj = JSON.parse(textjson);
obj = obj.info;
    var getIdCard = obj.ResponseNumber.Answer;
    var IdCard = getIdCard.replace('ID1000000', '');
    var IdCards = parseInt(IdCard)
    var IdCard = IdCards + 3;
    if (getBackgroundCard != "") {
        $("body.bg-light").attr("style", "background-color:#" + getBackgroundCard + "!important")
    }
    
var codesheet = 1;
    
    $.getJSON(getusercode, {
        key: keyGeoArabic,
        range: "A" + IdCard + ":DO" + IdCard,
        majorDimension: "COLUMNS"
    }).catch(function(error) {
        document.getElementById('cardinfo').innerHTML = '<div class="alert alert-warning" role="alert"> حدث خطأ في جلب البطاقة </div>';
        codesheet = 0;
    }).done(function(recosts) {
    




    if(codesheet==1){
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


    }else{
var  obj = JSON.parse(textjson);
obj = obj.info;
var Timestamp = obj.Timestamp.Answer;//تاريخ النشر
var Published = "3";//حالة النشر
var ResponseNumber = obj.ResponseNumber.Answer;//ID
var UserStatus = obj.UserStatus.Answer;//حالة الحساب
var CommonName_Question = obj.CommonName.Question;//الإسم الشائع
var CommonName_Answer = obj.CommonName.Answer;//الإسم الشائع هو
var CommonName_Answer_En = obj.CommonName.Answer_En;//الإسم الشائع بالانجليزية هو
var ScientificName_Question = obj.ScientificName.Question;//الاسم العلمي
var ScientificName_Answer = obj.ScientificName.Answer;//الاسم العلمي هو
var Type_Question = obj.Type.Question;//النوع 
var Type_Answer = obj.Type.Answer;//النوع هو 
var Class_Question = obj.Class.Question;//الطائفة 
var Class_AnswerAR = obj.Class.AnswerAR;//إسم الطائفة 
var Class_AnswerEN = obj.Class.AnswerEN;//الإسم العلمي للطائفة 
var Order_Question = obj.Order.Question;//الرتبة
var Order_Answer = obj.Order.Answer;//الرتبة هي
var Subfamily_Question = obj.Subfamily.Question;//الفصيلة
var Subfamily_Answer = obj.Subfamily.Answer;//الفصيلة هي
var Diet_Question = obj.Diet.Question;//النظام الغذائي
var Diet_Answer = obj.Diet.Answer;//النظام الغذائي هو
var Age_Question = obj.Age.Question;//متوسط العمر
var Age_Answer = obj.Age.Answer;//متوسط العمر هو
var Size_Question = obj.Size.Question;//الحجم
var Size_Answer = obj.Size.Answer;//الحجم هو
var Weight_Question = obj.Weight.Question;//الوزن
var Weight_Answer = obj.Weight.Answer;//الوزن هو
var PopulationTrend_Question = obj.PopulationTrend.Question;//إتجاه السكان الحالي
var PopulationTrend_Answer = obj.PopulationTrend.Answer;//إتجاه السكان الحالي هو
var PopulationTrend_Code = obj.PopulationTrend.Code;//رمز إتجاه السكان الحالي
var PopulationTrend_Num = obj.PopulationTrend.Num;//رقم إتجاه السكان الحالي
var RedList_Question = obj.RedList.Question;//حالة القائمة الحمراء (IUCN)
var RedList_Answer = obj.RedList.Answer;//حالة القائمة الحمراء (IUCN) هي
var RedList_Num = obj.RedList.Num;//رقم حالة القائمة الحمراء (IUCN)
var Speed_Question = obj.Speed.Question;//السرعة
var Speed_Answer = obj.Speed.Answer;//السرعة هي
var DurationPregnancy_Question = obj.DurationPregnancy.Question;//مدة الحمل
var DurationPregnancy_Answer = obj.DurationPregnancy.Answer;//مدة الحمل هي
var NumBirths_Question = obj.NumBirths.Question;//عدد الصغار/البيض
var NumBirths_Answer = obj.NumBirths.Answer;//عدد الصغار/البيض هو
var EcologicalHabitat_Question = obj.EcologicalHabitat.Question;//الموطن البيئي
var EcologicalHabitat_Answer = obj.EcologicalHabitat.Answer;//الموطن البيئي هو
var Color_Question = obj.Color.Question;//الألوان
var Color_Answer = obj.Color.Answer;//الألوان هي
var Enemy_Question = obj.Enemy.Question;//الأعداء
var Enemy_Answer = obj.Enemy.Answer;//الأعداء هم
var FeedOn_Question = obj.FeedOn.Question;//الغذاء
var FeedOn_Answer = obj.FeedOn.Answer;//الغذاء هو
var Img_Question = obj.Img.Question;//صورة الحيوان
var Img_Answer = obj.Img.Answer;//عنوان صورة الحيوان
var ImgInDrive_Question = obj.ImgInDrive.Question;//الصورة في درايف
var ImgInDrive_Answer = obj.ImgInDrive.Answer;//رابط الصور في درايف
var ImgCover_Question = obj.ImgCover.Question;//صورة الغلاف
var ImgCover_Answer = obj.ImgCover.Answer;//عنوان صورة الغلاف
var MultipleImages_Question = obj.MultipleImages.Question;//صور متعددة
var MultipleImages_Answer = obj.MultipleImages.Answer;//روابط الصور المتعددة
var JsonFileIdInDrive_Question = obj.JsonFileIdInDrive.Question;//ملف Json
var JsonFileIdInDrive_Answer = obj.JsonFileIdInDrive.Answer;//معرف ملف Json
var ImgSizeComparison_Question = obj.ImgSizeComparison.Question;//صورة مقارنة الحجم
var ImgSizeComparison_Answer = obj.ImgSizeComparison.Answer;//عنوان صورة مقارنة الحجم
var info1_Question = obj.info1.Question;//المعلومات الإضافية 1
var info1_Answer = obj.info1.Answer;//المعلومات الإضافية 1 هي
var info2_Question = obj.info2.Question;//المعلومات الإضافية 2
var info2_Answer = obj.info2.Answer;//المعلومات الإضافية 2 هي
var info3_Question = obj.info3.Question;//المعلومات الإضافية 3
var info3_Answer = obj.info3.Answer;//المعلومات الإضافية 3 هي
var info4_Question = obj.info4.Question;//المعلومات الإضافية 4
var info4_Answer = obj.info4.Answer;//المعلومات الإضافية 4 هي
var DidYouKnow_Question = obj.DidYouKnow.Question;//هل تعلم
var DidYouKnow_Answer = obj.DidYouKnow.Answer;//معلومات هل تعلم
var UserAccountId = obj.UserAccountId;//معرف حساب المستخدم
var UserLoginWith = obj.UserLoginWith;//تسجيل دخول بإستخدام
var UserAccountImg = obj.UserAccountImg;//صورة الملف الشخصي للمستخدم
var UserName = obj.UserName;//إسم المستخدم
var UserEmail = obj.UserEmail;//البريد الإلكتروني
var Name_publishing = obj.Name_publishing.Answer;//اظهار معلومات الناشر
var PageTitle = obj.PageTitle;//عنوان الصفحة
var PageLink = obj.PageLink;//رابط الصفحة
var SourceInfo_Question = obj.SourceInfo.Question;//المراجع
var SourceInfo_Answer_Title = obj.SourceInfo.Answer_Title;//عنوان المراجع
var SourceInfo_Answer_link = obj.SourceInfo.Answer_link;//رابط المراجع
var dateID = obj.dateID;//معرف تاريخ المنشور
var PostUrlInSite_Question = obj.PostUrlInSite.Question;//رابط المنشور
var PostUrlInSite_Answer = obj.PostUrlInSite.Answer;//رابط المنشور هو
var PostIdInSite_Question = obj.PostIdInSite.Question;//معرف المنشور 
var PostIdInSite_Answer = obj.PostIdInSite.Answer;//معرف المنشور هو
var SummaryPage_Question = obj.SummaryPage.Question;//وصف الموضوع 
var SummaryPage_Answer = obj.SummaryPage.Answer;//وصف الموضوع هو
var ImgMaps_Question = obj.ImgMaps.Question;//صورة خريطة التواجد 
var ImgMaps_Answer = obj.ImgMaps.Answer;//الخارطة URL

    }







        






Published = parseInt(Published); //حالة النشر
        UserStatus = parseInt(UserStatus); //حالة الحساب
        PopulationTrend_Num = parseInt(PopulationTrend_Num); //رقم إتجاه السكان الحالي
        RedList_Num = parseInt(RedList_Num); //رقم حالة القائمة الحمراء (IUCN)
        Img_Answer = Img_Answer.toString().replace(/\/s200\/|\/s320\/|\/h120\/|\/s1600\//gi, "/w136-h136-p/");
        Img_Answer = Img_Answer.replace('=s120', '=w136-h136-p');
        ImgSizeComparison_Answer = ImgSizeComparison_Answer.toString().replace(/\/s200\/|\/s320\/|\/h120\/|\/s1600\//gi, "/s160/");
        ImgSizeComparison_Answer = ImgSizeComparison_Answer.replace('=s120', '=s160');


var Img_AnswerForMeta = Img_Answer.replace('/w136-h136-p/', '/s1600/');
Img_AnswerForMeta = Img_AnswerForMeta.replace('=s120', '=s1600');
if(ImgCover_Answer != "NoData" || ImgCover_Answer != ""){
ImgCover_Answer = ImgCover_Answer.toString().replace(/\/s200\/|\/s320\/|\/h120\/|\/s1600\//gi,'/s1600/');
ImgCover_Answer = ImgCover_Answer.replace('=s120', '=s1600');
Img_AnswerForMeta = ImgCover_Answer;
}else{
Img_AnswerForMeta = Img_AnswerForMeta;
}


      
      
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
var vapp1="",vapp2="",vapp3="",titleNameEng="";


var GeoArabicAndroid = /GeoArabicAndroid/.test(navigator.userAgent);


        if (CommonName_Answer_En != 'NoData') {
titleNameEng = CommonName_Answer_En;
        } else {
            titleNameEng = '';
        }



       	 if (GeoArabicAndroid == true) {
tCommonName_Answer_EnAndroid = 'onClick="showAndroidToast(&#039;' + ScientificName_Answer + '&#039;)"';




vapp1 = 'onClick="showAndroidToast(&#039;';
vapp2 = '&#039;)"';
vapp3 = ': ';
titleNameEng = ' ('+CommonName_Answer_En+')';
		}else{
vapp1 = 'data-title="';
vapp2 = '"';
vapp3 = ': ';
titleNameEng = ' ('+CommonName_Answer_En+')';
}








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
            }            if (MultipleImages_Answer != 'NoData' && typeof MultipleImages_Answer !== 'undefined' && MultipleImages_Answer != '') {
                if (IncludeImg == 4) {
                    table.push('<tr><td class="cardinfoname">الصور</td><td class="answercardinfo">');
                    $(MultipleImages_Answer.toString()).each(function() {
                        var nomli = -1;
                        $(this).find('li').each(function() {
                            nomli += 1;
                            var getimgs = $(this).html();
                            getimgs = getimgs.replace(/\/s200\/|\/s320\/|\/h120\/|\/s120\/|\/s1600\//gi, "/s1600/");
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
            if (RedList_Num >= 1 && RedList_Num <= 9) {
                if (IncludeIUCN == 1) {
var settextstatus = '';
var settextstatuscolor = '';
var settextstatusclass1 = 'extinction_notthis';
var settextstatusclass2 = 'extinction_notthis';
var settextstatusclass3 = 'extinction_notthis';
var settextstatusclass4 = 'extinction_notthis';
var settextstatusclass5 = 'extinction_notthis';
var settextstatusclass6 = 'extinction_notthis';
var settextstatusclass7 = 'extinction_notthis';
1 == RedList_Num ? (settextstatusclass1 = "extinction_this extinctionbackgroundcolor160", settextstatus = "غير مهدد", settextstatuscolor = "rgb(0, 160, 0)") : 2 == RedList_Num ? (settextstatusclass2 = "extinction_this extinctionbackgroundcolor174", settextstatus = "قريب من التهديد", settextstatuscolor = "rgb(174, 202, 0)") : 3 == RedList_Num ? (settextstatusclass3 = "extinction_this extinctionbackgroundcolor249", settextstatus = "معرض للإنقراض", settextstatuscolor = "rgb(249, 190, 2)") : 4 == RedList_Num ? (settextstatusclass4 = "extinction_this extinctionbackgroundcolor235", settextstatus = "مهدد بالإنقراض", settextstatuscolor = "rgb(235, 120, 0)") : 5 == RedList_Num ? (settextstatusclass5 = "extinction_this extinctionbackgroundcolor215", settextstatus = "مهدد بشكل حرج بالانقراض", settextstatuscolor = "rgb(215, 41, 0)") : 6 == RedList_Num ? (settextstatusclass6 = "extinction_this extinctionbackgroundcolor60", settextstatus = "منقرض من الحياة البرية", settextstatuscolor = "rgb(60, 0, 168)") : 7 == RedList_Num ? (settextstatusclass7 = "extinction_this extinctionbackgroundcolor25", settextstatus = "منقرض تماماً", settextstatuscolor = "rgb(25, 25, 25)") : 8 == RedList_Num ? (settextstatus = "لا يتوفر عنه معلومات كافية", settextstatuscolor = "#000000") : 9 == RedList_Num ? (settextstatus = "لم يقيَّم بعد", settextstatuscolor = "#000000") : settextstatus = "لم يتم تحديد المعلومات";
                  
table.push("<hr/><div class='IUCNClass'><div class='FastFactsmodalcardinfListContainer'><div class='factsLabel_3x2xkx'><span class='factsKey_rambtt'>حالة القائمة الحمراء لـ <span title='الإتحاد الدولي لحفظ الطبيعة'>IUCN <span></span></span><span class='factsKeyValue_card'><button type='button' class='btn btn-sm btn-light border border-1 p-0' data-bs-toggle='modal' data-bs-target='#modalIUCN' id='Btnscardinfcardinf'><i class='fa fa-question fa-flip-horizontal p-0 px-2' aria-hidden='true'></i></button> : </span><span class='statusValueText'id='settextstatus' style='color:"+settextstatuscolor+"'>"+settextstatus+"</span></span></div></div><div class='factsextinctionsContainer000'><span class='factsextinctionsLine000'></span><div class='factsextinctions0001'><div class='"+settextstatusclass1+"'id='setclassList1'><span>غم</span></div><div class='"+settextstatusclass2+"'id='setclassList2'><span>قخ</span></div><div class='"+settextstatusclass3+"'id='setclassList3'><span>خد</span></div><div class='"+settextstatusclass4+"'id='setclassList4'><span>خم</span></div><div class='"+settextstatusclass5+"'id='setclassList5'><span>خق</span></div><div class='"+settextstatusclass6+"'id='setclassList6'><span>قب</span></div><div class='"+settextstatusclass7+"'id='setclassList7'><span>نق</span></div></div><span class='Labelcard0001'>أقل خطورة</span><span class='Labelcard0002'>منقرضة</span></div></div>");
                }
            }

if (ImgSizeComparison_Answer != 'NoData' && typeof ImgSizeComparison_Answer !== 'undefined' && ImgSizeComparison_Answer != '' || ImgMaps_Answer != 'NoData' && typeof ImgMaps_Answer !== 'undefined' && ImgMaps_Answer != '') {
 table.push('<hr/><div class="row row-cols-1 row-cols-md-3 g-4 mt-2">');
}
if (ImgSizeComparison_Answer != 'NoData' && typeof ImgSizeComparison_Answer !== 'undefined' && ImgSizeComparison_Answer != '') {
var ImgSizeComparison = ImgSizeComparison_Answer.toString().replace(/\/s200\/|\/s320\/|\/s160\/|\/h160\/|\/h120\/|\/s120\/|\/s1600\//gi, "/s162/");
ImgSizeComparison = ImgSizeComparison.toString().replace("=s120", "=s162");
ImgSizeComparison = ImgSizeComparison.toString().replace("=s1900", "=s162");
  table.push('<div class="col m-auto mb-2"  style="width:12rem"><div class="card"><img src="'+ImgSizeComparison+'" class="card-img-top" alt="'+ImgSizeComparison_Question+'"><div class="card-body p-1 text-center border-top"><p class="card-text">'+ImgSizeComparison_Question+'</p></div></div></div>');
  }
if (ImgMaps_Answer != 'NoData' && typeof ImgMaps_Answer !== 'undefined' && ImgMaps_Answer != '') {
var ImgMapsAnswer = ImgMaps_Answer.toString().replace(/\/s200\/|\/s320\/|\/s160\/|\/h160\/|\/h120\/|\/s120\/|\/s1600\//gi, "/s162/");
ImgMapsAnswer = ImgMaps_Answer.toString().replace("=s120", "=s162");
ImgMapsAnswer = ImgMaps_Answer.toString().replace("=s1900", "=s162");
  table.push('<div class="col m-auto mb-2"  style="width:12rem"><div class="card"><img src="'+ImgMapsAnswer+'" class="card-img-top" alt="'+ImgMaps_Question+'"><div class="card-body p-1 text-center"><p class="card-text">'+ImgMaps_Question+'</p></div></div></div>');
            
}  
if (ImgSizeComparison_Answer != 'NoData' && typeof ImgSizeComparison_Answer !== 'undefined' && ImgSizeComparison_Answer != '' || ImgMaps_Answer != 'NoData' && typeof ImgMaps_Answer !== 'undefined' && ImgMaps_Answer != '') {
 table.push('</div>');
}


            if (DidYouKnow_Answer != 'NoData' && typeof DidYouKnow_Answer !== 'undefined' && DidYouKnow_Answer != '') {
                if (IncludeDidUknow == 1) {
                    var DidYouKnow_Answer = DidYouKnow_Answer;
                    DidYouKnow_Answer = DidYouKnow_Answer.toString().replace("<br/>", "");
                    DidYouKnow_Answer = DidYouKnow_Answer.replace("<br>", "");
                    DidYouKnow_Answer = DidYouKnow_Answer.replace("<ul>", "");
                    DidYouKnow_Answer = DidYouKnow_Answer.replace("</ul>", "");
                    table.push("<hr/><center><div id='didyouknow'><p class='didyouknow0005'>هل تعلم</p><div class='didyouknow0004'></div><div class='owl-carousel owl-theme'>");
                    table.push(DidYouKnow_Answer);
                    table.push('</div></div></center>');
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
                    table.push('<hr/>');
                    table.push("<div id='carouselImg'><div class='carouselImgspinners p-4 text-center'><strong class='mt-2'>جارٍ تحميل الصور...</strong><br/><div class='mt-2 spinner-border text-danger'role='status'></div></div><div class='owl-carousel owl-theme'>");
                    $(MultipleImages_Answer.toString()).each(function() {
                        $(this).find('li').each(function() {
                            var getimgs = $(this).html();
                            getimgs = getimgs.replace(/\/s200\/|\/s320\/|\/h120\/|\/s120\/|\/s400\/|\/s1600\//gi, "/s120/");
                            var getimgs1600 = getimgs.replace("/s120/", "/s1600/");
                            getimgs1600 = getimgs1600.replace("=s120", "=s1600");
                            var getimgs600 = getimgs.replace("/s120/", "/h300-w568-c/");
                            getimgs600 = getimgs600.replace("=s120", "=h300-w568-c");
                            table.push('<div class="item">');
                            table.push('<a href="' + getimgs1600 + '" class="spotlight"><img src="' + getimgs600 + '" class="d-block w-100 rounded" alt="' + CommonName_Answer + ' - جيو عربي"></a>');
                            table.push('</div>');
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
                            var getimgs1600 = getimgs.replace("/s120/", "/s1600/");
                            getimgs1600 = getimgs1600.replace("=s120", "=s1600");
                            var getimgs600 = getimgs.replace("/s120/", "/h93-w176-c/");
                            getimgs600 = getimgs600.replace("=s120", "=h93-w176-c");
                            table.push('<div class="item">');
                            table.push('<a href="' + getimgs1600 + '" class="spotlight"><img src="' + getimgs600 + '" class="d-block w-100 rounded" alt="' + CommonName_Answer + ' - جيو عربي"></a>');
                            table.push('</div>');
                        });
                    });
                    table.push('</div></div>');
                }else if(IncludeImg == 5){
                    table.push('<hr class="hrTOPcarouselImg"/>');
                    table.push("<div id='carouselImg'><div class='carouselImgspinners p-4 text-center'><strong class='mt-2'>جارٍ تحميل الصور...</strong><br/><div class='progress mt-4 mb-2'><div id='progressImg' class='progress-bar progress-bar-striped progress-bar-animated bg-danger' role='progressbar' style='width:10%;' aria-valuenow='10' aria-valuemin='10' aria-valuemax='100'>0%</div></div></div><div class='row row-cols-2 row-cols-md-4 g-2 card-gallery mx-1 my-2 d-none' id='iimmgg' itemscope itemtype='http://schema.org/ImageGallery'>");
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

img.onload = function(){
nom++
var height = img.height;
var width = img.width;
  
$('#iimmgg').append('<a class="col" href="' + getimgs1600 + '" data-size="'+width+'x'+height+'" data-med="' + getimgs1600 + '" data-med-size="'+width+'x'+height+'" data-author="Geo Arabic"><img src="'+getimgs162+'" alt="'+CommonName_Answer+'" class="card-img"/></a>');

  

        var pPos = imglength; 
        var pEarned = nom;
        var perc="";
        if(isNaN(pPos) || isNaN(pEarned)){
            perc=" ";
           }else{
           perc = ((pEarned/pPos) * 100).toFixed(3);
           perc = Math.trunc(perc)
           }
  
$('#progressImg').css('width',perc+'%');
$('#progressImg').attr('aria-valuenow',perc);
$('#progressImg').html(perc+'%');
  
  
  
if(perc == 100){
$(".carouselImgspinners").css("display", "none");
$("#iimmgg").removeClass("d-none");
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
        table.push("<div class='container p-0 m-0'><div class='row'>");
        table.push("<div class='col-auto me-auto'><div class='btn p-0 btndown' data-bs-toggle='collapse' onclick='InfoaboutpublisherItme()' data-bs-target='#Infoaboutpublisher' role='button' aria-expanded='false' aria-controls='Infoaboutpublisher'><i title='حول هذه البطاقة' class='fa fa-info-circle' aria-hidden='true'></i></div></div>");
        table.push("<div class='col-auto item-control blog-admin'><a name='"+PostIdInSite_Answer+"'></a> <i class='fa fa-eye'></i><span id='postviews'></span></div>");
        table.push("<div class='col-auto'><div class='btn p-0 btndown' data-bs-toggle='modal' data-bs-target='#modalsharecard'><i title='مشاركة' class='fa fa-share-alt' aria-hidden='true'></i></div></div>");
        table.push("</div></div>");
        table.push("<div id='Infoaboutpublisher' class='my-2 collapse'>");
        table.push("<hr/>" + alertcard + "<hr style='background-color:#999999'/><ul class='list-group list-group-flush text-center'><li class='list-group-item'><img src='" + CardUserImg + "' alt='Avatar' class='avatar'><br>" + CardUserName + "</li><li class='list-group-item'>" + CardTimestamp + "</li><li class='list-group-item" + removedcard + "'><a class='sharer sharer-fb' href='https://www.facebook.com/dialog/feed?app_id=453684218377321&display=popup&link=https://card.geoarabic.com/p/card.html?id=" + getsetIdCard + "&redirect_uri=https://card.geoarabic.com/p/card.html?id=" + getsetIdCard + "&quote="+CardName+"&hashtag=#جيو_عربي' onclick='window.open(this.href,&quot;popupwindow&quot;,&quot;status=0,height=500,width=500,resizable=0,top=50,left=100&quot;);return false;' rel='nofollow' target='_blank' title='Facebook'><i class='fa fa-facebook-square' aria-hidden='true'></i></a><a class='sharer sharer-tw' href='https://twitter.com/intent/tweet?hashtags=جيو_عربي&url=https://card.geoarabic.com/p/card.html?id=" + getsetIdCard + "&text=" + CardName + "&via=GeoArabs&related=GeoArabs' onclick='window.open(this.href,&quot;popupwindow&quot;,&quot;status=0,height=500,width=500,resizable=0,top=50,left=100&quot;);return false;' rel='nofollow' target='_blank' title='Twitter'><i class='fa fa-twitter' aria-hidden='true'></i></a> <a class='sharer sharer-wa' data-action='share/whatsapp/share' href='https://api.whatsapp.com/send?text=" + CardName + "   https://card.geoarabic.com/p/card.html?id=" + getsetIdCard + "' onclick='window.open(this.href,&quot;popupwindow&quot;,&quot;status=0,height=500,width=500,resizable=0,top=50,left=100&quot;);return false;' rel='nofollow' target='_blank' title='WhatsApp'><i class='fa fa-whatsapp' aria-hidden='true'></i></a><div class='sharer sharer-copy copy' data-clipboard-text='https://card.geoarabic.com/p/card.html?id=" + PostUrlInSite_Answer + "' rel='nofollow' title='copy link'><i class='fa fa-clone' aria-hidden='true'></i></div></li></ul>");
        $("#linkcardb").val(getsetIdCard);
        if (SourceInfo_Answer_link != 'NoData' && typeof SourceInfo_Answer_link !== 'undefined' && SourceInfo_Answer_link != '') {
            table.push("<hr/><p class='py-2 fspcard'>المزيد من المعلومات حول " + CommonName_Answer + ": <a href='" + SourceInfo_Answer_link + "' target='_blank'>" + SourceInfo_Answer_Title + " <i class='fa fa-external-link fa-flip-horizontal' style='font-size:0.8rem' aria-hidden='true'></i></a></p>");
        }
        table.push("<hr /><p class='fspcard'><strong>حول:</strong> تم إنشاء هذه البطاقة عبر <a target='_blank' href='https://card.geoarabic.com/p/create-card.html'>أداة نشر البطاقات</a>في جيو عربي، يمكنك تقديم طلب لإنشاء ونشر بطاقات جديدة.</p>");
        table.push("</div>");
        document.getElementById('cardinfo').innerHTML = table.join('');
        var xhr = new XMLHttpRequest();
        xhr.open("GET", "https://api-ssl.bitly.com/v3/shorten?access_token=6ba802f80588128f34474436559fcae8556dd5c1&longUrl="+urlpost);
        xhr.onreadystatechange = function() {
            if (xhr.readyState == 4) {
                if (xhr.status == 200) {
                    var text = xhr.responseText;
                    var obj = JSON.parse(text);
                    var objlink = obj.data.url;
                    $("#linkShareforcopy").val(objlink);
                    replaceurl()
                } else {
                    $("#linkShareforcopy").val(urlpost);
                }
            }
        }
        var obj = xhr.send();
        setiframe();


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


        if (MultipleImages_Answer != 'NoData' && typeof MultipleImages_Answer !== 'undefined' && MultipleImages_Answer != '') {
            if (IncludeImg == 1) {
                var carouselImg = document.querySelector('#cardinfo #carouselImg')
                var carousel = new bootstrap.Carousel(carouselImg, {
                    interval: 5000,
                    slide: "carousel",
                    wrap: true
                });
            } else if (IncludeImg == 2) {
                var img = $('#cardinfo #carouselImg img'),
                    totalImg = img.length;
                $('img').on('load', function() {
                    totalImg--;
                    if (totalImg == 0) {
                        $("#cardinfo .carouselImgspinners").css("display", "none");
                        $('#cardinfo #carouselImg .owl-carousel').owlCarousel({
                            responsiveClass: true,
                            autoHeight: true,
                            rtl: true,
                            items: 1,
                            autoplay: true,
                            autoplayTimeout: 3000,
                            autoplayHoverPause: true,
                            stagePadding: 0,
                            loop: true,
                            margin: 20,
                            nav: true,
                            animateOut: 'fadeOut',
                            animateIn: 'flipInX',
                            lazyLoad: true
                        });
                        $('#cardinfo #carouselImg .owl-next').html('<span class="fa-stack fs-4"><i class="fa fa-circle fa-stack-2x"></i><i class="fa fa-angle-left fa-stack-1x fs-2"></i></span>');
                        $('#cardinfo #carouselImg .owl-prev').html('<span class="fa-stack fs-4"><i class="fa fa-circle fa-stack-2x"></i><i class="fa fa-angle-right fa-stack-1x fs-2"></i></span>');
                    }
                }).on('error', function() {
                    $("#cardinfo .carouselImgspinners").html("حدث خطأ في تحميل الصور");
                });
            } else if (IncludeImg == 3) {
                var img = $('#cardinfo #carouselImg img'),
                    totalImg = img.length;
                $('img').on('load', function() {
                    totalImg--;
                    if (totalImg == 0) {
                        $("#cardinfo .carouselImgspinners").css("display", "none");
                        $('#carouselImg .owl-carousel').owlCarousel({
                            autoHeight: true,
                            rtl: true,
                            items: 3,
                            autoplay: true,
                            autoplayTimeout: 3000,
                            autoplayHoverPause: true,
                            stagePadding: 0,
                            loop: true,
                            margin: 20,
                            nav: false,
                            lazyLoad: true,
                            smartSpeed: 4000,
                            dotsSpeed: 250,
                            dragEndSpeed: 250
                        })
                        $('#cardinfo #carouselImg .owl-dots').css('margin-top', '10px');
                    }
                }).on('error', function() {
                    $("#cardinfo .carouselImgspinners").html("حدث خطأ في تحميل الصور");
                });
            }
        }
        if (DidYouKnow_Answer != 'NoData' && typeof DidYouKnow_Answer !== 'undefined' && DidYouKnow_Answer != '') {
            if (IncludeDidUknow == 1) {
                $('#cardinfo #didyouknow .owl-carousel').owlCarousel({
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
    });
