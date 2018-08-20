import { mockProcessStdout } from 'jest-mock-process';
import { hsluvToHex } from 'hsluv';
import seedrandom from 'seedrandom';

jest.mock('seedrandom', () => {
  return jest.fn((seed) => () => {
    return (({ ebba: 0.1 })[seed] || 0.3);
  });
});

jest.mock('hsluv', () => ({
  __esModule: true,
  hsluvToHex: jest.fn(({ 0: h, 1: s, 2: l }) => `${h}E${s}F${l}`),
}));

jest.mock('./getArgv');
const mockStdout = mockProcessStdout();

const getArgv = require('./getArgv');

getArgv.default = jest.fn(() => ({ seed: 'ebba', lightness: 4, saturation: 2 }));

describe('index', () => {
  require('./index');
  it('should call getArgv', () => {
    expect(getArgv.default).toBeCalled();
    expect(mockStdout).toHaveBeenCalledWith('36E4F2');
  });
});
