const logins = ["Mango", "robotGoogles", "Poly", "Aj4x1sBozz", "qwerty123"];

function isLoginValid(login, min = 4, max = 16) {
  return login.length > 3 && login.length < 17;
}

function isLoginUnique(allLogins, login) {
  "use strict";

  for (let i = 0; i < allLogins.length; i++)
    if (allLogins[i] === login) return false;

  return true;
}

function addLogin(allLogins, login) {
  "use strict";

  const SUCCESS = "Логин успешно добавлен!";
  const REFUSAL = "Такой логин уже используется!";
  const ERROR = "Ошибка! Логин должен быть размером от 4 до 16 символов";
  let message;

  if (!isLoginValid(login)) return ERROR;

  if (!isLoginUnique(allLogins, login)) return REFUSAL;

  allLogins.push(login);
  return SUCCESS;
}
