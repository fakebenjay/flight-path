class CreateTrips < ActiveRecord::Migration[5.0]
  def change
    create_table :trips do |t|
      t.string :name
      t.decimal :lng
      t.decimal :lat
      t.string :location
      t.date :start_date
      t.date :end_date
      t.int :google_id

      t.timestamps
    end
  end
end
