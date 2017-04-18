class TripsController < ApplicationController

  def create
    trip = Trip.new(trip_params)
    account = Account.from_token(params["token"])
    account.trips << trip

    if trip_params['friends'].length > 0
      trip_params['friends'].each do |f|
        account = Account.find(f.id)
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
  end

  def destroy
  end

  private

  def trip_params
    params.require(:trip).permit(:name, :lng, :lat, :formatted_name, :start_date, :end_date, :friends)
  end

end
