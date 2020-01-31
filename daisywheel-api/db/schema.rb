# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `rails
# db:schema:load`. When creating a new database, `rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2020_01_27_200549) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "active_storage_attachments", force: :cascade do |t|
    t.string "name", null: false
    t.string "record_type", null: false
    t.bigint "record_id", null: false
    t.bigint "blob_id", null: false
    t.datetime "created_at", null: false
    t.index ["blob_id"], name: "index_active_storage_attachments_on_blob_id"
    t.index ["record_type", "record_id", "name", "blob_id"], name: "index_active_storage_attachments_uniqueness", unique: true
  end

  create_table "active_storage_blobs", force: :cascade do |t|
    t.string "key", null: false
    t.string "filename", null: false
    t.string "content_type"
    t.text "metadata"
    t.bigint "byte_size", null: false
    t.string "checksum", null: false
    t.datetime "created_at", null: false
    t.index ["key"], name: "index_active_storage_blobs_on_key", unique: true
  end

  create_table "articles", force: :cascade do |t|
    t.string "title"
    t.string "dek"
    t.string "content"
    t.string "caption"
    t.string "credit"
    t.string "url"
    t.boolean "published", default: false
    t.boolean "static_page", default: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.bigint "section_id"
    t.bigint "author_id"
    t.index ["author_id"], name: "index_articles_on_author_id"
    t.index ["section_id"], name: "index_articles_on_section_id"
  end

  create_table "authors", force: :cascade do |t|
    t.string "name"
    t.string "bio"
    t.string "twitter"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "features", force: :cascade do |t|
    t.bigint "section_id"
    t.bigint "article_id", null: false
    t.integer "priority"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["article_id"], name: "index_features_on_article_id"
    t.index ["section_id"], name: "index_features_on_section_id"
  end

  create_table "magazines", force: :cascade do |t|
    t.string "title"
    t.string "description"
    t.string "header_image"
    t.string "color_1"
    t.string "color_2"
    t.string "color_3"
    t.string "color_4"
    t.string "font_1"
    t.string "font_2"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.integer "top_story"
    t.text "pages_order", default: "[]"
  end

  create_table "sections", force: :cascade do |t|
    t.string "title"
    t.string "short_title"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.integer "top_story"
  end

  add_foreign_key "active_storage_attachments", "active_storage_blobs", column: "blob_id"
  add_foreign_key "articles", "authors"
  add_foreign_key "articles", "sections"
  add_foreign_key "features", "articles"
  add_foreign_key "features", "sections"
end
