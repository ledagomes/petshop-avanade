const nomePetshop = "PETSHOP AVANADE";
const fs = require('fs');
//const todosPets = require('./todosPets.json');
let todosPets = fs.readFileSync('./todosPets.json');

bancoDados = JSON.parse(todosPets);


const listarPets = () => {
    //for(let i=0; i<pets.length; i++){
    //mais usado forof
    // console.log(pets[i].nome);
    for (let pet of bancoDados.pets) {
        console.log(`${pet.nome}, ${pet.idade},${pet.tipo}, ${pet.raca}`);

    }
};
listarPets();

const AtualizarBancoDados = ()=>{
    let petAtualizado = JSON.stringify(bancoDados);
    fs.writeFileSync('./todosPets.json' , petAtualizado, 'utf-8');

}

const vacinarPet = () => {
    for (let pet of bancoDados.pets) {
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
    for (let pet of bancoDados.pets) {
        (pet.vacinado == false) ?  soma++ : null;
    }
    console.log(`${soma} pets foram vacinados`);

}
campanhaVacinar();

const adicionarPet = novoPet => {
    bancoDados.pets.push(novoPet);
    AtualizarBancoDados(); 
    console.log(`${novoPet.nome} foi adicionado com sucesso!`);
}
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
    for (let pet of bancoDados.pets) {
        console.log(pet.nome)
    }


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
    console.log(`Olá! ${pet.nome} já tomou banho! Tenha um ótimo dia! Volte sempre!`)
}

const tosarPet = pet => {
    atenderCliente(pet, 'tosa');
    console.log(`Olá! ${pet.nome} foi tosado! Tenha um ótimo dia! Volte sempre! `)

}
const apararUnhasPet = pet => {
    atenderCliente(pet, 'pedicure');
    console.log(`Olá! ${pet.nome} está com as unhas cortadinhas! Tenha um ótimo dia! Volte sempre!`)

}

darBanhoPet(bancoDados.pets[1]);
tosarPet(bancoDados.pets[2]);
apararUnhasPet(bancoDados.pets[4]);





