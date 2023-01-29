<template>
    <div v-if="dados">
        <h4>Detalhes da lead</h4>
        <div class="mb-3 row">
            <label for="" class="col-sm-2 col-form-label">ID</label>
            <div class="col-sm-10">
                <input type="text" readonly class="form-control-plaintext" :value="dados.id" disabled>
            </div>
        </div>
        <div class="mb-3 row">
            <label for="" class="col-sm-2 col-form-label">Nome</label>
            <div class="col-sm-10">
                <input type="text" class="form-control" :value="dados.nome" disabled>
            </div>
        </div>
        <div class="mb-3 row">
            <label for="" class="col-sm-2 col-form-label">Telefone</label>
            <div class="col-sm-10">
                <input type="text" class="form-control" :value="dados.telefone" disabled>
            </div>
        </div>
        
        <div class="col-auto">
            <button type="button" class="btn btn-warning" @click="$router.push({name: 'Leads'})">Voltar</button>
        </div>
    </div>
</template>
<script>
import ApiMixin from '@/mixins/ApiMixin'
export default {
   mixins: [ApiMixin],
   created(){
      this.getDadosApi(`http://localhost:3000/leads/${this.$route.params.id}`); 
   }
}
</script>