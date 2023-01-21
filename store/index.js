import Vuex from 'vuex';
import axios from 'axios';
const store = () => {
    return new Vuex.Store({
        state: {
            recipies: []
        },
        getters: {
            recipies(state) {
                return state.recipies
            }
        },
        mutations: {
            setRecipies(state, recipies) {
                state.recipies = recipies
            }
        },
        actions: {
            setRecipies(ctx, recipies) {
                ctx.commit('setRecipies', recipies)
            },
            //return data
            //store it
            nuxtServerInit(ctx, context) {
                return axios.get( 'https://myresturant-c6460-default-rtdb.firebaseio.com/menuList.json')
                    .then(res => {

                        const menuListArray = [];
                        for (const key in res.data) {
                            menuListArray.push({
                                id: key,
                                title: res.data[key].title,
                                image: res.data[key].thumbnail,
                                price: parseFloat(res.data[key].price),
                                ingredients: res.data[key].ingredients,
                            })
                        }
                        ctx.commit('setRecipies', menuListArray)
                    })
                    .catch(err => {
                        console.log(err);
                    })
            }
        }
    })
}
export default store;