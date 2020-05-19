const foo = {
    // alert: function () { },
    alert() { }
};

foo.alert('ABC');

function alt() {
    return 
}
function cut(food) {
    const cutFood = food.slice();
    return cutFood;
};

const cutCarrot = cut(carrot);
const cutPotato = cut(potato);

function throwAway(food) {
    delete food;
};

const deleteFood = throwAway(cutCarrot);
const deleteFood = throwAway(cutPotato);

function isTweetable(text) {
    return text.length <= 140;
}

function alertTweetable(text) {
    if (text.length <= 140) {
        alert('ツイートできます')
    } else {
        alert('文字数が超えています')
    }
};


