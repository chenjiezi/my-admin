export default {
  set : (key, value) => {
    const json = JSON.stringify(value);
    localStorage.setItem(key, json);
  },
  get : (key) => {
    const res = JSON.parse(localStorage.getItem(key));
    return res;
  }
}
