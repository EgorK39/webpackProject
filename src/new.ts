import * as indexTwo from './index2.js';
import './style.css';

document.write('Hello!!!');
indexTwo.hi('Ivan');

type PaymentMethod = {
    id: number,
    name: string,
    limit?: number,
};

const neu: PaymentMethod = {
    id: 123,
    name: "Egor"
};
console.log(neu)