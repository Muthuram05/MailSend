import smtplib

# creates SMTP session
s = smtplib.SMTP('smtp.gmail.com', 587)

# start TLS for security
s.starttls()

# Authentication
s.login("mram40686@gmail.com", "Muthuram?05")

# message to be sent
message = "Message_you_need_to_send"

# sending the mail
s.sendmail("mram40686@gmail.com", "mr032495@gmail.com", message)

# terminating the session
s.quit()
