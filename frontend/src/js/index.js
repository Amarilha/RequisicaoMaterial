import {db, ref, get  } from "../../../backend/app/firebaseConfig.js";



// Certifique-se de que a função removeTag está no escopo global
function removeTag(button) {
    const tag = button.closest('.tag'); // Encontra a div "tag" mais próxima
    if (tag) {
        tag.remove(); // Remove a tag
    }
}
// Array para armazenar os materiais selecionados
let materiaisSelecionados = [];
//tag
document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('material').addEventListener('change', function () {
        const selectedValue = this.value;
        if (selectedValue) {
            const descriptionDiv = document.getElementById('description');
            const tag = document.createElement('div');
            tag.className = 'tag';
            tag.innerHTML = `${selectedValue} 
            <div style="display: flex; align-items: center; margin: 10px;">
                <input class="w-14 px-1 py-1 text-gray-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500" 
                    id="quantity" 
                    type="number" 
                    min="1" 
                    value="1" 
                    oninput="validity.valid||(value='1');" 
                    style="background-color: #4e5869 ; color: white;" />
                <button type="button" style="margin-left: 8px;">X</button>
            </div>`;
            descriptionDiv.appendChild(tag);
            this.value = ''; // Limpa o campo de seleção após adicionar a tag

            // Adiciona o material ao array
            materiaisSelecionados.push(selectedValue);
           
            // Adiciona o evento de clique ao botão "X"
            const removeButton = tag.querySelector('button');
            removeButton.addEventListener('click', function () {
                removeTag(this);
                // Remove o material do array quando a tag é removida
                const materialRemovido = this.closest('.tag').textContent.trim().split('\n')[0];
                materiaisSelecionados = materiaisSelecionados.filter(mat => mat !== materialRemovido);
            });
            }
    });
});

//get valores
function getDescricaoFormatada() {
    const descriptionDiv = document.getElementById('description');
    const tags = descriptionDiv.querySelectorAll('.tag');
    let descricao = '';

    tags.forEach(tag => {
        const material = tag.textContent.trim().split('\n')[0]; // Pega o nome do material
        const quantidade = tag.querySelector('input').value; // Pega a quantidade
        descricao += `${material} (Quantidade: ${quantidade})\n`; // Formata a descrição
    });

    return descricao.trim(); // Remove espaços em branco no final
}
//imprime o valor 
document.addEventListener('DOMContentLoaded', () => {
    const botaoSolicitar = document.getElementById('Solicitar');

    botaoSolicitar.addEventListener('click', (event) => {
        event.preventDefault();

        // Captura os valores dos campos do formulário
        const setor = document.getElementById('setor').value;
        const descricao = getDescricaoFormatada(); // Descrição formatada
        const maquina = document.getElementById('maquina').value;
        const solicitante = document.getElementById('solicitante').value;
        const gerente = document.getElementById('gerente').value;

        // Exibe os valores no console
        console.log('Setor:', setor);
        console.log('Materiais Selecionados:', materiaisSelecionados); // Exibe os materiais selecionados
        console.log('Descrição:', descricao);
        console.log('Máquina:', maquina);
        console.log('Solicitante:', solicitante);
        console.log('Gerente:', gerente);

        // Exibe uma mensagem de sucesso no console
        console.log('Formulário enviado com sucesso!');
    });
});


//carrega db
function carregarSetores() {
    const setorRef = ref(db, "setor");
    console.log(setorRef);
    get(setorRef)
        .then((snapshot) => {
            if (snapshot.exists()) {
                const setores = snapshot.val();
                const datalistSetor = document.getElementById("setores");
                 
                console.log(setores);
                console.log(datalistSetor);


                Object.keys(setores).forEach(setor => {
                    const option = document.createElement("option");
                    option.value = setor;  // Pega apenas o número (chave do objeto)
                    datalistSetor.appendChild(option);
                });
            } else {
                console.log("Nenhum setor encontrado.");
            }
        })
        .catch((error) => {
            console.error("Erro ao buscar setores:", error);
        });
}
function carregarGerente() {
    const gerenteRef = ref(db, "gerente");
    console.log(gerenteRef);
    get(gerenteRef)
        .then((snapshot) => {
            if (snapshot.exists()) {
                const gerente = snapshot.val();
                const datalistGerente = document.getElementById("gerentes");
                 
                console.log(gerente);
                console.log(datalistGerente);


                Object.keys(gerente).forEach(gerente => {
                    const option = document.createElement("option");
                    option.value = gerente;  // Pega apenas o número (chave do objeto)
                    datalistGerente.appendChild(option);
                });
            } else {
                console.log("Nenhum setor encontrado.");
            }
        })
        .catch((error) => {
            console.error("Erro ao buscar setores:", error);
        });
}
function carregarMaquinas() {
    const maquinaRef = ref(db, "maquina");
    console.log(maquinaRef);
    get(maquinaRef)
        .then((snapshot) => {
            if (snapshot.exists()) {
                const maquina = snapshot.val();
                const datalistmaquina = document.getElementById("maquinas");
                 
                console.log(maquina);
                console.log(datalistmaquina);


                Object.keys(maquina).forEach(maquina => {
                    const option = document.createElement("option");
                    option.value = maquina;  // Pega apenas o número (chave do objeto)
                    datalistmaquina.appendChild(option);
                });
            } else {
                console.log("Nenhum setor encontrado.");
            }
        })
        .catch((error) => {
            console.error("Erro ao buscar setores:", error);
        });
}
function carregarMaterial() {
    const materialRef = ref(db, "material");
    console.log(materialRef);
    get(materialRef)
        .then((snapshot) => {
            if (snapshot.exists()) {
                const material = snapshot.val();
                const datalistmaterial = document.getElementById("materiais");
                 
                console.log(material);
                console.log(datalistmaterial);


                Object.keys(material).forEach(material => {
                    const option = document.createElement("option");
                    option.value = material;  // Pega apenas o número (chave do objeto)
                    datalistmaterial.appendChild(option);
                });
            } else {
                console.log("Nenhum setor encontrado.");
            }
        })
        .catch((error) => {
            console.error("Erro ao buscar setores:", error);
        });
}
function carregarSolicitante() {
    const solicitanteRef = ref(db, "solicitante");
    console.log(solicitanteRef);
    get(solicitanteRef)
        .then((snapshot) => {
            if (snapshot.exists()) {
                const solicitante = snapshot.val();
                const datalistsolicitante = document.getElementById("solicitantes");
                 
                console.log(solicitante);
                console.log(datalistsolicitante);


                Object.keys(solicitante).forEach(solicitante => {
                    const option = document.createElement("option");
                    option.value = solicitante;  // Pega apenas o número (chave do objeto)
                    datalistsolicitante.appendChild(option);
                });
            } else {
                console.log("Nenhum setor encontrado.");
            }
        })
        .catch((error) => {
            console.error("Erro ao buscar setores:", error);
        });
}

// Função para carregar tudo
function carregarTudo() {
    carregarSetores();
    carregarGerente();
    carregarMaquinas();
    carregarMaterial();
    carregarSolicitante();

}
// Chama a função ao carregar a página
window.onload = carregarTudo;