// Get all tags by which projects can be filtered
const filterOptions = document.getElementsByClassName("project-filter-option");
let tags = [];
for (let option of filterOptions) {
  let tag = option.id;
  tags.push(tag);
  option.addEventListener("click", function(){ filter(tag); }, false);
}

// For each tag, get the corresponding project divs
let projects = new Set();
let projectDict = {};
for (let tag of tags) {
  let projectsTagged = Array.from(document.getElementsByClassName(tag));
  projectDict[tag] = new Set(projectsTagged);
  for (let project of projectsTagged) {
    projects.add(project);
  }
}

function filter(tag) {
  if (tag === "tag-all") {
    show(projects);
  }
  else {
    let filteredProjects = projectDict[tag];
    let toShow = new Set(filteredProjects);
    let toHide = difference(projects, toShow);
    hide(toHide);
    show(toShow);
  }
}

function show(projects) {
  for (let project of projects) {
    project.classList.remove("hidden")
  }
}

function hide(projects) {
  for (let project of projects) {
    project.classList.add("hidden")
  }
}

function difference(setA, setB) {
  let _difference = new Set(setA);
  for (let elem of setB) {
    _difference.delete(elem);
  }
  return _difference;
}
