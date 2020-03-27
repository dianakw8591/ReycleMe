class Api::V1::GuessesController < ApplicationController
    def create
        guess = Guess.create(guess_params)
        if guess.guessed_category == guess.item.general_type
            guess.correct = true
            guess.save
        else
            guess.correct = false
            guess.save
        end
        options = {
                include: [:item]
              }
        render json: GuessSerializer.new(guess, options)
    end

    private

    def guess_params
        params.require(:guess).permit(:user_id, :item_id, :guessed_category)
    end
end
