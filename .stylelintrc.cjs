module.exports = {
  customSyntax: 'postcss-html',
  extends: [
    'stylelint-config-standard-scss',
    'stylelint-config-recess-order',
    'stylelint-config-prettier'
  ],
  plugins: [],
  rules: {
    'scss/at-rule-no-unknown': true,
    'scss/comment-no-empty': null,
    'block-no-empty': null,
    'number-leading-zero': null,
    'color-hex-length': 'short',
    'color-no-invalid-hex': true,
    'length-zero-no-unit': true,
    'media-feature-name-no-vendor-prefix': true,
    'shorthand-property-no-redundant-values': true,
    'no-invalid-position-at-import-rule': null,
    'no-irregular-whitespace': null,
    'selector-class-pattern': null,
    'property-no-unknown': null,
    'declaration-block-trailing-semicolon': null,
    'selector-pseudo-class-no-unknown': null
  }
}
