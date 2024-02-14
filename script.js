function atualizarTextarea () {
    const selectElement = document.getElementById("size");
    const textareaElement = document.getElementById("message");

    const opcaoSelecionada = selectElement.options[selectElement.selectedIndex].text;

    textareaElement.value = opcaoSelecionada
};