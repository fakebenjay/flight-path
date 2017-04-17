class CreateAccounts < ActiveRecord::Migration[5.0]
  def change
    create_table :accounts do |t|
      t.string :username, index: true
      t.string :password_digest
      t.string :email

      t.timestamps
    end
  end
end
