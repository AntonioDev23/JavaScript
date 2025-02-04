
function aparecePrompt() {
    let area =  prompt (" Escolha a opção: 1- se deseja seguir a área de front-end ou 2- para back-end")
    console.log(area)

    if(area == "1") {
      let techFront = prompt("Escolha a opção 1- se você quer aprender React ou 2- se quer aprender Vue")
      console.log(techFront)
    }
    else if (area == "back-end") {
       let techBack = prompt("Escolha a opção 1- se você quer aprender C# ou 2- se quer aprender Java?")
       console.log(techBack)
    }
    else {
        alert("Voce não respondeu uma opção válida")
    }

    let listaTechs = []

   let fullstack = prompt("Você prefere: 1- seguir na área escolhida ou 2- avançar e se tornar um dev Fullstack ")

   let aprenderMais = prompt ("Tem mais alguma tecnologia que você gostaria de aprender ?1- sim ou 2- não")
    while (aprenderMais == "1") {
        let novaTech = prompt ("Me conte qual tecnologia você gostaria de aprender")
        listaTechs.push(novaTech)
        aprenderMais = prompt(`Que legal que quer estudar ${novaTech}! Agora sua lista de aprendizado está assim: ${listaTechs}. Existe mais alguma tech que deseja aprender ? 1- sim ou 2- não`)  
    }
        alert("Bons estudos para você  então!")
    }
