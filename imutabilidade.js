//-- Imutabilidade de Arrays --//

const nums = [3, 1, 7, 9, 4, 6];

// ordenação clonando o array original
function ordenar(array) {
    return [...array].sort((a, b) => a - b);
}

const numsOrdenados = ordenar(nums);

const novoNums = ['a', ...nums];
// console.log(novoNums);

// console.log('array original:', nums);
// console.log('array ordenado:', numsOrdenados);

// soma mantendo o array original
const somar = (a, b) => a + b
const total = nums.reduce(somar)
// console.log('array somado:', total);

//-- Imutabilidade de Objetos --//
const pessoa = {
    nome: 'Isa',
    altura: 1.64,
    idade: 17,
    endereco: {
        rua: 'Itobi'
    }
}

const novaPessoa = { ...pessoa, nome: 'Victor', endereco: { rua: 'outra' } };

console.log(pessoa);
console.log(novaPessoa);
