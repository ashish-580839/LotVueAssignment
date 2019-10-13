class UsersController < ApplicationController

  before_action :set_user, only: [:update, :add_image]

  def index
    @users = User.filter(search_params).includes(:roles).with_attached_images
    if @users.length==0
      render json: {users: []}, status: :ok, include: [:roles]
    else
      render json: @users, status: :ok
    end
  end

  def show
    @user = User.includes(:roles, :user_metas).with_attached_images.find(params[:id])
    render json: @user, status: :ok
  end


  def create
    @user = User.new(user_params[:user])
    if @user.save
      render json: @user, status: :ok
    else
      render json: {errors: @user.errors.full_messages}, status: :unprocessable_entity
    end

  end

  def update
    if @user.update(user_params[:user])
      render json: @user, status: :ok
    else
      render json: {errors: @user.errors.full_messages}, status: :unprocessable_entity
    end

  end


  def add_image
    if @user.images.attach(params[:image])
      render json: @user, status: :ok
    else
      render json: {errors: ["Something went wrong"]}, status: :unprocessable_entity
    end
  end

  private

  def set_user
    @user = User.find(params[:id])
  end

  def user_params
    params.permit(user: [:first_name, :last_name, :email, role_ids: [] ])
  end

  def search_params
    params.permit([:active_role, :role_id ])
  end

end
