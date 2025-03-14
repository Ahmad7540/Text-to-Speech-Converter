let speech = new SpeechSynthesisUtterance();
let voices = [];
let speechOption = document.querySelector("select");

window.speechSynthesis.onvoiceschanged = () => {
  voices = window.speechSynthesis.getVoices();
  speech.voice = voices[0];
  voices.forEach((voice, i) => {
    speechOption.add(new Option(voice.name, i));
  });
};

document.querySelector("button").addEventListener("click", () => {
  speech.text = document.querySelector("textarea").value;
  window.speechSynthesis.speak(speech);
});

speechOption.addEventListener("change", () => {
  speech.voice = voices[speechOption.value];
});
