
registroEmailTutor = ['EmailAdmin'];
registroSenhaTutor = ['SenhaAdmin'];
let posicaoSenha = 0;
let posicaoEmail = 0;

//Função que verifica no arquivo Register.html se amas as senha estão certa
function verificaSenha(){
let senhaTutor
let conSenhaTutor

    if (senhaTutor == conSenhaTutor && senhaTutor != "" && conSenhaTutor != ""){
        registroSenhaTutor.push(senhaTutor);
        console.log(registroSenhaTutor)
        return true;
    } else {
        document.getElementById("senhaTutor").value = "";
        document.getElementById("conSenhaTutor").value = "";
        alert ("Senha não condiz ou estão vazias");
        return false;
    }
 
}

//Funcao que pega a posicao do email do usuario em um array
function posicaoEmailD(){
    let emailDigitado = document.getElementById("emailInsirido").value;
    if (registroEmailTutor.includes(emailDigitado)){
        posicaoEmail = registroEmailTutor.indexOf(emailDigitado)
        console.log (posicaoEmail)
    } else {
        document.getElementById("emailInsirido").value = "";
        alert("Email não está no sistema")
    }

}

//Funcao que pega a posicao da senha do usuario em um array
function posicaoSenhaD(){
    let senhaDigitada = document.getElementById("senhaInsirida").value;
    if (registroSenhaTutor.includes(senhaDigitada)){
        posicaoSenha = registroSenhaTutor.indexOf(senhaDigitada)
        console.log (posicaoSenha)
    } else {
        document.getElementById("senhaInsirida").value = "";
        alert("senha não encontrada no sistema (essa mensagem só aparece pra eu saber se errei a senha, em um programa normal isso nao apareceria")
    }

}


//Função que armazena o email em um array
function registroLoginTutor(){

    if(!verificaSenha()){
        return false;
    }
    
    let emailTutor = document.getElementById("emailTutor").value;
    registroEmailTutor.push(emailTutor);
    console.log(registroEmailTutor);
    alert (`Cadastro salvo com sucesso (lembrar de direcionar a outra pagina)`);

    return false;
}
 

function loginTutor(){

    posicaoEmailD();
    posicaoSenhaD();

    if (posicaoEmail == posicaoSenha){
        alert("Bem vindo/a")
    } else {
        alert ("Email/Senhas errados")
    }
}

