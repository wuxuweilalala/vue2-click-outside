import _ from 'lodash';

const VueLazyLoad = {
    install(Vue,options){
        const LazyClass = lazy(Vue,options);
        const instance = new LazyClass(options)
        Vue.directive('lazy',{
            bind:instance.add.bind(instance),
            unbind:instance.unbind.bind(instance)
        })
    }
}

const scrollParent = (el) =>{
    let parent = el.parentNode

    while (parent) {
        if(/scroll/.test(getComputedStyle(parent)['overflow'])) {
            return parent
        }
        parent = parent.parentNode
    }
    return parent
}

const render = (listener,status) =>{
    let el = listener.el;
    let src = ''
    switch (status) {
        case 'loading':
            console.log('listener.options.loading');
            console.log(listener.options.loading);
            src = listener.options.loading;
            break;
        case 'loaded':
            src = listener.src;
            break;
        case 'error':
            src = listener.options.error
            break;
        default :
            break;
    }
    el.setAttribute('src',src)
}
const loadImg = (src,resolve,reject) =>{
    let img = new Image();
    img.src = src;
    img.onload = resolve;
    img.onerror = reject;
}

const lazy = (Vue) => {

    class ReactiveListener {
        constructor({el,src,options}) {
            this.el = el;
            this.src = src;
            this.state = {loading:false};
            this.options = options;
        }
        checkInView(){
         let {top} = this.el.getBoundingClientRect();

         return top < window.innerHeight * this.options.preload;
        }
        load(){
            render(this,'loading');
            loadImg(this.src,()=>{
                this.state.loading = true;
                render(this,'loaded')
            },()=>{
                this.state.loading = true;
                render(this,'error')
            })
        }
    }

    return class LazyClass {
        constructor(options) {
            this.options = options;
            this.bindHandler = false;
            this.listeners = [];
        }
        add(el,bindings){
            Vue.nextTick(()=>{
                const ele = scrollParent(el);

                let listener = new ReactiveListener({
                    el,
                    src:bindings.value,
                    options:this.options
                })
                this.listeners.push(listener);

                if(!this.bindHandler) {

                    let lazyHandler = _.throttle(this.lazyLoadHandler.bind(this),500)

                    ele.addEventListener('scroll',lazyHandler,{
                        passive:true
                    })
                    this.bindHandler = true;
                }
                this.lazyLoadHandler()
            })
        }
        lazyLoadHandler(){
            this.listeners.forEach(listener=>{
                if(listener.state.loading) return;
                listener.checkInView() && listener.load();
            })
        }
        unbind(){

        }
    }
}

export default VueLazyLoad