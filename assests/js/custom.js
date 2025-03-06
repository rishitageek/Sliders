$('.first_slider').slick({
    dots: true,
    arrows: true,
    infinite: true,
    speed: 300,
    slidesToShow: 2,
    slidesToScroll: 1,
     prevArrow:"<button type='button' class='prev slick-prev'><img src='../assests/imgs/rightarrow.svg'></button>",
      nextArrow:"<button type='button' class='next slick-next'><img src='../assests/imgs/arrowfirst.svg'></button>",
    responsive: [
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
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
        breakpoint: 1025,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
           dots: false,
        }
      },

    ]
  });
  $('.third_slider').slick({
    dots: false,
    arrows: true,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 2,
    prevArrow:"<button type='button' class='prev slick-prev'><img src='../assests/imgs/rightarrow.svg'></button>",
    nextArrow:"<button type='button' class='next slick-next'><img src='../assests/imgs/arrowfirst.svg'></button>",
    responsive: [
      {
        breakpoint: 1440,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          infinite: true,
        }
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
        }
      },
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
        }
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
    ]
  });
  $('.fourth_slider').slick({
    dots: false,
    arrows: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    rows: 0,
    slidesToScroll: 1,
    prevArrow:"<button type='button' class='prev slick-prev'><img src='../assests/imgs/rightarrow.svg'></button>",
    nextArrow:"<button type='button' class='next slick-next'><img src='../assests/imgs/arrowfirst.svg'></button>",
    responsive: [
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      },
  

    ]
  });