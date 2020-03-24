class ItemSerializer
  include FastJsonapi::ObjectSerializer
  attributes 
  has_many :guesses
end
