let youtuber = {
    list: {
        bushiness: {
            youtuber: [
                { name: 'オリラジの人', number: 1 },
                { name: '勝俣さん', number: 2 },
                alert('ビジネス系の方々')
            ],
            teach() { }
        },
        entertaiment: {
            youtuber: [
                { name: 'ヒカキン' },
                { name: 'はじめしゃちょー' },
                alert('トップの方々')
            ],
            makeSmile() { }
        },
        kichigai: {
            youtuber: [
                { name: 'よりひと' },
                { name: '遠藤チャンネル' },
                alert('基地外です')
            ]
        },
    },
    plan() { },
    uploadVideo() { }
};


export default youtuber;

console.log(youtuber.list.kichigai());
console.log(youtuber.list.bushiness());
console.log(document.getElementById());

