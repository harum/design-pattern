interface User {
  name: string;
  id: number;
}

function sayHello(user: User) {
  console.log(user.name);
}
