import { Injectable, UnauthorizedException, NotFoundException } from '@nestjs/common';
import { MasterTableService } from 'src/master-table/master-table.service';
import { JwtService } from '@nestjs/jwt';
import { MailService } from 'src/mail/mail.service'; // Replace with your actual mail service

@Injectable()
export class AuthService {
  constructor(
    private usersService: MasterTableService,
    private jwtService: JwtService,
    private mailService: MailService, // Replace with your actual mail service
  ) {}

  async signIn(userid: number, pass: string): Promise<{ access_token: string }> {
    const user = await this.usersService.findOne(userid);
    if (!user || !(await this.usersService.validatePassword(user, pass))) {
      throw new UnauthorizedException('Invalid credentials');
    }

    const payload = { sub: user.id, username: user.name }; // Adjust as needed
    const access_token = this.jwtService.sign(payload);

    return { access_token };
  }

//   async initiatePasswordReset(email: string): Promise<void> {
//     const user = await this.usersService.findByEmail(email);
//     if (user) {
//       const resetToken = this.generateResetToken();
//       // Store resetToken in the database along with user information
//       await this.usersService.storeResetToken(user.id, resetToken); // Replace with your actual method

//       // Send an email with a link containing the resetToken
//       await this.mailService.sendPasswordResetEmail(user.email, resetToken); // Replace with your actual method
//     } else {
//       throw new NotFoundException('User not found');
//     }
//   }

//   async resetPassword(resetToken: string, newPassword: string): Promise<void> {
//     // Verify the resetToken against the stored token in the database
//     const userId = await this.usersService.getUserIdByResetToken(resetToken); // Replace with your actual method

//     if (userId) {
//       // If valid, update the user's password
//       await this.usersService.updatePassword(userId, newPassword); // Replace with your actual method

//       // Optionally, invalidate or remove the used resetToken
//       await this.usersService.invalidateResetToken(userId, resetToken); // Replace with your actual method
//     } else {
//       throw new UnauthorizedException('Invalid or expired reset token');
//     }
//   }

  private generateResetToken(): string {
    // Implement your logic to generate a reset token
    // (e.g., using a library like crypto or a random string generator)
    return 'generated_reset_token';
  }
}
