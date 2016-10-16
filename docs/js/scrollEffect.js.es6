class ScrollEffect {
  runEffect() {
    const mainNav = document.querySelector("#mainNav");
    let DOWNMODE = true;

    const MY_STATIC  = {
      SCROLL_TOP_CHANGE : 100
    }

    //Event binding
    window.addEventListener("scroll", (evt) => {
      const currentScrollY = window.pageYOffset;
      if(currentScrollY > MY_STATIC.SCROLL_TOP_CHANGE) {
        if(DOWNMODE) return;
        mainNav.classList.add("affix");
        DOWNMODE = true;
      } else {
        mainNav.classList.remove("affix");
        DOWNMODE = false;;
      }
    });
  }
}

export default ScrollEffect;