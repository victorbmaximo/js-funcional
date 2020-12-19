const { interval, Observable, noop } = require('rxjs');

// const gerarNumeros = interval(1000);

// const sub1 = gerarNumeros.subscribe(num => {
//     console.log(num)
// });

// setTimeout(() => {
//     sub1.unsubscribe();
// }, 5000);

function entre(min, max) {
    return new Observable(subs => {
        // for (let i = min; i <= max; i++) {
        //     subs.next(i)
        // }
        Array(max - min).fill().map((_, i) => {
            subs.next(min + i);
        });
        subs.complete();
    });
}


entre(4, 10).subscribe(
    num => console.log(num),
    noop,
    () => console.log('fim!')
)