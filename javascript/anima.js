TweenMax.to(".l-mobic", 2, {
    delay: .6,
    opacity: 0,
    y: -60,
    ease: Expo.easeInOut
  })

  TweenMax.to(".overlay", 2, {
    delay: 1.6,
    top: "-100%",
    ease: Expo.easeInOut
  })

  TweenMax.from(".logo-mobic", 1, {
    delay: 3,
    opacity: 0,
    y: -100,
    ease: Expo.easeInOut
  })

  TweenMax.staggerFrom(".social-media a i", 1, {
    delay: 3,
    opacity: 0,
    x: -100,
    ease: Expo.easeInOut
  }, 0.08)

  TweenMax.from(".siguenos", 1, {
    delay: 3.4,
    opacity: 0,
    y: 100,
    ease: Expo.easeInOut
  })

  TweenMax.from(".texto-hero", 1, {
    delay: 3.8,
    opacity: 0,
    x: -100,
    ease: Expo.easeInOut
  })

  TweenMax.from(".btn-cta", 1, {
    delay: 4,
    opacity: 0,
    x: -100,
    ease: Expo.easeInOut
  })

  TweenMax.from(".btn-whatsapp", 1, {
    delay: 4.2,
    opacity: 0,
    x: -100,
    ease: Expo.easeInOut
  })

  TweenMax.from(".contacto-phone", 1, {
    delay: 4.4,
    opacity: 0,
    x: -100,
    ease: Expo.easeInOut
  })

  TweenMax.from(".contacto-mail", 1, {
    delay: 4.4,
    opacity: 0,
    x: -100,
    ease: Expo.easeInOut
  })

  TweenMax.from(".accesorios", 1, {
    delay: 4.6,
    opacity: 0,
    y: 100,
    ease: Expo.easeInOut
  })

  TweenMax.from(".accesorios-dos", 1, {
    delay: 4.6,
    opacity: 0,
    x: 100,
    ease: Expo.easeInOut
  })

  // cursor

  var cursor = $(".cursor"),
                follower = $(".cursor-follower");

            var posX = 0,
                posY = 0,
                mouseX = 0,
                mouseY = 0;

            TweenMax.to({}, 0.016, {
                repeat: -1,
                onRepeat: function() {
                    posX += (mouseX - posX) / 9;
                    posY += (mouseY - posY) / 9;

                    TweenMax.set(follower, {
                        css: {
                            left: posX - 20,
                            top: posY - 20
                        }
                    });

                    TweenMax.set(cursor, {
                        css: {
                            left: mouseX,
                            top: mouseY
                        }
                    });
                }
            });

            $(document).on("mousemove", function(e) {
                mouseX = e.pageX;
                mouseY = e.pageY;
            });

            $(".btn-cta").on("mouseenter", function() {
                cursor.addClass("active");
                follower.addClass("active");
            });

            $(".btn-cta").on("mouseleave", function() {
                cursor.removeClass("active");
                follower.removeClass("active");
            });

            $(".btn-whatsapp").on("mouseenter", function() {
                cursor.addClass("active");
                follower.addClass("active");
            });

            $(".btn-whatsapp").on("mouseleave", function() {
                cursor.removeClass("active");
                follower.removeClass("active");
            });

            $(".fa-facebook-f").on("mouseenter", function() {
                cursor.addClass("active");
                follower.addClass("active");
            });

            $(".fa-facebook-f").on("mouseleave", function() {
                cursor.removeClass("active");
                follower.removeClass("active");
            });

            $(".fa-instagram").on("mouseenter", function() {
                cursor.addClass("active");
                follower.addClass("active");
            });

            $(".fa-instagram").on("mouseleave", function() {
                cursor.removeClass("active");
                follower.removeClass("active");
            });