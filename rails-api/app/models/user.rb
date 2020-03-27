class User < ApplicationRecord
    has_many :guesses, dependent: :destroy
    has_many :items, through: :guesses

    has_secure_password

    validates :username, {presence: true, uniqueness: true}
    validates :password, {presence: true, on: [:create, :login]}

    def guesses_count
        guess_count = {correct: 0, incorrect: 0}
        self.guesses.each do |guess|
            if guess.correct == true
                guess_count[:correct] += 1
            else
                guess_count[:incorrect] += 1
            end
        end
        guess_count
    end
end 
