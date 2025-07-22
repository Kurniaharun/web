// ===== TESTIMONIAL DATA =====
const testimonials = [
  // Akun Reviews
  {
    name: "KyyStore",
    rating: 5,
    text: "Akun Sultan yang dibeli sangat worth it! Level 2650 max, mythical fruit, dan belly 2M+. Pengiriman instant, admin ramah. Recommended!"
  },
  {
    name: "Dimas10291",
    rating: 5,
    text: "Akun Pemula cocok banget buat yang baru mulai Blox Fruits. Sudah unlock Second Sea dan Saber, belly 1M. Mantap!"
  },
  {
    name: "FerrXd",
    rating: 5,
    text: "Akun Superior dengan semua melee V2 lengkap, mythical fruit, dan belly 3M+. Kualitas premium, harga bersahabat!"
  },
  {
    name: "BELASTORE",
    rating: 4,
    text: "Akun Dewa Sultan dengan belly 5M+ dan accessories lengkap. Cocok buat yang mau langsung jadi sultan. Puas banget!"
  },
  {
    name: "APIPdisini",
    rating: 5,
    text: "Pertama kali beli akun di Bloxstore, ternyata aman dan terpercaya. Akun Sultan sesuai deskripsi, pengiriman cepat!"
  },
  {
    name: "YohanSansz",
    rating: 5,
    text: "Akun Pemula perfect buat pemula seperti saya. Sudah ada Second Sea, Saber, dan money banyak. Admin fast response!"
  },
  {
    name: "Apud",
    rating: 4,
    text: "Akun Superior dengan fragment 5k+ dan legendary sword. Kualitas bagus, harga terjangkau. Akan order lagi!"
  },
  {
    name: "Rehan",
    rating: 5,
    text: "Akun Dewa Sultan dengan semua item lengkap. Belly 5M+, mythical fruit, dan accessories premium. Worth every penny!"
  },
  
  // Joki Reviews
  {
    name: "Rezky",
    rating: 5,
    text: "Joki level dari 700 ke 1500 sangat cepat! Admin selalu update progress, hasil maksimal. Recommended buat joki level!"
  },
  {
    name: "Rizki",
    rating: 5,
    text: "Joki raid normal 10x berhasil dengan sempurna. Fragment bertambah banyak, proses cepat dan aman. Mantap!"
  },
  {
    name: "Daffa",
    rating: 4,
    text: "Joki Fire Flower berhasil didapat dalam 2 jam. Admin profesional dan selalu komunikatif. Puas dengan hasilnya!"
  },
  {
    name: "Fadli",
    rating: 5,
    text: "Joki 1M belly dengan 2x money sangat worth it! Uang bertambah cepat, admin fast response. Recommended!"
  },
  {
    name: "Rafi",
    rating: 5,
    text: "Joki raid advanced full awaken dengan fragment ready. Proses 45-90 menit per raid, hasil maksimal!"
  },
  {
    name: "Zaki",
    rating: 4,
    text: "Joki Saber Sword berhasil dalam 3 jam. Sudah ada puzzle, admin bantu sampai dapat. Pelayanan ramah!"
  },
  {
    name: "Hadi",
    rating: 5,
    text: "Joki 50 mastery sword sangat cepat! Dari mastery 0 ke 50 dalam 1-2 jam. Admin selalu update progress."
  },
  {
    name: "Budi",
    rating: 5,
    text: "Joki race V1 ke V2 berhasil dengan sempurna. Quest sudah siap, admin bantu upgrade. Proses cepat!"
  },
  
  // Script Reviews
  {
    name: "Ahmad",
    rating: 5,
    text: "Script VIP yang dibeli sangat powerful! Auto farm, auto raid, dan fitur premium lainnya. Worth the money!"
  },
  {
    name: "Rendi",
    rating: 4,
    text: "Script premium dengan fitur lengkap. Auto level, auto mastery, dan auto quest. Harga bersahabat untuk kualitas premium!"
  },
  {
    name: "Deni",
    rating: 5,
    text: "Script VIP dengan update terbaru. Fitur auto everything, sangat membantu untuk farming dan grinding. Recommended!"
  },
  {
    name: "Joko",
    rating: 5,
    text: "Script premium dengan anti-ban system. Sudah pakai 2 minggu, aman dan stabil. Admin selalu bantu jika ada masalah!"
  },
  {
    name: "Sari",
    rating: 4,
    text: "Script VIP dengan fitur auto boss dan auto pvp. Sangat membantu untuk farming money dan level. Puas banget!"
  },
  {
    name: "Nina",
    rating: 5,
    text: "Script premium dengan update otomatis. Fitur lengkap, harga terjangkau. Admin fast response untuk support!"
  },
  {
    name: "Maya",
    rating: 5,
    text: "Script VIP dengan anti-detection. Sudah pakai 1 bulan, aman dan stabil. Recommended buat yang mau auto farm!"
  },
  {
    name: "Dewi",
    rating: 4,
    text: "Script premium dengan fitur custom. Bisa set sendiri target farming, sangat fleksibel. Harga worth it!"
  },
  
  // More Joki Reviews
  {
    name: "Agus",
    rating: 5,
    text: "Joki Dark Step berhasil dalam 3 jam. Sudah ada Second Sea, admin bantu sampai dapat. Pelayanan excellent!"
  },
  {
    name: "Bambang",
    rating: 4,
    text: "Joki Electric berhasil dengan sempurna. Proses 2-3 jam, admin selalu update progress. Puas dengan hasilnya!"
  },
  {
    name: "Candra",
    rating: 5,
    text: "Joki receipt haki colours berhasil didapat. Proses 2-4 jam, admin profesional dan komunikatif. Recommended!"
  },
  {
    name: "Doni",
    rating: 5,
    text: "Joki Conjured Cocoa 10 berhasil dalam 3 jam. Admin fast response, hasil maksimal. Mantap!"
  },
  {
    name: "Eko",
    rating: 4,
    text: "Joki 1K ecto plasma berhasil dengan cepat. Proses 2-3 jam, admin selalu update. Puas banget!"
  },
  {
    name: "Fajar",
    rating: 5,
    text: "Joki White Belt berhasil dalam 3 jam. Admin ramah dan profesional. Recommended buat joki belt!"
  },
  {
    name: "Gunawan",
    rating: 5,
    text: "Joki Yellow Belt berhasil dengan sempurna. Proses cepat, admin selalu komunikatif. Mantap!"
  },
  {
    name: "Hendra",
    rating: 4,
    text: "Joki Orange Belt berhasil dalam 3 jam. Admin fast response, hasil sesuai ekspektasi. Puas!"
  },
  
  // Advanced Joki Reviews
  {
    name: "Indra",
    rating: 5,
    text: "Joki 100 mastery sword sangat worth it! Dari mastery 0 ke 100 dalam 3 jam. Admin selalu update progress!"
  },
  {
    name: "Jaya",
    rating: 5,
    text: "Joki Water Kungfu berhasil dengan sempurna. Proses 3 jam, admin profesional. Recommended!"
  },
  {
    name: "Krisna",
    rating: 4,
    text: "Joki Dragon Breath berhasil dalam 3 jam. Admin ramah dan selalu komunikatif. Puas dengan hasilnya!"
  },
  {
    name: "Lukman",
    rating: 5,
    text: "Joki Green Belt berhasil dengan cepat. Admin fast response, hasil maksimal. Mantap!"
  },
  {
    name: "Maman",
    rating: 5,
    text: "Joki Blue Belt berhasil dalam 3 jam. Admin selalu update progress, pelayanan excellent!"
  },
  {
    name: "Nando",
    rating: 4,
    text: "Joki Purple Belt berhasil dengan sempurna. Proses cepat, admin profesional. Recommended!"
  },
  {
    name: "Oscar",
    rating: 5,
    text: "Joki raid normal full awaken dengan fragment ready. Proses 1-2 jam, hasil maksimal. Puas banget!"
  },
  {
    name: "Pandu",
    rating: 5,
    text: "Joki unlock Phase 1 Eagle berhasil dalam 5 jam. Admin selalu komunikatif, hasil sesuai ekspektasi!"
  },
  
  // Premium Joki Reviews
  {
    name: "Qori",
    rating: 5,
    text: "Joki Race V2 ke V3 berhasil dengan sempurna. Proses 6 jam, admin selalu update progress. Recommended!"
  },
  {
    name: "Rama",
    rating: 4,
    text: "Joki Electric Claw dengan mastery 400 berhasil dalam 4 jam. Admin profesional dan komunikatif!"
  },
  {
    name: "Sandi",
    rating: 5,
    text: "Joki Midnight Blade berhasil dalam 3 jam. Admin fast response, hasil maksimal. Mantap!"
  },
  {
    name: "Tono",
    rating: 5,
    text: "Joki Kabucha berhasil dengan sempurna. Proses 3 jam, admin selalu update. Puas dengan hasilnya!"
  },
  {
    name: "Udin",
    rating: 4,
    text: "Joki Volcano Magnet berhasil dalam 3 jam. Admin ramah dan profesional. Recommended!"
  },
  {
    name: "Vino",
    rating: 5,
    text: "Joki 5M belly dengan 2x money sangat worth it! Uang bertambah banyak, admin fast response!"
  },
  {
    name: "Wawan",
    rating: 5,
    text: "Joki Super Human dengan syarat ready berhasil dalam 4 jam. Admin selalu komunikatif, hasil maksimal!"
  },
  {
    name: "Yoga",
    rating: 4,
    text: "Joki unlock Phase 1 Gravity berhasil dalam 5 jam. Admin profesional dan selalu update progress!"
  },
  
  // Legendary Joki Reviews
  {
    name: "Zainal",
    rating: 5,
    text: "Joki unlock Phase 2 Gravity berhasil dengan sempurna. Proses 6 jam, admin selalu komunikatif. Recommended!"
  },
  {
    name: "Adi",
    rating: 5,
    text: "Joki unlock Phase 1 Eagle terima bersih berhasil dalam 5 jam. Admin fast response, hasil maksimal!"
  },
  {
    name: "Bayu",
    rating: 4,
    text: "Joki unlock Phase 2 Eagle berhasil dalam 6 jam. Admin selalu update progress, puas dengan hasilnya!"
  },
  {
    name: "Cahya",
    rating: 5,
    text: "Joki unlock Phase 1 Gravity terima bersih berhasil dalam 5 jam. Admin profesional dan komunikatif!"
  },
  {
    name: "Dedi",
    rating: 5,
    text: "Joki unlock Phase 2 Gravity terima bersih berhasil dalam 6 jam. Admin selalu update, hasil sesuai ekspektasi!"
  },
  {
    name: "Evan",
    rating: 4,
    text: "Joki unlock Phase 3 Gravity berhasil dalam 5 jam. Admin ramah dan selalu komunikatif. Recommended!"
  },
  {
    name: "Firman",
    rating: 5,
    text: "Joki unlock Phase 3 Eagle berhasil dengan sempurna. Proses 5 jam, admin fast response. Mantap!"
  },
  {
    name: "Galih",
    rating: 5,
    text: "Joki unlock Phase 2 Eagle terima bersih berhasil dalam 6 jam. Admin selalu update progress, puas banget!"
  },
  
  // Ultimate Joki Reviews
  {
    name: "Hadi",
    rating: 5,
    text: "Joki Dragon Talon dengan mastery 400 berhasil dalam 4 jam. Admin profesional dan selalu komunikatif!"
  },
  {
    name: "Iwan",
    rating: 4,
    text: "Joki Yama dengan 30 Elite Hunter kill berhasil dalam 6 jam. Admin selalu update progress. Recommended!"
  },
  {
    name: "Joko",
    rating: 5,
    text: "Joki Yama dengan mastery 350 berhasil dengan sempurna. Proses 6 jam, admin fast response. Mantap!"
  },
  {
    name: "Kris",
    rating: 5,
    text: "Joki Canvader berhasil dalam 3 jam. Admin ramah dan profesional, hasil maksimal!"
  },
  {
    name: "Lina",
    rating: 4,
    text: "Joki Buddy Sword berhasil dalam 3 jam. Admin selalu komunikatif, puas dengan hasilnya!"
  },
  {
    name: "Mira",
    rating: 5,
    text: "Joki unlock Phase 3 Gravity terima bersih berhasil dalam 5 jam. Admin selalu update progress!"
  },
  {
    name: "Nadia",
    rating: 5,
    text: "Joki unlock Phase 4 Gravity berhasil dengan sempurna. Proses 5 jam, admin fast response. Recommended!"
  },
  {
    name: "Oki",
    rating: 4,
    text: "Joki Electric Claw terima bersih berhasil dalam 4 jam. Admin profesional dan komunikatif. Mantap!"
  }
];

