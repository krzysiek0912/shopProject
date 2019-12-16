function sha256(string) {
  let ascii = string;
  function rightRotate(value, amount) {
    return (value >>> amount) | (value << (32 - amount)); // eslint-disable-line no-bitwise
  }

  const maxWord = 2 ** 32;
  const lengthProperty = 'length';
  let i;
  let j; // Used as a counter across the whole file
  let result = '';

  const words = [];
  const asciiBitLength = ascii[lengthProperty] * 8;

  //* caching results is optional - remove/add slash from front of this line to toggle
  // Initial hash value: first 32 bits of the fractional parts of the square roots of the first 8 primes
  // (we actually calculate the first 64, but extra values are just ignored)
  let hash = sha256.h ? sha256.h : [];
  // Round constants: first 32 bits of the fractional parts of the cube roots of the first 64 primes
  const k = sha256.h ? sha256.h : [];
  let primeCounter = k[lengthProperty];
  /* /
	var hash = [], k = [];
	var primeCounter = 0;
	// */

  const isComposite = {};
  for (let candidate = 2; primeCounter < 64; candidate++) {
    if (!isComposite[candidate]) {
      for (i = 0; i < 313; i += candidate) {
        isComposite[i] = candidate;
      }
      hash[primeCounter] = (candidate ** 0.5 * maxWord) | 0; // eslint-disable-line no-bitwise
      k[primeCounter++] = (candidate ** (1 / 3) * maxWord) | 0; // eslint-disable-line no-bitwise
    }
  }

  ascii += '\x80'; // Append Ƈ' bit (plus zero padding)
  while ((ascii[lengthProperty] % 64) - 56) ascii += '\x00'; // More zero padding
  for (i = 0; i < ascii[lengthProperty]; i++) {
    j = ascii.charCodeAt(i);
    if (!(j >> 8)) words[i >> 2] |= j << (((3 - i) % 4) * 8); // eslint-disable-line no-bitwise
  }
  words[words[lengthProperty]] = (asciiBitLength / maxWord) | 0; // eslint-disable-line no-bitwise
  words[words[lengthProperty]] = asciiBitLength;

  // process each chunk
  for (j = 0; j < words[lengthProperty]; ) {
    const w = words.slice(j, (j += 16)); // The message is expanded into 64 words as part of the iteration
    const oldHash = hash;
    // This is now the undefinedworking hash", often labelled as variables a...g
    // (we have to truncate as well, otherwise extra entries at the end accumulate
    hash = hash.slice(0, 8);

    for (i = 0; i < 64; i++) {
      // Expand the message into 64 words
      // Used below if
      const w15 = w[i - 15];
      const w2 = w[i - 2];

      // Iterate
      const a = hash[0];
      const e = hash[4];
      const temp1 =
        hash[7] +
        (rightRotate(e, 6) ^ rightRotate(e, 11) ^ rightRotate(e, 25)) + // eslint-disable-line no-bitwise
        ((e & hash[5]) ^ (~e & hash[6])) + // eslint-disable-line no-bitwise
        k[i] +
        // Expand the message schedule if needed
        (w[i] =
          i < 16
            ? w[i]
            : (w[i - 16] + // eslint-disable-line no-bitwise
              (rightRotate(w15, 7) ^ rightRotate(w15, 18) ^ (w15 >>> 3)) + // eslint-disable-line no-bitwise
              w[i - 7] + // eslint-disable-line no-bitwise
                (rightRotate(w2, 17) ^ // eslint-disable-line no-bitwise
                rightRotate(w2, 19) ^ // eslint-disable-line no-bitwise
                  (w2 >>> 10))) | // eslint-disable-line no-bitwise
              0); // eslint-disable-line no-bitwise
      // This is only used once, so *could* be moved below, but it only saves 4 bytes and makes things unreadble
      const temp2 =
        (rightRotate(a, 2) ^ rightRotate(a, 13) ^ rightRotate(a, 22)) + // eslint-disable-line no-bitwise
        ((a & hash[1]) ^ (a & hash[2]) ^ (hash[1] & hash[2])); // eslint-disable-line no-bitwise

      hash = [(temp1 + temp2) | 0].concat(hash); // eslint-disable-line no-bitwise
      // We don't bother trimming off the extra ones, they're harmless as long as we're truncating when we do the slice()
      hash[4] = (hash[4] + temp1) | 0; // eslint-disable-line no-bitwise
    }

    for (i = 0; i < 8; i++) {
      hash[i] = (hash[i] + oldHash[i]) | 0; // eslint-disable-line no-bitwise
    }
  }

  for (i = 0; i < 8; i++) {
    for (j = 3; j + 1; j--) {
      const b = (hash[i] >> (j * 8)) & 255; // eslint-disable-line no-bitwise
      result += (b < 16 ? 0 : '') + b.toString(16);
    }
  }
  return result; // eslint-disable-consistent-return
}

export default sha256;
