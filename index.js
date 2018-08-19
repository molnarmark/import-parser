// Props to https://gist.github.com/pilwon/ff55634a29bb4456e0dd
const ES6_IMPORT_REGEX = /\bimport\s+(?:.+\s+from\s+)?[\'"]([^"\']+)["\']/g;
const ES6_INDIVIDUAL_IMPORT_REGEX = /\bimport(\s+(?:).+\s+from\s+)?[\'"]([^"\']+)["\']/;
const CLEAR_REGEX = /{|}|from| /g;

function parseImport(rawImport) {
  const groups = ES6_INDIVIDUAL_IMPORT_REGEX.exec(rawImport);
  const [, imports, modulePath] = groups;
  const clearedImportList = imports.replace(CLEAR_REGEX, '').split(',');
  return {
    originalMatch: rawImport,
    modulePath,
    importList: clearedImportList,
  };
}

module.exports = function ImportParser(string) {
  return string.match(ES6_IMPORT_REGEX).map(parseImport);
};
