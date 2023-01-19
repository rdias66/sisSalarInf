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
          console.log("Escolha do usuário: "+ userInput);
          Number(userInput) === 4 ? controller = false : controller = true;
        }while(controller);
}

const contentPrinter = (userChoice, content) => {
	let label_ano = "Ano:";
	let label_salario = "Salário mínimo:";
	let label_cresciSal = "Crescimento salarial:";
	let label_ipca = "Inflação IPCA:";
	let outputController = userChoice;
	if(outputController===1){//exibiçao caso opção 1
		console.log(label_ano.padEnd(20,'.') + content.ano);
		console.log(label_salario.padEnd(20,'.') + content.salario);
	}
	else if(outputController===2){//exibiçao caso opção 2
		console.log(label_ano.padEnd(20,'.') + content.ano);
		console.log(label_ipca.padEnd(20,'.') + content.ipca);
	}
	else if(outputController===3){//exibiçao caso opção 3

		console.log(label_ano.padEnd(20,'.') + content.ano);
		console.log(label_salario.padEnd(20,'.') + content.salario);
		console.log(label_cresciSal.padEnd(20,'.') + content.cresciSal);
		console.log(label_ipca.padEnd(20,'.') + content.ipca);
	}
}

const userChoice1 = (array_db) => {
	for(){ // depends on db, change must be made
		let content = {ano: array_db.ano, salario: array_db.salario}
		
	}
}

const userChoice2 = (array_db) => {
	for(){ // depends on db, change must be made
		let content = {ano: array_db.ano, ipca: array_db.ipca}
		
	}
}


const userChoice3 = (array_db) => {
	for(){ // depends on db, change must be made
		let content = {ano: array_db.ano, salario: array_db.salario, cresciSal: array_db.cresciSal, ipca: array_.db.ipca}
		
	}
}
menu();
