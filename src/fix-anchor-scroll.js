if (typeof window !== "undefined") {
  let currentUrl = window.location.href;
  let userScrolled = false;

  window.document.addEventListener("wheel", () => {
    userScrolled = true;
  });

  const scrollToAnchor = () => {
    // Don't scroll if the user has already used their mouse wheel
    if (window.location.hash && !userScrolled) {
      const anchorTarget = window.document.getElementById(
        window.location.hash.replace("#", "")
      );
      if (anchorTarget) {
        const navBarElement =
          document.getElementsByClassName("navbar--fixed-top")[0];
        const anchorPositionDiff =
          anchorTarget.getBoundingClientRect().top - navBarElement.offsetHeight;
        // If the diff is significant, smooth scroll to anchor
        if (Math.abs(anchorPositionDiff) > 20) {
          window.scrollBy({
            top: anchorPositionDiff,
            left: 0,
            behavior: "smooth",
          });
        }
      }
    }
  };

  // Wait for page to load, then scroll to anchor link
  window.addEventListener("load", scrollToAnchor);

  // Check position every time we move between pages
  document.body.addEventListener(
    "click",
    () => {
      requestAnimationFrame(() => {
        if (window.location.href !== currentUrl) {
          userScrolled = false;
          currentUrl = window.location.href;
          setTimeout(scrollToAnchor, 500);
        }
      });
    },
    true
  );
}
