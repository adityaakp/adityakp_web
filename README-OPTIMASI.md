# OPTIMASI WEBSITE ASLI — Aditya Khawandi Putra

Versi ini adalah **PATCH KONSERVATIF untuk project asli `adityakp_web`**, bukan redesign. Desain bulan, awan, warna navy/coral, animasi fullPage/Parallax/Barba, navigasi, 20 proyek dan 9 sertifikat dipertahankan.

## PENTING: Cara memasang tanpa merusak repository

1. Buat backup folder repository Anda terlebih dahulu. Di GitHub Desktop, lebih aman membuat branch baru `optimasi-konservatif` dari `main` agar perubahan mudah dibatalkan.
2. Gunakan `adityakp_PATCH_konservatif.zip` jika Anda hanya ingin mengganti file asli yang diperlukan. **Ekstrak isi ZIP tepat di dalam folder repository `adityakp_web`** (folder yang berisi `index.html`). Pilih replace hanya untuk nama file yang sama.
3. File PNG, font, folder `.git`, dan library animasi asli **tidak dihapus atau ditimpa**. Patch menambahkan aset `.webp`, social preview, robots, sitemap dan helper aksesibilitas.
4. Periksa `index.html`, `reile.html`, dan `about.html` dari browser melalui server lokal (bukan double click file://). Pastikan animasi, hamburger menu, section, dan gambar berhasil dimuat.
5. Baru commit dan push ketika pratinjau website sudah benar. Jika bermasalah, di GitHub Desktop gunakan Discard Changes **hanya jika perubahan itu semuanya milik patch**; jika sudah commit, gunakan Revert pada commit tersebut.

Jika ingin melihat semua file lengkap tanpa menggabungkan secara manual, tersedia `adityakp_FULL_konservatif.zip`. Folder `.git` tidak disertakan pada ZIP lengkap agar tidak menimpa riwayat Git Anda.

## Rincian perubahan

- **Desain**: struktur dan gaya lama tetap sama. Hanya tambahan kalimat pengantar kecil di hero, fokus keyboard, dan tautan sumber prestasi. Tidak mengganti font utama, palet warna, layout atau sistem animasi.
- **SEO**: judul/deskripsi berbeda per halaman, canonical, Open Graph/Twitter card, favicon, robots.txt, sitemap.xml, schema.org `Person` dan `WebSite` (halaman utama) dan `WebPage` (halaman pendukung).
- **Kualitas**: memperbaiki typo `FORTFOLIO`, HTML penutup `section` yang berlebih, tautan external `rel="noopener noreferrer"`, label ikon sosial, tombol navigasi dapat diakses keyboard, Escape untuk menutup menu.
- **JavaScript**: memperbaiki `.addClass(".js-hidden")` menjadi `.addClass("js-hidden")` dan menghapus pemanggilan `ga("send",...)` yang bisa memicu error jika Google Analytics UA lama tidak digunakan. Tidak mengganti vendor Parallax/fullPage/Barba.
- **Performa**: 29 gambar PNG proyek/sertifikat yang digunakan punya versi WebP sekitar **69,24 MB → 6,11 MB untuk media yang dipakai**, dengan gambar asli tetap tersedia sebagai cadangan (artinya ukuran folder repository justru bertambah, tetapi transfer gambar ke pengunjung berkurang). Portfolio/certificate images dimuat lazy dan async; gambar background di CSS memakai fallback PNG.
- **Keamanan dasar**: `_headers` untuk Netlify berisi nosniff, referrer-policy dan permissions policy, tanpa CSP ketat yang berisiko merusak plugin lama.

## Pengaturan domain yang WAJIB diverifikasi

Saya menggunakan `https://adityakhawandiputra.netlify.app/` sebagai canonical karena inilah URL portfolio yang pernah dicantumkan dalam percakapan. URL ini **belum berhasil diverifikasi online saat revisi dilakukan**. Jika alamat deployment Anda berbeda, lakukan find-and-replace di `index.html`, `reile.html`, `about.html`, `robots.txt`, `sitemap.xml`: ganti `https://adityakhawandiputra.netlify.app` dengan alamat domain final. Jangan deploy canonical untuk domain yang tidak Anda gunakan.

Tidak ada jaminan Google menampilkan Ringkasan AI, karena ini ditentukan oleh sistem Google. Setelah deploy: pastikan website berstatus 200, cek Inspect URL di Search Console, submit sitemap, dan ukur PageSpeed Insights/Lighthouse.

## Ringkasan QA lokal

- Sintaks JavaScript dicek dengan Node `--check`.
- Struktur HTML diparse dengan lxml, tanpa kesalahan HTML yang dilaporkan pada 3 halaman.
- Schema JSON-LD diparse, tautan internal dan referensi gambar diaudit, jumlah proyek dan sertifikat dipastikan tetap 20 dan 9.
- Snapshot **statis** halaman utama, portfolio, sertifikat dilakukan pada 1366×768 dan 390×844. Snapshot mempertahankan komposisi visual asli.
- **Batasan**: browser pengujian di lingkungan ini memblokir navigasi ke localhost/website sehingga interaksi animasi JavaScript dan skor Lighthouse belum dapat diuji end-to-end. Harap cek interaksi secara langsung di browser lokal sebelum push.

## Catatan font dan lisensi

Font Futura, file gambar, dan aset dari project awal tetap menjadi bagian dari project Anda. Tidak ada file font baru. Periksa bahwa Anda memiliki hak untuk menerbitkan/mendistribusikan font dan gambar tersebut. Tidak ada file `.git` di dalam paket.
