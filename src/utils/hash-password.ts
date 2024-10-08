import bcrypt from 'bcryptjs'

export async function hashPassword(plainPassword: string) {
  const saltRounds = 10
  const hashedPassword = await bcrypt.hash(plainPassword, saltRounds)
  return hashedPassword
}
