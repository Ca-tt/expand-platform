<script setup>
// let jsPath = './assets/js/';

// import './assets/js/cardFlipTwitch.js';
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
// import HelloWorld from "./components/HelloWorld.vue";
</script>

<template lang="pug">
- let imgPath = './assets/img/';
- let videoPath = './assets/video/';

  //- header 
  header.container-90.flex-center
    figure.burger-icon
      #line1.line
      #line2.line
      #line3.line
      #line4.line
    .logo
      img.logo-img(src=imgPath + "logo.png")
    nav.burger-menu.round
      p.burger-menu-item
        a.navigations.anchor(href="#benefits") Чем мы отличаемся от других курсов/школ?
      p.burger-menu-item
        a.navigations.anchor(href="#services") Какой уровень навыков даём?
      p.burger-menu-item
        a.red-button.header-btn.flex-center.anchor(href="#connect") Спросить напрямую

    //-  disabled for uncertain time 
    //-  previously it was in header, though

    //- .lang-switch.flex
    //-   span.lang RU
    //-   span.open-arrow
    //-     #crossLine1.crossLine
    //-     #crossLine2.crossLine
    //- .none.lang-options
    //-   .lang-option.pointer
    //-     a(href="./index.html") Русский
    //-   .lang-option.pointer
    //-     a(href="./index-ua.html") Українська
    //-   .lang-option.pointer
    //-     a(href="./index-en.html") English
//-  main 
main
  section.lead-section.main-bg-container
    img.main-bg-image.round-5(src=imgPath + "people/lead-smiling.jpg", alt)
    p.lead-image-caption.text-center Photo by Anastasia Zastavskaya
  .container
    h1.title(data-en="Programming school EXPAND") Школа веб-разработки EXPAND
    //-  <h2 data-en="The best lessons in the world">Самые душевные уроки по программированию</h2> 
    article.lead-icons.icon-text
      .main-article-icons
        img.icon(src=imgPath + "icons/ind-ico.svg", alt)
      .main-article-text
        p
          | Занятия 1-на-1 
          b.text по запросу
    article.lead-icons.icon-text
      .main-article-icons
        img.icon(src=imgPath + "icons/inc.svg", alt)
      .main-article-text
        p
          b.text Скидки 100-300 грн
          |  за лучший результат в группе
    article.lead-icons.icon-text
      .main-article-icons
        img.icon(src=imgPath + "icons/disc.svg", alt)
      .main-article-text
        p
          b.text Проекты за деньги 
          | прямо посреди обучения
    article.lead-icons.icon-text
      .main-article-icons
        img.icon(src=imgPath + "icons/fam.svg", alt)
      .main-article-text
        p
          b.text Не просто курс — 
          | одна семья
section.benefits.container
  //-  benefits scroll link 
  a#benefits(name="benefits")
  h2.title.text-center#title Прямо как работа в IT-компании
  article
    figure.flex-center.column.benefit-cards.text-center
      .text-center
        h3.subtitle Новые уроки каждую неделю
        p Мы готовим новые темы, чтобы вы никогда не заскучали с нами
      #twitch-card.rotate-cards.pointer
        .benefits-article-icons.card-icon
          img(src=imgPath + "benefits/les-ico.png", alt)
        .video-rotate.card-icon
          img(src=imgPath + "benefits/play1-ico.png", alt)
      //-  video modal 
      section.overlay.hide.flex-center
        .modal.flex-center.video-container
          video(src=videoPath + "2022-09-02 16-58-07.mp4", controls)
    figure.flex-center.column.benefit-cards.text-center
      div
        h3.subtitle Ротации
        p Успеваешь лучше других? Тогда перейдёшь в более сильную группу
      .rotate-cards.pointer
        .benefits-article-icons.card-icon
          img(src=imgPath + "benefits/rot-ico.png", alt)
        .video-rotate.card-icon
          img(src=imgPath + "benefits/play1-ico.png", alt)
      //-  video modal 
      section.overlay.hide.flex-center
        .modal.flex-center.video-container
          video(src=videoPath + "2022-09-02 16-58-07.mp4", controls) >
    figure.flex-center.column.benefit-cards.text-center
      div
        h3.subtitle Реальные проекты
        p Пройди вступной экзамен и делай сайты с другими студентами. За деньги
      .rotate-cards.pointer
        .benefits-article-icons.card-icon
          img(src=imgPath + "benefits/pro-ico.png", alt)
        .video-rotate.card-icon
          img(src=imgPath + "benefits/play1-ico.png", alt)
      //-  video modal 
      section.overlay.hide.flex-center
        .modal.flex-center.video-container
          video(src=videoPath + "2022-09-02 16-58-07.mp4", controls) >
    figure.flex-center.column.benefit-cards.text-center
      div
        h3.subtitle Стань автором уроков / учителем
        p Начни получать денежки вместе с нами: пиши уроки, учи студентов, стань для других ментором
      .rotate-cards.pointer
        .benefits-article-icons.card-icon
          img(src=imgPath + "benefits/aut-ico.png", alt)
        .video-rotate.card-icon
          img(src=imgPath + "benefits/play1-ico.png", alt)
      //-  video modal 
      section.hide.overlay.flex-center
        .modal.flex-center.video-container
          video(src=videoPath + "kawunchik.mp4", controls) >
