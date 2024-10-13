   # config/routes.rb
   Rails.application.routes.draw do
     post '/users', to: 'users#create'
   end