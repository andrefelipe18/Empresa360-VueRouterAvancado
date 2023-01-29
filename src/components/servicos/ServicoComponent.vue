<template>
    <div class="" v-if="dados">
    <div class="card">
        <div class="card-header bg-primary text-white">{{ dados.servico }}</div>
        <div class="card-body">
            <p class="card-text">{{ dados.descricao }}</p>
        </div>
    </div>
    </div>
</template>
<script>
import ApiMixin from '@/mixins/ApiMixin'

export default {
    name: 'Servico',
    props: ['id'],
    mixins: [ApiMixin],
    created() {
        this.getDadosApi(`http://localhost:3000/servicos/${this.id}`);  
    },
    beforeRouteUpdate(to, from, next) {
        this.getDadosApi(`http://localhost:3000/servicos/${to.params.id}`);
        next();
    }
}
</script>