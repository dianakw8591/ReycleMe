class UserSerializer
  include FastJsonapi::ObjectSerializer
  attributes :username
  has_many :guesses
  has_many :items, through: :guesses
end