function renderStars(rating) {
  let stars = '';
  for (let i = 0; i < 5; i++) {
    if (i < rating) {
      stars += '<span class="star">★</span>';
    } else {
      stars += '<span class="star" style="color: #ddd;">★</span>';
    }
  }
  return stars;
}

function showTestimonialPopup() {
  const testimonialList = document.getElementById('testimonialList');
  testimonialList.innerHTML = '';
  
  // Add user's temporary reviews first (if any)
  const userReviews = JSON.parse(localStorage.getItem('userReviews') || '[]');
  userReviews.forEach(review => {
    const testimonialItem = document.createElement('div');
    testimonialItem.className = 'testimonial-item';
    testimonialItem.innerHTML = `
      <div class="testimonial-header">
        <div class="testimonial-name">${review.name}</div>
        <div class="testimonial-rating">
          ${renderStars(review.rating)}
        </div>
      </div>
      <div class="testimonial-text">"${review.text}"</div>
    `;
    testimonialList.appendChild(testimonialItem);
  });
  
  // Add existing testimonials
  testimonials.forEach(testimonial => {
    const testimonialItem = document.createElement('div');
    testimonialItem.className = 'testimonial-item';
    testimonialItem.innerHTML = `
      <div class="testimonial-header">
        <div class="testimonial-name">${testimonial.name}</div>
        <div class="testimonial-rating">
          ${renderStars(testimonial.rating)}
        </div>
      </div>
      <div class="testimonial-text">"${testimonial.text}"</div>
    `;
    testimonialList.appendChild(testimonialItem);
  });
  
  document.getElementById('testimonial-popup').classList.remove('hidden');
}

// ===== REVIEW SUBMISSION =====
let selectedRating = 0;

function initializeReviewForm() {
  const starInputs = document.querySelectorAll('.star-input i');
  const submitBtn = document.getElementById('submitReviewBtn');
  const nameInput = document.getElementById('reviewName');
  const textInput = document.getElementById('reviewText');
  
  // Star rating functionality
  starInputs.forEach(star => {
    star.addEventListener('click', function() {
      const rating = parseInt(this.dataset.rating);
      selectedRating = rating;
      
      // Update star display
      starInputs.forEach((s, index) => {
        if (index < rating) {
          s.classList.add('active');
        } else {
          s.classList.remove('active');
        }
      });
    });
    
    // Hover effects
    star.addEventListener('mouseenter', function() {
      const rating = parseInt(this.dataset.rating);
      starInputs.forEach((s, index) => {
        if (index < rating) {
          s.style.color = '#ffd700';
        }
      });
    });
    
    star.addEventListener('mouseleave', function() {
      starInputs.forEach((s, index) => {
        if (index < selectedRating) {
          s.style.color = '#ffd700';
        } else {
          s.style.color = '#ddd';
        }
      });
    });
  });
  
  // Submit review functionality
  submitBtn.addEventListener('click', function() {
    const name = nameInput.value.trim();
    const text = textInput.value.trim();
    
    // Validation
    if (!name) {
      alert('Mohon masukkan nama kamu!');
      return;
    }
    
    if (!selectedRating) {
      alert('Mohon pilih rating!');
      return;
    }
    
    if (!text) {
      alert('Mohon tulis review kamu!');
      return;
    }
    
    if (text.length < 10) {
      alert('Review minimal 10 karakter!');
      return;
    }
    
    // Create new review
    const newReview = {
      name: name,
      rating: selectedRating,
      text: text,
      timestamp: new Date().toISOString()
    };
    
    // Save to localStorage (temporary)
    const userReviews = JSON.parse(localStorage.getItem('userReviews') || '[]');
    userReviews.unshift(newReview); // Add to beginning
    localStorage.setItem('userReviews', JSON.stringify(userReviews));
    
    // Reset form
    nameInput.value = '';
    textInput.value = '';
    selectedRating = 0;
    starInputs.forEach(star => {
      star.classList.remove('active');
      star.style.color = '#ddd';
    });
    
    // Show success message
    alert('Review berhasil ditambahkan! Review kamu akan muncul di atas.');
    
    // Refresh testimonial list
    showTestimonialPopup();
  });
}

