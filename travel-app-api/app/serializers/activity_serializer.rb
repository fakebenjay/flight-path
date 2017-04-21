class ActivitySerializer < ActiveModel::Serializer
  attributes :id, :name, :img_url, :rating, :address, :comments, :trip_id
end
