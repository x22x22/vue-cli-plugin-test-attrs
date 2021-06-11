module.exports = function generateCompilerModule({ attrs }) {
  return {
    preTransformNode(astEl, options) {
      const { attrsMap, attrsList, tag, start, end } = astEl
      const path = require("path")
      let edspId = options.filename.replace(path.resolve('') + path.sep, "").replace(/\\/g, "-").replace(new RegExp("/", "g"), "-");
      edspId = `${edspId}-${tag}-${start}`
      const edspIdAttr = {
        name: "edsp-id", value: edspId
      }
      attrsList.splice(0, 0, edspIdAttr)
      return astEl
    },
  }
}
