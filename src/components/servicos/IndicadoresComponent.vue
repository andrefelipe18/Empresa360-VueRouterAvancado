<template>
    <h5>Componente Indicadorse</h5>
    <p>Poderiamos recuperar os indicadores do serviço id : {{ this.id }}</p>
</template>
<script>
export default {
   props: ['id'],
   created(){
    // console.log('Indicadores', this.$route.params.id);
   }
}
</script>
