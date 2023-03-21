const appService = (function () {
  let subs = {};
  const createSub = (sub) => (subs[sub] = []);
  const subscribeToState = (sub, method) => subs[sub].push(method);
  const changeState = (sub, param) => subs[sub].forEach((method) => (param ? method(param) : method()));
  return { createSub, subscribeToState, changeState };
})();

const appState = {
  users: [],
};

appService.createSub('users');
