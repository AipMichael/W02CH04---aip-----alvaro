
empujar(...objeto) {
  //  const objeto = loQueSea.split(",");
    for(let i = this.length; i < (this.length + objeto.length) ; i++  ){
      
      this[i] += objeto[i-this.length];
    }

  
  return objeto.length
  }


