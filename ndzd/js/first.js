var first_img = document.querySelectorAll(".first_img");


function tou() {
    setTimeout(() => {
        first_img[3].style.opacity = "1";
        first_img[0].style.opacity = "0";
        first_img[1].style.opacity = "0";
        first_img[2].style.opacity = "0";
    }, 0);
    setTimeout(() => {
        first_img[2].style.opacity = "0.8";
        first_img[0].style.opacity = "0";
        first_img[1].style.opacity = "0";
        first_img[3].style.opacity = "0";
    }, 600);
    setTimeout(() => {
        first_img[1].style.opacity = "0.6";
        first_img[0].style.opacity = "0";
        first_img[3].style.opacity = "0";
        first_img[2].style.opacity = "0";
    }, 1200);
    setTimeout(() => {
        first_img[0].style.opacity = "0.4";
        first_img[3].style.opacity = "0";
        first_img[1].style.opacity = "0";
        first_img[2].style.opacity = "0";
    }, 1800);
    setTimeout(() => {
        tou()
    }, 2400);
};
tou();
