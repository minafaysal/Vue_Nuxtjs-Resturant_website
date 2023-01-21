<template>
    <div>
        <div>
            <nuxt-link to="/admin/new-recipie">New Recipie</nuxt-link>
        </div>
        <div class="menu">

           <MenuList :menuList=menuItems />
        </div>
    </div>
</template>

<script>
import MenuList from "~/components/Menu/MenuList.vue"

export default {
 layout:'admin',

    components:{
        MenuList
    }, computed:{
    menuItems(){
        return this.$store.getters.recipies;
      }
    }
    ,
}
</script>

<style>

</style>