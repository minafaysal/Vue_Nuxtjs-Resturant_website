<template>

               <div class="recipe">
                    <img :src="image" alt="Avatar" style="width:100%;max-height: 200px;">
                    <div class="container-card">
                        <nuxt-link :to="'/menu/'+id">
                          <h4><b>{{title}}</b></h4>
                        </nuxt-link>
                        <hr>
                        <p class="price">{{price}}$</p>
                    </div>
                </div>
</template>
<script>
export default {
 props:{
     title:{
         required:true,
         type:String
     },
     image:{
         required:true,
         type:String
     },
     id:{
         required:true,
         type:String
     },
     price:{
         required:true,
         type:Number
     },
 }
}
</script>
<style >
.recipe {
       
            box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
            transition: 0.3s;
            display: flex;
            min-width: 23%;
            flex-direction: column;
            margin: 0.5rem 1%;
        }

        @media (max-width: 600px) {
            .recipe {
                width: 70%;
                margin: 1rem auto;
            }
        }
        

        .recipe:hover {
            box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
        }
      
        .container-card {
            padding: 2px 16px;
            text-align: center;
        }

        .price {
            color: #ff3030;
        }
</style>