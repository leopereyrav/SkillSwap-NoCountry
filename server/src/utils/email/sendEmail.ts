import { transporter } from '../../config/smptConfig';
import { config } from '../../config/config';
import { User_T } from '../../interfaces/users.interface';
import { generateHtmlBody } from './emailBody';

class SendEmail {
  constructor() {}

  public sendRecoveryPassword = (subject: string, user: User_T): void => {
    const url = `${config.BACKEND_URL_BASE}:${config.PORT}/api/v1/recovery_password/${user?.token}`;
    const htmlBody = generateHtmlBody(url, user);
    const mail = transporter.sendMail({
      from: `"SKILL SWAP" ${config.SMTP.SMTP_SENDER}`,
      to: user?.email,
      subject,
      html: htmlBody,
      // text: `Hi! ${name}\n\n Go to the link to change password https://${process.env.CODESPACE_NAME}-${process.env.PORT}.${process.env.GITHUB_CODESPACES_PORT_FORWARDING_DOMAIN}/api/v1/recovery_password/${token}\n This link will expire in 3 mins`,
    });
  };
}

export const sendEmail = new SendEmail();
