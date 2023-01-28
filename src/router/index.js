import { createRouter, createWebHistory } from 'vue-router'
import HomeComponent from '../views/HomeComponent.vue'

//Definindo as rotas da aplicação
const routes = [
  {
    path: '/',
    component: () => import('../views/SiteComponent.vue')
  },
  {
    path: '/home', //O caminho da rota
   // name: 'Home', //O nome da rota
    component: HomeComponent, //O componente que será renderizado
    children: [ //As rotas filhas
    {path: 'vendas', component: () => import('@/components/vendas/VendasComponent.vue'), 
      children:[
        {path: 'leads', component: () => import('@/components/vendas/LeadsComponent.vue')},
        {path: 'contratos', component: () => import('@/components/vendas/ContratosComponent.vue')},
        
      ]
    },
      {path: 'servicos', component: () => import('@/components/servicos/ServicosComponent.vue')},
      {path: 'dashboard', component: () => import('@/components/dashboard/DashboardComponent.vue')},
    ]
  },
  {
    path: '/login',
    component: () => import('../views/LoginComponent.vue')
  },
]

//Criando o router que serve para gerenciar as rotas da aplicação
const router = createRouter(
  {
    history: createWebHistory(), //O tipo de histórico que será utilizado e serve para definir a URL que será exibida no navegador
    routes //As rotas da aplicação
  }
)

//Exportando o router
export default router    