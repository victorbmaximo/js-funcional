// 1. Operadores de criação
// 2. Operadores Encadeáveis

const { of } = require('rxjs');
const { last, map } = require('rxjs/operators');

of(1, 2, 3)
    .pipe(
        last(),
        map(v => v * 2)
    ).subscribe(
        v => console.log(v)
    )