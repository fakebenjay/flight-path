Rails.application.routes.draw do

  # Confirmed
  resources :registrations, only: :create
  resources :sessions, only: :create

  # Review
  resources :trips, only: [:create, :update] do
    resources :activities, except: [:new, :edit] do
      resources :comments, only: [:create]
    end
  end
  resources :activities, only: :create

  post '/friends', to: 'accounts#friends'
  post '/mytrips', to: 'accounts#mytrips'
  post '/location', to: 'locations#location'
  get '/set-account', to: 'accounts#set_account'
  post '/fetchtrip', to: 'accounts#fetchtrip'
  post '/searchactivities', to: 'activities#fetch'
  post '/change-date', to: 'trips#change_date'
  post '/leavetrip', to: 'trips#leave'
  post '/deletetrip', to: 'trips#delete'
end
