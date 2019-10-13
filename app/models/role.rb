class Role < ApplicationRecord

  include Filterable

  validates :name, presence: true
  validates :name, allow_blank: true, length: { minimum: 2, maximum: 100 }

  has_and_belongs_to_many :users

  def self.by_is_active(value)
    where(is_active: (value.to_s.downcase == "true"))
  end
end
