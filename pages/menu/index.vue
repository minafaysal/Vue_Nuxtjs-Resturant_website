<template>
    <div>
      <Intro>
       Our Menu
      </Intro>
      <section class="menu-section">
            <div class="section-header">
                <img src="" 
                style="max-height: 70px;" alt="Resturant-logo">
                <h3>TODAY’S SPECIALS
 </h3>
            </div>
            <div class="menu">

                 <MenuList :menuList=menuItems />
            </div>




      </section>

    </div>
</template>

<script>

import Intro from "~/components/Intro.vue"
import MenuList from "~/components/Menu/MenuList.vue"

export default {

  computed:{
    menuItems(){
        return this.$store.getters.recipies;
      }
    }
,
  components: {
    Intro ,MenuList}
}
</script>

<style scoped>




</style>
