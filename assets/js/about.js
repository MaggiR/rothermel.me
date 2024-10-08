function trigger(collapseID) {
  let elemID = "eng-collapse-" + collapseID;
  let toExpand = document.getElementById(elemID);

  if (!toExpand.classList.contains("expand")) {
    toExpand.classList.add("expand");
    toExpand.style.height = toExpand.scrollHeight + "px";
    setTimeout(function(){ toExpand.style.height = "auto"; }, 300);

    // Remove toggle
    let toggleID = "eng-toggle-" + collapseID;
    let toggle = document.getElementById(toggleID);
    toggle.style.display = "none";
  }
}

// Prepare tooltips
var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
})
