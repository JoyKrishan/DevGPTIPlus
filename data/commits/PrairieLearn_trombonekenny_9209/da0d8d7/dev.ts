      authn_provider_debug = `Authenticated LTI 1.3 instance ID: ${req.session.authn_lti13_instance_id}\n`;
      authn_provider_debug += hljs.highlight(
        JSON.stringify(req.session.lti13_claims ?? {}, null, 2),
        {
          language: 'json',
        },
      ).value;