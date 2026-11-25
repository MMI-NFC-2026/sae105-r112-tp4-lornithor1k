const accordeon = document.querySelector(".accordeon");
const summaries = accordeon.querySelectorAll("summary");

summaries.forEach((sum) => {
  sum.addEventListener("click", () => {
    const clique = sum.parentElement;

    accordeon.querySelectorAll("details").forEach((det) => {
      if (det !== clique) {
        det.open = false;
      }
    });
  });
});