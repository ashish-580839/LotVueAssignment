class UserSerializer < ActiveModel::Serializer

  include Rails.application.routes.url_helpers

  attributes :id, :first_name, :last_name, :email, :role_ids

  has_many :roles

  has_many :user_metas

  attributes :images

  def images
    object.images.map do |image|
      rails_blob_path(image, only_path: true)
    end
  end
end
