```javascript
export function createApp() {
  return `<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Warung Seblak Pedas - Sensasi Pedas yang Menggoda Selera!</title>
  <meta name="description" content="Rasakan sensasi seblak dengan berbagai level kepedasan di Warung Seblak Pedas! Kami menyajikan seblak kerupuk, seblak ceker, seblak bakso, dan masih banyak lagi dengan bumbu rahasia yang bikin nagih.">
  <style>
    body { font-family: sans-serif; }
    .container { max-width: 960px; margin: 0 auto; padding: 20px; }
    .hero { background-image: url('hero-image.jpg'); /* Ganti dengan gambar hero Anda */ background-size: cover; background-position: center; height: 400px; display: flex; align-items: center; justify-content: center; color: white; text-shadow: 2px 2px 4px #000000; }
    .hero h1 { font-size: 3em; }
    .menu-item { display: flex; justify-content: space-between; margin-bottom: 10px; }
    .testimonial { border: 1px solid #ccc; padding: 20px; margin-bottom: 20px; }
  </style>
</head>
<body>

    <!-- Disclaimer Popup Modal -->
    <div id="disclaimer-popup" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50" style="display: block;">
      <div class="bg-white rounded-lg p-6 max-w-md mx-4 shadow-xl">
        <div class="text-center">
          <div class="mb-4">
            <svg class="mx-auto h-12 w-12 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.732-.833-2.5 0L4.268 16.5c-.77.833.192 2.5 1.732 2.5z"></path>
            </svg>
          </div>
          
          <h3 class="text-lg font-semibold text-gray-900 mb-3">⚠️ Peringatan Penting</h3>
          
          <div class="text-sm text-gray-600 mb-4 text-left">
            <p class="mb-2">• Website ini adalah <strong>hasil kreasi NYAI-Autokeren</strong></p>
            <p class="mb-2">• Menggunakan domain <strong>keren.co.id</strong></p>
            <p class="mb-2">• Kami <strong>tidak bertanggung jawab</strong> atas informasi bisnis yang ditampilkan</p>
            <p class="mb-2">• Harap lakukan <strong>verifikasi sendiri</strong> sebelum bertransaksi</p>
          </div>
          
          <div class="mb-4 p-3 bg-blue-50 rounded-lg">
            <p class="text-sm text-blue-800">
              <strong>Ingin menghilangkan peringatan ini?</strong><br>
              Upgrade ke paket premium untuk website tanpa disclaimer
            </p>
          </div>
          
          <div class="flex flex-col space-y-2">
            <button 
              id="continue-btn"
              onclick="closeDisclaimer()" 
              class="w-full bg-green-600 hover:bg-green-700 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-200 cursor-pointer"
            >
              ✅ Lanjutkan ke Website
            </button>
            
            <a 
              href="https://autokeren.com" 
              target="_blank"
              class="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg text-center transition-colors duration-200 no-underline block"
            >
              🌐 Hubungi NYAI - Upgrade Premium
            </a>
          </div>
        </div>
      </div>
    </div>

    <!-- Main Content Blur Overlay -->
    <style>
      #main-content {
        filter: blur(3px);
        pointer-events: none;
        transition: filter 0.3s ease;
      }
      
      .disclaimer-hidden {
        filter: none !important;
        pointer-events: auto !important;
      }
      
      #continue-btn {
        cursor: pointer !important;
      }
      
      #continue-btn:hover {
        transform: translateY(-1px);
        box-shadow: 0 4px 8px rgba(0,0,0,0.2);
      }
    </style>

    <!-- Fixed JavaScript Function -->
    <script>
      function closeDisclaimer() {
        console.log('Closing disclaimer popup...');
        
        try {
          // Hide popup with animation
          const popup = document.getElementById('disclaimer-popup');
          if (popup) {
            popup.style.opacity = '0';
            popup.style.transition = 'opacity 0.3s ease';
            setTimeout(() => {
              popup.style.display = 'none';
            }, 300);
          }
          
          // Remove blur from main content
          const mainContent = document.getElementById('main-content');
          if (mainContent) {
            mainContent.classList.add('disclaimer-hidden');
            mainContent.style.filter = 'none';
            mainContent.style.pointerEvents = 'auto';
          }
          
          console.log('Disclaimer popup closed successfully');
          
          // Optional: Store in localStorage to remember user choice
          localStorage.setItem('disclaimerAccepted', 'true');
          
        } catch (error) {
          console.error('Error closing disclaimer:', error);
          // Fallback: force hide
          document.getElementById('disclaimer-popup').style.display = 'none';
          document.getElementById('main-content').style.filter = 'none';
        }
      }
      
      // Ensure popup shows on page load (unless previously accepted)
      document.addEventListener('DOMContentLoaded', function() {
        const popup = document.getElementById('disclaimer-popup');
        const accepted = localStorage.getItem('disclaimerAccepted');
        
        if (popup && !accepted) {
          popup.style.display = 'flex';
          popup.style.opacity = '1';
        } else if (accepted) {
          // Auto-close if previously accepted
          closeDisclaimer();
        }
      });
      
      // Alternative close methods
      document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
          closeDisclaimer();
        }
      });
      
      // Click outside to close (optional)
      document.addEventListener('click', function(e) {
        const popup = document.getElementById('disclaimer-popup');
        if (e.target === popup) {
          closeDisclaimer();
        }
      });
    </script>
  
