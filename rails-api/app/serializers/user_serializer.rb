class UserSerializer
  include FastJsonapi::ObjectSerializer
  attributes 
  has_many :guesses
  has_many :items, through: :guesses
end
