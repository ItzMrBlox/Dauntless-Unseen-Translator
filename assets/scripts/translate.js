function TranslatetoUnseen(){
        
    var Translation = document.getElementById("Unseen").value; 

   
       var UnseenLanguage = ["ㅏ", "Б", "б", "C", "𑀘", "Δ", "Э", "Ф", "Γ", "ㅎ", "И", "𑀛", "ㅈ", "ㅋ", "Λ", "ㅁ", "N", "𑀦", "Ω", "Π", "Q", "ㄹ", "Σ", "T", "U", "𑀯", "З"]
       var EnglisLanguage = ["A", "B", "B", "C", "C", "D", "E", "F", "G", "H", "I", "J", "J", "K", "L", "M", "N", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "Z"]


    Translation = Translation.replace(/ㅏ/g, "A"); // if ㅏ then A

    Translation = Translation.replace(/Б/g, "B"); // if Б then B
        Translation = Translation.replace(/б/g, "B"); // if б then B

    Translation = Translation.replace(/C/g, "C"); // if C then C
        Translation = Translation.replace(/𑀘/g, "C"); // if 𑀘 then C

    Translation = Translation.replace(/Δ/g, "D"); // if Δ then D

    Translation = Translation.replace(/Э/g, "E"); // if Э then E

    Translation = Translation.replace(/Ф/g, "F"); // if Ф then F

    Translation = Translation.replace(/Γ/g, "G"); // if Γ then G

    Translation = Translation.replace(/ㅎ/g, "H"); // if ㅎ then H

    Translation = Translation.replace(/И/g, "I"); // if И then I

    Translation = Translation.replace(/𑀛/g, "J"); // if 𑀛 then J
        Translation = Translation.replace(/ㅈ/g, "J"); // if ㅈ then J

    Translation = Translation.replace(/ㅋ/g, "K"); // if ㅋ then K

    Translation = Translation.replace(/Λ/g, "L"); // if Λ then L

    Translation = Translation.replace(/ㅁ/g, "M"); // if ㅁ then M

    Translation = Translation.replace(/N/g, "N"); // if N then N
        Translation = Translation.replace(/𑀦/g, "N"); // if 𑀦 then N

    Translation = Translation.replace(/Ω/g, "O"); // if Ω then O
    
    Translation = Translation.replace(/Π/g, "P"); // if Π then P

    Translation = Translation.replace(/Q/g, "Q"); // if Q then Q

    Translation = Translation.replace(/ㄹ/g, "R"); // if ㄹ then R

    Translation = Translation.replace(/Σ/g, "S"); // if Σ then S

    Translation = Translation.replace(/T/g, "T"); // if T then T

    Translation = Translation.replace(/U/g, "U"); // if U then U

    Translation = Translation.replace(/V/g, "V"); // if V then V
        Translation = Translation.replace(/𑀯/g, "V"); // if 𑀯 then V

    Translation = Translation.replace(/W/g, "W"); // if W then W

    Translation = Translation.replace(/X/g, "X"); // if X then X

    Translation = Translation.replace(/Y/g, "Y"); // if Y then Y

    Translation = Translation.replace(/З/g, "Z"); // if Z then Z

    Translation = Translation.replace(/\s\s+/g, ' '); // when to many spaces
    Translation = Translation.toLowerCase();


document.getElementById("English").value = Translation.length === 0? "" : Translation[0].toUpperCase() + Translation.slice(1);
}



function TranslatetoEnglish(){
        
        var TranslationEng = document.getElementById("English").value.toLowerCase(); 
     
        TranslationEng = TranslationEng.replace(/a/g, "ㅏ"); // if a then ㅏ
    
        TranslationEng = TranslationEng.replace(/b/g, "Б"); // if b then Б
    
        TranslationEng = TranslationEng.replace(/c/g, "C"); // if c then Б
    
        TranslationEng = TranslationEng.replace(/d/g, "Δ"); // if d then Δ
    
        TranslationEng = TranslationEng.replace(/e/g, "Э"); // if e then Э
    
        TranslationEng = TranslationEng.replace(/f/g, "Ф"); // if f then Ф
    
        TranslationEng = TranslationEng.replace(/g/g, "Γ"); // if g then Γ
    
        TranslationEng = TranslationEng.replace(/h/g, "ㅎ"); // if h then ㅎ
    
        TranslationEng = TranslationEng.replace(/i/g, "И"); // if i then И
    
        TranslationEng = TranslationEng.replace(/j/g, "ㅈ"); // if j then ㅈ
    
        TranslationEng = TranslationEng.replace(/k/g, "ㅋ"); // if k then ㅋ
    
        TranslationEng = TranslationEng.replace(/l/g, "Λ"); // if l then Λ 
    
        TranslationEng = TranslationEng.replace(/m/g, "ㅁ"); // if m then ㅁ
    
        TranslationEng = TranslationEng.replace(/n/g, "N"); // if n then N
    
        TranslationEng = TranslationEng.replace(/o/g, "Ω"); // if o then Ω
    
        TranslationEng = TranslationEng.replace(/p/g, "Π"); // if p then Π
    
        TranslationEng = TranslationEng.replace(/q/g, "Q"); // if q then Q
    
        TranslationEng = TranslationEng.replace(/r/g, "ㄹ"); // if r then ㄹ
    
        TranslationEng = TranslationEng.replace(/s/g, "Σ"); // if s then Σ
    
        TranslationEng = TranslationEng.replace(/t/g, "T"); // if t then T
    
        TranslationEng = TranslationEng.replace(/u/g, "U"); // if u then U
    
        TranslationEng = TranslationEng.replace(/v/g, "V"); // if v then V
    
        TranslationEng = TranslationEng.replace(/w/g, "W"); // if w then W
    
        TranslationEng = TranslationEng.replace(/x/g, "X"); // if x then X
    
        TranslationEng = TranslationEng.replace(/y/g, "Y"); // if y then Y
    
        TranslationEng = TranslationEng.replace(/z/g, "З"); // if z then З
    
    
        TranslationEng = TranslationEng.replace(/\s\s+/g, ' '); // Adds 1 more space
    
    document.getElementById("Unseen").value = TranslationEng;
    }