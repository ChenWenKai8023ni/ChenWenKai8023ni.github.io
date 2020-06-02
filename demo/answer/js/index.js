var tin = [{
        id: "0",
        title: "1+1=",
        lis: "<li>1. 1</li><li>1. 2</li><li>1. 3</li><li>1. 4</li>",
        detail: "1. 2"
    },
    {
        id: "1",
        title: "1+2=",
        lis: "<li>1. 1</li><li>1. 2</li><li>1. 3</li>",
        detail: "1. 3"
    },
    {
        id: "2",
        title: "1+3=",
        lis: "<li>1. 1</li><li>1. 2</li><li>1. 3</li><li>1. 4</li>",
        detail: "1. 4"
    },
    {
        id: "3",
        title: "1+1=",
        lis: "<li>1. 1</li><li>1. 2</li><li>1. 3</li><li>1. 4</li>",
        detail: "1. 2"
    },
    {
        id: "4",
        title: "1+2=",
        lis: "<li>1. 1</li><li>1. 2</li><li>1. 3</li><li>1. 4</li>",
        detail: "1. 3"
    },
    {
        id: "5",
        title: "1+0=",
        lis: "<li>1. 1</li><li>1. 3</li><li>1. 4</li>",
        detail: "1. 1"
    },
    {
        id: "6",
        title: "1+2=",
        lis: "<li>1. 1</li><li>1. 2</li><li>1. 3</li><li>1. 4</li>",
        detail: "1. 3"
    },
    {
        id: "7",
        title: "1+1=",
        lis: "<li>1. 1</li><li>1. 2</li><li>1. 3</li><li>1. 4</li>",
        detail: "1. 2"
    },
    {
        id: "8",
        title: "1+3=",
        lis: "<li>1. 1</li><li>1. 2</li><li>1. 3</li><li>1. 4</li>",
        detail: "1. 4"
    },
    {
        id: "9",
        title: "1+1=",
        lis: "<li>1. 1</li><li>1. 2</li><li>1. 3</li><li>1. 4</li>",
        detail: "1. 2"
    }
];

//第一个页面上下浮动的东西
function fu_s() {
    $("#fu").animate({
        bottom: "4.05rem"
    }, 1000, function () {
        $("#fu").animate({
            bottom: "3.85rem"
        }, 1000, function () {
            if ($(".no_1").css("display") == "block") {
                fu_s();
            }
        })
    })
}
fu_s();
var jihuei = 3
//点击按钮开始答题
$("#btn").click(function () {
    if (jihuei >= 1) {
        jihuei--;
        $(this).animate({
            height: "1.84rem"
        }, 100, function () {
            $(this).attr("src", "./img/answer_btn1.png");
            $(this).animate({
                height: "2.04rem"
            }, 100, function () {
                $(".no_1").css("display", "none");
                $(".no_2").css("display", "block");
                no_two()
            })
        })
        $(".no_1_p1>span").text(jihuei);
    }
})
var tinmu;
var cuo = true;
var dian = true;
var a, title, lis, detail, shi, s, tag, p1;
// 第二层页面
var arr = [];
function no_two() {
    function ant() {
        return 0.5 - Math.random();
    }
    
     for (var i = 0; i < 10; i++) {
            arr[i] = i;
        }
        arr.sort(ant);
        console.log(arr);
   
    tag = true;
    tinmu = 1;
    s = 0;
    p1 = 0;
    as();
    shij();
}

//倒计时
var jishi
function shij() {
    shi = 10;
    $(".no_2_p2").text(shi);
   jishi = setInterval(() => {
       
        shi--;
        $(".no_2_p2").text(shi);
        if (shi == 0) {
            
            clearInterval(jishi)
            tag = false;
            $("#ul>li").each(function (i) {
                if ($("#ul>li").eq(i).text() == detail) {
                    $("<img>", {
                        class: "img1"
                    }).appendTo($(this));
                    $(".img1").attr("src", "./img/true.png");
                    $("#ul>li").eq(i).css({
                        "border-color": "#53be69",
                        "color": "#53be69"
                    })
                }
            })
            setTimeout(() => {
             
                if (cuo) {
                    cuo = false;
                    $(".no_4").css("display", "block");
                    p1 += 10;
                    $(".no_2_p1>span").text(p1);
    
                }else{
                    if (tinmu <= 10) {
                        as();
    
                        shij();
                    } else {
                        if (p1 < 100) {
                            $(".no_3").css("display", "block");
                        } else {
                            $(".no_5").css("display", "block");
                        }
                    }
                }
            }, 2000);

        }

    }, 1000);
}

//题目更换
function as() {
   
    title = tin[arr[s]].title;
    lis = tin[arr[s]].lis;
    detail = tin[arr[s]].detail;
    //题目序号
    $(".no_2_p3").text(tinmu);
    tinmu++;
    //题目问题
    $("#tin").text(title);
    //题目答案
    $("#ul").html(lis);
    s++;
    tag = true;

    //点击答案
    $("#ul>li").click(function () {

        clearInterval(jishi);
        a = $(this).index();
        //只能点击一次
        if (tag) {
            tag = false;

            //点击为正确答案时
            if ($(this).text() == detail) {
                p1 += 10;
                $(".no_2_p1>span").text(p1);
                $("<img>", {
                    class: "img1"
                }).appendTo($(this));
                $(".img1").attr("src", "./img/true.png");
                $(this).css({
                    "border-color": "#53be69",
                    "color": "#53be69"
                })

                setTimeout(() => {
                    if (tinmu <= 10) {
                        as();
                        tag = true;
                        shij()
                    } else {
                        if (p1 < 100) {
                            $(".no_3").css("display", "block");
                        } else {
                            $(".no_5").css("display", "block");
                        }
                    }
                }, 2000);
            } else {
                //点击为错误答案时

                if (cuo) {
                    cuo = false;
                    $(".no_4").css("display", "block");
                    p1 += 10;
                    $(".no_2_p1>span").text(p1);

                } else {
                    chuo();
                }
            }
        }
    })
}

//选择错误答案时发生的事件
function chuo() {
    $("<img>", {
        class: "img2"
    }).appendTo($("#ul>li").eq(a));
    $(".img2").attr("src", "./img/false.png");
    $("#ul>li").eq(a).css({
        "border-color": "#ea6182",
        "color": "#ea6182"
    })
    $("#ul>li").each(function (i) {
        if ($("#ul>li").eq(i).text() == detail) {
            $("<img>", {
                class: "img1"
            }).appendTo($(this));
            $(".img1").attr("src", "./img/true.png");
            $("#ul>li").eq(i).css({
                "border-color": "#53be69",
                "color": "#53be69"
            })
        }
    })
    setTimeout(() => {
        if (tinmu <= 10) {
            as();
            tag = true;
            shij()
        } else {
            if (p1 < 100) {
                $(".no_3").css("display", "block");
            } else {
                $(".no_5").css("display", "block");
            }
        }
    }, 2000);
}

//点击继续答题
$("#no_4_p5").click(function () {
    chuo();
    $(".no_4").css("display", "none");
});

//点击重新开始
$(".no_3_dd_p3").click(function () {
    $(".no_1").css("display", "block");
    $("#btn").attr("src", "./img/answer_btn.png");
    $(".no_2,.no_3").css("display", "none");
    cuo = true;
    fu_s();
})