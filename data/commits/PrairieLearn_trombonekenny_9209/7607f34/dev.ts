      authn_provider_debug = hljs.highlight(JSON.stringify(req.session.lti13_claims ?? {}, null, 2), {
        language: 'json',
      }).value;