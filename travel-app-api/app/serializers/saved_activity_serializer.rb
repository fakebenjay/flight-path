class SavedActivitySerializer < ActiveModel::Serializer
  attributes :id, :name, :img_url, :rating, :address, :lng, :lat, :trip_id
end
