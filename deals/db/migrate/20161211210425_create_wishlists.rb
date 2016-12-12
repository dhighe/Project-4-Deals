class CreateWishlists < ActiveRecord::Migration[5.0]
  def change
    create_table :wishlists do |t|
      t.string :itemId
      t.string :title
      t.string :img
      t.string :url
      t.string :price
      t.references :app_user, foreign_key: true

      t.timestamps
    end
  end
end
