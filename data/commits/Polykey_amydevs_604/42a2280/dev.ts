    // This has to be done in case the key is `__proto__`.
    // Otherwise, the object will not be correctly serialized.
    // https://github.com/MatrixAI/Polykey/issues/608
    Object.defineProperty(providerTokens, identityId, {
      value: providerToken,
      writable: true,
      enumerable: true,
      configurable: true,
    });