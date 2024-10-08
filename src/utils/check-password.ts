import bcrypt from 'bcryptjs'

export async function checkPassword(
  plainPassword: string,
  hashedPassword: string
) {
  const match = await bcrypt.compare(plainPassword, hashedPassword)
  return match
}