//-  lessons-types 
section.lessons-types.container
  h2.title.text-center 2 формата в одной школе
  .card-horizontal
    figure
      .lesson-card
        .img-zoom
          img(src=imgPath + "lessons-types/group-photo.png", alt)
        .circle-icon
          img(src=imgPath + "lessons-types/circle 2.png", alt)
      article
        h3.subtitle Работа в команде
        ol
          li
            p
              | В группе 
              span.descr 3-6 студентов
          li
            p
              | Время урока - 
              span.descr 1.5 часа
          li
            p
              span.descr Авторские 
              | методички и задания
          li
            p
              | Быллы, рейтинг и 
              span.descr скидки за достижения
        .price.align-center
          .total-cost
            h3.subtitle 460грн / урок
          .discount.text-center
            span.descr Первый урок - 300грн
    figure
      .lesson-card
        .img-zoom
          img(src=imgPath + "lessons-types/solo-photo.png", alt)
        .circle-icon
          img(src=imgPath + "lessons-types/circle 2.png", alt)
      article
        h3.subtitle Прокачка навыков с ментором
        ol
          li
            p
              | Урок 
              span.descr 1-на-1
          li
            p
              span.descr 60-90 минут 
              | практики
          li
            p
              | Подготовка к переходу в 
              span.descr сильную группу
          li
            p
              | Делаем твои 
              span.descr проекты вместе
        .price
          .total-cost
            h3.subtitle 540грн / урок
            p.descr Урок по запросу
//-  services 
a#services(name="services")
section.services.container
  h2.title С нуля до тимлида
  #services-carousel.owl-carousel
    .card-horizontal
      .card-column.flex.column.between
        figure.flex
          .card-icon
            img(src=imgPath + "services/html-ico.png", alt)
          article
            h3.subtitle 1. Вёрстка сайтов HTML/CSS/JS
            p
              | Сначала мы научимся делать отдельные 
              span.descr “запчасти” сайтов
        figure.flex
          .card-icon
            img(src=imgPath + "services/js-co.png", alt)
          article
            h3.subtitle 2. Чистый JavaScript
            p
              | После мы будем покорять 
              span.descr самый популярный язык в мире — JavaScript
      .card-column.flex.column.between
        figure.flex
          .card-icon
            img(src=imgPath + "services/frl-ico.png", alt)
          article
            h3.subtitle 3. Фриланс и работа в команде
            p
              | Мы будем работать в команде с и 
              span.descr заработаем тебе первые деньги
            p.
              
              
        figure.flex
          .card-icon
            img(src=imgPath + "services/nod-ico.png", alt)
          article
            h3.subtitle 4. Node.js
            p
              | До этого мы учили 
              span.descr фронтэнд
              |  Теперь мы выйдем на новый уровень -

              span.descr бэкенд
            p.
              
              
    .card-horizontal
      .card-column.flex.column.between
        figure.flex
          .card-icon
            img(src=imgPath + "services/react.png", alt)
          article
            h3.subtitle React.js
            p ПРасскажите, что отличает ваши услуги от услуг в других компаниях
        figure.flex
          .card-icon
            img(src=imgPath + "services/vue.png", alt)
          article
            h3.subtitle Vue.js
            p.
              Расскажите, что отличает ваши услуги от услуг в других компаниях
              
            p.
              
              
      .card-column.flex.column.between
        figure.flex
          .card-icon
            img(src=imgPath + "services/managment.png", alt)
          article
            h3.subtitle Менеджмент
            p.
              Расскажите, что отличает вас от других компаний. Управление IT командами
              
            p.
              
              
