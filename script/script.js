    // FUNKCJA SCROLL
    const $doc = $(document);

    $doc.on("scroll", function () {
        if (window.innerWidth < 1024) {
            // zmienne lokalne
            const $header = $('header');

            const $art1 = $('.art1');
            const $art2 = $('.art2');
            const $art3 = $('.art3');

            const $offer = $('.offer ul li');

            const scrollPos = $doc.scrollTop();
            const windowHeight = $(window).height();

            // header
            const headerHeight = $header.outerHeight();
            $header.css({
                'filter': 'grayscale(' + scrollPos / headerHeight * 1.5 + ')'
            });

            // aboutUs
            const art1FromTop = $art1.offset().top;
            const art1Height = $art1.outerHeight();

            const art2FromTop = $art2.offset().top;
            const art2Height = $art2.outerHeight();

            const art3FromTop = $art3.offset().top;
            const art3Height = $art3.outerHeight();

            // offer
            const offerFromTop = $offer.offset().top;
            const offerHeight = $offer.outerHeight();

            if (scrollPos < 10) {
                $art1.removeClass('active');
                $art2.removeClass('active');
                $art3.removeClass('active');
                $offer.removeClass('active');
            }

            if (scrollPos > art1FromTop + art1Height - windowHeight) {
                $art1.addClass('active');
            }
            if (scrollPos > art2FromTop + art2Height - windowHeight) {
                $art2.addClass('active');
            }
            if (scrollPos > art3FromTop + art3Height - windowHeight) {
                $art3.addClass('active');
            }
            if (scrollPos > offerFromTop + offerHeight - windowHeight) {
                $offer.addClass('active');
            }
        } else {}
    })

    // SCROLLUJ DO... (MOBILE MODE) // ODKRYJ SEKCJĘ... (DESKTOP MODE)

    $("nav a").on("click", function () {
        if (window.innerWidth < 1024) {
            const goToSection = "." + $(this).attr('data-key');
            $("body, html").animate({
                scrollTop: $(goToSection).offset().top
            }, 300)
        } else {
            const main = document.querySelector("main");
            const sections = document.querySelectorAll("main section");
            const $header = $('header');

            sections.forEach(section => {
                main.classList.remove("active");
                section.classList.remove("show");
                section.classList.remove("active")
                $header.removeClass("active");
            });

            if ($(this).attr("data-key") == "main") {
                setTimeout(function () {
                    $header.addClass("active")
                }, 500)
            } else {
                sections.forEach(section => {
                    if (section.classList.contains($(this).attr('data-key'))) {
                        setTimeout(showSection, 500)

                        function showSection() {
                            section.classList.toggle("active");
                            section.classList.toggle("show");
                            main.classList.toggle("active")
                        }
                    } else {}
                });
            }
        }
    })