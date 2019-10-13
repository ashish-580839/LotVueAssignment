class UserMetasController < ApplicationController

  before_action :set_user, only: [:create]

  before_action :set_user_meta, only: [:update, :destroy]

  def index
    @user_metas = UserMeta.filter(search_params)
    if @user_metas.length==0
      render json: {user_metas: []}, status: :ok
    else
      render json: @user_metas, status: :ok
    end
  end

  def create
    @user_meta = @user.user_metas.create(user_meta_params[:user_meta])
    if @user_meta.valid?
      render json: @user_meta, status: :ok,  include: []
    else
      render json: {errors: @user_meta.errors.full_messages}, status: :unprocessable_entity
    end
  end

  def update
    if @user_meta.update(user_meta_params[:user_meta])
      render json: @user_meta, status: :ok
    else
      render json: {errors: @user_meta.errors.full_messages}, status: :unprocessable_entity
    end
  end

  def destroy
    if @user_meta.destroy
      render json: @user_meta, status: :ok
    else
      render json: {errors: ["Some error occured while deleting meta data with key: #{@user_meta.meta_key} "] }, status: :unprocessable_entity
    end
  end


  private

  def set_user_meta
    @user_meta  = UserMeta.find(params[:id])
  end

  def set_user
    @user  = User.find(params[:user_id])
  end

  def user_meta_params
    params.permit(user_meta: [:meta_key, :meta_value])
  end

  def search_params
    params.permit(:user_id)
  end

end
