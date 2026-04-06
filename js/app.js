const pessoas = ['veléria', 'maria', 'joão', 'pedro', 'ana', 'cayre', 'julia', 'livia', 'bruna', 'magnoli'];

document.querySelector('#btnResultado').addEventListener('click', () => {
    let pessoaSorteada = parseInt(Math.random() * 10);
    let listap = document.querySelector('#listaPessoas').textContent + `${ pessoas[pessoaSorteada] }  `;

    document.querySelector('#pSorteada').textContent = pessoas[pessoaSorteada];
    document.querySelector('#listaPessoas').textContent = listap;
}
)