//-  reviews 
section.reviews.container
  h2.title Отзывы наших учасников
  .reviews-wrapper
    #reviews-carousel.owl-carousel.reviews-carousel
      figure.comment
        .student.flex.row
          .profile-avatar
            img(src=imgPath + "reviews/images.jpg", alt)
          .student-info
            h3.subtitle Вупсень
            p.descr Ученик третьего курса
            .stars
              .star
                img(src=imgPath + "reviews/Vector.png", alt)
              .star
                img(src=imgPath + "reviews/Vector.png", alt)
              .star
                img(src=imgPath + "reviews/Vector.png", alt)
              .star
                img(src=imgPath + "reviews/Vector.png", alt)
              .star
                img(src=imgPath + "reviews/Vector.png", alt)
        p.
          Школа классная, но я сегодня ударился мизинцем об ножку стола, по-этому ставлю 3 звезды Я люблю смотреть мультфильмы - мы это делаем всей семьей, выбирая подходящее для всех время. Садимся поудобнее, берем различные вкусняшки, в летний период это компот и мороженое, заранее выбирает мультфильм и начинаем просмотр, а после делимся впечатлениями.
          
      figure.comment
        .student.flex
          .profile-avatar
            img(src=imgPath + "reviews/images2.jpg", alt)
          .student-info
            h3.subtitle Пупсень
            p.descr Ученик третьего курса
            .stars
              .star
                img(src=imgPath + "reviews/star-empty.png", alt)
              .star
                img(src=imgPath + "reviews/star-empty.png", alt)
              .star
                img(src=imgPath + "reviews/Vector.png", alt)
              .star
                img(src=imgPath + "reviews/Vector.png", alt)
              .star
                img(src=imgPath + "reviews/Vector.png", alt)
        p.
          Школа классная, но я сегодня ударился мизинцем об ножку стола, по-этому ставлю 3 звезды Я люблю смотреть мультфильмы - мы это делаем всей семьей, выбирая подходящее для всех время. Садимся поудобнее, берем различные вкусняшки, в летний период это компот и мороженое, заранее выбирает мультфильм и начинаем просмотр, а после делимся впечатлениями.
          
//-  connect 
a#connect(name="connect")
.connect-bg
  section.connect.container
    figure.flip-modal
      #detailsFlip.details-container
        .details
          h2.title Нужны детали?
          p Оставьте свой номер и я напишу вам в мессенджер или перезвоню
          p Выберите удобный вариант сами
          form.text-center(action)
            input.phone-number.text-center(type="tel", placeholder="Введите ваш номер телефона", minlength="19", maxlength="19", required)
            .flex.between.connect-menu
              .flex.column.connect-column
                button#messenger.connect-btn.red-button.flex-center.pointer
                  img(src=imgPath + "connect/Vector.png", alt)
                p Свяжитесь со мной в Telegram / Viber
              .flex.column.connect-column
                button#phone.connect-btn.red-button.flex-center.pointer
                  img(src=imgPath + "connect/call.png", alt)
                p Перезвоните мне на мобильный
          .circle-icon
            img(src=imgPath + "lessons-types/circle 2.png", alt)
      #modalFlip.details-container
        .modal-window.container
          h2.title Спасибо
          p Ваша заявка принята в обработку. Мы свяжемся с вами в ближайшее время
          .check
            img(src=imgPath + "modal/Vector.png", alt)
          .circle-icon
            img(src=imgPath + "lessons-types/circle 2.png", alt)
//-  footer 
footer.container.flex.column.text-center
  h2
    | Каждый может стать каждым в
    br
    span.title EXPAND
  address.social-networks.flex-center
    a.social(href="https://t.me/expand_code")
      .flex-center
        img(src=imgPath + "social-networks/tg.png", alt)
    a.social(href="#")
      .flex-center
        img(src=imgPath + "social-networks/fc.png", alt)
    a.social(href="#")
      .flex-center
        img(src=imgPath + "social-networks/ut.png", alt)
    a.social(href="#")
      .flex-center
        img(src=imgPath + "social-networks/tt.png", alt)
    a.social(href="#")
      .flex-center
        img(src=imgPath + "social-networks/inst.png", alt)
  p.copyright ©EXPAND 2022
</template>

<style lang="scss" scoped>
/* .logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
} */
</style>
