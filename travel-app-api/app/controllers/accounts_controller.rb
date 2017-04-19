class AccountsController < ApplicationController

  def friends
    search_term = params["search_term"].downcase
    accounts = Account.where('lower(username) LIKE ? ', "%#{search_term}%").limit(10)
    if accounts
      render json: accounts, each_serializer: AccountSerializer
    else
      render json: 'No Accounts Found'
    end
  end

  def mytrips
    token = params["token"]
    account = Account.from_token(token)
    trips = account.trips
    render json: trips, each_serialzer: TripSerializer
  end

  def authorize
    token = params["token"]
    account = Account.from_token(token)
    render json: account, serializer: AccountSerializer
  end

end
