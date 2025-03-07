import {db, ref, get  } from "../../../backend/app/firebaseConfig.js";



document.getElementById('material').addEventListener('change', function() {
    const selectedValue = this.value;
    if (selectedValue) {
        const descriptionDiv = document.getElementById('description');
        const tag = document.createElement('div');
        tag.className = 'tag';
        tag.innerHTML = `${selectedValue} <button onclick="removeTag(this)">X</button>`;
        descriptionDiv.appendChild(tag);
        this.value = '';
    }
});

function removeTag(button) {
    const tag = button.parentElement;
    tag.remove();
}


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

// Função para carregar tudo
function carregarTudo() {
    carregarSetores();
    carregarGerente();
    carregarMaquinas();

}

// Chama a função ao carregar a página
window.onload = carregarTudo;