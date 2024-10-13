
    def test_same_old_and_new_password_password_not_changed(self):
        form_data = {
            'old_password': 'old_password',
            'new_password1': 'old_password',
            'new_password2': 'old_password',
        }
        form = SecurePasswordChangeForm(data=form_data, user=self.user)
        self.assertFalse(form.is_valid())

    def test_new_password_not_meeting_security_policies_password_not_changed(self):
        form_data = {
            'old_password': 'old_password',
            'new_password1': 'weakpassword',
            'new_password2': 'weakpassword',
        }
        form = SecurePasswordChangeForm(data=form_data, user=self.user)
        self.assertFalse(form.is_valid())

    def test_invalid_data_in_password_fields_password_not_changed(self):
        form_data = {
            'old_password': 'old_password',
            'new_password1': 'invalid*password',
            'new_password2': 'invalid*password',
        }
        form = SecurePasswordChangeForm(data=form_data, user=self.user)
        self.assertFalse(form.is_valid())

    def test_unauthenticated_user_password_not_changed(self):
        form_data = {
            'old_password': 'old_password',
            'new_password1': 'New_Password123',
            'new_password2': 'New_Password123',
        }
        form = SecurePasswordChangeForm(data=form_data, user=None)
        self.assertFalse(form.is_valid())