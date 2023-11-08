
from django.contrib import admin
from django.urls import path
from views import *



#server function urls
urlpatterns = [
    path('login/', login()),
    path('signup/',signup()),
    path('forgot_password', auth_views.PasswordResetView.as_view(template_name='registration/password_reset_form.html'),name='password_reset'),
    #password reset done, link sent when the password reset is complete
    path('forgot_password_linksent',auth_views.PasswordResetDoneView.as_view(template_name='registration/password_reset_done.html'), name='password_reset_done'),
    # ?
    path('reset/<uidb64>/<token>/', auth_views.PasswordResetConfirmView.as_view(template_name='registration/enter_new_password_form.html'), name="password_reset_confirm"),
    # ?
    path('reset-complete/', auth_views.PasswordResetCompleteView.as_view(template_name='registration/password_reset_final.html'), name="password_reset_complete"),


]
