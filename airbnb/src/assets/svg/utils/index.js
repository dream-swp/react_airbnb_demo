function styleStrToObject(str) {
    const obj = {};
    if (!str) return obj;

    // 1. 将字符串按分号拆分成独立的 CSS 属性声明
    const pairs = str.split(';');

    for (let i = 0; i < pairs.length; i++) {
        const pair = pairs[i].trim();
        // 忽略空字符串
        if (!pair) continue;

        // 2. 找到第一个冒号的位置（关键：避免破坏 rgb(255, 255, 255) 里的内容）
        const index = pair.indexOf(':');
        if (index === -1) continue;

        // 3. 提取 key 和 value
        let key = pair.substring(0, index).trim();
        let value = pair.substring(index + 1).trim();

        // 4. 将 key 转成驼峰命名（如 fill-rule -> fillRule）
        key = key.replace(/-(.)/g, function (m, g) {
            return g.toUpperCase();
        });

        // 5. 赋值
        obj[key] = value;
    }

    return obj;
}

export {
    styleStrToObject,
}