$(document).ready(function() {
    function checkWidth() {
      var windowWidth = $('body').innerWidth();
      let setup           = document.getElementsByClassName('setup')[0];
      let formLinks       = document.createElement('div');
      formLinks.className = 'formLinks';
      formLinks.innerHTML = '<a href="#">' + '<img src="images/Tablet/wb-tablete.png">' + '</a>' + '<a href="#">' + '<img src="images/Tablet/ozon-tablete.png">' + '</a>' + '<a href="#">' + '<img src="images/Tablet/yandex-tablete.png">' + '</a>' + '<a href="#">' + '<img src="images/Tablet/lamod-tablete.png">' + '</a>'+ '<a href="#">' + '<img src="images/Tablet/aliexpress-tablete.png">' + '</a>' + '<a href="#">' + '<img src="images/Tablet/goods-tablete.png">' + '</a>' + '<div class="formLinksContacts">' + '<a href="tel:+79452202225">' + '+7 (495) 220-22-25' + '</a>' + '<a href="mailto:hello@staart.ru">' + 'hello@staart.ru' + '</a>' + '</div>';
      let removeFormLinks = document.getElementsByClassName('formLinks')[0];

      if (windowWidth > 480) {
        setup.insertAdjacentElement("afterbegin", formLinks);
        } else {
        if (removeFormLinks) {
        setup.removeChild(removeFormLinks);
        }
        }
    }

    checkWidth(); // проверит при загрузке страницы

    $(window).resize(function(){
      checkWidth(); // проверит при изменении размера окна клиента
    });
  });
