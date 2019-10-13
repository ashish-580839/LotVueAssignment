class UserMetaSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :meta_key, :meta_value
end
