class Trip < ApplicationRecord
  has_many :planned_trips
  has_many :accounts, through: :planned_trips
  has_many :activities
end
