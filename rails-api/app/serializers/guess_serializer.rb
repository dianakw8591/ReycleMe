class GuessSerializer
  include FastJsonapi::ObjectSerializer
  attributes :guessed_category, :correct, :created_at
  belongs_to :user
  belongs_to :item
end
