Rails.application.routes.draw do
  resources :items
  namespace :api do
    namespace :v1 do
      post '/login', to: 'users#login'
<<<<<<< HEAD
      get '/users/:id/guesses', to: 'users#guesses'
      resources :users
=======
      resources :users 
>>>>>>> edit_fetch
      resources :guesses
    end
  end
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
