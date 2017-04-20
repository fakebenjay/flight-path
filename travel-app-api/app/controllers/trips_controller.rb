class TripsController < ApplicationController

  def create
    trip = Trip.new(trip_params)
    trip.img_url = "https://maps.googleapis.com/maps/api/place/photo?maxwidth=1600&photoreference=CjQlAAAAcA47e9YZxUJJn2iZbALoJStN9Ay-384r2MfyXY1-FzmHVaBjylR64jHgXUcMXc4GEhCpkhioyfypaeX6oZJHVq32GhQsyvRUrLwHcgnt5ymzUKCZ8kX67Q&key=AIzaSyDKctmGykKUI2sTuv_ipJ6bz9wO-WMQ4NA"
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
  end

  def destroy
  end

  private

  def trip_params
    params.require(:trip).permit(:name, :lng, :lat, :formatted_name, :start_date, :end_date, :google_id)
  end

end
