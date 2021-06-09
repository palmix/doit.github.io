if(IncludeImg == 5) {
  var newCSS=document.createElement('link');
  newCSS.href='https://get.geoarabic.com/tools/PhotoSwipe-4.1.3/dist/default-skin/all.min.css';
  newCSS.rel='stylesheet';
  document.getElementsByTagName("head")[0].appendChild(newCSS);

  var newJS=document.createElement('script');
  newJS.src='https://get.geoarabic.com/tools/PhotoSwipe-4.1.3/dist/photoswipe.min.js';
  document.getElementsByTagName("head")[0].appendChild(newJS);

  var newJS=document.createElement('script');
  newJS.src='https://get.geoarabic.com/tools/PhotoSwipe-4.1.3/dist/photoswipe-ui-default.min.js';
  document.getElementsByTagName("head")[0].appendChild(newJS);
}

    function cardimgG() {
$('#gallery').removeClass('d-none');
		var initPhotoSwipeFromDOM = function(gallerySelector) {

			var parseThumbnailElements = function(el) {
			    var thumbElements = el.childNodes,
			        numNodes = thumbElements.length,
			        items = [],
			        el,
			        childElements,
			        thumbnailEl,
			        size,
			        item;

			    for(var i = 0; i < numNodes; i++) {
			        el = thumbElements[i];

			        // include only element nodes 
			        if(el.nodeType !== 1) {
			          continue;
			        }

			        childElements = el.children;

			        size = el.getAttribute('data-size').split('x');

			        // create slide object
			        item = {
						src: el.getAttribute('href'),
						w: parseInt(size[0], 10),
						h: parseInt(size[1], 10),
						author: el.getAttribute('data-author')
			        };

			        item.el = el; // save link to element for getThumbBoundsFn

			        if(childElements.length > 0) {
			          item.msrc = childElements[0].getAttribute('src'); // thumbnail url
			          if(childElements.length > 1) {
			              item.title = childElements[1].innerHTML; // caption (contents of figure)
			          }
			        }


					var mediumSrc = el.getAttribute('data-med');
		          	if(mediumSrc) {
		            	size = el.getAttribute('data-med-size').split('x');
		            	// "medium-sized" image
		            	item.m = {
		              		src: mediumSrc,
		              		w: parseInt(size[0], 10),
		              		h: parseInt(size[1], 10)
		            	};
		          	}
		          	// original image
		          	item.o = {
		          		src: item.src,
		          		w: item.w,
		          		h: item.h
		          	};

			        items.push(item);
			    }

			    return items;
			};

			// find nearest parent element
			var closest = function closest(el, fn) {
			    return el && ( fn(el) ? el : closest(el.parentNode, fn) );
			};

			var onThumbnailsClick = function(e) {
			    e = e || window.event;
			    e.preventDefault ? e.preventDefault() : e.returnValue = false;

			    var eTarget = e.target || e.srcElement;

			    var clickedListItem = closest(eTarget, function(el) {
			        return el.tagName === 'A';
			    });

			    if(!clickedListItem) {
			        return;
			    }

			    var clickedGallery = clickedListItem.parentNode;

			    var childNodes = clickedListItem.parentNode.childNodes,
			        numChildNodes = childNodes.length,
			        nodeIndex = 0,
			        index;

			    for (var i = 0; i < numChildNodes; i++) {
			        if(childNodes[i].nodeType !== 1) { 
			            continue; 
			        }

			        if(childNodes[i] === clickedListItem) {
			            index = nodeIndex;
			            break;
			        }
			        nodeIndex++;
			    }

			    if(index >= 0) {
			        openPhotoSwipe( index, clickedGallery );
			    }
			    return false;
			};

			var photoswipeParseHash = function() {
				var hash = window.location.hash.substring(1),
			    params = {};

			    if(hash.length < 5) { // pid=1
			        return params;
			    }

			    var vars = hash.split('&');
			    for (var i = 0; i < vars.length; i++) {
			        if(!vars[i]) {
			            continue;
			        }
			        var pair = vars[i].split('=');  
			        if(pair.length < 2) {
			            continue;
			        }           
			        params[pair[0]] = pair[1];
			    }

			    if(params.gid) {
			    	params.gid = parseInt(params.gid, 10);
			    }

			    return params;
			};

			var openPhotoSwipe = function(index, galleryElement, disableAnimation, fromURL) {
			    var pswpElement = document.querySelectorAll('.pswp')[0],
			        gallery,
			        options,
			        items;

				items = parseThumbnailElements(galleryElement);

			    // define options (if needed)
			    options = {

			        galleryUID: galleryElement.getAttribute('data-pswp-uid'),
                    showHideOpacity:false,
			        getThumbBoundsFn: function(index) {
			            // See Options->getThumbBoundsFn section of docs for more info
			            var thumbnail = items[index].el.children[0],
			                pageYScroll = window.pageYOffset || document.documentElement.scrollTop,
			                rect = thumbnail.getBoundingClientRect(); 

			            return {x:rect.left, y:rect.top + pageYScroll, w:rect.width};
			        },

			        addCaptionHTMLFn: function(item, captionEl, isFake) {
						if(!item.title) {
							captionEl.children[0].innerText = '';
							return false;
						}
						captionEl.children[0].innerHTML = item.title +  '<br/><small>Photo: ' + item.author + '</small>';
						return true;
			        },
					
			    };


			    if(fromURL) {
			    	if(options.galleryPIDs) {
			    		// parse real index when custom PIDs are used 
			    		// https://photoswipe.com/documentation/faq.html#custom-pid-in-url
			    		for(var j = 0; j < items.length; j++) {
			    			if(items[j].pid == index) {
			    				options.index = j;
			    				break;
			    			}
			    		}
				    } else {
				    	options.index = parseInt(index, 10) - 1;
				    }
			    } else {
			    	options.index = parseInt(index, 10);
			    }

			    // exit if index not found
			    if( isNaN(options.index) ) {
			    	return;
			    }



				var radios = document.getElementsByName('gallery-style');
				for (var i = 0, length = radios.length; i < length; i++) {
				    if (radios[i].checked) {
				        if(radios[i].id == 'radio-all-controls') {

				        } else if(radios[i].id == 'radio-minimal-black') {
				        	options.mainClass = 'pswp--minimal--dark';
					        options.barsSize = {top:0,bottom:0};
							options.captionEl = false;
							options.fullscreenEl = false;
							options.shareEl = false;
							options.bgOpacity = 0.85;
							options.tapToClose = true;
							options.tapToToggleControls = false;
				        }
				        break;
				    }
				}

			    if(disableAnimation) {
			        options.showAnimationDuration = 0;
			    }

			    // Pass data to PhotoSwipe and initialize it
			    gallery = new PhotoSwipe( pswpElement, PhotoSwipeUI_Default, items, options);

			    // see: http://photoswipe.com/documentation/responsive-images.html
				var realViewportWidth,
				    useLargeImages = false,
				    firstResize = true,
				    imageSrcWillChange;

				gallery.listen('beforeResize', function() {

					var dpiRatio = window.devicePixelRatio ? window.devicePixelRatio : 1;
					dpiRatio = Math.min(dpiRatio, 2.5);
				    realViewportWidth = gallery.viewportSize.x * dpiRatio;


				    if(realViewportWidth >= 1200 || (!gallery.likelyTouchDevice && realViewportWidth > 800) || screen.width > 1200 ) {
				    	if(!useLargeImages) {
				    		useLargeImages = true;
				        	imageSrcWillChange = true;
				    	}
				        
				    } else {
				    	if(useLargeImages) {
				    		useLargeImages = false;
				        	imageSrcWillChange = true;
				    	}
				    }

				    if(imageSrcWillChange && !firstResize) {
				        gallery.invalidateCurrItems();
				    }

				    if(firstResize) {
				        firstResize = false;
				    }

				    imageSrcWillChange = false;

				});

				gallery.listen('gettingData', function(index, item) {
				    if( useLargeImages ) {
				        item.src = item.o.src;
				        item.w = item.o.w;
				        item.h = item.o.h;
				    } else {
				        item.src = item.m.src;
				        item.w = item.m.w;
				        item.h = item.m.h;
				    }
				});

			    gallery.init();
			};

			// select all gallery elements
			var galleryElements = document.querySelectorAll( gallerySelector );
			for(var i = 0, l = galleryElements.length; i < l; i++) {
				galleryElements[i].setAttribute('data-pswp-uid', i+1);
				galleryElements[i].onclick = onThumbnailsClick;
			}

			// Parse URL and open gallery if it contains #&pid=3&gid=1
			var hashData = photoswipeParseHash();
			if(hashData.pid && hashData.gid) {
				openPhotoSwipe( hashData.pid,  galleryElements[ hashData.gid - 1 ], true, true );
			}
		};


		initPhotoSwipeFromDOM('.card-gallery');

	};
	
   function replaceurl() {
        var s = "https://card.geoarabic.com/p/card.html?id=" + $("#linkcardb").val();
        var t = $("#linkShareforcopy").val();
        var n = $(".answercardinfo:eq(0)").html();
        var fb = $(".sharer.sharer-fb").attr("href");
        fb = fb.replace(s, t);
        $(".sharer.sharer-fb").attr("href", fb);
        $(".sharerfb2").attr("href", fb);
        var tw = $(".sharer.sharer-tw").attr("href");
        tw = tw.replace(s, t);
        $(".sharer.sharer-tw").attr("href", tw);
        $(".sharertw2").attr("href", tw);
        var wa = $(".sharer.sharer-wa").attr("href");
        wa = wa.replace(s, t);
        $(".sharer.sharer-wa").attr("href", wa);
        $(".sharerwa2").attr("href", wa);
        $(".sharerml2").attr("href", "mailto:?subject=معلومات حول "+n+"&body="+t);
    }
    $("#codebtn").click(function() {
        $("#iframeShare").css("display", "block");
        $("#linkShare").css("display", "none");
    });
    $("#linkbtn").click(function() {
        $("#iframeShare").css("display", "none");
        $("#linkShare").css("display", "block");
    });
    $(".onchangescolor").change(function() {
        $("#colorstext").val($("#colors").val());
        setiframe()
    });
    $(".onchanges").change(function() {
        setiframe();
    });

    function setiframe() {
        var colorstext = $("#colorstext").val();
        var iframeWidth = $("#iframeWidth").val();
        var iframeHeight = $("#iframeHeight").val();
        var a = colorstext.replace('#', '');
        var b = '&ii=1';
        var c = '&iduc=1';
        var d = '&iiucn=1';
        var collapseimgshow = document.getElementById('collapseimgshow')
        var bsCollapseimg = new bootstrap.Collapse(collapseimgshow, {
            toggle: false
        })
        if ($('input#IncludeImg').is(':checked')) {
            bsCollapseimg.show()
            if ($('input#imgslideshow').is(':checked')) {
                b = '&ii=1'
            } else {
                b = '&ii=2'
            }
        } else {
            b = '&ii=0'
            bsCollapseimg.hide()
        }
        if ($('input#IncludeDidUknow').is(':checked')) {
            c = '&iduc=1'
        } else {
            c = '&iduc=0'
        }
        if ($('input#IncludeIUCN').is(':checked')) {
            d = '&iiucn=1'
        } else {
            d = '&iiucn=0'
        }
        var collapsecolor = document.getElementById('collapsecolor')
        var bsCollapse = new bootstrap.Collapse(collapsecolor, {
            toggle: false
        });
        if ($('input#colorschecked').is(':checked')) {
            a = a;
            bsCollapse.show()
        } else {
            a = '';
            bsCollapse.hide()
        }
        var recolorstext = a.substring(0, 1);
        var repcolorstext = a.substring(1, 30);
        if (a != '') {
            if (recolorstext == 0) {
                a = '&b=z' + repcolorstext;
            } else {
                a = '&b=' + a;
            }
        }
        var iframe = '';
        iframe += '<div style="margin:0 auto;max-width:';
        iframe += iframeWidth;
        iframe += 'px">\n';
        iframe += '<iframe ';
        iframe += 'width="';
        iframe += '100%';
        iframe += '" ';
        iframe += 'style="border-bottom:1px solid #999;" frameborder="0" src="https://card.geoarabic.com/p/iframe.html?id=';
        iframe += $("#linkcardb").val();
        iframe += a;
        iframe += b;
        iframe += c;
        iframe += d;
        iframe += '" ';
        iframe += 'height="';
        iframe += iframeHeight;
        iframe += '" allowfullscreen></iframe>';
        iframe += '\n</div>';
        $("#colors").val($("#colorstext").val())
        $("#iframeShareforcopy").val(iframe);
    };
    $(document).ready(function() {
        $('.btns').click(function() {
            $('.btns').removeClass('active');
            $(this).closest('.btns').addClass('active')
        });
    });


  
  
  
    $(window).on('hashchange', function (event) {
      if(location.hash == "#CardModal" || location.hash == "#spotlight" || location.hash == "#show") {

        


        
        

        
        $('#showingCardModal').show();
        $('#modalIUCN').modal('hide');
        $('#modalsharecard').modal('hide');
    
        }else if(location.hash == "#modalIUCN") {
          
            $('#modalIUCN').modal('show');
            $('#showingCardModal').modal('hide');
            $('#modalsharecard').modal('hide');
          
        }else if(location.hash == "#modalsharecard") {
            $('#modalIUCN').modal('hide');
            $('#showingCardModal').modal('hide');
            $('#modalsharecard').modal('show');
        }else{
            $('#modalIUCN').modal('hide');
            $('#showingCardModal').modal('hide');
            $('#modalsharecard').modal('hide');
        }
    }); 
  
  
  

 $('#showingCardModal').on('shown.bs.modal', function () {
  
if ( document.location.protocol === 'file:' ) {
window.location.hash = "CardModal";
}else{
var IDTitle = $('#IDTitle').val();
var IDURL = $('#IDURL').val();
history.replaceState({page:1,rand:Math.random()},IDTitle, IDURL);
 window.location.hash = "CardModal";
}
   
if(scrollY == 0){
  window.scrollTo(0, 1);
}
});
  
