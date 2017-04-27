class LocationsController < ApplicationController
    skip_before_action :authenticate

  def location
    search_term = params["query"]
    locations = Location.new_from_search(search_term)
    if locations
      render json: locations
    else
      render json: 'There was an error finding this address', status: 401
    end
  end

end
