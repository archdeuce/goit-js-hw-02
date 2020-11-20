const logins = ["Mango", "robotGoogles", "Poly", "Aj4x1sBozz", "qwerty123"];

const isLoginValid = function (login) {
  return login.length > 3 && login.length < 17;
};

const isLoginUnique = function (allLogins, login) {
  for (let i = 0; i < allLogins.length; i++)
    if (allLogins[i] === login) {
      return false;
    }

  return true;
};

const addLogin = function (allLogins, login) {
  const SUCCESS = "Логин успешно добавлен!";
  const REFUSAL = "Такой логин уже используется!";
  const ERROR = "Ошибка! Логин должен быть размером от 4 до 16 символов";
  let message;

  if (!isLoginValid(login)) return ERROR;

  if (!isLoginUnique(allLogins, login)) return REFUSAL;

  allLogins.push(login);
  return SUCCESS;
};

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
console.log(addLogin(logins, "Ajax")); // 'Логин успешно добавлен!'
console.log(addLogin(logins, "robotGoogles")); // 'Такой логин уже используется!'
console.log(addLogin(logins, "Zod")); // 'Ошибка! Логин должен быть от 4 до 16 символов'
console.log(addLogin(logins, "jqueryisextremelyfast")); // 'Ошибка! Логин должен быть от 4 до 16 символов'
