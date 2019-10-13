class RolesController < ApplicationController

  before_action :set_role, only: [:update]

  def index
    @roles = Role.filter(search_params)
    if @roles.length==0
      render json: {roles: []}, status: :ok
    else
      render json: @roles, status: :ok
    end
  end

  def create
    @role = Role.find_or_create_by(role_params[:role])

    if @role.valid?
      render json: @role, status: :ok
    else
      render json: {errors: @role.errors.full_messages}, status: :unprocessable_entity
    end

  end

  def update
    if @role.update(role_params[:role])
      render json: @role, status: :ok
    else
      render json: {errors: @role.errors.full_messages}, status: :unprocessable_entity
    end
  end

  private

  def set_role
    @role  = Role.find(params[:id])
  end

  def role_params
    params.permit(role: [:name, :is_active])
  end

  def search_params
    params.permit([:is_active])
  end

end