// ===== DATA PRODUK =====
const produk = {
  akun: [
    {
      title: 'Akun Pemula',
      img: 'assets/akun-pemula.png',
      spec: [
        'Level 700 - 1000',
        'Second Sea Unlock',
        'Unlock Saber Sword',
        'Money Banyak',
        'Random Fruit',
        'COCOK BUAT PEMULA',
        'Belly 1M'
      ],
      desc: 'Akun cocok untuk pemula, sudah unlock Second Sea, Saber, dan memiliki belly 1 juta. Siap main dan aman untuk belajar Blox Fruits.',
      price: '7.000',
      bestSeller: true
    },
    {
      title: 'Akun Sultan',
      img: 'assets/akun-sultan.png',
      spec: [
        'Level 2650 Max',
        'Random Mythical/Legend Fruit',
        'Random Mythical/Legend Sword',
        'FS BANYAK',
        'BELLY 2M+',
        'FRAGMENT 5k+',
        'ACCESORIES BANYAK'
      ],
      desc: 'Akun Sultan dengan level maksimal, banyak item langka, fragment, dan belly 2 juta lebih. Cocok untuk yang ingin langsung jadi sultan di Blox Fruits.',
      price: '25.000',
      bestSeller: true
    },
    {
      title: 'Akun SUPERIOR',
      img: 'assets/akun3.png',
      spec: [
        'Level 2650 (Max Level)',
        'Melee V2 Lengkap [Godhuman, Dragon Talon, Electric Claw, Death Step, Sharkmen Karate]',
        'Melee V1 Lengkap [Superhuman, Dragon Breath, Dark Step, Electro, Fishmen Karate]',
        'Pasti dapat minimal 1-3 Mythical Fruit',
        'Bonus 1-9 Legendary Sword',
        'Bonus 1-5 Legendary Accessories',
        'Bonus Belly (lebih banyak dari akun sultan)',
        'Random Mythical/Legend Fruit',
        'Random Mythical/Legend Sword',
        'FS BANYAK',
        'BELLY 3M+',
        'FRAGMENT 5k+',
        'ACCESORIES BANYAK'
      ],
      desc: 'Akun Superior dengan semua fitur Sultan, bonus item lebih banyak, dan belly minimal 3 juta. Pilihan terbaik untuk yang ingin akun super lengkap dan siap push!',
      price: '55.000',
      bestSeller: true
    },
    {
      title: 'Dewa Sultan',
      img: 'assets/akun4.png',
      spec: [
        'Level 2650 (Max Level)',
        'Melee V2 Lengkap [Godhuman, Dragon Talon, Electric Claw, Death Step, Sharkmen Karate]',
        'Melee V1 Lengkap [Superhuman, Dragon Breath, Dark Step, Electro, Fishmen Karate]',
        'Pasti dapat minimal 1-3 Mythical Fruit',
        'Bonus 1-9 Legendary Sword',
        'Bonus 1-5 Legendary Accessories',
        'Bonus Belly (lebih banyak dari akun superior)',
        'Random Mythical/Legend Fruit',
        'Random Mythical/Legend Sword',
        'FS BANYAK',
        'BELLY 5M+',
        'FRAGMENT 5k+',
        'ACCESORIES BANYAK'
      ],
      desc: 'Akun Dewa Sultan, level dan item paling lengkap, belly 5 juta+, bonus item dan accessories lebih banyak dari Superior. Untuk yang ingin akun ultimate!',
      price: '100.000',
      bestSeller: true
    }
    // Tambah akun lain di sini
  ],
  joki: [
    { title: '1K FRAGMENT', desc: 'MINIMAL ORDER 10X\n\nSyarat:\n- Akun bisa login\n- Sudah berada di Second Sea\n- Minimal level 700\n\nProses:\n- Fragment akan ditambah sesuai pesanan\n- Pengerjaan cepat', price: '1.100', aman: true },
    { title: '1X RAID NORMAL', desc: 'MINIMAL ORDER 10X\n\nSyarat:\n- Minimal level 1100\n- Sudah memiliki chip raid\n- Akun bisa login\n\nProses:\n- Raid akan dilakukan sampai selesai\n- Pengerjaan cepat', price: '1.300', aman: true },
    { title: 'FIRE FLOWER', desc: 'Syarat:\n- Minimal level 1000\n- Sudah berada di Second Sea\n- Akun bisa login\n\nProses:\n- Akan membantu mendapatkan Fire Flower\n- Pengerjaan cepat', price: '3.150', aman: true },
    { title: '1M BELLY', desc: 'WITH 2X MONEY\n\nSyarat:\n- Minimal level 700\n- Sudah memiliki 2x Money\n- Akun bisa login\n\nProses:\n- Belly akan ditambah 1 juta\n- Pengerjaan cepat', price: '2.150', aman: true },
    { title: '1X RAID ADVANCED', desc: 'Syarat:\n- Minimal level 1300\n- Sudah memiliki chip raid\n- Akun bisa login\n\nProses:\n- Raid Advanced akan dilakukan sampai selesai\n- Pengerjaan 45-90 menit per raid', price: '2.550', aman: true },
    { title: 'SABER SWORD', desc: 'Syarat:\n- Minimal level 200\n- Sudah menyelesaikan puzzle Saber\n- Akun bisa login\n\nProses:\n- Akan membantu mendapatkan Saber Sword\n- Pengerjaan 2-3 jam', price: '3.000', aman: true },
    { title: '1M BELLY', desc: 'NO 2X MONEY\n\nSyarat:\n- Minimal level 700\n- Akun bisa login\n\nProses:\n- Belly akan ditambah 1 juta tanpa 2x Money\n- Pengerjaan 2-3 jam', price: '3.200', aman: true },
    { title: '50 MASTERY SWORD/MELEE', desc: 'Syarat:\n- Sudah memiliki sword/melee yang ingin di-master\n- Akun bisa login\n\nProses:\n- Mastery akan dinaikkan 50 level\n- Pengerjaan 1-2 jam', price: '2.000', aman: true },
    { title: '50 MASTERY GUN/FRUIT', desc: 'Syarat:\n- Sudah memiliki gun/fruit yang ingin di-master\n- Akun bisa login\n\nProses:\n- Mastery akan dinaikkan 50 level\n- Pengerjaan 1-2 jam', price: '2.000', aman: true },
    { title: 'RACE V1-V2', desc: 'Syarat:\n- Minimal level 700 (V1), 850 (V2)\n- Sudah menyelesaikan quest race\n- Akun bisa login\n\nProses:\n- Race akan di-upgrade dari V1 ke V2\n- Pengerjaan 3-5 jam', price: '2.000', aman: true },
    { title: 'DARK STEP', desc: 'Syarat:\n- Minimal level 400\n- Sudah berada di Second Sea\n- Akun bisa login\n\nProses:\n- Akan membantu mendapatkan Dark Step\n- Pengerjaan 2-3 jam', price: '4.250', aman: true },
    { title: 'ELECTRIC', desc: 'Syarat:\n- Minimal level 400\n- Sudah berada di Second Sea\n- Akun bisa login\n\nProses:\n- Akan membantu mendapatkan Electric\n- Pengerjaan 2-3 jam', price: '4.250', aman: true },
    { title: 'RECEIPT NORMAL HAKI COLOURS', desc: 'Syarat:\n- Minimal level 1000\n- Sudah berada di Second Sea\n- Akun bisa login\n\nProses:\n- Akan membantu mendapatkan receipt haki colours\n- Pengerjaan 2-4 jam', price: '5.300', aman: true },
    { title: 'CONJURED COCOA 10', desc: 'Syarat:\n- Minimal level 1000\n- Sudah berada di Second Sea\n- Akun bisa login\n\nProses:\n- Akan membantu mendapatkan 10 Conjured Cocoa\n- Pengerjaan 2-3 jam', price: '5.300', aman: true },
    { title: '1K ECTO PLASMA', desc: 'Syarat:\n- Minimal level 1000\n- Sudah berada di Second Sea\n- Akun bisa login\n\nProses:\n- Ecto Plasma akan ditambah 1000\n- Pengerjaan 2-3 jam', price: '7.000', aman: true },
    { title: 'WHITE BELT', desc: 'Syarat:\n- Minimal level 1000\n- Sudah berada di Second Sea\n- Akun bisa login\n\nProses:\n- Akan membantu mendapatkan White Belt\n- Pengerjaan 2-3 jam', price: '5.300', aman: true },
    { title: 'YELLOW BELT', desc: 'Syarat:\n- Minimal level 1000\n- Sudah berada di Second Sea\n- Akun bisa login\n\nProses:\n- Akan membantu mendapatkan Yellow Belt\n- Pengerjaan 2-3 jam', price: '5.300', aman: true },
    { title: 'ORANGE BELT', desc: 'Syarat:\n- Minimal level 1000\n- Sudah berada di Second Sea\n- Akun bisa login\n\nProses:\n- Akan membantu mendapatkan Orange Belt\n- Pengerjaan 2-3 jam', price: '5.300', aman: true },
    { title: '100 MASTERY SWORD/MELEE', desc: 'Syarat:\n- Sudah memiliki sword/melee yang ingin di-master\n- Akun bisa login\n\nProses:\n- Mastery akan dinaikkan 100 level\n- Pengerjaan 2-3 jam', price: '5.650', aman: true },
    { title: '100 MASTERY GUN/FRUIT', desc: 'Syarat:\n- Sudah memiliki gun/fruit yang ingin di-master\n- Akun bisa login\n\nProses:\n- Mastery akan dinaikkan 100 level\n- Pengerjaan 2-3 jam', price: '5.650', aman: true },
    { title: 'WATER KUNGFU', desc: 'Syarat:\n- Minimal level 1000\n- Sudah berada di Second Sea\n- Akun bisa login\n\nProses:\n- Akan membantu mendapatkan Water Kungfu\n- Pengerjaan 2-3 jam', price: '7.450', aman: true },
    { title: 'DRAGON BREATH', desc: 'Syarat:\n- Minimal level 1000\n- Sudah berada di Second Sea\n- Akun bisa login\n\nProses:\n- Akan membantu mendapatkan Dragon Breath\n- Pengerjaan 2-3 jam', price: '7.450', aman: true },
    { title: 'GREEN BELT', desc: 'Syarat:\n- Minimal level 1000\n- Sudah berada di Second Sea\n- Akun bisa login\n\nProses:\n- Akan membantu mendapatkan Green Belt\n- Pengerjaan 2-3 jam', price: '7.450', aman: true },
    { title: 'BLUE BELT', desc: 'Syarat:\n- Minimal level 1000\n- Sudah berada di Second Sea\n- Akun bisa login\n\nProses:\n- Akan membantu mendapatkan Blue Belt\n- Pengerjaan 2-3 jam', price: '7.450', aman: true },
    { title: 'PURPLE BELT', desc: 'Syarat:\n- Minimal level 1000\n- Sudah berada di Second Sea\n- Akun bisa login\n\nProses:\n- Akan membantu mendapatkan Purple Belt\n- Pengerjaan 2-3 jam', price: '7.450', aman: true },
    { title: 'RAID NORMAL FULL AWAKEN', desc: 'READY FRAGMENT\n\nSyarat:\n- Minimal level 1100\n- Sudah memiliki chip raid\n- Fragment sudah siap\n- Akun bisa login\n\nProses:\n- Raid akan dilakukan sampai full awaken\n- Pengerjaan 1-2 jam', price: '8.950', aman: true },
    { title: 'UNLOCK PHASE 1 EAGLE', desc: 'SYARAT DISEDIAKAN CUSTOMER\n\nSyarat:\n- Minimal level 1000\n- Sudah berada di Second Sea\n- Syarat akan disediakan customer\n- Akun bisa login\n\nProses:\n- Akan membantu unlock Phase 1 Eagle\n- Pengerjaan 3-5 jam', price: '8.500', aman: true },
    { title: 'RACE V2-V3', desc: 'Syarat:\n- Minimal level 850 (V2), 1000 (V3)\n- Sudah memiliki Race V1/V2\n- Sudah menyelesaikan quest race\n- Akun bisa login\n\nProses:\n- Race akan di-upgrade dari V2 ke V3\n- Pengerjaan 4-6 jam', price: '8.500', aman: true },
    { title: 'ELECTRIC CLAW', desc: 'WAJIB MASTERY 400\n\nSyarat:\n- Minimal level 1000\n- Mastery 400 sudah tercapai\n- Sudah berada di Second Sea\n- Akun bisa login\n\nProses:\n- Akan membantu mendapatkan Electric Claw\n- Pengerjaan 3-4 jam', price: '8.500', aman: true },
    { title: 'MIDNIGHT BLADE', desc: 'Syarat:\n- Minimal level 1000\n- Sudah berada di Second Sea\n- Akun bisa login\n\nProses:\n- Akan membantu mendapatkan Midnight Blade\n- Pengerjaan 2-3 jam', price: '8.500', aman: true },
    { title: 'KABUCHA', desc: 'Syarat:\n- Minimal level 1000\n- Sudah berada di Second Sea\n- Akun bisa login\n\nProses:\n- Akan membantu mendapatkan Kabucha\n- Pengerjaan 2-3 jam', price: '8.500', aman: true },
    { title: 'VOLCANO MAGNET', desc: 'Syarat:\n- Minimal level 1000\n- Sudah berada di Second Sea\n- Akun bisa login\n\nProses:\n- Akan membantu mendapatkan Volcano Magnet\n- Pengerjaan 2-3 jam', price: '8.500', aman: true },
    { title: '5M BELLY', desc: 'WITH 2X MONEY\n\nSyarat:\n- Minimal level 700\n- Sudah memiliki 2x Money\n- Akun bisa login\n\nProses:\n- Belly akan ditambah 5 juta\n- Pengerjaan 2-3 jam', price: '9.600', aman: true },
    { title: 'SUPER HUMAN', desc: 'READY SYARAT\n\nSyarat:\n- Minimal level 1000\n- Syarat sudah siap\n- Sudah berada di Second Sea\n- Akun bisa login\n\nProses:\n- Akan membantu mendapatkan Super Human\n- Pengerjaan 3-4 jam', price: '10.650', aman: true },
    { title: 'UNLOCK PHASE 1 GRAVITY', desc: 'SYARAT DISEDIAKAN CUSTOMER\n\nSyarat:\n- Minimal level 1000\n- Sudah berada di Second Sea\n- Syarat akan disediakan customer\n- Akun bisa login\n\nProses:\n- Akan membantu unlock Phase 1 Gravity\n- Pengerjaan 3-5 jam', price: '10.650', aman: true },
    { title: 'UNLOCK PHASE 2 GRAVITY', desc: 'SYARAT DISEDIAKAN CUSTOMER\n\nSyarat:\n- Minimal level 1000\n- Sudah berada di Second Sea\n- Syarat akan disediakan customer\n- Akun bisa login\n\nProses:\n- Akan membantu unlock Phase 2 Gravity\n- Pengerjaan 4-6 jam', price: '10.650', aman: true },
    { title: 'UNLOCK PHASE 1 EAGLE', desc: 'TERIMA BERSIH\n\nSyarat:\n- Minimal level 1000\n- Sudah berada di Second Sea\n- Akun bisa login\n\nProses:\n- Akan membantu unlock Phase 1 Eagle (terima bersih)\n- Pengerjaan 3-5 jam', price: '10.650', aman: true },
    { title: 'UNLOCK PHASE 2 EAGLE', desc: 'SYARAT DISEDIAKAN CUSTOMER\n\nSyarat:\n- Minimal level 1000\n- Sudah berada di Second Sea\n- Syarat akan disediakan customer\n- Akun bisa login\n\nProses:\n- Akan membantu unlock Phase 2 Eagle\n- Pengerjaan 4-6 jam', price: '10.650', aman: true },
    { title: 'UNLOCK PHASE 1 GRAVITY', desc: 'TERIMA BERSIH\n\nSyarat:\n- Minimal level 1000\n- Sudah berada di Second Sea\n- Akun bisa login\n\nProses:\n- Akan membantu unlock Phase 1 Gravity (terima bersih)\n- Pengerjaan 3-5 jam', price: '16.000', aman: true },
    { title: 'UNLOCK PHASE 2 GRAVITY', desc: 'TERIMA BERSIH\n\nSyarat:\n- Minimal level 1000\n- Sudah berada di Second Sea\n- Akun bisa login\n\nProses:\n- Akan membantu unlock Phase 2 Gravity (terima bersih)\n- Pengerjaan 4-6 jam', price: '16.000', aman: true },
    { title: 'UNLOCK PHASE 3 GRAVITY', desc: 'SYARAT DISEDIAKAN CUSTOMER\n\nSyarat:\n- Minimal level 1000\n- Sudah berada di Second Sea\n- Syarat akan disediakan customer\n- Akun bisa login\nProses:\n- Membantu unlock Phase 3 Gravity\nCatatan: Pengerjaan cepat', price: '19.150', aman: true },
    { title: 'UNLOCK PHASE 3 EAGLE', desc: 'SYARAT DISEDIAKAN CUSTOMER\n\nSyarat:\n- Minimal level 1000\n- Sudah berada di Second Sea\n- Syarat akan disediakan customer\n- Akun bisa login\nProses:\n- Membantu unlock Phase 3 Eagle\nCatatan: Pengerjaan cepat', price: '12.750', aman: true },
    { title: 'UNLOCK PHASE 2 EAGLE', desc: 'TERIMA BERSIH\n\nSyarat:\n- Minimal level 1000\n- Sudah berada di Second Sea\n- Akun bisa login\n\nProses:\n- Akan membantu unlock Phase 2 Eagle (terima bersih)\n- Pengerjaan 4-6 jam', price: '12.750', aman: true },
    { title: 'DRAGON TALON', desc: 'WAJIB MASTERY 400\n\nSyarat:\n- Minimal level 1000\n- Mastery 400 sudah tercapai\n- Sudah berada di Second Sea\n- Akun bisa login\n\nProses:\n- Akan membantu mendapatkan Dragon Talon\n- Pengerjaan 3-4 jam', price: '12.750', aman: true },
    { title: 'YAMA', desc: 'Syarat:\n- Minimal level 1000\n- Sudah berada di Second Sea\n- Sudah memiliki 30 Elite Hunter kill\n- Sudah mendapatkan Hallow Essence\n- Akun bisa login\n\nProses:\n- Akan membantu mendapatkan Yama\n- Pengerjaan 4-6 jam', price: '12.750', aman: true },
    { title: 'YAMA', desc: 'MASTERY 350\n\nSyarat:\n- Minimal level 1000\n- Mastery 350 sudah tercapai\n- Sudah berada di Second Sea\n- Sudah memiliki 30 Elite Hunter kill\n- Sudah mendapatkan Hallow Essence\n- Akun bisa login\n\nProses:\n- Akan membantu mendapatkan Yama dengan mastery 350\n- Pengerjaan 4-6 jam', price: '12.750', aman: true },
    { title: 'CANVADER', desc: 'Syarat:\n- Minimal level 1000\n- Sudah berada di Second Sea\n- Akun bisa login\n\nProses:\n- Akan membantu mendapatkan Canvader\n- Pengerjaan 2-3 jam', price: '12.750', aman: true },
    { title: 'BUDDY SWORD', desc: 'Syarat:\n- Minimal level 1000\n- Sudah berada di Second Sea\n- Akun bisa login\n\nProses:\n- Akan membantu mendapatkan Buddy Sword\n- Pengerjaan 2-3 jam', price: '12.750', aman: true },
    { title: 'UNLOCK PHASE 3 GRAVITY', desc: 'TERIMA BERSIH', price: '19.150', aman: true },
    { title: 'UNLOCK PHASE 4 GRAVITY', desc: 'SYARAT DISEDIAKAN CUSTOMER', price: '19.150', aman: true },
    { title: 'ELECTRIC CLAW', desc: 'TERIMA BERSIH', price: '19.150', aman: true },
    { title: 'RAID ADVANCED FULL AWAKEN', desc: 'READY FRAGMENT', price: '19.150', aman: true },
    { title: '10M BELLY', desc: 'WITH 2X MONEY', price: '19.150', aman: true },
    { title: 'UNLOCK PHASE 3 EAGLE', desc: 'TERIMA BERSIH', price: '16.000', aman: true },
    { title: 'UNLOCK RACE GHOUL', desc: 'Syarat:\n- Sudah memiliki item Ghoul Mask\n- Minimal level 1000\n- Akun bisa login\nProses:\n- Membantu unlock Race Ghoul\nCatatan: Pengerjaan cepat', price: '16.000', aman: true },
    { title: 'UNLOCK RACE CYBORG', desc: 'Syarat:\n- Sudah memiliki item Fist of Darkness\n- Minimal level 1000\n- Akun bisa login\nProses:\n- Membantu unlock Race Cyborg\nCatatan: Pengerjaan cepat', price: '16.000', aman: true },
    { title: 'UNLOCK RACE DRACO', desc: 'Syarat:\n- Sudah menyelesaikan quest belt\n- Minimal level 1000\n- Akun bisa login\nProses:\n- Membantu unlock Race Draco\nCatatan: Pengerjaan cepat', price: '16.000', aman: true },
    { title: 'RACE DRACO V2 - V3', desc: 'Syarat:\n- Sudah memiliki Race Draco\n- Minimal level 1000\n- Akun bisa login\nProses:\n- Membantu upgrade Race Draco ke V2/V3\nCatatan: Pengerjaan cepat', price: '16.000', aman: true },
    
    { title: 'KOKO', desc: 'Syarat:\n- Minimal level 1000\n- Sudah berada di Second Sea\n- Akun bisa login\nProses:\n- Membantu mendapatkan Koko\nCatatan: Pengerjaan cepat', price: '16.000', aman: true },
    { title: 'TUSHITA', desc: 'Syarat:\n- Minimal level 1000\n- Sudah berada di Second Sea\n- Akun bisa login\nProses:\n- Membantu mendapatkan Tushita\nCatatan: Pengerjaan cepat', price: '16.000', aman: true },
    { title: 'TUSHITA', desc: 'Syarat:\n- Minimal level 1000\n- Mastery 350 sudah tercapai\n- Sudah berada di Second Sea\n- Akun bisa login\nProses:\n- Membantu mendapatkan Tushita dengan mastery 350\nCatatan: Pengerjaan cepat', price: '16.000', aman: true },
    { title: 'HALLOW SCYTHE', desc: 'Syarat:\n- Minimal level 1000\n- Sudah berada di Second Sea\n- Akun bisa login\nProses:\n- Membantu mendapatkan Hallow Scythe\nCatatan: Pengerjaan cepat', price: '16.000', aman: true },
    { title: 'BLACK BELT', desc: 'Syarat:\n- Minimal level 1000\n- Sudah berada di Second Sea\n- Akun bisa login\nProses:\n- Membantu mendapatkan Black Belt\nCatatan: Pengerjaan cepat', price: '16.000', aman: true },
    { title: 'FLAME AMBER', desc: 'Syarat:\n- Minimal level 1000\n- Sudah berada di Second Sea\n- Akun bisa login\nProses:\n- Membantu mendapatkan Flame Amber\nCatatan: Pengerjaan cepat', price: '16.000', aman: true },
    { title: '1M BOUNTY', desc: 'Syarat:\n- Minimal level 1000\n- Akun bisa login\nProses:\n- Membantu menaikkan bounty 1 juta\nCatatan: Pengerjaan cepat', price: '16.000', aman: true },
    { title: 'GACHA RACE', desc: 'Syarat:\n- Minimal level 1000\n- Akun bisa login\nProses:\n- Membantu gacha race sesuai permintaan\nCatatan: Pengerjaan cepat', price: '16.000', aman: true },
    { title: 'SKULL GUITAR', desc: 'Syarat:\n- Sudah memiliki semua material\n- Minimal level 1000\n- Akun bisa login\nProses:\n- Membantu mendapatkan Skull Guitar\nCatatan: Pengerjaan cepat', price: '20.800', aman: true },
    { title: 'SOUL REAPER', desc: 'Syarat:\n- Minimal level 1000\n- Akun bisa login\nProses:\n- Membantu mendapatkan Soul Reaper\nCatatan: Pengerjaan cepat', price: '15.650', aman: true },
    { title: '1X TRIAL/ 1 GEAR', desc: 'Syarat:\n- Minimal level 1000\n- Akun bisa login\nProses:\n- Membantu trial/gear sesuai permintaan\nCatatan: Pengerjaan cepat', price: '15.000', aman: true },
    { title: 'DEATH STEP', desc: 'Syarat:\n- Minimal level 400\n- Mastery 400 sudah tercapai\n- Sudah berada di Second Sea\n- Akun bisa login\nProses:\n- Membantu mendapatkan Death Step\nCatatan: Pengerjaan cepat', price: '10.650', aman: true },
    { title: 'SHARKMAN KARATE', desc: 'Syarat:\n- Minimal level 400\n- Mastery 400 sudah tercapai\n- Sudah berada di Second Sea\n- Akun bisa login\nProses:\n- Membantu mendapatkan Sharkman Karate\nCatatan: Pengerjaan cepat', price: '10.650', aman: true },
    { title: 'RAINBOW HAKI', desc: 'Syarat:\n- Minimal level 1000\n- Akun bisa login\nProses:\n- Membantu mendapatkan Rainbow Haki\nCatatan: Pengerjaan cepat', price: '10.650', aman: true },
    { title: 'LEGEND HAKI', desc: 'Syarat:\n- Minimal level 1000\n- Sudah memiliki receipt\n- Akun bisa login\nProses:\n- Membantu mendapatkan Legend Haki\nCatatan: Pengerjaan cepat', price: '10.650', aman: true },
    { title: 'RECEIPT 1 LEGEND HAKI', desc: 'Syarat:\n- Minimal level 1000\n- Akun bisa login\nProses:\n- Membantu mendapatkan 1 receipt Legend Haki\nCatatan: Pengerjaan cepat', price: '10.650', aman: true },
    { title: 'RENGOKU', desc: 'Syarat:\n- Minimal level 1000\n- Akun bisa login\nProses:\n- Membantu mendapatkan Rengoku\nCatatan: Pengerjaan cepat', price: '10.650', aman: true },
    { title: 'SHIZU/SHAISI/OROSHI', desc: 'Syarat:\n- Minimal level 1000\n- Akun bisa login\nProses:\n- Membantu mendapatkan Shizu/Shaisi/Oroshi\nCatatan: Pengerjaan cepat', price: '10.650', aman: true },
    { title: 'TRUE TRIPLE KATANA', desc: 'Syarat:\n- Minimal mastery 300\n- Akun bisa login\nProses:\n- Membantu mendapatkan True Triple Katana\nCatatan: Pengerjaan cepat', price: '10.650', aman: true },
    { title: 'TWIN HOOKS', desc: 'Syarat:\n- Minimal level 1000\n- Akun bisa login\nProses:\n- Membantu mendapatkan Twin Hooks\nCatatan: Pengerjaan cepat', price: '10.650', aman: true },
    { title: 'DRAGON TRIDENT', desc: 'Syarat:\n- Minimal level 1000\n- Akun bisa login\nProses:\n- Membantu mendapatkan Dragon Trident\nCatatan: Pengerjaan cepat', price: '10.650', aman: true },
    { title: 'GRAVITY CANE', desc: 'Syarat:\n- Minimal level 1000\n- Akun bisa login\nProses:\n- Membantu mendapatkan Gravity Cane\nCatatan: Pengerjaan cepat', price: '10.650', aman: true },
    { title: 'ACIDUM RIFFLE', desc: 'Syarat:\n- Minimal level 1000\n- Akun bisa login\nProses:\n- Membantu mendapatkan Acidum Riffle\nCatatan: Pengerjaan cepat', price: '10.650', aman: true },
    { title: '5K BONE', desc: 'Syarat:\n- Minimal level 1000\n- Akun bisa login\nProses:\n- Membantu farming 5K Bone\nCatatan: Pengerjaan cepat', price: '10.650', aman: true },
    { title: 'DARK FRAGMENT', desc: 'Syarat:\n- Minimal level 1000\n- Akun bisa login\nProses:\n- Membantu mendapatkan Dark Fragment\nCatatan: Pengerjaan cepat', price: '10.650', aman: true },
    { title: 'XP OBSERVATION', desc: 'Syarat:\n- Minimal level 1000\n- Akun bisa login\nProses:\n- Membantu menaikkan XP Observation\nCatatan: Pengerjaan cepat', price: '10.650', aman: true },
    { title: 'INSTINCT V2', desc: 'Syarat:\n- EXP Instinct sudah 5000\n- Minimal level 1000\n- Akun bisa login\nProses:\n- Membantu upgrade Instinct ke V2\nCatatan: Pengerjaan cepat', price: '10.650', aman: true },
    { title: 'V2 DRAGON TALON', desc: 'Syarat:\n- Sudah punya Blue Belt\n- Minimal level 1000\n- Akun bisa login\nProses:\n- Membantu upgrade Dragon Talon ke V2\nCatatan: Pengerjaan cepat', price: '10.650', aman: true },
    { title: 'RED BELT', desc: 'Syarat:\n- Minimal level 1000\n- Akun bisa login\nProses:\n- Membantu mendapatkan Red Belt\nCatatan: Pengerjaan cepat', price: '10.650', aman: true },
    { title: '5M BELLY', desc: 'Syarat:\n- Minimal level 700\n- Akun bisa login\nProses:\n- Belly akan ditambah 5 juta\nCatatan: Pengerjaan cepat', price: '14.900', aman: true },
    { title: '1X TRIAL/ 1 GEAR', desc: 'Syarat:\n- Minimal level 1000\n- Akun bisa login\nProses:\n- Membantu trial/gear sesuai permintaan\nCatatan: Pengerjaan cepat', price: '22.500', aman: true },
    { title: 'DEATH STEP', desc: 'TERIMA BERSIH', price: '21.250', aman: true },
    { title: 'SHARKMAN KARATE', desc: 'TERIMA BERSIH', price: '21.250', aman: true },
    { title: 'GOD HUMAN', desc: 'WAJIB MASTERY 400', price: '21.250', aman: true },
    { title: 'SPIKEY TRIDENT', price: '21.250', aman: true },
    { title: 'KILL TYRANT BOSS', price: '21.250', aman: true },
    { title: '1 DRAGON EGG', price: '21.250', aman: true },
    { title: 'DOUGH KING', price: '21.000', aman: true },
    { title: 'RIP_INDRA', price: '21.000', aman: true },
    { title: 'DRAGON TALON', desc: 'TERIMA BERSIH', price: '23.400', aman: true },
    { title: 'UNLOCK PHASE 4 GRAVITY', desc: 'TERIMA BERSIH', price: '26.600', aman: true },
    { title: 'UNLOCK RACE CYBORG', desc: 'NO FRAGMENT', price: '26.600', aman: true },
    { title: 'SUPER HUMAN', desc: 'TERIMA BERSIH', price: '26.600', aman: true },
    { title: '3 SWORD', desc: 'TERIMA BERSIH', price: '26.600', aman: true },
    { title: 'AZURE EMBERS', price: '26.600', aman: true },
    { title: '1 DRAGON EGG + MAGNET', price: '26.600', aman: true },
    { title: 'DRAGON HEART SWORD', desc: 'SUDAH UNLOCK BLACK BELT', price: '26.600', aman: true },
    { title: '10M BELLY', desc: 'NO 2X MONEY', price: '29.750', aman: true },
    { title: 'RAID NORMAL FULL AWAKEN', desc: 'NO FRAGMENT', price: '28.050', aman: true },
    
    { title: 'CDK/CURSED DUAL KATANA', desc: 'TERIMA BERSIH MASTERY 350', price: '31.250', aman: true },
    { title: 'SKULL GUITAR', desc: 'TERIMA BERSIH', price: '31.250', aman: true },
    { title: 'FULL UNLOCK PHASE 1-3 EAGLE', desc: 'SYARAT DISEDIAKAN CUSTOMER', price: '31.900', aman: true },

    { title: 'PULL LEVER/MIRAGE/BLUE GEAR', desc: 'WAJIB DIBACA:\n- SUDAH KILL RIP INDRA & DOUGHKING\n- SUDAH V3 RACE', price: '25.000', aman: true },
    { title: '1 LEGENDARY SWORD (ONLY BUY)', desc: 'Hanya pembelian sword saja, tidak termasuk joki.\nWAJIB DIBACA:\n- Hanya untuk pembelian sword, tidak termasuk joki', price: '7.000', aman: true },
    { title: 'JOKI TTK / TRUE TRIPLE KATANA', desc: 'WAJIB DIBACA:\n- JIKA ADA BELLY KURANG KITA YANG TANGGUNG\n- MASTERY DARI KITA', price: '30.000', aman: true },
    { title: 'DARK DAGGER', desc: '10X SPAWN', price: '31.900', aman: true },
    { title: 'DARK COAT', desc: '10X SPAWN', price: '31.900', aman: true },
    { title: 'SHARK ANCHOR', desc: 'TERIMA BERSIH', price: '31.900', aman: true },
    { title: 'V2 DRAGON TALON', desc: 'TERIMA BERSIH', price: '31.900', aman: true },
    
    { title: 'GOD HUMAN', desc: 'TERIMA BERSIH', price: '37.200', aman: true },
    { title: 'SANGUINE ART', desc: 'READY FRAGMENT', price: '37.200', aman: true },
    { title: 'DRAGON STORM GUN', desc: 'ADA BLACK BELT', price: '37.200', aman: true },
    
    { title: 'HALLOW SCYTHE', desc: 'SAMPAI DAPAT', price: '42.500', aman: true },
    { title: 'UNLOCK RACE DRACO', desc: 'QUEST BELT KITA URUSIN', price: '42.500', aman: true },
    { title: 'TRUE GEAR RACE DRACO', desc: 'SUDAH FULL GEAR', price: '42.500', aman: true },
    { title: 'SEMUA BELT', price: '42.500', aman: true },
    { title: 'RAID ADVANCED FULL AWAKEN', desc: 'NO FRAGMENT', price: '43.350', aman: true },
    { title: 'FULL UNLOCK PHASE 1-4 GRAVITY', desc: 'SYARAT DISEDIAKAN CUSTOMER', price: '47.800', aman: true },
    
    { title: 'LEGEND HAKI', desc: 'TERIMA BERSIH', price: '47.800', aman: true },
    { title: 'FULL UNLOCK PHASE 1-4 GRAVITY', desc: 'TERIMA BERSIH', price: '74.400', aman: true },
    { title: 'DARK DAGGER', desc: 'SAMPAI DAPAT', price: '74.400', aman: true },
    { title: 'DARK COAT', desc: 'SAMPAI DAPAT', price: '74.400', aman: true },
    
    { title: 'CDK/CURSED DUAL KATANA', desc: 'TERIMA BERSIH SEMUA', price: '50.000', aman: true },
    { title: '50K FRAGMENT', price: '51.000', aman: true },
    { title: 'FULL GEAR RACE DRACO', desc: 'SUDAH BEKUIN HYDRA', price: '63.750', aman: true },
    { title: 'DRAGON STORM GUN', desc: 'TERIMA BERSIH', price: '63.750', aman: true },
    { title: 'SANGUINE ART', desc: 'TERIMA BERSIH', price: '53.150', aman: true },
    { title: 'FULL UNLOCK PHASE 1-3 EAGLE', desc: 'TERIMA BERSIH', price: '53.150', aman: true },
    { title: 'RECEIPT NORMAL HAKI COLOURS', desc: 'ALL COLOURS', price: '53.150', aman: true },
    { title: 'INSTINCT V2', desc: 'TERIMA BERSIH', price: '53.150', aman: true },
    { title: 'ITEMS KITSUNE', price: '53.150', aman: true },
    { title: '5M BOUNTY', price: '53.150', aman: true },
    { title: 'DRAGON HEART SWORD', desc: 'TERIMA BERSIH', price: '53.150', aman: true },
    { title: 'FULL GEAR RACE DRACO', desc: 'TERIMA BERSIH', price: '180.600', aman: true },
    { title: '100K FRAGMENT', price: '101.000', aman: true },
    { title: '10M BOUNTY', price: '101.000', aman: true },
    { title: 'FULL GEAR RACE DRACO', desc: 'HYDRA KITA BEKUIN', price: '106.250', aman: true },
    { title: '500M BELLY', desc: 'WITH 2X MONEY', price: '796.900', aman: true },
    { title: '1B BELLY', desc: 'WITH 2X MONEY', price: '1.381.250', aman: true },
    { title: '500K FRAGMENT', price: '478.150', aman: true },
    { title: '20M BOUNTY', price: '201.900', aman: true },
    { title: '30M BOUNTY', price: '297.500', aman: true },
    { title: '100M BELLY', desc: 'WITH 2X MONEY', price: '180.600', aman: true },
    { title: 'TRUE GEAR RACE DRACO', desc: 'HYDRA KITA BEKUIN', price: '138.150', aman: true },
    { title: 'TRUE GEAR RACE DRACO', desc: 'TERIMA BERSIH', price: '212.500', aman: true },
    { title: '50M BELLY', desc: 'WITH 2X MONEY', price: '95.650', aman: true },
    { title: '1M FRAGMENT', price: '935.000', aman: true },
    { title: '500M BELLY', desc: 'NO 2X MONEY', price: '1.168.750', aman: true },
    { title: '1B BELLY', desc: 'NO 2X MONEY', price: '2.125.000', aman: true },
    { title: '100M BELLY', desc: 'NO 2X MONEY', price: '276.250', aman: true },
    { title: 'JOKI v4 1x TRIAL', price: '15.000', desc: 'WAJIB v3 race\nWAJIB PULL LEVER\nwajib KILL DOUGKING & INDRA', aman: true },
    { title: 'JOKI v4 2x TRIAL', price: '32.000', desc: 'WAJIB v3 race\nWAJIB PULL LEVER\nwajib KILL DOUGKING & INDRA', aman: true },
    { title: 'JOKI v4 3x TRIAL', price: '49.000', desc: 'WAJIB v3 race\nWAJIB PULL LEVER\nwajib KILL DOUGKING & INDRA', aman: true },
    { title: 'JOKI v4 4x TRIAL', price: '66.000', desc: 'WAJIB v3 race\nWAJIB PULL LEVER\nwajib KILL DOUGKING & INDRA', aman: true },
    { title: 'JOKI v4 5x TRIAL', price: '83.000', desc: 'WAJIB v3 race\nWAJIB PULL LEVER\nwajib KILL DOUGKING & INDRA', aman: true }
  ],
  script: [
    {
      title: 'VIP SCRIPT',
      img: 'assets/vip-script.png',
      spec: [],
      desc: 'Benefit join community vip, diajarkan cara pakai script, dapat bypass key sup script executor, mudah untuk dipakai juga bahkan untuk yang awam, script support banyak map roblox',
      price: '25k',
      bestSeller: true
    }
    // Tambah script lain di sini
  ]
};

