class Section < ApplicationRecord
    has_many :articles
    has_many :features
end
