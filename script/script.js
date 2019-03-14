const functionPage = () => {

    // FUNKCJA SCROLL
    const $doc = $(document);

    $doc.on("scroll", function () {
        if (window.innerWidth < 1024) {
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

            if (scrollPos > art1FromTop - 2 * art1Height) {
                $art1.addClass('active');
            }
            if (scrollPos > art2FromTop - 2 * art2Height) {
                $art2.addClass('active');
            }
            if (scrollPos > art3FromTop - 2 * art3Height) {
                $art3.addClass('active');
            }
            if (scrollPos > offerFromTop + offerHeight - windowHeight) {
                $offer.addClass('active');
            }
        } else { }
    })

    // SCROLLUJ DO... (MOBILE MODE) // ODKRYJ SEKCJĘ... (DESKTOP MODE)

    $("nav a").on("click", function () {
        if (window.innerWidth < 1024) {
            const goToSection = "." + $(this).attr('data-key');
            $("body, html").animate({
                scrollTop: $(goToSection).offset().top
            }, 300)

            $('#toggler').toggleClass('open');
            $('nav ul').toggleClass('open');

        } else {
            const main = document.querySelector("main");
            const sections = document.querySelectorAll("main section");
            const articles = document.querySelectorAll("article");
            const list = document.querySelectorAll(".offer ul li");
            const header = document.querySelector("header");

            sections.forEach(section => {
                main.classList.remove("active");
                section.classList.remove("active");
                header.classList.remove("active");
                if (section.classList.contains("aboutUs")) {
                    for (const article of articles) {
                        article.classList.remove("active");
                    }
                }
                if (section.classList.contains("offer")) {
                    for (const element of list) {
                        element.classList.remove("active");
                    }
                }
            });

            if ($(this).attr("data-key") == "start") {
                header.classList.add("active")
            } else {
                sections.forEach(section => {
                    if (section.classList.contains($(this).attr('data-key'))) {

                        section.classList.toggle("active");
                        main.classList.toggle("active")
                        if (section.classList.contains("aboutUs")) {
                            let time = 100;
                            for (const article of articles) {
                                setTimeout(() => {
                                    article.classList.add("active")
                                }, time);
                                time = time + 200;
                            }
                        }
                        if (section.classList.contains("offer")) {
                            let time = 100;
                            for (const element of list) {
                                setTimeout(() => {
                                    element.classList.add("active")
                                }, time);
                                time = time + 100;
                            }

                        }
                    } else { }
                });
            }
        }
    })
}

functionPage();