import * as api from './api.js';

document.addEventListener('DOMContentLoaded', function() {
    const reservasCadastradas = JSON.parse(localStorage.getItem('reservas')) || [];
    const listaVagas = document.getElementById('listaVagas');

    //const reservasCadastradas = JSON.parse(api.apiConsultarVaga())
    console.log(api.apiConsultarVaga());
    
    if (reservasCadastradas.length === 0) {
        listaVagas.innerHTML = '<p>Nenhuma vaga cadastrada.</p>';
    } else {
        // Criar uma tabela para exibir as reservas
        let tabelaVagas = '<table><tr><th>Vaga</th><th>Placa</th><th>Apartamento</th><th>Bloco</th><th>Status</th></tr>';
        
        // Loop por todas as reservas cadastradas
        for (let reserva of reservasCadastradas) {
            const statusVaga = reserva.placa ? 'Ocupada' : 'Disponível'; 
            tabelaVagas += `
                <tr>
                    <td>${reserva.numeroVaga}</td>
                    <td>${reserva.placa || '---'}</td>  <!-- Corrigido para acessar 'placa' -->
                    <td>${reserva.apartamento || '---'}</td>  <!-- Corrigido para acessar 'apartamento' -->
                    <td>${reserva.bloco || '---'}</td>  <!-- Corrigido para acessar 'bloco' -->
                    <td>${statusVaga}</td>
                </tr>`;
        }

        tabelaVagas += '</table>';
        listaVagas.innerHTML = tabelaVagas;
    }
});
