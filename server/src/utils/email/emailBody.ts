import { User_T } from '../../interfaces/users.interface';
import { config } from '../../config/config';

export const generateHtmlBody = (url: string, user: User_T) => {
  return `
    <div style="">
     <main style="">
      <div style="">
       <h3 style="">Hello ${user?.username}</h3>
       <p style="">You are receiving this email because we received a password reset request for your account.</p>
       <a href="${url}" style="">Reset Password</a>
       <p style="">If you did not request a password reset, no further action is required.</p>
       <p style="">Regards,</p>
       <p style="">SKILL SWAP</p>
      </div>
     </main>
     </div>
     <footer style="">
      <p style=""><strong>If you've having trouble clicking the "Reset Password" button, copy and paste the URL below into your web browser:</strong></p>
      <p style="">${url}</p>
      <p style=""><small>This URL will expire in ${config.JWT.JWT_RECOVERY_PASSWORD_EXPIRES}</small>
     </footer>
    `;
};
