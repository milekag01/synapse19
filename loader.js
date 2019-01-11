  $(window).on('load',
  function()
          {
            $('.preloader').addClass('complete')
            $('.loader').addClass('complete1')
            setTimeout(function(){
              $('.preloader').css("z-index", "-1");
            }, 3500)
          }
  )
