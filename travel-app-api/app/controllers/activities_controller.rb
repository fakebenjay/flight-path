class ActivitiesController < ApplicationController

  def create
  end

  def index
  end

  def show
  end

  def update
  end

  def destroy
  end

  def fetch
    radius = params["activity"]["radius"]
    keyword = params["activity"]["keyword"]
    lat = params["activity"]["lat"]
    lng = params["activity"]["lng"]
    trip_id = params["activity"]["id"]
    activities = Activity.new_from_search(keyword, radius, lng, lat, trip_id)
    render json: activities, each_serializer: ActivitySearchSerializer
  end


end
