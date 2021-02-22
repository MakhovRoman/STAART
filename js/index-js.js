
const windowSize = window.matchMedia('(min-width: 480px)');

function addFormLinks(windowSize) {
   let setup            = document.getElementsByClassName('setup')[0];
   let formLinks        = document.createElement('div');
   formLinks.className  = 'formLinks';
   formLinks.innerHTML  = '<a href="#">' + '<img src="images/Tablet/wb-tablete.png" id="Wildberries">' + '</a>' + '<a href="#">' + '<img src="images/Tablet/ozon-tablete.png" id="Ozon">' + '</a>' + '<a href="#">' + '<img src="images/Tablet/yandex-tablete.png" id="Yandex">' + '</a>' + '<a href="#">' + '<img src="images/Tablet/lamod-tablete.png" id="Lamoda">' + '</a>'+ '<a href="#">' + '<img src="images/Tablet/aliexpress-tablete.png" id="Aliexpress">' + '</a>' + '<a href="#">' + '<img src="images/Tablet/goods-tablete.png" id="Goods">' + '</a>' + '<div class="formLinksContacts">' + '<a href="tel:+79452202225">' + '+7 (495) 220-22-25' + '</a>' + '<a href="mailto:hello@staart.ru">' + 'hello@staart.ru' + '</a>' + '</div>';
   let removeFormLinks  = document.getElementsByClassName('formLinks')[0];
   if (windowSize.matches) {
      setup.insertAdjacentElement("afterbegin", formLinks);
   } else {
      setup.removeChild(removeFormLinks);
   }
}

addFormLinks(windowSize);
windowSize.addListener(addFormLinks);

//ниже приведен код слайдера

let viewport      = document.getElementById('viewport').offsetWidth;
let btnNext       = document.getElementById('next');
let btnPreview    = document.getElementById('preview');
let slider        = document.querySelector('div.slider');
let viewSliders   = document.querySelectorAll('div.viewSlide');
let viewSlide     = 0;

viewSliders[0].style.backgroundColor = "#7202bb";

btnNext.addEventListener('click', function() {
   viewSliders[viewSlide].style.backgroundColor = "#939393";
   if (viewSlide<2) {
      viewSlide++;
   } else {
      viewSlide = 0;
   }
   viewSliders[viewSlide].style.backgroundColor = "#7202bb";
   slider.style.left = -viewSlide * viewport + "px";
});

btnPreview.addEventListener('click', function() {
   viewSliders[viewSlide].style.backgroundColor = "#939393";
   if (viewSlide > 0) {
      viewSlide --;
   } else {
      viewSlide = 2;
   }
   viewSliders[viewSlide].style.backgroundColor = "#7202bb";
   slider.style.left = -viewSlide * viewport + "px";
});
