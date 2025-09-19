(window.webpackJsonp = window.webpackJsonp || []).push([[167], {
    1418: function (t, e, n) {
        "use strict";
        var o = n(939);
        n.n(o).a
    },
    1419: function (t, e, n) {
        "use strict";
        var o = n(940);
        n.n(o).a
    },
    1420: function (t, e, n) {
        "use strict";
        var o = n(941);
        n.n(o).a
    },
    1915: function (t, e, n) {
        "use strict";
        n.r(e);
        var o = n(147)
            , r = (n(76),
                n(90),
                n(41),
                n(295),
                n(82),
                n(25))
            , c = n(133)
            , l = (n(83),
                n(39),
                n(389),
                n(33))
            , h = (n(50),
                n(854))
            , d = n(294)
            , _ = n(800)
            , v = n(808)
            , f = n(2)
            , m = n(785)
            , y = n(69)
            , C = n(855)
            , w = n(301)
            , k = n(18)
            , x = {
                name: "jx-tips",
                data: function () {
                    return {}
                },
                created: function () { },
                props: ["vip_type", "question_id"],
                methods: {
                    bannerClick: function () {
                        this.$emit("bannerClick", {
                            id: this.question_id
                        })
                    }
                }
            }
            , D = (n(1418),
                n(9))
            , $ = Object(D.a)(x, function () {
                var t = this.$createElement
                    , e = this._self._c || t;
                return e("div", [e("div", {
                    staticClass: "jx-banner-tips"
                }, [this._m(0), this._v(" "), e("div", [e("el-button", {
                    attrs: {
                        type: "warning",
                        size: "mini"
                    },
                    on: {
                        click: this.bannerClick
                    }
                }, [this._v("申请解析")])], 1)])])
            }, [function () {
                var t = this.$createElement
                    , e = this._self._c || t;
                return e("div", {
                    staticClass: "left"
                }, [e("img", {
                    attrs: {
                        src: "https://resource-cdn.kaoshibao.com/pc/img/VIP@2x.png",
                        alt: ""
                    }
                }), this._v(" "), e("div", [e("div", {
                    staticClass: "main-tit"
                }, [this._v("VIP享无限次解析服务，助您更深入理解知识点。")])])])
            }
            ], !1, null, null, null).exports
            , A = n(853)
            , S = n(726)
            , j = n(382)
            , I = {
                props: ["types", "question_id"],
                data: function () {
                    return {
                        content: {},
                        showBottom: !1,
                        top_banners: [],
                        request_id: "",
                        conversation_id: "",
                        showMore: "1",
                        is_loading: "0",
                        message_list: [],
                        ai_assistant_selections: [],
                        common_selections: [],
                        suggest_questions: [],
                        default_title: "",
                        textAreaContent: "",
                        isOverflowing: !1,
                        lineHeight: 22,
                        shouldAutoScroll: !0,
                        eventSource: null
                    }
                },
                computed: {
                    user: function () {
                        return k.b.user || {
                            uid: "",
                            vip_type: "0"
                        }
                    }
                },
                mounted: function () {
                    var t = Object(r.a)(regeneratorRuntime.mark(function t() {
                        var e, content;
                        return regeneratorRuntime.wrap(function (t) {
                            for (; ;)
                                switch (t.prev = t.next) {
                                    case 0:
                                        return this.is_loading = "1",
                                            this.getBanner(),
                                            t.prev = 2,
                                            t.next = 5,
                                            this.getQuestionDetail();
                                    case 5:
                                        if ("0" != this.user.vip_type || !this.user.uid) {
                                            t.next = 12;
                                            break
                                        }
                                        return t.next = 8,
                                            this.useFreeAnalysisNumber();
                                    case 8:
                                        if (e = t.sent,
                                            this.$emit("getFreeAnalysisNumber"),
                                            e && e.code && 200 == e.code) {
                                            t.next = 12;
                                            break
                                        }
                                        return t.abrupt("return");
                                    case 12:
                                        return t.next = 14,
                                            this.startChat();
                                    case 14:
                                        return t.next = 16,
                                            this.getConfig();
                                    case 16:
                                        t.next = 22;
                                        break;
                                    case 18:
                                        t.prev = 18,
                                            t.t0 = t.catch(2),
                                            console.log("mounted=>", t.t0),
                                            this.is_loading = "0";
                                    case 22:
                                        (content = this.$refs.content) && content.addEventListener("scroll", this.onContentScroll);
                                    case 24:
                                    case "end":
                                        return t.stop()
                                }
                        }, t, this, [[2, 18]])
                    }));
                    return function () {
                        return t.apply(this, arguments)
                    }
                }(),
                beforeDestroy: function () {
                    var content = this.$refs.content;
                    content && content.removeEventListener("scroll", this.onContentScroll)
                },
                methods: {
                    getQuestionDetail: function () {
                        var t = Object(r.a)(regeneratorRuntime.mark(function t() {
                            var e;
                            return regeneratorRuntime.wrap(function (t) {
                                for (; ;)
                                    switch (t.prev = t.next) {
                                        case 0:
                                            return t.prev = 0,
                                                t.next = 3,
                                                this.$axios.$post("/questions/detailNew", {
                                                    id: this.question_id,
                                                    without_recommend_papers: "1"
                                                });
                                        case 3:
                                            e = t.sent,
                                                this.content = e.data.question,
                                                t.next = 10;
                                            break;
                                        case 7:
                                            t.prev = 7,
                                                t.t0 = t.catch(0),
                                                console.log(t.t0);
                                        case 10:
                                        case "end":
                                            return t.stop()
                                    }
                            }, t, this, [[0, 7]])
                        }));
                        return function () {
                            return t.apply(this, arguments)
                        }
                    }(),
                    openDeepSeek: function () {
                        var t = Object(r.a)(regeneratorRuntime.mark(function t() {
                            var e;
                            return regeneratorRuntime.wrap(function (t) {
                                for (; ;)
                                    switch (t.prev = t.next) {
                                        case 0:
                                            return this.eventSource && this.eventSource.close(),
                                                this.message_list = [],
                                                this.is_loading = "1",
                                                t.prev = 3,
                                                t.next = 6,
                                                this.getQuestionDetail();
                                        case 6:
                                            if ("0" != this.user.vip_type || !this.user.uid) {
                                                t.next = 13;
                                                break
                                            }
                                            return t.next = 9,
                                                this.useFreeAnalysisNumber();
                                        case 9:
                                            if (e = t.sent,
                                                this.$emit("getFreeAnalysisNumber"),
                                                e && e.code && 200 == e.code) {
                                                t.next = 13;
                                                break
                                            }
                                            return t.abrupt("return");
                                        case 13:
                                            return t.next = 15,
                                                this.getConfig();
                                        case 15:
                                            t.next = 21;
                                            break;
                                        case 17:
                                            t.prev = 17,
                                                t.t0 = t.catch(3),
                                                console.log("openDeepSeek=>", t.t0),
                                                this.is_loading = "0";
                                        case 21:
                                        case "end":
                                            return t.stop()
                                    }
                            }, t, this, [[3, 17]])
                        }));
                        return function () {
                            return t.apply(this, arguments)
                        }
                    }(),
                    useFreeAnalysisNumber: function () {
                        var t = Object(r.a)(regeneratorRuntime.mark(function t() {
                            var e;
                            return regeneratorRuntime.wrap(function (t) {
                                for (; ;)
                                    switch (t.prev = t.next) {
                                        case 0:
                                            return t.prev = 0,
                                                t.next = 3,
                                                this.$axios.$post("/user/question/useFreeAnalysis");
                                        case 3:
                                            return e = t.sent,
                                                t.abrupt("return", e);
                                        case 7:
                                            t.prev = 7,
                                                t.t0 = t.catch(0),
                                                console.log("useFreeAnalysisNumber=>", t.t0);
                                        case 10:
                                        case "end":
                                            return t.stop()
                                    }
                            }, t, this, [[0, 7]])
                        }));
                        return function () {
                            return t.apply(this, arguments)
                        }
                    }(),
                    scrollToBottom: function () {
                        var content = this.$refs.content;
                        content && content.scrollTo({
                            top: content.scrollHeight,
                            behavior: "smooth"
                        })
                    },
                    sendMessage: function () {
                        var t = Object(r.a)(regeneratorRuntime.mark(function t() {
                            var e, n = this;
                            return regeneratorRuntime.wrap(function (t) {
                                for (; ;)
                                    switch (t.prev = t.next) {
                                        case 0:
                                            if (this.textAreaContent) {
                                                t.next = 3;
                                                break
                                            }
                                            return this.$message.warning("请输入内容"),
                                                t.abrupt("return");
                                        case 3:
                                            if ("1" != this.is_loading) {
                                                t.next = 6;
                                                break
                                            }
                                            return this.$message.warning("正在生成中，请稍后重试"),
                                                t.abrupt("return");
                                        case 6:
                                            return this.is_loading = "1",
                                                t.prev = 7,
                                                t.next = 10,
                                                this.getChatToken();
                                        case 10:
                                            if (e = t.sent) {
                                                t.next = 13;
                                                break
                                            }
                                            return t.abrupt("return");
                                        case 13:
                                            this.shouldAutoScroll = !0,
                                                this.pushMesage([{
                                                    title: this.textAreaContent,
                                                    reasoning_content: "",
                                                    show_reasoning_content: !0,
                                                    selection: "",
                                                    ret_status: "",
                                                    img_url: "",
                                                    stream: "",
                                                    list: [],
                                                    help: "0",
                                                    sender: "self"
                                                }, {
                                                    title: "",
                                                    reasoning_content: "",
                                                    show_reasoning_content: !0,
                                                    selection: "",
                                                    sender: "sys",
                                                    id: e.id,
                                                    img_url: "",
                                                    stream: "",
                                                    list: [],
                                                    help: "0",
                                                    ret_status: "1"
                                                }]),
                                                this.getChatSseData(e.ai_assistant_token, this.message_list.length - 1),
                                                this.$nextTick(function () {
                                                    n.$refs.bottomAnchor.scrollIntoView({
                                                        behavior: "smooth"
                                                    }),
                                                        n.$refs.textarea.style.height = n.lineHeight + "px",
                                                        n.textAreaContent = ""
                                                }),
                                                t.next = 23;
                                            break;
                                        case 19:
                                            t.prev = 19,
                                                t.t0 = t.catch(7),
                                                console.log("sendMessage=>", t.t0),
                                                this.is_loading = "0";
                                        case 23:
                                        case "end":
                                            return t.stop()
                                    }
                            }, t, this, [[7, 19]])
                        }));
                        return function () {
                            return t.apply(this, arguments)
                        }
                    }(),
                    showContent: function (t) {
                        this.$set(this.message_list, t, Object(l.a)({}, this.message_list[t], {
                            show_reasoning_content: !this.message_list[t].show_reasoning_content
                        }))
                    },
                    setHelp: function (t, e) {
                        this.$set(this.message_list, e, Object(l.a)({}, this.message_list[e], {
                            help: 1 == t ? "1" : "-1"
                        }));
                        var n = 1 == t ? "/user/aiAssistant/like" : "/user/aiAssistant/notLike";
                        this.$axios.$post(n, {
                            id: this.message_list[e].id
                        })
                    },
                    copyText: function (t) {
                        var text = this.message_list[t].title
                            , e = document.createElement("textarea");
                        e.value = text,
                            document.body.appendChild(e),
                            e.select(),
                            document.execCommand("copy"),
                            this.$message.success("内容已复制"),
                            document.body.removeChild(e)
                    },
                    autoResize: function () {
                        var t = this.$refs.textarea;
                        t.style.height = "auto";
                        var e = 3 * this.lineHeight;
                        t.style.height = Math.min(t.scrollHeight, e) + "px"
                    },
                    close: function () {
                        this.$emit("close")
                    },
                    backgroundImageStyle: function (t) {
                        return "url(".concat(t.image, ")")
                    },
                    getBanner: function () {
                        var t = this;
                        this.$axios.post("/banner/get", {
                            platform: "pc",
                            position: "10021"
                        }).then(function (e) {
                            t.top_banners = e.data.data || [],
                                t.$nextTick(function () {
                                    var e = t;
                                    new j.a(".deepseek-banner", {
                                        loop: t.top_banners.length > 1,
                                        speed: 1e3,
                                        autoplay: t.top_banners.length > 1 && {
                                            delay: 3e3,
                                            disableOnInteraction: !1
                                        },
                                        pagination: t.top_banners.length > 1 && {
                                            el: ".swiper-pagination",
                                            clickable: !0
                                        },
                                        on: {
                                            click: function () {
                                                this.clickedSlide && this.clickedSlide.dataset.url && e.$router.push("".concat(this.clickedSlide.dataset.url))
                                            }
                                        }
                                    })
                                })
                        })
                    },
                    startChat: function () {
                        var t = Object(r.a)(regeneratorRuntime.mark(function t() {
                            var e;
                            return regeneratorRuntime.wrap(function (t) {
                                for (; ;)
                                    switch (t.prev = t.next) {
                                        case 0:
                                            return t.prev = 0,
                                                t.next = 3,
                                                this.$axios.$post("/user/aiAssistant/startChat", {
                                                    question_id: this.question_id
                                                });
                                        case 3:
                                            e = t.sent,
                                                this.request_id = e.data.request_id,
                                                this.conversation_id = e.data.conversation_id,
                                                t.next = 11;
                                            break;
                                        case 8:
                                            t.prev = 8,
                                                t.t0 = t.catch(0),
                                                console.log(t.t0);
                                        case 11:
                                        case "end":
                                            return t.stop()
                                    }
                            }, t, this, [[0, 8]])
                        }));
                        return function () {
                            return t.apply(this, arguments)
                        }
                    }(),
                    batchShowMore: function () {
                        "1" == this.showMore ? this.showMore = "0" : this.showMore = "1"
                    },
                    getConfig: function () {
                        var t = Object(r.a)(regeneratorRuntime.mark(function t() {
                            var e, n = this;
                            return regeneratorRuntime.wrap(function (t) {
                                for (; ;)
                                    switch (t.prev = t.next) {
                                        case 0:
                                            return t.prev = 0,
                                                t.next = 3,
                                                this.$axios.$post("/aiAssistant/getConfig");
                                        case 3:
                                            e = t.sent,
                                                this.ai_assistant_selections = e.data.ai_assistant_selections,
                                                this.common_selections = e.data.common_selections,
                                                this.suggest_questions = e.data.suggest_questions,
                                                e.data.ai_assistant_selections.forEach(function (i) {
                                                    "1" == i.is_default && (n.default_title = "给出这道题的深度解析")
                                                }),
                                                this.content && this.getChatwithQustion(this.content.id),
                                                t.next = 14;
                                            break;
                                        case 11:
                                            t.prev = 11,
                                                t.t0 = t.catch(0),
                                                console.log("getConfig=>", t.t0);
                                        case 14:
                                        case "end":
                                            return t.stop()
                                    }
                            }, t, this, [[0, 11]])
                        }));
                        return function () {
                            return t.apply(this, arguments)
                        }
                    }(),
                    getChatToken: function () {
                        var t = Object(r.a)(regeneratorRuntime.mark(function t(e) {
                            var n;
                            return regeneratorRuntime.wrap(function (t) {
                                for (; ;)
                                    switch (t.prev = t.next) {
                                        case 0:
                                            return t.prev = 0,
                                                t.next = 3,
                                                this.$axios.$post("".concat(e ? "/user/aiAssistant/getDeepSeekChatTokenAgain" : "/user/aiAssistant/getDeepSeekChatToken"), {
                                                    conversation_id: this.conversation_id,
                                                    question_id: this.question_id || "",
                                                    raw_query: this.textAreaContent,
                                                    id: e || ""
                                                });
                                        case 3:
                                            return n = t.sent,
                                                t.abrupt("return", n.data);
                                        case 7:
                                            t.prev = 7,
                                                t.t0 = t.catch(0),
                                                console.log("getChatToken=>", t.t0),
                                                this.is_loading = "0";
                                        case 11:
                                        case "end":
                                            return t.stop()
                                    }
                            }, t, this, [[0, 7]])
                        }));
                        return function (e) {
                            return t.apply(this, arguments)
                        }
                    }(),
                    getChatwithQustion: function () {
                        var t = Object(r.a)(regeneratorRuntime.mark(function t() {
                            var e;
                            return regeneratorRuntime.wrap(function (t) {
                                for (; ;)
                                    switch (t.prev = t.next) {
                                        case 0:
                                            return this.textAreaContent = "",
                                                t.prev = 1,
                                                t.next = 4,
                                                this.getChatToken();
                                        case 4:
                                            if (e = t.sent) {
                                                t.next = 7;
                                                break
                                            }
                                            return t.abrupt("return");
                                        case 7:
                                            this.shouldAutoScroll = !0,
                                                this.pushMesage([{
                                                    title: this.default_title,
                                                    reasoning_content: "",
                                                    show_reasoning_content: !0,
                                                    selection: "",
                                                    ret_status: "",
                                                    img_url: "",
                                                    stream: "",
                                                    list: [],
                                                    help: "0",
                                                    sender: "self"
                                                }, {
                                                    title: "",
                                                    reasoning_content: "",
                                                    show_reasoning_content: !0,
                                                    selection: "",
                                                    sender: "sys",
                                                    id: e.id,
                                                    img_url: "",
                                                    stream: "",
                                                    list: [],
                                                    help: "0",
                                                    ret_status: "1"
                                                }]),
                                                this.getChatSseData(e.ai_assistant_token, this.message_list.length - 1),
                                                t.next = 16;
                                            break;
                                        case 12:
                                            t.prev = 12,
                                                t.t0 = t.catch(1),
                                                console.log("getChatwithQustion=>", t.t0),
                                                this.is_loading = "0";
                                        case 16:
                                        case "end":
                                            return t.stop()
                                    }
                            }, t, this, [[1, 12]])
                        }));
                        return function () {
                            return t.apply(this, arguments)
                        }
                    }(),
                    pushMesage: function (t) {
                        var e = this.message_list;
                        e.push.apply(e, Object(S.a)(t)),
                            this.message_list = e
                    },
                    onContentScroll: function () {
                        var content = this.$refs.content;
                        if (content) {
                            var t = content.scrollHeight - content.scrollTop - content.clientHeight;
                            this.showBottom = t > 80,
                                this.shouldAutoScroll = t < 32
                        }
                    },
                    isAtBottom: function () {
                        var content = this.$refs.content;
                        return !!content && content.scrollHeight - content.scrollTop - content.clientHeight < 32
                    },
                    getChatSseData: function () {
                        var t = Object(r.a)(regeneratorRuntime.mark(function t(e, n) {
                            var content, o, r, c, h, d, _, v, f = this;
                            return regeneratorRuntime.wrap(function (t) {
                                for (; ;)
                                    switch (t.prev = t.next) {
                                        case 0:
                                            if (content = this.$refs.content,
                                                o = this.$refs.bottomAnchor,
                                                content) {
                                                t.next = 4;
                                                break
                                            }
                                            return t.abrupt("return");
                                        case 4:
                                            this.eventSource = new EventSource("".concat("/api", "/aiAssistant/getDeepSeekChatSseData?ai_assistant_token=").concat(e)),
                                                r = [],
                                                c = !1,
                                                h = "",
                                                d = "",
                                                _ = function (t) {
                                                    return t.replace(/\n\n+/g, "")
                                                }
                                                ,
                                                v = function () {
                                                    f.$nextTick(function () {
                                                        f.shouldAutoScroll && o.scrollIntoView({
                                                            behavior: "smooth"
                                                        })
                                                    })
                                                }
                                                ,
                                                this.eventSource.onmessage = function (t) {
                                                    if ("[DONE]" === t.data)
                                                        c = !0,
                                                            f.eventSource.close();
                                                    else {
                                                        var e = _(t.data);
                                                        r.push(e);
                                                        try {
                                                            var data = JSON.parse(e);
                                                            if ("404" == data.code)
                                                                return f.$message.error(data.msg),
                                                                    f.eventSource.close(),
                                                                    f.$set(f.message_list, n, Object(l.a)({}, f.message_list[n], {
                                                                        ret_status: "3"
                                                                    })),
                                                                    void setTimeout(function () {
                                                                        f.is_loading = "0",
                                                                            f.$set(f.message_list, n, Object(l.a)({}, f.message_list[n], {
                                                                                ret_status: "4"
                                                                            }))
                                                                    }, 500);
                                                            h += data.choices[0].delta.content || "",
                                                                d += data.choices[0].delta.reasoning_content || ""
                                                        } catch (t) {
                                                            console.warn("JSON parse error:", t)
                                                        }
                                                    }
                                                    var o = Object(l.a)({}, f.message_list[n], {
                                                        title: _(h),
                                                        reasoning_content: _(d),
                                                        ret_status: c ? "3" : "2"
                                                    });
                                                    c && setTimeout(function () {
                                                        o.ret_status = "4",
                                                            f.is_loading = "0",
                                                            f.$set(f.message_list, n, o)
                                                    }, 500),
                                                        f.$set(f.message_list, n, o),
                                                        v()
                                                }
                                                ;
                                        case 12:
                                        case "end":
                                            return t.stop()
                                    }
                            }, t, this)
                        }));
                        return function (e, n) {
                            return t.apply(this, arguments)
                        }
                    }(),
                    refresh: function () {
                        var t = Object(r.a)(regeneratorRuntime.mark(function t(e) {
                            var n, o;
                            return regeneratorRuntime.wrap(function (t) {
                                for (; ;)
                                    switch (t.prev = t.next) {
                                        case 0:
                                            return this.$set(this.message_list, e, Object(l.a)({}, this.message_list[e], {
                                                title: "",
                                                reasoning_content: "",
                                                help: "0",
                                                show_reasoning_content: !0,
                                                ret_status: "1"
                                            })),
                                                n = this.message_list[e].id,
                                                t.next = 4,
                                                this.getChatToken(n);
                                        case 4:
                                            o = t.sent,
                                                this.getChatSseData(o.ai_assistant_token, e);
                                        case 6:
                                        case "end":
                                            return t.stop()
                                    }
                            }, t, this)
                        }));
                        return function (e) {
                            return t.apply(this, arguments)
                        }
                    }()
                }
            }
            , O = (n(1419),
                Object(D.a)(I, function () {
                    var t = this
                        , e = t.$createElement
                        , n = t._self._c || e;
                    return n("div", {
                        staticClass: "deepseek-page"
                    }, [n("div", {
                        staticClass: "deepseek"
                    }, [n("div", {
                        staticClass: "deepseek-header"
                    }, [t._v("\n      深度解析\n      "), n("img", {
                        staticClass: "icon",
                        attrs: {
                            src: "https://resource-cdn.kaoshibao.com/pc/deepseek/icon_close.png",
                            alt: ""
                        },
                        on: {
                            click: t.close
                        }
                    })]), t._v(" "), n("div", {
                        ref: "content",
                        staticClass: "deepseek-content",
                        style: {
                            height: t.$store.state.topVisible ? "" : "Calc(100vh - 246px)"
                        }
                    }, [n("div", {
                        staticClass: "deepseek-banner"
                    }, [n("div", {
                        ref: "slide",
                        staticClass: "swiper-wrapper"
                    }, [t.top_banners.length > 0 ? t._l(t.top_banners, function (e, o) {
                        return n("div", {
                            key: o,
                            staticClass: "swiper-slide",
                            style: {
                                backgroundImage: t.backgroundImageStyle(e)
                            },
                            attrs: {
                                "data-url": e.target
                            }
                        })
                    }) : t._e()], 2), t._v(" "), n("div", {
                        staticClass: "swiper-pagination",
                        attrs: {
                            slot: "pagination"
                        },
                        slot: "pagination"
                    })]), t._v(" "), t.content ? n("div", {
                        staticClass: "deepseek-question"
                    }, [n("div", {
                        staticClass: "content",
                        style: {
                            height: "0" == this.showMore ? "auto" : ""
                        }
                    }, [n("div", {
                        staticClass: "title"
                    }, [n("span", {
                        staticClass: "qtype"
                    }, [t._v(t._s(t.types[t.content.qtype]))]), t._v(" "), n("span", {
                        staticClass: "content"
                    }, [t._v(t._s(t.content.question))])]), t._v(" "), t.content.options ? n("div", {
                        staticClass: "options"
                    }, t._l(JSON.parse(t.content.options), function (option, e) {
                        return n("div", {
                            key: e,
                            staticClass: "option"
                        }, [n("div", {
                            staticClass: "option-key"
                        }, [t._v(t._s(option.Key))]), t._v(" "), n("div", {
                            staticClass: "option-value",
                            domProps: {
                                innerHTML: t._s(option.Value)
                            }
                        })])
                    }), 0) : t._e(), t._v(" "), n("div", {
                        staticClass: "bottom-row"
                    }, ["1" == t.showMore ? n("div", {
                        staticClass: "more",
                        on: {
                            click: t.batchShowMore
                        }
                    }, [t._v("\n              展开\n              "), n("img", {
                        staticClass: "icon",
                        attrs: {
                            src: "https://resource-cdn.kaoshibao.com/pc/deepseek/icon_arrow_bottom.png",
                            alt: ""
                        }
                    })]) : t._e(), t._v(" "), "0" == t.showMore ? n("div", {
                        staticClass: "more retract",
                        on: {
                            click: t.batchShowMore
                        }
                    }, [t._v("\n              收起\n              "), n("img", {
                        staticClass: "icon",
                        attrs: {
                            src: "https://resource-cdn.kaoshibao.com/pc/practice/icon_arrow_top.png",
                            alt: ""
                        }
                    })]) : t._e()])])]) : t._e(), t._v(" "), t.message_list.length > 0 ? n("div", {
                        staticClass: "deepseek-message"
                    }, t._l(t.message_list, function (e, o) {
                        return n("div", {
                            key: o,
                            staticClass: "message-item",
                            class: e ? [e.sender] : []
                        }, [e ? ["sys" == e.sender ? n("div", {
                            class: e.sender ? [e.sender] + "-content" : [],
                            on: {
                                click: function (e) {
                                    return t.showContent(o)
                                }
                            }
                        }, [n("div", {
                            staticClass: "tit"
                        }, [t._v("\n                " + t._s(e.title ? "已深度思考" : "深度思考中...") + "\n              ")]), t._v(" "), e.show_reasoning_content ? n("img", {
                            staticClass: "icon",
                            attrs: {
                                src: "https://resource-cdn.kaoshibao.com/pc/practice/icon_arrow_top.png",
                                alt: ""
                            }
                        }) : t._e(), t._v(" "), e.show_reasoning_content ? t._e() : n("img", {
                            staticClass: "icon",
                            attrs: {
                                src: "https://resource-cdn.kaoshibao.com/pc/deepseek/icon_arrow_bottom.png",
                                alt: ""
                            }
                        })]) : t._e(), t._v(" "), e.reasoning_content && e.show_reasoning_content ? n("div", {
                            class: e.sender ? [e.sender] + "-reasoning_content" : [],
                            domProps: {
                                innerHTML: t._s(e.reasoning_content)
                            }
                        }) : t._e(), t._v(" "), e.title ? n("div", {
                            class: e.sender ? [e.sender] + "-message" : [],
                            domProps: {
                                innerHTML: t._s(e.title)
                            }
                        }) : t._e(), t._v(" "), "sys" == e.sender ? n("div", {
                            staticClass: "message-bottom"
                        }, ["2" == e.ret_status ? [t._m(0, !0)] : t._e(), t._v(" "), "3" == e.ret_status ? [t._m(1, !0)] : t._e(), t._v(" "), "4" == e.ret_status ? [n("div", {
                            staticClass: "left"
                        }, [n("img", {
                            staticClass: "icon",
                            attrs: {
                                src: "https://resource-cdn.kaoshibao.com/pc/deepseek/icon_copy.png",
                                alt: ""
                            },
                            on: {
                                click: function (e) {
                                    return t.copyText(o)
                                }
                            }
                        }), t._v(" "), n("div", {
                            staticClass: "line"
                        }), t._v(" "), "0" == e.help ? n("img", {
                            staticClass: "icon",
                            attrs: {
                                src: "https://resource-cdn.kaoshibao.com/pc/deepseek/icon_have_help.png",
                                alt: ""
                            },
                            on: {
                                click: function (e) {
                                    return t.setHelp("1", o)
                                }
                            }
                        }) : t._e(), t._v(" "), "1" == e.help ? n("img", {
                            staticClass: "icon",
                            attrs: {
                                src: "https://resource-cdn.kaoshibao.com/pc/deepseek/icon_have_help2.png",
                                alt: ""
                            }
                        }) : t._e(), t._v(" "), "0" == e.help ? n("div", {
                            staticClass: "line"
                        }) : t._e(), t._v(" "), "0" == e.help ? n("img", {
                            staticClass: "icon",
                            attrs: {
                                src: "https://resource-cdn.kaoshibao.com/pc/deepseek/icon_no_help.png",
                                alt: ""
                            },
                            on: {
                                click: function (e) {
                                    return t.setHelp("-1", o)
                                }
                            }
                        }) : t._e(), t._v(" "), "-1" == e.help ? n("img", {
                            staticClass: "icon",
                            attrs: {
                                src: "https://resource-cdn.kaoshibao.com/pc/deepseek/icon_no_help2.png",
                                alt: ""
                            }
                        }) : t._e()]), t._v(" "), n("div", {
                            staticClass: "left right",
                            on: {
                                click: function (e) {
                                    return t.refresh(o)
                                }
                            }
                        }, [n("img", {
                            staticClass: "icon",
                            staticStyle: {
                                "margin-right": "4px"
                            },
                            attrs: {
                                src: "https://resource-cdn.kaoshibao.com/pc/deepseek/icon_refresh.png",
                                alt: ""
                            }
                        }), t._v(" "), n("div", {
                            staticClass: "tit"
                        }, [t._v("重新生成")])])] : t._e()], 2) : t._e()] : t._e()], 2)
                    }), 0) : t._e(), t._v(" "), n("div", {
                        ref: "bottomAnchor",
                        staticClass: "bottomAnchor"
                    })]), t._v(" "), t.showBottom ? n("div", {
                        staticClass: "deepseek-bottom"
                    }, [n("img", {
                        staticClass: "image",
                        attrs: {
                            src: "https://resource-cdn.kaoshibao.com/pc/deepseek/icon_to_bottom.png",
                            alt: ""
                        },
                        on: {
                            click: t.scrollToBottom
                        }
                    })]) : t._e(), t._v(" "), n("div", {
                        staticClass: "fix-bottom"
                    }, [n("div", {
                        staticClass: "fix-input-background",
                        class: {
                            active: t.textAreaContent
                        }
                    }, [n("div", {
                        staticClass: "fix-input"
                    }, [n("textarea", {
                        directives: [{
                            name: "model",
                            rawName: "v-model",
                            value: t.textAreaContent,
                            expression: "textAreaContent"
                        }],
                        ref: "textarea",
                        staticClass: "textarea",
                        attrs: {
                            rows: "1",
                            placeholder: "有什么学习疑问？我来帮你解答！"
                        },
                        domProps: {
                            value: t.textAreaContent
                        },
                        on: {
                            input: [function (e) {
                                e.target.composing || (t.textAreaContent = e.target.value)
                            }
                                , t.autoResize]
                        }
                    }), t._v(" "), n("img", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: !t.textAreaContent,
                            expression: "!textAreaContent"
                        }],
                        staticClass: "icon",
                        attrs: {
                            src: "https://resource-cdn.kaoshibao.com/pc/deepseek/icon_send.png",
                            alt: ""
                        }
                    }), t._v(" "), n("img", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: t.textAreaContent,
                            expression: "textAreaContent"
                        }],
                        staticClass: "icon",
                        attrs: {
                            src: "https://resource-cdn.kaoshibao.com/pc/deepseek/icon_send2.png",
                            alt: ""
                        },
                        on: {
                            click: t.sendMessage
                        }
                    })])])])])])
                }, [function () {
                    var t = this.$createElement
                        , e = this._self._c || t;
                    return e("div", {
                        staticClass: "left"
                    }, [e("div", {
                        staticClass: "dot"
                    }), this._v(" "), e("div", {
                        staticClass: "dot"
                    }), this._v(" "), e("div", {
                        staticClass: "dot"
                    }), this._v(" "), e("div", {
                        staticClass: "dot"
                    }), this._v(" "), e("div", {
                        staticClass: "dot"
                    }), this._v(" "), e("div", {
                        staticClass: "dot"
                    }), this._v(" "), e("div", {
                        staticClass: "desc"
                    }, [this._v("正在生成中")])])
                }
                    , function () {
                        var t = this.$createElement
                            , e = this._self._c || t;
                        return e("div", {
                            staticClass: "left"
                        }, [e("img", {
                            staticClass: "icon",
                            staticStyle: {
                                "margin-right": "4px"
                            },
                            attrs: {
                                src: "https://resource-cdn.kaoshibao.com/pc/deepseek/icon_success.png",
                                alt: ""
                            }
                        }), this._v(" "), e("div", {
                            staticClass: "desc"
                        }, [this._v("已完成")])])
                    }
                ], !1, null, "4dd1a524", null).exports)
            , M = n(46)
            , N = n(754)
            , T = {
                head: {
                    script: [{
                        src: "https://resource-cdn.kaoshibao.com/MathJax-2.7.0/MathJax.js?config=TeX-AMS-MML_HTMLorMML"
                    }]
                },
                data: function () {
                    return {
                        showDeepSeekTip: !1,
                        noteModal: !1,
                        noteContent: "",
                        currentPoint: {},
                        related_question_ids: [],
                        related_question: [],
                        pointQuesDialog: !1,
                        showMore: !1,
                        protecteyesModel: !1,
                        paper: {},
                        paper_type: "",
                        uiConfig: {
                            sortByOptions: !1,
                            fontSize: "16",
                            num: 3,
                            protecteyesModel: !1,
                            mainShowAns: !1,
                            autoChecked: !0,
                            showAi: !0
                        },
                        selectNum: "200",
                        columns_num: [{
                            value: "50",
                            label: "50"
                        }, {
                            value: "100",
                            label: "100"
                        }, {
                            value: "200",
                            label: "200"
                        }, {
                            value: "300",
                            label: "300"
                        }, {
                            value: "400",
                            label: "400"
                        }, {
                            value: "500",
                            label: "500"
                        }],
                        setVisible: !1,
                        showBiji: !1,
                        loading: !0,
                        autoChecked: !0,
                        showAi: !0,
                        alreadyShow: !1,
                        sortByOptions: !1,
                        showCard: !1,
                        empty: !1,
                        applyModal: !1,
                        imgVisible: !1,
                        imgVisibleUrl: "",
                        modalText: "",
                        mainShowAns: !1,
                        paperName: "",
                        is_recite: "",
                        topicNum: 0,
                        emptyCon: "",
                        listsIds: [],
                        rightIds: [],
                        errIds: [],
                        subjectIds: [],
                        result_obj: {},
                        realcollectIds: [],
                        collectIds: [],
                        pageInfo: {
                            pageNum: 1,
                            jumNum: "",
                            total: 0
                        },
                        routerData: {},
                        types: {},
                        qtypeCount: {},
                        cardList: [],
                        selectedQuesDialog: !1,
                        editDialog: !1,
                        currentQuestion: {},
                        jubaoModal: !1,
                        jubaoDesc: "",
                        is_collect: "",
                        kid: "",
                        aiDirectVisible: !1,
                        beiti: "0",
                        vipTips: !1,
                        kid_link: "",
                        vipPaperDialog: !1,
                        is_vip_paper: "",
                        ptype: "",
                        vipPayPaperDialog: !1,
                        payNewKaoshiDailog: !1,
                        switch_ai_analysis: "0",
                        is_buy: "",
                        kaoshi: {},
                        confirm_collect: "",
                        residue_jiexi: {
                            total: 0,
                            used: 0
                        },
                        cutTopicIds: [],
                        questionMap: {},
                        content: {}
                    }
                },
                components: {
                    SelectRadio: _.a,
                    emptyVue: d.a,
                    Manual: C.a,
                    ApplyErr: v.a,
                    vipTip: w.a,
                    jxBanner: $,
                    JubaoDialog: A.a,
                    DeepSeek: O,
                    PayKaoshiDialog: h.a
                },
                created: function () {
                    var t = this;
                    this.$axios.$post("/help/commonSwitch/getConfig", {}).then(function (e) {
                        t.switch_ai_analysis = "1"
                    })
                },
                mounted: function () {
                    var t = this
                        , e = Object(f.a)("uiConfig");
                    e && (this.uiConfig = e,
                        this.mainShowAns = e.mainShowAns,
                        this.sortByOptions = e.sortByOptions,
                        "0" == this.user.vip_type && (this.sortByOptions = !1,
                            this.uiConfig.sortByOptions = !1,
                            Object(f.c)("uiConfig", this.uiConfig)),
                        this.autoChecked = e.autoChecked,
                        this.protecteyesModel = e.protecteyesModel,
                        this.beiti = e.mainShowAns ? "1" : "0",
                        this.selectNum = e.selectNum ? e.selectNum : "200",
                        void 0 !== e.showAi && (this.showAi = e.showAi)),
                        this.$route.query.kid && this.initKaoShiData(),
                        this.initData(),
                        this.getCollec(),
                        (this.wrongQuestionType || this.collectQuestionType || "3" == this.$route.query.practice) && this.getCutIds(),
                        this.$axios.$post("/paper/getQtypeName", {
                            id: this.$route.query.paperId
                        }).then(function (e) {
                            var data = e.data
                                , n = {};
                            data.forEach(function (t) {
                                n[t.type] = t.name
                            }),
                                t.types = n
                        });
                    var n = Object(f.a)("user");
                    if (n) {
                        var o = n.user.remove_error_limit;
                        o && (this.uiConfig.num = parseInt(o))
                    }
                    "0" == this.user.vip_type ? this.vipTips = !0 : this.vipTips = !1;
                    var r = Object(f.a)("k_paperid");
                    r && r.kid == this.kid ? this.kid_link = "/e_classify/paper/?kid=".concat(this.kid) : this.kid_link = "/classify/exam/?kid=".concat(this.kid),
                        "100" == this.routerData.ptype && (this.kid_link = "/e_classify/p_paper/?kid=".concat(this.kid)),
                        this.routerData.ztid && (this.kid_link = "/e_classify/past_paper/?kid=".concat(this.kid, "&paperid=").concat(this.$route.query.paperId, "&target_type=").concat(this.routerData.target_type, "&type=").concat(this.routerData.zt_type)),
                        this.getFreeAnalysisNumber(),
                        window.addEventListener("keydown", this.handleKeydown),
                        document.removeEventListener("click", this.handleGlobalClick),
                        this.$httpLog({
                            type: "view",
                            name: "OnlineExercisePg",
                            params: {
                                id: this.$route.query.paperId
                            }
                        })
                },
                beforeDestroy: function () {
                    document.addEventListener("click", this.handleGlobalClick),
                        window.removeEventListener("keydown", this.handleKeydown)
                },
                computed: Object(l.a)({}, Object(M.d)(["pay_kaoshi_dialog_img"]), {
                    showBijiVisible: function () {
                        if (this.content)
                            return !(!this.content.showAns && "3" != this.routerData.practice) || this.showBiji
                    },
                    linkUrl: function () {
                        return this.kid ? this.kid_link : "/online/paper/detail/?paperid=".concat(this.routerData.paperId)
                    },
                    rightNumber: function () {
                        return this.content.total_right_number || 0
                    },
                    wrongNumber: function () {
                        return this.content.total_wrong_number || 0
                    },
                    totalNumber: function () {
                        return parseInt(this.rightNumber) + parseInt(this.wrongNumber)
                    },
                    accuracy: function () {
                        return this.calculateAccuracy(this.rightNumber, this.wrongNumber)
                    },
                    allRightNumber: function () {
                        return this.content.all_right || 0
                    },
                    allWrongNumber: function () {
                        return this.content.all_wrong || 0
                    },
                    allTotalNumber: function () {
                        return parseInt(this.allRightNumber) + parseInt(this.allWrongNumber)
                    },
                    allAccuracy: function () {
                        return this.calculateAccuracy(this.allRightNumber, this.allWrongNumber)
                    },
                    rightRoErr: function () {
                        return "0" == this.errIds.length && this.rightIds.length > 0 ? "100" : this.rightIds.length && this.errIds.length ? (this.rightIds.length / (this.rightIds.length + this.errIds.length) * 100).toFixed(2) : "0"
                    },
                    user: function () {
                        return k.b.user || {
                            uid: "",
                            vip_type: "0"
                        }
                    },
                    hideAnalysis: function () {
                        return !(this.kaoshi.price > 0) && ("1" != this.content.free_jiexi && !("0" != this.user.vip_type || !(this.content.analysis && 0 == this.content.uid || "ai" == this.content.analysis_source && this.showAi)))
                    },
                    showFreeNum: function () {
                        if ("0" == this.user.vip_type && this.residue_jiexi.total - this.residue_jiexi.used > 0 && "9999" != this.residue_jiexi.total)
                            return !0
                    },
                    wrongQuestionType: function () {
                        return 1 == this.routerData.practice || "1" == this.routerData.all_type || "today_err" == this.routerData.type
                    },
                    allWrongQuestionType: function () {
                        return 1 == this.routerData.practice || "1" == this.routerData.all_type
                    },
                    collectQuestionType: function () {
                        return 2 == this.routerData.practice || "2" == this.routerData.all_type || "today_collect" == this.routerData.type
                    },
                    qtypeCountList: function () {
                        for (var t = [], data = this.qtypeCount || {}, e = 0, n = 0, o = Object.entries(data); n < o.length; n++) {
                            var r = Object(c.a)(o[n], 2)
                                , l = r[0]
                                , h = r[1]
                                , d = parseInt(h) || 0
                                , _ = e + d;
                            t.push({
                                key: l,
                                value: d,
                                ids: this.listsIds.slice(e, _),
                                preIndex: _
                            }),
                                e = _
                        }
                        return t
                    }
                }),
                methods: Object(l.a)({}, Object(M.c)(["setPayKaoshiDialogImg"]), {
                    getOneQuestion: function () {
                        var t = Object(r.a)(regeneratorRuntime.mark(function t(e) {
                            var n = this;
                            return regeneratorRuntime.wrap(function (t) {
                                for (; ;)
                                    switch (t.prev = t.next) {
                                        case 0:
                                            return t.abrupt("return", new Promise(function () {
                                                var t = Object(r.a)(regeneratorRuntime.mark(function t(o, r) {
                                                    var c;
                                                    return regeneratorRuntime.wrap(function (t) {
                                                        for (; ;)
                                                            switch (t.prev = t.next) {
                                                                case 0:
                                                                    if (c = n.listsIds[e],
                                                                        !n.questionMap[c]) {
                                                                        t.next = 6;
                                                                        break
                                                                    }
                                                                    n.content = n.questionMap[c],
                                                                        o(),
                                                                        t.next = 9;
                                                                    break;
                                                                case 6:
                                                                    return t.next = 8,
                                                                        n.getQuestionsByIds(e);
                                                                case 8:
                                                                    n.questionMap[c] && (n.content = n.questionMap[c],
                                                                        o());
                                                                case 9:
                                                                case "end":
                                                                    return t.stop()
                                                            }
                                                    }, t)
                                                }));
                                                return function (e, n) {
                                                    return t.apply(this, arguments)
                                                }
                                            }()));
                                        case 1:
                                        case "end":
                                            return t.stop()
                                    }
                            }, t)
                        }));
                        return function (e) {
                            return t.apply(this, arguments)
                        }
                    }(),
                    resetPageInfo: function () {
                        this.pageInfo = {
                            total: this.listsIds.length,
                            pageNum: Math.floor(this.topicNum / 10) + 1,
                            pageSize: 10
                        }
                    },
                    cancelCutTopicEve: function (t) {
                        var e = this.cutTopicIds.findIndex(function (e) {
                            return e == t
                        });
                        this.cutTopicIds.splice(e, 1)
                    },
                    removeWrongTopicEve: function () {
                        this.handleRemoveTopic(!1)
                    },
                    cutTopicEve: function () {
                        this.handleRemoveTopic(!0)
                    },
                    handleRemoveTopic: function () {
                        if (arguments.length > 0 && void 0 !== arguments[0] && arguments[0] && (this.wrongQuestionType || this.collectQuestionType || "3" == this.routerData.practice))
                            this.cutTopicIds.push(this.content.id);
                        else {
                            this.listsIds.splice(this.topicNum, 1);
                            var t = this.content.qtype;
                            if (this.content.parent_qtype && "0" != this.content.parent_qtype && (t = this.content.parent_qtype),
                                this.qtypeCount[t]) {
                                var e = parseInt(this.qtypeCount[t]) - 1;
                                this.qtypeCount[t] = e,
                                    "0" == e && delete this.qtypeCount[t]
                            }
                            this.topicNum >= this.listsIds.length && this.topicNum--,
                                0 != this.listsIds.length ? this.getOneQuestion(this.topicNum) : this.empty = !0
                        }
                    },
                    repeatSeek: function () {
                        Object(y.Message)({
                            message: "您操作太频繁，请稍后再试！",
                            type: "warning"
                        })
                    },
                    goAiDirect: function () {
                        this.$httpLog({
                            type: "click",
                            name: "OnlineExercisePg-QuestionAnalysis-DeepSeek",
                            params: {
                                id: this.routerData.paperId,
                                target_id: this.content.id
                            }
                        });
                        var t = this.$refs.deepseek;
                        if ("0" != this.user.vip_type) {
                            if (this.aiDirectVisible)
                                return "1" == t.is_loading ? void this.$message.warning("正在生成中，请稍后重试") : void t.openDeepSeek();
                            this.aiDirectVisible = !0
                        } else if (this.residue_jiexi.total - this.residue_jiexi.used > 0) {
                            if (this.aiDirectVisible)
                                return "1" == t.is_loading ? void this.$message.warning("正在生成中，请稍后重试") : void t.openDeepSeek();
                            this.aiDirectVisible = !0
                        } else
                            this.$router.push("/price/buy/?view_id=vip_level1")
                    },
                    handleGlobalClick: function (t) {
                        var e = this.$refs.noteInputRef;
                        if (e) {
                            var n = e.$el.querySelector("textarea");
                            n && (n.contains(t.target) || n.blur())
                        }
                    },
                    handleKeydown: function (t) {
                        var e = "ArrowLeft" === t.key
                            , n = "ArrowRight" === t.key;
                        if (e || n) {
                            var o = this.$refs.noteInputRef
                                , r = null;
                            o && o.$el && (r = o.$el.querySelector("textarea")),
                                r && document.activeElement === r || (n ? this.nextQuestion() : e && this.prevQuestion())
                        }
                    },
                    nextQuestion: function () {
                        this.topicNum != this.listsIds.length - 1 && this.goTopic({
                            type: 2
                        })
                    },
                    prevQuestion: function () {
                        0 != this.topicNum && this.goTopic({
                            type: 1
                        })
                    },
                    checkResult: function () {
                        var text = "顺序练习";
                        "2" == this.routerData.modal && (text = "随机练习"),
                            "1" == this.routerData.practice && (text = "我的错题"),
                            ("1" == this.routerData.practice && "all_err" == this.routerData.type || "1" == this.routerData.all_type) && (text = "全部错题"),
                            "today_err" == this.routerData.type && (text = "今日错题"),
                            2 == this.routerData.practice && (text = "我的收藏"),
                            (2 == this.routerData.practice && "all_collect" == this.routerData.type || "2" == this.routerData.all_type) && (text = "全部收藏"),
                            "today_collect" == this.routerData.type && (text = "今日收藏"),
                            "one_to_three" == this.routerData.type && (text = "举一反三"),
                            "selected_question" == this.routerData.ques_type && (text = "精简题"),
                            5 == this.routerData.modal && (text = "高频错题"),
                            10 == this.routerData.modal && (text = "高频考题"),
                            this.routerData.qtype && "1" != this.routerData.practice && "2" != this.routerData.practice && (text = "题型练习"),
                            this.routerData.chapter && "1" != this.routerData.practice && "2" != this.routerData.practice && (text = "章节练习"),
                            this.routerData.ztid && (text = "试卷练习"),
                            Object(f.c)("lianxi_result", {
                                rightIds: this.rightIds.length,
                                wrongIds: this.errIds.length,
                                totalIds: this.listsIds.length,
                                right_rate: this.rightRoErr
                            }),
                            this.$router.push({
                                path: "/online/result",
                                query: {
                                    kid: this.kid,
                                    paperid: this.routerData.paperId,
                                    kaoshi_price: this.kaoshi.price,
                                    is_buy: this.is_buy,
                                    text: text + "成绩"
                                }
                            })
                    },
                    calculateAccuracy: function (t, e) {
                        var n = parseInt(t) + parseInt(e);
                        if (0 === n)
                            return "0%";
                        var o = parseInt(t) / n * 100;
                        return "".concat(o.toFixed(2), "%")
                    },
                    checkSelected: function (t) {
                        var e = this;
                        this.$axios.$post("/questions/ids", {
                            ids: JSON.stringify(t.related_question_ids),
                            source: "point"
                        }).then(function (t) {
                            var data = t.data;
                            data.forEach(function (t) {
                                t.show_answer = "0",
                                    t.question = t.question.replace(/<img(.*?)>/g, "（含图）"),
                                    t.question = t.question.replace(/<audio(.*?)>/g, "（含音频）"),
                                    t.question = t.question.replace(/<video(.*?)>/g, "（含视频）"),
                                    t.answer = t.answer.replace(/<img(.*?)>/g, "（含图）"),
                                    t.options && (t.options = JSON.parse(t.options)),
                                    e.$utils.loadFont(t)
                            }),
                                e.related_question = data,
                                e.selectedQuesDialog = !0,
                                e.$httpLog({
                                    type: "click",
                                    name: "OnlineExercisePg-QuestionAnalysis-OneToManyAnalogy",
                                    params: {
                                        id: e.routerData.paperId,
                                        target_id: e.content.id
                                    }
                                })
                        })
                    },
                    selectNumChange: function (t) {
                        Object(f.c)("uiConfig", {
                            selectNum: t
                        })
                    },
                    goBuy: function () {
                        this.$router.push("/jishi/buy/buy_kaoshi/?kid=".concat(this.kaoshi.id))
                    },
                    getAiAnalysisToken: function (t) {
                        return this.$axios.$post("/user/question/getAiAnalysisToken", {
                            id: this.content.id
                        })
                    },
                    editContent: function (t, e, n) {
                        this.content[e] = "analysis" == e ? this.content[e] + n : n
                    },
                    getSseAiAnalysis: function () {
                        var t = Object(r.a)(regeneratorRuntime.mark(function t(e) {
                            var n, o, c, l, h, d, _ = this;
                            return regeneratorRuntime.wrap(function (t) {
                                for (; ;)
                                    switch (t.prev = t.next) {
                                        case 0:
                                            return t.next = 2,
                                                this.getAiAnalysisToken();
                                        case 2:
                                            n = t.sent,
                                                o = n.data.ai_analysis_token,
                                                c = [],
                                                !1,
                                                l = 0,
                                                h = function () {
                                                    var t = Object(r.a)(regeneratorRuntime.mark(function t() {
                                                        var n;
                                                        return regeneratorRuntime.wrap(function (t) {
                                                            for (; ;)
                                                                switch (t.prev = t.next) {
                                                                    case 0:
                                                                        (n = c.findIndex(function (t) {
                                                                            return t.sentence_id == l
                                                                        })) > -1 ? function () {
                                                                            for (var data = c[n], t = function (i) {
                                                                                setTimeout(function () {
                                                                                    var element = data.result[i];
                                                                                    _.editContent(e, "analysis", element),
                                                                                        i == data.result.length - 1 && (l++,
                                                                                            h())
                                                                                }, 20 * i)
                                                                            }, i = 0; i < data.result.length; i++)
                                                                                t(i)
                                                                        }() : setTimeout(function () {
                                                                            h()
                                                                        }, 500);
                                                                    case 2:
                                                                    case "end":
                                                                        return t.stop()
                                                                }
                                                        }, t)
                                                    }));
                                                    return function () {
                                                        return t.apply(this, arguments)
                                                    }
                                                }(),
                                                (d = new EventSource("".concat("/api", "/questions/getSseAiAnalysis?id=").concat(e, "&ai_analysis_token=").concat(o), {
                                                    withCredentials: !1
                                                })).onmessage = function () {
                                                    var t = Object(r.a)(regeneratorRuntime.mark(function t(n) {
                                                        var data;
                                                        return regeneratorRuntime.wrap(function (t) {
                                                            for (; ;)
                                                                switch (t.prev = t.next) {
                                                                    case 0:
                                                                        data = JSON.parse(n.data),
                                                                            c.push(data),
                                                                            data.is_end && (d.close(),
                                                                                setTimeout(function () {
                                                                                    _.showDeepSeekTip = !0
                                                                                }, 1500)),
                                                                            0 == data.sentence_id && h(),
                                                                            0 == data.is_end && (_.editContent(e, "analysis_source", "ai"),
                                                                                _.editContent(e, "free_jiexi", "1"),
                                                                                _.getFreeAnalysisNumber());
                                                                    case 5:
                                                                    case "end":
                                                                        return t.stop()
                                                                }
                                                        }, t)
                                                    }));
                                                    return function (e) {
                                                        return t.apply(this, arguments)
                                                    }
                                                }(),
                                                d.onerror = function (t) {
                                                    d.close()
                                                }
                                                ;
                                        case 11:
                                        case "end":
                                            return t.stop()
                                    }
                            }, t, this)
                        }));
                        return function (e) {
                            return t.apply(this, arguments)
                        }
                    }(),
                    generateJXClick: function (t) {
                        "0" != this.user.vip_type ? this.getSseAiAnalysis(t.id) : this.residue_jiexi.total - this.residue_jiexi.used > 0 ? this.getSseAiAnalysis(t.id) : location.href = "/price/buy/?view_id=vip_level1"
                    },
                    getFreeAnalysisNumber: function () {
                        var t = this;
                        "0" == this.user.vip_type && this.user.uid && this.$axios.$post("/user/userSetting/getFreeAnalysisNumber", {}).then(function (e) {
                            t.residue_jiexi = e.data || {}
                        })
                    },
                    openDialog: function () {
                        this.$refs.jubaodialog.initData(),
                            this.$refs.jubaodialog.changeVisible(!0)
                    },
                    checkAnsEve: function (t) {
                        this.related_question[t].show_answer = "1"
                    },
                    checkPoint: function (data) {
                        var t = this;
                        this.$axios.$post("/questions/ids", {
                            ids: JSON.stringify(this.related_question_ids),
                            source: "paper_point"
                        }).then(function (e) {
                            var data = e.data;
                            data.forEach(function (e) {
                                e.show_answer = "0",
                                    e.question = e.question.replace(/<img(.*?)>/g, "（含图）"),
                                    e.question = e.question.replace(/<audio(.*?)>/g, "（含音频）"),
                                    e.question = e.question.replace(/<video(.*?)>/g, "（含视频）"),
                                    e.answer = e.answer.replace(/<img(.*?)>/g, "（含图）"),
                                    e.options && (e.options = JSON.parse(e.options)),
                                    t.$utils.loadFont(e)
                            }),
                                t.related_question = data,
                                t.pointQuesDialog = !0
                        })
                    },
                    getCurrentPoint: function (data) {
                        var t = this;
                        this.$axios.$post("/user/question/getPoint", {
                            id: data.id
                        }).then(function (e) {
                            t.currentPoint = e.data.point,
                                t.related_question_ids = e.data.related_question_ids
                        })
                    },
                    closeTip: function () {
                        this.vipTips = !1
                    },
                    protecteyesModelChange: function (t) {
                        this.uiConfig.protecteyesModel = t,
                            Object(f.c)("uiConfig", this.uiConfig)
                    },
                    mainShowAnsChange: function (t) {
                        this.uiConfig.mainShowAns = t,
                            this.beiti = t ? "1" : "0",
                            Object(f.c)("uiConfig", this.uiConfig),
                            this.$nextTick(function () {
                                Object(N.a)()
                            })
                    },
                    showAiEve: function (t) {
                        this.showAi = !!t,
                            this.uiConfig.showAi = t,
                            Object(f.c)("uiConfig", this.uiConfig)
                    },
                    autoCheckedEve: function (t) {
                        this.uiConfig.autoChecked = t,
                            Object(f.c)("uiConfig", this.uiConfig)
                    },
                    sortByOptionsChange: function (t) {
                        var e = this;
                        if (this.uiConfig.sortByOptions = t,
                            this.sortByOptions = t,
                            Object(f.c)("uiConfig", this.uiConfig),
                            this.uiConfig.sortByOptions && "15" != this.content.qtype && "19" != this.content.qtype && "16" != this.content.qtype) {
                            var n = JSON.parse(this.content.options);
                            n.sort(m.a);
                            var o = "";
                            n.forEach(function (t, i) {
                                t.keyC = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L"][i],
                                    "1" != e.content.qtype && "3" != e.content.qtype || e.content.answer == t.Key && (e.content.answerC = t.keyC),
                                    "2" == e.content.qtype && e.content.answer.indexOf(t.Key) > -1 && (o += t.keyC),
                                    "3" != e.content.qtype && "2" != e.content.qtype && "1" != e.content.qtype && (e.content.answerC = e.content.answer)
                            }),
                                "2" == this.content.qtype && (this.content.answerC = o),
                                n.sort(function () {
                                    if (browser_custom.versions.trident)
                                        return 1
                                }),
                                this.content.options = JSON.stringify(n)
                        }
                        this.$nextTick(function () {
                            Object(N.a)()
                        })
                    },
                    offBiji: function () {
                        var t = this;
                        this.$cookies.get("token") ? (this.showBiji = !this.showBiji,
                            this.showBijiVisible && this.$nextTick(function () {
                                t.$refs.noteRef.scrollIntoView({
                                    block: "center",
                                    behavior: "smooth"
                                })
                            })) : window.location.href = "https://zaixiankaoshi.com/login?source=".concat(encodeURIComponent(window.location.href.replace(window.location.host, "zaixiankaoshi.com")))
                    },
                    addNote: function () {
                        var t = this;
                        this.$axios.$post("/user/Note/record", {
                            question_id: this.content.id,
                            content: this.noteContent
                        }).then(function (e) {
                            Object(y.Message)({
                                message: "保存成功",
                                type: "success",
                                duration: 2e3
                            }),
                                t.content.note = t.noteContent,
                                t.noteModal = !1
                        })
                    },
                    saveBiji: function () {
                        var t = this;
                        this.$axios.$post("/user/Note/record", {
                            question_id: this.content.id,
                            content: this.content.note
                        }).then(function (e) {
                            Object(y.Message)({
                                message: "保存成功",
                                type: "success",
                                duration: 2e3
                            }),
                                t.showBiji = !1
                        })
                    },
                    getCollec: function () {
                        var t = this;
                        this.$cookies.get("token") && this.$axios.$post("/user/collect/all", {
                            paperid: this.$route.query.paperId
                        }).then(function (e) {
                            e.data && (t.realcollectIds = e.data)
                        })
                    },
                    getCutIds: function () {
                        var t = this;
                        this.$axios.$post("/user/cut/lists", {
                            paperid: this.$route.query.paperId
                        }).then(function (e) {
                            t.cutTopicIds = e.data || []
                        })
                    },
                    showApply: function () {
                        this.applyModal = !0
                    },
                    isReciteFun: function () {
                        var t = this
                            , content = this.contents.rows.find(function (e) {
                                return e.id === t.listsIds[t.topicNum]
                            });
                        content.showAns = !0,
                            content.result = "1";
                        var e = JSON.parse(content.options)
                            , n = content.answer.split("");
                        e.forEach(function (t) {
                            n.indexOf(t.Key) > -1 && (t.styles = "right")
                        }),
                            content.options = JSON.stringify(e)
                    },
                    answerFun: function (t) {
                        var e = this;
                        if (this.content) {
                            if (this.content.result = t.result,
                                this.content.selfAnswer = t.selfAnswer || "",
                                this.content.selfAnswerC = t.selfAnswerC || "",
                                this.content.custom_ans = t.custom_ans || "",
                                "-1" == t.result)
                                this.content.showAns = !0,
                                    this.mainShowAns = !0,
                                    this.errIds.push(t.id);
                            else {
                                if (this.rightIds.push(t.id),
                                    this.content.showAns = !0,
                                    this.topicNum < this.listsIds.length - 1 && !this.autoChecked && (this.content.showAns = !0),
                                    "5" == this.content.qtype || "11" == this.content.qtype || "12" == this.content.qtype)
                                    return void (this.content.showAns = !0);
                                setTimeout(function () {
                                    e.topicNum < e.listsIds.length - 1 && e.autoChecked && e.goTopic({
                                        type: 2
                                    })
                                }, 500)
                            }
                            this.$nextTick(function () {
                                Object(N.a)()
                            })
                        }
                    },
                    checkBoxChangeEvent: function (t) {
                        this.content && (this.content.checkBoxAnswer = t.checkBoxAnswer || "",
                            this.content.selfAnswerC = t.selfAnswerC || "")
                    },
                    paixunChangeEve: function (t) {
                        this.content.selfAnswer = t.paixuAnswer.join(""),
                            this.content.paixuAnswer = t.paixuAnswer
                    },
                    getVolume: function (t) {
                        return this.collectIds = t ? JSON.parse(this.$route.query.ids).sort(m.a) : JSON.parse(this.$route.query.ids),
                            new Promise(function (t) {
                                t()
                            }
                            )
                    },
                    goTopic: function () {
                        var t = Object(r.a)(regeneratorRuntime.mark(function t(e, n) {
                            var o = this;
                            return regeneratorRuntime.wrap(function (t) {
                                for (; ;)
                                    switch (t.prev = t.next) {
                                        case 0:
                                            if (e && 2 == e.type && this.topicNum++,
                                                e && 1 == e.type && this.topicNum--,
                                                e && 3 == e.type && (this.topicNum = e.jumNums),
                                                !this.showPayNewKaoshiDailog()) {
                                                t.next = 5;
                                                break
                                            }
                                            return t.abrupt("return");
                                        case 5:
                                            if (!this.showVipPayPaperDialog()) {
                                                t.next = 7;
                                                break
                                            }
                                            return t.abrupt("return");
                                        case 7:
                                            if (!this.showVipPaperDialog()) {
                                                t.next = 9;
                                                break
                                            }
                                            return t.abrupt("return");
                                        case 9:
                                            return this.topicNum >= this.listsIds.length && (this.topicNum = 0),
                                                this.topicNum <= 0 && (this.topicNum = 0),
                                                n && n.clientX && this.$utils.setMousePosition(n),
                                                t.next = 14,
                                                this.getOneQuestion(this.topicNum);
                                        case 14:
                                            this.showBiji = !1,
                                                "1" == this.beiti ? this.mainShowAns = !0 : this.mainShowAns = !1,
                                                this.transearch(),
                                                this.setSequence(),
                                                this.content && this.content.id && setTimeout(function () {
                                                    o.$refs[o.content.id + "card"][0].scrollIntoView({
                                                        block: "end"
                                                    })
                                                }, 500);
                                        case 19:
                                        case "end":
                                            return t.stop()
                                    }
                            }, t, this)
                        }));
                        return function (e, n) {
                            return t.apply(this, arguments)
                        }
                    }(),
                    initKaoShiData: function () {
                        var t = this
                            , e = this.$route.query.kid;
                        this.$axios.$post("/kaoShi/home", {
                            kid: e
                        }).then(function (e) {
                            t.kaoshi = e.data.kaoshi,
                                t.is_buy = e.data.is_buy,
                                t.confirm_collect = e.data.is_collect,
                                !t.pay_kaoshi_dialog_img && e.data.guide_dialog_image && (console.log("🚀 ~ this.$axios.$post ~ setPayKaoshiDialogImg"),
                                    t.setPayKaoshiDialogImg(e.data.guide_dialog_image))
                        })
                    },
                    getIdsQtypeCount: function () {
                        var t = this;
                        this.$axios.$post("/questions/idsQtypeCount", {
                            ids: JSON.stringify(this.listsIds),
                            paperid: this.routerData.paperId
                        }).then(function (e) {
                            var data = e.data || {};
                            t.qtypeCount = data
                        })
                    },
                    initData: function () {
                        var t, e = this;
                        if (this.routerData = this.$route.query,
                            this.ptype = this.$route.query.ptype || "",
                            this.is_collect = this.$route.query.is_collect || "",
                            this.kid = this.$route.query.kid || "",
                            this.is_vip_paper = this.$route.query.is_vip_paper || "",
                            this.resetPageInfo(),
                            this.routerData.id)
                            this.listsIds = [this.routerData.id];
                        else if (this.routerData.ztid)
                            this.$axios.$post("/paper/pastExamPaperModule", {
                                past_exam_paperid: this.routerData.ztid || ""
                            }).then(function (t) {
                                var n = [];
                                t.data.modules.forEach(function (i) {
                                    JSON.parse(i.question_ids).forEach(function (t) {
                                        n.push(t.question_id + "")
                                    })
                                }),
                                    e.listsIds = n,
                                    e.getIdsQtypeCount(),
                                    e.getAnswer(),
                                    e.goTopic()
                            });
                        else {
                            this.paper_type = this.routerData.paper_type || "",
                                "题型练习" == this.routerData.text ? this.modalText = "题型练习" : (this.modalText = this.routerData.text,
                                    this.emptyCon = "暂无数据");
                            var n = "/questions/fetch";
                            if (2 == this.routerData.modal && (n = "/questions/randomFetchIds"),
                                (1 == this.routerData.practice && "all_err" == this.routerData.type || "1" == this.routerData.all_type) && (n = "/user/wrong/lists",
                                    this.is_collect = "1"),
                                (2 == this.routerData.practice && "all_collect" == this.routerData.type || "2" == this.routerData.all_type || "today_collect" == this.routerData.type) && (n = "/user/collect/all",
                                    this.is_collect = "1"),
                                "today_err" == this.routerData.type && (n = "/user/wrong/today",
                                    this.is_collect = "1"),
                                "one_to_three" == this.routerData.type && (n = "/user/wrong/one2Three"),
                                3 == this.routerData.practice && (n = "/user/note/questionIds",
                                    this.is_collect = "1"),
                                5 == this.routerData.practice && (n = "/paper/topErrors",
                                    this.is_collect = "1"),
                                10 == this.routerData.modal && (n = "/paper/highFrequencyQuestions"),
                                this.routerData.panduan && (n = "/questions/fetchPanduan"),
                                "selected_question" == this.routerData.ques_type && (n = "/questions/getSelectdIds"),
                                this.routerData.paperId) {
                                this.routerData.paperId;
                                this.$axios.$post(n, (t = {
                                    paperid: this.routerData.paperId,
                                    qtype: this.routerData.qtype,
                                    chapter: this.routerData.chapter || "0",
                                    gid: this.routerData.gid || "",
                                    only_today: "today_collect" == this.routerData.type ? "1" : "",
                                    question_size: this.selectNum || "30"
                                },
                                    Object(o.a)(t, "question_size", this.selectNum || "50"),
                                    Object(o.a)(t, "answer", this.routerData.panduan || ""),
                                    Object(o.a)(t, "difficulty", this.routerData.difficulty || ""),
                                    Object(o.a)(t, "source", ""),
                                    t)).then(function (t) {
                                        if ("200" == t.code)
                                            if (t.data) {
                                                if (2 != e.routerData.modal || e.routerData.practice)
                                                    e.listsIds = t.data.rows;
                                                else {
                                                    var n = {}
                                                        , o = [];
                                                    t.data.rows.forEach(function (i) {
                                                        n[i.qtype] = i.ids.length,
                                                            o = o.concat(i.ids)
                                                    }),
                                                        e.listsIds = o
                                                }
                                                if (e.routerData.practice && t.data && (e.listsIds = t.data),
                                                    10 == e.routerData.modal && (e.listsIds = t.data),
                                                    "1" != e.routerData.modal || e.routerData.practice || e.routerData.all_type || e.getAnswer(),
                                                    "selected_question" == e.routerData.ques_type || "one_to_three" == e.routerData.type) {
                                                    var r = {}
                                                        , c = [];
                                                    t.data.rows.forEach(function (i) {
                                                        r[i.qtype] = i.ids.length,
                                                            c = c.concat(i.ids)
                                                    }),
                                                        e.listsIds = c,
                                                        e.getAnswer()
                                                }
                                                if ("today_collect" != e.routerData.type && "today_err" != e.routerData.type || (e.listsIds = t.data || []),
                                                    t.data.paper ? (e.paperName = t.data.paper.name,
                                                        e.paper = t.data.paper) : e.paperName = Object(f.a)("paper") ? Object(f.a)("paper").name : "",
                                                    !Object(f.a)("lianxi_question_ids") || "1" != e.routerData.practice && "2" != e.routerData.practice || "all_err" == e.routerData.type || "all_collect" == e.routerData.type || (e.listsIds = Object(f.a)("lianxi_question_ids")),
                                                    e.routerData.ptype,
                                                    e.getIdsQtypeCount(),
                                                    e.routerData.sequence > 0 && "1" == e.routerData.modal && !e.routerData.chapter)
                                                    e.goTopic({
                                                        type: 3,
                                                        jumNums: parseInt(e.routerData.sequence)
                                                    });
                                                else {
                                                    if (e.routerData.sequence > 0 && "1" == e.routerData.modal && e.routerData.chapter)
                                                        if ((Object(f.a)("kemu") || {
                                                            practice: "",
                                                            sequence: "",
                                                            text: "",
                                                            qtype: ""
                                                        }).chapter == e.routerData.chapter)
                                                            return void e.goTopic({
                                                                type: 3,
                                                                jumNums: parseInt(e.routerData.sequence)
                                                            });
                                                    e.goTopic()
                                                }
                                            } else
                                                e.empty = !0
                                    }).catch(function (t) {
                                        e.empty = !0
                                    })
                            } else
                                window.location.href = "/home"
                        }
                    },
                    transearch: function () {
                        if ("2" != this.routerData.modal) {
                            var t = this.$router.history.current.query
                                , path = this.$router.history.current.path
                                , e = JSON.parse(JSON.stringify(t));
                            e.sequence = this.topicNum,
                                this.$router.push({
                                    path: path,
                                    query: e
                                })
                        }
                    },
                    collect_paper: function () {
                        var t = this;
                        this.paper.id && this.$axios.$post("/user/paper/collect", {
                            paperid: this.paper.id
                        }).then(function (e) {
                            t.$message({
                                message: "收藏成功",
                                type: "success"
                            }),
                                t.is_collect = "1"
                        })
                    },
                    setSequence: function () {
                        var t = this.routerData;
                        t.sequence = this.topicNum,
                            Object(f.c)("kemu", t)
                    },
                    getQuestionsByIds: function (t) {
                        var e = this;
                        return this.resetPageInfo(t),
                            new Promise(function (t, n) {
                                var o = e.listsIds.slice(10 * (e.pageInfo.pageNum - 1), 10 * e.pageInfo.pageNum);
                                if ((o = o.filter(function (t) {
                                    return !e.questionMap[t]
                                })).length < 10) {
                                    var r = e.listsIds.slice(10 * e.pageInfo.pageNum, 10 * e.pageInfo.pageNum + 10 - o.length);
                                    r = r.filter(function (t) {
                                        return !e.questionMap[t]
                                    }),
                                        o = o.concat(r)
                                }
                                var source = "paper";
                                "selected_question" == e.routerData.ques_type && (source = "ai_selected"),
                                    e.$axios.$post("/questions/ids", {
                                        ids: JSON.stringify(o),
                                        paperid: e.paper.id || e.routerData.paperId || "",
                                        source: source
                                    }).then(function (n) {
                                        //TODO
                                        window._InterceptQues(n.data)
                                        n.data.forEach(function (t) {
                                            t.question && t.question.indexOf("font-family") > -1 && (t.question = t.question.replace(/font-family/g, "")),
                                                t.showAns = !1,
                                                t.custom_ans = "",
                                                t.ans_img = [],
                                                t.checkBoxAnswer = [],
                                                t.paixuAnswer = [],
                                                t.result = "",
                                                t.selfAnswer = "",
                                                t.selfAnswerC = "",
                                                t.checkBoxAnswerC = [],
                                                t.custom_ans_arr = [],
                                                t.free_jiexi = "0";
                                            var n = t.analysis;
                                            if (n && (t.analysis_source = "question"),
                                                !n) {
                                                var o = t.self_analysis;
                                                o && (n = o,
                                                    t.analysis_source = "self")
                                            }
                                            if (!n) {
                                                var r = t.ai_analysis;
                                                r && (n = r,
                                                    t.analysis_source = "ai")
                                            }
                                            if (t.analysis = n,
                                                t.all_accuracy ? t.all_accuracy = 100 * (1 - t.all_accuracy) : t.all_accuracy = "",
                                                t.total_right_number = "",
                                                t.total_wrong_number = "",
                                                t.options || (t.options = JSON.stringify([])),
                                                "1" == t.qtype || "2" == t.qtype || "14" == t.qtype) {
                                                var c = JSON.parse(t.options);
                                                e.uiConfig.sortByOptions && c.sort(m.a);
                                                var l = "";
                                                c.forEach(function (e, i) {
                                                    e.keyC = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L"][i],
                                                        "1" != t.qtype && "3" != t.qtype || t.answer == e.Key && (t.answerC = e.keyC),
                                                        "2" != t.qtype && "14" != t.qtype || t.answer.indexOf(e.Key) > -1 && (l += e.keyC),
                                                        "3" != t.qtype && "2" != t.qtype && "14" != t.qtype && "1" != t.qtype && (t.answerC = t.answer)
                                                }),
                                                    "2" != t.qtype && "14" != t.qtype || (t.answerC = l),
                                                    c.sort(function () {
                                                        if (browser_custom.versions.trident)
                                                            return 1
                                                    }),
                                                    t.options = JSON.stringify(c)
                                            }
                                            var h = e.result_obj[t.id];
                                            if (h) {
                                                if (t.all_accuracy = h ? h.all_accuracy : "",
                                                    t.all_accuracy = h ? h.all_accuracy : "",
                                                    t.total_right_number = h.right_number ? h.right_number : 0,
                                                    t.total_wrong_number = h.wrong_number ? h.wrong_number : 0,
                                                    t.all_right = h.total_right_number ? h.total_right_number : 0,
                                                    t.all_wrong = h.total_wrong_number ? h.total_wrong_number : 0,
                                                    e.isSingle(t.qtype) && (h.last_result = h.last_answer == t.answer ? "1" : "-1",
                                                        t.result = h ? h.last_result : "0",
                                                        t.selfAnswer = h ? h.last_answer : "",
                                                        t.as = h ? h.last_answer : ""),
                                                    e.isMultiple(t.qtype) && (h.last_result = h.last_answer == t.answer ? "1" : "-1",
                                                        t.result = h ? h.last_result : "0",
                                                        t.selfAnswer = h ? h.last_answer : ""),
                                                    "15" != t.qtype && "19" != t.qtype && "16" != t.qtype || (h.last_result = h.last_answer == t.answer ? "1" : "-1",
                                                        t.result = h ? h.last_result : "0",
                                                        t.selfAnswer = h ? h.last_answer : "",
                                                        t.paixuAnswer = h ? h.last_answer.split("") : []),
                                                    "4" == t.qtype)
                                                    h.last_result = h.last_answer == t.answer ? "1" : "-1",
                                                        t.result = h ? h.last_result : "0",
                                                        h.last_answer.split("|").forEach(function (e, i) {
                                                            t.custom_ans_arr.push({
                                                                value: e
                                                            })
                                                        });
                                                if (e.isSubject(t.qtype) && (h.last_result = h.last_answer == t.answer ? "1" : "-1",
                                                    t.result = h ? h.last_result : "0",
                                                    t.custom_ans = h ? h.last_answer : ""),
                                                    t.showAns = !0,
                                                    ("1" == t.qtype || "2" == t.qtype || "14" == t.qtype) && h.last_answer) {
                                                    var d = "";
                                                    h.last_answer.split("").forEach(function (i) {
                                                        var e = JSON.parse(t.options)
                                                            , n = e.findIndex(function (t) {
                                                                return t.Key == i
                                                            });
                                                        n > -1 && (d += e[n].keyC || e[n].Key || "")
                                                    }),
                                                        t.selfAnswerC = d.split("").sort().join("")
                                                }
                                            }
                                            if (0 == t.custom_ans_arr.length) {
                                                var _ = t.answer.split("|");
                                                t.custom_ans_arr = _.map(function (t) {
                                                    return {
                                                        value: ""
                                                    }
                                                })
                                            }
                                            t.note || (t.note = ""),
                                                t.copyAnalysis = "试题解析：" + t.analysis,
                                                e.questionMap[t.id] = t
                                        }),
                                            Object(N.b)().then(function () {
                                                e.$nextTick(function () {
                                                    Object(N.a)()
                                                })
                                            }).catch(function (t) {
                                                console.error("MathJax 初始化失败：", t)
                                            }),
                                            t()
                                    }).catch(function (t) {
                                        n()
                                    })
                            }
                            )
                    },
                    getAnswer: function () {
                        var t = this;
                        if (this.$cookies.get("token")) {
                            var data = {
                                paperid: this.routerData.paperId
                            };
                            "顺序练习" != this.routerData.text && (data.ids = JSON.stringify(this.listsIds)),
                                this.$axios.$post("/user/QuestionStatus/get", data).then(function (e) {
                                    var n = {};
                                    if (e.data) {
                                        var o = []
                                            , r = []
                                            , c = [];
                                        e.data.map(function (t) {
                                            "-1" == t.last_result && o.push(t.question_id),
                                                "1" == t.last_result && r.push(t.question_id),
                                                "2" == t.last_result && c.push(t.question_id),
                                                n[t.question_id] = t
                                        }),
                                            t.errIds = o,
                                            t.rightIds = r,
                                            t.subjectIds = c,
                                            t.result_obj = n
                                    }
                                })
                        }
                    },
                    clearEve: function () {
                        var t = this
                            , e = this;
                        this.$confirm("确定清空顺序练习记录，重新开始练习吗？", "提示", {
                            type: "warning",
                            showClose: !1,
                            confirmButtonText: "确定"
                        }).then(function (n) {
                            e.$axios.$post("/user/QuestionStatus/clear", {
                                paperid: e.$route.query.paperId,
                                question_ids: JSON.stringify(e.errIds.concat(e.rightIds).concat(e.subjectIds))
                            }).then(function (e) {
                                Object(f.c)("kemu", {});
                                var n = t.$router.history.current.query
                                    , path = t.$router.history.current.path
                                    , o = JSON.parse(JSON.stringify(n));
                                o.sequence = "";
                                var r = [];
                                for (var c in o)
                                    Object.hasOwnProperty.call(o, c) && r.push(c + "=" + o[c]);
                                location.href = path + "?" + r.join("&")
                            })
                        })
                    },
                    showErr: function () {
                        this.applyModal = !0
                    },
                    saveAnsEve: function (t) {
                        this.subjectIds.indexOf(t.id) > -1 || this.subjectIds.push(t.id),
                            this.content.showAns || (this.content.showAns = !0)
                    },
                    showAnsEve: function () {
                        this.mainShowAns = !this.mainShowAns,
                            this.mainShowAns || (this.content.showAns = !1)
                    },
                    changeSize: function (t) {
                        this.uiConfig.fontSize = t,
                            Object(f.c)("uiConfig", this.uiConfig)
                    },
                    showSet: function () {
                        this.setVisible = !0
                    },
                    setNumEve: function () {
                        var t = this;
                        this.$axios.$post("/user/UserSetting/setRemoveErrorLimit", {
                            limit: this.uiConfig.num
                        }).then(function (e) {
                            t.$message({
                                message: "设置成功",
                                type: "success"
                            }),
                                Object(f.c)("uiConfig", t.uiConfig),
                                t.setVisible = !1;
                            var n = Object(f.a)("user");
                            n.user.remove_error_limit = t.uiConfig.num,
                                Object(f.c)("user", n)
                        })
                    },
                    addAnsEve: function () {
                        var t = this
                            , e = this.content.id;
                        this.$prompt("", "请输入解析内容", {
                            inputValue: this.content.self_analysis || "",
                            inputType: "textarea",
                            confirmButtonText: "保存",
                            cancelButtonText: "取消",
                            inputPlaceholder: "请输入解析内容，可以更好地理解试题，考试宝审核完成后，将立即展现。",
                            showCancelButton: !1
                        }).then(function (n) {
                            var o = n.value;
                            o ? t.$axios.$post("/report/analysis", {
                                id: e,
                                desc: o
                            }).then(function (e) {
                                t.$message({
                                    type: "success",
                                    message: "保存成功"
                                })
                            }) : alert("请输入解析内容")
                        }).catch(function () { })
                    },
                    editQuestion: function (data) {
                        var t = this;
                        this.$axios.$post("/questions/detail", {
                            id: this.content.id
                        }).then(function (e) {
                            t.currentQuestion = e.data.question,
                                t.editDialog = !0
                        })
                    },
                    openedEditor: function () {
                        this.$refs.manual.handleCreate(this.currentQuestion)
                    },
                    seaveEvent: function () {
                        this.$refs.manual.$emit("addQuestions", this.currentQuestion.id)
                    },
                    editSuccessEve: function (t) {
                        this.editDialog = !1
                    },
                    editClose: function () {
                        location.reload()
                    },
                    jubaoEve: function () {
                        this.jubaoModal = !0
                    },
                    jubaoSubmit: function () {
                        var t = this;
                        this.jubaoDesc ? (this.loading = !0,
                            this.$axios.$post("/report/illegal", {
                                target_id: this.content.id,
                                desc: this.jubaoDesc,
                                type: "question"
                            }).then(function (e) {
                                t.jubaoModal = !1,
                                    t.$message({
                                        type: "success",
                                        message: "举报信息已提交"
                                    })
                            })) : alert("请选择举报信息")
                    },
                    reportResultEve: function (t) {
                        var e = this.listsIds[this.topicNum]
                            , content = this.questionMap[e];
                        if (content)
                            for (var n in t)
                                if (Object.hasOwnProperty.call(t, n)) {
                                    var element = t[n];
                                    "all_accuracy" == n ? content.all_accuracy = element : content[n] = element
                                }
                    },
                    qtype5ShowAnsEve: function () {
                        this.content.showAns = !this.content.showAns
                    },
                    showPayNewKaoshiDailog: function () {
                        return this.topicNum >= 49 && "1" != this.is_buy && this.kaoshi.price > 0 && (this.$refs.payKaoshiDialogRef.changeVisible(!0),
                            !0)
                    },
                    showVipPaperDialog: function () {
                        return this.topicNum >= 49 && "0" == this.user.vip_type && "1" == this.is_vip_paper && (this.vipPaperDialog = !0,
                            !0)
                    },
                    showVipPayPaperDialog: function () {
                        return "0" == this.user.vip_type && "1" != this.confirm_collect && "20" == this.kaoshi.target_type && (this.vipPayPaperDialog = !0,
                            !0)
                    },
                    goBuyErrAns: function () {
                        var t = this;
                        this.$httpLog({
                            type: "click",
                            name: "OnlineExercisePg-QuestionAnalysis-ViewAllButton",
                            params: {
                                id: this.routerData.paperId,
                                target_id: this.content.id
                            }
                        }),
                            this.residue_jiexi.total - this.residue_jiexi.used > 0 ? (this.content.free_jiexi = "1",
                                this.$axios.$post("/user/question/useFreeAnalysis", {}).then(function (e) {
                                    t.getFreeAnalysisNumber()
                                })) : this.$router.push("/price/buy/?view_id=vip_level1")
                    },
                    aiAnalyErr: function () {
                        var t = this;
                        this.$axios.$post("/feedback/aiAnalysis", {
                            question_id: this.content.id
                        }).then(function (e) {
                            t.$message({
                                type: "success",
                                message: "人工审核后，将对有问题的AI解析重新处理"
                            })
                        })
                    }
                })
            }
            , E = (n(1420),
                Object(D.a)(T, function () {
                    var t = this
                        , e = t.$createElement
                        , n = t._self._c || e;
                    return n("div", {
                        staticClass: "middle-container bj-eee",
                        class: t.protecteyesModel ? "protecteyes-model" : ""
                    }, [n("div", {
                        staticClass: "layout-container prative-page"
                    }, [t.routerData.id || t.routerData.all_type ? t._e() : n("div", {
                        staticClass: "breadcrumb"
                    }, [t._m(0), t._v(" "), "98" != t.routerData.paper_type ? n("span", [t._v(" \n          /   \n        "), t.kid ? t._e() : n("a", {
                        attrs: {
                            href: "/online/paper/detail/?paperid=" + t.routerData.paperId + (t.routerData.gid ? "&gid=" + t.routerData.gid : "")
                        }
                    }, [t._v("在线练习")]), t._v(" "), t.kid ? n("a", {
                        attrs: {
                            href: "" + t.kid_link
                        }
                    }, [t._v("在线练习")]) : t._e()]) : t._e(), t._v("\n        /   "), n("span", [t._v(t._s(t.modalText || "顺序练习"))])]), t._v(" "), t.routerData.all_type ? n("div", {
                        staticClass: "breadcrumb"
                    }, [t._m(1), t._v("\n        /   \n      "), n("span", [t._v(t._s("1" == t.routerData.all_type ? "全部错题" : "全部收藏"))])]) : t._e(), t._v(" "), t.empty ? t._e() : n("div", {
                        staticClass: "clearfix",
                        style: {
                            fontSize: t.uiConfig.fontSize + "px"
                        }
                    }, [n("div", {
                        staticClass: "layout-left pull-left lianxi-left",
                        class: t.paper.price > 0 ? "no-select" : ""
                    }, [n("div", {
                        staticClass: "lianxi-content",
                        class: {
                            shuiyin_content: t.paper && "1" == t.paper.watermark,
                            "protecteyes-content": t.protecteyesModel
                        }
                    }, [t.content.id ? n("select-radio", {
                        attrs: {
                            listsIds: t.listsIds,
                            content: t.content,
                            topicNum: t.topicNum,
                            options: t.content.options,
                            realcollectIds: t.realcollectIds,
                            exam_modal: "0",
                            paper_type: t.paper_type,
                            beiti: t.beiti,
                            is_lianxi: "1",
                            types: t.types,
                            wrongQuestionType: t.allWrongQuestionType,
                            autoChecked: t.autoChecked,
                            cutTopicIds: t.cutTopicIds
                        },
                        on: {
                            isRecite: t.isReciteFun,
                            applyCollec: t.showApply,
                            answer: t.answerFun,
                            goTopicEvent: t.goTopic,
                            checkBoxChange: t.checkBoxChangeEvent,
                            bijiEve: t.offBiji,
                            saveAns: t.saveAnsEve,
                            editQues: t.editQuestion,
                            jubao: t.openDialog,
                            reportResult: t.reportResultEve,
                            qtype5ShowAns: t.qtype5ShowAnsEve,
                            paixunChange: t.paixunChangeEve,
                            cutTopic: t.cutTopicEve,
                            cancelCutTopic: t.cancelCutTopicEve,
                            removeWrongTopic: t.removeWrongTopicEve
                        }
                    }) : t._e(), t._v(" "), t.vipTips ? n("div", {
                        staticClass: "vip-quanyi",
                        staticStyle: {
                            cursor: "pointer"
                        },
                        on: {
                            click: function (e) {
                                return t.$router.push("/price/buy/?view_id=vip_level1")
                            }
                        }
                    }) : t._e(), t._v(" "), t.content && t.mainShowAns || t.content && t.content.showAns ? n("div", {
                        staticClass: "answer-box"
                    }, [n("div", {
                        staticClass: "answer-right"
                    }, [n("div", {
                        staticClass: "ans-top"
                    }, [1 == t.content.qtype || 2 == t.content.qtype || 3 == t.content.qtype || 15 == t.content.qtype || 14 == t.content.qtype || "16" == t.content.qtype || "19" == t.content.qtype || "26" == t.content.qtype || "27" == t.content.qtype || "28" == t.content.qtype ? n("div", {
                        staticClass: "left"
                    }, [n("div", {
                        staticClass: "right-ans"
                    }, [n("b", [t._v("正确答案 "), n("span", {
                        staticStyle: {
                            "font-weight": "normal"
                        },
                        domProps: {
                            innerHTML: t._s(t.content.answerC || t.content.answer)
                        }
                    })]), t._v("  \n                  ")]), t._v(" "), !t.content.result || 1 != t.content.qtype && 2 != t.content.qtype && 3 != t.content.qtype && 15 != t.content.qtype && 14 != t.content.qtype && "16" != t.content.qtype && "19" != t.content.qtype && "26" != t.content.qtype && "27" != t.content.qtype && "28" != t.content.qtype ? t._e() : n("div", {
                        staticClass: "user-ans",
                        class: "user-ans" + t.content.result
                    }, [n("b", [t._v("我的答案 "), n("span", {
                        staticStyle: {
                            "font-weight": "normal"
                        },
                        domProps: {
                            innerHTML: t._s(t.content.selfAnswerC || t.content.selfAnswer)
                        }
                    }), t._v(" ")]), t._v(" "), "-1" == t.content.result ? n("img", {
                        attrs: {
                            src: "https://up.zaixiankaoshi.com/FkA2c88PrD8eR23UlL1ejyer5axl",
                            alt: ""
                        }
                    }) : t._e(), t._v(" "), "1" == t.content.result ? n("img", {
                        attrs: {
                            src: "https://up.zaixiankaoshi.com/FjteOgY4lCD4RSWPILZpiI0tHLIt",
                            alt: ""
                        }
                    }) : t._e()])]) : n("div", [n("b", [t._v(" 正确答案")]), t._v(" "), n("p", {
                        staticClass: "mt20",
                        staticStyle: {
                            width: "680px"
                        }
                    }, [n("span", {
                        staticStyle: {
                            "font-weight": "normal",
                            "white-space": "pre-wrap"
                        },
                        domProps: {
                            innerHTML: t._s(t.content.answerC || t.content.answer)
                        }
                    })])]), t._v(" "), n("div", {
                        staticClass: "right"
                    }, [t.content.uid != t.user.uid ? n("span", {
                        staticClass: "apply-err",
                        on: {
                            click: function (e) {
                                t.applyModal = !0
                            }
                        }
                    }, [n("svg", {
                        staticClass: "icon",
                        attrs: {
                            "aria-hidden": "true"
                        }
                    }, [n("use", {
                        attrs: {
                            "xlink:href": "#iconjiucuo"
                        }
                    })]), t._v(" 纠错")]) : t._e()])])]), t._v(" "), n("div", {
                        staticClass: "answer-box-detail"
                    }, [n("div", {
                        staticClass: "mb16"
                    }, [n("b", {
                        staticClass: "p-tit"
                    }, [t._v("答案解析")]), t._v(" "), n("div", {
                        staticClass: "answer-analysis-row",
                        class: t.hideAnalysis ? "hide-height" : ""
                    }, ["ai" == t.content.analysis_source && t.showAi ? n("img", {
                        staticClass: "analysis-source",
                        attrs: {
                            src: "https://resource-cdn.kaoshibao.com/pc/practice/icon_deepseek.png",
                            alt: ""
                        }
                    }) : t._e(), t._v(" "), t.showAi && t.content.analysis ? n("p", {
                        staticClass: "answer-analysis",
                        domProps: {
                            innerHTML: t._s(t.content.analysis)
                        }
                    }) : t._e(), t._v(" "), !t.showAi && t.content.analysis && "ai" != t.content.analysis_source ? n("p", {
                        staticClass: "answer-analysis",
                        domProps: {
                            innerHTML: t._s(t.content.analysis)
                        }
                    }) : t._e(), t._v(" "), !t.showAi && t.content.analysis && "ai" == t.content.analysis_source ? n("p", {
                        staticClass: "answer-analysis",
                        staticStyle: {
                            color: "#999999"
                        },
                        domProps: {
                            innerHTML: t._s("AI解析已关闭，点击右侧设置可重新启用")
                        }
                    }) : t._e(), t._v(" "), t.content.analysis ? t._e() : n("p", {
                        staticStyle: {
                            color: "#999999"
                        }
                    }, [t._v("\n                    暂无解析\n                  ")]), t._v(" "), t.hideAnalysis ? n("el-button", {
                        staticStyle: {
                            "margin-top": "12px"
                        },
                        attrs: {
                            type: "warning",
                            size: "mini"
                        },
                        on: {
                            click: t.goBuyErrAns
                        }
                    }, [t._v("查看全部")]) : t._e()], 1), t._v(" "), t.showAi && t.content.analysis ? n("div", {
                        staticClass: "deepseek-row mt16",
                        on: {
                            click: t.goAiDirect
                        }
                    }, [n("img", {
                        staticClass: "icon-info",
                        attrs: {
                            src: "https://resource-cdn.kaoshibao.com/pc/practice/icon_info.png",
                            alt: ""
                        }
                    }), t._v(" "), "ai" != t.content.analysis_source || t.sortByOptions ? t._e() : n("div", {
                        staticClass: "content"
                    }, [t._v("\n                    本解析由AI生成，仅供参考。使用\n                    "), n("span", {
                        staticClass: "deepseek-text"
                    }, [t._v("DeepSeek")]), t._v("\n                    获取深度思考过程。\n                  ")]), t._v(" "), "ai" == t.content.analysis_source && t.sortByOptions ? n("div", {
                        staticClass: "content"
                    }, [t._v("\n                    本解析由AI生成，仅供参考。使用\n                    "), n("span", {
                        staticClass: "deepseek-text"
                    }, [t._v("DeepSeek")]), t._v("\n                    获取深度思考过程。若出现选项解释错位，请关闭选项乱序。\n                  ")]) : t._e(), t._v(" "), "ai" != t.content.analysis_source && t.sortByOptions ? n("div", {
                        staticClass: "content"
                    }, [t._v("\n                    使用\n                    "), n("span", {
                        staticClass: "deepseek-text"
                    }, [t._v("DeepSeek")]), t._v("\n                    获取深度思考过程。若出现选项解释错位，请关闭选项乱序。\n                  ")]) : t._e(), t._v(" "), "ai" == t.content.analysis_source || t.sortByOptions ? t._e() : n("div", {
                        staticClass: "content"
                    }, [t._v("\n                    使用\n                    "), n("span", {
                        staticClass: "deepseek-text"
                    }, [t._v("DeepSeek")]), t._v("\n                    获取深度思考过程。\n                  ")]), t._v(" "), n("img", {
                        staticClass: "icon-right",
                        attrs: {
                            src: "https://resource-cdn.kaoshibao.com/pc/practice/icon_arrow_right.png",
                            alt: ""
                        }
                    })]) : t._e()]), t._v(" "), !t.content.analysis && "1" == t.switch_ai_analysis && t.showAi ? n("div", {
                        staticClass: "mb16"
                    }, [n("jx-banner", {
                        attrs: {
                            question_id: t.content.id,
                            vip_type: t.user.vip_type
                        },
                        on: {
                            bannerClick: t.generateJXClick
                        }
                    })], 1) : t._e(), t._v(" "), t.showFreeNum ? n("div", {
                        staticStyle: {
                            color: "#999999",
                            "font-size": "14px",
                            margin: "16px 0px"
                        }
                    }, [t._v("\n                可试用次数" + t._s(t.residue_jiexi.total) + "次，剩余" + t._s(t.residue_jiexi.total - t.residue_jiexi.used) + "次。\n              ")]) : t._e(), t._v(" "), t.content.point ? n("div", {
                        staticClass: "mb16 point-row"
                    }, [t._m(2), t._v(" "), n("div", t._l(t.content.point, function (e, o) {
                        return o < 3 ? n("el-popover", {
                            key: e.id,
                            attrs: {
                                placement: "bottom",
                                "popper-class": t.protecteyesModel ? "eye-protection-popover" : "",
                                width: "400",
                                trigger: "click"
                            },
                            on: {
                                show: function (n) {
                                    return t.getCurrentPoint(e)
                                }
                            }
                        }, [n("div", [n("div", {
                            staticStyle: {
                                "max-height": "300px",
                                "overflow-y": "auto"
                            },
                            domProps: {
                                innerHTML: t._s(t.currentPoint.content)
                            }
                        }), t._v(" "), t.related_question_ids.length > 1 ? n("div", {
                            staticStyle: {
                                "text-align": "center",
                                color: "#1a8cff",
                                "padding-top": "12px",
                                "line-height": "20px",
                                cursor: "pointer"
                            },
                            on: {
                                click: function (n) {
                                    return t.checkPoint(e)
                                }
                            }
                        }, [t._v("\n                        相关试题（" + t._s(t.related_question_ids.length) + "）\n                      ")]) : t._e()]), t._v(" "), n("span", {
                            staticClass: "point-item",
                            attrs: {
                                slot: "reference"
                            },
                            slot: "reference"
                        }, [t._v("\n                      " + t._s(e.title) + "\n                    ")])]) : t._e()
                    }), 1)]) : t._e(), t._v(" "), "selected_question" == t.routerData.ques_type && t.content.related_question_ids && t.content.related_question_ids.length > 0 ? n("div", {
                        staticClass: "mb16 point-row"
                    }, [t._m(3), t._v(" "), n("span", [t._v("共"), n("span", {
                        staticStyle: {
                            color: "#198CFF"
                        }
                    }, [t._v(t._s(t.content.related_question_ids.length))]), t._v("道题，快速攻克同类试题")]), t._v(" "), n("span", {
                        staticStyle: {
                            display: "flex",
                            "align-items": "center",
                            "margin-left": "24px",
                            cursor: "pointer"
                        },
                        on: {
                            click: function (e) {
                                return t.checkSelected(t.content)
                            }
                        }
                    }, [n("span", {
                        staticClass: "go-text"
                    }, [t._v("去查看")]), t._v(" "), n("img", {
                        staticClass: "nandu",
                        attrs: {
                            src: "https://resource-cdn.kaoshibao.com/mini/p/right_theme.png",
                            mode: ""
                        }
                    })])]) : t._e(), t._v(" "), t.content.difficulty ? n("div", {
                        staticClass: "mb16 point-row"
                    }, [t._m(4), t._v(" "), n("div", ["1" == t.content.difficulty ? n("span", [n("img", {
                        staticClass: "nandu",
                        attrs: {
                            src: "https://resource-cdn.kaoshibao.com/pc/icon/nandu_ed" + (t.protecteyesModel ? "9" : "") + ".png",
                            mode: ""
                        }
                    }), t._v(" "), n("img", {
                        staticClass: "nandu",
                        attrs: {
                            src: "https://resource-cdn.kaoshibao.com/pc/icon/nandu_un" + (t.protecteyesModel ? "9" : "") + ".png",
                            mode: ""
                        }
                    }), t._v(" "), n("img", {
                        staticClass: "nandu",
                        attrs: {
                            src: "https://resource-cdn.kaoshibao.com/pc/icon/nandu_un" + (t.protecteyesModel ? "9" : "") + ".png",
                            mode: ""
                        }
                    }), t._v(" "), n("img", {
                        staticClass: "nandu",
                        attrs: {
                            src: "https://resource-cdn.kaoshibao.com/pc/icon/nandu_un" + (t.protecteyesModel ? "9" : "") + ".png",
                            mode: ""
                        }
                    }), t._v(" "), n("img", {
                        staticClass: "nandu",
                        attrs: {
                            src: "https://resource-cdn.kaoshibao.com/pc/icon/nandu_un" + (t.protecteyesModel ? "9" : "") + ".png",
                            mode: ""
                        }
                    })]) : t._e(), t._v(" "), "4" == t.content.difficulty ? n("span", [n("img", {
                        staticClass: "nandu",
                        attrs: {
                            src: "https://resource-cdn.kaoshibao.com/pc/icon/nandu_ed" + (t.protecteyesModel ? "9" : "") + ".png",
                            mode: ""
                        }
                    }), t._v(" "), n("img", {
                        staticClass: "nandu",
                        attrs: {
                            src: "https://resource-cdn.kaoshibao.com/pc/icon/nandu_ed" + (t.protecteyesModel ? "9" : "") + ".png",
                            mode: ""
                        }
                    }), t._v(" "), n("img", {
                        staticClass: "nandu",
                        attrs: {
                            src: "https://resource-cdn.kaoshibao.com/pc/icon/nandu_un" + (t.protecteyesModel ? "9" : "") + ".png",
                            mode: ""
                        }
                    }), t._v(" "), n("img", {
                        staticClass: "nandu",
                        attrs: {
                            src: "https://resource-cdn.kaoshibao.com/pc/icon/nandu_un" + (t.protecteyesModel ? "9" : "") + ".png",
                            mode: ""
                        }
                    }), t._v(" "), n("img", {
                        staticClass: "nandu",
                        attrs: {
                            src: "https://resource-cdn.kaoshibao.com/pc/icon/nandu_un" + (t.protecteyesModel ? "9" : "") + ".png",
                            mode: ""
                        }
                    })]) : t._e(), t._v(" "), "2" == t.content.difficulty ? n("span", [n("img", {
                        staticClass: "nandu",
                        attrs: {
                            src: "https://resource-cdn.kaoshibao.com/pc/icon/nandu_ed" + (t.protecteyesModel ? "9" : "") + ".png",
                            mode: ""
                        }
                    }), t._v(" "), n("img", {
                        staticClass: "nandu",
                        attrs: {
                            src: "https://resource-cdn.kaoshibao.com/pc/icon/nandu_ed" + (t.protecteyesModel ? "9" : "") + ".png",
                            mode: ""
                        }
                    }), t._v(" "), n("img", {
                        staticClass: "nandu",
                        attrs: {
                            src: "https://resource-cdn.kaoshibao.com/pc/icon/nandu_ed" + (t.protecteyesModel ? "9" : "") + ".png",
                            mode: ""
                        }
                    }), t._v(" "), n("img", {
                        staticClass: "nandu",
                        attrs: {
                            src: "https://resource-cdn.kaoshibao.com/pc/icon/nandu_un" + (t.protecteyesModel ? "9" : "") + ".png",
                            mode: ""
                        }
                    }), t._v(" "), n("img", {
                        staticClass: "nandu",
                        attrs: {
                            src: "https://resource-cdn.kaoshibao.com/pc/icon/nandu_un" + (t.protecteyesModel ? "9" : "") + ".png",
                            mode: ""
                        }
                    })]) : t._e(), t._v(" "), "5" == t.content.difficulty ? n("span", [n("img", {
                        staticClass: "nandu",
                        attrs: {
                            src: "https://resource-cdn.kaoshibao.com/pc/icon/nandu_ed" + (t.protecteyesModel ? "9" : "") + ".png",
                            mode: ""
                        }
                    }), t._v(" "), n("img", {
                        staticClass: "nandu",
                        attrs: {
                            src: "https://resource-cdn.kaoshibao.com/pc/icon/nandu_ed" + (t.protecteyesModel ? "9" : "") + ".png",
                            mode: ""
                        }
                    }), t._v(" "), n("img", {
                        staticClass: "nandu",
                        attrs: {
                            src: "https://resource-cdn.kaoshibao.com/pc/icon/nandu_ed" + (t.protecteyesModel ? "9" : "") + ".png",
                            mode: ""
                        }
                    }), t._v(" "), n("img", {
                        staticClass: "nandu",
                        attrs: {
                            src: "https://resource-cdn.kaoshibao.com/pc/icon/nandu_ed" + (t.protecteyesModel ? "9" : "") + ".png",
                            mode: ""
                        }
                    }), t._v(" "), n("img", {
                        staticClass: "nandu",
                        attrs: {
                            src: "https://resource-cdn.kaoshibao.com/pc/icon/nandu_un" + (t.protecteyesModel ? "9" : "") + ".png",
                            mode: ""
                        }
                    })]) : t._e(), t._v(" "), "3" == t.content.difficulty ? n("span", [n("img", {
                        staticClass: "nandu",
                        attrs: {
                            src: "https://resource-cdn.kaoshibao.com/pc/icon/nandu_ed" + (t.protecteyesModel ? "9" : "") + ".png",
                            mode: ""
                        }
                    }), t._v(" "), n("img", {
                        staticClass: "nandu",
                        attrs: {
                            src: "https://resource-cdn.kaoshibao.com/pc/icon/nandu_ed" + (t.protecteyesModel ? "9" : "") + ".png",
                            mode: ""
                        }
                    }), t._v(" "), n("img", {
                        staticClass: "nandu",
                        attrs: {
                            src: "https://resource-cdn.kaoshibao.com/pc/icon/nandu_ed" + (t.protecteyesModel ? "9" : "") + ".png",
                            mode: ""
                        }
                    }), t._v(" "), n("img", {
                        staticClass: "nandu",
                        attrs: {
                            src: "https://resource-cdn.kaoshibao.com/pc/icon/nandu_ed" + (t.protecteyesModel ? "9" : "") + ".png",
                            mode: ""
                        }
                    }), t._v(" "), n("img", {
                        staticClass: "nandu",
                        attrs: {
                            src: "https://resource-cdn.kaoshibao.com/pc/icon/nandu_ed" + (t.protecteyesModel ? "9" : "") + ".png",
                            mode: ""
                        }
                    })]) : t._e()])]) : t._e(), t._v(" "), t.content.chapters && t.content.chapters.length > 0 ? n("div", {
                        staticClass: "mb16 point-row"
                    }, [t._m(5), t._v(" "), n("div", {
                        staticStyle: {
                            display: "flex",
                            "align-items": "center",
                            "flex-wrap": "wrap"
                        }
                    }, t._l(t.content.chapters, function (e, o) {
                        return n("span", {
                            key: e.id,
                            staticStyle: {
                                display: "flex",
                                "align-items": "center"
                            }
                        }, [t._v("\n                    " + t._s(e.title) + "\n                    "), o != t.content.chapters.length - 1 ? n("img", {
                            staticStyle: {
                                width: "20px",
                                height: "20px",
                                "margin-left": "0px 4px"
                            },
                            attrs: {
                                src: "https://up.zaixiankaoshi.com/FviWhoRGQdtMLy8qX0zS6e1gmmwK"
                            }
                        }) : t._e()])
                    }), 0)]) : t._e(), t._v(" "), n("div", {
                        staticClass: "mb20 mt16"
                    }, [n("b", {
                        staticClass: "p-tit"
                    }, [t._v("数据统计")]), t._v(" "), n("div", {
                        staticClass: "mt8"
                    }, [n("p", {
                        staticClass: "mb8 statistics-data-row"
                    }, [t._v("\n                    本人作答"), n("span", {
                        staticClass: "statistics-data-text"
                    }, [t._v(t._s(t.totalNumber))]), t._v("次，\n                      答对 "), n("span", {
                        staticClass: "statistics-data-text"
                    }, [t._v(t._s(t.rightNumber))]), t._v("次，\n                    正确率"), n("span", {
                        staticClass: "statistics-data-text"
                    }, [t._v(t._s(t.accuracy))]), t._v("，\n                    "), n("span", [t._v("全站作答" + t._s(t.allTotalNumber) + "次，")]), t._v(" "), n("span", [t._v("答对" + t._s(t.allRightNumber) + "次，")]), t._v(" "), n("span", [t._v("正确率" + t._s(t.allAccuracy))])])])])])]) : t._e(), t._v(" "), t.showBijiVisible ? n("div", {
                        ref: "noteRef",
                        staticClass: "biji-box clearfix"
                    }, [t.content ? n("el-input", {
                        ref: "noteInputRef",
                        staticClass: "biji-inp",
                        attrs: {
                            type: "textarea",
                            autosize: {
                                minRows: 2,
                                maxRows: 4
                            },
                            placeholder: "请输入笔记..."
                        },
                        model: {
                            value: t.content.note,
                            callback: function (e) {
                                t.$set(t.content, "note", e)
                            },
                            expression: "content.note"
                        }
                    }) : t._e(), t._v(" "), n("el-button", {
                        staticClass: "save-biji",
                        attrs: {
                            type: "primary",
                            size: "small"
                        },
                        on: {
                            click: t.saveBiji
                        }
                    }, [t._v("保存")])], 1) : t._e()], 1)]), t._v(" "), n("div", {
                        staticClass: "layout-right pull-right lianxi-right"
                    }, [n("div", {
                        staticClass: "lianxi-right-item"
                    }, [n("p", {
                        staticClass: "lianxi-cart-tit"
                    }, [n("b", [t._v("答题卡")]), t._v(" "), "1" != t.routerData.modal || t.routerData.practice || t.routerData.all_type ? t._e() : n("span", [n("span", {
                        staticClass: "theme-color",
                        on: {
                            click: t.clearEve
                        }
                    }, [t._v("清空答题记录")])])]), t._v(" "), n("div", {
                        staticClass: "problem-list clearfix"
                    }, [t._l(t.listsIds, function (e, o) {
                        return [t._l(t.qtypeCountList, function (e, r) {
                            return e.preIndex - e.value == o ? n("p", {
                                key: r,
                                staticClass: "q-tit"
                            }, [t._v("\n                " + t._s(t.types[e.key]) + "\n              ")]) : t._e()
                        }), t._v(" "), "100" == t.routerData.ptype ? n("p", {
                            staticClass: "mb16"
                        }) : t._e(), t._v(" "), n("span", {
                            ref: e + "card",
                            refInFor: !0,
                            class: {
                                active: o == t.topicNum,
                                err: t.errIds.indexOf(e) > -1,
                                right: t.rightIds.indexOf(e) > -1,
                                subject: t.subjectIds.indexOf(e) > -1
                            },
                            on: {
                                click: function (e) {
                                    return t.goTopic({
                                        type: 3,
                                        jumNums: o
                                    }, e)
                                }
                            }
                        }, [t._v(t._s(o + 1) + "\n              ")])]
                    })], 2), t._v(" "), t.content ? n("div", {
                        staticClass: "practice-ctrl"
                    }, [n("div", {
                        staticClass: "tool-bar clearfix"
                    }, [n("span", {
                        staticClass: "num-right"
                    }, [t._v("\n                答对：\n                "), n("span", {}, [t._v(t._s(t.rightIds.length) + "题")])]), t._v(" "), n("span", {
                        staticClass: "num-err"
                    }, [t._v("\n                答错：\n                "), n("span", {}, [t._v(t._s(t.errIds.length) + "题")])]), t._v(" "), t.subjectIds.length > 0 ? n("span", [t._v("\n                自行判断：\n                "), n("span", {
                        staticStyle: {
                            color: "orange"
                        }
                    }, [t._v(t._s(t.subjectIds.length) + "题")])]) : t._e(), t._v(" "), n("span", {
                        staticClass: "right-err"
                    }, [t._v("正确率：" + t._s(t.rightRoErr) + " %")])]), t._v(" "), n("div", {
                        staticClass: "check-box"
                    }, [n("el-button", {
                        staticClass: "check-btn",
                        on: {
                            click: t.checkResult
                        }
                    }, [t._v("查看练习成绩")])], 1)]) : t._e()]), t._v(" "), n("div", {
                        staticClass: "lianxi-right-item",
                        staticStyle: {
                            "margin-top": "16px"
                        }
                    }, [t._m(6), t._v(" "), n("div", {
                        staticClass: "set"
                    }, [t.content && t.content.uid == t.user.uid ? n("p", {
                        staticClass: "mb14 edit-row"
                    }, [n("span", {
                        staticClass: "pull-left"
                    }, [t._v("编辑试题 ")]), t._v(" "), n("span", {
                        staticClass: "pull-right",
                        staticStyle: {
                            cursor: "pointer"
                        },
                        on: {
                            click: t.editQuestion
                        }
                    }, [n("img", {
                        staticClass: "icon",
                        attrs: {
                            src: "https://resource-cdn.kaoshibao.com/pc/practice/icon_edit.png",
                            alt: ""
                        }
                    })])]) : t._e(), t._v(" "), n("p", {
                        staticClass: "mb14 clearfix"
                    }, [n("span", {
                        staticClass: "pull-left"
                    }, [t._v("答对自动下一题 ")]), t._v(" "), n("span", {
                        staticClass: "pull-right"
                    }, [n("el-switch", {
                        on: {
                            change: t.autoCheckedEve
                        },
                        model: {
                            value: t.autoChecked,
                            callback: function (e) {
                                t.autoChecked = e
                            },
                            expression: "autoChecked"
                        }
                    })], 1)]), t._v(" "), n("p", {
                        class: t.showMore ? "mb14 clearfix" : "clearfix"
                    }, [n("span", {
                        staticClass: "pull-left"
                    }, [t._v("背题模式 ")]), t._v(" "), n("span", {
                        staticClass: "pull-right"
                    }, [n("el-switch", {
                        on: {
                            change: t.mainShowAnsChange
                        },
                        model: {
                            value: t.mainShowAns,
                            callback: function (e) {
                                t.mainShowAns = e
                            },
                            expression: "mainShowAns"
                        }
                    })], 1)]), t._v(" "), t.showMore ? n("p", {
                        staticClass: "mb14 clearfix"
                    }, [n("span", {
                        staticClass: "pull-left disorder"
                    }, [t._v("\n                选项乱序\n                ")]), t._v(" "), n("span", {
                        staticClass: "pull-right"
                    }, [n("el-switch", {
                        on: {
                            change: t.sortByOptionsChange
                        },
                        model: {
                            value: t.uiConfig.sortByOptions,
                            callback: function (e) {
                                t.$set(t.uiConfig, "sortByOptions", e)
                            },
                            expression: "uiConfig.sortByOptions"
                        }
                    })], 1)]) : t._e(), t._v(" "), t.showMore ? n("p", {
                        staticClass: "mb14 clearfix"
                    }, [n("span", {
                        staticClass: "pull-left"
                    }, [t._v("开启AI解析 ")]), t._v(" "), n("span", {
                        staticClass: "pull-right"
                    }, [n("el-switch", {
                        on: {
                            change: t.showAiEve
                        },
                        model: {
                            value: t.showAi,
                            callback: function (e) {
                                t.showAi = e
                            },
                            expression: "showAi"
                        }
                    })], 1)]) : t._e(), t._v(" "), t.showMore ? n("div", {
                        staticClass: "mb14",
                        staticStyle: {
                            display: "flex",
                            "align-items": "center",
                            "justify-content": "space-between"
                        }
                    }, [n("div", {
                        staticStyle: {
                            display: "flex",
                            "align-items": "center"
                        }
                    }, [n("span", {
                        staticClass: "pull-left"
                    }, [t._v("随机练习每组题数 ")]), t._v(" "), n("el-popover", {
                        staticStyle: {
                            display: "flex",
                            "align-items": "center"
                        },
                        attrs: {
                            placement: "top",
                            width: "200",
                            trigger: "hover",
                            "popper-class": t.protecteyesModel ? "eye-protection-popover" : ""
                        }
                    }, [t._v("\n                  设置完成后下次练习时生效\n                  "), n("img", {
                        staticStyle: {
                            "margin-left": "4px"
                        },
                        attrs: {
                            slot: "reference",
                            width: "16px",
                            src: "https://resource-cdn.kaoshibao.com/pc/practice/icon_help.png",
                            alt: ""
                        },
                        slot: "reference"
                    })])], 1), t._v(" "), n("span", {
                        staticClass: "pull-right select-num"
                    }, [n("el-select", {
                        staticStyle: {
                            width: "72px",
                            height: "24px"
                        },
                        attrs: {
                            "popper-class": t.protecteyesModel ? "eye-protection-popover" : "",
                            placeholder: "请选择",
                            size: "mini"
                        },
                        on: {
                            change: t.selectNumChange
                        },
                        model: {
                            value: t.selectNum,
                            callback: function (e) {
                                t.selectNum = e
                            },
                            expression: "selectNum"
                        }
                    }, t._l(t.columns_num, function (t) {
                        return n("el-option", {
                            key: t.value,
                            attrs: {
                                label: t.label,
                                value: t.value
                            }
                        })
                    }), 1)], 1)]) : t._e(), t._v(" "), t.showMore ? n("div", {
                        staticClass: "mb14 clearfix",
                        staticStyle: {
                            "text-align": "left"
                        }
                    }, [n("div", {
                        staticClass: "num-row"
                    }, [t._v("\n                连续做对 \n                "), n("div", [n("el-input-number", {
                        attrs: {
                            size: "mini",
                            min: 0,
                            max: 100
                        },
                        on: {
                            change: t.setNumEve
                        },
                        model: {
                            value: t.uiConfig.num,
                            callback: function (e) {
                                t.$set(t.uiConfig, "num", e)
                            },
                            expression: "uiConfig.num"
                        }
                    }), t._v(" 次\n                ")], 1)]), t._v(" "), n("div", {
                        staticClass: "num-desc"
                    }, [t._v("自动移出错题/0代表永不移出")])]) : t._e(), t._v(" "), t.showMore ? n("p", {
                        class: t.showMore ? "mb14 clearfix" : "clearfix"
                    }, [n("span", {
                        staticClass: "pull-left"
                    }, [t._v("护眼模式 ")]), t._v(" "), n("span", {
                        staticClass: "pull-right"
                    }, [n("el-switch", {
                        on: {
                            change: t.protecteyesModelChange
                        },
                        model: {
                            value: t.protecteyesModel,
                            callback: function (e) {
                                t.protecteyesModel = e
                            },
                            expression: "protecteyesModel"
                        }
                    })], 1)]) : t._e(), t._v(" "), t.showMore ? n("div", {
                        staticClass: "mb14 clearfix"
                    }, [n("div", {
                        staticClass: "pull-left",
                        staticStyle: {
                            "margin-top": "6px"
                        }
                    }, [t._v("字体大小 ")]), t._v(" "), n("div", {
                        staticClass: "pull-right"
                    }, [n("div", {
                        staticClass: "fs-size",
                        class: "14" == t.uiConfig.fontSize ? "active" : "",
                        staticStyle: {
                            "font-size": "14px",
                            "line-height": "22px"
                        },
                        on: {
                            click: function (e) {
                                return t.changeSize(14)
                            }
                        }
                    }, [t._v("A较小")]), t._v(" "), n("div", {
                        staticClass: "fs-size",
                        class: "16" == t.uiConfig.fontSize ? "active" : "",
                        staticStyle: {
                            "font-size": "16px",
                            "line-height": "24px"
                        },
                        on: {
                            click: function (e) {
                                return t.changeSize(16)
                            }
                        }
                    }, [t._v("A标准")]), t._v(" "), n("div", {
                        staticClass: "fs-size",
                        class: "22" == t.uiConfig.fontSize ? "active" : "",
                        staticStyle: {
                            "font-size": "20px",
                            "line-height": "28px"
                        },
                        on: {
                            click: function (e) {
                                return t.changeSize(22)
                            }
                        }
                    }, [t._v("较大")])])]) : t._e()]), t._v(" "), n("div", {
                        staticClass: "switch-box",
                        on: {
                            click: function (e) {
                                t.showMore = !t.showMore
                            }
                        }
                    }, [t.showMore ? n("span", [t._v("收起 "), n("i", {
                        staticClass: "iconfont iconxiangshang f12"
                    })]) : t._e(), t._v(" "), t.showMore ? t._e() : n("span", [t._v("展开 "), n("i", {
                        staticClass: "iconfont iconxia f12"
                    })])])]), t._v(" "), t.aiDirectVisible ? n("DeepSeek", {
                        ref: "deepseek",
                        attrs: {
                            question_id: t.content.id,
                            types: t.types
                        },
                        on: {
                            close: function (e) {
                                t.aiDirectVisible = !1
                            },
                            getFreeAnalysisNumber: t.getFreeAnalysisNumber
                        }
                    }) : t._e()], 1)]), t._v(" "), t.empty ? n("div", [n("empty-vue", {
                        attrs: {
                            content: t.emptyCon
                        }
                    })], 1) : t._e()]), t._v(" "), n("el-dialog", {
                        attrs: {
                            title: "试题纠错",
                            visible: t.applyModal,
                            width: "620px",
                            center: "",
                            "close-on-click-modal": !1
                        },
                        on: {
                            "update:visible": function (e) {
                                t.applyModal = e
                            }
                        }
                    }, [t.content && t.content.id ? n("apply-err", {
                        attrs: {
                            id: t.content.id
                        },
                        on: {
                            errChange: function (e) {
                                t.applyModal = !1
                            }
                        }
                    }) : t._e()], 1), t._v(" "), n("el-dialog", {
                        attrs: {
                            visible: t.imgVisible
                        },
                        on: {
                            "update:visible": function (e) {
                                t.imgVisible = e
                            }
                        }
                    }, [n("img", {
                        staticStyle: {
                            width: "100%"
                        },
                        attrs: {
                            src: t.imgVisibleUrl,
                            alt: ""
                        }
                    })]), t._v(" "), n("el-dialog", {
                        staticClass: "custom-dialog topic-edit",
                        staticStyle: {
                            "padding-top": "20px"
                        },
                        attrs: {
                            visible: t.editDialog,
                            center: !0,
                            "close-on-click-modal": !1,
                            width: "1200px"
                        },
                        on: {
                            "update:visible": function (e) {
                                t.editDialog = e
                            },
                            opened: t.openedEditor,
                            closed: t.editClose
                        }
                    }, [n("p", {
                        staticClass: "tit"
                    }, [t._v("试题编辑")]), t._v(" "), n("div", {
                        staticClass: "custom-dialog-body"
                    }, [n("manual", {
                        ref: "manual",
                        attrs: {
                            init: t.currentQuestion,
                            paperid: t.paper.id
                        },
                        on: {
                            editSuccess: t.editSuccessEve
                        }
                    })], 1), t._v(" "), n("p", {
                        staticClass: "btn-box"
                    }, [n("a", {
                        staticClass: "quxiao",
                        attrs: {
                            href: "javascript:;"
                        },
                        on: {
                            click: function (e) {
                                t.editDialog = !1
                            }
                        }
                    }, [t._v("取消")]), t._v(" "), n("a", {
                        staticClass: "theme",
                        staticStyle: {
                            "margin-left": "9px"
                        },
                        attrs: {
                            href: "javascript:;"
                        },
                        on: {
                            click: t.seaveEvent
                        }
                    }, [t._v("保存")])])]), t._v(" "), n("jubao-dialog", {
                        ref: "jubaodialog",
                        attrs: {
                            target_id: t.content ? t.content.id : "",
                            type: "question"
                        }
                    }), t._v(" "), n("el-dialog", {
                        staticClass: "custom-img-dialog",
                        attrs: {
                            visible: t.vipPaperDialog,
                            width: "460px",
                            "show-close": !1,
                            "close-on-click-modal": !1
                        },
                        on: {
                            "update:visible": function (e) {
                                t.vipPaperDialog = e
                            }
                        }
                    }, [n("div", [n("div", {
                        staticStyle: {
                            "text-align": "right"
                        }
                    }, [n("a", {
                        attrs: {
                            href: "javascript:;"
                        },
                        on: {
                            click: function (e) {
                                t.vipPaperDialog = !1
                            }
                        }
                    }, [n("img", {
                        attrs: {
                            width: "24px",
                            src: "https://resource-cdn.kaoshibao.com/mini/dialog/close-circle.png",
                            alt: ""
                        }
                    })])]), t._v(" "), n("a", {
                        attrs: {
                            href: "/price/buy/?view_id=vip_level1"
                        }
                    }, [n("img", {
                        attrs: {
                            width: "360px",
                            src: "https://resource-cdn.kaoshibao.com/mini/dialog/kthy.png",
                            alt: ""
                        }
                    })])])]), t._v(" "), n("el-dialog", {
                        staticClass: "custom-img-dialog",
                        attrs: {
                            visible: t.vipPayPaperDialog,
                            width: "460px",
                            "show-close": !1,
                            "close-on-click-modal": !1
                        },
                        on: {
                            "update:visible": function (e) {
                                t.vipPayPaperDialog = e
                            }
                        }
                    }, [n("div", [n("div", {
                        staticStyle: {
                            "text-align": "right"
                        }
                    }, [n("a", {
                        attrs: {
                            href: "javascript:;"
                        },
                        on: {
                            click: function (e) {
                                t.vipPayPaperDialog = !1
                            }
                        }
                    }, [n("img", {
                        attrs: {
                            width: "24px",
                            src: "https://resource-cdn.kaoshibao.com/mini/dialog/close-circle.png",
                            alt: ""
                        }
                    })])]), t._v(" "), n("a", {
                        attrs: {
                            href: "/price/buy/?view_id=vip_level1"
                        }
                    }, [n("img", {
                        attrs: {
                            width: "360px",
                            src: "https://resource-cdn.kaoshibao.com/mini/kthy2-2.png",
                            alt: ""
                        }
                    })])])]), t._v(" "), n("pay-kaoshi-dialog", {
                        ref: "payKaoshiDialogRef",
                        attrs: {
                            kid: t.kid
                        }
                    }), t._v(" "), n("el-dialog", {
                        attrs: {
                            "custom-class": "custom-dialog",
                            visible: t.pointQuesDialog,
                            center: !0,
                            "close-on-click-modal": !1,
                            width: "550px"
                        },
                        on: {
                            "update:visible": function (e) {
                                t.pointQuesDialog = e
                            }
                        }
                    }, [n("p", {
                        staticClass: "tit ell"
                    }, [t._v("相关试题")]), t._v(" "), n("div", {
                        staticClass: "qusetion-list"
                    }, [n("div", {
                        staticClass: "question-list-com"
                    }, t._l(t.related_question, function (e, o) {
                        return n("div", {
                            key: e.id
                        }, [n("div", {
                            staticClass: "question-title",
                            style: {
                                fontFamily: e.special_font
                            }
                        }, [n("span", {
                            staticClass: "qtype"
                        }, [t._v(t._s(t.types[e.qtype]))]), t._v(" "), n("div", {
                            staticClass: "q-content",
                            domProps: {
                                innerHTML: t._s(e.question)
                            }
                        })]), t._v(" "), "9" != e.qtype && "17" != e.qtype && "18" != e.qtype ? n("div", {
                            staticStyle: {
                                clear: "both"
                            }
                        }, t._l(e.options, function (e, o) {
                            return n("div", {
                                staticClass: "o-row"
                            }, [n("span", {
                                staticClass: "o-key"
                            }, [t._v(t._s(e.Key) + ".")]), t._v(" "), n("div", {
                                domProps: {
                                    innerHTML: t._s(e.Value)
                                }
                            })])
                        }), 0) : t._e(), t._v(" "), "0" == e.show_answer && "9" != e.qtype && "17" != e.qtype && "18" != e.qtype ? n("div", {
                            staticClass: "c-btn",
                            on: {
                                click: function (e) {
                                    return t.checkAnsEve(o)
                                }
                            }
                        }, [t._v("\n            查看答案\n          ")]) : t._e(), t._v(" "), "9" != e.qtype && "17" != e.qtype && "18" != e.qtype && "1" == e.show_answer ? n("div", {
                            staticClass: "ans-div"
                        }, [n("div", {
                            staticClass: "ans-top"
                        }, [n("div", {
                            staticClass: "ans-top-left"
                        }, [n("span", {
                            staticClass: "a-t"
                        }, [t._v("答案")]), t._v(" "), 1 == e.qtype || 2 == e.qtype || 3 == e.qtype || 15 == e.qtype || 14 == e.qtype || "16" == e.qtype || "19" == e.qtype || "26" == e.qtype || "27" == e.qtype || "28" == e.qtype ? n("span", {
                            staticStyle: {
                                "font-weight": "500"
                            }
                        }, [t._v(t._s(e.answer))]) : t._e()]), t._v(" "), 4 == e.qtype || 5 == e.qtype || 12 == e.qtype || 11 == e.qtype || 21 == e.qtype || 22 == e.qtype || 23 == e.qtype || "10" == e.qtype ? n("div", {
                            staticStyle: {
                                width: "100%",
                                "margin-top": "16px"
                            }
                        }, [n("span", {
                            domProps: {
                                innerHTML: t._s(e.answer)
                            }
                        })]) : t._e()])]) : t._e()])
                    }), 0)])]), t._v(" "), n("el-dialog", {
                        staticClass: "custom-dialog",
                        attrs: {
                            visible: t.selectedQuesDialog,
                            center: !0,
                            "close-on-click-modal": !1,
                            width: "550px"
                        },
                        on: {
                            "update:visible": function (e) {
                                t.selectedQuesDialog = e
                            }
                        }
                    }, [n("p", {
                        staticClass: "tit ell"
                    }, [t._v("举一反三")]), t._v(" "), n("div", [n("div", {
                        staticClass: "question-list-com"
                    }, t._l(t.related_question, function (e, o) {
                        return n("div", {
                            key: e.id
                        }, [n("div", {
                            staticClass: "question-title",
                            style: {
                                fontFamily: e.special_font
                            }
                        }, [n("span", {
                            staticClass: "qtype"
                        }, [t._v(t._s(t.types[e.qtype]))]), t._v(" "), n("div", {
                            staticClass: "q-content",
                            domProps: {
                                innerHTML: t._s(e.question)
                            }
                        })]), t._v(" "), "9" != e.qtype && "17" != e.qtype && "18" != e.qtype ? n("div", {
                            staticStyle: {
                                clear: "both"
                            }
                        }, t._l(e.options, function (e, o) {
                            return n("div", {
                                staticClass: "o-row"
                            }, [n("span", {
                                staticClass: "o-key"
                            }, [t._v(t._s(e.Key) + ".")]), t._v(" "), n("div", {
                                domProps: {
                                    innerHTML: t._s(e.Value)
                                }
                            })])
                        }), 0) : t._e(), t._v(" "), "0" == e.show_answer && "9" != e.qtype && "17" != e.qtype && "18" != e.qtype ? n("div", {
                            staticClass: "c-btn",
                            on: {
                                click: function (e) {
                                    return t.checkAnsEve(o)
                                }
                            }
                        }, [t._v("\n            查看答案\n          ")]) : t._e(), t._v(" "), "9" != e.qtype && "17" != e.qtype && "18" != e.qtype && "1" == e.show_answer ? n("div", {
                            staticClass: "ans-div"
                        }, [n("div", {
                            staticClass: "ans-top"
                        }, [n("div", {
                            staticClass: "ans-top-left"
                        }, [n("span", {
                            staticClass: "a-t"
                        }, [t._v("答案")]), t._v(" "), 1 == e.qtype || 2 == e.qtype || 3 == e.qtype || 15 == e.qtype || 14 == e.qtype || "16" == e.qtype || "19" == e.qtype || "26" == e.qtype || "27" == e.qtype || "28" == e.qtype ? n("span", {
                            staticStyle: {
                                "font-weight": "500"
                            }
                        }, [t._v(t._s(e.answer))]) : t._e()]), t._v(" "), 4 == e.qtype || 5 == e.qtype || 12 == e.qtype || 11 == e.qtype || 21 == e.qtype || 22 == e.qtype || 23 == e.qtype || "10" == e.qtype ? n("div", {
                            staticStyle: {
                                width: "100%",
                                "margin-top": "16px"
                            }
                        }, [n("span", {
                            domProps: {
                                innerHTML: t._s(e.answer)
                            }
                        })]) : t._e()])]) : t._e()])
                    }), 0)])]), t._v(" "), n("el-dialog", {
                        staticClass: "note-dialog",
                        attrs: {
                            visible: t.noteModal,
                            "close-on-click-modal": !1,
                            width: "640px",
                            title: "添加笔记"
                        },
                        on: {
                            "update:visible": function (e) {
                                t.noteModal = e
                            }
                        }
                    }, [n("div", {
                        staticClass: "note-content"
                    }, [n("div", {
                        staticClass: "note-textarea"
                    }, [n("el-input", {
                        attrs: {
                            type: "textarea",
                            autosize: {
                                minRows: "10"
                            },
                            placeholder: "请输入笔记内容"
                        },
                        model: {
                            value: t.noteContent,
                            callback: function (e) {
                                t.noteContent = e
                            },
                            expression: "noteContent"
                        }
                    })], 1)]), t._v(" "), n("span", {
                        staticClass: "dialog-footer",
                        attrs: {
                            slot: "footer"
                        },
                        slot: "footer"
                    }, [n("el-button", {
                        attrs: {
                            size: "small"
                        },
                        on: {
                            click: function (e) {
                                t.noteModal = !1
                            }
                        }
                    }, [t._v("取消")]), t._v(" "), n("el-button", {
                        attrs: {
                            size: "small",
                            type: "primary"
                        },
                        on: {
                            click: t.addNote
                        }
                    }, [t._v("保存")])], 1)])], 1)
                }, [function () {
                    var t = this.$createElement
                        , e = this._self._c || t;
                    return e("span", [e("a", {
                        attrs: {
                            href: "/"
                        }
                    }, [this._v("首页")])])
                }
                    , function () {
                        var t = this.$createElement
                            , e = this._self._c || t;
                        return e("span", [e("a", {
                            attrs: {
                                href: "/sctk/"
                            }
                        }, [this._v("我的题库")])])
                    }
                    , function () {
                        var t = this.$createElement
                            , e = this._self._c || t;
                        return e("b", {
                            staticClass: "p-tit d-row",
                            staticStyle: {
                                "margin-bottom": "0"
                            }
                        }, [e("span", [this._v("知")]), this._v(" "), e("span", [this._v("识")]), this._v(" "), e("span", [this._v("点")])])
                    }
                    , function () {
                        var t = this.$createElement
                            , e = this._self._c || t;
                        return e("span", {
                            staticClass: "p-tit d-row"
                        }, [e("span", [this._v("举")]), this._v(" "), e("span", [this._v("一")]), this._v(" "), e("span", [this._v("反")]), this._v(" "), e("span", [this._v("三")])])
                    }
                    , function () {
                        var t = this.$createElement
                            , e = this._self._c || t;
                        return e("span", {
                            staticClass: "p-tit d-row"
                        }, [e("span", [this._v("难")]), this._v(" "), e("span", [this._v("度")])])
                    }
                    , function () {
                        var t = this.$createElement
                            , e = this._self._c || t;
                        return e("span", {
                            staticClass: "p-tit d-row"
                        }, [e("span", [this._v("来")]), this._v(" "), e("span", [this._v("源")])])
                    }
                    , function () {
                        var t = this.$createElement
                            , e = this._self._c || t;
                        return e("p", {
                            staticClass: "lianxi-cart-tit"
                        }, [e("b", [this._v("设置")])])
                    }
                ], !1, null, null, null));
        e.default = E.exports
    },
    726: function (t, e, n) {
        "use strict";
        function o(t) {
            return function (t) {
                if (Array.isArray(t)) {
                    for (var i = 0, e = new Array(t.length); i < t.length; i++)
                        e[i] = t[i];
                    return e
                }
            }(t) || function (t) {
                if (Symbol.iterator in Object(t) || "[object Arguments]" === Object.prototype.toString.call(t))
                    return Array.from(t)
            }(t) || function () {
                throw new TypeError("Invalid attempt to spread non-iterable instance")
            }()
        }
        n.d(e, "a", function () {
            return o
        })
    },
    755: function (t, e, n) { },
    762: function (t, e, n) { },
    764: function (t, e, n) { },
    785: function (t, e, n) {
        "use strict";
        function o(a, b) {
            return Math.random() > .5 ? -1 : 1
        }
        n.d(e, "a", function () {
            return o
        })
    },
    802: function (t, e, n) {
        "use strict";
        var o = n(755);
        n.n(o).a
    },
    808: function (t, e, n) {
        "use strict";
        n(39),
            n(146),
            n(2);
        var o = n(69)
            , r = {
                name: "ApplyErr",
                data: function () {
                    return {
                        dialogImageUrl: "",
                        dialogVisible: !1,
                        fileList: [],
                        images: [],
                        headers: {},
                        disBtn: !1,
                        uid: "0",
                        ruleForm: {
                            category: [],
                            desc: "",
                            contact: "",
                            way: "1"
                        },
                        rules: {
                            category: [{
                                required: !0,
                                message: "请选择问题类型",
                                trigger: "blur"
                            }],
                            desc: [{
                                required: !0,
                                message: "请输入具体描述",
                                trigger: "blur"
                            }]
                        },
                        params: {}
                    }
                },
                props: ["id"],
                created: function () { },
                mounted: function () {
                    var t = this;
                    this.$axios.$post("/questions/detail", {
                        id: this.id
                    }).then(function (e) {
                        console.log(e),
                            t.uid = e.data.question.uid
                    })
                },
                computed: {},
                methods: {
                    beforeAvatarUpload: function (t) {
                        var e = this;
                        return new Promise(function (n, o) {
                            if (!(t.size / 1024 / 1024 < 10))
                                return alert("图片大小超过限制"),
                                    o(),
                                    !1;
                            e.$axios.$post("/files/getUploadToken", {
                                event: "feedback"
                            }).then(function (t) {
                                e.params.token = t.data.upload_token,
                                    e.params.key = t.data.key,
                                    n()
                            })
                        }
                        )
                    },
                    sendEve: function () {
                        var t = this;
                        this.$prompt("请输入私信内容", "联系作者", {
                            inputType: "textarea",
                            confirmButtonText: "发送",
                            cancelButtonText: "取消",
                            center: !0
                        }).then(function (e) {
                            var n = e.value;
                            t.$axios.$post("/user/dialog/send", {
                                receiver: t.uid,
                                msg: n
                            }).then(function (e) {
                                t.$message({
                                    type: "success",
                                    message: "发送成功，可在个人中心消息中查看!"
                                })
                            })
                        }).catch(function () { })
                    },
                    applyError: function (t) {
                        var e = this;
                        this.$refs[t].validate(function (t) {
                            if (t) {
                                var data = {
                                    category: JSON.stringify(e.ruleForm.category),
                                    id: e.id,
                                    desc: e.ruleForm.desc
                                };
                                e.disBtn = !0,
                                    e.$axios.$post("/report/question", data).then(function (t) {
                                        e.disBtn = !1,
                                            e.ruleForm = {
                                                category: [],
                                                desc: "",
                                                contact: "",
                                                way: "1"
                                            },
                                            Object(o.Message)({
                                                type: "success",
                                                message: "谢谢您的反馈",
                                                duration: 1500
                                            }),
                                            e.$emit("errChange")
                                    })
                            }
                        })
                    },
                    quxiao: function () {
                        this.$emit("errChange")
                    },
                    handleRemove: function (t, e) {
                        var n = this;
                        this.images = [],
                            e.forEach(function (t) {
                                n.images.push(t.response.data.path)
                            })
                    },
                    handleExceed: function () {
                        alert("最多只能上传4张")
                    },
                    changeSucc: function (t, e, n) {
                        var o = this;
                        this.images = [],
                            n.forEach(function (t) {
                                o.images.push("https://up.zaixiankaoshi.com/" + t.response.key)
                            })
                    }
                }
            }
            , c = (n(802),
                n(9))
            , component = Object(c.a)(r, function () {
                var t = this
                    , e = t.$createElement
                    , n = t._self._c || e;
                return n("div", {
                    staticClass: "category"
                }, [n("el-form", {
                    ref: "ruleForm",
                    attrs: {
                        model: t.ruleForm,
                        rules: t.rules
                    }
                }, [n("p", {
                    staticClass: "title"
                }, [n("span", {
                    staticClass: "red"
                }, [t._v("*")]), t._v(" \n      报错类型\n      "), n("span", [t._v("(可多选)")])]), t._v(" "), n("el-form-item", {
                    attrs: {
                        prop: "category",
                        "inline-message": !0
                    }
                }, [n("el-checkbox-group", {
                    model: {
                        value: t.ruleForm.category,
                        callback: function (e) {
                            t.$set(t.ruleForm, "category", e)
                        },
                        expression: "ruleForm.category"
                    }
                }, [n("el-checkbox", {
                    attrs: {
                        label: "题干有误"
                    }
                }, [t._v("题干有误")]), t._v(" "), n("el-checkbox", {
                    attrs: {
                        label: "答案有误"
                    }
                }, [t._v("答案有误")]), t._v(" "), n("el-checkbox", {
                    attrs: {
                        label: "解析有误"
                    }
                }, [t._v("解析有误")]), t._v(" "), n("el-checkbox", {
                    attrs: {
                        label: "其他"
                    }
                }, [t._v("其他")])], 1)], 1), t._v(" "), n("p", {
                    staticClass: "title"
                }, [n("span", {
                    staticClass: "red"
                }, [t._v("*")]), t._v(" 具体描述")]), t._v(" "), n("el-form-item", {
                    attrs: {
                        prop: "desc"
                    }
                }, [n("el-input", {
                    attrs: {
                        type: "textarea",
                        rows: 4,
                        resize: "false",
                        placeholder: "欢迎您指出具体错误所在，并提供对应的正确描述。您的耐心指点，是我们的动力",
                        "custom-class": "'apply-err'",
                        modal: "true"
                    },
                    model: {
                        value: t.ruleForm.desc,
                        callback: function (e) {
                            t.$set(t.ruleForm, "desc", e)
                        },
                        expression: "ruleForm.desc"
                    }
                })], 1)], 1), t._v(" "), n("span", {
                    staticClass: "dialog-footer",
                    attrs: {
                        slot: "footer"
                    },
                    slot: "footer"
                }, [n("el-button", {
                    on: {
                        click: t.quxiao
                    }
                }, [t._v("取 消")]), t._v(" "), n("el-button", {
                    attrs: {
                        disabled: t.disBtn,
                        type: "primary"
                    },
                    on: {
                        click: function (e) {
                            return t.applyError("ruleForm")
                        }
                    }
                }, [t._v("确 定")])], 1), t._v(" "), n("el-dialog", {
                    attrs: {
                        visible: t.dialogVisible
                    },
                    on: {
                        "update:visible": function (e) {
                            t.dialogVisible = e
                        }
                    }
                }, [n("img", {
                    attrs: {
                        width: "100%",
                        src: t.dialogImageUrl,
                        alt: ""
                    }
                })])], 1)
            }, [], !1, null, null, null);
        e.a = component.exports
    },
    818: function (t, e, n) {
        "use strict";
        var o = n(762);
        n.n(o).a
    },
    823: function (t, e, n) {
        "use strict";
        var o = n(764);
        n.n(o).a
    },
    853: function (t, e, n) {
        "use strict";
        n(90),
            n(39);
        var o = {
            props: {
                type: String,
                target_id: String
            },
            data: function () {
                return {
                    jubaoModal: !1,
                    list: [],
                    activeId: "",
                    secondId: "",
                    currnetReason: {},
                    secondReason: {},
                    clist: [],
                    jubaoDesc: "",
                    loading: !1
                }
            },
            methods: {
                initData: function () {
                    var t = this;
                    this.loading = !0,
                        this.$axios.$post("/report/reasonConfig", {
                            type: this.type
                        }).then(function (e) {
                            t.list = e.data
                        }).finally(function () {
                            t.loading = !1
                        })
                },
                changeId: function (t) {
                    this.activeId = t;
                    var e = this.list.find(function (e) {
                        return e.id == t
                    });
                    this.clist = e.children,
                        this.currnetReason = e,
                        this.secondReason = {}
                },
                changeSecondId: function (t) {
                    this.secondId = t,
                        this.secondReason = this.clist.find(function (e) {
                            return e.id == t
                        })
                },
                changeVisible: function (t) {
                    this.jubaoModal = t,
                        this.activeId = "",
                        this.secondId = "",
                        this.currnetReason = {},
                        this.secondReason = {}
                },
                jubaoSubmit: function () {
                    var t = this;
                    if (this.currnetReason.title) {
                        if ("1600" == this.activeId || "2500" == this.activeId) {
                            if (!this.jubaoDesc)
                                return void alert("请描述你遇到的问题")
                        } else if (!this.secondReason.title)
                            return void alert("请选择详细原因");
                        var e = [];
                        this.currnetReason.title && e.push(this.currnetReason.title),
                            this.secondReason.title && e.push(this.secondReason.title),
                            this.loading = !0,
                            this.$axios.$post("/report/illegalNew", {
                                target_id: this.target_id,
                                desc: this.jubaoDesc || "",
                                reason: e.join("/"),
                                type: this.type
                            }).then(function (e) {
                                t.jubaoModal = !1,
                                    t.loading = !1,
                                    t.$message({
                                        type: "success",
                                        message: "举报信息已提交"
                                    })
                            })
                    } else
                        alert("请选择投诉原因")
                }
            }
        }
            , r = (n(818),
                n(9))
            , component = Object(r.a)(o, function () {
                var t = this
                    , e = t.$createElement
                    , n = t._self._c || e;
                return n("div", [n("el-dialog", {
                    staticClass: "custom-dialog",
                    attrs: {
                        visible: t.jubaoModal,
                        center: !0,
                        "close-on-click-modal": !1,
                        width: "480px"
                    },
                    on: {
                        "update:visible": function (e) {
                            t.jubaoModal = e
                        }
                    }
                }, [n("p", {
                    staticClass: "tit ell"
                }, [t._v("举报违规内容")]), t._v(" "), n("div", {
                    directives: [{
                        name: "loading",
                        rawName: "v-loading",
                        value: t.loading,
                        expression: "loading"
                    }],
                    staticClass: "custom-dialog-container"
                }, [n("div", {
                    staticClass: "jubao-box"
                }, [n("div", {
                    staticClass: "tit"
                }, [n("span", {
                    staticStyle: {
                        color: "#fa3e3e"
                    }
                }, [t._v("*")]), t._v("\n          投诉原因\n        ")]), t._v(" "), n("div", {
                    staticClass: "row"
                }, t._l(t.list, function (e) {
                    return n("div", {
                        key: e.id,
                        staticClass: "row-item",
                        class: t.activeId == e.id ? "active" : "",
                        on: {
                            click: function (n) {
                                return t.changeId(e.id)
                            }
                        }
                    }, [t._v("\n            " + t._s(e.title) + "\n          ")])
                }), 0)]), t._v(" "), t.activeId ? n("div", {
                    staticClass: "jubao-box",
                    staticStyle: {
                        "margin-top": "24px"
                    }
                }, [n("div", {
                    staticClass: "tit"
                }, [n("span", {
                    staticStyle: {
                        color: "#fa3e3e"
                    }
                }, [t._v("*")]), t._v("\n          详细原因\n        ")]), t._v(" "), n("div", {
                    staticClass: "row"
                }, t._l(t.clist, function (e) {
                    return n("div", {
                        key: e.id,
                        staticClass: "row-item",
                        class: t.secondId == e.id ? "active" : "",
                        on: {
                            click: function (n) {
                                return t.changeSecondId(e.id)
                            }
                        }
                    }, [t._v("\n            " + t._s(e.title) + "\n          ")])
                }), 0), t._v(" "), "1600" == t.activeId || "2500" == t.activeId ? n("div", [n("el-input", {
                    attrs: {
                        type: "textarea",
                        placeholder: "请描述你遇到的问题",
                        autosize: {
                            minRows: 4
                        }
                    },
                    model: {
                        value: t.jubaoDesc,
                        callback: function (e) {
                            t.jubaoDesc = e
                        },
                        expression: "jubaoDesc"
                    }
                })], 1) : t._e()]) : t._e()]), t._v(" "), n("span", {
                    staticClass: "btn-box",
                    attrs: {
                        slot: "footer"
                    },
                    slot: "footer"
                }, [n("el-button", {
                    staticClass: "quxiao",
                    attrs: {
                        size: "small"
                    },
                    on: {
                        click: function (e) {
                            return t.changeVisible(!1)
                        }
                    }
                }, [t._v(" 取消 ")]), t._v(" "), n("el-button", {
                    staticClass: "theme",
                    attrs: {
                        size: "small",
                        type: "primary"
                    },
                    on: {
                        click: t.jubaoSubmit
                    }
                }, [t._v(" 提交 ")])], 1)])], 1)
            }, [], !1, null, "136ef5f6", null);
        e.a = component.exports
    },
    854: function (t, e, n) {
        "use strict";
        var o = n(33)
            , r = n(46)
            , c = {
                props: ["kid"],
                data: function () {
                    return {
                        payNewKaoshiDailog: !1
                    }
                },
                mounted: function () { },
                computed: Object(o.a)({}, Object(r.d)(["pay_kaoshi_dialog_img"])),
                methods: {
                    buy: function () {
                        this.$router.push("/jishi/buy/buy_kaoshi/?kid=".concat(this.kid))
                    },
                    changeVisible: function (t) {
                        this.payNewKaoshiDailog = t
                    }
                }
            }
            , l = (n(823),
                n(9))
            , component = Object(l.a)(c, function () {
                var t = this
                    , e = t.$createElement
                    , n = t._self._c || e;
                return n("el-dialog", {
                    staticClass: "new-kaoshi-dialog",
                    attrs: {
                        visible: t.payNewKaoshiDailog,
                        width: "480px",
                        "show-close": !1,
                        "close-on-click-modal": !1
                    },
                    on: {
                        "update:visible": function (e) {
                            t.payNewKaoshiDailog = e
                        }
                    }
                }, [n("div", [n("div", {
                    staticStyle: {
                        "text-align": "right"
                    }
                }, [n("a", {
                    attrs: {
                        href: "javascript:;"
                    },
                    on: {
                        click: function (e) {
                            t.payNewKaoshiDailog = !1
                        }
                    }
                }, [n("img", {
                    attrs: {
                        width: "24px",
                        src: "https://resource-cdn.kaoshibao.com/mini/dialog/close-circle.png",
                        alt: ""
                    }
                })])]), t._v(" "), n("a", {
                    attrs: {
                        href: "javascript:;"
                    },
                    on: {
                        click: t.buy
                    }
                }, [n("img", {
                    attrs: {
                        width: "480px",
                        src: t.pay_kaoshi_dialog_img,
                        alt: ""
                    }
                })])])])
            }, [], !1, null, "4148572a", null);
        e.a = component.exports
    },
    939: function (t, e, n) { },
    940: function (t, e, n) { },
    941: function (t, e, n) { }
}]);
