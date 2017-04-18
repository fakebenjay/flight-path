class PlannedActivity < ApplicationRecord
  belongs_to :activity
  belongs_to :account
end
