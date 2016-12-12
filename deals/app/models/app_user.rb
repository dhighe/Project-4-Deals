class AppUser < ApplicationRecord
    has_many :wishlists, dependent: :destroy
end
