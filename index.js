function buildHistogram(magazine) {
  return magazine.reduce(function(hash, letter) {
    if (hash[letter]) {
      hash[letter] = hash[letter] + 1;
    } else {
      hash[letter] = 1;
    }

    return hash;
  }, {});
}

function canBuildNote(magazineArray, note) {
  let magazine = buildHistogram(magazineArray);
  let noLettersMissing = true;

  for (let i = 0; i < note.length; i++) {
    const letter = note[i];
    if(magazine[letter] && magazine[letter] > 0) {
      magazine[letter] = magazine[letter] - 1;
    } else {
      noLettersMissing = false;

      break;
    }
  };

  return noLettersMissing;
};
