class AccountsController < ApplicationController
  before_action :authenticate

  def friends
    account = Account.from_token(params["token"])
    search_term = params["search_term"].downcase
    accounts = Account.where('lower(username) LIKE ? AND id != ?', "%#{search_term}%", account.id).limit(10)
    if accounts
      render json: accounts, each_serializer: AccountSerializer
    else
      render json: 'No Accounts Found'
    end
  end



  def set_account
    if @account
      render json: @account, serializer: AccountSerializer
    else
      render json: "Not Permitted", status: 401
    end
  end


end
