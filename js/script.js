function enviarParaWhatsApp() {
    // Capturar a opção selecionada
    var opcaoSelecionada = document.getElementById("opcoes").value;

    // Número de telefone para enviar a mensagem via WhatsApp
    var numeroWhatsApp = "+556293420107"; // Substitua pelo seu número de WhatsApp

    // Montar a mensagem
    var mensagem = "Olá, gostaria de saber mais sobre " + opcaoSelecionada + "!";

    // Montar o link do WhatsApp com a mensagem
    var linkWhatsApp = "https://wa.me/" + numeroWhatsApp + "?text=" + encodeURIComponent(mensagem);

    // Abrir o link do WhatsApp em uma nova aba
    window.open(linkWhatsApp, '_blank');
}