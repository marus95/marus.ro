var main = document.querySelector('.fpage');
var nav = document.querySelector('.nav');



window.onscroll = function () {

    if (window.pageYOffset > (main.offsetHeight - nav.offsetHeight)) {
        nav.classList.remove('bottom-nav');
        nav.classList.add('top-nav');
    } else {
        nav.classList.add('bottom-nav');
        nav.classList.remove('top-nav');

    }
}


$(document).ready( function() {   

  $('.grid').isotope({
    itemSelector: '.grid-item',
  });
  
  // filter items on button click
  $('.filter-button-group').on( 'click', 'li', function() {
    var filterValue = $(this).attr('data-filter');
    $('.grid').isotope({ filter: filterValue });
    $('.filter-button-group li').removeClass('active');
    $(this).addClass('active');
  });
      })

      


    
      // EVENT HANDLERS
      $('.page-link').click(function() {
        var anchor = $(this).attr('dest');
        $('.link-wrap').removeClass('visible');
    
        $('nav span').removeClass('active');
        $('nav')
          .find('[dest="' + anchor + '"]')
          .addClass('active');
    
        $('html, body').animate(
          {
            scrollTop: $('#' + anchor).offset().top
          },
          100
        );
      });


$(document).ready( function() {   

  $('.grid').isotope({
    itemSelector: '.grid-item',
  });
  
  // filter items on button click
  $('.filter-button-group').on( 'click', 'li', function() {
    var filterValue = $(this).attr('data-filter');
    $('.grid').isotope({ filter: filterValue });
    $('.filter-button-group li').removeClass('active');
    $(this).addClass('active');
  });
      })

    