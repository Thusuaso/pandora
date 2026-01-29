// server/api/contact.post.ts

export default defineEventHandler(async (event) => {
  // 1. Formdan gelen verileri oku
  const body = await readBody(event);

  // 2. Telegram Ayarları (Buraya kopyaladığınız bilgileri girin)
  // Güvenlik için bunları aslında .env dosyasında tutmak en iyisidir ama şimdilik buraya yazalım.
  const BOT_TOKEN = "8374645333:AAHLkfQ1q6CxHL9obZ7ytVav7kzWzIszfr0";
  const CHAT_ID = "7117895741";

  // 3. Size Gelecek Mesajın Formatı
  const message = `
🔔 *YENİ SİPARİŞ TEKLİFİ GELDİ!*

👤 *Ad Soyad:* ${body.name}
📞 *Telefon:* ${body.phone}
📧 *E-Posta:* ${body.email || "Yok"}
🛠 *Hizmet:* ${body.service}
📏 *Metrekare:* ${body.area || "Seçilmedi"}
📝 *Not:* ${body.message || "Yok"}
  `;

  // 4. Telegram'a Mesajı Gönder (Fetch İsteği)
  try {
    const url = `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`;

    await $fetch(url, {
      method: "POST",
      body: {
        chat_id: CHAT_ID,
        text: message,
        parse_mode: "Markdown", // Yazıyı kalın/italik yapmak için
      },
    });

    return { success: true, message: "Bildirim gönderildi" };
  } catch (error) {
    console.error("Telegram Hatası:", error);
    // Hata olsa bile kullanıcıya belli etmeyelim veya hata döndürelim
    throw createError({
      statusCode: 500,
      statusMessage: "Mesaj gönderilemedi",
    });
  }
});
