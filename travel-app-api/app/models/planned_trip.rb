class PlannedTrip < ApplicationRecord
  belongs_to :trip
  belongs_to :account
end
