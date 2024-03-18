function shout(string) {
return string.toUpperCase();
}
function whisper(string) {
return string.toLowerCase();
}
function logShout(string) {
console.log(string.toUpperCase());
return string.toUpperCase();
}
function logWhisper(string) {
    console.log(string.toLowerCase());
    return string.toLowerCase();
}
function sayHiToHeadphonedRoommate(string) {
    if (string.toLowerCase() === "let's have dinner together!") {
      return "I would love to!";
    } else if (string === string.toLowerCase()) {
      return "I can't hear you!";
    } else {
      return "YES INDEED!";
    }
  }