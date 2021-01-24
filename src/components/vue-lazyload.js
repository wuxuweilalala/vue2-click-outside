

const lazy = (Vue) => {
    return class LazyClass {
        constructor(options) {
            this.options = options
        }
        add(el){
            console.log(el);
        }
        unbind(){

        }
    }
}
const VueLazyLoad = {
    install(Vue,options){
        const LazyClass = lazy(lazy,options);
        const instance = new LazyClass(options)
        Vue.directive('lazy',{
            bind:instance.add.bind(lazy),
            unbind:instance.unbind.bind(lazy)
        })
    }
}

export default VueLazyLoad