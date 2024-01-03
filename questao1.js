const FormatarContato = (contato) => {
    let {nome,email,telefone} = contato
    return `Nome: ${nome}; Email: ${email}; Telefone: ${telefone} `
}

console.log (FormatarContato({nome: "Jonas",email: "jonajose@gmail.com", telefone: 2982376327}));