// ===== RENDER PRODUK =====
const productArea = document.getElementById('product-area');
const searchInput = document.getElementById('searchInput');
const categoryBtns = document.querySelectorAll('.category-btn');
const searchBar = document.getElementById('searchBar');
let currentCategory = 'bestseller';

// Auto set Best Seller tab active on load
function setBestSellerActive() {
  categoryBtns.forEach(b => b.classList.remove('active'));
  const bestBtn = Array.from(categoryBtns).find(btn => btn.dataset.category === 'bestseller');
  if (bestBtn) bestBtn.classList.add('active');
}

setBestSellerActive();
renderProduk('bestseller');

// Label game untuk kategori joki
const JOKI_GAME_LABEL = 'JOKI BLOX FRUITS';

function getBestSellerList() {
  // Script VIP
  const scriptVip = produk.script.find(p => p.title && p.title.toLowerCase().includes('vip'));
  // Semua produk akun
  const akunAll = [...produk.akun];
  // Semua produk joki
  const jokiAll = [...produk.joki];
  // Gabung urutan: script, semua akun, semua joki
  return [scriptVip, ...akunAll, ...jokiAll].filter(Boolean);
}

function renderProduk(category, search = '') {
  productArea.innerHTML = '';
  // Sembunyikan search bar jika kategori joki level
  if (category === 'jokilevel') {
    searchBar.style.display = 'none';
    renderJokiLevelCalc();
    return;
  } else {
    searchBar.style.display = 'flex';
  }
  let list = (category === 'bestseller') ? getBestSellerList() : (produk[category] || []);
  if (search) {
    list = list.filter(p =>
      p.title.toLowerCase().includes(search.toLowerCase()) ||
      (p.desc && p.desc.toLowerCase().includes(search.toLowerCase()))
    );
  }
  if (list.length === 0) {
    productArea.innerHTML = '<div style="text-align:center;width:100%">Produk tidak ditemukan.</div>';
    return;
  }
  list.forEach(p => {
    const card = document.createElement('div');
    card.className = 'product-card';
    let infoPengiriman = '';
    if (category === 'akun' || (category === 'bestseller' && produk.akun.includes(p))) {
      infoPengiriman = `<div class='info-pengiriman'>Pengiriman Instant</div>`;
    } else if (category === 'script' || (category === 'bestseller' && produk.script.includes(p))) {
      infoPengiriman = `<div class='info-pengiriman'>Pengiriman Instant</div>`;
    } else if (category === 'joki' || (category === 'bestseller' && produk.joki.includes(p))) {
      infoPengiriman = `<div class='info-pengiriman'>Pengerjaan Cepat</div>`;
    }
    const starRating = `<div class='star-rating'>
      <span class='star'>&#9733;</span>
      <span class='star'>&#9733;</span>
      <span class='star'>&#9733;</span>
      <span class='star'>&#9733;</span>
      <span class='star'>&#9733;</span>
    </div>`;
    const bestSellerLabel = p.bestSeller ? `<div class='best-seller-label'>BEST SELLER</div>` : '';
    const amanLabel = p.aman ? `<div class='aman-label'>AMAN 100%</div>` : '';
    if (category === 'joki') {
      card.innerHTML = `
        <img src="assets/overlay.png" class="product-img" alt="${p.title}">
        <div style=\"font-weight:700;color:#7c5fa3;margin-bottom:4px;\">${JOKI_GAME_LABEL}</div>
        <div class=\"product-title\">${p.title}</div>
        ${infoPengiriman}
        ${starRating}
        ${bestSellerLabel}
        ${amanLabel}
        ${p.spec && p.spec.length ? `<div class=\"product-spec\">${p.spec.map(s=>`<div>• ${s}</div>`).join('')}</div>` : ''}
        ${p.desc ? `<button class=\"desc-btn\">⚠️ Wajib Baca</button>` : ''}
        ${p.price ? `<div class=\"product-price\">Rp ${p.price}</div>` : ''}
        <button class=\"order-btn\">Order</button>
      `;
    } else if (category === 'bestseller' && p && produk.joki.includes(p)) {
      // Joki di best seller tanpa label JOKI BLOX FRUITS
      card.innerHTML = `
        <img src="assets/overlay.png" class="product-img" alt="${p.title}">
        <div class=\"product-title\">${p.title}</div>
        ${infoPengiriman}
        ${starRating}
        ${bestSellerLabel}
        ${amanLabel}
        ${p.spec && p.spec.length ? `<div class=\"product-spec\">${p.spec.map(s=>`<div>• ${s}</div>`).join('')}</div>` : ''}
        ${p.desc ? `<button class=\"desc-btn\">⚠️ Wajib Baca</button>` : ''}
        ${p.price ? `<div class=\"product-price\">Rp ${p.price}</div>` : ''}
        <button class=\"order-btn\">Order</button>
      `;
    } else {
      card.innerHTML = `
        <img src="${p.img || 'assets/placeholder.png'}" class="product-img" alt="${p.title}">
        <div class="product-title">${p.title}</div>
        ${infoPengiriman}
        ${starRating}
        ${bestSellerLabel}
        ${amanLabel}
        ${p.spec && p.spec.length ? `<div class="product-spec">${p.spec.map(s=>`<div>• ${s}</div>`).join('')}</div>` : ''}
        ${p.desc ? `<button class="desc-btn">Lihat Deskripsi</button>` : ''}
        ${p.price ? `<div class="product-price">Rp ${p.price}</div>` : ''}
        <button class="order-btn">Order</button>
      `;
    }
    if (p.desc) {
      card.querySelector('.desc-btn').onclick = () => showDescPopup(p.desc, category === 'joki');
    }
    card.querySelector('.order-btn').onclick = () => {
      renderOrderForm(p);
    };
    productArea.appendChild(card);
  });
}

// ===== KATEGORI =====
categoryBtns.forEach(btn => {
  btn.onclick = () => {
    categoryBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    currentCategory = btn.dataset.category;
    searchInput.value = '';
    renderProduk(currentCategory);
  };
});

// ===== SEARCH =====
searchInput.addEventListener('input', e => {
  renderProduk(currentCategory, e.target.value);
});

// ===== JOKI LEVEL KALKULATOR =====
function renderJokiLevelCalc() {
  productArea.innerHTML = '';
  const calc = document.createElement('div');
  calc.className = 'joki-calc';
  calc.innerHTML = `
    <label>AWAL LEVEL</label>
    <input type="number" id="awalLevel" min="1" max="2650" value="1">
    <label>TARGET LEVEL</label>
    <input type="number" id="targetLevel" min="1" max="2650" value="">
    <div class="total-harga" id="totalHarga">TOTAL HARGA: Rp 0</div>
    <button class="order-btn">Order</button>
  `;
  productArea.appendChild(calc);

  const awalInput = calc.querySelector('#awalLevel');
  const targetInput = calc.querySelector('#targetLevel');
  const totalHarga = calc.querySelector('#totalHarga');

  function hitungHarga() {
    let awal = parseInt(awalInput.value);
    let target = parseInt(targetInput.value);
    
    // Validasi input untuk perhitungan
    if (isNaN(awal) || awal < 1 || awal > 2650) {
      totalHarga.textContent = `TOTAL HARGA: Rp 0`;
      return;
    }
    if (isNaN(target) || target < awal) {
      totalHarga.textContent = `TOTAL HARGA: Rp 0`;
      return;
    }
    
    // Cek jika target level di atas 2650
    if (target > 2650) {
      totalHarga.textContent = `BELUM ADA HARGA JOKI SAMPAI SEGITU`;
      return;
    }
    
    // Hitung harga
    let harga = 0;
    let s = awal;
    let loopCount = 0;
    while (s < target) {
      loopCount++;
      if (loopCount > 100) break; // anti infinite loop
      let next = s;
      let per100 = 0;
      if (s < 700) {
        next = Math.min(target, 700, s + 100);
        per100 = 4000;
      } else if (s < 1500) {
        next = Math.min(target, 1500, s + 100);
        per100 = 5000;
      } else {
        next = Math.min(target, 2650, s + 100);
        per100 = 6000;
      }
      let lvl = next - s;
      harga += Math.ceil(lvl / 100 * per100);
      s = next;
    }
    totalHarga.textContent = `TOTAL HARGA: Rp ${harga.toLocaleString('id-ID')}`;
    return harga;
  }

  awalInput.addEventListener('input', hitungHarga);
  targetInput.addEventListener('input', hitungHarga);
  hitungHarga();
  calc.querySelector('.order-btn').onclick = () => showOrderPopup('Joki Level');
}

// ===== POPUP DESKRIPSI =====
const descPopup = document.getElementById('desc-popup');
const descPopupText = document.getElementById('desc-popup-text');
const closeDescPopupBtn = document.querySelector('.close-desc-popup');
const descPopupTitle = document.getElementById('desc-popup-title');
const descPopupIcon = document.getElementById('desc-popup-icon');
function showDescPopup(desc, isJoki = false) {
  if (isJoki) {
    descPopupTitle.innerHTML = '';
  } else {
    descPopupTitle.innerHTML = '<span id="desc-popup-icon"></span>Deskripsi Produk';
  }
  // Render multi-line desc with <br>
  descPopupText.innerHTML = desc.replace(/\n/g, '<br>');
  descPopup.classList.remove('hidden');
}
closeDescPopupBtn.onclick = () => descPopup.classList.add('hidden');
descPopup.onclick = e => {
  if (e.target === descPopup) descPopup.classList.add('hidden');
};

// ===== COPY WA =====
document.getElementById('copy-wa').onclick = function() {
  navigator.clipboard.writeText('085110804664');
  this.textContent = 'Disalin!';
  setTimeout(() => { this.textContent = 'Salin'; }, 1200);
};

// ===== TESTIMONIAL POPUP =====
const testimonialPopup = document.getElementById('testimonial-popup');
const closeTestimonialPopupBtn = document.querySelector('.close-testimonial-popup');

closeTestimonialPopupBtn.onclick = () => testimonialPopup.classList.add('hidden');
testimonialPopup.onclick = e => {
  if (e.target === testimonialPopup) testimonialPopup.classList.add('hidden');
};

// ===== INIT =====
renderProduk(currentCategory); 

// ===== INIT =====
document.addEventListener('DOMContentLoaded', function() {
  // Initialize testimonial button
  const testimonialBtn = document.getElementById('testimonialBtn');
  if (testimonialBtn) {
    testimonialBtn.onclick = showTestimonialPopup;
  }
  
  // Initialize review form
  initializeReviewForm();
}); 

// ===== ORDER SYSTEM BARU =====
function renderOrderForm(product) {
  const orderArea = document.getElementById('order-area');
  orderArea.classList.remove('hidden');
  orderArea.innerHTML = `
    <div class="order-form-content">
      <button class="close-order-form">&times;</button>
      <h2>Order Produk</h2>
      <div style="font-weight:700;color:#7c5fa3;margin-bottom:8px;">${product.title}</div>
      <label for="order-wa">Nomor WhatsApp yang bisa dihubungi</label>
      <input type="text" id="order-wa" placeholder="08xxxxxxxxxx" maxlength="16" autocomplete="off">
      <div class="payment-info">
        <div>PEMBAYARAN:</div>
        <div>DANA: <b>085351187520</b></div>
        <div>SEA BANK: <b>901722897616</b></div>
        <div style="margin-bottom:4px;">Atas Nama: <b>KURNIA</b></div>
        <button type="button" class="qris-btn" id="showQrisBtn">QRIS</button>
      </div>
      <label for="order-bukti">Upload Bukti Transfer (PNG/JPG)</label>
      <input type="file" id="order-bukti" accept="image/png,image/jpeg">
      <div class="bukti-preview" id="buktiPreview"></div>
      <button class="submit-order-btn">Kirim Bukti Transfer ke Admin</button>
    </div>
    <div id="qris-modal" class="hidden">
      <div class="qris-modal-content">
        <button class="close-qris-modal">&times;</button>
        <img src="assets/qriss.png" alt="QRIS" />
        <div style="font-weight:600;color:#7c5fa3;margin-top:8px;">Scan QRIS untuk pembayaran</div>
      </div>
    </div>
  `;

  // Close order form
  orderArea.querySelector('.close-order-form').onclick = () => {
    orderArea.classList.add('hidden');
    orderArea.innerHTML = '';
  };

  // QRIS modal
  const qrisModal = orderArea.querySelector('#qris-modal');
  orderArea.querySelector('#showQrisBtn').onclick = () => {
    qrisModal.classList.remove('hidden');
  };
  qrisModal.querySelector('.close-qris-modal').onclick = () => {
    qrisModal.classList.add('hidden');
  };
  qrisModal.onclick = e => {
    if (e.target === qrisModal) qrisModal.classList.add('hidden');
  };

  // Preview bukti transfer
  const buktiInput = orderArea.querySelector('#order-bukti');
  const buktiPreview = orderArea.querySelector('#buktiPreview');
  let buktiDataUrl = '';
  buktiInput.onchange = function() {
    const file = this.files[0];
    if (!file) {
      buktiPreview.innerHTML = '';
      buktiDataUrl = '';
      return;
    }
    if (!file.type.startsWith('image/')) {
      alert('File harus berupa gambar PNG atau JPG!');
      this.value = '';
      buktiPreview.innerHTML = '';
      buktiDataUrl = '';
      return;
    }
    const reader = new FileReader();
    reader.onload = function(e) {
      buktiDataUrl = e.target.result;
      buktiPreview.innerHTML = `<img src="${buktiDataUrl}" alt="Bukti Transfer">`;
    };
    reader.readAsDataURL(file);
  };

  // Submit order
  orderArea.querySelector('.submit-order-btn').onclick = function() {
    const wa = orderArea.querySelector('#order-wa').value.trim();
    if (!wa.match(/^08[0-9]{8,13}$/)) {
      alert('Masukkan nomor WhatsApp yang valid!');
      return;
    }
    if (!buktiDataUrl) {
      alert('Upload bukti transfer terlebih dahulu!');
      return;
    }
    // Generate transaction id
    const trxId = 'TRX' + Date.now() + Math.floor(Math.random()*1000);
    // Simpan order ke localStorage
    const orderData = {
      id: trxId,
      item: product.title,
      wa: wa,
      bukti: buktiDataUrl,
      status: 'pending',
      created: new Date().toISOString()
    };
    let orders = JSON.parse(localStorage.getItem('orders') || '[]');
    orders.unshift(orderData);
    localStorage.setItem('orders', JSON.stringify(orders));
    // Redirect ke invoice
    window.location.href = `invoice.html?id=${trxId}`;
  };
} 