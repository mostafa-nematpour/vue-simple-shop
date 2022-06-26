import { defineStore } from 'pinia';
import axios from 'axios'


export const useProductStore = defineStore(
    {
        id: 'product',

        state: () => ({
            productList: [],
            mostafa: "dd"
        }),
        getters: {
            getProductList: (state) => {
                try {
                    return state.productList.data.products.data
                } catch (error) {
                    return null;
                }
            },
            getMostafa: (state) => {
                return state.mostafa;
            }

        },
        actions: {
            async getProductFromServer() {
                axios
                    .get('https://api.atlasmode.ir/v1/front/products')
                    .then((response) => {
                        this.productList = response.data
                    })

            }
        }
    }
)

