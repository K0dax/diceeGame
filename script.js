function rola(){
    var randomNumber1 = Math.floor(Math.random() * 6 + 1)
    var randomDice1 = "dice" + randomNumber1 + ".png"
    var randomImageSource1 = "images/" + randomDice1
    var image1 = document.querySelector(".img1")

    image1.setAttribute("src", randomImageSource1)

    var randomNumber2 = Math.floor(Math.random() * 6 + 1)
    var randomDice2 = "dice" + randomNumber2 + ".png"
    var randomImageSource2 = "images/" + randomDice2
    var image2 = document.querySelector(".img2")

    image2.setAttribute("src", randomImageSource2)

    if(randomNumber1 > randomNumber2){
        document.querySelector("h1").innerHTML = "Jogador 1 Venceu"
    }else if(randomNumber1 < randomNumber2){
        document.querySelector("h1").innerHTML = "Jogador 2 venceu"
    }else{
        document.querySelector("h1").innerHTML = "Empate"
    }
}