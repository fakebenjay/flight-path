class Trip < ApplicationRecord
  has_many :planned_trips
  has_many :accounts, through: :planned_trips
  has_many :activities

  def retreive_lng_lat
    search_url = "https://maps.googleapis.com/maps/api/place/details/json?reference=#{self.google_id}&key=AIzaSyDOnb3A_Rz8r3FzCcQThWEN82lUQDGcLBA"
    response = RestClient.send("get", search_url)
    raw_data = JSON.parse(response)
    self.lat = raw_data["result"]["geometry"]["location"]["lat"]
    self.lng = raw_data["result"]["geometry"]["location"]["lng"]
  end

end
