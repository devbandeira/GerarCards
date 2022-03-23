//window é selecionando na janela
window.onload = function() {
    const form = document.querySelector("#formInput");

        form.addEventListener("submit", function(event) {
        event.preventDefault();
        
        //Selecionando la na Árvore DOM os inputs que captura dos dados do usuário
        //Criando junto também o creatTextNode()
        const handleTitle = document.querySelector("#title"); //aqui eu pego o campo
        const handleTitleText = document.createTextNode(handleTitle.value); //aqui eu pego o texto

        const handleDescription = document.querySelector("#description");
        const handleDescriptionText = document.createTextNode(
            handleDescription.value
        );

        const handleUrl = document.querySelector("#url");
        const handleUrlText = document.createTextNode(handleUrl.value);

        const handleDate = document.querySelector("#date");
        const handleDateText = document.createTextNode(handleDate.value);

        const cards = document.querySelector(".cards");

        //criando os ELEMENTOS para criar os cards
        const div = document.createElement("div");
        const title = document.createElement("h2");
        const description = document.createElement("p");
        const image = document.createElement("img");
        const date = document.createElement("span");
        const hr = document.createElement("hr")

        //Adicionando os elementos dentro das tags usando appendChlid();
        title.appendChild(handleTitleText);
        description.appendChild(handleDescriptionText);
        image.setAttribute("src", handleUrl.value); 

        div.setAttribute("class", "card green");
        image.setAttribute("class", "image");
        title.setAttribute("h2", "atributeTitle");
        date.appendChild(handleDateText);


        div.appendChild(image);
        div.appendChild(title);
        div.appendChild(description);
        div.appendChild(hr)
        div.appendChild(date)

        //adicionando a div com todas informações do card no HTML
        const row = document.querySelector('.row')
        row.appendChild(div);
        document.querySelector(".reset").click();
    });
};
