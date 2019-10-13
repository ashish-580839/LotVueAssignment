class Role < ApplicationRecord

  validates :name, presence: true
  validates :name, allow_blank: true, length: { minimum: 2, maximum: 100 }
  
end
