<template>
    <h3>Serviços</h3>
    <hr>
    <div class="row">
        <div class="col mb-2" v-for="d in dados" :key="d.id">
            <div class="card cardStyle">
                <img :src="`/img/${d.icone}`" class="card-img-top">
                <div class="card-body text-cente">
                    <router-link :to="{name: 'Servico', params: {id: d.id}}">
                     <p class="card-text">{{ d.servico }}</p>
                    </router-link>
                </div>
            </div>
        </div>
    </div>
    <router-view class="mt-3"></router-view> <!-- Padrão -->
    <router-view name="opcoes"/>
    <router-view name="indicadores"/>

</template>
<script>
import ApiMixin from '@/mixins/ApiMixin'
export default{
    name: "ServicosComponent", 
    mixins: [ApiMixin],
    created(){
        this.getDadosApi('http://localhost:3000/servicos');
    },
    
}
</script>
<style scoped>
.point{
    cursor: pointer;
}
.cardStyle{
    width: 11rem;
}
a{
    color: #333;
}
</style>