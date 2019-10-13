Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  root "application#index"

  resources :roles, only: [:index, :create ,:update] do
  end

  resources :users, only: [:index, :create ] do
  end

end
