<template>
    <div class="box" v-click-outside="hide">
        <input type="text" @focus="isShow=true">
        <div v-show="isShow">面板</div>
    </div>
</template>

<script>
    export default {
        directives: {
            clickOutside: {
                bind(el, bindings,vNode) {
                    const handler = (e)=>{
                        if(!(el.contains(e.target))) {
                            const fn = vNode.context[bindings.expression]
                            fn()
                        }
                    }
                    el.handler = handler
                    document.addEventListener('click',handler)
                },
                unbind(el){
                    document.removeEventListener('click',el.handler)
                }
            }
        },
        name: "click-outside",
        data() {
            return {
                isShow: false
            }
        },
        methods: {
            hide() {
                this.isShow = false
            }
        }
    }
</script>

<style scoped>
    .box {
        width: 20%;
        display: flex;
        flex-direction: column;
        border: 1px solid red;
    }
</style>