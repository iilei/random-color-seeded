import { hsluvToHex } from 'hsluv';
import seedrandom from 'seedrandom';

import Color from './Color';

jest.mock('seedrandom', () => {
  return jest.fn((seed) => () => {
    return (({ myString: 0.75 })[seed] || 0.333);
  });
});

jest.mock('hsluv', () => ({
  __esModule: true,
  hsluvToHex: jest.fn(() => '#bada55'),
}));

describe('Color', () => {
  it('should export a Constructor Class', () => {
    expect(Color).toBeExtensible();
  });
  describe('hex Getter', () => {
    it('should utilize seedRandom and hsluv.hsluvToHex', () => {
      const color = new Color('myString', { lightness: 50, saturation: 50 });
      color.hex;
      expect(hsluvToHex.mock.calls[0][0]).toEqual([270, 50, 50]);
    });
    it('should return the result of hsluv.hsluvToHex', () => {
      const color = new Color('myString', { lightness: 50, saturation: 50 });
      expect(color.hex).toEqual('#bada55');
    });
  });
});
