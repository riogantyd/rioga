# Contact form → Firebase Firestore

Form kontak di halaman utama sekarang menyimpan pesan langsung ke **Cloud Firestore**, bukan membuka WhatsApp.

Kenapa Firestore: situs ini di-build sebagai **static export** (`output: 'export'` di `next.config.mjs`), jadi tidak ada server/API route yang bisa dipakai. Firestore bisa ditulis langsung dari browser, dan yang menjaga datanya adalah **security rules**, bukan rahasia API key.

Total waktu setup: ±15 menit. Biaya: **gratis** (Spark plan — 20.000 write/hari, jauh di atas kebutuhan form kontak).

---

## 1. Buat project Firebase

1. Buka <https://console.firebase.google.com> → **Create a project**.
2. Nama project, misalnya `rioga-portfolio`.
3. Google Analytics boleh di-skip (tidak dipakai).

## 2. Buat database Firestore

1. Menu kiri → **Build → Firestore Database** → **Create database**.
2. Pilih **Production mode** (bukan test mode — rules-nya kita isi sendiri di langkah 5).
3. Location: **`asia-southeast2` (Jakarta)**. Lokasi tidak bisa diubah setelah dipilih.

Collection `messages` tidak perlu dibuat manual — Firestore membuatnya otomatis saat pesan pertama masuk.

## 3. Daftarkan web app dan ambil config

1. Ikon gear (⚙) → **Project settings** → tab **General**.
2. Bagian **Your apps** → ikon web **`</>`** → nama app misal `portfolio-web` → **Register app**.
3. Firebase menampilkan objek `firebaseConfig`. Biarkan tab ini terbuka, nilainya dipakai di langkah berikutnya.

## 4. Isi environment variables

Di root project:

```bash
cp .env.local.example .env.local
```

Lalu isi `.env.local` dengan nilai dari `firebaseConfig`:

```
NEXT_PUBLIC_FIREBASE_API_KEY=AIzaSy...
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=rioga-portfolio.firebaseapp.com
NEXT_PUBLIC_FIREBASE_PROJECT_ID=rioga-portfolio
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=rioga-portfolio.firebasestorage.app
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=123456789012
NEXT_PUBLIC_FIREBASE_APP_ID=1:123456789012:web:abc123
```

`.env.local` sudah masuk `.gitignore`, jadi tidak ikut ter-commit.

> **Kenapa `NEXT_PUBLIC_` (artinya terlihat publik) aman?**
> Config Firebase memang dirancang untuk publik — semua aplikasi web Firebase mengirimkannya ke browser. API key ini hanya mengidentifikasi project, bukan memberi akses. Yang menentukan siapa boleh baca/tulis adalah security rules di langkah 5. Yang **tidak boleh** publik adalah service account JSON (Admin SDK) — file itu tidak dipakai di sini.

## 5. Pasang security rules

Isi file [`firestore.rules`](firestore.rules) di repo ini adalah rules yang benar untuk form kontak:

- siapa pun boleh **create** satu pesan,
- **tidak ada** yang boleh baca/ubah/hapus dari browser,
- field dan panjangnya divalidasi (nama ≤120 karakter, email harus berformat email, pesan ≤5000 karakter), jadi orang tidak bisa menulis dokumen sembarangan ke database kamu.

Cara memasangnya (pilih salah satu):

**Cara cepat — lewat Console:** Firestore Database → tab **Rules** → hapus isinya → copy-paste seluruh isi `firestore.rules` → **Publish**.

**Cara CLI** (kalau nanti mau versioning rules bareng kode):

```bash
npm install -g firebase-tools
firebase login
firebase init firestore   # pilih project, tunjuk ke firestore.rules
firebase deploy --only firestore:rules
```

## 6. Tes di lokal

```bash
npm run dev
```

Buka <http://localhost:3000/#contact>, isi form, kirim. Lalu cek Firebase Console → Firestore Database → collection **`messages`** → dokumen baru muncul berisi `name`, `email`, `company`, `reason`, `message`, `createdAt`, `page`, `userAgent`.

## 7. Deploy ke Vercel

Environment variable tidak ikut ter-push (karena `.env.local` di-ignore), jadi harus didaftarkan di Vercel:

1. Vercel Dashboard → project → **Settings → Environment Variables**.
2. Tambahkan keenam variabel `NEXT_PUBLIC_FIREBASE_*` dengan nilai yang sama, untuk environment **Production**, **Preview**, dan **Development**.
3. **Redeploy** (env var hanya terbaca saat build, jadi deploy lama tidak otomatis ikut).

Opsional tapi disarankan: Firebase Console → **App Check** atau Project settings → **Authorized domains**, dan di Google Cloud Console batasi API key ke domain portfolio kamu saja (HTTP referrer restriction). Ini mencegah orang memakai key kamu dari situs lain.

---

## Membaca pesan yang masuk

**Cara paling sederhana:** Firebase Console → Firestore Database → `messages`. Klik kolom `createdAt` untuk urut dari yang terbaru.

**Kalau mau notifikasi email setiap ada pesan** (perlu upgrade ke **Blaze/pay-as-you-go**, tetap praktis gratis di volume segini):

1. Firebase Console → **Extensions** → cari **Trigger Email from Firestore** → Install.
2. Konfigurasi: SMTP connection URI (misal Gmail App Password: `smtps://email@gmail.com:app-password@smtp.gmail.com:465`), collection `mail`.
3. Extension itu mengirim email dari dokumen di collection `mail`, jadi butuh satu Cloud Function kecil yang menyalin tiap dokumen `messages` baru ke `mail`. Bilang saja kalau mau saya tambahkan.

Alternatif tanpa Blaze: cek Console secara berkala, atau hubungkan Firestore ke Zapier/Make untuk kirim notifikasi.

---

## Troubleshooting

| Gejala | Penyebab | Solusi |
|---|---|---|
| `Missing or insufficient permissions` | Rules masih production default (tolak semua) atau belum di-publish | Ulangi langkah 5 |
| `Firebase is not configured` di tombol kirim | `.env.local` belum ada / belum diisi | Langkah 4, lalu **restart** `npm run dev` |
| Jalan di lokal, gagal di Vercel | Env var belum didaftarkan di Vercel atau belum redeploy | Langkah 7 |
| `auth/invalid-api-key` | Salah copy nilai, atau ada spasi/kutip di `.env.local` | Isi tanpa tanda kutip |
| Form diam saja, tidak ada error di UI | Ad-blocker memblokir domain `firestore.googleapis.com` | Cek tab Console/Network di DevTools |

---

## Kalau nanti mau pindah dari Firebase

Yang menyentuh Firebase cuma dua file: `lib/firebase.ts` dan fungsi `send()` di `components/Contact.tsx`. Ganti isi `send()` dengan `fetch()` ke Supabase, Formspree, atau API sendiri — sisa halaman tidak perlu diubah.
