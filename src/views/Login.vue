<template>
    <div>
        ログインID
        <input type="text" name="login_id" v-model="login_id">
        パスワード
        <input type="password" name="password" v-model="password">
        <button v-on:click="login">
            ログイン
        </button>
    </div>
</template>
<style scoped>

</style>
<script>
export default {
    data() {
        return {
            login_id:'',
            password:'',
        }
    },
    methods: {
        login () {
            this.$store.dispatch(
                'auth/login',
                {
                    login_id: this.login_id,
                    password: this.password
                }
            )
        }
    },
    computed: {
        token () {
            return this.$store.state.auth.token
        } 
    },
    watch: {
        token (newToken) {
            this.$router.push('/')
        }
    }
}
</script>