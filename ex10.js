/*Declare como variável em seu código o array de contas de clientes abaixo;
Crie uma função para sacar dinheiro que deve receber como parâmetro o valor a ser sacado e o id da conta;
2.1. Se o valor for menor ou igual zero deve exibir a mensagem de valor inválido e não realizar nenhuma operação;
2.2. Se o valor for maior que o saldo em conta deve exibir a mensagem de saldo insuficiente e exibir o saldo atual;
2.3. Se o valor for maior que zero e menor que o saldo em conta deve exibir a mensagem informado que o saque ocorreu com sucesso e o saldo atual da conta após o saque, além de atualizar o array com esse novo valor;
Criar função para depositar dinheiro que deve receber como parâmetro o valor a ser depositado e o id da conta;
3.1. Se o valor for menor ou igual zero deve exibir a mensagem de valor inválido e não realizar nenhuma operação;
3.2. Se o valor for maior que zero deve exibir a mensagem informado que o deposito ocorreu com sucesso e o saldo atual da conta após o deposito, além de atualizar o array com esse novo valor;
Chamar as duas funções criadas para validar os cenários;*/


const contas = [
    {
      id: 1,
      saldo: 500,
    },
    {
      id: 2,
      saldo: 30000,
    },
    {
      id: 3,
      saldo: 50,
    },
  ];
  
  console.table(contas);

  const saque = ((valor,id) => {
    let idConta = contas.find (idConta => idConta.id === id);
    if (valor <= 0) {
        console.log ('Valor indisponivel para saque')
    }
    else if (valor > idConta.saldo){
        console.log (`Saque insuficiente. O saldo em conta: R$${idConta.saldo},00`)
    }
    else {
        sAtual = idConta.saldo -= valor
        console.log (`Saque no valor de R$${valor},00 realizado com sucesso. Saldo restante R$$${sAtual},00`)
    
     }

    return contas

 });

 