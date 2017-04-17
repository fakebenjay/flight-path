class Account < ApplicationRecord
  has_many :planned_trips
  has_many :trips, through: :planned_trips
  has_many :planned_activities
  has_many :activities, through: :planned_activities
  has_secure_password
end
