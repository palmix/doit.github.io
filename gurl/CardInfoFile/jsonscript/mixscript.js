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
});
  
$('#modalsharecard').on('show.bs.modal', function () {
  $('#showingCardModal').modal('hide');
   window.location.hash = "modalsharecard";
})
  
$('#modalIUCN').on('show.bs.modal', function () {
  $('#showingCardModal').modal('hide');
   window.location.hash = "modalIUCN";
})
  
  
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

    