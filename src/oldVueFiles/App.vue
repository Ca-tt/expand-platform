<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import Header from "./components/common/Header.vue";
import Footer from "./components/common/Footer.vue";
</script>

<template lang="pug">
- 
  let folder = {
    img: './assets/img/',
    video: './assets/video/',
  } 

- 
  let text = {
    leadImageCaption: 'Photo by Anastasia Zastavskaya', 
    siteTitle: 'Школа веб-разработки EXPAND', 
    benefitsIcons: {
      firstIcon: {
        bold: 'Фокус на качестве, ',
        regular: 'не на скорости',
      },
      secondIcon: {
        bold: 'Дешевле ',
        regular: 'разрекламированных курсов',
      },
      thirdIcon: {
        bold: 'Проекты за деньги ',
        regular: 'прямо посреди обучения',
      },
      fourthIcon: {
        bold: 'Поддержка, ',
        regular: 'а не просто материалы',
      },
    },
    features: {
      title: 'Прямо как работа в IT-компании',
    } 
  }



//- site header
Header

//-  main 
main
  //- lead image
  section.lead-section.main-bg-container
    img.main-bg-image.round-5(src=folder.img + "people/lead-smiling-cropped.jpg" alt="two guys smiling at their desk")
    p.lead-image-caption.text-center= text.leadImageCaption

  .container
    h1.site-title= text.siteTitle
    //- icons
    article.icon-caption
      .icon-wrapper
        img.icon(src=folder.img + "icons/ind-ico.svg", alt)
      p.caption
        b= text.benefitsIcons.firstIcon.bold
        span= text.benefitsIcons.firstIcon.regular
    article.icon-caption
      .icon-wrapper
        img.icon(src=folder.img + "icons/inc.svg", alt)
      p.caption
        b= text.benefitsIcons.secondIcon.bold
        span= text.benefitsIcons.secondIcon.regular
    article.icon-caption
      .icon-wrapper
        img.icon(src=folder.img + "icons/disc.svg", alt)
      p.caption
        b= text.benefitsIcons.thirdIcon.bold
        span= text.benefitsIcons.thirdIcon.regular 
    article.icon-caption
      .icon-wrapper
        img.icon(src=folder.img + "icons/fam.svg", alt)
      p.caption
        b= text.benefitsIcons.fourthIcon.bold
        span= text.benefitsIcons.fourthIcon.regular 
    //- end icons
    
section.benefits.container
  //-  benefits scroll link 
  a#benefits(name="benefits")

  //- почему бы не убрать эту карточки?
  h2#title.title= text.features.title
  article
    figure.flex-center.column.benefit-cards.text-center
      .text-center
        h3.subtitle Новые уроки каждую неделю
        p Мы готовим новые темы, чтобы вы никогда не заскучали с нами
      #twitch-card.rotate-cards.pointer
        .benefits-article-icons.card-icon
          img(src=folder.img + "benefits/les-ico.png", alt)
        .video-rotate.card-icon
          img(src=folder.img + "benefits/play1-ico.png", alt)
      //-  video modal 
      section.overlay.hide.flex-center
        .modal.flex-center.video-container
          video(src=folder.video + "2022-09-02 16-58-07.mp4", controls)
    figure.flex-center.column.benefit-cards.text-center
      div
        h3.subtitle Ротации
        p Успеваешь лучше других? Тогда перейдёшь в более сильную группу
      .rotate-cards.pointer
        .benefits-article-icons.card-icon
          img(src=folder.img + "benefits/rot-ico.png", alt)
        .video-rotate.card-icon
          img(src=folder.img + "benefits/play1-ico.png", alt)
      //-  video modal 
      section.overlay.hide.flex-center
        .modal.flex-center.video-container
          video(src=folder.video + "2022-09-02 16-58-07.mp4", controls) >
    figure.flex-center.column.benefit-cards.text-center
      div
        h3.subtitle Реальные проекты
        p Пройди вступной экзамен и делай сайты с другими студентами. За деньги
      .rotate-cards.pointer
        .benefits-article-icons.card-icon
          img(src=folder.img + "benefits/pro-ico.png", alt)
        .video-rotate.card-icon
          img(src=folder.img + "benefits/play1-ico.png", alt)
      //-  video modal 
      section.overlay.hide.flex-center
        .modal.flex-center.video-container
          video(src=folder.video + "2022-09-02 16-58-07.mp4", controls) >
    figure.flex-center.column.benefit-cards.text-center
      div
        h3.subtitle Стань автором уроков / учителем
        p Начни получать денежки вместе с нами: пиши уроки, учи студентов, стань для других ментором
      .rotate-cards.pointer
        .benefits-article-icons.card-icon
          img(src=folder.img + "benefits/aut-ico.png", alt)
        .video-rotate.card-icon
          img(src=folder.img + "benefits/play1-ico.png", alt)
      //-  video modal 
      section.hide.overlay.flex-center
        .modal.flex-center.video-container
          video(src=folder.video + "kawunchik.mp4", controls) >
