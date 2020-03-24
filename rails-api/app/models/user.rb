class User < ApplicationRecord
    has_many :guesses
    has_many :items, through: :guesses

    has_secure_password

    validates :username, {presence: true, uniqueness: true}
    validates :password, {presence: true, on: :create}
end
