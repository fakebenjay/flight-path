Rails.application.routes.draw do

  resources :registrations, only: :create
  resources :sessions, only: :create
  resources :accounts, only: :show do
    resources :trips, only: [:create, :show, :index, :update, :destroy] do
      resources :activities, only: [:create, :destroy] do
      resources :comments, only: [:create]
      end
    end
  end
  get '/set-account', to: 'accounts#set_account'
  get '/friends', to: 'accounts#friends'
  get '/location', to: 'locations#location'
  get '/searchactivities', to: 'activities#fetch'
  post '/accounts/:account_id/trips/:trip_id/leavetrip', to: 'trips#leave'
  post '/accounts/:account_id/trips/:trip_id/change-start-date', to: 'trips#change_start_date'
  post '/accounts/:account_id/trips/:trip_id/change-end-date', to: 'trips#change_end_date'


end
