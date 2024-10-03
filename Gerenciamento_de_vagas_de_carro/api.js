const cadastrarBotao = document.getElementById('cadastrarTarefa');
const consultarBotao = document.getElementById('consultarTarefa');
const atualizarBotao = document.getElementById('atualizarTarefa');
const deletarBotao = document.getElementById('deletarTarefa');
const codApi = "6719b515254d4cf38d1117d9cab6ee6d";
const id = "66fdd849fe837603e816de52";


export function apiReservarVaga(){
    const tarefa ={
        apartamento : "001",
        bloco : "A",
        numeroVaga : "012",
        placa : "HMJ9443"

    };
    fetch('https://crudcrud.com/api/'+codApi+'/reservas',{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(tarefa)
    })
};

export function apiAtualizarVaga(){
    const tarefa ={
        apartamento : "001",
        bloco : "A",
        numeroVaga : "012",
        placa : "HMJ9443"

    };
    fetch('https://crudcrud.com/api/'+codApi+'/reservas/'+id,{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(tarefa)
    })
};

export function apiConsultarVaga(){
    
    fetch('https://crudcrud.com/api/'+codApi+'/reservas/',{
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }        
    }).then(response => {
        if (!response.ok) {
            throw new Error('Erro na conexão com a internet');
        }
        return response.json(); 
    })
    .then(data => {
        console.log(data); 
        return data;
    })
    .catch(error => {
        console.error('Erro:', error);
    });
};

export function apiDeletarVaga(){
    const tarefa ={
        apartamento : "001",
        bloco : "A",
        numeroVaga : "012",
        placa : "HMJ9443"

    };
    fetch('https://crudcrud.com/api/'+codApi+'/reservas',{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(tarefa)
    })
};

export function apiCadastrarVeiculo(placa,nome,modelo,cor){
    const tarefa ={
        placa : placa,
        nome : nome,
        modelo : modelo,
        cor : cor        
    };
    console.log(tarefa)
    console.log("api cadastrar")
    fetch('https://crudcrud.com/api/'+codApi+'/veiculos',{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(tarefa)
    })
};

export function apiAtualizarVeiculo(placa,nome,modelo,cor,id){
    const tarefa ={
        placa : placa,
        nome : nome,
        modelo : modelo,
        cor : cor 
    };
    fetch('https://crudcrud.com/api/'+codApi+'/veiculos/'+id,{
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(tarefa)
    })
};

export function apiConsultarVeiculo(){
    
    fetch('https://crudcrud.com/api/'+codApi+'/veiculos/',{
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }        
    }).then(response => {
        if (!response.ok) {
            throw new Error('Erro na conexão com a internet');
        }
        return response.json(); 
    })
    .then(data => {
        console.log(data); 
        alert(data);
        return data;
    })
    .catch(error => {
        console.error('Erro:', error);
    });
};

export function apiConsultarPlaca(){

    fetch('https://crudcrud.com/api/'+codApi+'/veiculos/',{
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }   
    }).then(data =>{
        const veiculo = data;
        console.log(veiculo);
        const placaExistente = veiculo.find(veiculo => veiculo.placa === placaVeiculo);
        console.log(placaExistente);
    })        

}

export function apiDeletarVeiculo(){
    fetch('https://crudcrud.com/api/'+codApi+'/veiculos/'+id,{
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(tarefa)
    })
};
