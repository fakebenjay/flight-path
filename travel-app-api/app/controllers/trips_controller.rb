class TripsController < ApplicationController

  def create
    trip = Trip.new(trip_params)
    trip.retreive_lng_lat_img_url
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

  def update
    account = Account.find(trip_params["friend_id"])
    trip = Trip.find(trip_params["id"])
    trip.accounts << account
    render json: trip, serializer: TripSerializer
  end

  def change_date
    account = Account.from_token(params["token"])
    if account
      trip = Trip.find(params["trip_id"])
      if trip
        if params["end_date"]
          if trip.update(end_date: params["end_date"])
            render json: trip, serializer: TripSerializer
          else
            render json: "There was an error updating the end date", status: 401
          end
        else
          if trip.update(start_date: params["start_date"])
            render json: trip, serializer: TripSerializer
          else
            render json: "There was an error updating the start date", status: 401
          end
        end
      else
        render json: "We could not locate this trip", status: 401
      end
    else
      render json: 'You are not permitted to update this trip', status:401
    end
  end

  def leave
    account = Account.from_token(params["token"])
    if account
      trip = Trip.find(params["trip_id"])
      if trip.creator_id == account.id
        trip.creator_id = trip.accounts[1].id
        trip.accounts.delete(account)
      else
        trip.accounts.delete(account)
      end
    else
      render json: "You are not permitted to leave this trip", status: 401
    end
  end

  def delete
    account = Account.from_token(params["token"])
    byebug
    if account
      trip = Trip.find(params["trip_id"])
      if trip
        trip.destroy
      else
        render json: "We could not locate this trip", status: 401
      end
    else
      render json: "You are not permitted to leave this trip", status: 401
    end
  end

  private

  def trip_params
    params.require(:trip).permit(:name, :lng, :lat, :formatted_name, :start_date, :end_date, :img_url, :google_id, :id, :friend_id, :creator_id)
  end

end
