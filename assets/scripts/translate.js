const UnseenLanguage = ["ㅏ", "Б", "б", "C", "𑀘", "Δ", "Э", "Ф", "Γ", "ㅎ", "И", "𑀛", "ㅈ", "ㅋ", "Λ", "ㅁ", "N", "𑀦", "Ω", "Π", "Q", "ㄹ", "Σ", "T", "U", "𑀯", "З"]
const EnglisLanguage = ["A", "B", "B", "C", "C", "D", "E", "F", "G", "H", "I", "J", "J", "K", "L", "M", "N", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "Z"]

function TranslateFromUnseen() {

    var Translation = document.getElementById("Unseen").value;

    var sentence = Translation.split('');
    for (let i = 0; i < sentence.length; i++) {
        var charNum = UnseenLanguage.indexOf(sentence[i]);
        sentence[i] = (charNum == -1) ? sentence[i] : EnglisLanguage[charNum]
    }
    
    var end = sentence.join('').toLowerCase().replace(/\s\s+/g, ' ');

    document.getElementById('English').value = end;

}



function TranslateFromEnglish() {

    var TranslationEng = document.getElementById("English").value.toUpperCase();

    var sentence = TranslationEng.split('');
    console.log(sentence)
    for (let i = 0; i < sentence.length; i++) {
        var charNum = EnglisLanguage.indexOf(sentence[i]);
        sentence[i] = (charNum == -1) ? sentence[i] : UnseenLanguage[charNum]
    }
    
    var end = sentence.join('');

    document.getElementById('Unseen').value = end;
}