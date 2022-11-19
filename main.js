var texts = [
    '전태성<>안녕 나는 태성이야<img/tae>',
    '전태성<>넌 이름이 뭐니?<img/tae>',
    '윤은식<>난 윤은식이라고해<img/eun>',
    '윤은식<>만나서 반가워!<img/eun>',
    '전태성<>난 안반가워<img/tae2>'
]

var nowText = 0;

function textBox(content) {
    var texts = content.split('<>');
    document.getElementById('textBox').innerHTML = `<h1>${texts[0]}</h1>`;
    var img = texts[1]?.split('<img/');
    document.getElementById('imgBox').innerHTML = `<img src="img/${img[1].split('>')[0]}.png">`;
    var contents = img[0].split('');
    for (let i = 0; i < contents.length; i++) {
        setTimeout(() => {
            document.getElementById('textBox').innerHTML += contents[i];
            if (i == contents.length - 1) {
                document.getElementById('textBox').innerHTML += '<button onclick="next()" id="nextBtn">다음</button>';
            }
        }, 30 * i);
    }
}

function next() {
    textBox(texts[nowText]);
    nowText ++;
}

next();