# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20170420202838) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "accounts", force: :cascade do |t|
    t.string   "username"
    t.string   "password_digest"
    t.string   "email"
    t.datetime "created_at",      null: false
    t.datetime "updated_at",      null: false
    t.index ["username"], name: "index_accounts_on_username", using: :btree
  end

  create_table "activities", force: :cascade do |t|
    t.string   "name"
    t.decimal  "lng"
    t.decimal  "lat"
    t.text     "img_url"
    t.decimal  "rating"
    t.string   "address"
    t.date     "date"
    t.integer  "trip_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["trip_id"], name: "index_activities_on_trip_id", using: :btree
  end

  create_table "comments", force: :cascade do |t|
    t.integer  "activity_id"
    t.integer  "account_id"
    t.datetime "created_at",  null: false
    t.datetime "updated_at",  null: false
    t.index ["account_id"], name: "index_comments_on_account_id", using: :btree
    t.index ["activity_id"], name: "index_comments_on_activity_id", using: :btree
  end

  create_table "planned_activities", force: :cascade do |t|
    t.integer "activity_id"
    t.integer "account_id"
    t.index ["account_id"], name: "index_planned_activities_on_account_id", using: :btree
    t.index ["activity_id"], name: "index_planned_activities_on_activity_id", using: :btree
  end

  create_table "planned_trips", force: :cascade do |t|
    t.integer "trip_id"
    t.integer "account_id"
    t.index ["account_id"], name: "index_planned_trips_on_account_id", using: :btree
    t.index ["trip_id"], name: "index_planned_trips_on_trip_id", using: :btree
  end

  create_table "trips", force: :cascade do |t|
    t.string   "name"
    t.decimal  "lng"
    t.decimal  "lat"
    t.string   "formatted_name"
    t.date     "start_date"
    t.date     "end_date"
    t.string   "img_url"
    t.string   "google_id"
    t.datetime "created_at",     null: false
    t.datetime "updated_at",     null: false
    t.index ["name"], name: "index_trips_on_name", using: :btree
  end

  add_foreign_key "activities", "trips"
  add_foreign_key "comments", "accounts"
  add_foreign_key "comments", "activities"
  add_foreign_key "planned_activities", "accounts"
  add_foreign_key "planned_activities", "activities"
  add_foreign_key "planned_trips", "accounts"
  add_foreign_key "planned_trips", "trips"
end
