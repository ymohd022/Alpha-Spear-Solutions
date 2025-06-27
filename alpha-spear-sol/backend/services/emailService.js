const nodemailer = require("nodemailer")
require("dotenv").config()

class EmailService {
  constructor() {
    this.transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || "smtp.gmail.com",
      port: process.env.SMTP_PORT || 587,
      secure: false, // true for 465, false for other ports
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    })
  }

  async sendContactConfirmation({ to, firstName, lastName }) {
    const mailOptions = {
      from: `"Alpha Spear Solutions" <${process.env.SMTP_FROM || process.env.SMTP_USER}>`,
      to,
      subject: "Thank you for contacting Alpha Spear Solutions",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: linear-gradient(135deg, #1e3a8a, #06b6d4); padding: 30px; text-align: center;">
            <h1 style="color: white; margin: 0;">Alpha Spear Solutions</h1>
          </div>
          
          <div style="padding: 30px; background: #f8f9fa;">
            <h2 style="color: #1e3a8a;">Thank you for reaching out!</h2>
            
            <p>Dear ${firstName} ${lastName},</p>
            
            <p>Thank you for contacting Alpha Spear Solutions. We have received your message and our team will review it carefully.</p>
            
            <p><strong>What happens next?</strong></p>
            <ul>
              <li>Our team will review your inquiry within 24 hours</li>
              <li>A specialist will reach out to discuss your project requirements</li>
              <li>We'll schedule a consultation to explore how we can help</li>
            </ul>
            
            <p>In the meantime, feel free to explore our <a href="${process.env.FRONTEND_URL}/case-studies" style="color: #1e3a8a;">case studies</a> to see how we've helped other businesses transform through technology.</p>
            
            <div style="background: white; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <h3 style="color: #1e3a8a; margin-top: 0;">Need immediate assistance?</h3>
              <p style="margin-bottom: 10px;"><strong>Phone:</strong> +1 (555) 123-4567</p>
              <p style="margin-bottom: 10px;"><strong>Email:</strong> info@alphaspear.com</p>
              <p style="margin-bottom: 0;"><strong>Hours:</strong> Monday - Friday, 9 AM - 6 PM PST</p>
            </div>
            
            <p>Best regards,<br>
            The Alpha Spear Solutions Team</p>
          </div>
          
          <div style="background: #1e3a8a; padding: 20px; text-align: center;">
            <p style="color: white; margin: 0; font-size: 14px;">
              © 2024 Alpha Spear Solutions. All rights reserved.
            </p>
          </div>
        </div>
      `,
    }

    return this.transporter.sendMail(mailOptions)
  }

  async sendContactNotification({ contact, contactId }) {
    const mailOptions = {
      from: `"Alpha Spear Solutions" <${process.env.SMTP_FROM || process.env.SMTP_USER}>`,
      to: process.env.ADMIN_EMAIL || "admin@alphaspear.com",
      subject: `New Contact Form Submission - ${contact.firstName} ${contact.lastName}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: linear-gradient(135deg, #1e3a8a, #06b6d4); padding: 20px; text-align: center;">
            <h1 style="color: white; margin: 0;">New Contact Form Submission</h1>
          </div>
          
          <div style="padding: 20px; background: #f8f9fa;">
            <h2 style="color: #1e3a8a;">Contact Details</h2>
            
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 8px; border-bottom: 1px solid #ddd; font-weight: bold;">Contact ID:</td>
                <td style="padding: 8px; border-bottom: 1px solid #ddd;">${contactId}</td>
              </tr>
              <tr>
                <td style="padding: 8px; border-bottom: 1px solid #ddd; font-weight: bold;">Name:</td>
                <td style="padding: 8px; border-bottom: 1px solid #ddd;">${contact.firstName} ${contact.lastName}</td>
              </tr>
              <tr>
                <td style="padding: 8px; border-bottom: 1px solid #ddd; font-weight: bold;">Email:</td>
                <td style="padding: 8px; border-bottom: 1px solid #ddd;">${contact.email}</td>
              </tr>
              <tr>
                <td style="padding: 8px; border-bottom: 1px solid #ddd; font-weight: bold;">Phone:</td>
                <td style="padding: 8px; border-bottom: 1px solid #ddd;">${contact.phone || "Not provided"}</td>
              </tr>
              <tr>
                <td style="padding: 8px; border-bottom: 1px solid #ddd; font-weight: bold;">Company:</td>
                <td style="padding: 8px; border-bottom: 1px solid #ddd;">${contact.company || "Not provided"}</td>
              </tr>
              <tr>
                <td style="padding: 8px; border-bottom: 1px solid #ddd; font-weight: bold;">Job Title:</td>
                <td style="padding: 8px; border-bottom: 1px solid #ddd;">${contact.jobTitle || "Not provided"}</td>
              </tr>
              <tr>
                <td style="padding: 8px; border-bottom: 1px solid #ddd; font-weight: bold;">Industry:</td>
                <td style="padding: 8px; border-bottom: 1px solid #ddd;">${contact.industry || "Not provided"}</td>
              </tr>
              <tr>
                <td style="padding: 8px; border-bottom: 1px solid #ddd; font-weight: bold;">Project Type:</td>
                <td style="padding: 8px; border-bottom: 1px solid #ddd;">${contact.projectType || "Not provided"}</td>
              </tr>
              <tr>
                <td style="padding: 8px; border-bottom: 1px solid #ddd; font-weight: bold;">Budget:</td>
                <td style="padding: 8px; border-bottom: 1px solid #ddd;">${contact.budget || "Not provided"}</td>
              </tr>
              <tr>
                <td style="padding: 8px; border-bottom: 1px solid #ddd; font-weight: bold;">Timeline:</td>
                <td style="padding: 8px; border-bottom: 1px solid #ddd;">${contact.timeline || "Not provided"}</td>
              </tr>
              <tr>
                <td style="padding: 8px; border-bottom: 1px solid #ddd; font-weight: bold;">Preferred Contact:</td>
                <td style="padding: 8px; border-bottom: 1px solid #ddd;">${contact.preferredContact}</td>
              </tr>
              <tr>
                <td style="padding: 8px; border-bottom: 1px solid #ddd; font-weight: bold;">Newsletter:</td>
                <td style="padding: 8px; border-bottom: 1px solid #ddd;">${contact.newsletter ? "Yes" : "No"}</td>
              </tr>
            </table>
            
            <h3 style="color: #1e3a8a; margin-top: 20px;">Message:</h3>
            <div style="background: white; padding: 15px; border-radius: 5px; border-left: 4px solid #1e3a8a;">
              ${contact.message}
            </div>
            
            <div style="margin-top: 20px; text-align: center;">
              <a href="${process.env.ADMIN_URL || "http://localhost:3000"}/admin/contacts/${contactId}" 
                 style="background: #1e3a8a; color: white; padding: 10px 20px; text-decoration: none; border-radius: 5px;">
                View in Admin Panel
              </a>
            </div>
          </div>
        </div>
      `,
    }

    return this.transporter.sendMail(mailOptions)
  }

  async sendQuoteConfirmation({ to, firstName, lastName, projectType }) {
    const mailOptions = {
      from: `"Alpha Spear Solutions" <${process.env.SMTP_FROM || process.env.SMTP_USER}>`,
      to,
      subject: "Quote Request Received - Alpha Spear Solutions",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: linear-gradient(135deg, #1e3a8a, #06b6d4); padding: 30px; text-align: center;">
            <h1 style="color: white; margin: 0;">Alpha Spear Solutions</h1>
          </div>
          
          <div style="padding: 30px; background: #f8f9fa;">
            <h2 style="color: #1e3a8a;">Quote Request Received</h2>
            
            <p>Dear ${firstName} ${lastName},</p>
            
            <p>Thank you for requesting a quote for your <strong>${projectType}</strong> project. We have received your detailed requirements and our team is already reviewing them.</p>
            
            <div style="background: white; padding: 20px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #06b6d4;">
              <h3 style="color: #1e3a8a; margin-top: 0;">What happens next?</h3>
              <ol style="margin: 0; padding-left: 20px;">
                <li><strong>Review (24-48 hours):</strong> Our technical team will analyze your requirements</li>
                <li><strong>Consultation:</strong> We'll schedule a call to discuss your project in detail</li>
                <li><strong>Proposal:</strong> You'll receive a comprehensive quote with timeline and deliverables</li>
                <li><strong>Next Steps:</strong> We'll outline the project kickoff process</li>
              </ol>
            </div>
            
            <p>Our quotes typically include:</p>
            <ul>
              <li>Detailed project breakdown and timeline</li>
              <li>Technology recommendations</li>
              <li>Cost estimates with payment milestones</li>
              <li>Post-launch support options</li>
            </ul>
            
            <div style="background: white; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <h3 style="color: #1e3a8a; margin-top: 0;">Questions? We're here to help!</h3>
              <p style="margin-bottom: 10px;"><strong>Phone:</strong> +1 (555) 123-4567</p>
              <p style="margin-bottom: 10px;"><strong>Email:</strong> quotes@alphaspear.com</p>
              <p style="margin-bottom: 0;"><strong>Hours:</strong> Monday - Friday, 9 AM - 6 PM PST</p>
            </div>
            
            <p>Best regards,<br>
            The Alpha Spear Solutions Team</p>
          </div>
          
          <div style="background: #1e3a8a; padding: 20px; text-align: center;">
            <p style="color: white; margin: 0; font-size: 14px;">
              © 2024 Alpha Spear Solutions. All rights reserved.
            </p>
          </div>
        </div>
      `,
    }

    return this.transporter.sendMail(mailOptions)
  }

  async sendQuoteNotification({ quote, quoteId }) {
    const mailOptions = {
      from: `"Alpha Spear Solutions" <${process.env.SMTP_FROM || process.env.SMTP_USER}>`,
      to: process.env.ADMIN_EMAIL || "quotes@alphaspear.com",
      subject: `New Quote Request - ${quote.projectType} for ${quote.company}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: linear-gradient(135deg, #1e3a8a, #06b6d4); padding: 20px; text-align: center;">
            <h1 style="color: white; margin: 0;">New Quote Request</h1>
          </div>
          
          <div style="padding: 20px; background: #f8f9fa;">
            <div style="background: ${quote.priority === "urgent" ? "#dc3545" : quote.priority === "high" ? "#fd7e14" : "#28a745"}; color: white; padding: 10px; border-radius: 5px; text-align: center; margin-bottom: 20px;">
              <strong>Priority: ${quote.priority.toUpperCase()}</strong>
            </div>
            
            <h2 style="color: #1e3a8a;">Quote Request Details</h2>
            
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 8px; border-bottom: 1px solid #ddd; font-weight: bold;">Quote ID:</td>
                <td style="padding: 8px; border-bottom: 1px solid #ddd;">${quoteId}</td>
              </tr>
              <tr>
                <td style="padding: 8px; border-bottom: 1px solid #ddd; font-weight: bold;">Name:</td>
                <td style="padding: 8px; border-bottom: 1px solid #ddd;">${quote.firstName} ${quote.lastName}</td>
              </tr>
              <tr>
                <td style="padding: 8px; border-bottom: 1px solid #ddd; font-weight: bold;">Email:</td>
                <td style="padding: 8px; border-bottom: 1px solid #ddd;">${quote.email}</td>
              </tr>
              <tr>
                <td style="padding: 8px; border-bottom: 1px solid #ddd; font-weight: bold;">Phone:</td>
                <td style="padding: 8px; border-bottom: 1px solid #ddd;">${quote.phone || "Not provided"}</td>
              </tr>
              <tr>
                <td style="padding: 8px; border-bottom: 1px solid #ddd; font-weight: bold;">Company:</td>
                <td style="padding: 8px; border-bottom: 1px solid #ddd;">${quote.company}</td>
              </tr>
              <tr>
                <td style="padding: 8px; border-bottom: 1px solid #ddd; font-weight: bold;">Project Type:</td>
                <td style="padding: 8px; border-bottom: 1px solid #ddd;">${quote.projectType}</td>
              </tr>
              <tr>
                <td style="padding: 8px; border-bottom: 1px solid #ddd; font-weight: bold;">Budget:</td>
                <td style="padding: 8px; border-bottom: 1px solid #ddd;">${quote.budget || "Not provided"}</td>
              </tr>
              <tr>
                <td style="padding: 8px; border-bottom: 1px solid #ddd; font-weight: bold;">Timeline:</td>
                <td style="padding: 8px; border-bottom: 1px solid #ddd;">${quote.timeline || "Not provided"}</td>
              </tr>
            </table>
            
            <h3 style="color: #1e3a8a; margin-top: 20px;">Project Description:</h3>
            <div style="background: white; padding: 15px; border-radius: 5px; border-left: 4px solid #1e3a8a;">
              ${quote.projectDescription}
            </div>
            
            ${
              quote.requirements
                ? `
              <h3 style="color: #1e3a8a; margin-top: 20px;">Requirements:</h3>
              <div style="background: white; padding: 15px; border-radius: 5px; border-left: 4px solid #06b6d4;">
                ${quote.requirements}
              </div>
            `
                : ""
            }
            
            ${
              quote.additionalInfo
                ? `
              <h3 style="color: #1e3a8a; margin-top: 20px;">Additional Information:</h3>
              <div style="background: white; padding: 15px; border-radius: 5px; border-left: 4px solid #28a745;">
                ${quote.additionalInfo}
              </div>
            `
                : ""
            }
            
            <div style="margin-top: 20px; text-align: center;">
              <a href="${process.env.ADMIN_URL || "http://localhost:3000"}/admin/quotes/${quoteId}" 
                 style="background: #1e3a8a; color: white; padding: 10px 20px; text-decoration: none; border-radius: 5px; margin-right: 10px;">
                View in Admin Panel
              </a>
              <a href="mailto:${quote.email}?subject=Re: Quote Request for ${quote.projectType}" 
                 style="background: #28a745; color: white; padding: 10px 20px; text-decoration: none; border-radius: 5px;">
                Reply to Client
              </a>
            </div>
          </div>
        </div>
      `,
    }

    return this.transporter.sendMail(mailOptions)
  }
}

module.exports = new EmailService()
