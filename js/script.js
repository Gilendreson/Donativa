
/* script para o pagina de login*/

'use strict'

const loginContainer = document.getElementById('login-container')

const move = () => loginContainer.classList.toggle('move')

document.getElementById('doador').addEventListener('click', move)
document.getElementById('beneficiado').addEventListener('click', move)

document.getElementById('open-cadastro-mobile').addEventListener('click', move)
document.getElementById('open-login-mobile').addEventListener('click', move)