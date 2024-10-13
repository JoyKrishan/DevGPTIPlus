   # app/controllers/users_controller.rb
   class UsersController < ApplicationController
     def create
       user = User.find_or_initialize_by(email: user_params[:email])
       if user.update(user_params)
         render json: user, status: :created
       else
         render json: user.errors, status: :unprocessable_entity
       end
     end

     private

     def user_params
       params.require(:user).permit(:email, :name)
     end
   end