(function($,window,undefined){
	var $allDropdowns = $();
	$.fn.dropdownHover = function(options) {
		$allDropdowns = $allDropdowns.add(this.parent());   
		return this.each(function() {
			var $this = $(this).parent(),   
				defaults = {
					delay: 50, 
					instantlyCloseOthers: true 
				}, 
				data = {delay: $(this).data('delay'), instantlyCloseOthers: $(this).data('close-others')},  
				options = $.extend(true, {}, defaults, options, data),
				timeout;    
			$this.hover(function() {    
				if(options.instantlyCloseOthers === true){
					$allDropdowns.removeClass('show'); 
					window.clearTimeout(timeout); 
					$(this).addClass('show');
					$this.find(".dropdown-menu").addClass("show");
				}
			}, function() { 
				console.log(options.delay);
				timeout = window.setTimeout(function() {    
					$this.removeClass('show');  
					$this.find(".dropdown-menu").removeClass("show");
				}, options.delay);  
			}); 
		}); 
	};  
})(jQuery, this);
if($(window).width()>992)
{
    $('.dropdown-toggle').dropdownHover(); 
}
$('a.dropdown-toggle').click(function(e){		
	if($(window).width()>992)
	{
		e.preventDefault();
	    location.href= $(this).attr("href");
	}
	else{
		e.preventDefault();
		var classname = e.target["className"];
		if(classname == "pro_icon")
		{
			var parent_id = $(this).parent();
			var parentclass = parent_id.attr("class");
			if(parentclass.indexOf("show") >= 0 ) { 
                parent_id.removeClass("show");
			    parent_id.find("ul.dropdown-menu").removeClass("show");
				parent_id.find("span.pro_icon").html("+");
            } 
			else{
				parent_id.addClass("show");
			    parent_id.find("ul.dropdown-menu").addClass("show");
				parent_id.find("span.pro_icon").html("-");
			}
		}
		else{
			location.href= $(this).attr("href");
		}
	}
	return false;
});



jQuery(function($) {
	if(jQuery(".js-gallery-wrap").length > 0){
        jQuery(".js-gallery-wrap").magnificPopup({
            delegate:"figure  a",
            type:"image",
            gallery:{
                enabled:true,
                navigateByImgClick:true,
                preload:[ 0, 1 ]
            }
        });
    }
    
    $("body").on("mousemove", ".related_pic img", function() {
        var th = $(this);
		$(".related_pic a").removeClass("imgdq");
		th.parent().addClass("imgdq");
        var src = th.attr("src");
		src = src.replace("b.jpg", ".jpg");
		src = src.replace("s.jpg", ".jpg");
        src = src.replace("b.webp", ".webp");
		src = src.replace("s.webp", ".webp");
        var href = th.attr("href");
		var thiss =  $(this).parent().parent().parent().parent().parent().parent();
        var imgpro = thiss.find(".left_pics img");
        imgpro.attr("src", src);
        src = src.replace("b.jpg", ".jpg");
        src = src.replace("b.webp", ".webp");
        thiss.find(".left_pics a").attr("href", src);
    });
	$("body").on("click", ".etw_language>ul>li>span", function() {             
        if ($(window).width() <=992) {
   			$(".etw_language>ul>li>ul").toggle();
  		}
     	return false;
    });
 	$(window).resize(function() {
     	if ($(window).width() >992) {
    		$("body").find(".etw_language>ul>li>ul").removeAttr("style","");
   		}
    });
    if ($(".owl-carousel1").length > 0) {
        $(".owl-carousel1").owlCarousel({
             loop:true,
             margin:20,
             autoplay:true,
             autoplayTimeout:6000,
             responsive:{
                 0:{
                     items:1
                 },
                 480:{
                     items:2
                 },
                 600:{
                     items:3
                 },
                 1000:{
                     items:4
                 }
             }
           });
     }
   
    if ($(".owl-carousel").length > 0) {
        $(".owl-carousel").owlCarousel({
             loop:true,
             margin:20,
             autoplay:true,
             autoplayTimeout:6000,
             responsive:{
                 0:{
                     items:1
                 },
                 480:{
                     items:2
                 },
                 600:{
                     items:2
                 },
                 1000:{
                     items:3
                 }
             }
           });
     }
     
    

});

var navEl = $("#header");
    $(window).scroll(function (event) {
        var scrollTop = $(window).scrollTop();
        var bodyScrollHeight = document.body.scrollHeight;
        if (scrollTop >= 100) {
            // && bodyScrollHeight >= 500
            navEl.addClass("nav-fixed");
        } else {
            navEl.removeClass("nav-fixed");
        }
    }).trigger("scroll");;
