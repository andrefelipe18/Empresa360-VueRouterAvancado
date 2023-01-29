<template>
    <div class="card mb-4">
        <div class="card-header">Contratos</div>
        <div class="card-body">
            <div class="row">
                <div class="col-6">
                    <label class="form-label">ID Contrato:</label>
                    <input type="text" class="form-control">
                </div>
                <div class="col-6">
                    <label class="form-label">Data início:</label>
                    <div class="input-group">
                        <input type="date" class="form-control">
                        <input type="date" class="form-control">
                    </div>
                </div>
            </div>
        </div>
        <div class="card-footer">
            <button type="button" class="btn btn-primary">Pesquisar</button>
        </div>
    </div>
    <table class="table table-hover">
        <thead>
            <tr>
                <th scope="col">ID</th>
                <th scope="col">Lead</th>
                <th scope="col">Serviço</th>
                <th scope="col">Data início</th>
                <th scope="col">Data final</th>
                <th> </th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="dado in dados" :key="dado.id">
                <td>{{ dado.id }}</td>
                <td>{{ dado.leadId }}--{{ dado.lead.nome }}</td>
                <td>{{ dado.servicoId }}--{{ dado.servico.servico }}</td>
                <td>{{ dado.data_inicio }}</td>
                <td>{{ dado.data_fim }}</td>
            </tr>
        </tbody>
    </table>
</template>
<script>
import ApiMixin from '@/mixins/ApiMixin'
export default{
    name: "LeadsComponent", 
    mixins: [ApiMixin],
    data: () => ({
        parametrosDeRelacionamento: '_expand=lead&_expand=servico'
    }),
    created() {
        const queryParams = new URLSearchParams(this.$route.query).toString()
        const url = `http://localhost:3000/contratos?${this.parametrosDeRelacionamento}&${queryParams}`
        this.getDadosApi(url)
    },
    beforeRouteUpdate(to, from, next) {

        //console.log(to.query) //objeto => URLSearchParams
        const queryParams = new URLSearchParams(to.query).toString()
        console.log(to.query)
        console.log(queryParams)
        const url = `http://localhost:3000/contratos?${this.parametrosDeRelacionamento}&${queryParams}`
        console.log(url)
        this.getDadosApi(url)
        next()
    }
}
</script>
<style scoped>
.point{
    cursor: pointer;
}
</style>