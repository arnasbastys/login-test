import { authenticator } from 'otplib';

export const otpCode = () => authenticator.generate(process.env.OTP!);
