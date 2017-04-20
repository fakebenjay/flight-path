class SessionsController < ApplicationController
  def create
    account = Account.find_by(username: params[:username])
    if account && account.authenticate(params[:password])
      token = Auth.issue({account_id: account.id})
      render json: {token: token, account: account}
    else
      render json: "We can't find that account", status: 401
    end
  end

  def destroy
  end
end
