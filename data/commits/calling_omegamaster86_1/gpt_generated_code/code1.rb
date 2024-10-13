def google_auth_params
  params.require(:google_auth).permit(:name, :email)
end