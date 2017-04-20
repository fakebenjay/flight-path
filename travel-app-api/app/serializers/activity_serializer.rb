class ActivitySerializer < ActiveModel::Serializer
  attributes :name, :img_url, :rating, :address, :trip_id, :lng, :lat
end
