$('.first_slider').slick({
    dots: true,
    arrows: true,
    infinite: false,
    speed: 300,
    slidesToShow: 2,
    slidesToScroll: 1,
     prevArrow:"<button type='button' class='prev slick-prev'><img src='../assests/imgs/rightarrow.svg'></button>",
      nextArrow:"<button type='button' class='next slick-next'><img src='../assests/imgs/arrowfirst.svg'></button>",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 1.1,
          slidesToScroll: 1
        }
      },
      
    ]
  });

  $('.second_slider').slick({
    dots: true,
    arrows: true,
    infinite: true,
    speed: 300,
    slidesToShow: 2,
    rows: 0,
    slidesToScroll: 1,
    // centerMode: true,
     prevArrow:"<button type='button' class='prev slick-prev'><img src='../assests/imgs/rightarrow.svg'></button>",
      nextArrow:"<button type='button' class='next slick-next'><img src='../assests/imgs/arrowfirst.svg'></button>",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },

    ]
  });

  $('.third_slider').slick({
    dots: false,
    arrows: true,
    infinite: false,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 2,
    prevArrow:"<button type='button' class='prev slick-prev'><img src='../assests/imgs/rightarrow.svg'></button>",
    nextArrow:"<button type='button' class='next slick-next'><img src='../assests/imgs/arrowfirst.svg'></button>",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
        }
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 1.1,
          slidesToScroll: 1
        }
      },
      
    ]
  });
