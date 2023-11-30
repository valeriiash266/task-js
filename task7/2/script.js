function convertToHex(r, g, b) {
    const toHex = (val) => {
        const hex = val.toString(16);
        return hex.length === 1 ? "0" + hex : hex;
    };

    const hexR = toHex(r);
    const hexG = toHex(g);
    const hexB = toHex(b);

    return `#${hexR}${hexG}${hexB}`;
}


console.log(convertToHex(255, 127, 64));
