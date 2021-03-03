const AliasRegEx = /^[a-z0-9_-]{0,15}$/;
const isValidAlias = (alias) => AliasRegEx.test(alias);

module.exports = { isValidAlias };
