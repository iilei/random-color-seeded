/* eslint-disable global-require */
const getArgv = () => require('yargs')
  .command('$0 <seed>', 'Generate a random Color with seed')
  .usage('Usage: npm start [options]')
  // env:
  // If this method is called with no argument or with an empty string or with true,
  // then all env vars will be applied to argv.
  .env('')
  .option('saturation', {
    alias: 's',
    default: 90,
    describe: 'Saturation',
    // type: array / boolean / count / number / string
    type: 'number',
  })
  .option('lightness', {
    alias: 'l',
    default: 90,
    describe: 'Lightness',
    // type: array / boolean / count / number / string
    type: 'number',
  })
  .option('seed', {
    alias: 'i',
    demandOption: true,
    describe: 'Seed Input',
    // type: array / boolean / count / number / string
    type: 'string',
  })
  .argv;

export default getArgv;