function init() {
    if ($(window).width() > 767) {
        if ($("#etw_top").length == 0) {
            $("body").append('<div id="etw_top"><a class="icon-chevron-up"></a></div>');
        }
        $(document).scroll(function () {
            var scrollTop = $(document).scrollTop();
            if (scrollTop > 100) {
                $("#etw_top").show();
            }
            else {
                $("#etw_top").hide();
            }
        });
    }
}
init();
$("body").on("click", "#etw_top", function () {
    $('html,body').animate({ scrollTop: '0px' }, 800);
});

$("body").on("click", ".tab_li li", function() {
    var index = $(this).index();
    $(".tab_li li").removeClass("dq");
    $(".tab_li li").eq(index).addClass("dq");
    var h = 190;
    if (index > 0 && $(".tabfixed").length == 1) {
        h = 170;
    }
    var height = $(".pro_model").eq(index).offset().top - h;
    $("html,body").animate({scrollTop:height}, 500);
});

settab();

$(document).scroll(function() {
    if ($(window).width() > 991) {
        settab();
    }
});

function settab() {
    if ($(".tab_li").length > 0) {
        var scrollTop = $(window).scrollTop();
        var index = 0;
        var plength = $(".pro_model").length;
        for (var i = 0; i < plength; i++) {
            var n = i + 1;
            if ($(".pro_model").eq(n).length > 0) {
                var height1 = $(".pro_model").eq(i).offset().top - 180;
                var height2 = $(".pro_model").eq(n).offset().top - 180;
                if (scrollTop >= height1 && scrollTop < height2) {
                    index = i;
                    break;
                }
            } else {
                var height1 = $(".pro_model").eq(i).offset().top - 180;
                if (scrollTop >= height1) {
                    index = i;
                    break;
                }
            }
        }
        var height = $(".pro_model").eq(0).offset().top - 180;
        if (scrollTop > height) {
            $(".tab_li").addClass("tabfixed");
        } else {
            $(".tab_li").removeClass("tabfixed");
        }
        $(".tab_li li").removeClass("dq");
        $(".tab_li li").eq(index).addClass("dq");
    }
}
jQuery.get("menu-items.txt",function(data){
    var links=$(data);
    var dqlink=window.location.href;
    dqdocu = dqlink.replace("http://", "").replace("https://", "").replace(window.location.host, "").replace("/", "");
    dqdocu = dqdocu.replace("web/35/snk-nonwovenmachine.com/", "");
    if(dqdocu!=""){
        var dqls=links.find("a[href='"+dqdocu+"']");
		dqls.addClass("active");
		/*class*/
		if($("#quicknav ul li").length >2){
			 var hrefs = jQuery("#quicknav li").eq(2).find("a").attr("href"); 
		     if(hrefs != undefined){
				var dqlss=links.find("a[href='"+hrefs+"']");
				dqlss.addClass("active");
			 }
			 if($("#quicknav ul li").length >3){
				 var hrefss = jQuery("#quicknav li").eq(3).find("a").attr("href"); 
		         if(hrefs != undefined){
				    var dqlsss=links.find("a[href='"+hrefss+"']");
				    dqlsss.addClass("active");
			      }
			 }
		}
    }
    links.appendTo($("#menu-items"));
})

$(function () {
    var ww = $(window).width();
    if (ww>=992) {
        $(".home_aplication_box .context .item").hover(function () {
            $(this).stop().animate({
                "width": "45%",
            }, 500).siblings().stop().animate({
                "width": "13.75%",
            }, 500)
        })

        $(".home_aplication_box .context .item").mouseleave(function () {
            $(".home_aplication_box .context .item").stop().animate({
                "width": "20%",
            }, 500)
        })
        $(".home_aplication_box .context .item").click(function () {
            var _data = $(this).attr("data-name");
            $(".index2 .conLeft .item").removeClass("on")
            $(this).addClass("on")
        })
    }
    else if (ww<992) {
        $(".home_aplication_box .context .item").hover(function () {
            $(this).stop().animate({
                "height": "460px",
            }, 500).siblings().stop().animate({
                "height": "160px",
            }, 500)
        })

        $(".home_aplication_box .context .item").mouseleave(function () {
            $(".home_aplication_box .context .item").stop().animate({
                "height": "160px",
            }, 500)
        })
    }
})
jQuery(document).ready(function() {
	$("#etw_sidebar ul li .listmore").on('click',function(){
		var classstr = $(this).attr("class");
		if (classstr.indexOf("on") !== -1) {
			$(this).removeClass('on');
		    $(this).parent().parent().find(">ol").slideToggle();
        }
		else{
			$("#etw_sidebar ul>li>ol").removeClass('show');
		    $("#etw_sidebar ul>li>ol").hide();
		    $("#etw_sidebar .listmore").removeClass('on');
		    $(this).toggleClass('on');
		    $(this).parent().parent().find(">ol").slideToggle();
	   }												  
	   return false;
	});
    
  });
