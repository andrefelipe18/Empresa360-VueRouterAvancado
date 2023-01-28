import axios from 'axios';

export default {
    data(){
        return{
           dados: {}
        }
     },
     methods: {
      getDadosApi(url){
          //Pegando os dados atraves do id enviado pela rota
          axios.get(url).then(response => {
              this.dados = response.data;
          }).catch(erro => console.log(erro));
      }
     },
}