class Trip < ApplicationRecord
  has_many :planned_trips
  has_many :accounts, through: :planned_trips
  has_many :activities

  def retreive_lng_lat_img_url
    search_url = "https://maps.googleapis.com/maps/api/place/details/json?reference=#{self.google_id}&key=AIzaSyDOnb3A_Rz8r3FzCcQThWEN82lUQDGcLBA"
    response = RestClient.send("get", search_url)
    raw_data = JSON.parse(response)
    self.lat = raw_data["result"]["geometry"]["location"]["lat"]
    self.lng = raw_data["result"]["geometry"]["location"]["lng"]
    img_search_url = "https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=#{self.lat},#{self.lng}&radius=50000&rankBy=prominence&key=AIzaSyDKctmGykKUI2sTuv_ipJ6bz9wO-WMQ4NA"
    img_response = RestClient.send("get", img_search_url)
    img_data = JSON.parse(img_response)
    photo_ref = img_data["results"][0]["photos"][0]["photo_reference"]
    self.img_url = "https://maps.googleapis.com/maps/api/place/photo?maxwidth=1600&photoreference=#{photo_ref}&key=AIzaSyDKctmGykKUI2sTuv_ipJ6bz9wO-WMQ4NA"
  end

end
