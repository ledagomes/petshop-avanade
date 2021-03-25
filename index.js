const nomePetshop = "PETSHOP AVANADE";

let pets = [
    {
    nome: 'Billy',
    tipo: 'cão',
    idade: 11,
    raça: 'SRD',
    peso: '20',
    tutor: 'Leda',
    fone: '1199333-3333',
    vacinado: true,
    servicos: ['banho', 'tosa']
    }
    ,
    {
        nome: 'Penelope',
        tipo: 'cão',
        idade: 17,
        raça: 'SRD',
        peso: '22',
        tutor: 'João',
        fone: '1199333-4444',
        vacinado: false,
        servicos: ['banho']
    }
    ,
    {
            nome: 'Angel',
            tipo: 'cão',
            idade: 07,
            raça: 'SRD',
            peso: '15',
            tutor: 'Gustavo',
            fone: '1199333-5555',
            vacinado: true,
            servicos: ['banho', 'pedicure']
    }

];

//ctrl barra console.log(pet);
//criar uma função para imprimir aerofunction
//como faz para percorrer um array?

/*const listarPets = () =>{
    //for(let i=0; i<pets.length; i++){
        //mais usado forof
         // console.log(pets[i].nome);
        for(let pet of pets){
           console.log(`${pet.nome}, ${pet.idade},${pet.tipo}, ${pet.raca}`);

        
        //console.log(pets[i].nome); 
        //console(´O nome do pet é ${pets[i].nome}`);
        //${} indica que tem um conteudo variável

        }

        const vacinarPet = () => {
            for (let pet of pets){
                if(pet.vacinado == true){
                    console(`Pets que estão vacinados:  ${pets[i].nome}`);
                (pet.vacinado== false);
                    console(`O ${pets[i].nome} precisa ser vacinado!`)
                }

            }*/
const vacinarPet = () => {
    for (let pet of pets){
        if(pet.vacinado == false){
            pet.vacinado = true;
            console.log(`Pets que estão vacinados:  ${pet.nome}`);
        } else{
            console.log(`O ${pet.nome} precisa ser vacinado!`)
        }
    }
}       

//vacinarPet();

const campanhaVacinar = () => {
    let soma = 0;
    for (let pet of pets){
        if (pet.vacinado == false){
            soma++;
        }
    }
    console.log(`${soma} pets foram vacinados`);
        
}
//campanhaVacinar();

const incluirPet = ()=>{
   pets.push({
            nome: 'Sultão',
            tipo: 'gato',
            idade: 03,
            raça: 'SRD',
            peso: '15',
            tutor: 'Gertrudes',
            fone: '1199333-666',
            vacinado: true,
            servicos: []
         });
            for (let pet of pets){
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
 const darBanhoPet = () => {
    for(let pet of pets){
            if(!(pet.servicos.includes('banho'))){
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
                console.log(`${pet.nome} está com tosa feita!`);    
        }
    } 
}    
tosarPet();

const apararUnhasPet = () => {
    for(let pet of pets){
            if(!(pet.servicos.includes('apararUnhas'))){
                pet.servicos.push('apararUnhas');
                console.log(`${pet.nome} está com unhas aparadas!`);    
        }
    } 
}    
apararUnhasPet();
