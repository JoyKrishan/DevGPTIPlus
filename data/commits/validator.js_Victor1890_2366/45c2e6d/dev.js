
    test({
      validator: 'isPassportNumber',
      args: ['DO'],
      valid: [
        'RD1234567',
        'RD3234107',
      ],
      invalid: [
        'SD1234567',
        'RH0254567',
      ],
    });