from routes import blueprints, user_routes
for bp in blueprints:
    app.register_blueprint(bp)
            user_routes.create_user(user_id)
        result = user_routes.get_user(user_id)