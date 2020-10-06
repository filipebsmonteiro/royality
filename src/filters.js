import Vue from 'vue'

/**
 * You can register global filters here and use them as a plugin in your main Vue instance
 */


Vue.filter('formatMoney', (value) => {
    value = parseFloat(value)
    if (value || value === 0 || value === '0'){
        return `R$ ${value.toFixed(2).replace('.', ',')}`
    }
});
Vue.filter('formatDate', (value, time=true) => {
    if (!time){
        const date = new Date( Date.parse(String(value)) )
        return date.toLocaleDateString()
    }
    const date = new Date( Date.parse(String(value)) )
    return date.toLocaleString()
});
Vue.filter('ageFromBirthday', (value) => {
    if (value) {
        const date1 = new Date( Date.parse(String(value)) )
        const date2 = new Date( Date.parse(String(value)) )
        return date2.getFullYear() - date1.getFullYear()
    }
    return null
});
Vue.filter('jsonParse', (value, attribute=null) => {
    if (value) {
        const objectParsed = JSON.parse(value)
        if (attribute){
            return objectParsed[attribute]
        }
        return objectParsed
    }
    return null
});