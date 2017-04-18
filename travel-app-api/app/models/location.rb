class Location

  def initialize(formatted_name, lat, lng)
    @formatted_name = formatted_name
    @lat = lat
    @lng = lng
  end

  def self.new_from_search(search_term)
    url = "https://maps.googleapis.com/maps/api/geocode/json?address=#{search_term}&key=AIzaSyDKctmGykKUI2sTuv_ipJ6bz9wO-WMQ4NA"
    response = RestClient.send("get", url)
    raw_data = JSON.parse(response)
    formatted_name = raw_data["results"][0]["formatted_address"]
    lat = raw_data["results"][0]["geometry"]["location"]["lat"]
    lng = raw_data["results"][0]["geometry"]["location"]["lng"]
    Location.new(formatted_name, lat, lng)
  end


end
