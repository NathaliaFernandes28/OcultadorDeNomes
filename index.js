let nomenave = prompt("Digite o nome da da Nave:");

let caractereNave = prompt("Digite o caractere que deseja substituir: ");

let caractereNaveNew = prompt("Digite o caractere por qual deseja substituir:");

let newnomenave = "";

for (i = 0; i < nomenave.length; i++) {
  if (nomenave[i] == caractereNave) {
    newnomenave += caractereNaveNew;
  } else {
    newnomenave += nomenave[i];
  }
}

let result = alert("O novo nome da Nave é: " + newnomenave);

/* Explicação:
   nomenave = nome da nave
  caractereNave = Caractere que deseja substituir. 
  caractereNaveNew = caractere que deseja substituir 
  newnomenave = variável que precisa estar vazia para colocarmos a letra que vamos substituir nela. 

  Explicando o for: 

  for (i = 0; i < nomenave.length; i++)
  i = índice que significa a primeira letra da palavra. 
  i < nomenave.length = Indica que o for vai percorrer toda o nome da nave até a última letra, vai percorrer toda a palavra, o nome da nave. 
  i++ = É para o for ir percorrendo letra por letra até o final do nome da nave. 
  
  Explicando o if():

  if (nomenave[i] == caractereNave) {
    newnomenave += caractereNaveNew;
  } else {
    newnomenave += nomenave[i];
  }
}
  Se o nome da nave for igual a letra que você quer substituir no nome, a variável que vai armazenar a letra substituida tem que ser somada ou igual a nova letra substituida. 

  Se não, a variável que vamos armazenar  a letra substituida vai ser somada ou igual ao nome original da Nave. 
*/
