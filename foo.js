import youtuber from './index';

youtuber.list();
youtuber.plan.bind(2);

youtuber.list.kichigai();


const foo = function (num1, num2) {
    return num1 + num2
};

const foo1 = () => { };

foo(1 + 2);
console.log(foo(1, 3))

const args = [1, 2, 3]
const args2 = [4, 5, 6]

const arrays = [
    ...args,
    ...args2
]

console.log(arrays);


