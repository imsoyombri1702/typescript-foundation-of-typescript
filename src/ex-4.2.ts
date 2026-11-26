function processData(data: unknown): string {
  if(typeof data === "string"){
    return data.toUpperCase();
  }
  return "Not a string";
}

console.log(processData("hello")); // ควรได้ "HELLO"
console.log(processData(123)); // ควรได้ "Not a string"

// Error ที่เจอคือ data มี type เป็น unknown ซึ่งหมายความว่า "ยังไม่รู้ว่าเป็นอะไร" TypeScript จึงไม่ยอมให้เรียก method หรือเข้าถึง property ใด ๆ จนกว่าเราจะตรวจสอบ type ก่อน
