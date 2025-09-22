/* cui.js - 简洁 UI 组件库（按钮/进度条/对话框），纯JS+CSS，无依赖 */
(function () {
    // ===== 主题色，可修改为你喜欢的颜色 =====
    const THEME_COLOR = "#0e3353";   // 微信绿（默认）
    const THEME_COLOR_HOVER = "#154a7a";

    const css = `
    .fixed-top {
  position: fixed;      /* 固定在视口，不随滚动移动 */
  top: 0;               /* 顶部对齐 */
  left: 0;              /* 左边对齐 */
  width: 100%;          /* 宽度占满整个视口 */
  z-index: 9999;        /* 置顶层级，确保在最上面 */
  background-color: #0e3353; /* 示例背景色 */
  color: #fff;          /* 字体颜色 */
  padding: 12px 16px;   /* 内边距 */
  box-shadow: 0 2px 6px rgba(0,0,0,0.2); /* 阴影效果 */
  text-align: center;   /* 居中文本 */
  font-size: 16px;
}
  .cui-btn {
    display: inline-block;
    padding: 8px 16px;
    font-size: 14px;
    border-radius: 6px;
    border: none;
    cursor: pointer;
    background: ${THEME_COLOR};
    color: #fff;
    transition: background 0.2s;
  }
  .cui-btn:hover { background: ${THEME_COLOR_HOVER}; }

  .cui-progress {
    width: 100%;
    background: #f2f2f2;
    border-radius: 6px;
    overflow: hidden;
    height: 16px;
  }
  .cui-progress-bar {
    height: 100%;
    width: 0%;
    background: ${THEME_COLOR};
    transition: width 0.3s;
  }

  .cui-dialog-mask {
    position: fixed; inset: 0;
    background: rgba(0,0,0,0.4);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 9999;
  }
  .cui-dialog {
    background: #fff;
    border-radius: 8px;
    padding: 20px;
    width: 260px;
    text-align: center;
    box-shadow: 0 4px 12px rgba(0,0,0,0.15);
  }
  .cui-dialog p {
    margin-bottom: 16px;
    font-size: 14px;
    color: #333;
  }
  .cui-dialog-btns {
    display: flex;
    justify-content: space-between;
    gap: 12px;
  }
  .cui-btn-secondary {
    background: #e5e5e5;
    color: #333;
  }
  .cui-btn-secondary:hover {
    background: #d4d4d4;
  }
  `;
    const style = document.createElement("style");
    style.textContent = css;
    document.head.appendChild(style);

    /** 创建按钮 */
    function createButton({ text = "按钮", onClick = null } = {}) {
        const btn = document.createElement("button");
        btn.className = "cui-btn";
        btn.textContent = text;
        if (typeof onClick === "function") {
            btn.addEventListener("click", onClick);
        }
        return btn;
    }

    /** 创建进度条 */
    function createProgress({ value = 0 } = {}) {
        const wrapper = document.createElement("div");
        wrapper.className = "cui-progress";
        const bar = document.createElement("div");
        bar.className = "cui-progress-bar";
        wrapper.appendChild(bar);

        function setProgress(v) {
            const percent = Math.max(0, Math.min(100, v));
            bar.style.width = percent + "%";
        }
        setProgress(value);

        return { wrapper, setProgress };
    }


    function createDiv({ className = '', onClick = null, child = null, parent = document.body } = {}) {
        const div = document.createElement('div');

        // 点击事件
        if (typeof onClick === 'function') div.addEventListener('click', onClick);

        // 添加子元素
        if (child) {
            if (Array.isArray(child)) child.forEach(c => div.appendChild(c));
            else div.appendChild(child);
        }

        // 解析 className
        const classes = Array.isArray(className) ? className : className.split(/\s+/);
        classes.forEach(c => {
            switch (true) {
                // 组合快捷 flex
                case c === 'flex-center-between':
                    div.style.display = 'flex';
                    div.style.justifyContent = 'space-between';
                    div.style.alignItems = 'center';
                    break;
                case c === 'flex-center-start':
                    div.style.display = 'flex';
                    div.style.justifyContent = 'flex-start';
                    div.style.alignItems = 'center';
                    break;
                case c === 'flex-center-end':
                    div.style.display = 'flex';
                    div.style.justifyContent = 'flex-end';
                    div.style.alignItems = 'center';
                    break;
                case c === 'flex-center':
                    div.style.display = 'flex';
                    div.style.justifyContent = 'center';
                    div.style.alignItems = 'center';
                    break;

                // 单独 flex
                case c === 'flex': div.style.display = 'flex'; break;

                // margin
                case c.startsWith('mx-'): div.style.marginLeft = div.style.marginRight = c.slice(3) + 'px'; break;
                case c.startsWith('ml-'): div.style.marginLeft = c.slice(3) + 'px'; break;
                case c.startsWith('mr-'): div.style.marginRight = c.slice(3) + 'px'; break;
                case c.startsWith('mt-'): div.style.marginTop = c.slice(3) + 'px'; break;
                case c.startsWith('flex-'): div.style.flex = c.slice(5); break;
                case c.startsWith('mb-'): div.style.marginBottom = c.slice(3) + 'px'; break;
                case c.startsWith('w-'): div.style.width = c.slice(2) + 'px'; break;
                case c.startsWith('h-'): div.style.height = c.slice(2) + 'px'; break;
                case c.startsWith('text-'): div.style.textAlign = c.slice(5); break;

                // padding
                case c.startsWith('p-'): div.style.padding = c.slice(2) + 'px'; break;
                case c.startsWith('px-'): div.style.paddingLeft = div.style.paddingRight = c.slice(3) + 'px'; break;
                case c.startsWith('py-'): div.style.paddingTop = div.style.paddingBottom = c.slice(3) + 'px'; break;
                case c.startsWith('pl-'): div.style.paddingLeft = c.slice(3) + 'px'; break;
                case c.startsWith('pr-'): div.style.paddingRight = c.slice(3) + 'px'; break;
                case c.startsWith('pt-'): div.style.paddingTop = c.slice(3) + 'px'; break;
                case c.startsWith('pb-'): div.style.paddingBottom = c.slice(3) + 'px'; break;

                // border-radius
                case c === 'rounded': div.style.borderRadius = '6px'; break;
                case c === 'rounded-lg': div.style.borderRadius = '12px'; break;
                case c === 'rounded-full': div.style.borderRadius = '9999px'; break;

                // text & alignment
                case c === 'center': div.style.textAlign = 'center'; break;

                // items
                case c === 'items-center': div.style.alignItems = 'center'; break;

                // bg color
                case c.startsWith('bg-'): div.style.background = c.slice(3); break;
                case c.startsWith('color-'): div.style.color = c.slice(6); break;


                // fallback: 自定义 class
                default: div.classList.add(c);
            }
        });

        parent.appendChild(div);
        return div;
    }


    function createSpan({ text = '文字', className = '' } = {}) {
        const span = document.createElement('span');
        span.textContent = text;

        const setText = (val) => {
            span.textContent = val
        }


        // 解析 className
        const classes = Array.isArray(className) ? className : className.split(/\s+/);

        classes.forEach(c => {
            switch (true) {
                // margin
                case c.startsWith('mx-'): span.style.marginLeft = span.style.marginRight = c.slice(3) + 'px'; break;
                case c.startsWith('ml-'): span.style.marginLeft = c.slice(3) + 'px'; break;
                case c.startsWith('mr-'): span.style.marginRight = c.slice(3) + 'px'; break;
                case c.startsWith('mt-'): span.style.marginTop = c.slice(3) + 'px'; break;
                case c.startsWith('mb-'): span.style.marginBottom = c.slice(3) + 'px'; break;
                case c.startsWith('bg-'): span.style.background = c.slice(3); break;
                case c.startsWith('color-'): span.style.color = c.slice(6); break;
                default: span.classList.add(c);
            }
        });

        return { span, setText };
    }



    /** 创建确认对话框 */
    function showConfirm({ message = "确认操作？", onConfirm = null, onCancel = null } = {}) {
        const mask = document.createElement("div");
        mask.className = "cui-dialog-mask";

        const dialog = document.createElement("div");
        dialog.className = "cui-dialog";

        const msg = document.createElement("p");
        msg.textContent = message;

        const btns = document.createElement("div");
        btns.className = "cui-dialog-btns";

        const btnCancel = document.createElement("button");
        btnCancel.className = "cui-btn cui-btn-secondary";
        btnCancel.textContent = "取消";

        const btnOk = document.createElement("button");
        btnOk.className = "cui-btn";
        btnOk.textContent = "确认";

        btns.appendChild(btnCancel);
        btns.appendChild(btnOk);
        dialog.appendChild(msg);
        dialog.appendChild(btns);
        mask.appendChild(dialog);
        document.body.appendChild(mask);

        btnCancel.onclick = () => {
            document.body.removeChild(mask);
            if (typeof onCancel === "function") onCancel();
        };

        btnOk.onclick = () => {
            document.body.removeChild(mask);
            if (typeof onConfirm === "function") onConfirm();
        };

        return mask;
    }

    // 暴露 API
    window.CUI = {
        createButton,
        createProgress,
        showConfirm,
        createDiv,
        createSpan
    };
})();
