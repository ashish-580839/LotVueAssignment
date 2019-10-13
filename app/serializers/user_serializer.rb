class UserSerializer < ActiveModel::Serializer
  attributes :id, :first_name, :last_name, :email, :role_ids

  has_many :roles
end
