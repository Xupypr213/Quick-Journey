$(document).ready(function () {

  $(function(){
    $('.text-content-1').click(function(){
      $('.first-screen').fadeOut(1000);
      $(".second-screen").fadeIn(2000);
    });
  })


  $(function(){
    $('.button-circles1').click(function(){
      $('#kari-green').css({display: "none"});
      $('#kari-blue').css({display: "none"});
      $('#kari-red').css({display: "block"});
    });
  })

  $(function(){
    $('.button-circles2').click(function(){
      $('#kari-green').css({display: "none"});
      $('#kari-blue').css({display: "block"});
      $('#kari-red').css({display: "none"});
    });
  })

  $(function(){
    $('.button-circles3').click(function(){
      $('#kari-green').css({display: "block"});
      $('#kari-blue').css({display: "none"});
      $('#kari-red').css({display: "none"});
    });
  })



  $(function(){
    $('.button-circles1').click(function(){
      $('.text-content-2').css({color: "#CB5454"});
    });
  })

  $(function(){
    $('.button-circles2').click(function(){
      $('.text-content-2').css({color: "#4F66DC"});
    });
  })

  $(function(){
    $('.button-circles3').click(function(){
      $('.text-content-2').css({color: "#44DBA5"});
    });
  })



  $(function(){
    $('.butt').click(function(){
      $('#kari-red').css({color: "#C96262"});
    });
  })

  $(function(){
    $('.butt').click(function(){
      $('#kari-blue').css({color:"#4559C1"});
    });
  })

  $(function(){
    $('.butt').click(function(){
      $('#kari-green').css({color:"#44DBA5"});
    });
  })

  $(function(){
    $('.butt').click(function(){
      $('.second-screen').fadeOut(1000);
      $(".third-screen").fadeIn(0);
    });
  })

  $(function(){
    $('.sol').click(function(){
      $('.third-screen').fadeOut(500);
      $(".fourth-screen").fadeIn(0);
    });
  })

  $(function(){
    $('.sol-1').click(function(){
      $('.fourth-screen').fadeOut(500);
      $(".fifth-screen").fadeIn(0);
    });
  })

  $(function(){
    $('.sol-2').click(function(){
      $('.fifth-screen').fadeOut(1000);
      $(".sixth-screen").fadeIn(1000);
    });
  })


    // $(function(){
    //   $('.button-circles1').click(function(){
    //     $("#kari-red").fadeIn(1000);
    //     $('#kari-blue').fadeOut(1000);
    //     $("#kari-green").fadeOut(1000);
    //   });
    // })

    // $(function(){
    //   $('.button-circles2').click(function(){
    //     $("#kari-blue").fadeIn(1000);
    //     $('#kari-green').fadeOut(1000);
    //     $('#kari-red').fadeOut(1000);
    //   });
    // })

    // $(function(){
    //   $('.button-circles3').click(function(){
    //     $("#kari-green").fadeIn(1000);
    //     $('#kari-blue').fadeOut(1000);
    //     $('#kari-red').fadeOut(1000);
    //   });
    // })
  

});