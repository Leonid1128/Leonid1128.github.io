

const $scrollDown = document.querySelector('#scrollDown');
const $scrollBy = document.querySelector('#scrollBy');
const $scrollUp = document.querySelector('#scrollUp');


$scrollDown.onclick = function (e) {
  e.preventDefault();
  scrollTo(0, 2000);
};
// при нажатии на #scrollBy
$scrollBy.onclick = function (e) {
  e.preventDefault();
  scrollBy({ top: 200, behavior: 'smooth' });
};
// при нажатии на ##scrollUp
$scrollUp.onclick = function (e) {
  e.preventDefault();
  scroll({ top: 0, behavior: 'smooth' });
};
