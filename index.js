import rl from 'readline-sync';


const menu = () => { //Debuggin version , need trimming
        let controller = true;
        do {
          console.log("Insira o dígito correspondente à qual opção deseja exibir:");
          console.log("\n1- Listar o histórico do salário mínimo");
          console.log("2- Listar o histórico da taxa IPCA (inflação)");
          console.log("3- Comparar e listar a porcentagem de crescimento salarial com a inflação(IPCA)");
          console.log("4- Finalizar aplicação");
          let userInput = rl.question("Dígito informado:");
          console.log(userInput);
          Number(userInput) === 4 ? controller = false : controller = true;
        }while(controller);
}
menu();