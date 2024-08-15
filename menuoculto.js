 $(document).ready(function(){

          $('.sub-btn').click(function(){
            $(this).next('.sub-menu').slideToggle();
            $(this).find('.suspende').toggleClass('rotacao');
          });

          $('.menu-btn').click(function(){
            $('.barra').addClass('active');
            $('.menu-btn').css("visibility", "hidden");
          });

          $('.fecha-btn').click(function(){
            $('.barra').removeClass('active');
            $('.menu-btn').css("visibility", "visible");
          });

        });