class ItemSerializer
  include FastJsonapi::ObjectSerializer
  attributes :name, :general_type, :subcategory, :note
  has_many :guesses
end
