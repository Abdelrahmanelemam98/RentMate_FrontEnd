import { Component } from '@angular/core';
// import * as emailjs from 'emailjs-com';

@Component({
  selector: 'app-newsletter',
  templateUrl: './newsletter.component.html',
  styleUrls: ['./newsletter.component.css'],
})
export class NewsletterComponent {
  recipientEmail: string = '';
  isValidEmail: boolean = false;
  onEmailInput() {
    // Perform email validation here
    this.isValidEmail = this.validateEmail(this.recipientEmail);
  }
  validateEmail(email: string): boolean {
    /// return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    return /^[\w-\.]+@([\w-]+\.)+[\w-]{3}$/g.test(email);
  }
  ngOnInit() {
    // emailjs.init('DXgOZ9EZEZ-PKLpP5');
  }
  sendEmail() {
    if (this.isValidEmail) {
      const templateParams = {
        to_name: 'Dear client',
        from_name: 'Your Name',
        message: 'Hello, this is a test email.',
        to_email: this.recipientEmail,
      };

      // emailjs.send('service_ek9pvhg', 'template_ksi30l1', templateParams).then(
      //   (response) => {
      //     console.log(
      //       'Email sent successfully!',
      //       response.status,
      //       response.text
      //     );
      //   },
      //   (error) => {
      //     console.error('Error sending email:', error);
      //   }
      // );
    }
  }
}
