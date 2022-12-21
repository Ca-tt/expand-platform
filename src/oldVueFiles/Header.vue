<template lang="pug">
- 
  let folder = {
    img: '../../assets/img/',
  } 


//- site header 
header.site-header.container-90.flex-center
  figure.burger-icon
    #line1.line
    #line2.line
    #line3.line
    #line4.line
  .logo
    img.logo-img(src=folder.img + "logo.png")
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
</template>

<script setup></script>

<style lang="sass" scoped></style>
