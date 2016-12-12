class CreateAppUsers < ActiveRecord::Migration[5.0]
  def change
    create_table :app_users do |t|
      t.string :f_name
      t.string :l_name
      t.string :username
      t.string :email
      t.string :password
      t.integer :phonenumber

      t.timestamps
    end
  end
end
