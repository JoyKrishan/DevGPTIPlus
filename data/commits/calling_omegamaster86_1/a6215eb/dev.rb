ActiveRecord::Schema.define(version: 2024_01_27_024555) do

  create_table "companies", options: "ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci", force: :cascade do |t|
    t.string "company_name"
    t.string "address"
    t.integer "telephone_number"
    t.string "website"
    t.string "industry"
  end

  create_table "key_people", options: "ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci", force: :cascade do |t|
    t.string "department"
    t.string "post"
    t.string "name"
    t.string "email"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.bigint "company_id", null: false
    t.index ["company_id"], name: "index_key_people_on_company_id"
  end
    t.string "provider", default: "email", null: false
    t.string "uid", default: "", null: false
    t.text "tokens"
    t.string "encrypted_password"
    t.index ["uid", "provider"], name: "index_users_on_uid_and_provider", unique: true
  add_foreign_key "key_people", "companies"