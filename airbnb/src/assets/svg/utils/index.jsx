function styleStrToObject(str) {
  const obj = {}
  // 1. 将字符串统一转小写
  let s = str.toLowerCase()
    // 2. 将连字符转为驼峰，例如 fill-rule -> fillRule
    .replace(/-(.)/g, function (m, g) {
      return g.toUpperCase()
    })
    // 3. 把逗号也当作分隔符替换为分号
    .replace(/,/g, ';')
    // 4. 替换掉末尾的分号
    .replace(/;\s?$/g, "")
    // 5. 按冒号或分号拆分
    .split(/:|;/g)

  for (var i = 0; i < s.length; i += 2) {
    // 增加容错判断，防止 s[i] 或 s[i+1] 为 undefined
    if (s[i] && s[i + 1]) {
      obj[s[i].replace(/\s/g, "")] = s[i + 1].replace(/^\s+|\s+$/g, "")
    }
  }
  return obj
}


export  {
  styleStrToObject,
}
