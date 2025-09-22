let max = 0
let els = []
let cur = 1
let is_end = false
let is_start = false
let list = []
let listMapper = {}
let fonts = {}
let fontList = []

function htmlToText(htmlStr) {
    const tmp = document.createElement('div');
    tmp.innerHTML = htmlStr;      // 解析标签和实体
    return tmp.textContent || tmp.innerText || '';
}
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
        item.question = htmlToText(item.question)
        let options = item.options
        if (options) {
            options = JSON.parse(options)
            for (let i = 0; i < options.length; i++) {
                const option = options[i];
                option.Value = htmlToText(option.Value)
            }
        }
        item.options = JSON.stringify(options)


        fonts[item.special_font] = 1
        list.push(item)
    }

    if (max) {
        setProgress(+(list.length / max * 100).toFixed(2))
    }

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


function getQuestionNum() {
    els = document.querySelectorAll("#body > div.middle-container.bj-eee > div.layout-container.prative-page > div.clearfix > div.layout-right.pull-right.lianxi-right > div:nth-child(1) > div.problem-list.clearfix > span")
    max = els.length || 0
    if (max) {
        setQuestionCount(max)
        row.style.visibility = 'visible'
        setProgress(+(list.length / max * 100).toFixed(2))
    }
}


function start() {
    is_start = true
    getQuestionNum()
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
        fontList = []
        for (const key in fonts) {
            fontList.push(key)
        }
        cur = max - 1
        if (Notification.permission === "granted") {
            new Notification("任务完成", {
                body: `共采集到${list.length}条数据`,
            });
        }
        is_end = true
    } else {
        cur += 10
    }
    setTimeout(() => {
        loop()
    }, randomInt(1000, 1500));
}


function downloadFile(filename, url) {
    console.log(filename, url);
    const a = document.createElement('a');
    a.href = url;        // 文件地址
    a.download = `${filename}.ttf`; // 下载后的文件名
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
}



const downloadFonts = (fonts) => {
    let arr = fonts.map(font => {
        return `https://resource-cdn.kaoshibao.com/fonts/${font}.ttf`
    })
    window.dispatchEvent(new CustomEvent('downloadFilesEvent', { detail: arr }));
    // arr.forEach(item => {
    //     downloadFile(item.name, item.url)
    // });
}


setTimeout(() => {
    let pNameEl = document.getElementsByClassName('p-name')
    let fullName = ''
    if (pNameEl.length) {
        let kNameEl = document.getElementsByClassName('k-name')
        fullName = pNameEl[0].innerText
        if (kNameEl.length) {
            fullName = kNameEl[0].innerText + '_' + pNameEl[0].innerText
        }
        localStorage.setItem("FULL_NAME", fullName)
    }
}, 1200);

setTimeout(() => {
    getQuestionNum()
}, 1500);




const CUI = window.CUI

const { span: paperNameEl, setText: setPaperName } = CUI.createSpan({
    text: localStorage.getItem("FULL_NAME") || '',
    className: ['color-#000']
})


const { span: questionCountEl, setText: setQuestionCount } = CUI.createSpan({
    text: "",
    className: ['color-#000']
})


const collect = CUI.createButton({
    text: '采集题目',
    onClick: () => {
        if (!list.length) {
            alert("未劫持到请求数据，请检查是否重写了目标js函数")
            return
        }
        let d = localStorage.getItem("FULL_NAME")
        setPaperName(d || '-')
        start()
    }
})


const send = CUI.createButton({
    text: '发送数据',
    onClick: () => {
        let d = localStorage.getItem("FULL_NAME")
        const value = prompt("请输入题库名称：", d);
        if (value !== null) {
            downloadFonts(fontList)
            sendData({ question_bank: { name: value }, items: list })
            els[0].click()
        } else {
            console.log("用户点击了取消");
        }
    }
})


const downFonts = CUI.createButton({
    text: '下载所需字体',
    onClick: () => {
        downloadFonts(fontList)
    }
})

const { wrapper, setProgress } = CUI.createProgress({ value: 1 })
const row = CUI.createDiv({
    className: 'fixed-top bg-#fff px-32 py-24',
    child: [
        CUI.createDiv({
            className: 'flex-center rounded mb-8', child: [
                CUI.createDiv({
                    className: 'w-80 text-left', child: [
                        CUI.createSpan({
                            text: "题库名称:",
                            className: ['color-#000']
                        }).span
                    ]
                }),
                CUI.createDiv({
                    className: 'ml-12 rounded flex-1 text-left', child: [
                        paperNameEl
                    ]
                })
            ]
        }),
        CUI.createDiv({
            className: 'flex-center rounded mb-8', child: [
                CUI.createDiv({
                    className: 'w-80 text-left', child: [
                        CUI.createSpan({
                            text: "题库数量:",
                            className: ['color-#000']
                        }).span
                    ]
                }),
                CUI.createDiv({
                    className: 'ml-12 rounded flex-1 text-left', child: [
                        questionCountEl
                    ]
                })
            ]
        }),
        CUI.createDiv({
            className: 'flex-center rounded mb-8', child: [
                CUI.createDiv({
                    className: 'w-80 text-left', child: [
                        CUI.createSpan({
                            text: "进度:",
                            className: ['color-#000']
                        }).span
                    ]
                }),
                CUI.createDiv({ className: 'ml-12 rounded flex-1', child: [wrapper] })
            ]
        }),
        CUI.createDiv({
            className: 'flex-center-end mt-24', child: [
                CUI.createDiv({ className: 'mr-24', child: [collect] }),
                CUI.createDiv({ className: 'mr-24', child: [send] }),
                CUI.createDiv({ className: 'mr-24', child: [downFonts] }),
            ]
        })
    ]
});
row.style.height = '200px';
row.style.visibility = 'hidden';


if ("Notification" in window) {
    // 请求权限
    Notification.requestPermission().then(permission => {
        if (permission === "granted") {
            console.log("用户允许通知权限");
        } else if (permission === "denied") {
            console.log("用户拒绝通知权限");
        } else {
            console.log("用户未作选择");
        }
    });
} else {
    console.log("当前浏览器不支持通知 API");
}