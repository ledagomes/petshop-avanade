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
        vacinado: true,
        servicos: ['banho', 'tosa']
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
            servicos: ['banho', 'tosa']
    }

];

//ctrl barra console.log(pet);
//criar uma função para imprimir aerofunction
//como faz para percorrer um array?

const listarPets = () =>{
    //for(let i=0; i<pets.length; i++){
        //mais usado forof
         // console.log(pets[i].nome);
        for(let pet of pets){
           console.log(`${pet.nome}, ${pet.idade},${pet.tipo}, ${pet.raca}`);

        
        //console.log(pets[i].nome); 
        //console(´O nome do pet é ${pets[i].nome}`);
        //${} indica que tem um conteudo variável

        }
}
listarPets();