<template>
    <div>
        {{$data}}
        <input type="text" placeholder="タイトル" v-if="memo" v-bind:value="memo.title">
        いつから<input type="date" v-if="memo" v-bind:value="memo.start_date"> ~ 
        いつまで<input type="date" v-if="memo" v-bind:value="memo.end_date">
        <div v-if="memo">
            <table class="table">
                <thead>
                    <tr>
                        <th>日付</th>
                        <th>昼夜</th>
                        <th>メニュー</th>
                        <th>リンク</th>
                    </tr>
                </thead>
                <tbody v-if="memo.menus.length">
                    <tr v-for="(menu, index) in memo.menus" :key="index">
                        <td>{{menu.date}}</td>
                        <td>{{menu.kind}}</td>
                        <td>{{menu.name}}</td>
                        <td><a v-bind:href="menu.url" target="_blank">リンク</a></td>
                    </tr>
                </tbody>
                <tbody v-else>
                    <tr>
                        <td colspan="4">
                            メニューがありません
                        </td>
                    </tr>
                </tbody>
            </table>
            <button>メニューを編集</button>

       
            <table class="table">
                <thead>
                    <tr>
                        <th>副菜名</th>
                    </tr>
                </thead>
                <tbody v-if="memo.sub_menus.length">
                    <tr v-for="(sub_menu, index) in memo.sub_menus" :key="index">
                        <td>{{sub_menu.name}}</td>
                    </tr>
                </tbody>
                <tbody v-else>
                    <tr>
                        <td>
                            副菜はありません
                        </td>
                    </tr>
                </tbody>
            </table>
            <button>副菜を編集</button>

            <table class="table">
                <thead>
                    <tr>
                        <th>食材名</th>
                    </tr>
                </thead>
                <tbody v-if="memo.food_stuffs.length">
                    <tr v-for="(food_stuff, index) in memo.food_stuffs" :key="index">
                        <td>
                            <input type="checkbox" v-bind:value="food_stuff.status">
                            {{food_stuff.name}}
                        </td>
                    </tr>
                </tbody>
                <tbody v-else>
                    <tr>
                        <td>
                            食材はありません
                        </td>
                    </tr>
                </tbody>
            </table>
            <button>食材を編集</button>
            <div>
                <button>保存</button>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            memo:null
        }
    },
    mounted() {
        this.$store.dispatch(
            'http/request',
            {
                url:'/api/memo/get',
                data: {
                    id: Number(this.$route.params.id)
                }
            }
        ).
        then(function(res) {
            console.log(res)
            this.memo = res
        }.bind(this))
        
    },
}
</script>
<style lang="stylus" scoped>

</style>