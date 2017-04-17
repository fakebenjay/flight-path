class Trip < ApplicationRecord
  has_many :accounts
  has_many :activities
end