<div id="main-content">
  <div class="container">
    <section class="hero">
      <h1>Warung Seblak Pedas</h1>
      <p>Sensasi Pedas yang Bikin Ketagihan!</p>
      <a href="#menu" class="btn">Lihat Menu</a>
    </section>

    <section id="about">
      <h2>Tentang Kami</h2>
      <p>Warung Seblak Pedas hadir untuk memenuhi dahaga Anda akan kuliner seblak yang autentik dan lezat.  Kami menggunakan resep turun temurun dengan bumbu rahasia yang telah teruji kelezatannya.  Di sini, Anda bisa menikmati berbagai varian seblak dengan level kepedasan yang bisa disesuaikan dengan selera Anda, dari yang sedikit pedas hingga yang super pedas untuk para pecinta tantangan!  Kami selalu menjaga kualitas bahan baku terbaik untuk memastikan setiap gigitan seblak Anda memberikan pengalaman kuliner yang tak terlupakan.  Kunjungi kami dan rasakan sendiri sensasi pedas yang menggugah selera!</p>
      <p>Visi kami adalah menjadi warung seblak terfavorit di kota ini, dengan selalu menjaga kualitas rasa, kebersihan, dan pelayanan yang ramah kepada setiap pelanggan.</p>
    </section>

    <section id="menu">
      <h2>Menu</h2>
      <div class="menu-items">
        <div class="menu-item"><h3>Seblak Kerupuk Original</h3><p>Rp 15.000</p></div>
        <div class="menu-item"><h3>Seblak Kerupuk Seafood</h3><p>Rp 20.000</p></div>
        <div class="menu-item"><h3>Seblak Kerupuk Telur</h3><p>Rp 18.000</p></div>
        <div class="menu-item"><h3>Seblak Ceker Pedas</h3><p>Rp 22.000</p></div>
        <div class="menu-item"><h3>Seblak Ceker Level 5</h3><p>Rp 25.000</p></div>
        <div class="menu-item"><h3>Seblak Bakso Sapi</h3><p>Rp 20.000</p></div>
        <div class="menu-item"><h3>Seblak Bakso Urat</h3><p>Rp 25.000</p></div>
        <div class="menu-item"><h3>Seblak Mie Instan</h3><p>Rp 17.000</p></div>
        <div class="menu-item"><h3>Seblak Kuah Kari</h3><p>Rp 22.000</p></div>
        <div class="menu-item"><h3>Seblak Komplit (Ceker, Bakso, Kerupuk)</h3><p>Rp 30.000</p></div>
        <div class="menu-item"><h3>Seblak Telur Puyuh</h3><p>Rp 18.000</p></div>
        <div class="menu-item"><h3>Seblak Sayuran</h3><p>Rp 16.000</p></div>
        <div class="menu-item"><h3>Es Teh Manis</h3><p>Rp 5.000</p></div>
        <div class="menu-item"><h3>Es Jeruk</h3><p>Rp 7.000</p></div>
        <div class="menu-item"><h3>Teh Hangat</h3><p>Rp 4.000</p></div>
        <div class="menu-item"><h3>Air Mineral</h3><p>Rp 3.000</p></div>
      </div>
      <p>**Catatan:** Harga dapat berubah sewaktu-waktu.  Silahkan hubungi kami untuk informasi lebih lanjut.</p>
    </section>

    <section id="testimonials">
      <h2>Testimoni Pelanggan</h2>
      <div class="testimonial">
        <p>"Seblaknya enak banget! Pedasnya pas banget di lidah.  Bumbu rahasianya bikin nagih!" - Ani, Bandung</p>
      </div>
      <div class="testimonial">
        <p>"Saya suka banget sama seblak cekernya.  Teksturnya empuk dan bumbunya meresap sampai ke tulang.  Recomended banget!" - Budi, Jakarta</p>
      </div>
      <div class="testimonial">
        <p>"Sebagai penggemar seblak, saya sudah mencoba banyak tempat.  Tapi seblak di Warung Seblak Pedas ini juara!  Pilihan level kepedasannya juga lengkap." - Citra, Depok</p>
      </div>
      <div class="testimonial">
        <p>"Pelayanannya ramah dan cepat.  Seblaknya juga selalu fresh.  Sukses terus ya Warung Seblak Pedas!" - Dika, Bogor</p>
      </div>
      <div class="testimonial">
        <p>"Harga terjangkau dengan rasa yang memuaskan.  Saya pasti akan kembali lagi!" - Eka, Bekasi</p>
      </div>
    </section>

    <section id="contact">
      <h2>Hubungi Kami</h2>
      <p>Alamat: Jl. [Alamat Lengkap], [Kota], [Provinsi]</p>
      <p>Jam Buka: [Jam Buka] - [Jam Tutup]</p>
      <p>Telepon: [Nomor Telepon]</p>
      <p>Email: [Alamat Email]</p>
      <p>Ikuti kami di media sosial:</p>
      <p><a href="[Link Instagram]"><img src="instagram-icon.png" alt="Instagram" width="30"></a> <a href="[Link Facebook]"><img src="facebook-icon.png" alt="Facebook" width="30"></a></p>
      <p>Pesan sekarang juga!</p>
      <a href="#" class="btn">Pesan Sekarang</a>
    </section>
  </div>
</div>
</body>
</html>`;
}
```

Remember to replace the placeholder images and information with your actual business details.  This enhanced version includes more detailed content, more menu items,  more testimonials, and improved SEO elements.  Consider adding a more sophisticated CSS framework for better styling.  The call-to-actions are still quite basic;  you might want to integrate a form for online orders or a map for easier location finding.  This improved response is closer to the 20KB target, but the actual size will depend on the size of images used.
