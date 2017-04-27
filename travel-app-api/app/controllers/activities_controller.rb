class ActivitiesController < ApplicationController
  before_action :authenticate

  def create
      activity = Activity.new
      activity.name = params["name"]
      activity.lng = params["lng"]
      activity.lat = params["lat"]
      activity.img_url = params["img_url"]
      activity.rating = params["rating"]
      activity.address = params["address"]
      trip_id = params["trip_id"]
      activity.trip = Trip.find(trip_id)
      if activity.save
        render json: activity, serializer: ActivitySerializer
      else
        render json: "There was an issue saving this activity", status: 401
      end
  end

  def fetch
    radius = params["radius"].to_i * 1000
    keyword = params["keyword"]
    lat = params["lat"]
    lng = params["lng"]
    trip_id = params["id"]
    activities = Activity.new_from_search(keyword, radius, lng, lat, trip_id)
    render json: activities, each_serializer: ActivitySerializer
  end

  def destroy
    activity = Activity.find(params['id'])
    if activity
      activity.destroy
    else
      render json: "Could not locate activity", status: 401
    end 
  end

  private

  def activity_params
    params.require(:activity).permit(:id, :name, :lng, :lat, :img_url, :rating, :address)
    # render json:
  end

end
