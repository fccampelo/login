const forcaSenha = senha => {
  var regex = /^(?=(?:.*?[A-Z]){1})(?=(?:.*?[0-9]){1})(?=(?:.*?[!@#$%*()_+^&}{:;?.]){1})(?!.*\s)[0-9a-zA-Z!@#$%;*(){}_+^&]*$/;

  if (senha.length < 8) {
    console.log("A senha deve conter no minímo 8 digitos!");
    return false;
  } else if (!regex.exec(senha)) {
    console.log(
      "A senha deve conter no mínimo 1 caracteres em maiúsculo, 1 números e 1 caractere especial!"
    );
    return false;
  }
  return true;
};

export default forcaSenha;
