class UserMeta < ApplicationRecord

  belongs_to :user
  validates :meta_key, :meta_value, presence: true

  validates :meta_key, length: { minimum: 2, maximum: 100 }, allow_blank: true
  validates :meta_value, length: { minimum: 2, maximum: 100 }, allow_blank: true

  validates :meta_key, uniqueness: {scope: :user_id, case_sensitive: false}, allow_blank: true

  include Filterable

  def self.by_user_id(value)
    where(user_id: value)
  end


end
