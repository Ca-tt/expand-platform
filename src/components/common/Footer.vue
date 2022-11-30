<template lang="pug">
- 
  let folder = {
    img: '../../assets/img/',
  } 

//- site footer
footer.site-footer.container.flex.column.text-center
  h2
    | Каждый может стать каждым в
    br
    span.title EXPAND
  address.social-networks.flex-center
    a.social(href="https://t.me/expand_code")
      .flex-center
        img(src=folder.img + "social-networks/tg.png", alt)
    a.social(href="#")
      .flex-center
        img(src=folder.img + "social-networks/fc.png", alt)
    a.social(href="#")
      .flex-center
        img(src=folder.img + "social-networks/ut.png", alt)
    a.social(href="#")
      .flex-center
        img(src=folder.img + "social-networks/tt.png", alt)
    a.social(href="#")
      .flex-center
        img(src=folder.img + "social-networks/inst.png", alt)
  p.copyright ©EXPAND 2022
</template>

<script setup></script>

<style lang="sass" scoped></style>
