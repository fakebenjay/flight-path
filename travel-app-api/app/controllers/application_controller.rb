class ApplicationController < ActionController::API
  include ActionController::HttpAuthentication::Token::ControllerMethods

  protected

  def authenticate
    authenticate_or_request_with_http_token do |token, options|
      byebug
      account = Account.from_token(Bearer: token)
      if account
          account
      else
        render json: "Permission Denied", status: 401
      end
    end
  end

end
