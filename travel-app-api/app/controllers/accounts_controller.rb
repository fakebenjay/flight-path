class AccountsController < ApplicationController

  def friends
    search_term = params["search_term"]
    accounts = Account.where('username LIKE ? ', "%#{search_term}%").limit(10)
    byebug
    if accounts
      render json: accounts, each_serializer: AccountSerializer
    else
      render json: 'No Accounts Found'
    end
  end

end
