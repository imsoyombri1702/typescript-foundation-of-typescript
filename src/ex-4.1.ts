type User = {
  id: string;
  name: string;
  age?: number;
};

function isAdult(user: User): boolean {
  if(user.age === undefined){
    return false
  }
  return user.age >= 18;
}

const result = isAdult({ id: "u01", name: "John" });
console.log(result); // ควรได้ false

// Error ที่เจอคือ age ถูกประกาศเป็น optional (age?: number) ทำให้ type ของมันเป็น number | undefined พอเอาไปเปรียบเทียบด้วย >= TypeScript จึงขึ้น error
