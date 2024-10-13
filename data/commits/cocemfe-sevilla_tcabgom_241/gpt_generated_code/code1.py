new_password1 = forms.CharField(
    label='Nueva contraseña',
    widget=forms.PasswordInput(attrs={'class': 'form-control'}),
    validators=[validate_password_strength]
)