document.addEventListener("DOMContentLoaded", function () {
    var scrollbar = document.body.clientWidth - window.innerWidth + 'px';
    console.log(scrollbar);
    document.querySelector('[href="#openModal"]').addEventListener('click', function () {
      document.body.style.overflow = 'hidden';
      document.querySelector('#openModal').style.marginLeft = scrollbar;
    });
    document.querySelector('[href="#close"]').addEventListener('click', function () {
      document.body.style.overflow = 'visible';
      document.querySelector('#openModal').style.marginLeft = '0px';
    });
  });

  var hiddenElement = document.querySelector(".sa");
  var hiddenElement1 = document.querySelector(".sa1");
  var btn = document.querySelector('.btn');
  
  function handleButtonClick() {

     hiddenElement.scrollIntoView({block: "start", behavior: "smooth"});
  }
  
  btn.addEventListener('click', handleButtonClick);
  
  function handleButtonClick1() {

    hiddenElement1.scrollIntoView({block: "start", behavior: "smooth"});
 }
 
 btn.addEventListener('click', handleButtonClick1);
 