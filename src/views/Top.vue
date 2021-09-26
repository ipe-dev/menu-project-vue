<template>
    <div>
        <div v-for="(memo, index) in memos" :key="index">
            <router-link :to="{name:'memo',params:{id:memo.ID}}">{{memo.Title}}</router-link>
        </div>
    </div>
</template>
<script>

export default {
    name: 'Top',
    
    data() {
        return {
            colors: ["red","blue"],
            memos: []
        }
    },
    mounted() {
        this.$store.dispatch(
            'http/request',
            {
                url:'/api/memo/get/list',
                data:''
            }
        ).then(function(res) {
            res.forEach(element => {
                // console.log(element)
                this.memos.push(element)
            });
            console.log(this.memos)
            
            
        }.bind(this))
    },
    
}
</script>