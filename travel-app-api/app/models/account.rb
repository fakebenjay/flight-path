class Account < ApplicationRecord
  has_many :planned_trips
  has_many :trips, through: :planned_trips
  has_many :planned_activities
  has_many :activities, through: :planned_activities
  has_many :comments
  validates :username, uniqueness: true
  validates :password, length: { minimum: 6}
  has_secure_password

  def self.from_token(token)
    account_id = Auth.decode(token)[0]["account_id"]
    Account.find(account_id)
  end

end
