let bars = document.querySelector(".bars");

// 페이지 스크롤 시 header를 줄이는 코드
window.addEventListener("scroll", () => {
    let header = document.querySelector(".header");
    let bottomBar = document.querySelector(".header .main-wrap .bottom-bar");

    // 100
    if (window.pageYOffset > 100) {
        document.querySelector(".header .main-wrap .top-bar").style.display = "none";
        document.querySelector(".header-tab-menu").style.top = "-150px";
        header.style.height = "50px";
        openMenu = 0;
    } else {
        document.querySelector(".header .main-wrap .top-bar").style.display = "flex";
        document.querySelector(".header").style.height = "130px";
    }
})
let openMenu = 0;
// tab 메뉴를 on/off하는 코드
function menuOpen() {
    let headerTabMenu = document.querySelector(".header-tab-menu");
    // 닫혀있다면 열어주고 (top을 130px로)
    if (openMenu == 0) {
        headerTabMenu.style.top = "130px";
        openMenu = 1;
    }
    // 그렇지 않다면 (top을 -120px로)
    else if (openMenu == 1) {
        headerTabMenu.style.top = "-120px";
        openMenu = 0;
    }
}