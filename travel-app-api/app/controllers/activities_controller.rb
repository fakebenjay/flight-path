class ActivitiesController < ApplicationController

  def add
    activity = Activity.new
    activity.name = params["activity"]["name"]
    activity.lng = params["activity"]["lng"]
    activity.lat = params["activity"]["lat"]
    activity.img_url = params["activity"]["img_url"]
    activity.rating = params["activity"]["rating"]
    activity.address = params["activity"]["address"]
    trip_id = params["activity"]["trip_id"]
    activity.trip = Trip.find(trip_id)
    if activity.save
      render json: activity, serializer: SavedActivitySerializer
    else
      render json: "There was an issue saving this activity", status: 401
    end 
  end

  def fetch
    radius = params["activity"]["radius"] * 1000
    keyword = params["activity"]["keyword"]
    lat = params["activity"]["lat"]
    lng = params["activity"]["lng"]
    trip_id = params["activity"]["id"]
    activities = Activity.new_from_search(keyword, radius, lng, lat, trip_id)
    render json: activities, each_serializer: ActivitySerializer
  end

  private

  def activity_params
    params.require(:activity).permit(:name, :lng, :lat, :img_url, :rating, :address)
  end

end
