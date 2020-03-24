class User < ApplicationRecord
    has_many :guesses
    has_many :items, through: :guesses
end
