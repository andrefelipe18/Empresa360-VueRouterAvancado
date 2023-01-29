<template>
    <h5>Componente Opcoes</h5>
    <p>Poderiamos recuperar as opções do serviço id : {{ this.id }}</p>	
</template>
<script>
export default {
    props: ['id'],
   created(){
    // console.log('Opcoes', this.id);
   },
}
</script>