export const getCleanTime = (time) => {
  time = time.split(":");
  let clean = [];
  clean.push(time.shift());
  clean.push(":");
  clean.push(time.shift());

  clean = clean.join("");
  return clean;
};

export const determineGreeting = (time) => {
  console.log("determine greeting");
  let timeComp = time.split("T")[1];
  timeComp = timeComp.split(":")[0];
  console.log(timeComp);
  let greeting = "";
  let imgStatus = timeComp > 5 && timeComp < 17 ? "morning" : "evening";

  if (timeComp < 5) {
    greeting = "Go back to sleep 💤";
  } else if (timeComp < 12) {
    greeting = "Good morning ";
  } else if (timeComp < 15) {
    greeting = "Good afternoon";
  } else if (timeComp < 22) {
    greeting = "Good evening";
  } else {
    greeting = "Go to bed! 🥱";
  }

  return { greeting, imgStatus };
};
