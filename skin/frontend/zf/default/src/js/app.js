jQuery(document).foundation();
jQuery(document).ready(function () {

    // Alert-Box auto_close
    jQuery('.callout.messages').slideDown({
        duration: 1500,
        complete: function () {
            jQuery('.callout.messages').delay(7000).slideUp(1500);
        }
    });

    // Product page / wishlist - quantity increase/decrease
    jQuery('.quantity .input-group').append('<span class="input-group-label plus"><i id="add1" class="fa fa-plus" /></span>').prepend('<span class="input-group-label minus"><i id="minus1" class="fa fa-minus" /></span>');
    jQuery('.quantity .plus').click(function () {
        var currentVal = parseInt(jQuery(".qty").val());
        if (!currentVal || currentVal == "" || currentVal == "NaN") currentVal = 0;
        jQuery(".qty").val(currentVal + 1);
    });

    jQuery('.quantity .minus').click(function () {
        var currentVal = parseInt(jQuery(".qty").val());
        if (currentVal == "NaN") currentVal = 0;
        if (currentVal > 1) {
            jQuery(".qty").val(currentVal - 1);
        }
    });

    //Grid / List view
    jQuery('.view-mode strong.grid').after('<i class="fa fa-th"></i>');
    jQuery('.view-mode strong.list').after('<i class="fa fa-align-justify"></i>');

    jQuery('.view-mode a.list').each(function () {
        if (jQuery(this).text() == 'List')
            jQuery(this).text('');
        jQuery(this).append('<i class="fa fa-align-justify"></i>');
    });

    jQuery('.view-mode a.grid').each(function () {
        if (jQuery(this).text() == 'Grid')
            jQuery(this).text('');
        jQuery(this).append('<i class="fa fa-th"></i>');
    });

    //Scroll to top
    jQuery('.cookie-container').after('<div class="scrollToTop"></div>');
    jQuery('.scrollToTop').append('<i class="fa fa-chevron-circle-up fa-2x"></i>');
    jQuery(window).scroll(function () {
        if (jQuery(this).scrollTop() > 100) {
            jQuery('.scrollToTop').fadeIn();
        } else {
            jQuery('.scrollToTop').fadeOut();
        }
    });

    //Click event to scroll to top
    jQuery('.scrollToTop').click(function () {
        jQuery('html, body').animate({scrollTop: 0}, 800);
        return false;
    });

    //12 reasons
    jQuery(window).scroll(function () {
        if (jQuery(this).scrollTop() > 100) {
            jQuery('.reasons').fadeIn(2500);
        } else {
            jQuery('.reasons').fadeOut();
        }
    });

    //CookieBar
    jQuery('.cookie-container').cookieBar({
        closeButton: '.close-cookie'
    });

    //owl.carousel
    //Sort random function for owl.carousel
    function random(owlSelector) {
        owlSelector.children().sort(function () {
            return Math.round(Math.random()) - 0.5;
        }).each(function () {
            jQuery(this).appendTo(owlSelector);
        });
    }

    //Home Slider Top Products
    var $slider1 = jQuery('.top-products-slider');
    $slider1.on('initialize.owl.carousel', function (event) {
        var selector = jQuery('.top-products-slider');
        random(selector);
    });
    jQuery('.top-products-slider').owlCarousel({
        items: 6,
        loop: true,
        nav: false,
        dots: false,
        autoplay: true,
        autoplayTimeout: 5000,
        autoplayHoverPause: true,
        responsiveClass: true,
        responsive: {
            0: {items: 1},
            640: {items: 2},
            1024: {items: 4}
        }
    });
    //Home Slider credentials
    var $slider2 = jQuery('.credentials-slider');
    $slider2.on('initialize.owl.carousel', function (event) {
        var selector = jQuery('.credentials-slider');
        random(selector);
    });
    jQuery('.credentials-slider').owlCarousel({
        items: 8,
        loop: true,
        nav: false,
        dots: false,
        autoplay: true,
        autoplayTimeout: 5000,
        autoplayHoverPause: true,
        responsiveClass: true,
        responsive: {
            0: {items: 2},
            640: {items: 5},
            1024: {items: 8}
        }
    });

    //LightGallery
    jQuery('.product-img-box').lightGallery({
        iframeMaxWidth: '100%',
        selector: '.item',
        thumbnail: true,
        hash: false
    });

    jQuery('#password').focus(function () {
        jQuery('#toolTipPasswordStrength').css("display", "inline");
    });
    jQuery('#password').blur(function () {
        jQuery('#toolTipPasswordStrength').css("display", "none");
    });

    var options = {};
    options.ui = {
        container: "#toolTipPasswordStrength",
        viewports: {
            progress: "#passwordStrengthBar",
            verdict: ".progress-meter",
            errors: "#passwordStrengthHeadLine"
        },
        errorMessages: {
            wordLength: "Ihr Passwort ist zu kurz",
            wordNotEmail: "Keine Email",
            wordSimilarToUsername: "Kein Benutzername",
            wordTwoCharacterClasses: "Keine gleichen Wortgruppen",
            wordRepetitions: "Zu viele Wiederholungen",
            wordSequences: "Ihr Passwort enthält Sequenzen"
        },
        verdicts: ["zu kurz", "schwach", "gut", "stark", "sehr stark"],
        showVerdictsInsideProgressBar: true,
        scores: [16, 26, 38, 45],
        showErrors: true,
    };
    options.rules = {
        activated: {
            wordNotEmail: true,
            wordLength: true,
            wordSimilarToUsername: true,
            wordSequences: true,
            wordTwoCharacterClasses: true,
            wordRepetitions: true,
            wordLowercase: true,
            wordUppercase: true,
            wordOneNumber: true,
            wordThreeNumbers: true,
            wordOneSpecialChar: true,
            wordTwoSpecialChar: true,
            wordUpperLowerCombo: true,
            wordLetterNumberCombo: true,
            wordLetterNumberCharCombo: true
        }
    };
    options.common = {
        minChar: 8
    };
    jQuery('#password').pwstrength(options);

    //Product Option show more and less
    jQuery('ul.options-list').each(function () {
        var max = 2;
        if (jQuery(this).find("li").length > max) {
            jQuery(this)
                .find('li:gt(' + max + ')')
                .hide()
                .end()
                .append(
                    jQuery('<li class="show-more">weitere Optionen anzeigen</li>').click(function () {
                        jQuery(this).siblings(':hidden').show().end().remove();
                    })
                );
        }
    });

});
