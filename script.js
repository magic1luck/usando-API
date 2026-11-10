//Linguagem de programação

//const url = "https://viacep.com.br/ws/01001000/json/"

//fetch => Pega os dados da API
//then => Decide o que eu vou fazer com a resposta do fetch
//fetch(url)
//.then(resposta => resposta.json ())
//.then(data => {
//    console.log(data)})

function buscarApi(url){
     fetch("https://jsonplaceholder.typicode.com/" + rota)
        .then(resposta => resposta.json ())
        .then(data => {
            console.log("Lista de: " + rota)
            console.log(data)
            
     })
}
buscarApi("posts")
buscarApi("users")