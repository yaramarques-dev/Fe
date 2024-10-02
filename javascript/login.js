
function loadCart(userId) {
    const cartRef = database.ref(`carrinhos/${userId}`);
    cartRef.once('value', snapshot => {
        const cartData = snapshot.val();
        if (cartData) {
            // Preencha o carrinho de compras com os dados do banco
            cart = cartData.itens; // Supondo que você armazene os itens no formato adequado
            updateCart();
        }
    });
}

import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-auth.js";
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-app.js";

// Configurações do Firebase
const configuracaoFirebase = {
    apiKey: "AIzaSyBePL-s9584Awcc0Eeih99UR4I70vJ2Nmo",
    authDomain: "carrinhocompras-b6af5.firebaseapp.com",
    projectId: "carrinhocompras-b6af5",
    storageBucket: "carrinhocompras-b6af5.appspot.com",
    messagingSenderId: "969767267613",
    appId: "1:969767267613:web:c427b5823214aae51805f4"
};

// Inicialize o Firebase
const app = initializeApp(configuracaoFirebase);
const auth = getAuth(app);

// Função de autenticação de usuários
document.getElementById('formLogin').addEventListener('submit', async function(evento) {
    evento.preventDefault();
    const email = document.getElementById('inputEmail').value;
    const senha = document.getElementById('inputSenha').value;
    try {
        await signInWithEmailAndPassword(auth, email, senha);
        alert('Login bem-sucedido!');
    } catch (erro) {
        console.error('Erro ao fazer login:', erro);
        alert('Erro ao fazer login. Verifique suas credenciais.');
    }
});

// Função de cadastro de usuários
document.getElementById('botaoCadastro').addEventListener('click', async function() {
    const email = prompt('Digite o e-mail para cadastro:');
    const senha = prompt('Digite a senha para cadastro:');
    if (email && senha) {
        try {
            await createUserWithEmailAndPassword(auth, email, senha);
            alert('Usuário cadastrado com sucesso!');
        } catch (erro) {
            console.error('Erro ao cadastrar usuário:', erro);
            alert('Erro ao cadastrar usuário.');
        }
    }
});