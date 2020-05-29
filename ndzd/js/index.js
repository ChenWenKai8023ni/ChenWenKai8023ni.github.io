window.onload = function () {
    var gz = document.querySelector(".gz1");
    var yuan1 = document.querySelector(".yuan1");
    var yuan2 = document.querySelector(".yuan2");
    var yuan3 = document.querySelector(".yuan3");
    var yuan4 = document.querySelector(".yuan4");
    var img8 = document.querySelector(".img8");
    var img9 = document.querySelector(".img9");
    var img10 = document.querySelector(".img10");
    var img11 = document.querySelector(".img11");
    var secondIMG = document.querySelectorAll(".second>img");
    var thirdIMG = document.querySelectorAll(".third>img");
    var forthIMG = document.querySelectorAll(".forth>img");
    var fifthMIMG = document.querySelectorAll(".fifth>img");
    var first_in = document.querySelector(".first_in");
    var first_p1 = document.querySelector(".first_p1");
    var first_p2 = document.querySelector(".first_p2");
    var yingyue = document.querySelector(".yingyue");
    var topImg = document.querySelector(".topIMG");
    var second = document.querySelector(".second");
    var third = document.querySelector(".third");
    var forth = document.querySelector(".forth");
    var fifth = document.querySelector(".fifth");
    var fifth_6 = document.querySelector(".fifth-6");
    var container = document.querySelector(".container");
    var word = document.querySelector(".word");
    var xiaqu = document.querySelectorAll(".xia");
    var dingdian1 = 0;
    var dingdian2 = 0;
    var dingdian3 = 0;
    var dingdian4 = 0;
    function dom(a) {
        return document.querySelector(a);
    }
    dom(".first").style.opacity = "0";
    setTimeout(() => {
        dom(".first").style.opacity = "0.2";
    }, 400);
    setTimeout(() => {
        dom(".first").style.opacity = "0.4";
    }, 600);
    setTimeout(() => {
        dom(".first").style.opacity = "0.6";
    }, 800);
    setTimeout(() => {
        dom(".first").style.opacity = "0.8";
    }, 1000);
    setTimeout(() => {
        dom(".first").style.opacity = "1";
    }, 1200);
    dom(".first_p3").onclick = function () {
        setTimeout(() => {
            yingyue.innerHTML = "<audio src='./mp3/2.mp3' autoplay='autoplay'></audio>";
        }, 1300);
        first_in.style.display = "none";
        second.style.display = "block";
        third.style.display = "block";
        forth.style.display = "block";
        fifth.style.display = "block";
        function xunhuan(a) {
            for (var i = 0; i < a.length; i++) {
                a[i].style.opacity = "0";
            }
        }
        xunhuan(secondIMG);
        xunhuan(thirdIMG);
        xunhuan(forthIMG);
        xunhuan(fifthMIMG);
        yuan1.style.opacity = "0";
        yuan2.style.opacity = "0";
        yuan3.style.opacity = "0";
        yuan4.style.opacity = "0";
        function chen() {
            setTimeout(function () {
                img8.src = "./qt/z18-a.png";
            }, 0);
            setTimeout(function () {
                img8.src = "./qt/z18-b.png";
            }, 150);
            setTimeout(function () {
                img8.src = "./qt/z18-c.png";
            }, 300);
            setTimeout(() => {
                chen()
            }, 450);
        }
        chen();
        function img(a) {
            $(a).animate({
                    left: "+=0rem",
                    bottom: "-=4rem"
                }, function () {
                    a.style.opacity = "1";
                }),
                $(a).animate({
                    left: "+=0rem",
                    bottom: "+=4rem"
                }, 1000, "linear", function () {})
        }
        img(img8);
        img(img9);
        img(img10);
        img(img11);

        function shang(a) {
            $(a).animate({
                left: "+=0",
                bottom: "-=0.5rem",
            }, 1000)
            $(a).animate({
                left: "+=0",
                bottom: "+=2.34rem",
            }, 1500)
        }

        function xia(a) {
            $(a).animate({
                left: "+=0",
                bottom: "-=30rem",
            }, 5000)
        }

        function ding(a, b) {
            b[a].style.opacity = "1"
            $(b[a]).animate({
                left: "+=0",
                bottom: "-=4rem"
            }, 0, function () {
                b[a].style.display = "block"
            })
            $(b[a]).animate({
                left: "+=0",
                bottom: "+=4.5rem"
            }, 800)
            $(b[a]).animate({
                left: "+=0rem",
                bottom: "-=0.5rem"
            }, 800)
        }

        function yanchi1(a, b) {
            setTimeout(function () {
                ding(a, secondIMG)
            }, b);
        }

        function yanchi2(a, b) {
            setTimeout(function () {
                ding(a, thirdIMG)
            }, b);
        }

        function yanchi3(a, b) {
            setTimeout(function () {
                ding(a, forthIMG)
            }, b);
        }

        function yanchi4(a, b) {
            setTimeout(function () {
                ding(a, fifthMIMG)
            }, b);
        }
        yanchi1(0, 1400);
        yanchi1(1, 1800);
        yanchi1(2, 2200);
        yanchi1(3, 2600);
        yanchi1(4, 3000);
        yanchi1(5, 3400);

        setTimeout(function () {
            ding(6, secondIMG);
            setTimeout(() => {
                first_p1.style.display = "none"
                first_p2.style.display = "none"
                yuan1.style.opacity = "1";
                yuan1.style.animation = " big 1.5s linear infinite";
                word.style.display = "block";
            }, 1600);
        }, 3800);


        var flag = true;

        yuan1.onclick = function () {
            yingyue.innerHTML = "<audio src='./mp3/4.mp3'autoplay='autoplay' loop='loop'></audio>";

            $(function () {
                move();
                yuan1.style.display = "none";
                $(gz).animate({
                        left: "1.75rem",
                        bottom: "1rem",
                    }, 1599, "linear",
                )
                  setTimeout(() => {
                            flag = false;
                        }, 1500);
                $(gz).animate({
                        left: "2.68rem",
                        bottom: "1.58rem",
                    }, 1199, "linear");
                    setTimeout(() => {
                        flag = true;
                    }, 2700);
                $(gz).animate({
                        left: "0.55rem",
                        bottom: "2.8rem",
                    }, 2799, "linear");
                    setTimeout(() => {
                        flag = false;
                    }, 5600);
                $(gz).animate({
                        left: "1.5rem",
                        bottom: "3.98rem",
                    }, 1599, "linear",
                    function () {
                        flag = true;
                        move = function () {};
                        yingyue.innerHTML = "";
                        var zuobiao1 = window.getComputedStyle(gz, null).getPropertyValue("left");
                        var zuobiao2 = window.getComputedStyle(gz, null).getPropertyValue("bottom");
                        dom(".img7").onclick = function () {
                            gz.style.left = zuobiao1;
                            gz.style.bottom = zuobiao2;
                        }
                        console.log(zuobiao1, zuobiao2)
                        setTimeout(() => {
                            yingyue.innerHTML = "<audio src='./mp3/2.mp3' autoplay='autoplay'></audio>";
                        }, 1000);
                        yanchi2(6, 500);
                        setTimeout(() => {
                            dom(".third-7").style.animation = "piao 1s linear infinite alternate";
                        }, 3000);
                        yanchi2(0, 1000);
                        yanchi2(1, 1500);
                        yanchi2(2, 2000);
                        yanchi2(3, 2500);
                        yanchi2(4, 3000);
                        yanchi2(5, 500);
                        setTimeout(() => {
                            dom(".word").style.display = "none";
                            dom(".word2").style.display = "block";
                            yuan2.style.opacity = "1";
                            yuan2.style.animation = " big 1.5s linear infinite"
                        }, 4500);
                    });
            });

            function move() {
                if (flag) {
                    var a = 1;
                    var b = setInterval(function () {
                        if (a > 5) {
                            a = 1;
                        }
                        gz.src = "./gz/gz" + a + ".png";
                        a++;
                        if (flag == false) {
                            clearInterval(b);
                            move();
                        }
                    }, 100);
                } else {
                    var a = 1;
                    var b = setInterval(function () {
                        if (a > 5) {
                            a = 1;
                        }
                        gz.src = "./gz/gz1" + a + ".png";
                        a++;
                        if (flag == true) {
                            clearInterval(b);
                            move();
                        }
                    }, 100);
                }
            }
            var flag1 = true;
            yuan2.onclick = function () {
                yuan2.style.display = "none";
                yingyue.innerHTML = "<audio src='./mp3/4.mp3' autoplay='autoplay' loop='loop'></audio>";
                move1();
                $(function () {

                    $(gz).animate({
                            left: "1rem",
                            bottom: "4.2rem",
                        }, 799, "linear",
                        function () {
                            flag1 = false;
                        })
                    $(gz).animate({
                        left: "4rem",
                        bottom: "5.9rem",
                    }, 3199, "linear", function () {
                        yingyue.innerHTML = "";
                        setTimeout(() => {
                            yingyue.innerHTML = "<audio src='./mp3/2.mp3' autoplay='autoplay'></audio>";
                        }, 1000);
                        yanchi3(0, 800);
                        yanchi3(1, 800);
                        setTimeout(() => {
                            dom(".forth-2").style.animation = "piao2 1s linear infinite alternate";
                        }, 3000);
                        yanchi3(2, 1200);
                        yanchi3(3, 1600);
                        yanchi3(4, 2000);
                        yanchi3(5, 2400);
                        setTimeout(function () {
                            ding(6, forthIMG);
                            setTimeout(() => {
                                dom(".word2").style.display = "none";
                                dom(".word3").style.display = "block";
                                yuan3.style.opacity = "1";
                                yuan3.style.animation = " big 1.5s linear infinite"
                            }, 1800);
                        }, 2800);
                        flag1 = true;
                        move1 = function () {};

                        var zuobiao3 = window.getComputedStyle(gz, null).getPropertyValue("left");
                        var zuobiao4 = window.getComputedStyle(gz, null).getPropertyValue("bottom");
                        dom(".third-5").onclick = function () {
                            gz.style.left = zuobiao3;
                            gz.style.bottom = zuobiao4;
                        }
                        console.log(zuobiao3, zuobiao4)
                         dingdian3 = zuobiao3
                         dingdian4 = zuobiao4;
                        
                    });
                })

                function move1() {
                    if (flag1) {
                        var a = 1;
                        var b = setInterval(function () {
                            if (a > 5) {
                                a = 1;
                            }
                            gz.src = "./gz/gz" + a + ".png";
                            a++;
                            if (flag1 == false) {
                                clearInterval(b);
                                move1();
                            }
                        }, 100);
                    } else {
                        var a = 1;
                        var b = setInterval(function () {
                            if (a > 5) {
                                a = 1;
                            }
                            gz.src = "./gz/gz1" + a + ".png";
                            a++;
                            if (flag1 == true) {
                                clearInterval(b);
                                move1();
                            }
                        }, 100);
                    }
                }
                var flag2 = true;
                yuan3.onclick = function () {
                    if (gz.style.left != dingdian3 && gz.style.bottom != dingdian4) {
                        gz.style.left = dingdian3;
                        gz.style.bottom = dingdian4;
                    }
                    yuan3.style.display = "none";
                    move2();
                    $(function () {
                        yingyue.innerHTML = "<audio src='./mp3/4.mp3' autoplay='autoplay' loop='loop'></audio>";
                        $(gz).animate({
                            left: "4.9rem",
                            bottom: "4.8rem"
                        }, 1599, "linear");
                        setTimeout(() => {
                            flag2 = false;   
                        }, 1500);
                        $(gz).animate({
                            left: "4rem",
                            bottom: "4.2rem",
                        }, 1599, "linear");
                        setTimeout(() => {
                            flag2 = true;   
                        }, 3000);
                        $(gz).animate({
                            left: "5.4rem",
                            bottom: "3.4rem",
                        }, 1599, "linear", function () {
                            flag2 = false;
                            move2 = function () {};
                            yingyue.innerHTML = "";
                            setTimeout(() => {
                                yingyue.innerHTML = "<audio src='./mp3/2.mp3' autoplay='autoplay'></audio>";
                            }, 1000);

                            yanchi4(0, 1400);
                            yanchi4(1, 1400);
                            setTimeout(() => {
                                dom(".fifth-2").style.animation = "piao3 1s linear infinite alternate";
                            }, 3000);
                            yanchi4(2, 1800);
                            yanchi4(3, 2200);
                            yanchi4(4, 2600);
                            setTimeout(function () {
                                ding(5, fifthMIMG);
                                setTimeout(() => {
                                    dom(".word3").style.display = "none";
                                    dom(".word4").style.display = "block";
                                    yuan4.style.opacity = "1";
                                    yuan4.style.animation = " big 1.5s linear infinite"
                                }, 1800);
                            }, 3000);

                            var zuobiao5 = window.getComputedStyle(gz, null).getPropertyValue("left");
                            var zuobiao6 = window.getComputedStyle(gz, null).getPropertyValue("bottom");
                            dom(".forth-7").onclick = function () {
                                gz.style.left = zuobiao5;
                                gz.style.bottom = zuobiao6;
                            }
                            console.log(zuobiao5, zuobiao6)
                            dingdian1 = zuobiao5;
                            dingdian2 = zuobiao6;
                        });
                    });

                    function move2() {
                        if (flag2) {
                            var a = 1;
                            var b = setInterval(function () {
                                if (a > 5) {
                                    a = 1;
                                }
                                gz.src = "./gz/gz2" + a + ".png";
                                a++;
                                if (flag2 == false) {
                                    clearInterval(b);
                                    move2();
                                }
                            }, 100);
                        } else {
                            var a = 1;
                            var b = setInterval(function () {
                                if (a > 5) {
                                    a = 1;
                                }
                                gz.src = "./gz/gz3" + a + ".png";
                                a++;
                                if (flag2 == true) {
                                    clearInterval(b);
                                    move2();
                                }
                            }, 100);
                        }
                    }
                    var flag3 = true;
                    yuan4.onclick = function () {
                        if (gz.style.left != dingdian1 && gz.style.bottom != dingdian2) {
                            gz.style.left = dingdian1;
                            gz.style.bottom = dingdian2;
                        }
                        move3()
                        yuan4.style.display = "none";
                        $(function () {
                            yingyue.innerHTML = "<audio src='./mp3/4.mp3' autoplay='autoplay' loop='loop'></audio>";
                            $(gz).animate({
                                left: "4rem",
                                bottom: "2.25rem",
                            }, 2000);
                            setTimeout(() => {
                                flag3 = false;   
                            }, 2000);
                            $(gz).animate({
                                left: "3.2rem",
                                bottom: "3rem",
                            }, 1199, "linear", function () {
                                flag3 = true;
                                dom(".third-7").style.animation = "";
                                dom(".forth-2").style.animation = "";
                                dom(".fifth-2").style.animation = "";
                                dom(".word4").style.display = "none";
                                move3 = function () {}
                                topImg.style.display = "none";
                                yingyue.innerHTML = "<audio src='./mp3/3.mp3' autoplay='autoplay' ></audio>";  
                                container.style.backgroundPosition = "top";
                                shang(gz);
                                shang(fifth_6);
                                dom(".main")
                                setTimeout(() => {
                                    xia(xiaqu);
                                }, 1000);
                                setTimeout(() => {
                                    dom(".main").style.display = "block";
                                    dom(".main_qiu").style.animation = "left 1.5s";
                                    dom(".main_qiu3").style.animation = "right 1.5s";
                                }, 4000);
                            });
                        })

                        function move3() {
                            if (flag3) {
                                var a = 1;
                                var b = setInterval(function () {
                                    if (a > 5) {
                                        a = 1;
                                    }
                                    gz.src = "./gz/gz3" + a + ".png";
                                    a++;
                                    if (flag3 == false) {
                                        clearInterval(b);
                                        move3();
                                    }
                                }, 100);
                            } else {
                                var a = 1;
                                var b = setInterval(function () {
                                    if (a > 5) {
                                        a = 1;
                                    }
                                    gz.src = "./gz/gz" + a + ".png";
                                    a++;
                                    if (flag3 == true) {
                                        clearInterval(b);
                                        move3();
                                    }
                                }, 100);
                            }
                        }
                    }
                }
            }
        }
    }
}