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
    alias: '/app', //O caminho alternativo da rota
   // name: 'Home', //O nome da rota
    component: HomeComponent, //O componente que será renderizado
    children: [ //As rotas filhas
    {path: 'vendas', component: () => import('@/components/vendas/VendasComponent.vue'), 
      children:[//As rotas filhas de vendas
        {path: 'leads', name: 'Leads', component: () => import('@/components/vendas/LeadsComponent.vue')},
        {path: 'leads/:id', name: 'Lead', alias: ['/l/:id', '/pessoa/:id'],component: () => import('@/components/vendas/LeadComponent.vue')}, //Rota dinamica para visualizar o lead
        {path: 'contratos', name: 'Contratos', component: () => import('@/components/vendas/ContratosComponent.vue')},
        {path: '', component: () => import('@/components/vendas/VendasPadrao.vue')}
      ]
    },
      {path: 'servicos', name: 'Servicos' ,component: () => import('@/components/servicos/ServicosComponent.vue'), children: [
        {path: ':id', name: 'Servico', alias: '/s/:id',components: {
             default: () => import('@/components/servicos/ServicoComponent.vue'),
             opcoes: () => import('@/components/servicos/OpcoesComponent.vue'),
             indicadores: () => import('@/components/servicos/IndicadoresComponent.vue'),
          }
        },
      ]},
      {path: 'dashboard', components: {
          default: () => import('@/components/dashboard/DashboardComponent.vue'),
          rodape: () => import('@/components/dashboard/DashboardRodape.vue')
        }
      },
    ]
  },
  {
    path: '/login',
    component: () => import('../views/LoginComponent.vue')
  },
  {path: '/:catchAll(.*)*', name: 'notFound', component: () => import('@/views/RotaNaoEncontrada.vue')} //Rota para redirecionar para a página inicial caso a rota não exista
  
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