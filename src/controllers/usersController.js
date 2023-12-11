const listUsers = (req, res) => {
  res.send('Lista de usuarios 2023');
}

const createUser = (req, res) => {
  res.send('Usuario creado');
}


export {listUsers, createUser}