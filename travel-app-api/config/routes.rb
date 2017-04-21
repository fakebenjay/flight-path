Rails.application.routes.draw do

  resources :trips, except: [:new, :edit] do
    resources :activities, except: [:new, :edit] do
      resources :comments
    end
  end

  resources :registrations, only: :create
  resources :sessions, only: [:create, :destroy]
  post '/friends', to: 'accounts#friends'
  post '/mytrips', to: 'accounts#mytrips'
  post '/location', to: 'locations#location'
  post '/authorize', to: 'accounts#authorize'
  post '/fetchtrip', to: 'accounts#fetchtrip'
  post '/searchactivities', to: 'activities#fetch'
  post '/activities', to: 'activities#add'
end
