
window.addEventListener("load", function() {
new Vivus(
  "base",
  {
    type: "sync",
    duration: 250,
    forceRender: false
  },
  function (obj) {
    obj.el.classList.add("done");

    const animation = document.getElementById("animation");

    // 2秒待つ
    setTimeout(() => {
      // フェード用 transition を JS で設定
      animation.style.transition = "opacity 1.2s ease";
      animation.style.opacity = "1";

      // フェード開始
      requestAnimationFrame(() => {
        animation.style.opacity = "0";
      });

      // フェード終了後に削除
      animation.addEventListener(
        "transitionend",
        () => {
          animation.remove();
        },
        { once: true }
      );

    }, 3000); // ← ここで2秒ウェイト
  }
);
});