let vh = window.innerHeight * 0.01;
document.documentElement.style.setProperty('--vh', `${vh}px`);
window.addEventListener('resize', () => {
    document.documentElement.style.setProperty('--vh', `${vh}px`);
});

var myLazyLoad = new LazyLoad();

// jQuery function
$(document).ready(function() {
    // accordionFaq
    function accordionFaq() {
        $(".faq-item-head").click(function(){
            $(this).toggleClass("open").next().slideToggle();
            $(".faq-item-head").not(this).removeClass("open").next().slideUp();
        });
    };
    accordionFaq();

    //datePickerCustom
    function datePickerCustom () {
        $('.rent-calendar').datepicker({
          language: 'ru',        
          onSelect: function(dateText, inst) { 
            $('.rent-form-date').find('input').val(dateText)
          }
        });
        $('.datepicker--nav-action').click(function () {
            $('.datepicker--cell').removeClass('-selected-')
        })
        let now = new Date();
        let month = (now.getMonth() + 1);               
        let day = now.getDate();
        if (month < 10) 
            month = "0" + month;
        if (day < 10) 
            day = "0" + day;
        var today =day + '.' + month + '.' + now.getFullYear();
        $('.rent-form-date').find('input').val(today)
        $('#datePicker').val(today);

    };
    datePickerCustom()

    function switchFormLanding() {
        $('.rent-form-switch-inner').click(function () {
            if($(this).parent().hasClass('email')) {
                $(this).parent().removeClass('email');
                $(this).parent().addClass('phone');               
            } else {
                $(this).parent().removeClass('phone');
                $(this).parent().addClass('email');
            }
        })
    }
    switchFormLanding()

    //Бургер меню
    function headerBurger (){
        $('.header-burger').click(function () {
            $('.header-burger').toggleClass('open');
            $('.header').toggleClass('active');
            $('.header-info').toggleClass('active');
            $('.intro').toggleClass('active');
            $('.header__text').toggleClass('active');
            if($('.header').hasClass('active')) {
                $('html').addClass('hidden');
            } else {
                $('html').removeClass('hidden');
            }
            if($('.header-burger').hasClass('open')) {
                $('.intro-bottom').css({'z-index': '1'})
            } else {
                $('.intro-bottom').css({'z-index': '10000'})
            }

        });
        $('.intro').after().click(function () {
            $('.header__text').removeClass('active');
            $('.intro').removeClass('active')
            $('.header-burger').removeClass('open');
            $('.header').removeClass('active');
            $('.header-info').removeClass('active');
            $('html').removeClass('hidden');
            $('.intro-bottom').css({'z-index': '1'})
        })
    };
    headerBurger();
    // Скролл по линкам
    function scrollLink() {
        $(".header-item__link, .footer-item__link").click(function() {
            var elementClick = $(this).attr("href")
            var destination = $(elementClick).offset().top;
            $('html').removeClass('hidden');
            $('.header-burger').removeClass('open');
            $('.header').removeClass('active');
            $('.header-info').removeClass('active');
            $('.intro').removeClass('active')
            $('.intro-bottom').css({'z-index': '10000'});
            jQuery("html:not(:animated),body:not(:animated)").animate({
              scrollTop: destination
            }, 1500);
            return false;
        });
    };
    scrollLink();
    
    //Валидации сайта
    
    function formValidate() {
        $('.rent-form-btn').click(function() {
            if ($('.rent-form-switch').hasClass('email')) {
                $('#rent-form').validate({
                    rules: {
                        email: {
                            required: true,
                            minlength: 4
                        },
                        name: {
                            required: true,
                            minlength: 4
                        },
                    },
                    messages: {
                        email: {
                            required: "Заполните поле",
                            minlength: "Должно быть не менее: 4 символa"
                        },
                        name: {
                            required: "Заполните поле",
                            minlength: "Должно быть не менее: 4 символa"
                        },
                    }
                });
            } else {
                $('#rent-form').validate({
                    rules: {
                        phone: {
                            required: true,
                            minlength: 4
                        },
                        name: {
                            required: true,
                            minlength: 4
                        },
                    },
                    messages: {
                        phone: {
                            required: "Заполните поле",
                            minlength: "Должно быть не менее: 4 символa"
                        },
                        name: {
                            required: "Заполните поле",
                            minlength: "Должно быть не менее: 4 символa"
                        },
                    }
                });
            }
        })

    };
    formValidate();   
});
