$(document).ready(function(){
    
    $('.servis_down').click(function(){
        $('.servis_down,.servis_block_anim').toggleClass('servis_active');
    })
    $('.servis_down').click(function(){
        $('.img_text_servis').toggleClass('servis_active');
    })

    $('.servis_down1').click(function(){
        $('.servis_down1,.servis_block_anim1').toggleClass('servis_active1');
    })
    $('.servis_down1').click(function(){
        $('.img_text_servis1').toggleClass('servis_active1');
    })
    $('.servis_down2').click(function(){
        $('.servis_down2,.servis_block_anim2').toggleClass('servis_active2');
    })
    $('.servis_down2').click(function(){
        $('.img_text_servis2').toggleClass('servis_active2');
    });
    $('.servis_down3').click(function(){
        $('.servis_down3,.servis_block_anim3').toggleClass('servis_active3');
    })
    $('.servis_down3').click(function(){
        $('.img_text_servis3').toggleClass('servis_active3');
    });
    $('.servis_down4').click(function(){
        $('.servis_down4,.servis_block_anim4').toggleClass('servis_active4');
    })
    $('.servis_down4').click(function(){
        $('.img_text_servis4').toggleClass('servis_active4');
    });
    // slider
    // вверхняя кнопка
    $('.aliment_icon1').click(function(){    
        $('.aliment_box').addClass('aliment_true');
    });
    $('.aliment_icon1').click(function(){ 
        $('.aliment_box3').addClass('aliment_true_active');
    });
    $('.aliment_icon1').click(function(){ 
        $('.aliment_box2').addClass('aliment_true_active');
    });


    // низ кнопка
    $('.aliment_icon').click(function(){ 
        $('.aliment_box3').removeClass('aliment_true_active');
    });
    $('.aliment_icon').click(function(){ 
        $('.aliment_box').removeClass('aliment_true');
    });
    $('.aliment_icon').click(function(){ 
        $('.aliment_box2').removeClass('aliment_true_active');
    });

    //Slider
    $('.slider_item').slick({
        arrows: false,
        slidesToShow: 3,
        centerMode:true,
        variableWidth: true
      
    });

});