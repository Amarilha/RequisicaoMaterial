import {db, ref, get  } from "../../../backend/app/firebaseConfig.js";



// Certifique-se de que a função removeTag está no escopo global
function removeTag(button) {
    const tag = button.closest('.tag'); // Encontra a div "tag" mais próxima
    if (tag) {
        tag.remove(); // Remove a tag
    }
}

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
           
            // Adiciona o evento de clique ao botão "X"
            const removeButton = tag.querySelector('button');
            removeButton.addEventListener('click', function () {
                removeTag(this);
            });
            }
    });
});


//const setorRef = ref(db, "setor");
//get(setorRef)
//  .then((snapshot) => {
//    if (snapshot.exists()) {
//      console.log(snapshot.val()); // Exibe os dados do setor
//    } else {
//      console.log("Nenhum dado disponível em /setor");
//    }
//  })
//  .catch((error) => {
//    console.error("Erro ao buscar os dados:", error);
//  });

// Função para carregar os setores
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

// Função para carregar tudo
function carregarTudo() {
    carregarSetores();
    carregarGerente();
    carregarMaquinas();
    carregarMaterial();

}

// Chama a função ao carregar a página
window.onload = carregarTudo;