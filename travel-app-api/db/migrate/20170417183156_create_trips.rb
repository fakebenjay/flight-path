class CreateTrips < ActiveRecord::Migration[5.0]
  def change
    create_table :trips do |t|
      t.string :name, index: true
      t.decimal :lng
      t.decimal :lat
      t.string :formatted_name
      t.date :start_date
      t.date :end_date
      t.timestamps
    end
  end
end
