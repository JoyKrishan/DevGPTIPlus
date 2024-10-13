    def test_password_strength_validation_no_uppercase(self):
            'new_password1': 'new_password123',
            'new_password2': 'new_password123',
        })
        self.assertFalse(form.is_valid())
        self.assertIn('new_password1', form.errors)
        self.assertEquals(form.errors['new_password1'], ['La contraseña debe contener al menos una letra mayúscula.'])

    def test_password_strength_validation_no_lowercase(self):
        self.client.login(username='testuser', password='old_password')
        form = SecurePasswordChangeForm(user=self.user, data={
            'old_password': 'old_password',
            'new_password1': 'NEW_PASSWORD123',
            'new_password2': 'NEW_PASSWORD123',
        })
        self.assertFalse(form.is_valid())
        self.assertIn('new_password1', form.errors)
        self.assertEquals(form.errors['new_password1'], ['La contraseña debe contener al menos una letra minúscula.'])

    def test_password_strength_validation_short(self):
        self.client.login(username='testuser', password='old_password')
        form = SecurePasswordChangeForm(user=self.user, data={
            'old_password': 'old_password',
            'new_password1': 'Short_123',
            'new_password2': 'Short_123',
        })
        self.assertFalse(form.is_valid())
        self.assertIn('new_password1', form.errors)
        self.assertEquals(form.errors['new_password1'], ['La contraseña debe tener al menos 12 caracteres.'])

    def test_password_strength_validation_no_digits(self):
        self.client.login(username='testuser', password='old_password')
        form = SecurePasswordChangeForm(user=self.user, data={
            'old_password': 'old_password',
            'new_password1': 'New_Password!!!',
            'new_password2': 'New_Password!!!',
        })
        self.assertFalse(form.is_valid())
        self.assertIn('new_password1', form.errors)
        self.assertEquals(form.errors['new_password1'], ['La contraseña debe contener al menos un dígito.'])

    def test_password_strength_validation_no_digits(self):
        self.client.login(username='testuser', password='old_password')
        form = SecurePasswordChangeForm(user=self.user, data={
            'old_password': 'old_password',
            'new_password1': 'NewPassword12345',
            'new_password2': 'NewPassword12345',
        self.assertEquals(form.errors['new_password1'], ['La contraseña debe contener al menos un carácter especial.'])
        self.assertTrue(user.check_password('New_Password123'))