

export function escribirEnStorage(key = '', value){
    localStorage.setItem(key, JSON.stringify(value));
}

export function obtenerDeStorage(key =''){
    return JSON.parse(localStorage.getItem(key));
}

