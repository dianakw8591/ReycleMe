class Api::V1::UsersController < ApplicationController
    def create
        if user_params[:password_confirmation] == user_params[:password]
            new_user = User.create(user_params)
            if new_user.valid?
                render json: UserSerializer.new(new_user)
                  
            else
                render json: {message: new_user.errors.full_messages, status: :unprocessable_entity}
            end
        else
            render json: {message: "Password and Password Confirmation do not match. Please try again."}
        end
    end

    def login
        user = User.find_by(username: user_params[:username])
        if user && user.authenticate(user_params[:password])
            options = {
                include: [:guesses]
              }
            render json: UserSerializer.new(user, options)
        else
            render json: {message: "Incorrect username or password"}
        end
    end

    def delete
        user = User.find_by_id(params[:id])
        user.update(user_params)
        if user 
            user.destroy
            render json: {message: "User deleted"}
        else
            render json: {message: "User's account could not be located"}
        end
    end

    def edit
        user = User.find_by_id(params[:id])
        user.update(user_params)
        if user
            options = {
                include: [:guesses]
              }
            render json: UserSerializer.new(user, options)
        else
            render json: {message: "Unable to locate User"}
        end
    end

    private
    
    def user_params
        params.require(:user).permit(:username, :password, :password_confirmation)
    end
end
