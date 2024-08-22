const navElements = document.querySelectorAll(".user__nav li");

const setActiveStates = (el) => {
  const children = el.parentNode.children;
  for (let i = 0; i < children.length; i++) {
    // console.log(children[i]);
    if (children[i] === el) {
      children[i].dataset.state = "active";
    } else {
      children[i].dataset.state = "";
    }
  }
  // el.parentNode.children.forEach((liEl) => {
  // for (const liEl in el.parentNode.children) {
  //   if (liEl === el) {
  //     liEl.dataset.state = "active";
  //   } else {
  //     liEl.dataset.state = "";
  //   }
  // }
};

navElements.forEach((li) => {
  li.addEventListener("click", (e) => {
    e.preventDefault();
    if (e.currentTarget.dataset.state !== "active") {
      setActiveStates(e.currentTarget);
    }
  });
});
