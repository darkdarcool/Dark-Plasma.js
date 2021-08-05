import jsx from 'react-jsx'
import fs from 'fs'
import chalk from 'chalk'

export default function render(fp, variables) {
  let template = fs.readFileSync(fp, 'utf-8');
  try {
    let client = jsx.server(template);
    return client(variables, {html: true}); // Delete the html true part for plain props
  } catch (err) {
    err = `${err}`
    err = err.split("at Parser.pp$5.raise"); // Just where to split!
    let o = err;
    let reason = o[0].split('\n')[0]
    // reason = err[0].split('\n')[0]
    let code = err[0]
    console.log(chalk.red.bold(reason))
    process.exit(0)
  }
}