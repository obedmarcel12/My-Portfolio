```php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
  $name = $_POST['name'];
  $email = $_POST['email'];
  $message = $_POST['message'];

  // Set up email content
  $to = 'obedmarcelcomedian@gmail.com'; // Replace with your email address
  $subject = 'New Contact Form Submission';
  $body = "Name: $name\nEmail: $email\nMessage: $message";

  // Send email
  if (mail($to, $subject, $body)) {
    echo "Email sent successfully.";
    // You can redirect to a success page here if needed.
    exit;
  } else {
    echo "Failed to send email.";
    // You can redirect to an error page here if needed.
    exit;
  }
}
?>
```
