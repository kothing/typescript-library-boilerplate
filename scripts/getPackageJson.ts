import fs from 'fs';
import path from 'path';

/**
 * A module to get package informations from package.json
 * @module getPackageJson
 * @param {...string} keys from package.json if no arguments passed it returns package.json content as object
 * @returns {object} with given keys or content of package.json as object
 */

const getPackageJson = function(...args: any[]) {
  const packageJSON = JSON.parse(fs.readFileSync(path.join(__dirname, '../package.json')).toString());
  if (!args.length) {
    return packageJSON;
  }
  return args.reduce((out, key) => {
    out[key] = packageJSON[key];
    return out;
  }, {});
};

export default getPackageJson;