$('#modalsharecard').on('show.bs.modal', function () {
  $('#showingCardModal').modal('hide');
   window.location.hash = "modalsharecard";
});
  
$('#modalIUCN').on('show.bs.modal', function () {
  $('#showingCardModal').modal('hide');
   window.location.hash = "modalIUCN";
});
  
  
$('#modalsharecard,#modalIUCN').on('hidden.bs.modal', function () {
  $('#showingCardModal').modal('show');
  $("#ShareACard").css("display","block");
  $("#InfoaboutCard").css("display","block");

})
$('#showingCardModal').on('hidden.bs.modal', function () {
  $("#ShareACard").css("display","none");
  $("#InfoaboutCard").css("display","none");
if ( document.location.protocol !== 'file:' ) {
if(location.hash != "#CardModal" || location.hash == "#modalIUCN" || location.hash == "#modalsharecard") {
clearAllSlots();
history.replaceState({state:1,rand:Math.random()},$("#IDTitleOld").val(), $("#IDURLOld").val());
}
}
})


  
$('#modalsharecard,#modalIUCN,#showingCardModal').on('hide.bs.modal', function () {
if(location.hash == "#CardModal") {
window.history.go(-1);
}else if(location.hash == "#modalIUCN" ){
window.history.go(-1);
}else if(location.hash == "#modalsharecard" ){
window.history.go(-1);
}
});
$('#modalsharecard,#modalIUCN,#showingCardModal').on('show.bs.modal', function () {
if(location.hash == "#CardModal") {
setTimeout(function(){ window.location.hash = "CardModal"; }, 500);
}else if(location.hash == "#modalIUCN" ){
setTimeout(function(){ window.location.hash = "modalIUCN"; }, 500);
}else if(location.hash == "#modalsharecard" ){
setTimeout(function(){ window.location.hash = "modalsharecard"; }, 500);
}
});
  
  

  
  
  
  
  
    function Infoaboutpublisher() {
        $('#Infoaboutpublisher').on('shown.bs.collapse', function() {
            var hash = "#Infoaboutpublisher";
var cfullscreen = $('#showingCardModal .modal-dialog').hasClass('modal-fullscreen');
            var cardinfoheight = $('#cardinfo').height();
            var Infoaboutpublisherheight = $('#Infoaboutpublisher').height();
            var adsTopCardheight = $('.adsTopCard').height();
            var adsBottomCardheight = $('.adsBottomCard').height();
            var h = cardinfoheight + adsBottomCardheight + adsTopCardheight;
            var top = h - Infoaboutpublisherheight;
          if(cfullscreen == true){
            $('#showingCardModal .modal-body').animate({
                scrollTop: top -64
            }, 500);
        }else{
          var showingCardModal = $('#showingCardModal').height();
           var h = cardinfoheight + adsBottomCardheight + adsTopCardheight;
            var top = h - Infoaboutpublisherheight;
            $('#showingCardModal').animate({
                scrollTop: top -64
            }, 500);                    
      }
        });
    }

        function InfoaboutpublisherItme() {
        $('#Infoaboutpublisher').on('shown.bs.collapse', function() {
            var hash = "#Infoaboutpublisher";
            $('html,body').animate({
                scrollTop: $(hash).offset().top
            }, 100);
        });
    }
	
