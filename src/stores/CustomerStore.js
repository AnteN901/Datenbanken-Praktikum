import { defineStore } from 'pinia';
import { reactive } from 'vue';

export const useCustomerStore = defineStore('CustomerStore', {
    state: () => reactive ({
      userName: '',
      isLoggedIn: false

    }),
  
    getters: {
      // Getter für die Anzahl der Produkte
      getUserName: (state) => state.userName,
      getIsLoggedIn: (state) => state.isLoggedIn
      },
  
    actions: {
      // Aktion, um ein neues Produkt hinzuzufügen
      setUserName(userName) {
        state.userName.push(userName);
        },
     setIsLoggedIn(isLoggedIn)
     {
        state.isLoggedIn = isLoggedIn;
     }
    },

  });