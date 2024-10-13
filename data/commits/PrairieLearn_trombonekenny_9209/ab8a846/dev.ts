    let authn_provider_debug;

    if ('debug' in req.query && res.locals.authn_provider_name === 'LTI 1.3') {
      authn_provider_debug = {
        debug: 'secret',
      };
    }
        authn_provider_debug,