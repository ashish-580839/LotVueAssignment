Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  root "application#index"

  resources :roles, only: [:index, :create ,:update] do
  end

  resources :users, only: [:index, :create ,:update, :show] do
    member do
      post :add_image
    end
  end

  resources :user_metas, only: [:index, :create, :update, :destroy ] do
  end

end
