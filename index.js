function scuberGreetingForFeet(feet) {
  //if less is less than 400 feet
  if (feet <= 400) {
    return "This one is on me!";
  }
  if (feet > 2500) {
    return "No can do.";
  } else if (feet > 2000) {
    return "I will gladly take your thirty bucks.";
  }
}

function ternaryCheckCity(city) {
  // Uses ternary conditionals to check the city
  return city === "NYC" ? "Ok, sounds good." : "No go.";
}

function switchOnCharmFromTip(tip) {
  // Uses switch conditionals to return tips
  switch (tip) {
    case "generous":
      return "Thank you so much.";
    case "not as generous":
      return "Thank you.";
    default:
      return "Bye.";
      break;
  }
}
