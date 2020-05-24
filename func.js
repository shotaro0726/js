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

function isTweetable1(text) {
    return text.length <= 140;
}

const isTweetable = (text) => {
    return text.length <= 140;
}

// function bring(food) {
//     if () {
        
//     }
// }

// function peel(food) {
//     if () {

//     }
// }

// function cut(food) {
//     if () {

//     }
// }

function washed(fn) {
    if (washed === 'end') {
        fn();
    }
}

function bring(food) {

}

function peer(food) {

}

function cut(food) {

}

washed(bring);

function unFollow() {
    console.log('フォローを外しました。');
}

function cancelTweet() {
    console.log('ツイートをキャンセルしました。');
}

function confirmed(fn) {
    const input = prompt("実行しますか？");
    fn(input);  
}

confirmed((input) => {
    if (input === "実行") {
        console.log("リポジトリを削除");
    }
});

confirmed(unFollow);

const cancelTweet = () => {
    console.log("実行しますか?");
}

prompt("実行しますか?");

const btn = document.getElementById("button");
btn.addEventListener("click", () => {
    console.log("フォロー解除");
});

const foods = ["にんじん", "ぽてと", "玉ねぎ"];
foods.forEach((food) => {
    console.log(food);
});

