const cadastrarBotao = document.getElementById('cadastrarTarefa');
const consultarBotao = document.getElementById('consultarTarefa');
const atualizarBotao = document.getElementById('atualizarTarefa');
const deletarBotao = document.getElementById('deletarTarefa');

consultarBotao.addEventListener('click', () => {
    console.log('Cadastrado com sucesso');
    fetch('https://crudcrud.com/api/5b3d34fe33274148a14357373f44a4b1/todos', {
        method: 'GET'
    })
    .then((response) => {
        console.log(response);
        return response.json();
    })
    .then((response) => {
        console.log(response);
    });
});

cadastrarBotao.addEventListener('click', () => {
    const tarefa ={
        id : 1,
        titulo: 'Minha primeira tarefa',
        descricao: 'A descrição da primeira tarefa'

    };
    fetch('https://crudcrud.com/api/5b3d34fe33274148a14357373f44a4b1/todos',{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(tarefa)
    }).then((response) => {
        console.log(response);
        return response.json();
    }).then((response) =>{
        console.log(response);
        return response.json();
    }).catch((error) =>{
        console.log(error)
    });

});

atualizarBotao.addEventListener('click', () => {
    const tarefa ={
        id : 1,
        titulo: 'Minha primeira tarefa Atualizada',
        descricao: 'A descrição da primeira tarefa'

    };
    fetch('https://crudcrud.com/api/5b3d34fe33274148a14357373f44a4b1/todos/66fb2a67fe837603e816d9d0',{
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(tarefa)
    }).then((response) => {
        console.log(response);
        return response.json();
    }).then((response) =>{
        console.log(response);
        return response.json();
    }).catch((error) =>{
        console.log(error)
    });
});
deletarBotao.addEventListener('click', () => {
    fetch('https://crudcrud.com/api/5b3d34fe33274148a14357373f44a4b1/todos/66fb2a67fe837603e816d9d0',{
        method: 'DELETE'        
    }).then((response) => {
        console.log(response);
        return response.json();
    })

})