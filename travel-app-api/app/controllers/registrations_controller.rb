class RegistrationsController < ApplicationController
  skip_before_action :authenticate
  def create
    account = Account.new(account_params)
    if account.save
      token = Auth.issue({account_id: account.id})
      render json: {token: token}
    else
      render json: { errors: account.errors.full_messages }, status: 401
    end
  end

  private

  def account_params
    params.require(:account).permit(:username, :password, :email)
  end

end
