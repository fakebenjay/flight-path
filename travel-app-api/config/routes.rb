Rails.application.routes.draw do

  resources :trips, except: [:new, :edit] do
    resources :activities, except: [:new, :edit]
  end

  resources :registrations, only: :create
  resources :sessions, only: [:create, :destroy]
  post '/friends', to: 'accounts#friends'
  post '/mytrips', to: 'accounts#mytrips'
  post '/location', to: 'locations#location'

end
