const stickyBlock = document.querySelector('.sticky');

function showStickyBlock() {
  stickyBlock.classList.add('show');
}

setTimeout(showStickyBlock, 500);

window.addEventListener("scroll", function () {
  stickyBlock.classList.remove('show');

  if(!stickyBlock.classList.contains('show')){
    setTimeout(showStickyBlock, 1500);
  }
 });


