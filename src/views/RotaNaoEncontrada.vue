<template>
    <img src="/img/errorNotFound.png" alt="">
</template>
<script>
export default {
    name: 'RotaNaoEncontrada',
    created(){
        document.title = 'Página não encontrada';
        setTimeout(() => {
            this.$router.push('/');
        }, 3000);
    }
}
</script>
<style scoped>
img{
    width: 100%;
    height: 100vh;
}
</style>