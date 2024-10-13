from professionals.forms import ProfessionalCreationForm, SecurePasswordChangeForm

    def test_password_strength_validation(self):
        self.client.login(username='testuser', password='old_password')
        form = SecurePasswordChangeForm(user=self.user, data={
            'old_password': 'old_password',
            'new_password1': 'weakpassword',
            'new_password2': 'weakpassword',
        })
        self.assertFalse(form.is_valid())
        self.assertIn('new_password1', form.errors)
        self.assertEqual(form.errors['new_password1'], ['La contraseña debe contener al menos una letra mayúscula.'])

    def test_password_matching_validation(self):
        self.client.login(username='testuser', password='old_password')
        form = SecurePasswordChangeForm(user=self.user, data={
            'old_password': 'old_password',
            'new_password1': 'New_Password123',
            'new_password2': 'Mismatched_Password123',
        })
        self.assertFalse(form.is_valid())
        self.assertIn('__all__', form.errors)
        self.assertEqual(form.errors['__all__'], ['Las contraseñas nuevas no coinciden.'])

    def test_blank_data_validation(self):
        self.client.login(username='testuser', password='old_password')
        form = SecurePasswordChangeForm(user=self.user, data={})
        self.assertFalse(form.is_valid())
        self.assertIn('old_password', form.errors)
        self.assertIn('new_password1', form.errors)
        self.assertIn('new_password2', form.errors)
        self.assertEqual(form.errors['old_password'], ['Este campo es obligatorio.'])
        self.assertEqual(form.errors['new_password1'], ['Este campo es obligatorio.'])
        self.assertEqual(form.errors['new_password2'], ['Este campo es obligatorio.'])

    def test_password_change_success(self):
        self.client.login(username='testuser', password='old_password')
        form = SecurePasswordChangeForm(user=self.user, data={
            'old_password': 'old_password',
            'new_password1': 'New_Password123',
            'new_password2': 'New_Password123',
        })
        self.assertTrue(form.is_valid())
        user = form.save()
        self.assertTrue(user.check_password('New_Password123'))