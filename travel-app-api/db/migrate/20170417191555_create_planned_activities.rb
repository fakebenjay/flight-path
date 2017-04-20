class CreatePlannedActivities < ActiveRecord::Migration[5.0]
  def change
    create_table :planned_activities do |t|
      t.references :activity, foreign_key: true
      t.references :account, foreign_key: true
      t.date :date
    end
  end
end
