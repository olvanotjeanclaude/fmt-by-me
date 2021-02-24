// @ts-nocheck
$(document).ready((function() {
    //loading
    $('body').toggleClass('loaded');
    setTimeout(function() {
        $('body').addClass('loaded');
        $('h1').css('color', '#222222');
    }, 3000);

    //validation form
    var forms = document.getElementsByClassName('needs-validation');
    Array.prototype.filter.call(forms, function(form) {
        form.addEventListener('submit', function(event) {
            if (form.checkValidity() === false) {
                event.preventDefault();
                event.stopPropagation();
            }
            form.classList.add('was-validated');
        }, false);
    });
    let messageSuccess = $("#formSuccess").text();
    //After submit form
    if (messageSuccess != "") {
        var html = `<div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">Message du serveur :</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <p>Message envoyé avec succès !</p>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-primary" data-dismiss="modal">Fermer</button>
                </div>
            </div>
        </div>`
        $("#modalFormSent").append(html);
        $("#modalFormSent").modal("show");
    }


    //gallery 
    $('.gallery').magnificPopup({
        delegate: 'a',
        type: 'image',
        mainClass: 'mfp-img-mobile',
        gallery: {
            enabled: true,
            navigateByImgClick: true,
            preload: [0, 1],
            tPrev: 'Previous (Left arrow key)',
            tNext: 'Next (Right arrow key)',
            tCounter: '<span class="mfp-counter">%curr% sur %total%</span>'
        },
        image: {
            tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
            titleSrc: function(item) {
                var title = item.el.attr('title') ? item.el.attr('title') : '<small>Par membre du groupe</small>';
                return title;
            }
        },
        zoom: {
            enabled: true,
            duration: 300,
            easing: 'ease-in-out',
            opener: function(openerElement) {
                return openerElement.is('img') ? openerElement : openerElement.find('img');
            }
        }
    });

    $('.footer-gallery').magnificPopup({
        delegate: 'a',
        type: 'image',
        mainClass: 'mfp-img-mobile',
        gallery: {
            enabled: true,
            navigateByImgClick: true,
            preload: [0, 1],
            tPrev: 'Previous (Left arrow key)',
            tNext: 'Next (Right arrow key)',
            tCounter: '<span class="mfp-counter">%curr% sur %total%</span>'
        },
        image: {
            tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
            titleSrc: function(item) {
                var title = item.el.attr('title') ? item.el.attr('title') : '<small>Par membre du groupe</small>';
                return title;
            }
        },
        zoom: {
            enabled: true,
            duration: 300,
            easing: 'ease-in-out',
            opener: function(openerElement) {
                return openerElement.is('img') ? openerElement : openerElement.find('img');
            }
        }
    });



    var index = new Swiper('.swiper-container', {
        pagination: {
            el: '.swiper-pagination',
        },

        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        autoplay: {
            delay: 2000,
        },
        breakpoints: {
            // when window width is >= 320px
            768: {
                nextEl: '',
                prevEl: '',
            }
        }
    })

    $(".owl-carousel").owlCarousel({
        loop: true,
        margin: 30,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
                nav: false
            },
            600: {
                items: 2,
                nav: false
            },
            768: {
                items: 3,
                nav: false
            },
            1000: {
                items: 4,
                nav: false,
                loop: true
            }
        },
        autoplay: true,
        autoplayTimeout: 3000,
        autoplayHoverPause: true
    });

    new WOW().init();


    // Task Filter

    $("#category").change(function() {
        //  console.log("changed");
        $value = this.value.toLowerCase();
        var url = window.location.href;
        $urlBase = url.substring(0, url.lastIndexOf("?"));
        //console.log($urlBase);
        window.location.replace($urlBase + "?cat=" + $value);
        console.log(url);
    });
}))