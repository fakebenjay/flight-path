class TripsController < ApplicationController
  before_action :authenticate

  def create
    byebug
    trip = Trip.new(trip_params)
    trip.retrieve_lng_lat_and_img_url
    trip.creator_id = @account.id
    @account.trips << trip
    friends = params["friends"]
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
    trips = @account.trips
    render json: trips, each_serialzer: TripSerializer
  end

  def show
    trip_id = params["id"]
    trip = Trip.find(trip_id)
    render json: trip, serialzer: TripSerializer
  end

  def update
    account = Account.find(params["friend_id"])
    trip = Trip.find(params["id"])
    if !trip.accounts.include?(account)
      trip.accounts << account
    end
    render json: trip, serializer: TripSerializer
  end

  def change_start_date
      trip = Trip.find(params["trip_id"])
      if trip
          if trip.update(start_date: params["start_date"])
            render json: trip, serializer: TripSerializer
          else
            render json: "There was an error updating the end date", status: 401
          end
      else
        render json: "Could not locate the trip", status: 401
      end
  end

  def change_end_date
      trip = Trip.find(params["trip_id"])
      if trip
          if trip.update(end_date: params["end_date"])
            render json: trip, serializer: TripSerializer
          else
            render json: "There was an error updating the end date", status: 401
          end
      else
        render json: "Could not locate the trip", status: 401
      end
  end

  def leave
      trip = Trip.find(params["trip_id"])
      if trip
        if params["new_owner"] != ''
          new_owner = Account.find_by(username: params["new_owner"])
          trip.creator_id = new_owner.id
          trip.save
          trip.accounts.delete(@account)
        else
          trip.accounts.delete(@account)
        end
      else
        render json: "Could not locate trip", status: 401
      end
  end

  def destroy
      trip = Trip.find(params["id"])
      if trip
        trip.destroy
      else
        render json: "We could not locate this trip", status: 401
      end
  end

  private

  def trip_params
    params.require(:trip).permit(:name, :lng, :lat, :formatted_name, :start_date, :end_date, :img_url, :google_id, :id, :friend_id, :creator_id)
  end

end
