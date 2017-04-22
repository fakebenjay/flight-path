Rails.application.routes.draw do

  resources :trips, only: [:create, :update] do
    resources :activities, except: [:new, :edit] do
      resources :comments, only: [:create]
    end
  end
  resources :activities, only: :create
  resources :registrations, only: :create
  resources :sessions, only: [:create, :destroy]
  post '/friends', to: 'accounts#friends'
  post '/mytrips', to: 'accounts#mytrips'
  post '/location', to: 'locations#location'
  post '/authorize', to: 'accounts#authorize'
  post '/fetchtrip', to: 'accounts#fetchtrip'
  post '/searchactivities', to: 'activities#fetch'
  post '/change-date', to: 'trips#change_date'
end
