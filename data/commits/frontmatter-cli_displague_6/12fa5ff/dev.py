from pydash import set_
@cli.command(context_settings=dict(ignore_unknown_options=True))
        for key, value in extra_context.items():
            set_(post.metadata, key, value)