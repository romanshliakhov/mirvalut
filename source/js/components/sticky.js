const stickyBlock = document.querySelector('.sticky');

function showStickyBlock() {
  stickyBlock.classList.add('show');
}

setTimeout(showStickyBlock, 500);

window.addEventListener("scroll", function () {
  stickyBlock.classList.toggle("show");

  let timeoutId = setTimeout(showStickyBlock, 3000);

  clearTimeout(timeoutId, 500);

  //  clearTimeout($.data(this, 'scrollTimer'));
  //    $.data(this, 'scrollTimer', setTimeout(function() {
  //      $(stickyBlock).fadeIn();
  //    }, 550));
 });


