// node_modules/@angular/cdk/fesm2022/css-pixel-value-447bbfe8.mjs
function coerceCssPixelValue(value) {
  if (value == null) {
    return "";
  }
  return typeof value === "string" ? value : `${value}px`;
}

// node_modules/@angular/cdk/fesm2022/coercion.mjs
function coerceBooleanProperty(value) {
  return value != null && `${value}` !== "false";
}

export {
  coerceCssPixelValue,
  coerceBooleanProperty
};
//# sourceMappingURL=chunk-QEGPYYQA.js.map
