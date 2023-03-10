const menu = (content) => {
  let controller = true;
  do {
    let localContent = content;
    console.log("Insira o dígito correspondente à qual opção deseja exibir:");
    console.log("\n1- Listar o histórico do salário mínimo");
    console.log("2- Listar o histórico da taxa IPCA (inflação)");
    console.log("3- Comparar e listar a porcentagem de crescimento salarial com a inflação(IPCA)");
    console.log("4- Finalizar aplicação");
    let userInput = rl.question("Dígito informado:");
    console.log("Escolha do usuário: "+ userInput);
    optionController(userInput, localContent);
  }while(controller);
}
const optionController = (userChoice, content) => {
	let label_ano = "Ano:";
	let label_salario = "Salário mínimo:";
	let label_cresciSal = "Crescimento salarial:";
	let label_ipca = "Inflação IPCA:";
	let outputController = userChoice;
	if(outputController===1){//exibiçao caso opção 1
 	    for(let ano of content){
            let ano = content.ano;
            let salario = content.salario;
             console.log(label_ano.padEnd(20,'.') + ano);
	           console.log(label_salario.padEnd(20,'.') + salario);
          } 
	}
	else if(outputController===2){//exibiçao caso opção 2
	    for(let ano of content){
            let ano = content.ano;
            let ipca = content.ipca;
            console.log(label_ano.padEnd(20,'.') + ano);	      
            console.log(label_ipca.padEnd(20,'.') + ipca);
            }
	}
	else if(outputController===3){//exibiçao caso opção 3
          for(let i=0;i<content.length;i++){ // for tradicional utilizado para acesso a indice anterior
            let ano = content[i].ano;
            let salario = content[i].salario;
            let ipca = content[i].ipca;
  	    let salarioAnterior = (i !== 0) ? content[i-1] : 0;	//compara com mes anterior
	    let diferenca = salario - salarioAnterior;	  
            let cresciSal = (diferenca/salarioAnterior)*100; 
            console.log(label_ano.padEnd(20,'.') + ano);
	    console.log(label_salario.padEnd(20,'.') + salario);
	    console.log(label_cresciSal.padEnd(20,'.') + cresciSal.toFixed(2));
	    console.log(label_ipca.padEnd(20,'.') + ipca);
          }
	}

  else if(outputController===4){
        controller = false;
  }

  else{
    console.log("\nInput de usuário nao é valida, favor inserir uma das opções indicas.");
  }
}

export default menu;
