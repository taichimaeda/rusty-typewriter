(function() {
    "use strict";

    const getCachedTheme = () => {
      const theme = document.body.getAttribute("color-scheme");
      const cachedTheme = localStorage.getItem("color-scheme");
      if (cachedTheme) {
        return cachedTheme;
      } else if (theme !== "dark" && theme !== "light") {
        let preferDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
        return preferDark ? "dark" : "light";
      } else {
        return theme
      }
    };

    const toggle = (state) => state === "light" ? "dark" : "light";
    const initTheme = (state) => {
      document.documentElement.setAttribute("color-scheme", state);
    };

    const toggleTheme = () => {
      const state = getCachedTheme();
        localStorage.setItem("color-scheme", toggle(state));
        initTheme(toggle(state));
    };

    window.addEventListener("DOMContentLoaded", () => {
      initTheme(getCachedTheme());
      requestAnimationFrame(() => document.body.classList.remove("notransition"))

      const switcher = document.getElementById("theme-switcher");
      switcher.addEventListener("click", e => {
        e.preventDefault();
        toggleTheme()
      });
    });
})();
