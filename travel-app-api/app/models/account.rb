class Account < ApplicationRecord
  has_many :trips
  has_many :activities, through: :trips
end
