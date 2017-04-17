class TripDashboardSerializer < ActiveModel::Serializer
  attributes :id, :name, :location, :start_date, :end_date
end
