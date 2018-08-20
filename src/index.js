import Color from './Color';
import getArgv from './getArgv';

const {
  saturation,
  lightness,
  seed,
} = getArgv();

const opts = {
  saturation,
  lightness,
  seed,
};

const color = new Color(opts.seed, { saturation, lightness });

process.stdout.write(color.hex);
