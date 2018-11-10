/* stylelint-disable */
ymaps.ready(init);

function init() {
  var myMap = new ymaps.Map("imap", {
    // Центр карты, указываем коордианты
    center: [59.93840440689095, 30.319606100640502],
    // Масштаб, тут все просто
    zoom: 17,
    // Отключаем все элементы управления
    controls: []
  });

  var myGeoObjects = [];

  // Наша метка, указываем коордианты
  myGeoObjects = new ymaps.Placemark(
    [59.93864127971626, 30.32305005701561],
    {
      balloonContentBody: ""
    },
    {
      iconLayout: "default#image",
      // Путь до нашей картинки
      iconImageHref: "./img/map-pin.png",
      // Размер по ширине и высоте
      iconImageSize: [81, 70],
      // Смещение левого верхнего угла иконки относительно
      // её «ножки» (точки привязки).
      iconImageOffset: [-35, -35]
    }
  );

  var clusterer = new ymaps.Clusterer({
    clusterDisableClickZoom: false,
    clusterOpenBalloonOnClick: false
  });

  clusterer.add(myGeoObjects);
  myMap.geoObjects.add(clusterer);
  // Отлючаем возможность изменения масштаба
  myMap.behaviors.disable("scrollZoom");
}
