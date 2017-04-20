class ActivitySerializer < ActiveModel::Serializer
  attributes :name, :img_url, :rating, :address
end
