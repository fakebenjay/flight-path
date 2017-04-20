class AccountsController < ApplicationController

  def friends
    account = Account.from_token(params["token"])
    search_term = params["search_term"].downcase
    accounts = Account.where('lower(username) LIKE ? ', "%#{search_term}%").where('id != ?', "%#{account.id}%").limit(10)
    if accounts
      render json: accounts, each_serializer: AccountSerializer
    else
      render json: 'No Accounts Found'
    end
  end

  def mytrips
    token = params["token"]
    account = Account.from_token(token)
    if account
      trips = account.trips
      render json: trips, each_serialzer: TripSerializer
    else
      render json: "Not Permitted", status: 401
    end
  end

  def fetchtrip
    trip_id = params["trip_id"]
    trip = Trip.find(trip_id)
    render json: trip, serialzer: TripSerializer
  end

  def authorize
    token = params["token"]
    account = Account.from_token(token)
    render json: account, serializer: AccountSerializer
  end

end
