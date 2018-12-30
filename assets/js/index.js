function welcome() {
  setTimeout(function () {
    $('.page0 .p1').removeClass('hide');
    $('.page0 .p1').addClass('bounceInDown');
  }, 500);
  setTimeout(function () {
    $('.page0 .p2').removeClass('hide');
    $('.page0 .p2').addClass('fadeIn');
  }, 1000);
  setTimeout(function () {
    $('.page0 .p3').removeClass('hide');
    $('.page0 .p3').addClass('bounceInDown');
  }, 500);
  setTimeout(function () {
    $('.page0 .p4').removeClass('hide');
    $('.page0 .p4').addClass('bounceInDown');
  }, 2000);
  setTimeout(function () {
    $('.page0 .p5').removeClass('hide');
    $('.page0 .p5').addClass('fadeInUp');
  }, 2000);
}

var playing = false;
var bgmElm = document.getElementById("bgm");

function switchPlay() {
  if (playing) {
    $('.music-btn').attr('src', 'assets/image/music-off.png')
    playing = false;
    bgmElm.pause();
  } else {
    $('.music-btn').attr('src', 'assets/image/music.png')
    playing = true;
    bgmElm.volume = 0.2;
    bgmElm.play();
  }
}

$('#show-map').click(function () {
  $('#map-modal').modal();
  $("#map-div").animate({
    scrollLeft: 150
  }, 'slow');
  $("#map-div").animate({
    scrollTop: 250
  }, 'slow');
});

$('#show-map2').click(function () {
  $('#map2-modal').modal();
  setTimeout(function () {
    $('img[usemap]').rwdImageMaps();
  }, 500);

});

var wrap = document.getElementById('wrap');
var slip = Slip(wrap, "y");
slip.webapp();
slip.end(function () {
  p = this.page;
  console.log(p);
  if (p === 1) {
    setTimeout(function () {
      $('.page1 .p1').removeClass('hide');
      $('.page1 .p1').addClass('bounceInDown');
    }, 500);
    setTimeout(function () {
      $('.page1 .p2').removeClass('hide');
      $('.page1 .p2').addClass('bounceInDown');
    }, 1000);
    setTimeout(function () {
      $('.page1 .p3').removeClass('hide');
      $('.page1 .p3').addClass('bounceIn');
    }, 1500);
  }
  if (p === 2) {
    setTimeout(function () {
      $('.page2 .p1').removeClass('hide');
      $('.page2 .p1').addClass('bounceIn');
    }, 500);
    setTimeout(function () {
      $('.page2 .p2').removeClass('hide');
      $('.page2 .p2').addClass('bounceIn');
    }, 1000);
  }
  if (p === 3) {
    setTimeout(function () {
      $('.page3 .p1').removeClass('hide');
      $('.page3 .p1').addClass('bounceInDown');
    }, 500);
    setTimeout(function () {
      $('.page3 .p2').removeClass('hide');
      $('.page3 .p2').addClass('bounceIn');
    }, 1000);
    setTimeout(function () {
      $('.page3 .p3').removeClass('hide');
      $('.page3 .p3').addClass('bounceInUp');
    }, 1500);
  }
  var four = false;
  if (p === 4 && !four) {
    four = true;
    $('.page4 img').removeClass('hide');
    $('.page4 img').addClass('bounce');
    setInterval(function () {
      $('.page4 img').addClass('bounce');
    }, 2000)
    setTimeout(function () {
      setInterval(function () {
        $('.page4 img').removeClass('bounce');
      }, 2000)
    }, 1000);
  }
});

bgmElm.oncanplay = function () {
  if (!playing) switchPlay();
}
document.addEventListener("WeixinJSBridgeReady", function () {
  if (!playing) switchPlay();
}, false);

$('#start').click(function () {
  if (!playing) switchPlay();
  slip.jump(1);
});
$('.music-btn').click(function () {
  switchPlay();
});


/*
!function(e,t){function n(){t.body?t.body.style.fontSize=12*o+"px":t.addEventListener("DOMContentLoaded",n)}function d(){var e=i.clientWidth/10;i.style.fontSize=e+"px"}var i=t.documentElement,o=e.devicePixelRatio||1;if(n(),d(),e.addEventListener("resize",d),e.addEventListener("pageshow",function(e){e.persisted&&d()}),o>=2){var a=t.createElement("body"),s=t.createElement("div");s.style.border=".5px solid transparent",a.appendChild(s),i.appendChild(a),1===s.offsetHeight&&i.classList.add("hairlines"),i.removeChild(a)}}(window,document);
*/
/*
var wid=document.body.clientWidth;
var hei=document.body.clientHeight;
var temp=hei/wid*5;
$('img').css('max-width',temp+'rem');
console.log (temp);
*/

(function (doc, win) {
  var docEl = doc.documentElement,
    resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
    recalc = function () {
      var clientHeight = docEl.clientHeight;
      console.log(clientHeight);
      if (!clientHeight) return;
      if (clientHeight <= 450) {
        docEl.style.fontSize = '10px';
      } else {
        docEl.style.fontSize = 20 * (clientHeight / 640) + 'px';
      }
    };

  if (!doc.addEventListener) return;
  win.addEventListener(resizeEvt, recalc, false);
  doc.addEventListener('DOMContentLoaded', recalc, false);
})(document, window);

var url;
$('#map2-div map area').click(function () {
  stid = $(this).attr('stid');
  console.log(stid);
  if (stid === '') {
    alert('链接尚未建立！');
  } else {
    if (stid === '0') {
      url = "https://clubs.qz5z.ren/wp-json/wp/v2/pages/245"; //stlhh
    } else {
      url = "https://clubs.qz5z.ren/wp-json/wp/v2/posts/" + stid;
    }
    $.ajax({
      type: "GET",
      url: url,
      dataType: "json",
      success: function (response) {
        title = response.title.rendered;
        content = response.content.rendered;
        title = title.replace(/clubs.qz5z.ren/g, 'clubs-cdn.qz5z.ren');
        content = content.replace(/clubs.qz5z.ren/g, 'clubs-cdn.qz5z.ren');
        $('#stName').html(title);
        $('#stContent').html(content);
        $('#incro-modal').modal();
      }
    });
  }
});