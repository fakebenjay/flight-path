class CommentsController < ApplicationController
  before_action :authenticate

  def create
    comment = Comment.new(comment_params)
    comment.save
  end

  private

  def comment_params
    params.require(:comment).permit(:activity_id, :account_id, :comment)
  end

end
