function comprar(){
    var nome1=document.getElementById("nomeCad1").value;
    document.getElementById("nome_Cad1").innerHTML=nome1;
    var cel1=document.getElementById("celCad").value;
    document.getElementById("cel_Cad").innerHTML=cel1;
    var nome2=document.getElementById("nomeCad2").value;
    document.getElementById("nome_Cad2").innerHTML=nome2;
    const gen=document.querySelector('input[name=genero]:checked + span').textContent;
    document.getElementById("gen_Cad").innerHTML=gen;
    var estado=document.getElementById("estadoCad").value;
    document.getElementById("seuEstado_Cad").innerHTML=estado;
    var mens=document.getElementById("mensagemCad").value;
    document.getElementById("mensagem_Cad").innerHTML=mens;
    document.getElementById("formCorreio").reset();
}
function limpar(){
    document.getElementById("nome_Cad1").innerHTML="";
    document.getElementById("cel_Cad").innerHTML="";
    document.getElementById("nome_Cad2").innerHTML="";
    document.getElementById("gen_Cad").innerHTML="";
    document.getElementById("seuEstado_Cad").innerHTML="";
    document.getElementById("mensagem_Cad").innerHTML="";
}