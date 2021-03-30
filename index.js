const nomePetshop = 'PETSHOP AVANADE';
const fs = require('fs');
//const todosPets = require('./todosPets.json');
let todosPets = fs.readFileSync('./todosPets.json');

bancoDados = JSON.parse(todosPets);

const atualizarBanco = () => {
  let petsAtualizado = JSON.stringify(bancoDados, null, 2);
  fs.writeFileSync('bancoDados.json', petsAtualizado, 'utf-8');
}

const listarPets = () => {
  //for(let i=0; i<pets.length; i++){
  //mais usado forof
  // console.log(pets[i].nome);
  for (let pet of bancoDados.pets) {
    console.log(`${pet.nome}, ${pet.idade},${pet.tipo}, ${pet.raca}`);
  }
};
//listarPets();

/*const vacinarPet = () => {
  for (let pet of bancoDados.pets) {
    if (!pet.vacinado) {
      pet.vacinado = true;
      console.log(`Pets que estão vacinados: ${pet.nome} `);
    } else {
      console.log(`O ${pet.nome} precisa ser vacinado!`);
    }
  }
};
vacinarPet();*/

const vacinarPet = pet => {
  if (!pet.vacinado) {
    pet.vacinado = true;
    atualizarBanco();
    console.log(`${pet.nome} foi vacinado com sucesso!`);
  } else {
    console.log(`Ops, ${pet.nome} já está vacinado!`);
  }
}


const buscarPet = (nomePet) => {
  let petEncontrado = bancoDados.pets.find((pet) => {
    return pet.nome == nomePet;
  });
  return petEncontrado ? petEncontrado : `Nenhum pet encontrado com nome ${nomePet}`;
}

const filtrarTipoPet = (tipoPet) => {
  return pet.tipo == tipoPet
  let petsEncontrados = bancoDados.pets.filter((pet) => {
    return pet.tipo == tipoPet;
  });
  return petsEncontrados;
}

const filtrarTutor = (nomeTutor) => {
  let petsTutor = bancoDados.pets.filter((pet) => {
    return pet.tutor == nomeTutor;
  });
  console.log(`Pets do tutor ${nomeTutor}:`)
  petsTutor.forEach((pet) => {
    console.log(`${pet.nome} - ${pet.tipo}`)
  })
}

/*const campanhaVacinar = () => {
  let soma = 0;
  for (let pet of bancoDados.pets) {
    pet.vacinado == false ? soma++ : null;
  }
  console.log(`${soma} pets foram vacinados`);
};
campanhaVacinar();*/

const adicionarPet = novoPet => {
  bancoDados.pets.push(novoPet);
  atualizarBanco();
  console.log(`${novoPet.nome} foi adicionado com sucesso!`);
}

const campanhaVacina = () => {
  let petVacinadosCampanha = 0;

  bancoDados.pets = bancoDados.pets.map((pet) => {
    if (!pet.vacinado) {
      vacinarPet(pet);
      petVacinadosCampanha++;
    }
    return pet;
  });
}





  const atenderCliente = (pet, servicos) => {
    pet.servicos.push({
      nome: servicos,
    });
  };

  const darBanhoPet = (pet) => {
    atenderCliente(pet, 'banho');
    console.log(
      `Olá! ${pet.nome} já tomou banho! Tenha um ótimo dia! Volte sempre!`
    );
  };

  const tosarPet = (pet) => {
    atenderCliente(pet, 'tosa');
    console.log(
      `Olá! ${pet.nome} foi tosado! Tenha um ótimo dia! Volte sempre! `
    );
  };
  const apararUnhasPet = (pet) => {
    atenderCliente(pet, 'pedicure');
    console.log(
      `Olá! ${pet.nome} está com as unhas cortadinhas! Tenha um ótimo dia! Volte sempre!`
    );
  };

  adicionarPet({
    nome: 'Dolores',
    tipo: 'gato',
    idade: 9,
    raca: 'SRD',
    peso: '10',
    tutor: 'Leda',
    fone: '1199333-5555',
    vacinado: false,
    servicos: []
  });

  darBanhoPet(bancoDados.pets[1]);
  tosarPet(bancoDados.pets[2]);
  apararUnhasPet(bancoDados.pets[4]);
  filtrarTutor('Leda');
