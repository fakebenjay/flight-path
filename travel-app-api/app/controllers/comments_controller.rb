class CommentsController < ApplicationController

  def create
    comment = Comment.new(comment_params)
    comment.save
  end

  def index
  end

  def show
  end

  def update
  end

  def destroy
  end

  private

  def comment_params
    params.require(:comment).permit(:activity_id, :account_id, :comment)
  end

end
