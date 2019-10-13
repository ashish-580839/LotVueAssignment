class User < ApplicationRecord

  include Filterable

  has_and_belongs_to_many :roles

  has_many :user_metas, dependent: :destroy

  has_many_attached :images

  validates :email, presence: true
  validates :first_name, presence: true

  validates :first_name, length: { minimum: 2, maximum: 50 }, allow_blank: true

  validates :last_name, length: { minimum: 2, maximum: 50 }, allow_blank: true

  validates :email, format: { with: URI::MailTo::EMAIL_REGEXP }, allow_blank: true

  validates :email, uniqueness: {case_sensitive: false}, allow_blank: true

  before_save { self.email = email.downcase }

  def self.by_active_role(value)
    if value.to_s.downcase == "true"
      joins(:roles).where(roles: {is_active: true})
    end
  end

  def self.by_role_id(id)
    joins(:roles).where(roles: {id: id})
  end


end
