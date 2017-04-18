class LocationsController < ApplicationController

  def location
    search_term = params["location"]["search_term"]
    location = Location.new_from_search(search_term)
    if location
      render json: location
    else
      render json: 'There was an error finding this address', status: 401
    end
  end

end
