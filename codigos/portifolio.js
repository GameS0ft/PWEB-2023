function desmarcar_checkbox(){
    // referencia o checkbox toggle
    const checkbox = document.getElementById('toggle');
        checkbox.checked = false;
}

function scrollTrigger(selector, options = {}){
  let els = document.querySelectorAll(selector)
  els = Array.from(els)
  els.forEach(el => {
    addObserver(el,options)
  })
}
function addObserver(el, options){
    let observer = new IntersectionObserver((entries, observer) => { 
      entries.forEach(entry => {
      if(entry.isIntersecting) {
        entry.target.classList.add('active')
      }
      else {
        entry.target.classList.remove('active')
      }
    })
  }, options)
  observer.observe(el)
}

function addTriggers(){
scrollTrigger('.scroll-text', {
    rootMargin: '-21% 21%'
})
scrollTrigger('.scroll-media', {
    rootMargin: '-10% 0%'
})
}

window.addEventListener("load", () => {
  addTriggers()
})

