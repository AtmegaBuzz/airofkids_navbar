

$(document).ready(() => {

  $("#apps").on("click", () => {
    $(".navDownCont").slideToggle()

  })




})




// mobile responsive sidebar


$(document).ready(function () {
  $('.nav-button').click(function () {
    $('body').toggleClass('nav-open');
  });
});


// search icon

$(document).ready(() => {


  //  add translate depending on size of screen

  

  

  // toggle search
  $("#search").on("click", () => {
    $(".searchInput").toggle("display:inline-block")
  })




  // open close button
  $('#nav-icon2').click(function () {
    $(this).toggleClass('open');
  });


  // menu animation
  $('#hamburger').click(function () {

    $(this).toggleClass('animate');
    $('#msbo').on('click', function () {
      $('body').toggleClass('msb-x');
    });

  })


  // toggle sidebar

  $("#nav-icon2").on("click", () => {
    $("#accordian").slideToggle()
  })



  // mulitilevel sidebar functionality
  // -------multilevel-accordian-menu---------

  $("#accordian a").click(function () {
    var link = $(this);
    var closest_ul = link.closest("ul");
    var parallel_active_links = closest_ul.find(".active")
    var closest_li = link.closest("li");
    var link_status = closest_li.hasClass("active");
    var count = 0;

    closest_ul.find("ul").slideUp(function () {
      if (++count == closest_ul.find("ul").length) {
        parallel_active_links.removeClass("active");
        parallel_active_links.children("ul").removeClass("show-dropdown");
      }
    });

    if (!link_status) {
      closest_li.children("ul").slideDown().addClass("show-dropdown");
      closest_li.parent().parent("li.active").find('ul').find("li.active").removeClass("active");
      link.parent().addClass("active");
    }
  })

  
  var m = false;
  function googleTranslateElementInit() {
      new google.translate.TranslateElement({pageLanguage: 'en'}, 'google_translate_element');
      new google.translate.TranslateElement({pageLanguage: 'en'}, 'google_translate_element1');
      setTimeout(function(){
          if (jQuery( window ).width() < 768){
              m = true;
              jQuery('#google_translate_element').detach().appendTo('#translate_div_mobile');                            
          }
          else if (jQuery( window ).width() > 768){
              m = true;
              jQuery('#google_translate_element').detach().appendTo('#translate_div');                            
          }
      }, 1000);
  }



});


