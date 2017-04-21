class TripSerializer < ActiveModel::Serializer
  attributes :id, :name, :lng, :lat, :formatted_name, :start_date, :end_date, :google_id, :accounts
  has_many :activities
end
