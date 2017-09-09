//首页

        var $ding = $('#ding');
        var $btnc = $('#ding button');
        $btnc.on('click',function(){
            $ding.hide();
        })
        var $ho = $('#header #boxx');
        var $boxx2=$('#header #boxx .boxx2');
        var $boxx3=$('#header #boxx .boxx3');
        var $boxx1=$('#header #boxx .boxx1');
        var $liss = $boxx3.children().children();
        console.log($lis);
        
        $ho.hover(function() {
            
            $boxx2.css('display','block');
            $boxx3.css('display','block');

        }, function() {
            $boxx2.css('display','none');
            $boxx3.css('display','none');
            $boxx1.css('display','none');
        });


        $liss[0].onmouseenter=function(){
            $liss[1].className='';
            $liss[0].className='on';
            $boxx2.css('display','block');
            $boxx1.css('display','none');
        }
        $liss[1].onmouseenter=function(){
            $liss[0].className='';
            $liss[1].className='on';
            $boxx1.css('display','block');
            $boxx2.css('display','none');
        }
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
        console.log($sp);
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
                console.log(index);
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
            },2500);
        }
               
        $sp.on("click",function(){
            clearInterval(adTimer);
            index  =   $(".page span").index(this);
            show(index);
            console.log(this);
            aup();
        }) 
  
        function show(index){
           
                $pic.eq(index).fadeIn(300).siblings('img').css('display','none');
                $sp.eq(index).addClass('active').siblings('span').removeClass();

               
          
             
        }
 
        var $downbox=$('.down_box');
        var $down=$('.down');
        var $zhe = $('#zhe');
        $down.mouseenter(function(event) {
            $downbox.show(200);
            $zhe.css('display','block');
        });
        $downbox.mouseleave(function(event) {
            $downbox.hide(200);
            $zhe.css('display','none');
        });

        var $lis =$('.lis');
        var $box = $('.lis .box');
        var $box2 = $('.lis .box2');
        console.log($lis.children());
        for(var i=0;i<$box.length;i++){
            console.log($($box[i]));
            $box[i].onmouseenter=function(){
                this.style.backgroundColor='#fff';
                var $b = $($box2[i])
                // this.style.display="block";
                console.log($(this).find('.box2'));
                var $son =$(this).find('.box2');
                $son.css('display','block');
                $zhe.css('display','block');
            }
            $box[i].onmouseleave=function(){
                this.style.backgroundColor='';
                 var $son =$(this).find('.box2');
                var $b = $($box2[i])
                $son.css('display','none');
                $zhe.css('display','none');
            }
        }

        var $imgs = $('.lunbox a img');
        console.log($imgs);
 
        $lun = $('.lunbox');

              $imgs.each(function(){
                $(this).hover(function() {
                    $(this).stop().animate({width:297*1.1,height:150*1.1},800)
                }, function() {
                    $(this).stop().animate({width:297,height:150},800)
                });
                
              });
       $tab1 = $('.inbo1 ul li');
       $imbox1 = $('.inbo1 .code1');
       $imbox2 = $('.inbo1 .code2');
       console.log($tab1);



       $tab1[0].onmouseenter=function(){
            $imbox1.css('display','block');
            $imbox2.css('display','none');
            $tab1[0].className='active';
            $tab1[1].className='';
       }
       $tab1[1].onmouseenter=function(){
            $imbox1.css('display','none');
            $imbox2.css('display','block');
            $tab1[0].className='';
            $tab1[1].className='active';
       }

       
       $tab2 = $('.inbo2 ul li');
       $imboxx1 = $('.inbo2 .code1');
       $imboxx2 = $('.inbo2 .code2');
       console.log($tab1);

       
       $tab2[0].onmouseenter=function(){
            $imboxx1.css('display','block');
            $imboxx2.css('display','none');
            $tab2[0].className='active';
            $tab2[1].className='';
       }
       $tab2[1].onmouseenter=function(){
            $imboxx1.css('display','none');
            $imboxx2.css('display','block');
            $tab2[0].className='';
            $tab2[1].className='active';
       }
       var $dianji = $('.foot_b .bot1 .dianji');
       var $coer = $('.foot_b .bot1 .coer');
       console.log($dianji);
       var i = 0;
       
       $dianji.on('click',function(){
        if(i==0){
            $coer.css('display','block');
            i=1;
        }else{
            $coer.css('display','none');i=0;
        }
       })