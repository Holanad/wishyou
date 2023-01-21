ymaps.ready(function () {
    var myMap = new ymaps.Map('map', {
            center: [53.902284, 27.561831],
            zoom: 12
        }),

        // Создаём макет содержимого.
        MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
            '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
        ),

        myPlacemark = new ymaps.Placemark([53.937814, 27.487345], { //ТЦ «Arena city»,  пр-т Победителей, 84
            balloonContent: `
            <div class="map-block f-dc-center">
                <p>Пространство «DANDY LAND», <br> ул. Октябрьская, 19/4</p>
            <div>
            `,
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: '../assets/img/icon/mark/mark-orange.svg',
            // Размеры метки.
            iconImageSize: [245, 266],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [-120, -70],
           
        }),

        myPlacemarkTwo = new ymaps.Placemark([53.891099, 27.572931], { //Пространство «DANDY LAND», ул. Октябрьская, 19/4
            balloonContent: `
            <div class="map-block f-dc-center">
                <p>ТЦ «Arena city», <br>
                пр-т Победителей, 84</p>
            <div>
            `,
        }, {
            
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: '../assets/img/icon/mark/mark-blue.svg',
            // Размеры метки.
            iconImageSize: [245, 266],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [-120, -70],
           
        }),

        myPlacemarkThree = new ymaps.Placemark([53.915726, 27.569219], { //Бар-корт М11, пр-т Машерова, 11
            balloonContent: `
            <div class="map-block f-dc-center">
                <p>Бар-корт М11, пр-т Машерова, 11</p>
            <div>
            `,
        }, {
            
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: '../assets/img/icon/mark/mark-red.svg',
            // Размеры метки.
            iconImageSize: [245, 266],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [-120, -70],
           
        }),

        myPlacemarkFour = new ymaps.Placemark([53.850585, 27.433366], { //ТЦ «Diamond City», пересечение ул. Громова и 28 км
            balloonContent: `
            <div class="map-block f-dc-center">
                <p>ТЦ «Diamond City», пересечение <br> ул. Громова и 28 км</p>
            <div>
            `,
        }, {
            
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: '../assets/img/icon/mark/mark-laguna.svg',
            // Размеры метки.
            iconImageSize: [245, 266],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [-120, -70],
           
        });
        myMap.behaviors.disable('scrollZoom');
        myMap.geoObjects.add(myPlacemark);
        myMap.geoObjects.add(myPlacemarkTwo);
        myMap.geoObjects.add(myPlacemarkThree);
        myMap.geoObjects.add(myPlacemarkFour);

});
