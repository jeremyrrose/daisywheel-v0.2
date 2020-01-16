class Article < ApplicationRecord
    belongs_to :author, optional: true
    belongs_to :section, optional: true
end
