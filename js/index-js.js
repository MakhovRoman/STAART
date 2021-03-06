
const windowSizeMedium  = window.matchMedia('(min-width: 480px)');

function addFormLinks(windowSizeMedium) {
   let setup            = document.getElementsByClassName('setup')[0];
   let formLinks        = document.createElement('div');
   formLinks.className  = 'formLinks';
   formLinks.innerHTML  =
   '<a href="#">' + '<picture>' +
                     '<source media="(max-width: 999px)" srcset="images/Tablet/wb-tablete.png">' +
                     '<source media="(min-width: 1000px)" srcset="images/Desktop/wb-desktop.png">' +
                     '<img src="images/Tablet/wb-tablete.png" id="Wildberries">' +
                     '</picture' + '</a>' +
   '<a href="#">' + '<picture>' +
                     '<source media="(max-width: 999px)" srcset="images/Tablet/ozon-tablete.png">' +
                     '<source media="(min-width: 1000px)" srcset="images/Desktop/ozon-desktop.png">' +
                     '<img src="images/Tablet/ozon-tablete.png" id="Ozon">' +
                     '</picture>' + '</a>' +
   '<a href="#">' +  '<picture>' +
                     '<source media="(max-width: 999px)" srcset="images/Tablet/yandex-tablete.png">' +
                     '<source media="(min-width: 1000px)" srcset="images/Desktop/yandex-desktop.png">' +
                     '<img src="images/Tablet/yandex-tablete.png" id="Yandex">' +
                     '</picture>' + '</a>' +
   '<a href="#">' +  '<picture>' +
                     '<source media="(max-width: 999px)" srcset="images/Tablet/lamod-tablete.png">' +
                     '<source media="(min-width: 1000px)" srcset="images/Desktop/lamoda-desktop.png">' +
                     '<img src="images/Tablet/lamod-tablete.png" id="Lamoda">' +
                     '</picture>' + '</a>'+
   '<a href="#">' +  '<picture>' +
                     '<source media="(max-width: 999px)" srcset="images/Tablet/aliexpress-tablete.png">' +
                     '<source media="(min-width: 1000px)" srcset="images/Desktop/aliexpress-desktop.png">' +
                     '<img src="images/Tablet/aliexpress-tablete.png" id="Aliexpress">' +
                     '</picture>' + '</a>' +
   '<a href="#">' +  '<picture>' +
                     '<source media="(max-width: 999px)" srcset="images/Tablet/goods-tablete.png">' +
                     '<source media="(min-width: 1000px)" srcset="images/Desktop/goods-desktop.png">' +
                     '<img src="images/Tablet/goods-tablete.png" id="Goods">' +
                     '</picture>' + '</a>' +
   '<div class="formLinksContacts">' + '<a href="tel:+79452202225">' + '+7 (495) 220-22-25' + '</a>' + '<a href="mailto:hello@staart.ru">' + 'hello@staart.ru' + '</a>' + '</div>';
   let removeFormLinks  = document.getElementsByClassName('formLinks')[0];
   if (windowSizeMedium.matches) {
      setup.insertAdjacentElement("afterbegin", formLinks);
   } else {
      setup.removeChild(removeFormLinks);
   }
}

addFormLinks(windowSizeMedium);
windowSizeMedium.addListener(addFormLinks);

//перенос ссылок из бургер-меню в хедер

const windowSizeLarge  =   window.matchMedia('(min-width: 1000px');

//перенос элементов бургер-меню в область навигации

function replaceNavLinks(windowSizeLarge) {
   let burgerBox        =  document.querySelector('ul.burger-box');
   let insertBurgerBox  =  burgerBox.cloneNode(true);
   let navMenu          =  document.getElementById('nav');
   let partner          =  document.getElementById('partner');
   let removeNavMenu    =  document.querySelector('nav>.burger-box');
   if (windowSizeLarge.matches) {
      partner.before(insertBurgerBox);
   } else {
      if (removeNavMenu) {
      removeNavMenu.remove();
      }
   }
}
replaceNavLinks(windowSizeLarge);
windowSizeLarge.addListener(replaceNavLinks);

//перенос электронки к телефонному номеру

function replaceEmail (windowSizeLarge) {
   let phone            =  document.getElementById('phone');
   let email            =  document.getElementById('email');
   let insertEmail      =  email.cloneNode(true);
   if (windowSizeLarge.matches) {
      phone.after(insertEmail);
      email.parentNode.remove();
   }
}
replaceEmail(windowSizeLarge);
windowSizeLarge.addListener(replaceEmail);

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

//плавное появление блоков при скроллинге

window.addEventListener('scroll', (e) => {
   let helpful    =  document.getElementById('helpful');
   let success    =  document.getElementById('success');
   let services   =  document.getElementById('services');
   let additional =  document.getElementById('additional');
   let firstLine  =  document.getElementsByClassName('firstLine');
   let secondLine =  document.getElementsByClassName('secondLine');
   let thirdLine  =  document.getElementsByClassName('thirdLine');
   let work       =  document.getElementById('work');
   let sentence   =  document.getElementById('sentence');
   let y = scrollY;
   if (y>300) {
      helpful.style.opacity="1";
      helpful.style.transition="1.3s";
      helpful.style.top="0";
   } else {
      helpful.style.opacity="0";
      helpful.style.top="300px";
   };
   if (y>850) {
      success.style.opacity="1";
      success.style.transition="1.3s";
      success.style.top="0";
   } else {
      success.style.opacity="0";
      success.style.top="300px";
   };
   if (y>1500) {
      services.style.opacity="1";
      services.style.transition="1.3s";
      services.style.top="0";
   } else {
      services.style.opacity="0";
      services.style.top="300px";
   };
   if (y>2200) {
      additional.style.opacity="1";
      additional.style.transition="1.3s";
      additional.style.top="0";
      for (let i=0; i < firstLine.length; i++) {
         firstLine[i].style.opacity="1";
         firstLine[i].style.transition="1.8s";
         firstLine[i].style.top="0";
      };
      for (let i=0; i < secondLine.length; i++) {
         secondLine[i].style.opacity="1";
         secondLine[i].style.transition="2.3s";
         secondLine[i].style.top="0";
      };
      for (let i=0; i<thirdLine.length; i++) {
         thirdLine[i].style.opacity="1";
         thirdLine[i].style.transition="2.8s";
         thirdLine[i].style.top="0";
      };
   } else {
      additional.style.opacity="0";
      additional.style.top="300px";
      for (let i=0; i < firstLine.length; i++) {
         firstLine[i].style.opacity="0";
         firstLine[i].style.top="500px";
      };
      for (i=0; i<secondLine.length; i++) {
         secondLine[i].style.opacity="0";
         secondLine[i].style.top="700px";
      };
      for (let i=0; i<thirdLine.length; i++) {
         thirdLine[i].style.opacity="0";
         thirdLine[i].style.top="900px";
      };
   };
   if (y>3000) {
      work.style.opacity="1";
      work.style.transition="1.3s";
      work.style.top="0";
   } else {
      work.style.opacity="0";
      work.style.top="500px";
   }
   if (y>4000) {
      sentence.style.opacity="1";
      sentence.style.transition="1.3s";
      sentence.style.top="0";
   } else {
      sentence.style.opacity="0";
      sentence.style.top="300px";
   }
});
