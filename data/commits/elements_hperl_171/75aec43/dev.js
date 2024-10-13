
document.querySelectorAll(`*[data-disable-on-click]`).forEach((p) => {
  p.addEventListener("click", function () {
    p.disabled = true
  })
})