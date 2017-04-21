class AddCommentToComments < ActiveRecord::Migration[5.0]
  def change
    add_column :comments, :comment, :string
  end
end
