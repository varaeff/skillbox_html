(() => {
  const select = document.querySelector('.gallery__select');
  const tabs = document.querySelectorAll('.tabs__tab');
  const blocks = document.querySelectorAll('.catalog__country');
  const scrolls = document.querySelectorAll('.scrolls__item');
  const persons = document.querySelectorAll('.block__person');
  const events = document.getElementById('events');
  const showEvents = document.querySelector('.events__button');
  const priceInputs = document.querySelectorAll('.chechbox__input');
  const formName = document.querySelector('.form__input_name');
  const nameLabel = document.querySelector('.form___placeholder_name');
  const formTel = document.querySelector('.form__input_tel');
  const telLabel = document.querySelector('.form___placeholder_tel');
  const slides = document.querySelectorAll('.gallery__slide');
  const bigImage = document.querySelector('.gallery__bigimage');
  const blockContent = document.querySelector('.blockcontent');
  const burger = document.querySelector('.header__burger');
  const menu = document.querySelector('.header__uprow');
  const linkButton = document.querySelector('.header__linkframe');
  const seach = document.querySelector('.header__seachicon');
  const seachInput = document.querySelector('.header__seach');
  const headerColor = document.querySelector('.header__color');
  const closeImage = document.querySelector('.bigimage__closebutton');
  const logo = document.querySelector('.header__logo');
  const closeSeach = document.querySelector('.header__close');
  const swiperContainer = document.querySelector('.swiper-container');
  const spoiler = document.querySelector('.checkbox__spoiler');
  const checkboxItem = document.querySelectorAll('.checkbox__item');
  const hero = document.querySelector('.hero');
  const dropdowns = document.querySelectorAll('.dropdown__item');
  const form = document.querySelector('.contacts__form');
  const seachButton = document.querySelector('.header__seachbutton');
  const partnersSlide = document.querySelectorAll('.partners__slide');
  const socials = document.querySelectorAll('.footer__sociallink');
  const whatcapp = document.querySelector('.contacts__whatsapp');
  const telegram = document.querySelector('.contacts__telegram');
  const countries = document.querySelector('.catalog__countries');
  const links = countries.querySelectorAll('.simplelink');
  const headers = document.querySelectorAll('.block__header');
  const navlist = document.querySelector('.header__navlist');
  const formsend = document.querySelector('.form__send');

  let swiperEvents;
  let swiperPublications;
  let swiperExist = true;

  // Массив данных о художниках для раздела "Каталог"

  const Artists = [];

  Artists[`DomGirl`] = {
    years: '2 июня 1448 — 11 января 1494',
    about: 'Один из ведущих флорентийских художников Кватроченто, основатель художественной династии, которую продолжили его брат Давид и сын Ридольфо. Глава художественной мастерской, где юный Микеланджело в течение года овладевал профессиональными навыками. Автор фресковых циклов, в которых выпукло, со всевозможными подробностями показана домашняя жизнь библейских персонажей (в их роли выступают знатные граждане Флоренции в костюмах того времени).',
  };
  Artists[`BenDiBin`] = {
    years: 'ок. 1380—85 — 19 сентября 1417',
    about: 'Бенедетто ди Биндо остался в истории искусства как сиенский художник, так сказать, «второго ряда», несмотря на то, что за свою короткую жизнь он выполнил ряд весьма престижных заказов, включая работы в Сиенском соборе (работы в главном соборе республики второстепенным художникам не поручались). Обучение он прошёл у Таддео ди Бартоло, крупного сиенского мастера поздней готики, в боттеге которого Бенедетто трудился вместе с Грегорио ди Чекко. Наибольшее влияние на его творчество оказали работы Симоне Мартини, в частности в выборе колорита, а тонко проработанные лица его персонажей напоминают произведения Джованни да Милано.',
  };
  Artists[`Bosch`] = {
    years: 'около 1450 — 1516',
    about: 'Нидерландский потомственный художник, один из крупнейших мастеров периода Северного Возрождения. Из творчества художника сохранилось около десяти картин и двенадцати рисунков[3]. Был посвящён в члены Братства Богоматери (нидерл. Illustre Lieve Vrouwe Broederschap; 1486); считается одним из самых загадочных живописцев в истории западного искусства. В родном городе Босха, голландском Хертогенбосе, открыт центр творчества Босха, в котором представлены копии всех его произведений.',
  };
  Artists[`KartAng`] = {
    years: '1411 — 1466.',
    about: 'Ангерран Картон родился около 1415 года на севере Франции, в городе Лане; образование получил в 1425-30 годах. Судя по многочисленным готическим элементам его художественного почерка, он сформировался под влиянием стиля, господствовавшего на севере Франции. Величественностью своих композиций, а также некоторыми своими образами он обязан скульптуре готических храмов. В годы формирования Картона в Пикардии было сильным бургундское художественное влияние, в формировании художника сыграли роль произведения Яна ван Эйка, Робера Кампена и Рогира Ван дер Вейдена, которые он, вне сомнения, там видел. Благодаря натурализму этих мастеров, усвоенному художником, он стал достаточно «прогрессивным» для живописи середины XV века.',
  };

  // Выпадающее меню, "Галерея"

  const choices = new Choices(select, {
    searchEnabled: false,
    shouldSort: false,
    itemSelectText: '',
    position: 'bottom',
  });

  //Свайпер Hero

  const swiperHero = new Swiper(".hero__swiper-container", {
    allowTouchMove: false,
    effect: 'fade',
    speed: 3000,
    autoplay: {
      delay: 5000,
    },
  });

  // Свайпер Галереи

  const swiper = new Swiper(".swiper-container", {
    slidesPerView: 1,
    slidesPerColumn: 1,
    slidesPerGroup: 1,
    spaceBetween: 10,
    allowTouchMove: true,
    breakpoints: {
      321: {
        slidesPerView: 2,
        slidesPerColumn: 2,
        slidesPerGroup: 2,
        spaceBetween: 10,
        allowTouchMove: false,
      },
      651: {
        slidesPerView: 2,
        slidesPerColumn: 2,
        slidesPerGroup: 2,
        spaceBetween: 30,
        allowTouchMove: false,
      },
      1025: {
        slidesPerView: 3,
        slidesPerColumn: 2,
        slidesPerGroup: 3,
        spaceBetween: 20,
        allowTouchMove: false,
      },
      1450: {
        slidesPerView: 3,
        slidesPerColumn: 2,
        slidesPerGroup: 3,
        spaceBetween: 45,
        allowTouchMove: false,
      },
    },
    pagination: {
      el: ".gallery__swiper-pagination",
      type: "fraction",
    },
    navigation: {
      nextEl: ".gallery__swiper-button-next",
      prevEl: ".gallery__swiper-button-prev",
    },
  });

  // Свайпер раздела "Издания"

  function publicationSwiperInit () {
    swiperExist = true;
    swiperPublications = new Swiper(".publications__swiper-container", {
      slidesPerView: 2,
      slidesPerColumn: 1,
      slidesPerGroup: 2,
      spaceBetween: 10,
      allowTouchMove: false,
      breakpoints: {
        651: {
          slidesPerView: 2,
          slidesPerColumn: 1,
          slidesPerGroup: 2,
          spaceBetween: 35,
        },
        1025: {
          slidesPerView: 3,
          slidesPerGroup: 3,
          spaceBetween: 20,
        },
        1441: {
          slidesPerView: 3,
          spaceBetween: 50,
        },
      },
      pagination: {
        el: ".publications__swiper-pagination",
        type: "fraction",
      },
      navigation: {
        nextEl: ".publications__swiper-button-next",
        prevEl: ".publications__swiper-button-prev",
      },
    });
  };

  // свайпер "партнёры проектов"

  const swiperPartners = new Swiper(".partners__swiper-container", {
    slidesPerView: 1,
    slidesPerGroup: 1,
    spaceBetween: 10,
    allowTouchMove: false,
    breakpoints: {
      651: {
        slidesPerView: 2,
        slidesPerGroup: 2,
        spaceBetween: 34,
      },
      769: {
        slidesPerView: 2,
        slidesPerGroup: 2,
        spaceBetween: 50,
      },
      1441: {
        slidesPerView: 3,
        spaceBetween: 50,
      },
    },
    navigation: {
      nextEl: ".partners__swiper-button-next",
      prevEl: ".partners__swiper-button-prev",
    },
  });

  //свайпер раздела "События"

  function eventsSwiperInit () {
    events.classList.remove('events__block');

    swiperEvents = new Swiper(".events__swiper-container", {
      slidesPerView: 1,
      slidesPerColumn: 1,
      slidesPerGroup: 1,
      spaceBetween: 10,
      pagination: {
        el: ".events__swiper-pagination",
        type: "bullets",
        clickable: true,
      },
    });
  }

  // аккордеоны раздела "Каталог"
  $( function() {
    $("#accordion_fr").accordion({
      header: 'div.block__header',
      active: false,
      collapsible: true,
      heightStyle: "content",
    });
  } );

  $( function() {
    $("#accordion_it").accordion({
      header: 'div.block__header',
      active: false,
      collapsible: true,
      heightStyle: "content",
    });
  } );

  $( function() {
    $("#accordion_blg").accordion({
      header: 'div.block__header',
      active: false,
      collapsible: true,
      heightStyle: "content",
    });
  } );

  // Выпадающие меню строки поиска в хэдере

  function showDropdown (event, currentEl) {
    event.preventDefault();
    dropdowns.forEach(el => el.removeAttribute('tabindex'));
    let currentDropdowns;
    if (currentEl) {currentDropdowns = currentEl.querySelectorAll('.dropdown__item')};
    scrolls.forEach(el =>
      {if (!currentEl || el.firstElementChild.innerHTML !== currentEl.firstElementChild.innerHTML) {
        el.lastElementChild.classList.remove('scrolls__dropdown_opened');
        el.classList.remove('opened');
      } else {
        currentEl.lastElementChild.classList.toggle('scrolls__dropdown_opened');
        currentEl.classList.toggle('opened');
      };
    });
    if (currentEl && currentEl.classList.contains('opened')) {
      currentDropdowns.forEach(el => el.setAttribute('tabindex', 0));
    };
  };

  // переключение стран в Каталоге

  function selectTab(event, id) {
    event.preventDefault();
    const blockID = `${id}_block`;
    const currentHeader = document.getElementById(blockID).querySelector('.block__header');
    const link = document.getElementById(blockID).querySelector('.simplelink');

    headers.forEach(el => el.removeAttribute('tabindex'));
    currentHeader ? currentHeader.setAttribute('tabindex', '0') : {};
    links.forEach(el => el.setAttribute('tabindex', '-1'));
    link ? link.setAttribute('tabindex', '0') : {};
    persons.forEach(el => el.removeAttribute('tabindex'));
    tabs.forEach(el => el.classList.remove('tabs__tab_active'));
    blocks.forEach(el => el.classList.remove('country_active'));
    document.getElementById(id).classList.add('tabs__tab_active');
    document.getElementById(blockID).classList.add('country_active');
  };

  // переключение художников в каталоге

  function selectPerson(event, person, name) {
    const portrait = person.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.querySelector('.person__portrait');
    const years = person.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.querySelector('.person__lifeyears');
    const personAbout = person.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.querySelector('.person__about');
    const personName = person.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.querySelector('.person__name');
    const personsInBlock = person.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.querySelectorAll('.block__person');

    event.preventDefault();
    personsInBlock.forEach(el => el.classList.remove('block__person_active'));
    person.classList.add('block__person_active');
    personName.innerHTML = name;
    if (person.id) {
      portrait.setAttribute(`src`, `./img/persons/${person.id}.jpg`);
      years.innerHTML = Artists[`${person.id}`].years;
      personAbout.innerHTML = Artists[`${person.id}`].about;
    } else {
      portrait.setAttribute(`src`, `./img/persons/Noname.jpg`);
      years.innerHTML = 'Даты жизни неизвестны';
      personAbout.innerHTML = 'Статья о персоне в процессе разработки';
    };
    if (document.body.clientWidth <=650) {
      if (person.classList.contains('block__person_it')) {
        window.location = "#it_person";
      } else if (person.classList.contains('block__person_blg')) {
        window.location = "#blg_person";
      } else if (person.classList.contains('block__person_fr')) {
        window.location = "#fr_person";
      };
    };
  };

  // Показ полного списка событий

  function showAllEvents () {
    events.classList.add('events__block_full');
    showEvents.style.display = 'none';
  };

  // проверка ввода в полях "цена" раздела "Издания" и формы раздела "Контакты"

  function parseInput(element, type) {
    let regexp;
    type === 'num' ? regexp = /^[0-9]$/ : regexp = /[\p{Alpha}^ ^-]/u;
    let inputText = element.value;
    for (let i = 0; i < inputText.length; i++) {
      if (!inputText[i].match(regexp)) {
        inputText = inputText.slice(0, i) + inputText.slice(i+1, inputText.length);
      };
    };
    element.value = inputText;
  };

  //проверка соответсвия цены заданным пределам

  function checkPrice(element) {
    if (element.value) {
      if (element.placeholder === '50'  && (Number(element.value) < 50 || Number(element.value) > 25000)) {
        element.value = '50';
      };
      if (element.placeholder === '25000'  && (Number(element.value) < 50 || Number(element.value) > 25000)) {
        element.value = '25000';
      };
    };
  };

  // Активация Яндекс-карты

  ymaps.ready(init);
  function init(){
    var myMap = new ymaps.Map("map", {
      center: [55.758468,37.601088],
      zoom: 15
    });
    var myPlacemark = new ymaps.Placemark([55.758468,37.601088], {}, {
      iconLayout: 'default#image',
      iconImageHref: './img/marker.svg',
      iconImageSize: [20, 20]
    });
  myMap.geoObjects.add(myPlacemark);
  }

  // увод плейсхолдера наверх при клике по инпутам

  function labelUp (input, label) {
    if (input.classList.contains('form__input_tel')) {
      formTel.removeAttribute('style');
      telLabel.removeAttribute('style');
      telLabel.innerHTML = 'Телефон*';
    };
    label.classList.add('form__placeholder_edit');
  };

  // возврат плейсхолдера, если инпут пустой

  function labelDown (input, label) {
    !input.value.trim() ? label.classList.remove('form__placeholder_edit') : {};
  };

  // сброс маски, если телефон не заполнен

  function removeMask (input) {
    if (input.inputmask.unmaskedvalue().length === 0) {
      Inputmask.remove(input);
      input.placeholder = '';
    };
  };

  // Модальное окно с картиной в разделе "Галерея"

  function showBigImage (event, slide) {
    event.preventDefault();
    bigImage.classList.add('bigimage__show');
    blockContent.classList.add('bigimage__show');
    closeImage.setAttribute('tabindex', '-1');
    closeImage.focus();
    closeImage.setAttribute('tabindex', '0');
  };

  function hideBigImage () {
    bigImage.classList.remove('bigimage__show');
    blockContent.classList.remove('bigimage__show');
  };

  // Обработка нажатия бугрера при разрешении 1024 и меньше

  function toggleMenu () {
    const new_height = ((document.querySelector('.header__mainrow').offsetHeight)
    +(document.querySelector('.hero__container').offsetHeight)) + "px";

    document.querySelector(':root').style.setProperty('--menuheight', new_height);
    navlist.style.width = document.querySelector('.header__mainrow').offsetWidth + "px";
    burger.classList.toggle('header__burger_menu');
    burger.classList.toggle('header__burger');
    menu.classList.toggle('header__uprow_active');
  };

  //раскрытие строки поиска на 1024-

  function toggleSeach () {
    if (document.body.clientWidth > 768 && document.body.clientWidth < 1025) {
      seach.classList.toggle('header__seachicon_seach');
      seachInput.classList.toggle('header__seach_seach');
    } else if (document.body.clientWidth <= 768) {
      burger.classList.remove('header__seach_seach');
      logo.classList.remove('header__seach_seach');
      closeSeach.classList.add('header__seach_seach');
      seachInput.classList.add('header__seach_seach');
      if (document.body.clientWidth > 650) {
        seach.style.transform = `translateX(-${document.body.clientWidth - 126}px)`;
        seachInput.style.width = `${document.body.clientWidth - 200}px`;
      } else {
        seach.style.transform = `translate(-${document.body.clientWidth - 100}px, 26px)`;
        seachInput.style.width = `${document.body.clientWidth - 157}px`;
        seachInput.style.transform = `translateY(26px)`;
        headerColor.style.paddingBottom = `30px`;
      };
    };
  };

  //открытие-закрытие фильтра изданий на 320

  function checkboxToggle () {
    if (document.body.clientWidth <= 320){
      checkboxItem.forEach(el => {
        if (!el.classList.contains('checkbox__item_checked')) {
          el.classList.toggle('checkbox__item_closed');
        };
      });
      spoiler.classList.toggle('checkbox__spoiler_closed');
    };
  };

  function checkboxClose () {
    if (document.body.clientWidth <= 320){
      checkboxItem.forEach(el => {
        if (!el.classList.contains('checkbox__item_checked')) {
          el.classList.add('checkbox__item_closed');
        };
      });
      spoiler.classList.add('checkbox__spoiler_closed');
    };
  };

  function toggleChesked (event, el) {
    event.preventDefault();
    if (!el.classList.contains('checkbox__item_checked')) {
      el.setAttribute('aria-checked', true);
      el.classList.add('checkbox__item_checked');
      el.classList.remove('checkbox__item_closed');
      el.firstElementChild.checked = true;
    } else {
      el.removeAttribute('aria-checked');
      el.classList.remove('checkbox__item_checked');
      el.firstElementChild.checked = false;
      if (spoiler.classList.contains('checkbox__spoiler_closed')) {
        el.classList.add('checkbox__item_closed');
      };
    };
  };

  function resetSeach () {
    burger.classList.add('header__seach_seach');
    logo.classList.add('header__seach_seach');
    closeSeach.classList.remove('header__seach_seach');
    seach.removeAttribute('style');
    seach.classList.remove('header__seachicon_seach');
    seachInput.removeAttribute('style');
    seachInput.classList.remove('header__seach_seach');
    headerColor.removeAttribute('style');
  };

  //расстановка табиндексов в раскрывашках аккордеонов

  function setTabindexes (event, ui) {
    let link;
    let currentPersons;

    ui.newPanel[0] ? currentPersons = ui.newPanel[0].querySelectorAll('.block__person') : {};
    ui.newPanel[0] ? link = ui.newPanel[0].querySelector('.simplelink') : {};

    link ? link.setAttribute('tabindex', '0') : {};
    persons.forEach(el => el.removeAttribute('tabindex'));
    currentPersons ? currentPersons.forEach(el => el.setAttribute('tabindex', 0)) : {};
  };

  //проверка полного ввода телефона в форме отправки данных

  function checkPhone (e) {
    e.preventDefault();
    if (formTel.inputmask.unmaskedvalue().length < 10) {
      formTel.style.borderColor = '#D11616';
      formTel.style.color = '#D11616';
      telLabel.style.color = '#D11616';
      telLabel.innerHTML = 'Недопустимый формат';
    } else {
      let formData = new FormData(form);
      let xhr = new XMLHttpRequest();

      xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
          formsend.innerHTML = '<p><b>Спасибо!</b></p>Вам перезвонят в ближайшее время.';
        } else {
          formsend.innerHTML = 'Ошибка отправки!';
        };
        formsend.classList.add('form__send_ok');
        setTimeout(hide, 5000);
      };

      xhr.open('POST', 'mail.php', true);
      xhr.send(formData);
      form.reset();
    };
  };

  function hide () {
    formsend.classList.remove('form__send_ok');
  }

  //переход по ссылке по нажатию пробела

  function gotoLink (event, el) {
    event.preventDefault();
    window.open(el.firstElementChild.href, '_blank');
  };

  //тултипы

  tippy('.tooltip_1', {
    content: 'Пример современных тенденций - современная методология разработки',
    trigger: 'click',
  });

  tippy('.tooltip_2', {
    content: 'Приятно, граждане, наблюдать, как сделанные на базе аналитики выводы вызывают у вас эмоции',
    trigger: 'click',
  });

  tippy('.tooltip_3', {
    content: 'В стремлении повысить качество',
    trigger: 'click',
  });

  document.addEventListener('DOMContentLoaded', function() {
    scrolls.forEach(el => el.firstElementChild.addEventListener('click', (e) => showDropdown(e, el)));
    scrolls.forEach(el => el.addEventListener('keydown', (e) => {e.keyCode == '32' ? showDropdown(e, el) : {}}));
    hero.addEventListener('click', (e) => showDropdown(e, null));
    tabs.forEach(el => el.addEventListener('click', (e) => selectTab(e, el.id)));
    tabs.forEach(el => el.addEventListener('keypress', (e) => {e.keyCode == '32' ? selectTab(e, el.id) : {}}));
    persons.forEach(el => el.addEventListener('click', (e) => selectPerson(e, el, el.firstChild.innerHTML)));
    persons.forEach(el => el.addEventListener('keypress', (e) => {e.keyCode == '32' ? selectPerson(e, el, el.firstChild.innerHTML) : {}}));
    showEvents.addEventListener('click', () => showAllEvents());
    priceInputs.forEach(el => el.addEventListener('input', () => parseInput(el, 'num')));
    priceInputs.forEach(el => el.addEventListener('blur', () => checkPrice(el)));
    formName.addEventListener('focus', () => labelUp(formName, nameLabel));
    formName.addEventListener('blur', () => labelDown(formName, nameLabel));
    formName.addEventListener('input', () => parseInput(formName, 'name'));
    formTel.addEventListener('focus', () => labelUp(formTel, telLabel));
    formTel.addEventListener('blur', () => labelDown(formTel, telLabel));
    formTel.addEventListener('focus', () => Inputmask("+7 (999)-999-99-99").mask(formTel));
    formTel.addEventListener('blur', () => removeMask(formTel));
    slides.forEach(el => el.addEventListener('click', (e) => showBigImage(e, el)));
    slides.forEach(el => el.addEventListener('keypress', (e) => {e.keyCode == '32' ? showBigImage(e, el) : {}}));
    blockContent.addEventListener('click', () => hideBigImage());
    closeImage.addEventListener('click', () => hideBigImage());
    burger.addEventListener('click', () => toggleMenu());
    linkButton.addEventListener('click', () => document.location.href = "");
    seach.addEventListener('click', () => toggleSeach());
    closeSeach.addEventListener('click', () => resetSeach());
    spoiler.addEventListener('click', () => checkboxToggle());
    checkboxItem.forEach(el => el.addEventListener('click', (e) => toggleChesked(e, el)));
    checkboxItem.forEach(el => el.addEventListener('keypress', (e) => {e.keyCode == '32' ? toggleChesked(e, el): {}}));
    form.addEventListener('submit', (event) => checkPhone(event));
    seachInput.addEventListener('focus', () => seachButton.style.display = 'block');
    seachInput.addEventListener('blur', () => seachInput.value.trim() ? {} : seachButton.removeAttribute('style'));
    partnersSlide.forEach(el => el.addEventListener('keypress', (e) => {e.keyCode == '32' ? gotoLink(e, el) : {}}));
    socials.forEach(el => el.addEventListener('keypress', (e) => {e.keyCode == '32' ? gotoLink(e, el) : {}}));
    whatcapp.addEventListener('keypress', (e) => {e.keyCode == '32' ? gotoLink(e, whatcapp) : {}});
    telegram.addEventListener('keypress', (e) => {e.keyCode == '32' ? gotoLink(e, telegram) : {}});
    whatcapp.addEventListener('click', (e) => gotoLink(e, whatcapp));
    telegram.addEventListener('click', (e) => gotoLink(e, telegram));
    links.forEach(el => el.setAttribute('tabindex', '-1'));
    headers.forEach(el => el.removeAttribute('tabindex'));
    document.getElementById('startblock').setAttribute('tabindex', '0');

    $("#accordion_fr").on("accordionactivate", function(event, ui) {setTabindexes(event, ui)});
    $("#accordion_it").on("accordionactivate", function(event, ui) {setTabindexes(event, ui)});
    $("#accordion_blg").on("accordionactivate", function(event, ui) {setTabindexes(event, ui)});

    // Сброс выпадающего меню при ресайзе на 1024+,
    // сброс ативности поиска на 1024- при ресайзе,
    // коррекция высоты свайпера в галлерее на 768-
    // добавление/удаление свайпера в событиях при ресайзе

    document.body.clientWidth <= 1024 ? burger.classList.add('header__seach_seach') : {};

    if (document.body.clientWidth <=768 && document.body.clientWidth > 320) {
      swiperContainer.style.height = `${swiperContainer.offsetWidth - 60}px`;
    } else swiperContainer.removeAttribute('style');
    if (document.body.clientWidth <=650 && events.classList.contains('events__block')) {
      eventsSwiperInit();
    };
    if (document.body.clientWidth > 320) {
      publicationSwiperInit();
    }

    document.body.clientWidth > 1440 ? navlist.style.width = "906px" : navlist.style.width = "680px";

    window.addEventListener(`resize`, () => {
      const new_height = ((document.querySelector('.header__mainrow').offsetHeight)
      +(document.querySelector('.hero__container').offsetHeight)) + "px";

      resetSeach ();

      if (document.body.clientWidth > 1024) {
        menu.classList.remove('header__uprow_active');
        burger.classList.remove('header__burger_menu');
        burger.classList.add('header__burger');
        seach.classList.remove('header__seachicon_seach');
        seachInput.classList.remove('header__seach_seach');
        burger.classList.remove('header__seach_seach');
      } else burger.classList.add('header__seach_seach');

      if (burger.classList.contains('header__burger_menu')) {
        document.querySelector(':root').style.setProperty('--menuheight', new_height);
        navlist.style.width = document.querySelector('.header__mainrow').offsetWidth + "px";
      } else if (document.body.clientWidth > 1440) {
          navlist.style.width = "906px";
        } else navlist.style.width = "680px";

      if (document.body.clientWidth <=768 && document.body.clientWidth > 320) {
        swiperContainer.style.height = `${swiperContainer.offsetWidth}px`;
      } else swiperContainer.removeAttribute('style');

      if (document.body.clientWidth <=650 && events.classList.contains('events__block')) {
        eventsSwiperInit();
      };

      if (document.body.clientWidth > 650 && !events.classList.contains('events__block')) {
        events.classList.add('events__block');
        swiperEvents.destroy();
      };

      if (document.body.clientWidth < 321 && swiperExist) {
        swiperPublications.destroy();
        swiperExist = false;
      } else publicationSwiperInit();

      checkboxClose();
    });
  });
})();
