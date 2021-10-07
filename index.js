class SkylabArray {
  constructor(...parametro) {
    this.length = 0;
    

  empujar(...objeto) {

    let alpia = {};
   
    for (let i = 0; i < objeto.length; i++) {
      this[this.length] = objeto[this.length];
      this.length++
    }
    return this.length;
    }
    //console.log("hola", this);
  
  }
}

/*








class SkylabArray {
  constructor(...parametro) {}

  empujar(...objeto) {
    //  const objeto = loQueSea.split(",");
    let limite = this.length;
    for (let i = this.length; i < limite + objeto.length; i++) {
      this[i] = objeto[i - limite];
    }
    //console.log("hola", this);
    return objeto.length;
  }
}

const pia = new SkylabArray();
pia.length; // 0
pia.push(2, 3, 4);
pia.length; // 3
pia.unshift();
pia; // {"0":2, "1":4}*/


