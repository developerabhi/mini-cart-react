export const setLocalStorageData = (key, val) => {
  if(typeof(Storage) !== 'undefined'){
    localStorage.setItem(key, JSON.stringify(val));
  }
}

export const getLocalStorageData = (key) => {
  if(typeof(Storage) !== 'undefined'){
    if(localStorage.getItem(key)){
      const data = JSON.parse(localStorage.getItem(key));
      return data;
    } else {
      return false;
    }
  } else {
    return false;
  }
}

export const clearLocalStorageData = () => {
  if(typeof(Storage) !== 'undefined'){
    localStorage.clear();
  }
}
