class CreateActivities < ActiveRecord::Migration[5.0]
  def change
    create_table :activities do |t|
      t.string :name
      t.decimal :lng
      t.decimal :lat
      t.text :img_url
      t.decimal :rating
      t.string :address
      t.references :trip, foreign_key: true

      t.timestamps
    end
  end
end
