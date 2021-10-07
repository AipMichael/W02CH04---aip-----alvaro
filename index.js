class SkylabArray {
  constructor(...parametro) {
    this.longitud = 0;
  }

  empujar(...objeto) {
    const limite = this.length;
    for (let i = this.length; i < limite + objeto.length; i++) {
      this[i] = objeto[i - limite];
    }

    return objeto.length;
  }
}

/* const pia = new SkylabArray();
// pia.length; // 0
// pia.push(2, 3, 4);
// pia.length; // 3
// pia.unshift();
// pia; // {"0":2, "1":4}

console.log(pia.empujar("asd", "asd", "sd", "asd")); */

module.exports = { SkylabArray };
