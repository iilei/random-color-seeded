/* eslint-disable object-curly-newline */
import yargs from 'yargs';

import getArgv from './getArgv';

jest.mock('yargs', () => {
  const usageMock = jest.fn();
  const command = jest.fn();
  const option = jest.fn();
  const env = jest.fn();

  const yargsInterface = {
    usage: usageMock,
    command,
    option,
    env,
    argv: { foo: 23 },
  };

  usageMock.mockImplementation(() => yargsInterface);
  command.mockImplementation(() => yargsInterface);
  option.mockImplementation(() => yargsInterface);
  env.mockImplementation(() => yargsInterface);

  return yargsInterface;
});

describe('getArgv', () => {
  beforeEach(() => {
    yargs.usage.mockClear();
    yargs.command.mockClear();
    yargs.option.mockClear();
  });

  it('should export a function', () => {
    expect(getArgv).toBeFunction();
  });

  describe('executing the returned Function', () => {
    it('should invoke the `argv`getter on yargs', () => {
      expect(getArgv()).toEqual({ foo: 23 });
    });
  });

  describe('invoking `usage` of yargs', () => {
    getArgv();
    const args = yargs.usage.mock.calls[0];
    const [usage] = args;

    it('should pass a string', () => {
      expect(usage).toBeString();
      expect(usage.length).toBeGreaterThan(0);
    });
  });

  describe('1st invocation of `option` on yargs', () => {
    getArgv();
    const args = yargs.option.mock.calls[0];
    const [option, { alias, default: def, describe: descr, type }] = args;

    it('should pass `saturation` as the option name', () => {
      expect(option).toEqual('saturation');
    });

    it('should pass `s` as options.alias', () => {
      expect(alias).toEqual('s');
    });

    it('should provide a default "90"', () => {
      expect(def).toEqual(90);
    });

    it('should pass a string as options.describe', () => {
      expect(descr).toBeString();
      expect(descr.length).toBeGreaterThan(0);
    });

    it('should pass `string` as options.type', () => {
      expect(type).toEqual('number');
    });
  });

  describe('2nd invocation of `option` on yargs', () => {
    getArgv();
    const args = yargs.option.mock.calls[1];
    const [option, { alias, default: def, describe: descr, type }] = args;

    it('should pass `lightness` as the option name', () => {
      expect(option).toEqual('lightness');
    });

    it('should pass `l` as options.alias', () => {
      expect(alias).toEqual('l');
    });

    it('should provide a default "90"', () => {
      expect(def).toEqual(90);
    });

    it('should pass a string as options.describe', () => {
      expect(descr).toBeString();
      expect(descr.length).toBeGreaterThan(0);
    });

    it('should pass `string` as options.type', () => {
      expect(type).toEqual('number');
    });
  });

  describe('3rd invocation of `option` on yargs', () => {
    getArgv();
    const args = yargs.option.mock.calls[2];
    const [option, { alias, default: def, describe: descr, type, demandOption }] = args;

    it('should pass `seed` as the option name', () => {
      expect(option).toEqual('seed');
    });

    it('should pass `i` as options.alias', () => {
      expect(alias).toEqual('i');
    });

    it('should not provide a default', () => {
      expect(def).toBeUndefined();
    });

    it('should pass a string as options.describe', () => {
      expect(descr).toBeString();
      expect(descr.length).toBeGreaterThan(0);
    });

    it('should pass `string` as options.type', () => {
      expect(type).toEqual('string');
    });

    it('should not pass `true` as options.demandOption', () => {
      expect(demandOption).toBeFalsy();
    });
  });
});
