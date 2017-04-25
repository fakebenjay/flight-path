class Activity < ApplicationRecord
  belongs_to :trip
  has_many :planned_activities
  has_many :accounts, through: :planned_activities
  has_many :comments, :dependent => :destroy

  def self.new_from_search(keyword, radius, lng, lat, trip_id)
    url = "https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=#{lat},#{lng}&radius=#{radius}&keyword=#{keyword}&type=point_of_interest&rankBy=prominence&key=#{ENV["google_api_key"]}"
    response = RestClient.send("get", url)
    raw_data = JSON.parse(response)
    trip = Trip.find(trip_id)
    raw_data["results"].map do |r|
      activity = Activity.new
      activity.trip = trip
      activity.name = r["name"]
      activity.lat = r["geometry"]["location"]["lat"]
      activity.lng = r["geometry"]["location"]["lng"]
      if r['photos']
        activity.img_url = "https://maps.googleapis.com/maps/api/place/photo?maxwidth=1600&photoreference=#{r['photos'][0]['photo_reference']}&key=#{ENV["google_api_key"]}"
      else
        activity.img_url = 'http://pc104.org/wp-content/plugins/userpro/img/placeholder.jpg'
      end
      activity.rating = r["rating"]
      activity.address = r["vicinity"]
      activity
    end
  end

end
