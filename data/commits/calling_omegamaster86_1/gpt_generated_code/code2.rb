def google_auth_params
  Rails.logger.info "Received google_auth params: #{params[:google_auth].inspect}"
  params.require(:google_auth).permit(:name, :email)
end