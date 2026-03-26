// นำเข้า,readine(โมดูล),เอาเครื่องมือจาก readline
import readline from "readline";

// สร้าง rl (ตัวแปร) เพื่อเรียกใช้คำสั่งถามตอบ,กำหนดค่าเมื่อเรียก rl ให้หมายถึงคพสั่งที่อยู่ฝั่งขวา,แล้วเตรียมพร้อมเมื่อมีการถามและตอบ,บอกโปรแกรมว่าเวลาจะตอบอะไรให้เอามาโชว์บน Terminal
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

// สร้างชุดคำสั่งใหม่,ชื่อฟังก์ชั่น,รับค่าน้ำหนักและส่วนสูงเข้ามาในเครื่องคำนวน,gibj,
// {เริ่มการทำงานในฟังก์ชั่น ภายในให้ ส่งผลลัพธ์ออกไปหลังคำนวนเสร็จแล้ว,ข้อมูลสูตรคำนวนBMI น้ำหนักหารด้วย ส่วนสูงยกกำลังสอง,ทุกอย่างจบในฟังก์ชันนี้}
function calculateBMI(weight,height) {
    return weight / (height * height);
}

// คำถามน้ำหนัก
rl.question("Enter weight (kg)",function (weightInput) {
    const weight = parseFloat(weightInput);

rl.question("Enter height (cm)", function (heightInput)  { //คำถามส่วนสูงซ่อน
    const height = parseFloat(heightInput) / 100; // แปลง cm เป็น m
    const bmi = calculateBMI(weight, height); // นำค่าสองคำถามมาคำนวน
    console.log(`Your BMI is ${bmi.toFixed(2)}`); // คำตอบ bmi
rl.close(); // ปิดโปรแกรมเมื่อทำงานเสร็จ
        });
    });
