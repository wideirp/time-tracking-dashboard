const navElements = document.querySelectorAll(".user__nav li");
const workActivity = document.querySelector(".work").parentNode;
const playActivity = document.querySelector(".play").parentNode;
const studyActivity = document.querySelector(".study").parentNode;
const exerciseActivity = document.querySelector(".exercise").parentNode;
const socialActivity = document.querySelector(".social").parentNode;
const selfCareActivity = document.querySelector(".self-care").parentNode;

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
};

const setActivityTime = (el, times) => {
  const currentTimeEl = el.querySelector(".activity__info--time");
  const lastTimeEl = el.querySelector(".activity__info--last-week");
  const type = el.querySelector(".activity__info--type").innerHTML;
  currentTimeEl.innerHTML = times.current + "hrs";
  lastTimeEl.innerHTML = "Last " + type + " - " + times.previous + "hrs";
};

const setActivityData = (timeframe) => {
  fetch("src/data/data.json")
    .then((res) => {
      if (res.ok) {
        return res.json();
      }
    })
    .then((data) => {
      // console.log(data);
      // set each activity
      data.forEach((act) => {
        switch (act.title) {
          case "Work":
            setActivityTime(workActivity, act.timeframes[timeframe]);
            break;
          case "Play":
            setActivityTime(playActivity, act.timeframes[timeframe]);
            break;
          case "Study":
            setActivityTime(studyActivity, act.timeframes[timeframe]);
            break;
          case "Exercise":
            setActivityTime(exerciseActivity, act.timeframes[timeframe]);
            break;
          case "Social":
            setActivityTime(socialActivity, act.timeframes[timeframe]);
            break;
          case "Self Care":
            setActivityTime(selfCareActivity, act.timeframes[timeframe]);
            break;
          default:
            break;
        }
      });
    });
};

navElements.forEach((li) => {
  li.addEventListener("click", (e) => {
    e.preventDefault();
    if (e.currentTarget.dataset.state !== "active") {
      setActiveStates(e.currentTarget);
      setActivityData(e.currentTarget.dataset.timeframe);
    }
  });
});
