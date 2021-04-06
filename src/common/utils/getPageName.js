export function getPageName(location) {
  let title = '';
  if (location.pathname==='/') title = 'Головна';
  else if(location.pathname==='/create') title = 'Створення статі'
  else if(location.pathname==='/login') title = 'Створення акаунта'
  else if(location.pathname==='/sign-in') title = 'Авторизація'
  else if(location.pathname==='/create-structure') title = 'Структура данних'
  return title;
}
