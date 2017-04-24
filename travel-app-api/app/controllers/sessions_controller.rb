class SessionsController < ApplicationController
  def create
    account = Account.find_by(username: params[:username])
    if account && account.authenticate(params[:password])
      token = Auth.issue({account_id: account.id})
      render json: {token: token, account: account}
    else
      render :json => "There was an issue with your request", status: 401
    end
  end

  def destroy
  end
end
