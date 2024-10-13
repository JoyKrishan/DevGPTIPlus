from .forms import ProfessionalCreationForm, ProfessionalForm, SecurePasswordChangeForm
@login_required
def change_password(request):
    if request.method == 'POST':
        form = SecurePasswordChangeForm(user=request.user, data=request.POST)
        if form.is_valid():
            form.save()
            messages.success(request, 'Tu contraseña ha sido cambiada exitosamente.')
            return redirect('professionals:request_list') # URL TEMPORAL, INTEGRAR CON PANTALLA PERFIL USUARIO
    else:
        form = SecurePasswordChangeForm(user=request.user)
    return render(request, 'update_password.html', {'form': form})