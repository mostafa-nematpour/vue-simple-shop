import { defineStore } from 'pinia'
import { home as homeApi } from '../api';

export const useHomeStore = defineStore({
    id: 'home',
    state: () => ({
        mainData: null,
        loading: true
    }),
    getters: {
        getCategories(state){
            try{
                return state.mainData.data.response.categories
            }catch(e){
                return null;
            }
        },
        getSizeList(state){
            try{
                return state.mainData.data.response.size_values.values
            }catch(e){
                return null;
            }
        }
    },
    actions: {
        async getHomeFromServer() {
            this.loading = true;
            this.mainData = await homeApi.get();
            this.loading = false;
        }
    }
}
)