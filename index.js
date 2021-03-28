const nomePetshop = "PETSHOP AVANADE";

const bancoDados = require('./todosPets.json');

let pets = bancoDados.pets;
//console.log(bancoDados);


//ctrl barra console.log(pet);
//criar uma função para imprimir aerofunction
//como faz para percorrer um array?

const listarPets = () => {
    //for(let i=0; i<pets.length; i++){
    //mais usado forof
    // console.log(pets[i].nome);
    for (let pet of pets) {
        console.log(`${pet.nome}, ${pet.idade},${pet.tipo}, ${pet.raca}`);

    }
};
listarPets();


const vacinarPet = () => {
    for (let pet of pets) {
        if (!pet.vacinado) {
            pet.vacinado = true;
            console.log(`Pets que estão vacinados: ${pet.nome} `);
        } else {
            console.log(`O ${pet.nome} precisa ser vacinado!`)
        }
    }
}

vacinarPet();

const campanhaVacinar = () => {
    let soma = 0;
    for (let pet of pets) {
        if (pet.vacinado == false) {
            soma++;
        }
    }
    console.log(`${soma} pets foram vacinados`);

}
campanhaVacinar();

const incluirPet = () => {
    pets.push({
        nome: 'Sultão',
        tipo: 'gato',
        idade: 3,
        raça: 'SRD',
        peso: '15',
        tutor: 'Gertrudes',
        fone: '1199333-666',
        vacinado: true,
        servicos: []
    });
    for (let pet of pets) {
        console.log(pet.nome)
    }
}
incluirPet();

/*Serviços do petshop
Crie uma função chamada darBanhoPet(pet) que adiciona o 'banho' a lista
de serviços no historico do pet e exibe a mensagem <Nome do Pet> está de banho tomado!
Crie uma função chamada tosarPet(pet) que adiciona o 'tosa' a lista de
serviços no historico do pet e exibe  a mensagem <Nome do Pet> está com cabelinho na régua
Crie uma função chamada apararUnhasPet(pet) que adiciona o 'tosa' a lista
de serviços no historico do pet e exibe a mensagem <Nome do Pet>  está de unhas aparadas!*/


/*const darBanhoPet = () => {
    for (let pet of pets) {
        if (!(pet.servicos.includes('banho'))) {
            pet.servicos.push('banho');
            console.log(`${pet.nome} está de banho tomado!`);
        }
    }
}
darBanhoPet();

const tosarPet = () => {
   for(let pet of pets){
           if(!(pet.servicos.includes('tosar'))){
               pet.servicos.push('tosar');
               console.log(`${ pet.nome } está com tosa feita!`);
       }
   }
}
tosarPet();

const apararUnhasPet = () => {
   for(let pet of pets){
           if(!(pet.servicos.includes('apararUnhas'))){
               pet.servicos.push('apararUnhas');
               console.log(`${ pet.nome } está com unhas aparadas!`);
       }
   }
}
apararUnhasPet();*/

//callback

const atenderCliente = (pet, servicos) => {
    pet.servicos.push({
        'nome': servicos,
    });
}

const darBanhoPet = pet => {
    atenderCliente(pet, 'banho');
    console.log(`${pet.nome} tomou banho!`)
}

const tosarPet = pet => {
    atenderCliente(pet, 'tosa');
    console.log(`${pet.nome} foi tosado! `)

}
const apararUnhasPet = pet => {
    atenderCliente(pet, 'pedicure');
    console.log(`${pet.nome} está com as unhas cortadinhas!`)

}

darBanhoPet(pets[1]);
tosarPet(pets[3]);
apararUnhasPet(pets[2]);





