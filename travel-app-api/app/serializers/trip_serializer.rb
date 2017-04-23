class TripSerializer < ActiveModel::Serializer
  attributes :id, :name, :lng, :lat, :formatted_name, :start_date, :end_date, :google_id, :accounts, :creator_id, :img_url
  has_many :activities
end
