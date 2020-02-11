export const cookies = document.cookie.split(';').reduce((res, c) => {
    const [key, val] = c.trim().split('=').map(decodeURIComponent)
    try {
      return Object.assign(res, { [key]: JSON.parse(val) })
    } catch (e) {
      return Object.assign(res, { [key]: val })
    }
  }, {});

export const authenticate = (jwt,id,next)=> {
    if(typeof window !=='undefined'){
        localStorage.setItem('jwt',JSON.stringify(jwt));
        localStorage.setItem('cached_token',JSON.stringify(id))
        next()
    }
}

export const isauthenticated = () => {
    if(typeof window =='undefined'){
        return false
    }
    
    if(localStorage.getItem('jwt')){
        return JSON.parse(localStorage.getItem('jwt'))
    }else{
        return false
    }
}


