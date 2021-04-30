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
        $(".sharer.sharer-copy").attr("data-clipboard-text", t);
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
        iframe += '"></iframe>';
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
  
  
  

 $('#showingCardModal').on('show.bs.modal', function () {
  
   window.location.hash = "CardModal";
   
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
  clearAllSlots();
  $("#ShareACard").css("display","none");
  $("#InfoaboutCard").css("display","none");

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

    