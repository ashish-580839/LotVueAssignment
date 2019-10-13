class UsersController < ApplicationController

  before_action :set_user, only: [:update, :show]

  def index
    @users = User.includes(:roles).all
    if @users.length==0
      render json: {users: []}, status: :ok
    else
      render json: @users, status: :ok
    end
  end

  def show
    render json: @user, status: :ok, include: []
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

  private

  def set_user
    @user = User.find(params[:id])
  end

  def user_params
    params.permit(user: [:first_name, :last_name, :email, role_ids: [] ])
  end

  def search_params
    params.permit([:role_name])
  end

end
