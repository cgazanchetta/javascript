function createUser(user, email, name) {
  return {
    user,
    contact: {
      email,
    },
    name,
  };
}

const {
  user,
  contact: { email },
  name,
} = createUser("caio.zanchetta", "caio@mail.com", "caio");

console.log(user);
console.log(email);
console.log(name);
