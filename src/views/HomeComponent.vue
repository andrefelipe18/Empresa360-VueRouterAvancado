<template>
  <div>
      <nav class="navbar navbar-light bg-light menu-superior">
          <div class="container">
              <router-link class="navbar-brand" to="/home">Empresa 360 / Home</router-link>
              <div class="navbar-nav">
                  <ul class="navbar-nav">
                      <li class="nav-item">
                          <router-link class="nav-link" to="/">Sair</router-link>
                      </li>
                  </ul>
              </div>
          </div>
      </nav>

      <div class="d-flex">
          <div class="list-group menu-esquerda">
              <router-link class="list-group-item list-group-item-action" to="/home/dashboard" active-class="ativo" exact-active-class="exatamente-ativo"><i class="bi bi-speedometer2"></i>Dashboard</router-link>
              <router-link class="list-group-item list-group-item-action" to="/home/vendas"><i class="bi bi-cart"></i>Vendas</router-link>
              <router-link class="list-group-item list-group-item-action" to="/home/vendas/leads"><i class="bi bi-caret-right"></i>Leads</router-link>
              <router-link class="list-group-item list-group-item-action" to="/home/vendas/contratos"><i class="bi bi-caret-right"></i> Contratos</router-link>
              
              <router-link class="list-group-item list-group-item-action" to="/home/servicos"><i class="bi bi-card-checklist"></i>Serviços</router-link>
          </div>

          <div class="w-100">
              <nav aria-label="breadcrumb" class="pt-1 ps-3">
                  <ol class="breadcrumb">
                      <li class="breadcrumb-item active" aria-current="page">Home</li>
                  </ol>
              </nav>

              <div class="container-fluid">
                  <router-view></router-view>
              </div>

          </div>
      </div>
  </div>
</template>
<style scoped>
.menu-superior {
    border-bottom: solid 1px #ccc;
}

.menu-esquerda {
    border-right: solid 1px #ccc;
    width: 250px;
}

.list-group-item {
    border-top: none;
    border-right: none;
}
.ativo {
    color: #fff;
    background-color: #0d6efd;
    border-color: #0d6efd;
}
.router-link-exact-active{
    color: #fff;
    background-color: #65a1fa;
    border-color: #65a1fa;
}
</style>