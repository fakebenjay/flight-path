class ApplicationController < ActionController::API
  before_action :authenticate

  protected

  def authenticate
    token = request.headers["bearer"]
    @account = Account.from_token(token)
      if @account
          @account
      else
        render json: "Permission Denied", status: 401
      end
  end


end
