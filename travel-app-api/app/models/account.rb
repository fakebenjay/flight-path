class Account < ApplicationRecord
  has_many :planned_trips
  has_many :trips, through: :planned_trips
  has_many :planned_activities
  has_many :activities, through: :planned_activities
  has_many :comments
  validates :username, uniqueness: true, presence: true
  validates :password, length: { minimum: 6}
  validates :email, presence: true, uniqueness: true,  format: { with: /\A([^@\s]+)@((?:[-a-z0-9]+\.)+[a-z]{2,})\z/i, on: :create }
  has_secure_password

  def self.from_token(token)
    account_id = Auth.decode(token)[0]["account_id"]
    Account.find(account_id)
  end

end
