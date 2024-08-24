function checkVowels() {
  let text = document.getElementById("inputText").value;
  let vowelCount = 0;
  text = text.toLowerCase();
  let len = text.length;
  for (let i = 0; i < len; i++) {
    let char = text.charAt(i);
    if (isVowel(char)) {
      vowelCount++;
    }
  }
  const result = document.getElementById("result");
  result.textContent = "Total Vowels: " + vowelCount;
}

function isVowel(x) {
  const vowel = ["a", "e", "i", "o", "u"];
  return vowel.includes(x);
}
