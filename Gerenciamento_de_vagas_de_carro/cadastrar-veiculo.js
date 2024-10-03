import * as api from './api.js';
const cadastrarVeiculo = document.getElementById('botaoCadastrarVeiculo');



cadastrarVeiculo.addEventListener('click', () => {

    const placaVeiculo = document.getElementById('placaVeiculo').value.replace(/[^A-Za-z0-9]/g, '').toUpperCase();
    const nomeProprietario = document.getElementById('nomeProprietario').value;
    const modeloVeiculo = document.getElementById('modeloVeiculo').value;
    const corVeiculo = document.getElementById('corVeiculo').value;

    // Regex para validar as placas (formato convencional e Mercosul)
    const regexConvencional = /^[A-Z]{3}[0-9]{4}$/; // Formato convencional: XXX0000
    const regexMercosul = /^[A-Z]{3}[0-9][A-Z][0-9]{2}$/; // Formato Mercosul: XXX0X00

    // Verifica se a placa é válida
    if (!regexConvencional.test(placaVeiculo) && !regexMercosul.test(placaVeiculo)) {
        alert('Placa inválida! Use o formato XXX-0000 ou XXX-0X00.');
        return;
    }

    // Recupera os veículos já cadastrados do localStorage
    //const veiculos = JSON.parse(localStorage.getItem('veiculos')) || [];
    const veiculos = JSON.parse(api.apiConsultarVeiculo()) || [];

    console.log(JSON.parse(api.apiConsultarVeiculo()));
    console.log(api.apiConsultarVeiculo());
    console.log(JSON.parse(api.apiConsultarVeiculo())).find(veiculo => veiculo.placa === placaVeiculo);
    console.log(api.apiConsultarVeiculo()).find(veiculo => veiculo.placa === placaVeiculo);
    alert("alerta")
    // Verifica se a placa já está cadastrada
    const placaExistente = veiculos.find(veiculo => veiculo.placa === placaVeiculo);

    if (placaExistente) {
        alert(`A placa ${placaVeiculo} já está cadastrada por ${placaExistente.nome}.`);
    } else {
        // Cadastra o novo veículo
        const novoVeiculo = {
            placa: placaVeiculo,
            nome: nomeProprietario,
            modelo: modeloVeiculo,
            cor: corVeiculo
        };

        // Adiciona o novo veículo à lista e salva no localStorage
        veiculos.push(novoVeiculo);
        localStorage.setItem('veiculos', JSON.stringify(veiculos));

        api.apiCadastrarVeiculo(placaVeiculo,nomeProprietario,modeloVeiculo,corVeiculo);
        alert('Veículo cadastrado com sucesso!');

        
        // Limpa o formulário após o cadastro
        document.getElementById('formCadastrarVeiculo').reset();
    }
})


