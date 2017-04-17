class Activity < ApplicationRecord
  belongs_to :trip
  has_many :planned_activities
  has_many :accounts, through: :planned_activities
end
