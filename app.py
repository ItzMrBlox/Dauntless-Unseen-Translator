def translate(phrase):
    translation = ""
    for letter in phrase:

        if letter in "ㅏ": #if ㅏ then A
            translation = translation + "A" 

        elif letter in "Бб": #if Бб then B
            translation = translation + "B"

        elif letter in "C𑀘": #if C𑀘 then C
            translation = translation + "C"

        elif letter in "Δ": #if Δ then D
            translation = translation + "D"

        elif letter in "Э": #if Э then E
            translation = translation + "E"

        elif letter in "Ф": #if Ф then F
            translation = translation + "F"

        elif letter in "Γ": #if Γ then G
            translation = translation + "G"

        elif letter in "ㅎ": #if ㅎ then H
            translation = translation + "H"

        elif letter in "И": #if И then I
            translation = translation + "I"

        elif letter in "ㅈ𑀛": #if ㅈ𑀛 then J
            translation = translation + "J"

        elif letter in "ㅋ": #if ㅋ then K
            translation = translation + "K"

        elif letter in "Λ": #if Λ then L
            translation = translation + "L"

        elif letter in "ㅁ": #if ㅁ then M
            translation = translation + "M"

        elif letter in "N𑀦": #if Δ then N
            translation = translation + "N"

        elif letter in "Ω": #if Э then O
            translation = translation + "O"

        elif letter in "Π": #if Ф then P
            translation = translation + "P"

        elif letter in "Q": #if Γ then Q
            translation = translation + "Q"

        elif letter in "ㄹ": #if ㅎ then R
            translation = translation + "R"

        elif letter in "Σ": #if И then S
            translation = translation + "S"

        elif letter in "T": #if ㅈ𑀛 then T
            translation = translation + "T"

        elif letter in "U": #if ㅋ then U
            translation = translation + "U"

        elif letter in "V𑀯": #if Λ then V
            translation = translation + "V"

        elif letter in "W": #if ㅁ then W
            translation = translation + "W"

        elif letter in "X": #if X then X
            translation = translation + "X"

        elif letter in "Y": #if Y then Y
            translation = translation + "Y"

        elif letter in "З": #if З then Z
            translation = translation + "Z"

        else:
            translation = translation + letter

    return translation


print(translate(input("Enter a phrase: ")))