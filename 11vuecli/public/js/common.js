/*
 *クリックするとトップへ移動する
 */
$(function() {
  var topBtn = $('#page-top');
  topBtn.hide();
  //スクロールが100に達したらボタン表示
  $(window).scroll(function() {
    if ($(this).scrollTop() > 100) {
      topBtn.fadeIn();
    } else {
      topBtn.fadeOut();
    }
  });
  //スクロールしてトップ
  topBtn.click(function() {
    $('body,html').animate(
      {
        scrollTop: 0
      },
      500
    );
    return false;
  });
});

/*
 *スクロールで可視状態になった際の表示
 */
$(function() {
  function animation() {
    $('.fadeInUp').each(function() {
      //ターゲットの位置を取得
      var target = $(this).offset().top;
      //スクロール量を取得
      var scroll = $(window).scrollTop();
      //ウィンドウの高さを取得
      var windowHeight = $(window).height();
      //ターゲットまでスクロールするとフェードインする
      // console.log('現在のウィンドウの高さ', target - windowHeight);
      // console.log('スクロール', scroll);
      if (scroll > target - windowHeight + 150) {
        $(this).css('opacity', '1');
        $(this).css('transform', 'translateY(0)');
      } else {
        $(this).css('opacity', '0');
        $(this).css('transform', 'translateY(20)');
      }
    });
  }
  animation();
  $(window).scroll(function() {
    animation();
  });
});

/*
 *トップmessageの表示速度
 */
$(function() {
  // リストを非表示
  $('ul.message li').hide();
  // 繰り返し処理
  $('ul.message li').each(function(i) {
    // 遅延させてフェードイン
    $(this)
      .delay(3300 * i)
      .fadeIn(2000)
      .css('transition', 'translateY(20)');
  });
});

/* 
フレックススライダーを使用してトップ画面の画像差し替えをする
*/
$(function() {
  $('.flexslider').hide();
  $('.flexslider')
    .fadeIn(1500)
    .css('transition', 'translateY(20)');
  $('.flexslider').flexslider({
    animation: 'fade',
    animationLoop: false,
    slideshowSpeed: 3300,
    animationSpeed: 600
    // initDelay: 1000
  });
});

/* 
8秒後にハンコが回転して出力される
*/
$(function() {
  $('.checkmark').css({ opacity: '0' });
  setTimeout(function() {
    $('.checkmark')
      .stop()
      .animate(
        { opacity: '1' },
        {
          duration: 2000,
          step: function(now) {
            $(this).css({ transform: 'rotateY(' + now * 1080 + 'deg)' });
          }
        },
        2000
      );
  }, 8000);
});

/* 
ロード画面
*/
$(function() {
  var h = $(window).height();

  $('section').css('display', 'none');
  $('#loader-bg ,#loader')
    .height(h)
    .css('display', 'block');
});

$(window).load(function() {
  //全ての読み込みが完了したら実行
  $('#loader-bg')
    .delay(900)
    .fadeOut(800);
  $('#loader')
    .delay(600)
    .fadeOut(300);
  setTimeout(function() {
    $('section')
      .delay(10000)
      .css('display', 'block');
    // console.log('入った');
  }, 1000);
});

//10秒たったら強制的にロード画面を非表示
$(function() {
  setTimeout('stopload()', 10000);
});

function stopload() {
  $('#wrap').css('display', 'block');
  $('#loader-bg')
    .delay(900)
    .fadeOut(800);
  $('#loader')
    .delay(600)
    .fadeOut(300);
}

/* 
スクロールの幅により枠の長さが変動する
*/
$(function() {
  $(window).scroll(function() {
    var scroll = $(window).scrollTop();

    $('.sample').css({
      width: 40 + scroll + 'px'
    });
    $('.sample2').css({
      left: 1400 - scroll + 'px'
    });
    /* brand */
    $('.brand-color-left').css({
      width: -1500 + scroll + 'px'
    });
    $('.brand-color-right').css({
      left: 2800 - scroll + 'px'
    });

    // console.log(scroll);

    // console.log('確認中', scroll);
  });
});
