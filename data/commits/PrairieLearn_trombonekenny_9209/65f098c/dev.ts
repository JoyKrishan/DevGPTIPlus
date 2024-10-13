import hljs from 'highlight.js';
    const debug = {
      debug: 'secret',
    };

    if ('debug' in req.query && res.locals.authn_provider_name === 'dev') {
      authn_provider_debug = hljs.highlight(JSON.stringify(debug, null, 2), { language: 'json'}).value