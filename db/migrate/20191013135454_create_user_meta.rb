class CreateUserMeta < ActiveRecord::Migration[5.2]
  def change
    create_table :user_meta do |t|
      t.references :user, null: false
      t.string :meta_key, null: false
      t.string :meta_value, null: false

      t.timestamps
    end

    add_index :user_meta, [:user_id, :meta_key], unique: true
  end
end