function showAndroidToast(toast) {
        Android.showToast(toast);
}



var GeoArabicAndroid = /GeoArabicAndroid/.test(navigator.userAgent);
if (GeoArabicAndroid == true) {
  
$('[data-description]').click(function() {
var m = $(this).attr("data-description");
Android.showToast(m)
});
}else{

$('[data-description]').hover(
function() {
var m = $(this).attr("data-description");
    $(this).attr("title",m)
  }, function() {
    $(this).removeAttr("title")
  }
);
  
}








function setSizeModal(){
var width = $("body").width();
if (width <= 299){
refreshAdSlot1();
$('#showingCardModal .modal-dialog,#modalsharecard .modal-dialog').removeClass('modal-slg');
$('#showingCardModal .modal-dialog,#modalsharecard .modal-dialog').addClass('modal-fullscreen');
}else if (width >= 300 && width <= 430){
refreshAdSlot2();
$('#showingCardModal .modal-dialog,#modalsharecard .modal-dialog').removeClass('modal-slg');
$('#showingCardModal .modal-dialog,#modalsharecard .modal-dialog').addClass('modal-fullscreen');
}else{
refreshAdSlot3();
$('#showingCardModal .modal-dialog,#modalsharecard .modal-dialog').removeClass('modal-fullscreen');
$('#showingCardModal .modal-dialog,#modalsharecard .modal-dialog').addClass('modal-slg');
}
}

