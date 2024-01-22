let acc = document.querySelectorAll(".accordion__block-accordion__btn");

acc.forEach(el => {
  el.addEventListener("click", function (){
      this.classList.toggle("active__accordion");
      this.classList.toggle(".accordion__block-accordion__btn");
      let panel = this.nextElementSibling;
      if (panel.style.maxHeight) {
          panel.style.maxHeight = null;
      } else {
          panel.style.maxHeight = panel.scrollHeight + "px";
      }
  })
})

