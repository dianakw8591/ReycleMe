class Api::V1::UsersController < ApplicationController
    def create
        if user_params[:password_confirmation] == user_params[:password]
            new_user = User.create(user_params)
            if new_user.valid?
                render json: new_user
                  
            else
                render json: new_user.errors, status: :unprocessable_entity
            end
        else
            render json: {message: "Password and Password Confirmation do not match. Please try again."}
        end
    end

    def login
        user = User.find_by(username: user_params[:username])
        if user && user.authenticate(user_params[:password])
            render json: user
        else
            render json: {message: "Incorrect username or password"}
        end
    end

    private
    
    def user_params
        params.require(:user).permit(:username, :password, :password_confirmation)
    end
end