$('#IDURLOld').val(window.location.href);
$('#IDTitleOld').val(window.document.title);



function SetIUCNHTML(table,disnone,RedList_Num) {
table.push("<div class='IUCNClass'><div class='FastFactsmodalcardinfListContainer'><div class='factsLabel_3x2xkx'><span class='factsKey_rambtt'>حالة القائمة الحمراء لـ <span title='الإتحاد الدولي لحفظ الطبيعة'>IUCN <span></span></span><span class='factsKeyValue_card'><button type='button' class='btn btn-sm btn-light border border-1 p-0' data-bs-toggle='modal' data-bs-target='#modalIUCN' id='Btnscardinfcardinf'><i class='fa fa-question fa-flip-horizontal p-0 px-2' aria-hidden='true'></i></button> : </span><span class='statusValueText' id='settextstatus'></span></span></div> </div> <div class='factsextinctionsContainer000 "+disnone+"'><span class='factsextinctionsLine000'></span> <div class='factsextinctions0001'> <div class='extinction_notthis' id='setclassList1' data-description='غير مهدد'><span>غم</span></div> <div class='extinction_notthis' id='setclassList2' data-description='قريب من التهديد'><span>قخ</span></div> <div class='extinction_notthis' id='setclassList3' data-description='معرض للإنقراض'><span>خد</span></div> <div class='extinction_notthis' id='setclassList4' data-description='مهدد بالإنقراض'><span>خم</span></div> <div class='extinction_notthis' id='setclassList5' data-description='مهدد بشكل حرج بالانقراض'><span>خق</span></div> <div class='extinction_notthis' id='setclassList6' data-description='منقرض من الحياة البرية'><span>قب</span></div> <div class='extinction_notthis' id='setclassList7' data-description='منقرض تماماً'><span>نق</span></div> </div><span class='Labelcard0001'>أقل خطورة</span><span class='Labelcard0002'>منقرضة</span> </div></div><hr/>");





$(document).ready(function() {
if(RedList_Num == 1){
$('#setclassList1').addClass('extinction_this extinctionbackgroundcolor160');
$('#setclassList1').removeClass('extinction_notthis');
$('#settextstatus').html('<span data-description="الأنواع المنتشرة والمتوفرة في الطبيعة">غير مهدد</span>');
$('#settextstatus').css('color','rgb(0, 160, 0)');
}else if(RedList_Num == 2){
$('#setclassList2').addClass('extinction_this extinctionbackgroundcolor174');
$('#setclassList2').removeClass('extinction_notthis');
$('#settextstatus').html('<span data-description="الأنواع التي لا تتأهل كي تصنف ضمن الفئات المذكورة في التالي ولكنها من المرجح أن تصل إلى إحدى هذه الفئات في المستقبل القريب">قريب من التهديد</span>');
$('#settextstatus').css('color','rgb(174, 202, 0)');
}else if(RedList_Num == 3){
$('#setclassList3').addClass('extinction_this extinctionbackgroundcolor249');
$('#setclassList3').removeClass('extinction_notthis');
$('#settextstatus').html('<span data-description="الأنواع المعرضة لخطورة الانقراض من الطبيعة">معرض للإنقراض</span>');
$('#settextstatus').css('color','rgb(249, 190, 2)');
}else if(RedList_Num == 4){
$('#setclassList4').addClass('extinction_this extinctionbackgroundcolor235');
$('#setclassList4').removeClass('extinction_notthis');
$('#settextstatus').html('<span data-description="الأنواع المعرضة بشكل كبير لخطورة الانقراض من الطبيعة">مهدد بالإنقراض</span>');
$('#settextstatus').css('color','rgb(235, 120, 0)');
}else if(RedList_Num == 5){
$('#setclassList5').addClass('extinction_this extinctionbackgroundcolor215');
$('#setclassList5').removeClass('extinction_notthis');
$('#settextstatus').html('<span data-description="الأنواع المعرضة بشدة كبيرة جدا لخطورة الانقراض من الطبيعة">مهدد بشكل حرج بالانقراض</span>');
$('#settextstatus').css('color','rgb(215, 41, 0)');
}else if(RedList_Num == 6){
$('#setclassList6').addClass('extinction_this extinctionbackgroundcolor60');
$('#setclassList6').removeClass('extinction_notthis');
$('#settextstatus').html('<span data-description="الأنواع التي تتواجد فقط في الأسر أو التربية الداخلية أو تتواجد في تجمعات غير طبيعية (تتواجد بعيدا عن التوزيع الطبيعي الأصلي لهذه الفئة)">منقرض من الحياة البرية</span>');
$('#settextstatus').css('color','rgb(60, 0, 168)');
}else if(RedList_Num == 7){
$('#setclassList7').addClass('extinction_this extinctionbackgroundcolor25');
$('#setclassList7').removeClass('extinction_notthis');
$('#settextstatus').html('<span data-description="لا يوجد في البرية او في الأسر من هذا الفصيل على قيد الحياة">منقرض تماماً</span>');
$('#settextstatus').css('color','rgb(25, 25, 25)');
}else if(RedList_Num == 8){
$('#settextstatus').html('<span data-description="لا تتوفر عنها معلومات عن توزيعها في الطبيعة أو تعرضها للتهديدات">لا يتوفر عنه معلومات كافية</span>');
$('#settextstatus').css('color','#000000');
}else if(RedList_Num == 9){
$('#settextstatus').html('<span data-description="الأنواع التي لم يتم تقييمها بعد">لم يقيَّم بعد</span>');
$('#settextstatus').css('color','#000000');
}else{
$('#settextstatus').html('لم يتم تحديد المعلومات');
$('#settextstatus').css('color','#5f5f5f');
}
});
}


