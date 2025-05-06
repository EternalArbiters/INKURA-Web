import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';

const prisma = new PrismaClient();

async function main() {
  const hashedPassword = await bcrypt.hash("admin123", 10);

  await prisma.user.create({
    data: {
      name: "Eternal Arbiters",
      username: "noelephgoddess",
      email: "noelephgoddess.game@gmail.com",
      password: hashedPassword,
      role: "ADMIN",
      image: "/public/images/default-avatar.png", 
    },
  });

  console.log("Dummy user created");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
