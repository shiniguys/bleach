(self["webpackChunkgulp_min"] = self["webpackChunkgulp_min"] || []).push([["projects_sst_src_js_components_news_js"],{

/***/ "./projects/sst/src/js/components/news.js":
/*!************************************************!*\
  !*** ./projects/sst/src/js/components/news.js ***!
  \************************************************/
/***/ (() => {


$(".news-item").click(function() {
  if(!$(this).is('.active')) {
      $('.news-item').removeClass('active');
      $(this).addClass("active");
  }
})


// $(".news-underlist__item").click(function() {
//   if(!$(this).is('.active')) {
//       $('.news-underlist__item').removeClass('active');
//       $(this).addClass("active");
//   }
// })

const newsBtn = document.querySelectorAll('.news-underlist__btn');



Array.prototype.forEach.call(newsBtn, (elem) => {
  elem.addEventListener('click', () => {
    let perentItem = elem.parentElement;

    
  
    perentItem.classList.toggle('active');
  })
}) 




/***/ })

}]);
//# sourceMappingURL=projects_sst_src_js_components_news_js.js.map