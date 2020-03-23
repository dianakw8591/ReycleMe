class CreateItems < ActiveRecord::Migration[6.0]
  def change
    create_table :items do |t|
      t.string :name
      t.string :general_type
      t.string :subcategory
      t.string :note

      t.timestamps
    end
  end
end
