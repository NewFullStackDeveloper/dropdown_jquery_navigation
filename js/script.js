


 $('nav li').hover(
   
  function() {

    $('ul', this).stop().slideDown(200);

  },

  function() {

    $('ul', this).stop().slideUp(200);

  }

);




/*

$('.site-nav > ul > .menu-item-has-children').click(function(e) {
  e.stopPropagation();
  $(this).toggleClass('sub-menu-open');
  var $el = $('ul',this);
  $('.site-nav > ul > li > .sub-menu').not($el).slideUp();
  $('.site-nav > ul > li > .sub-menu').not($el).parent().parent('li').removeClass('sub-menu-open');
  $el.stop(true, true).slideToggle(400);
 });
 */
