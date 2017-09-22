//首页
// jQuery(function($){
// 
require(['config'],function(){
    require(['jquery','com','JAlunbo'],function($){

      var $corr = $('#nav .cont2017 .cor');
      var $corb = $('.floor .f_guessr .rel');
      // 轮播
      var $ban = $('#banner');
      var $pic=$('.pic img');
      var n = $pic.index();
      var index = 0;
      var adTimer;
      $pic.first().show().siblings('img').hide();
    
      var $page = $('<div class="page"></div>');
              for(var i=0;i<$pic.length;i++){
                  var $span = $('<span/>');
                  $span.text();
                  
                  $page.append($span);
              }
      var $ye = $('<div class="ye"></div>');

      var $sp =$page.children();
     
      $sp.first().addClass('active');
              $page.appendTo($ban);
      aup();
      var $qian=$('.qian');
      var $hou = $('.hou');
      var $dian = $('.dian');

      $dian.children().hover(function() {
          $dian.children().css('background-color','rgba(255,255,255,0.8)').css('color','black');
      }, function() {
          $dian.children().css('background-color','rgba(255,255,255,0.3)').css('color','#ddd');
      });
       
      $ban.mouseenter(function(event) {
          clearInterval(adTimer);
          $dian.children().show(500);
      });
      $ban.mouseleave(function(event) {
          clearInterval(adTimer);
          $dian.children().hide(500);
          aup();
      });

      $dian.children().on("click",function(e){
          clearInterval(adTimer);
          
          // console.log($e==$qian.get());
          if(e.target.classList.contains('qian')){
              index--;
              if(index<0){
                  index=$pic.length;
              }
              show(index); 
              
          }else if(e.target.classList.contains('hou')){
              index++;
              show(index);
              if(index>$pic.length){index=0};
          }
          aup();
      })
    
     
       
      function aup(){
          adTimer = setInterval(function(){
              show(index);
              index++;
              if(index==$pic.length){index=0}
          },3000);
      }
             
      $sp.on("click",function(){
          clearInterval(adTimer);
          index  =   $(".page span").index(this);
          show(index);
          
          aup();
      }) 
    
      function show(index){
         
              $pic.eq(index).fadeIn(300).animate({width:1550},2000).siblings('img').css('display','none').css('width','1500');
              $sp.eq(index).addClass('active').siblings('span').removeClass();

      }
    
     

      var $imgs = $('.lunbox a img');
    
    
      $lun = $('.lunbox');

            $imgs.each(function(){
              $(this).hover(function() {
                  $(this).stop().animate({width:297*1.1,height:150*1.1},800)
              }, function() {
                  $(this).stop().animate({width:297,height:150},800)
              });
              
            });
     
     
    
    
     
      an({
              container:['.JA'],
             imgs:['../img/4001.jpg','../img/4002.jpg','../img/4003.jpg','../img/4004.jpg'],width:400,height:375,dianj:true,duration:3000
         });
      an({
              container:['.SA'],

             imgs:['../img/4005.jpg','../img/4006.jpg','../img/4007.jpg','../img/4008.jpg'],width:400,height:375,dianj:true,duration:3000
         });
      an({
               container:['.YA'],

              imgs:['../img/4009.jpg','../img/40010.jpg','../img/40011.jpg','../img/40012.jpg'],width:400,height:375,dianj:true,duration:3000
          });
      
      
       
     var $zp = $('.cor_l .p1 img');
     var WI = $zp.outerWidth();
     var chrangV = 1.05*240;
     $zp.hover(function() {
          var index = $zp.index(this);
         $zp.eq(index).stop().animate({
          width:chrangV,
          height:chrangV,
          left:("-"+(0.05 * WI)/2),
          top:("-"+(0.05 * WI)/2)
         }, 600);
     }, function() {
          var index = $zp.index(this);
         $zp.eq(index).stop().animate({
          width:240,
          height:240,
          left:0,
          top:0
         }, 600)
     });
     var $xp = $('.cor .cor_r img');
     $xp.hover(function() {
         var index = $xp.index(this);
         $xp.eq(index).stop().animate({bottom:'-5px'},);
     }, function() {
         var index = $xp.index(this);
         $xp.eq(index).stop().animate({bottom:"-15px"}, );
     });
     var $tb = $('.conb .cob a img');
     var $wz = $('.conb .cob a i');
     var $xa = $('.conb .cob a');
     $wz.hide();
     $xa.hover(function(e) {
         var index = $xa.index(this);
         $tb.eq(index).hide();
         $wz.eq(index).show();
     }, function() {
         var index =$xa.index(this);
         $wz.eq(index).hide();
         $tb.eq(index).show();
     });
     var $zzt = $('.floor .floor_c a .pp1 img');
     var WW = $zzt.outerWidth();
     var HH = $zzt.outerHeight();
     var wV = 1.05*WW;
     var hV = 1.05*HH;

     $zzt.mouseenter(function(e){
          var index = $zzt.index(this);
         $zzt.eq(index).stop().animate({
              width:wV,
              height:hV,
              left:("-"+(0.05 * WW)/2),
              top:("-"+(0.05 * HH)/2)
          }, 600);
     })

      $zzt.mouseleave(function(event) {
          var index = $zzt.index(this);
          $zzt.eq(index).stop().animate({
              width:WW,
              height:HH,
              left:0,
              top:0
          }, 600);
      });
     var $optt = $('.f_guessr .rel a');
     $optt.hover(function() {
         var index = $optt.index(this);
         $optt.eq(index).siblings('a').css('opacity',"0.6");
     }, function() {
         var index = $optt.index(this);
         $optt.css('opacity',"1");
     });
      var $zht = $('.zuih a .ppp1 img');
      var WZ = $zht.outerWidth();
      var HZ = $zht.outerHeight();
      var wZ = 1.05*WZ;
      var hZ = 1.05*HZ;
      $zht.hover(function() {
          var index = $zht.index(this);
          $zht.eq(index).stop().animate({
              width:wZ,
              height:hZ,
              left:("-"+(0.05 * WZ)/2),
              top:("-"+(0.05 * HZ)/2)
          },600);
      }, function() {
          var index = $zht.index(this);
          $zht.eq(index).stop().animate({
              width:WZ,
              height:HZ,
              left:0,
              top:0
          }, 600);
      });
      // 楼梯
      var $louti = $('.louti .l_wrap');
      var $loutiItem = $louti.find('a');
      $louceng = $('.louceng');
      $(window).on('scroll',function(){
          var scrollTop = $(window).scrollTop();

          if(scrollTop>800){
              $louti.fadeIn();
          }else{
              $louti.fadeOut();
          }

          $louceng.each(function(idx,ele){
              if(scrollTop >= $(ele).offset().top-$(ele).outerHeight()/2){
                  $loutiItem.eq(idx).addClass('active').siblings('a').removeClass('active');
              }
          })
      })
      
      $louti.on('click','a',function(){
          var targetScrollTop;
          var idx = $(this).index();
          targetScrollTop = $louceng.eq(idx).offset().top;
          $('html,body').stop().animate({'scrollTop':targetScrollTop},'slow');
      })
    
    var $cbl = $('#nav .cbl a');
    console.log($cbl.last());
    $cbl.hover(function() {
        var index = $cbl.index(this);
        $cbl.eq(index).find('span').stop().fadeIn();
        $cbl.eq(index).find('.spc3').stop().show();
        $corr.css('z-index','-11');
        $corb.css('z-index','-11');
    }, function() {
        $cbl.find('span').stop().hide(400);
        $cbl.find('.spc3').stop().hide();
        $corr.css('z-index','0');
        $corb.css('z-index','0');
    });

     var $backT = $cbl.last();
     $backT.on('click',function(){
          $('html,body').stop().animate({'scrollTop':0},'slow');
     })   
// })
          


    })
})
        

 
// })