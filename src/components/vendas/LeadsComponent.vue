<template>
    <table class="table table-hover">
        <thead>
            <tr>
                <th scope="col">ID</th>
                <th scope="col">Nome</th>
                <th scope="col">Telefone</th>
                <th> </th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="dado in dados" :key="dado.id">
                <td>{{ dado.id }}</td>
                <td>{{ dado.nome }}</td>
                <td>{{ dado.telefone }}</td>
                <td>
                    <!-- <router-link :to="`/home/vendas/leads/${dado.id}`" class="btn btn-sm btn-primary"><i class="bi bi-pencil-square point"></i></router-link> -->
                    <router-link :to="{name: 'Lead', params: {id: dado.id}}" class="btn btn-sm btn-primary"><i class="bi bi-pencil-square point"></i></router-link>
                </td>
            </tr>
        </tbody>
    </table>
</template>
<script>
import ApiMixin from '@/mixins/ApiMixin'
export default{
    name: "LeadsComponent", 
    mixins: [ApiMixin],
    created(){
        this.getDadosApi('http://localhost:3000/leads');
    }
}
</script>
<style scoped>
.point{
    cursor: pointer;
}
</style>