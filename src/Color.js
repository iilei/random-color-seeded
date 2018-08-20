import { hsluvToHex } from 'hsluv';
import seedrandom from 'seedrandom';

class Color {
  constructor(seed, options) {
    this.rnd = seedrandom(seed);
    this.opts = options;
  }

  getHex = () => {
    const rnd = this.rnd() * 360;
    return hsluvToHex([rnd, this.opts.lightness, this.opts.saturation]);
  }

  get hex() {
    return this.getHex();
  }
}
export default Color;
