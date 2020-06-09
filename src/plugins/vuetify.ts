import Vue from 'vue';
import Vuetify from 'vuetify/lib';

Vue.use(Vuetify);

// standard vuetify theme:
// {
//     primary: '#1976D2',
//     secondary: '#424242',
//     accent: '#82B1FF',
//     error: '#FF5252',
//     info: '#2196F3',
//     success: '#4CAF50',
//     warning: '#FFC107',
// }


// dark gamer theme
// light: {
//     primary: '#030616',
//         secondary: '#030616',
//         accent: '#2529D8',
//         error: '#FF005E',
//         info: '#0084FF',
//         success: '#02D290',
//         warning: '#371777',
// },

export default new Vuetify({
    theme: {
        options: {
            customProperties: true,
        },
        themes: {
            light: {
                primary: '#002233',
                secondary: '#669900',
                accent: '#ffcc33',
                error: '#FF005E',
                info: '#0084FF',
                success: '#02D290',
                warning: '#371777',
            },
        },
    },
});
