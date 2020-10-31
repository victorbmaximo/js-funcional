const carrinho = [
    { nome: 'Caneta', qtde: 10, preco: 7.99, fragil: true },
    { nome: 'Impressora', qtde: 1, preco: 649.50, fragil: true },
    { nome: 'Caderno', qtde: 4, preco: 27.10, fragil: false },
    { nome: 'Lapis', qtde: 3, preco: 5.82, fragil: false },
    { nome: 'Tesoura', qtde: 1, preco: 19.20, fragil: true },
];

// 1
const getFrageis = carrinho.filter(item => item.fragil)
// console.log(getFrageis);

// // 2
const getTotalFrageis = getFrageis.map(item => item.preco * item.qtde)
console.log(getTotalFrageis);

// 3
const getMedia = getTotalFrageis.reduce((acc, elm, i, arr) => {
    const qtdItens = arr.length;
    let somatoria = acc + elm;
    let media;
    console.log('acc: ', acc, '| elm: ', elm, '| soma: ', somatoria)
    if (i == arr.length - 1) {
        media = somatoria / qtdItens;

        return media;
    }


    return somatoria;

});
console.log(getMedia)