let IndexComponent = {
  name: "index",
  data: () => ({
    sliderOptions: {
      productsSlick: {
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        infinite: true,
        speed: 300,
        dots: false,
        arrows: true,
        // appendArrows: $nav ? $nav : false,
        responsive: [
          {
            breakpoint: 991,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
            },
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            },
          },
        ],
      },
    },
products:[
    {
        name: "PC",
        price: "10000",
        old_price: "9900",
        color: "black",
        quantity: "100",
        stars: "5",
        category: "PC",
        description: "Офигенный комп",
        details: "Мощный комп",
        sales: "-10%",
        reviews: "10",
    },
    {
        name: "НЕPC",
        price: "НЕ10000",
        old_price: "НЕ9900",
        color: "НЕblack",
        quantity: "НЕ100",
        stars: "НЕ5",
        category: "НЕPC",
        description: "НЕОфигенный комп",
        details: "НЕМощный комп",
        sales: "-20%",
        reviews: "НЕ10",
    },
    {
        name: "PC",
        price: "10000",
        old_price: "9900",
        color: "black",
        quantity: "100",
        stars: "5",
        category: "PC",
        description: "Офигенный комп",
        details: "Мощный комп",
        sales: "-10%",
        reviews: "10",
    },
    {
        name: "НЕPC",
        price: "НЕ10000",
        old_price: "НЕ9900",
        color: "НЕblack",
        quantity: "НЕ100",
        stars: "НЕ5",
        category: "НЕPC",
        description: "НЕОфигенный комп",
        details: "НЕМощный комп",
        sales: "-20%",
        reviews: "-20%",
    },
    {
        name: "PC",
        price: "10000",
        old_price: "9900",
        color: "black",
        quantity: "100",
        stars: "5",
        category: "PC",
        description: "Офигенный комп",
        details: "Мощный комп",
        sales: "-10%",
        reviews: "10",
    },
]

  }),
  methods: {
    changePage(page) {
      this.$emit("changepage", page);
    },
    initSlider() {
      $(".products-slick").slick(this.sliderOptions.productsSlick);
    },
  },
  mounted() {
    this.initSlider();
  },
  template: `
        <div>
            <header>
                <!-- TOP HEADER -->
                <div id="top-header">
                    <div class="container">
                        <ul class="header-links pull-left">
                            <li><a href="#"><i class="fa fa-phone"></i>  +7-911-073-94-75</a></li>
                            <li><a href="#"><i class="fa fa-envelope-o"></i> niki_2023@mail.ru</a></li>
                            <li><a href="#"><i class="fa fa-map-marker"></i> Phuket</a></li>
                        </ul>
                        <ul class="header-links pull-right">
                            <li><a href="#"><i class="fa fa-dollar"></i> USD</a></li>
                            <li><a href="#"><i class="fa fa-user-o"></i> Личный кабинет</a></li>
                        </ul>
                    </div>
                </div>

                <div id="header">
                    <!-- container -->
                    <div class="container">
                        <!-- row -->
                        <div class="row">
                            <!-- LOGO -->
                            <div class="col-md-3">
                                <div class="header-logo">
                                    <a href="#" class="logo">
                                        <img src="./img/logo.png" alt="">
                                    </a>
                                </div>
                            </div>
                            <!-- /LOGO -->

                            <!-- SEARCH BAR -->
                            <div class="col-md-6">
                                <div class="header-search">
                                    <form>
                                        <select class="input-select">
                                            <option value="0">Все категории</option>
                                            <option value="1">Категория 1</option>
                                            <option value="1">Категория 2</option>
                                        </select>
                                        <input class="input" placeholder="Введите товар">
                                            <button class="search-btn">Поиск</button>
                                    </form>
                                </div>
                            </div>
                            <!-- /SEARCH BAR -->

                            <!-- ACCOUNT -->
                            <div class="col-md-3 clearfix">
                                <div class="header-ctn">
                                    <!-- Wishlist -->
                                    <div>
                                        <a href="#">
                                            <i class="fa fa-heart-o"></i>
                                            <span>Любимое</span>
                                            <div class="qty">2</div>
                                        </a>
                                    </div>
                                    <!-- /Wishlist -->

                                    <!-- Cart -->
                                    <div class="dropdown">
                                        <a class="dropdown-toggle" data-toggle="dropdown" aria-expanded="true">
                                            <i class="fa fa-shopping-cart"></i>
                                            <span>Корзина</span>
                                            <div class="qty">3</div>
                                        </a>
                                        <div class="cart-dropdown">
                                            <div class="cart-list">
                                                <div class="product-widget">
                                                    <div class="product-img">
                                                        <img src="./img/product01.png" alt="">
                                                    </div>
                                                    <div class="product-body">
                                                        <h3 class="product-name"><a href="#">product name goes here</a></h3>
                                                        <h4 class="product-price"><span class="qty">1x</span>$980.00</h4>
                                                    </div>
                                                    <button class="delete"><i class="fa fa-close"></i></button>
                                                </div>

                                                <div class="product-widget">
                                                    <div class="product-img">
                                                        <img src="./img/product02.png" alt="">
                                                    </div>
                                                    <div class="product-body">
                                                        <h3 class="product-name"><a href="#">product name goes here</a></h3>
                                                        <h4 class="product-price"><span class="qty">3x</span>$980.00</h4>
                                                    </div>
                                                    <button class="delete"><i class="fa fa-close"></i></button>
                                                </div>
                                            </div>
                                            <div class="cart-summary">
                                                <small>3 Предмета(ов) выбрано</small>
                                                <h5>Общая стоимость: $2940.00</h5>
                                            </div>
                                            <div class="cart-btns">
                                                <a href="#">Корзина</a>
                                                <a href="#">Оплата<i class="fa fa-arrow-circle-right"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                    <!-- /Cart -->

                                    <!-- Menu Toogle -->
                                    <div class="menu-toggle">
                                        <a href="#">
                                            <i class="fa fa-bars"></i>
                                            <span>Меню</span>
                                        </a>
                                    </div>
                                    <!-- /Menu Toogle -->
                                </div>
                            </div>
                            <!-- /ACCOUNT -->
                        </div>
                        <!-- row -->
                    </div>
                    <!-- container -->
                </div>
                <!-- /MAIN HEADER -->
            </header>
            <!-- /HEADER -->

            <!-- NAVIGATION -->
            <nav id="navigation">
                <!-- container -->
                <div class="container">
                    <!-- responsive-nav -->
                    <div id="responsive-nav">
                        <!-- NAV -->
                        <ul class="main-nav nav navbar-nav">
                            <li class="active"><a href="#">Главная</a></li>
                            <li><a href="#">Горячие предложения</a></li>
                            <li><a href="#">Категории</a></li>
                            <li><a href="#">Ноутбуки</a></li>
                            <li><a href="#">Телефоны</a></li>
                            <li><a href="#">Камерны</a></li>
                            <li><a href="#">Акксесуары</a></li>
                        </ul>
                        <!-- /NAV -->
                    </div>
                    <!-- /responsive-nav -->
                </div>
                <!-- /container -->
            </nav>
            <!-- /NAVIGATION -->

            <!-- SECTION -->
            <div class="section">
                <!-- container -->
                <div class="container">
                    <!-- row -->
                    <div class="row">
                        <!-- shop -->
                        <div class="col-md-4 col-xs-6">
                            <div class="shop">
                                <div class="shop-img">
                                    <img src="./img/shop01.png" alt="">
                                </div>
                                <div class="shop-body">
                                    <h3>Колекция<br>Ноутбуков</h3>
                                    <a href="#" class="cta-btn">Перейти<i class="fa fa-arrow-circle-right"></i></a>
                                </div>
                            </div>
                        </div>
                        <!-- /shop -->

                        <!-- shop -->
                        <div class="col-md-4 col-xs-6">
                            <div class="shop">
                                <div class="shop-img">
                                    <img src="./img/shop03.png" alt="">
                                </div>
                                <div class="shop-body">
                                    <h3>Коллекция<br>Акксусуаров</h3>
                                    <a href="#" class="cta-btn">Перейти<i class="fa fa-arrow-circle-right"></i></a>
                                </div>
                            </div>
                        </div>
                        <!-- /shop -->

                        <!-- shop -->
                        <div class="col-md-4 col-xs-6">
                            <div class="shop">
                                <div class="shop-img">
                                    <img src="./img/shop02.png" alt="">
                                </div>
                                <div class="shop-body">
                                    <h3>Коллекция<br>Камер</h3>
                                    <a href="#" class="cta-btn">Перейти<i class="fa fa-arrow-circle-right"></i></a>
                                </div>
                            </div>
                        </div>
                        <!-- /shop -->
                    </div>
                    <!-- /row -->
                </div>
                <!-- /container -->
            </div>
            <!-- /SECTION -->

            <!-- SECTION -->
            <div class="section">
                <!-- container -->
                <div class="container">
                    <!-- row -->
                    <div class="row">

                        <!-- section title -->
                        <div class="col-md-12">
                            <div class="section-title">
                                <h3 class="title">Новые продукты</h3>
                                <div class="section-nav">
                                    <ul class="section-tab-nav tab-nav">
                                        <li class="active"><a data-toggle="tab" href="#tab1">Ноутбуки</a></li>
                                        <li><a data-toggle="tab" href="#tab1">Смартфоны</a></li>
                                        <li><a data-toggle="tab" href="#tab1">Камеры</a></li>
                                        <li><a data-toggle="tab" href="#tab1">Акксесуары</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <!-- /section title -->

                        <!-- Products tab & slick -->
<div class="col-md-12">
              <div class="row">
                <div class="products-tabs">
                  <!-- tab -->
                  <div id="tab1" class="tab-pane active">
                    <div class="products-slick" data-nav="#slick-nav-1">
                      <!-- product -->
                      <div
                        v-for="(product, index) in products[0].data"
                        :key="index"
                        class="product"
                      >
                        <div class="product-img">
                          <img src="./img/product01.png" alt="" />
                          <div class="product-label">
                            <span class="sale">ИМЯ</span>
                            <span class="new">NEW</span>
                          </div>
                        </div>
                        <div class="product-body">
                          <p class="product-category">КАТЕГОРИЯ</p>
                          <h3 class="product-name">
                            <a href="#">ИМЯ</a>
                          </h3>
                          <h4 class="product-price">
                            1000
                            <del class="product-old-price"
                              >1100</del
                            >
                          </h4>
                          <div class="product-rating">
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                          </div>
                          <div class="product-btns">
                            <button class="add-to-wishlist">
                              <i class="fa fa-heart-o"></i
                              ><span class="tooltipp">добавить в любимое</span>
                            </button>
                            <button class="add-to-compare">
                              <i class="fa fa-exchange"></i
                              ><span class="tooltipp"
                                >добавить в сравнение</span
                              >
                            </button>
                            <button class="quick-view">
                              <i class="fa fa-eye"></i
                              ><span class="tooltipp">быстрый просмотр</span>
                            </button>
                          </div>
                        </div>
                        <div class="add-to-cart">
                          <button class="add-to-cart-btn">
                            <i class="fa fa-shopping-cart"></i>добавить в
                            корзину
                          </button>
                        </div>
                      </div>
                    </div>
                    <div id="slick-nav-1" class="products-slick-nav"></div>
                  </div>
                  <!-- /tab -->
                </div>
              </div>
            </div>
                        <!-- Products tab & slick -->
                    </div>
                    <!-- /row -->
                </div>
                <!-- /container -->
            </div>
            <!-- /SECTION -->

            <!-- HOT DEAL SECTION -->
            <div id="hot-deal" class="section">
                <!-- container -->
                <div class="container">
                    <!-- row -->
                    <div class="row">
                        <div class="col-md-12">
                            <div class="hot-deal">
                                <ul class="hot-deal-countdown">
                                    <li>
                                        <div>
                                            <h3>02</h3>
                                            <span>Дней</span>
                                        </div>
                                    </li>
                                    <li>
                                        <div>
                                            <h3>10</h3>
                                            <span>Часов</span>
                                        </div>
                                    </li>
                                    <li>
                                        <div>
                                            <h3>34</h3>
                                            <span>Минут</span>
                                        </div>
                                    </li>
                                    <li>
                                        <div>
                                            <h3>60</h3>
                                            <span>Секунд</span>
                                        </div>
                                    </li>
                                </ul>
                                <h2 class="text-uppercase">горячее предложение недели</h2>
                                <p>НОВАЯ КОЛЛЕКЦИЯ СО СКИДКОЙ ДО 50% </p>
                                <a class="primary-btn cta-btn" href="#">Перейти</a>
                            </div>
                        </div>
                    </div>
                    <!-- /row -->
                </div>
                <!-- /container -->
            </div>
            <!-- /HOT DEAL SECTION -->

            <!-- SECTION -->
            <div class="section">
                <!-- container -->
                <div class="container">
                    <!-- row -->
                    <div class="row">

                        <!-- section title -->
                        <div class="col-md-12">
                            <div class="section-title">
                                <h3 class="title">ХИТЫ ПРОДАЖ</h3>
                                <div class="section-nav">
                                    <ul class="section-tab-nav tab-nav">
                                        <li class="active"><a data-toggle="tab" href="#tab2">Ноутбуки</a></li>
                                        <li><a data-toggle="tab" href="#tab2">Смартфоны</a></li>
                                        <li><a data-toggle="tab" href="#tab2">Камеры</a></li>
                                        <li><a data-toggle="tab" href="#tab2">Акксесуары</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <!-- /section title -->

                        <!-- Products tab & slick -->
                        <div class="col-md-12">
                            <div class="row">
                                <div class="products-tabs">
                                    <!-- tab -->
                                    <div id="tab2" class="tab-pane fade in active">
                                        <div class="products-slick" data-nav="#slick-nav-2">
                                            <!-- product -->
                                            <div class="product">
                                                <div class="product-img">
                                                    <img src="./img/product06.png" alt="">
                                                        <div class="product-label">
                                                            <span class="sale">-30%</span>
                                                            <span class="new">NEW</span>
                                                        </div>
                                                </div>
                                                <div class="product-body">
                                                    <p class="product-category">Category</p>
                                                    <h3 class="product-name"><a href="#">product name goes here</a></h3>
                                                    <h4 class="product-price">$980.00 <del class="product-old-price">$990.00</del></h4>
                                                    <div class="product-rating">
                                                        <i class="fa fa-star"></i>
                                                        <i class="fa fa-star"></i>
                                                        <i class="fa fa-star"></i>
                                                        <i class="fa fa-star"></i>
                                                        <i class="fa fa-star"></i>
                                                    </div>
                                                    <div class="product-btns">
                                                        <button class="add-to-wishlist"><i class="fa fa-heart-o"></i><span class="tooltipp">добавить в любимое</span></button>
                                                        <button class="add-to-compare"><i class="fa fa-exchange"></i><span class="tooltipp">добавить в сравнение</span></button>
                                                        <button class="quick-view"><i class="fa fa-eye"></i><span class="tooltipp">быстрый просмотр</span></button>
                                                    </div>
                                                </div>
                                                <div class="add-to-cart">
                                                    <button class="add-to-cart-btn"><i class="fa fa-shopping-cart"></i>добавить в корзину</button>
                                                </div>
                                            </div>
                                            <!-- /product -->

                                            <!-- product -->
                                            <div class="product">
                                                <div class="product-img">
                                                    <img src="./img/product07.png" alt="">
                                                        <div class="product-label">
                                                            <span class="new">NEW</span>
                                                        </div>
                                                </div>
                                                <div class="product-body">
                                                    <p class="product-category">Category</p>
                                                    <h3 class="product-name"><a href="#">product name goes here</a></h3>
                                                    <h4 class="product-price">$980.00 <del class="product-old-price">$990.00</del></h4>
                                                    <div class="product-rating">
                                                        <i class="fa fa-star"></i>
                                                        <i class="fa fa-star"></i>
                                                        <i class="fa fa-star"></i>
                                                        <i class="fa fa-star"></i>
                                                        <i class="fa fa-star-o"></i>
                                                    </div>
                                                    <div class="product-btns">
                                                        <button class="add-to-wishlist"><i class="fa fa-heart-o"></i><span class="tooltipp">добавить в любимое</span></button>
                                                        <button class="add-to-compare"><i class="fa fa-exchange"></i><span class="tooltipp">добавить в сравнение</span></button>
                                                        <button class="quick-view"><i class="fa fa-eye"></i><span class="tooltipp">быстрый просмотр</span></button>
                                                    </div>
                                                </div>
                                                <div class="add-to-cart">
                                                    <button class="add-to-cart-btn"><i class="fa fa-shopping-cart"></i>добавить в корзину</button>
                                                </div>
                                            </div>
                                            <!-- /product -->

                                            <!-- product -->
                                            <div class="product">
                                                <div class="product-img">
                                                    <img src="./img/product08.png" alt="">
                                                        <div class="product-label">
                                                            <span class="sale">-30%</span>
                                                        </div>
                                                </div>
                                                <div class="product-body">
                                                    <p class="product-category">Category</p>
                                                    <h3 class="product-name"><a href="#">product name goes here</a></h3>
                                                    <h4 class="product-price">$980.00 <del class="product-old-price">$990.00</del></h4>
                                                    <div class="product-rating">
                                                    </div>
                                                    <div class="product-btns">
                                                        <button class="add-to-wishlist"><i class="fa fa-heart-o"></i><span class="tooltipp">добавить в любимое</span></button>
                                                        <button class="add-to-compare"><i class="fa fa-exchange"></i><span class="tooltipp">добавить в сравнение</span></button>
                                                        <button class="quick-view"><i class="fa fa-eye"></i><span class="tooltipp">быстрый просмотр</span></button>
                                                    </div>
                                                </div>
                                                <div class="add-to-cart">
                                                    <button class="add-to-cart-btn"><i class="fa fa-shopping-cart"></i>добавить в корзину</button>
                                                </div>
                                            </div>
                                            <!-- /product -->

                                            <!-- product -->
                                            <div class="product">
                                                <div class="product-img">
                                                    <img src="./img/product09.png" alt="">
                                                </div>
                                                <div class="product-body">
                                                    <p class="product-category">Category</p>
                                                    <h3 class="product-name"><a href="#">product name goes here</a></h3>
                                                    <h4 class="product-price">$980.00 <del class="product-old-price">$990.00</del></h4>
                                                    <div class="product-rating">
                                                        <i class="fa fa-star"></i>
                                                        <i class="fa fa-star"></i>
                                                        <i class="fa fa-star"></i>
                                                        <i class="fa fa-star"></i>
                                                        <i class="fa fa-star"></i>
                                                    </div>
                                                    <div class="product-btns">
                                                        <button class="add-to-wishlist"><i class="fa fa-heart-o"></i><span class="tooltipp">добавить в любимое</span></button>
                                                        <button class="add-to-compare"><i class="fa fa-exchange"></i><span class="tooltipp">добавить в сравнение</span></button>
                                                        <button class="quick-view"><i class="fa fa-eye"></i><span class="tooltipp">быстрый просмотр</span></button>
                                                    </div>
                                                </div>
                                                <div class="add-to-cart">
                                                    <button class="add-to-cart-btn"><i class="fa fa-shopping-cart"></i>добавить в корзину</button>
                                                </div>
                                            </div>
                                            <!-- /product -->

                                            <!-- product -->
                                            <div class="product">
                                                <div class="product-img">
                                                    <img src="./img/product01.png" alt="">
                                                </div>
                                                <div class="product-body">
                                                    <p class="product-category">Category</p>
                                                    <h3 class="product-name"><a href="#">product name goes here</a></h3>
                                                    <h4 class="product-price">$980.00 <del class="product-old-price">$990.00</del></h4>
                                                    <div class="product-rating">
                                                        <i class="fa fa-star"></i>
                                                        <i class="fa fa-star"></i>
                                                        <i class="fa fa-star"></i>
                                                        <i class="fa fa-star"></i>
                                                        <i class="fa fa-star"></i>
                                                    </div>
                                                    <div class="product-btns">
                                                        <button class="add-to-wishlist"><i class="fa fa-heart-o"></i><span class="tooltipp">добавить в любимое</span></button>
                                                        <button class="add-to-compare"><i class="fa fa-exchange"></i><span class="tooltipp">добавить в сравнение</span></button>
                                                        <button class="quick-view"><i class="fa fa-eye"></i><span class="tooltipp">быстрый просмотр</span></button>
                                                    </div>
                                                </div>
                                                <div class="add-to-cart">
                                                    <button class="add-to-cart-btn"><i class="fa fa-shopping-cart"></i>добавить в корзину</button>
                                                </div>
                                            </div>
                                            <!-- /product -->
                                        </div>
                                        <div id="slick-nav-2" class="products-slick-nav"></div>
                                    </div>
                                    <!-- /tab -->
                                </div>
                            </div>
                        </div>
                        <!-- /Products tab & slick -->
                    </div>
                    <!-- /row -->
                </div>
                <!-- /container -->
            </div>
            <!-- /SECTION -->

            <!-- SECTION -->
            <div class="section">
                <!-- container -->
                <div class="container">
                    <!-- row -->
                    <div class="row">
                        <div class="col-md-4 col-xs-6">
                            <div class="section-title">
                                <h4 class="title">Лидеры продаж</h4>
                                <div class="section-nav">
                                    <div id="slick-nav-3" class="products-slick-nav"></div>
                                </div>
                            </div>

                            <div class="products-widget-slick" data-nav="#slick-nav-3">
                                <div>
                                    <!-- product widget -->
                                    <div class="product-widget">
                                        <div class="product-img">
                                            <img src="./img/product07.png" alt="">
                                        </div>
                                        <div class="product-body">
                                            <p class="product-category">Категория</p>
                                            <h3 class="product-name"><a href="#">product name goes here</a></h3>
                                            <h4 class="product-price">$980.00 <del class="product-old-price">$990.00</del></h4>
                                        </div>
                                    </div>
                                    <!-- /product widget -->

                                    <!-- product widget -->
                                    <div class="product-widget">
                                        <div class="product-img">
                                            <img src="./img/product08.png" alt="">
                                        </div>
                                        <div class="product-body">
                                            <p class="product-category">Категория</p>
                                            <h3 class="product-name"><a href="#">product name goes here</a></h3>
                                            <h4 class="product-price">$980.00 <del class="product-old-price">$990.00</del></h4>
                                        </div>
                                    </div>
                                    <!-- /product widget -->

                                    <!-- product widget -->
                                    <div class="product-widget">
                                        <div class="product-img">
                                            <img src="./img/product09.png" alt="">
                                        </div>
                                        <div class="product-body">
                                            <p class="product-category">Категория</p>
                                            <h3 class="product-name"><a href="#">product name goes here</a></h3>
                                            <h4 class="product-price">$980.00 <del class="product-old-price">$990.00</del></h4>
                                        </div>
                                    </div>
                                    <!-- product widget -->
                                </div>

                                <div>
                                    <!-- product widget -->
                                    <div class="product-widget">
                                        <div class="product-img">
                                            <img src="./img/product01.png" alt="">
                                        </div>
                                        <div class="product-body">
                                            <p class="product-category">Категория</p>
                                            <h3 class="product-name"><a href="#">product name goes here</a></h3>
                                            <h4 class="product-price">$980.00 <del class="product-old-price">$990.00</del></h4>
                                        </div>
                                    </div>
                                    <!-- /product widget -->

                                    <!-- product widget -->
                                    <div class="product-widget">
                                        <div class="product-img">
                                            <img src="./img/product02.png" alt="">
                                        </div>
                                        <div class="product-body">
                                            <p class="product-category">Категория</p>
                                            <h3 class="product-name"><a href="#">product name goes here</a></h3>
                                            <h4 class="product-price">$980.00 <del class="product-old-price">$990.00</del></h4>
                                        </div>
                                    </div>
                                    <!-- /product widget -->

                                    <!-- product widget -->
                                    <div class="product-widget">
                                        <div class="product-img">
                                            <img src="./img/product03.png" alt="">
                                        </div>
                                        <div class="product-body">
                                            <p class="product-category">Категория</p>
                                            <h3 class="product-name"><a href="#">product name goes here</a></h3>
                                            <h4 class="product-price">$980.00 <del class="product-old-price">$990.00</del></h4>
                                        </div>
                                    </div>
                                    <!-- product widget -->
                                </div>
                            </div>
                        </div>

                        <div class="col-md-4 col-xs-6">
                            <div class="section-title">
                                <h4 class="title">Лидеры продаж</h4>
                                <div class="section-nav">
                                    <div id="slick-nav-4" class="products-slick-nav"></div>
                                </div>
                            </div>

                            <div class="products-widget-slick" data-nav="#slick-nav-4">
                                <div>
                                    <!-- product widget -->
                                    <div class="product-widget">
                                        <div class="product-img">
                                            <img src="./img/product04.png" alt="">
                                        </div>
                                        <div class="product-body">
                                            <p class="product-category">Категория</p>
                                            <h3 class="product-name"><a href="#">product name goes here</a></h3>
                                            <h4 class="product-price">$980.00 <del class="product-old-price">$990.00</del></h4>
                                        </div>
                                    </div>
                                    <!-- /product widget -->

                                    <!-- product widget -->
                                    <div class="product-widget">
                                        <div class="product-img">
                                            <img src="./img/product05.png" alt="">
                                        </div>
                                        <div class="product-body">
                                            <p class="product-category">Категория</p>
                                            <h3 class="product-name"><a href="#">product name goes here</a></h3>
                                            <h4 class="product-price">$980.00 <del class="product-old-price">$990.00</del></h4>
                                        </div>
                                    </div>
                                    <!-- /product widget -->

                                    <!-- product widget -->
                                    <div class="product-widget">
                                        <div class="product-img">
                                            <img src="./img/product06.png" alt="">
                                        </div>
                                        <div class="product-body">
                                            <p class="product-category">Категория</p>
                                            <h3 class="product-name"><a href="#">product name goes here</a></h3>
                                            <h4 class="product-price">$980.00 <del class="product-old-price">$990.00</del></h4>
                                        </div>
                                    </div>
                                    <!-- product widget -->
                                </div>

                                <div>
                                    <!-- product widget -->
                                    <div class="product-widget">
                                        <div class="product-img">
                                            <img src="./img/product07.png" alt="">
                                        </div>
                                        <div class="product-body">
                                            <p class="product-category">Категория</p>
                                            <h3 class="product-name"><a href="#">product name goes here</a></h3>
                                            <h4 class="product-price">$980.00 <del class="product-old-price">$990.00</del></h4>
                                        </div>
                                    </div>
                                    <!-- /product widget -->

                                    <!-- product widget -->
                                    <div class="product-widget">
                                        <div class="product-img">
                                            <img src="./img/product08.png" alt="">
                                        </div>
                                        <div class="product-body">
                                            <p class="product-category">Категория</p>
                                            <h3 class="product-name"><a href="#">product name goes here</a></h3>
                                            <h4 class="product-price">$980.00 <del class="product-old-price">$990.00</del></h4>
                                        </div>
                                    </div>
                                    <!-- /product widget -->

                                    <!-- product widget -->
                                    <div class="product-widget">
                                        <div class="product-img">
                                            <img src="./img/product09.png" alt="">
                                        </div>
                                        <div class="product-body">
                                            <p class="product-category">Категория</p>
                                            <h3 class="product-name"><a href="#">product name goes here</a></h3>
                                            <h4 class="product-price">$980.00 <del class="product-old-price">$990.00</del></h4>
                                        </div>
                                    </div>
                                    <!-- product widget -->
                                </div>
                            </div>
                        </div>

                        <div class="clearfix visible-sm visible-xs"></div>

                        <div class="col-md-4 col-xs-6">
                            <div class="section-title">
                                <h4 class="title">Лидеры продаж</h4>
                                <div class="section-nav">
                                    <div id="slick-nav-5" class="products-slick-nav"></div>
                                </div>
                            </div>

                            <div class="products-widget-slick" data-nav="#slick-nav-5">
                                <div>
                                    <!-- product widget -->
                                    <div class="product-widget">
                                        <div class="product-img">
                                            <img src="./img/product01.png" alt="">
                                        </div>
                                        <div class="product-body">
                                            <p class="product-category">Категория</p>
                                            <h3 class="product-name"><a href="#">product name goes here</a></h3>
                                            <h4 class="product-price">$980.00 <del class="product-old-price">$990.00</del></h4>
                                        </div>
                                    </div>
                                    <!-- /product widget -->

                                    <!-- product widget -->
                                    <div class="product-widget">
                                        <div class="product-img">
                                            <img src="./img/product02.png" alt="">
                                        </div>
                                        <div class="product-body">
                                            <p class="product-category">Категория</p>
                                            <h3 class="product-name"><a href="#">product name goes here</a></h3>
                                            <h4 class="product-price">$980.00 <del class="product-old-price">$990.00</del></h4>
                                        </div>
                                    </div>
                                    <!-- /product widget -->

                                    <!-- product widget -->
                                    <div class="product-widget">
                                        <div class="product-img">
                                            <img src="./img/product03.png" alt="">
                                        </div>
                                        <div class="product-body">
                                            <p class="product-category">Категория</p>
                                            <h3 class="product-name"><a href="#">product name goes here</a></h3>
                                            <h4 class="product-price">$980.00 <del class="product-old-price">$990.00</del></h4>
                                        </div>
                                    </div>
                                    <!-- product widget -->
                                </div>

                                <div>
                                    <!-- product widget -->
                                    <div class="product-widget">
                                        <div class="product-img">
                                            <img src="./img/product04.png" alt="">
                                        </div>
                                        <div class="product-body">
                                            <p class="product-category">Категория</p>
                                            <h3 class="product-name"><a href="#">product name goes here</a></h3>
                                            <h4 class="product-price">$980.00 <del class="product-old-price">$990.00</del></h4>
                                        </div>
                                    </div>
                                    <!-- /product widget -->

                                    <!-- product widget -->
                                    <div class="product-widget">
                                        <div class="product-img">
                                            <img src="./img/product05.png" alt="">
                                        </div>
                                        <div class="product-body">
                                            <p class="product-category">Категория</p>
                                            <h3 class="product-name"><a href="#">product name goes here</a></h3>
                                            <h4 class="product-price">$980.00 <del class="product-old-price">$990.00</del></h4>
                                        </div>
                                    </div>
                                    <!-- /product widget -->

                                    <!-- product widget -->
                                    <div class="product-widget">
                                        <div class="product-img">
                                            <img src="./img/product06.png" alt="">
                                        </div>
                                        <div class="product-body">
                                            <p class="product-category">Категория</p>
                                            <h3 class="product-name"><a href="#">product name goes here</a></h3>
                                            <h4 class="product-price">$980.00 <del class="product-old-price">$990.00</del></h4>
                                        </div>
                                    </div>
                                    <!-- product widget -->
                                </div>
                            </div>
                        </div>

                    </div>
                    <!-- /row -->
                </div>
                <!-- /container -->
            </div>
            <!-- /SECTION -->

            <!-- NEWSLETTER -->
            <div id="newsletter" class="section">
                <!-- container -->
                <div class="container">
                    <!-- row -->
                    <div class="row">
                        <div class="col-md-12">
                            <div class="newsletter">
                                <p>Подписаться на рассылку <strong>НОВОСТИ</strong></p>
                                <form>
                                    <input class="input" type="email" placeholder="Введите ваш email">
                                        <button class="newsletter-btn"><i class="fa fa-envelope"></i> Подписаться</button>
                                </form>
                                <ul class="newsletter-follow">
                                    <li>
                                        <a href="#"><i class="fa fa-facebook"></i></a>
                                    </li>
                                    <li>
                                        <a href="#"><i class="fa fa-twitter"></i></a>
                                    </li>
                                    <li>
                                        <a href="#"><i class="fa fa-instagram"></i></a>
                                    </li>
                                    <li>
                                        <a href="#"><i class="fa fa-pinterest"></i></a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <!-- /row -->
                </div>
                <!-- /container -->
            </div>
            <!-- /NEWSLETTER -->

            <!-- FOOTER -->
            <footer id="footer">
                <!-- top footer -->
                <div class="section">
                    <!-- container -->
                    <div class="container">
                        <!-- row -->
                        <div class="row">
                            <div class="col-md-3 col-xs-6">
                                <div class="footer">
                                    <h3 class="footer-title">О нас</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut.</p>
                                    <ul class="footer-links">
                                        <li><a href="#"><i class="fa fa-map-marker"></i>Phuket</a></li>
                                        <li><a href="#"><i class="fa fa-phone"></i> +7-911-073-94-75</a></li>
                                        <li><a href="#"><i class="fa fa-envelope-o"></i>niki_2023@mail.ru</a></li>
                                    </ul>
                                </div>
                            </div>

                            <div class="col-md-3 col-xs-6">
                                <div class="footer">
                                    <h3 class="footer-title">Категории</h3>
                                    <ul class="footer-links">
                                        <li><a href="#">Горячие предложения</a></li>
                                        <li><a href="#">Ноутбуки</a></li>
                                        <li><a href="#">Смартфоны</a></li>
                                        <li><a href="#">Камеры</a></li>
                                        <li><a href="#">Акксесуары</a></li>
                                    </ul>
                                </div>
                            </div>

                            <div class="clearfix visible-xs"></div>

                            <div class="col-md-3 col-xs-6">
                                <div class="footer">
                                    <h3 class="footer-title">Информация</h3>
                                    <ul class="footer-links">
                                        <li><a href="#">о нас</a></li>
                                        <li><a href="#">Наши контакты</a></li>
                                        <li><a href="#">Политика конфиденциальности</a></li>
                                        <li><a href="#">Заказы и возврат</a></li>
                                        <li><a href="#">Правила и Условия</a></li>
                                    </ul>
                                </div>
                            </div>

                            <div class="col-md-3 col-xs-6">
                                <div class="footer">
                                    <h3 class="footer-title">Услуги</h3>
                                    <ul class="footer-links">
                                        <li><a href="#">Мой аккаунт</a></li>
                                        <li><a href="#">Корзина</a></li>
                                        <li><a href="#">Список желаний</a></li>
                                        <li><a href="#">Отследите мой заказ</a></li>
                                        <li><a href="#">Помощь</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <!-- /row -->
                    </div>
                    <!-- /container -->
                </div>
                <!-- /top footer -->

                <!-- bottom footer -->
                <div id="bottom-footer" class="section">
                    <div class="container">
                        <!-- row -->
                        <div class="row">
                            <div class="col-md-12 text-center">
                                <ul class="footer-payments">
                                    <li><a href="#"><i class="fa fa-cc-visa"></i></a></li>
                                    <li><a href="#"><i class="fa fa-credit-card"></i></a></li>
                                    <li><a href="#"><i class="fa fa-cc-paypal"></i></a></li>
                                    <li><a href="#"><i class="fa fa-cc-mastercard"></i></a></li>
                                    <li><a href="#"><i class="fa fa-cc-discover"></i></a></li>
                                    <li><a href="#"><i class="fa fa-cc-amex"></i></a></li>
                                </ul>

                            </div>
                        </div>
                        <!-- /row -->
                    </div>
                    <!-- /container -->
                </div>
                <!-- /bottom footer -->
            </footer>
            <!-- /FOOTER -->

            <!-- jQuery Plugins -->

        </div>

        `,
};

let vue = new Vue({
  el: "#app",
  components: {
    index: IndexComponent,
  },
  data: {
    name: "",
    currentComponent: "index",
  },
  methods: {
    changePage(page) {
      this.currentComponent = page;
    },
  },
});
