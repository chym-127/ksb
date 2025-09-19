let max = 0
let els = []
let cur = 1
let is_end = false
let is_start = false
let list = []
let listMapper = {}
let fonts = {}

window._InterceptQues = (data) => {
    let items = JSON.parse(JSON.stringify(data))
    for (let index = 0; index < items.length; index++) {
        const item = items[index];
        if (listMapper[item.hash]) {
            continue
        } else {
            listMapper[item.hash] = 1
        }
        delete item.id
        item.difficulty = +item.difficulty
        item.difficulty_score = +item.difficulty_score
        item.status = +item.status
        item.paper_id = 0
        item.parent_id = 0
        item.is_show = +item.is_show
        item.ai_analysis_like = +item.ai_analysis_like
        item.all_right = +item.all_right
        item.all_wrong = +item.all_wrong
        item.difficulty_score = +item.difficulty_score
        item.all_accuracy = +item.all_accuracy
        item.created_at = Date.parse(item.created_at.replace(" ", "T"));
        item.updated_at = Date.parse(item.updated_at.replace(" ", "T"));
        fonts[item.special_font] = 1
        list.push(item)
    }
    showQuestionCount();

    // if (!is_start || is_end) {
    //     return
    // }
}



function sendData(data) {
    // 创建 XMLHttpRequest 对象
    const xhr = new XMLHttpRequest();

    // 设置请求方法和 URL
    xhr.open("POST", "http://localhost:8848/question/create", true); // true 表示异步

    // 设置请求头（常用 JSON）
    xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");

    // 监听请求状态变化
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) { // 请求完成
            if (xhr.status >= 200 && xhr.status < 300) {
                console.log("响应数据:", xhr.responseText);
            } else {
                console.error("请求失败:", xhr.status, xhr.statusText);
            }
        }
    };

    // 发送请求，传入请求体（对象需转 JSON 字符串）
    xhr.send(JSON.stringify(data));

}


function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}



function start() {
    is_start = true
    els = document.querySelectorAll("#body > div.middle-container.bj-eee > div.layout-container.prative-page > div.clearfix > div.layout-right.pull-right.lianxi-right > div:nth-child(1) > div.problem-list.clearfix > span")
    max = els.length

    console.log(els, max);
    loop()
}

function loop() {
    if (!els?.length || is_end) {
        return
    }
    if (cur < max) {
        els[cur].click()
    }
    if (cur > max) {
        cur = max - 1
        is_end = true
    } else {
        cur += 10
    }
    setTimeout(() => {
        loop()
    }, randomInt(500, 1000));
}



let paper = {};
(function () {
    let el = document.createElement("button")
    el.innerText = "开始采集"
    el.style.position = "fixed"
    el.style.bottom = "20px"
    el.style.right = "20px"
    el.style.zIndex = 999999
    el.addEventListener("click", e => {
        console.log('开始采集');
        paper = JSON.parse(localStorage.getItem("paper"))
        start()
    })
    if (document.body) {
        document.body.appendChild(el)
    }
})();


(function () {
    window.episodes = {}
    let el = document.createElement("button")
    el.innerText = "发送数据"
    el.style.position = "fixed"
    el.style.bottom = "50px"
    el.style.right = "20px"
    el.style.zIndex = 999999
    el.addEventListener("click", e => {
        let d = localStorage.getItem("FULL_NAME")
        const value = prompt("请输入题库名称：", d);
        if (value !== null) {
            for (const key in fonts) {
                downloadFile(`https://resource-cdn.kaoshibao.com/fonts/${key}.ttf`, `${key}.ttf`);
            }
            sendData({ question_bank: { name: value }, items: list })
            els[0].click()
        } else {
            console.log("用户点击了取消");
        }

    })
    if (document.body) {
        document.body.appendChild(el)
    }
})();


function downloadFile(url, filename) {
    const a = document.createElement('a');
    a.href = url;        // 文件地址
    a.download = filename; // 下载后的文件名
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
}




// 创建 UI 更新函数
function showQuestionCount() {
    let container = document.getElementById("question-count-box");
    if (!container) {
        container = document.createElement("div");
        container.id = "question-count-box";
        Object.assign(container.style, {
            position: "fixed",
            bottom: "120px",
            right: "20px",
            padding: "10px 15px",
            background: "#2196F3",
            color: "#fff",
            fontSize: "16px",
            borderRadius: "8px",
            boxShadow: "0 2px 6px rgba(0,0,0,.3)"
        });
        document.body.appendChild(container);
    }
    container.textContent = `题目数量：${list.length}`;
}


setTimeout(() => {
    let pNameEl = document.getElementsByClassName('p-name')
    if (pNameEl.length) {
        let kNameEl = document.getElementsByClassName('k-name')
        localStorage.setItem("FULL_NAME", pNameEl[0].innerText)
        if (kNameEl.length) {
            localStorage.setItem("FULL_NAME", kNameEl[0].innerText + '_' + pNameEl[0].innerText)
        }
    }
}, 1200);