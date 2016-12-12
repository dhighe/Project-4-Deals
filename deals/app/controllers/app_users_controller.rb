class AppUsersController < ApplicationController
  def index
    appUser = AppUser.all
    render json: appUser
  end

  def show
    appUser = AppUser.find(params[:id])
    render json: appUser
  end

  def create
    appUser = AppUser.new(permitted_params)

    if appUser.save
      render json: appUser
    else
      render status: 422
    end
  end

  def update
    appUser = AppUser.find(params[:id])
    update = appUser.update(permitted_params)

    if update
      render status: 204
    else
      render status: 422
    end
  end

  def destroy
    appUser = AppUser.find(params[:id])
    appUser.destroy!
    render status: 204
  end

  def permitted_params
    params.require(:app_user).permit(:f_name, :l_name, :username, :email, :password, :phonenumber)
  end
end

