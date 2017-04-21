class TripsController < ApplicationController

  def create
    trip = Trip.new(trip_params)
    trip.retreive_lng_lat
    account = Account.from_token(params["token"])
    friends = params["friends"]
    account.trips << trip
    if friends.length > 0
      friends.each do |f|
        account = Account.find(f)
        account.trips << trip
      end
    end
    if trip.save
      render json: trip, serializer: TripSerializer
    else
      render json: 'There was an error creating your trip', status: 401
    end
  end

  def index
  end

  def show
  end

  def update
    account = Account.find(trip_params["friend_id"])
    trip = Trip.find(trip_params["id"])
    trip.accounts << account
    render json: trip, serializer: TripSerializer
  end

  def destroy
  end

  private

  def trip_params
    params.require(:trip).permit(:name, :lng, :lat, :formatted_name, :start_date, :end_date, :img_url, :google_id, :id, :friend_id)
  end

end
