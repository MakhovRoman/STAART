//$(function() {
   // $('section:gt(1)').hide();
//});




let setup       = document.getElementsByClassName('setup')[0];
let formLinks   = document.createElement('div');
formLinks.className = 'formLinks';
formLinks.innerHTML = '<img src="images/Tablet/wb-tablete.png">' + '<img src="images/Tablet/ozon-tablete.png">' + '<img src="images/Tablet/yandex-tablete.png">' + '<img src="images/Tablet/lamod-tablete.png">' + '<img src="images/Tablet/aliexpress-tablete.png">' + '<img src="images/Tablet/goods-tablete.png">' + '<div>' + '<a href="tel:+79452202225">' + '+7 (495) 220-22-25' + '</a>' + '<a href="mailto:hello@staart.ru">' + 'hello@staart.ru' + '</a>' + '</div>';
setup.insertAdjacentElement("afterbegin", formLinks);
