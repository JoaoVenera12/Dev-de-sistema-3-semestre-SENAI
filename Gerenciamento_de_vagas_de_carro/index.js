import * as api from './api.js';

const reservarVaga = document.getElementById('reservarVaga');





reservarVaga.addEventListener('click', () => {
    event.preventDefault(); // Impede o envio do formulário e o recarregamento da página

    const placaVeiculo = document.getElementById('placaVeiculo').value.replace(/[^A-Za-z0-9]/g, '').toUpperCase();
    const numeroApartamento = document.getElementById('numeroApartamento').value;
    const blocoApartamento = document.getElementById('blocoApartamento').value;
    const numeroVaga = document.getElementById('numeroVaga').value;
    

    // Validação de formato de placa (convencional ou Mercosul)
    const regexConvencional = /^[A-Z]{3}[0-9]{4}$/;
    const regexMercosul = /^[A-Z]{3}[0-9][A-Z][0-9]{2}$/;

    if (!regexConvencional.test(placaVeiculo) && !regexMercosul.test(placaVeiculo)) {
        alert('Placa inválida! Use o formato XXX0000 ou XXX0X00.');
        return;
    }

    // Verifica se a placa do veículo está cadastrada
    const veiculosCadastrados = JSON.parse(localStorage.getItem('veiculos')) || [];
    const placaExistente = veiculosCadastrados.find(veiculo => veiculo.placa === placaVeiculo);

    if (!placaExistente) {
        alert('Placa não cadastrada! Por favor, cadastre a placa do veículo antes de reservar a vaga.');
        return;
    }

    if (numeroVaga < 1 || numeroVaga > 50) {
        alert('O número da vaga deve ser entre 1 e 50.');
        return;
    }

    // Verificar se a vaga já está reservada
    const reservas = JSON.parse(localStorage.getItem('reservas')) || [];
    const vagaExistente = reservas.find(reserva => reserva.numeroVaga === numeroVaga);

    if (vagaExistente) {
        alert(`A vaga ${numeroVaga} já está reservada.`);
    } else {
        // Criar nova reserva
        const novaReserva = {
            placa: placaVeiculo,
            apartamento: numeroApartamento,
            bloco: blocoApartamento,
            numeroVaga: numeroVaga
        };

        // Adicionar nova reserva ao localStorage
        reservas.push(novaReserva);
        localStorage.setItem('reservas', JSON.stringify(reservas));

        alert('Vaga reservada com sucesso!');

        // Limpar o formulário após a reserva
        document.getElementById('formReservarVaga').reset();
    }
})


