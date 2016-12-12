class WishlistsController < ApplicationController
  def index
    wishlist = Wishlist.all
    render json: wishlist
  end

  def show
    wishlist = Wishlist.find(params[:id])
    render json: wishlist
  end

  def create
    wishlist = Wishlist.new(permitted_params)

    if new_wishlist.save
      render json: new_robot
    else
      render status: 422
    end
  end

  def update
    wishlist = Wishlist.find(params[:id])
    update = wishlist.update(permitted_params)

    if update
      render status: 204
    else
      render status: 422
    end
  end

  def destroy
    wishlist = Wishlist.find(params[:id])
    wishlist.destroy!
    render status: 204
  end

  def permitted_params
    params.require(:wishlist).permit(:title, :price)
  end
end