function dataDescription() {
$(document).ready(function() {
var GeoArabicAndroid = /GeoArabicAndroid/.test(navigator.userAgent);
if (GeoArabicAndroid == true) {
  
$('[data-description]').click(function() {
var m = $(this).attr("data-description");
Android.showToast(m)
});
}else{

$('[data-description]').hover(
function() {
var m = $(this).attr("data-description");
    $(this).attr("title",m)
  }, function() {
    $(this).removeAttr("title")
  }
);
  
}
});
}


function conDidYouKnow(table,DidYouKnow_Answer,sharelink){
                    DidYouKnow_Answer = DidYouKnow_Answer.toString().replace("<br/>", "");
                    DidYouKnow_Answer = DidYouKnow_Answer.replace("<br>", "");
                    table.push("<hr/><center><div id='didyouknow'><p class='didyouknow0005'>هل تعلم</p><div class='didyouknow0004'></div><div class='owl-carousel owl-theme'>");
                   $(DidYouKnow_Answer).each(function() {
                        $(this).find('li').each(function() {
							var DidYouKnows = $(this).html();
							var btnFacebook = "";
							var btnWhatsApp = "<a href='https://api.whatsapp.com/send?text="+DidYouKnows+"%20%20"+sharelink+"' onclick='window.open(this.href,&quot;popupwindow&quot;,&quot;status=0,height=500,width=500,resizable=0,top=50,left=100&quot;);return false;' target='_blank'><i class='fa fa-whatsapp' aria-hidden='true'></i></a>";;
							var btnTwitter = '';
							var btns = "<div class='list-group list-group-flush text-center'><div><a class='sharer sharer-tw' href='https://twitter.com/intent/tweet?hashtags=جيو_عربي&url=" + sharelink + "&text=" + DidYouKnows + "&via=GeoArabs&related=GeoArabs' onclick='window.open(this.href,&quot;popupwindow&quot;,&quot;status=0,height=500,width=500,resizable=0,top=50,left=100&quot;);return false;' rel='nofollow' target='_blank' title='Twitter'><i class='fa fa-twitter' aria-hidden='true'> </i> </a> <a class='sharer sharer-wa' data-action='share/whatsapp/share' href='https://api.whatsapp.com/send?text=" + DidYouKnows + "   " + sharelink + "' onclick='window.open(this.href,&quot;popupwindow&quot;,&quot;status=0,height=500,width=500,resizable=0,top=50,left=100&quot;);return false;' rel='nofollow' target='_blank' title='WhatsApp'><i class='fa fa-whatsapp' aria-hidden='true'></i></a><div class='sharer sharer-copy copylink copy' data-clipboard-text='"+DidYouKnows+"' title='copy link'><i class='fa fa-clone' aria-hidden='true'></i> </div></div></div>";

                                table.push('<div class="dukText copylink copy" data-clipboard-text="'+DidYouKnows+'">'+DidYouKnows+'<div>'+btns+'</div></div>');
                        });
					});
                    table.push('</div></div></center>');
 
 }

function conLinkShort(PostUrlInSite_Answer){
$("#linkShareforcopy").val(PostUrlInSite_Answer);
        var xhr = new XMLHttpRequest();
        xhr.open("GET", "https://api-ssl.bitly.com/v3/shorten?access_token=6ba802f80588128f34474436559fcae8556dd5c1&longUrl=" + PostUrlInSite_Answer);
        xhr.onreadystatechange = function() {
            if (xhr.readyState == 4) {
                if (xhr.status == 200) {
                    var text = xhr.responseText;
                    var obj = JSON.parse(text);
                  if (obj.status_code == 200){
                    var objlink = obj.data.url;
                    $("#linkShareforcopy").val(objlink);
                     }
                }
            }
        }
var obj = xhr.send();
}
