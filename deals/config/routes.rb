Rails.application.routes.draw do
  # get 'wishlists/index'

  # get 'wishlists/create'

  # get 'wishlists/update'

  # get 'wishlists/destroy'

  # get 'app_users/index'

  # get 'app_users/create'

  # get 'app_users/update'

  # get 'app_users/destroy'

  get 'app_users', to: 'app_users#index'
  post 'app_users', to: 'app_users#create'
  put 'app_users/:id', to: 'app_users#update'
  delete 'app_users/:id', to: 'app_users#destroy'

  get 'wishlists', to: 'wishlists#index'
  post 'wishlists', to: 'wishlists#create'
  put 'wishlists/:id', to: 'wishlists#update'
  delete 'wishlists/:id', to: 'wishlists#destroy'

  post 'authenticate' => 'auth#authenticate'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end




