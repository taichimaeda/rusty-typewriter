(function() {
    "use strict";

    const getCachedTheme = () => {
      const theme = document.body.getAttribute("color-scheme");
      const cachedTheme = localStorage.getItem("color-scheme");
      if (cachedTheme) {
        return cachedTheme;
      } else if (theme !== "dark" || theme !== "light") {
        let preferDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
        return preferDark ? "dark" : "light";
      } else {
        return theme
      }
    };

    const initTheme = (state) => {
      document.documentElement.setAttribute("color-scheme", state === "light" ? "dark" : "light");
    };

    const toggleTheme = () => {
      const state = getCachedTheme();
        localStorage.setItem("color-scheme", state === "light" ? "dark" : "light");
        initTheme(state === "light" ? "dark" : "light");
    };

    window.addEventListener("DOMContentLoaded", () => {
      initTheme(getCachedTheme());
      requestAnimationFrame(() => document.body.classList.remove("notransition"))

      const switcher = document.getElementById("theme-switcher");
      switcher.addEventListener("click", () => toggleTheme());
    });
})();
