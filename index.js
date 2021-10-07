class SkylabArray {
  constructor() {
    this.length = 0;
  }

  push(a, b, c) {
    const obj = {
      0: a,
      1: b,
      2: c,
    };
  }
}

const pia = new SkylabArray();
pia.length; // 0
pia.push(2, 3, 4);
pia.length; // 3
pia.unshift();
pia; // {"0":2, "1":4}
