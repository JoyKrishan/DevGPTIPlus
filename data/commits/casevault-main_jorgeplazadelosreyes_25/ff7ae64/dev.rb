ActiveRecord::Schema[7.1].define(version: 2024_04_30_170253) do
    t.integer "user_id"
    t.index ["user_id"], name: "index_cases_on_user_id"
    t.string "first_name"
    t.string "last_name"
  add_foreign_key "cases", "users"