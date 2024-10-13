      user = User.find_by(email: params[:email])
      if user&.authenticate(params[:password])
        session[:user_id] = user.id
        render json: { logged_in: true }, status: :ok
      else
        render json: { error: 'Invalid email or password' }, status: :unauthorized
      end