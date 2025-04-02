const prompt = require("prompt-sync")({signit:true})

var tipo_veiculo = prompt("Digite o seu tipo de vículo: ")

switch(tipo_veiculo.toUpperCase()){
    case "SUV":
        console.log("Você escolheu um TOYOYTA SW4");
        break;
    case "HATCH":
        console.log("Você escolheu um Fiat Punto");
        break;
    case "CUPE":
        console.log("Você escolheu um Hyunday Veloster");
        break;
    case "VAN":
        console.log("Você escolheu uma Volskwagen Kombi")
    default:
        console.log("O tipo que você escolheu não existe.")
}