//-  lessons-types 
section.lessons-types.container
  h2.title.text-center 2 формата в одной школе
  .card-horizontal
    figure
      .lesson-card
        .img-zoom
          img(src=folder.img + "lessons-types/group-photo.png", alt)
        .circle-icon
          img(src=folder.img + "lessons-types/circle 2.png", alt)
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
          img(src=folder.img + "lessons-types/solo-photo.png", alt)
        .circle-icon
          img(src=folder.img + "lessons-types/circle 2.png", alt)
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
            img(src=folder.img + "services/html-ico.png", alt)
          article
            h3.subtitle 1. Вёрстка сайтов HTML/CSS/JS
            p
              | Сначала мы научимся делать отдельные 
              span.descr “запчасти” сайтов
        figure.flex
          .card-icon
            img(src=folder.img + "services/js-co.png", alt)
          article
            h3.subtitle 2. Чистый JavaScript
            p
              | После мы будем покорять 
              span.descr самый популярный язык в мире — JavaScript
      .card-column.flex.column.between
        figure.flex
          .card-icon
            img(src=folder.img + "services/frl-ico.png", alt)
          article
            h3.subtitle 3. Фриланс и работа в команде
            p
              | Мы будем работать в команде с и 
              span.descr заработаем тебе первые деньги
            p.
              
              
        figure.flex
          .card-icon
            img(src=folder.img + "services/nod-ico.png", alt)
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
            img(src=folder.img + "services/react.png", alt)
          article
            h3.subtitle React.js
            p ПРасскажите, что отличает ваши услуги от услуг в других компаниях
        figure.flex
          .card-icon
            img(src=folder.img + "services/vue.png", alt)
          article
            h3.subtitle Vue.js
            p.
              Расскажите, что отличает ваши услуги от услуг в других компаниях
              
            p.
              
              
      .card-column.flex.column.between
        figure.flex
          .card-icon
            img(src=folder.img + "services/managment.png", alt)
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
            img(src=folder.img + "reviews/images.jpg", alt)
          .student-info
            h3.subtitle Вупсень
            p.descr Ученик третьего курса
            .stars
              .star
                img(src=folder.img + "reviews/Vector.png", alt)
              .star
                img(src=folder.img + "reviews/Vector.png", alt)
              .star
                img(src=folder.img + "reviews/Vector.png", alt)
              .star
                img(src=folder.img + "reviews/Vector.png", alt)
              .star
                img(src=folder.img + "reviews/Vector.png", alt)
        p.
          Школа классная, но я сегодня ударился мизинцем об ножку стола, по-этому ставлю 3 звезды Я люблю смотреть мультфильмы - мы это делаем всей семьей, выбирая подходящее для всех время. Садимся поудобнее, берем различные вкусняшки, в летний период это компот и мороженое, заранее выбирает мультфильм и начинаем просмотр, а после делимся впечатлениями.
          
      figure.comment
        .student.flex
          .profile-avatar
            img(src=folder.img + "reviews/images2.jpg", alt)
          .student-info
            h3.subtitle Пупсень
            p.descr Ученик третьего курса
            .stars
              .star
                img(src=folder.img + "reviews/star-empty.png", alt)
              .star
                img(src=folder.img + "reviews/star-empty.png", alt)
              .star
                img(src=folder.img + "reviews/Vector.png", alt)
              .star
                img(src=folder.img + "reviews/Vector.png", alt)
              .star
                img(src=folder.img + "reviews/Vector.png", alt)
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
                  img(src=folder.img + "connect/Vector.png", alt)
                p Свяжитесь со мной в Telegram / Viber
              .flex.column.connect-column
                button#phone.connect-btn.red-button.flex-center.pointer
                  img(src=folder.img + "connect/call.png", alt)
                p Перезвоните мне на мобильный
          .circle-icon
            img(src=folder.img + "lessons-types/circle 2.png", alt)
      #modalFlip.details-container
        .modal-window.container
          h2.title Спасибо
          p Ваша заявка принята в обработку. Мы свяжемся с вами в ближайшее время
          .check
            img(src=folder.img + "modal/Vector.png", alt)
          .circle-icon
            img(src=folder.img + "lessons-types/circle 2.png", alt)
Footer
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
