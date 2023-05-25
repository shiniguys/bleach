(self["webpackChunkgulp_min"] = self["webpackChunkgulp_min"] || []).push([["projects_sst_src_js_components_gallery_js"],{

/***/ "./projects/sst/src/js/components/gallery.js":
/*!***************************************************!*\
  !*** ./projects/sst/src/js/components/gallery.js ***!
  \***************************************************/
/***/ (() => {

popup = {
  init: function(){
    $('figure').click(function(){
      popup.open($(this));
    });
    
    $(document).on('click', '.popup img', function(){
      return false;
    }).on('click', '.popup', function(){
      popup.close();
    })
  },
  open: function($figure) {
    $('.gallery').addClass('pop');
    $('.body').addClass('hdn');
    $popup = $('<div class="popup" />').appendTo($('body'));
    $fig = $figure.clone().appendTo($('.popup'));
    $bg = $('<div class="bg" />').appendTo($('.popup'));
    $close = $('<div class="close"><svg><use xlink:href="#close"></use></svg></div>').appendTo($fig);
    $shadow = $('<div class="shadow" />').appendTo($fig);
    src = $('img', $fig).attr('src');
    $shadow.css({backgroundImage: 'url(' + src + ')'});
    $bg.css({backgroundImage: 'url(' + src + ')'});
    setTimeout(function(){
      $('.popup').addClass('pop');
    }, 10);
  },
  close: function(){
    $('.gallery, .popup').removeClass('pop');
    $('.body, .hdn').removeClass('hdn');
    setTimeout(function(){
      $('.popup').remove()
    }, 100);
  }
}

popup.init()




/***/ })

}]);
//# sourceMappingURL=projects_sst_src_js_components_gallery_js.js.map