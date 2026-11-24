export type TierSurface = 'light-gray' | 'dark' | 'white';

export interface TierFeature {
  index: string;
  title: string;
  description: string;
  metric: string;
}

export interface CurriculumModule {
  week: string;
  title: string;
  topics: string[];
}

export interface EducationTier {
  id: string;
  navLabel: string;
  stageNumber: number;
  levelLabel: string;
  duration: string;
  totalHours: string;
  projectCount: string;
  title: string;
  headline: string;
  description: string;
  surface: TierSurface;
  imageSrc: string;
  imageAlt: string;
  features: [TierFeature, TierFeature, TierFeature];
  curriculum: {
    summary: string;
    format: string;
    certificate: string;
    targetAudience: string;
    modules: CurriculumModule[];
    outcomes: string[];
  };
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  completedTier: string;
  rating: number;
  quote: string;
  initials: string;
  avatarBg: string;
}

export interface InfoDocument {
  id: string;
  title: string;
  subtitle: string;
  updatedAt: string;
  sections: {
    heading: string;
    body: string;
  }[];
}

export const EDUCATION_TIERS: EducationTier[] = [
  {
    id: 'kademe-1',
    navLabel: '1. Kademe Eğitimler',
    stageNumber: 1,
    levelLabel: '1. Kademe · Temel Seviye',
    duration: '8 Hafta',
    totalHours: '48 Saat',
    projectCount: '4 Uygulamalı Proje',
    title: '1. Kademe Eğitimler',
    headline: 'Sağlam temellerle kusursuz bir başlangıç.',
    description:
      'Sıfırdan başlayanlar için yapılandırılmış analitik düşünme, modern yazılım temelleri ve ürün tasarımı disiplini.',
    surface: 'light-gray',
    imageSrc: '/src/assets/images/kademe_1_temel_studio_1795428806697.jpg',
    imageAlt: '1. Kademe Eğitimler — Anodize alüminyum ve mat cam modüler temel yapı blokları',
    features: [
      {
        index: '01',
        title: 'Sistematik Kavram Mimarisi',
        description:
          'Karmaşık teknik konuları yalın, sindirilebilir modüllerle ve canlı örnekler eşliğinde kalıcı biçimde kavrayın.',
        metric: '16 Temel Modül',
      },
      {
        index: '02',
        title: 'Birebir Kod ve Tasarım İncelemesi',
        description:
          'Her hafta teslim ettiğiniz çalışmalar deneyimli eğitmenler tarafından satır satır incelenir ve geri bildirim verilir.',
        metric: 'Haftalık 1:1 Değerlendirme',
      },
      {
        index: '03',
        title: 'Gerçek Senaryolu Atölyeler',
        description:
          'Teoride kalmayan, doğrudan portfolyonuza ekleyebileceğiniz dört uçtan uca başlangıç projesi geliştirin.',
        metric: '4 Portfolyo Projesi',
      },
    ],
    curriculum: {
      summary:
        '1. Kademe programı, dijital ürün geliştirme ve modern mühendislik dünyasına sıfırdan, eksiksiz bir temel atmak isteyen katılımcılar için tasarlandı.',
      format: 'Canlı Çevrimiçi Dersler + Hafta Sonu Atölye',
      certificate: 'Sonsuz Akademi 1. Kademe Temel Yetkinlik Sertifikası',
      targetAudience: 'Kariyerine yeni yön vermek isteyenler, üniversite öğrencileri ve disiplinli temel arayanlar.',
      modules: [
        {
          week: '1–2. Hafta',
          title: 'Algoritmik Düşünme ve Problem Modelleme',
          topics: [
            'Temel veri yapıları ve akış tasarımı',
            'Problem parçalama yöntemleri ve temiz çalışma düzeni',
            'Versiyon kontrolü (Git) ve ekip içi temel pratikler',
          ],
        },
        {
          week: '3–4. Hafta',
          title: 'Modern Arayüz Mimarisi ve Tipografi',
          topics: [
            'Semantik yapı, duyarlı (responsive) ızgara sistemleri',
            'Görsel hiyerarşi, boşluk matematiği ve erişilebilirlik standartları',
            'Bileşen tabanlı arayüz geliştirme temelleri',
          ],
        },
        {
          week: '5–6. Hafta',
          title: 'Etkileşimli Uygulama Geliştirme',
          topics: [
            'Durum yönetimi, olay akışı ve form doğrulama',
            'Veri kaynaklarıyla çalışma ve asenkron işlemler',
            'Hata ayıklama ve kullanıcı deneyimi iyileştirmeleri',
          ],
        },
        {
          week: '7–8. Hafta',
          title: 'Bitirme Projesi ve Sunum',
          topics: [
            'Gerçek hayat briefi ile uçtan uca ürün geliştirme',
            'Kod kalitesi denetimi ve yayına alma süreçleri',
            'Jüri değerlendirmesi ve portfolyo sunumu',
          ],
        },
      ],
      outcomes: [
        'Sıfırdan duyarlı, erişilebilir ve temiz kodlu dijital arayüzler inşa etme',
        'Profesyonel versiyon kontrol ve geliştirme iş akışlarına hakimiyet',
        'Kendi portfolyosunu sunabilecek düzeyde 4 tamamlanmış proje',
      ],
    },
  },
  {
    id: 'kademe-2',
    navLabel: '2. Kademe Eğitimler',
    stageNumber: 2,
    levelLabel: '2. Kademe · Orta Seviye',
    duration: '10 Hafta',
    totalHours: '72 Saat',
    projectCount: '5 Sistem Projesi',
    title: '2. Kademe Eğitimler',
    headline: 'Pratikten üretime. Kesintisiz ustalaşma.',
    description:
      'Temel bilgisini gerçek dünya sistemlerine dönüştürmek isteyenler için modüler mimari, veri akışı ve üretim standartları.',
    surface: 'dark',
    imageSrc: '/src/assets/images/kademe_2_orta_studio_1795428806463.jpg',
    imageAlt: '2. Kademe Eğitimler — Mat uzay siyahı titanyum ve optik lenslerden oluşan iç içe sistem halkaları',
    features: [
      {
        index: '01',
        title: 'Uçtan Uca Sistem Entegrasyonu',
        description:
          'İstemci ve sunucu katmanlarını güvenli API mimarileri, kimlik doğrulama ve gerçek veri tabanlarıyla birleştirin.',
        metric: 'Full-Stack Mimari',
      },
      {
        index: '02',
        title: 'Performans ve Test Kültürü',
        description:
          'Otomatik test yazımı, yük profilleme ve hata izleme araçlarıyla üretim ortamına hazır yazılımlar geliştirin.',
        metric: '%95+ Test Kapsamı',
      },
      {
        index: '03',
        title: 'Çevik Ekip Simülasyonu',
        description:
          'Sprint planlama, kod inceleme (PR) ve sürüm yönetimi ritüellerini gerçek bir ürün ekibi gibi deneyimleyin.',
        metric: '4 Canlı Sprint',
      },
    ],
    curriculum: {
      summary:
        '2. Kademe, temel geliştirme becerisine sahip katılımcıları bağımsız çalışan, güvenilir ve ölçeklenebilir uygulamalar üreten orta seviye profesyonellere taşır.',
      format: 'Haftada 3 Gün Canlı Uygulama + Sprint Değerlendirmesi',
      certificate: 'Sonsuz Akademi 2. Kademe Uygulamalı Sistem Geliştirme Sertifikası',
      targetAudience: '1. Kademe mezunları veya en az 6 ay temel proje deneyimi bulunan geliştirici ve tasarımcılar.',
      modules: [
        {
          week: '1–3. Hafta',
          title: 'İleri Bileşen Desenleri ve Durum Mimarisi',
          topics: [
            'Yeniden kullanılabilir tasarım sistemleri ve bileşen kütüphaneleri',
            'Karmaşık durum yönetimi ve önbellekleme stratejileri',
            'Tip güvenliği (TypeScript) ile hatasız veri sözleşmeleri',
          ],
        },
        {
          week: '4–6. Hafta',
          title: 'Sunucu Katmanı, API Tasarımı ve Veri Modelleme',
          topics: [
            'RESTful servis tasarımı, doğrulama ve hata yönetimi',
            'İlişkisel ve doküman tabanlı veri modelleme pratikleri',
            'Oturum güvenliği, yetkilendirme ve rol tabanlı erişim',
          ],
        },
        {
          week: '7–8. Hafta',
          title: 'Test Otomasyonu ve Performans Optimizasyonu',
          topics: [
            'Birim, entegrasyon ve uçtan uca test senaryoları',
            'Render performansı, ağ optimizasyonu ve Core Web Vitals',
            'CI/CD süreçleri ile otomatik derleme ve dağıtım',
          ],
        },
        {
          week: '9–10. Hafta',
          title: 'Ekip Projesi ve Canlı Yayın',
          topics: [
            'Çok kullanıcılı üretim uygulaması geliştirme',
            'Kod gözden geçirme ve teknik dokümantasyon',
            'Canlı demo günü ve sektör mentorları geri bildirimi',
          ],
        },
      ],
      outcomes: [
        'Hem ön yüz hem arka yüz katmanlarını tek başına kurgulayabilme',
        'Test edilmiş, tip güvenli ve yüksek performanslı ürünler yayına alma',
        'Gerçek yazılım ekiplerinin sprint ve kod inceleme kültürüne tam uyum',
      ],
    },
  },
  {
    id: 'kademe-3',
    navLabel: '3. Kademe Eğitimler',
    stageNumber: 3,
    levelLabel: '3. Kademe · İleri Seviye',
    duration: '12 Hafta',
    totalHours: '96 Saat',
    projectCount: '3 Ölçekli Mimari',
    title: '3. Kademe Eğitimler',
    headline: 'Yüksek ölçek. Kusursuz mühendislik.',
    description:
      'Yüksek trafikli dağıtık sistemler, ileri tasarım sistemleri ve kurumsal düzeyde güvenlik mimarileri üzerine derinlemesine eğitim.',
    surface: 'white',
    imageSrc: '/src/assets/images/kademe_3_ileri_studio_1795428806403.jpg',
    imageAlt: '3. Kademe Eğitimler — Kristal cam dalga ve hassas işlenmiş gümüş alüminyum katmanlı mimari yapı',
    features: [
      {
        index: '01',
        title: 'Dağıtık Sistem Tasarımı',
        description:
          'Yüksek eşzamanlılık, olay güdümlü mimariler, önbellek katmanları ve kesintisiz erişilebilirlik kurguları.',
        metric: 'Yüksek Ölçek Mimarisi',
      },
      {
        index: '02',
        title: 'Kurumsal Güvenlik ve Gözlemlenebilirlik',
        description:
          'Tehdit modelleme, sıfır güven (Zero Trust) ilkeleri, dağıtık izleme ve gerçek zamanlı anomali tespiti.',
        metric: 'Üretim Güvenliği',
      },
      {
        index: '03',
        title: 'Kıdemli Mentorluk Oturumları',
        description:
          'Küresel teknoloji şirketlerinde görev yapan baş mühendisler ve ürün direktörleriyle vaka analizleri.',
        metric: '12 Kıdemli Mentor',
      },
    ],
    curriculum: {
      summary:
        '3. Kademe, karmaşık teknik kararlar alabilen, büyük ölçekli mimarileri tasarlayıp yönetebilen ileri düzey mühendisler ve ürün mimarları yetiştirir.',
      format: 'Seminer + Mimarlık İnceleme Kurulları + Laboratuvar',
      certificate: 'Sonsuz Akademi 3. Kademe İleri Mimari ve Mühendislik Diploması',
      targetAudience: '2. Kademe mezunları veya sektörde aktif olarak 2+ yıl çalışan profesyoneller.',
      modules: [
        {
          week: '1–3. Hafta',
          title: 'Ölçeklenebilir Mimari ve Sistem Tasarımı',
          topics: [
            'Mikroservis ve modüler monolit karar matrisi',
            'Kuyruk sistemleri, olay tabanlı iletişim ve veri tutarlılığı',
            'Yüksek trafik altında yük dengeleme ve hız sınırlama',
          ],
        },
        {
          week: '4–6. Hafta',
          title: 'İleri Düzey Tasarım Sistemleri ve Mikro Ön Yüzler',
          topics: [
            'Çok markalı tasarım token mimarisi',
            'Erişilebilirlik denetimi (WCAG AAA) ve uluslararasılaştırma',
            'Büyük ölçekli monorepo yönetimi ve derleme optimizasyonu',
          ],
        },
        {
          week: '7–9. Hafta',
          title: 'Güvenlik Mühendisliği ve Bulut Altyapısı',
          topics: [
            'OWASP ileri güvenlik testleri ve tehdit modelleme',
            'Konteyner orkestrasyonu ve altyapının kod olarak yönetimi',
            'Gözlemlenebilirlik: log, metrik ve dağıtık izleme',
          ],
        },
        {
          week: '10–12. Hafta',
          title: 'Mimari Tasarım Dokümanı (RFC) ve Savunma',
          topics: [
            'Milyon kullanıcılı bir sistemin uçtan uca mimari tasarımı',
            'Maliyet, gecikme ve dayanıklılık analizi',
            'Baş mühendis kurulu önünde teknik savunma',
          ],
        },
      ],
      outcomes: [
        'Yüksek trafikli ve hataya dayanıklı sistem mimarileri tasarlama',
        'Kurumsal güvenlik, gözlemlenebilirlik ve maliyet optimizasyonu kararları alma',
        'Teknik RFC yazımı ve üst düzey mimari değerlendirme süreçlerini yönetme',
      ],
    },
  },
  {
    id: 'kademe-4',
    navLabel: '4. Kademe Eğitimler',
    stageNumber: 4,
    levelLabel: '4. Kademe · Uzmanlık Seviyesi',
    duration: '14 Hafta',
    totalHours: '110 Saat',
    projectCount: 'Kapsamlı Ustalık Tezi',
    title: '4. Kademe Eğitimler',
    headline: 'Sınırların ötesinde. Liderlik ve ustalık.',
    description:
      'Teknoloji liderleri, baş mimarlar ve kurucular için stratejik ürün vizyonu, yapay zeka sistemleri ve organizasyonel ölçeklendirme.',
    surface: 'dark',
    imageSrc: '/src/assets/images/kademe_4_uzmanlik_studio_1795428806580.jpg',
    imageAlt: '4. Kademe Eğitimler — Obsidyen titanyum Möbius heykeli, derin siyah stüdyo ışığı',
    features: [
      {
        index: '01',
        title: 'Stratejik Teknoloji Liderliği',
        description:
          'Mühendislik organizasyonu kurma, teknik yol haritası oluşturma ve yönetim kurulu düzeyinde karar alma.',
        metric: 'Yönetici Programı',
      },
      {
        index: '02',
        title: 'Yeni Nesil Akıllı Sistemler',
        description:
          'Büyük ölçekli veri boru hatları, üretim düzeyinde akıllı otomasyon ve sürdürülebilir ürün ekonomisi.',
        metric: 'İleri Ar-Ge Laboratuvarı',
      },
      {
        index: '03',
        title: 'Seçkin Mezun ve Yatırımcı Ağı',
        description:
          'Yalnızca 4. Kademe mezunlarına açık yıllık zirveler, kurucu buluşmaları ve ömür boyu danışmanlık erişimi.',
        metric: 'Ömür Boyu Üyelik',
      },
    ],
    curriculum: {
      summary:
        '4. Kademe, teknik ustalığı stratejik vizyonla birleştiren; ürün, ekip ve teknoloji organizasyonlarına yön veren liderler için seçkin bir ustalık programıdır.',
      format: 'Kapalı Grup Çalıştayları + Birebir Yönetici Koçluğu',
      certificate: 'Sonsuz Akademi 4. Kademe Ustalık ve Teknoloji Liderliği Beratı',
      targetAudience: 'Kıdemli mühendisler, teknik liderler, ürün direktörleri ve teknoloji girişimi kurucuları.',
      modules: [
        {
          week: '1–4. Hafta',
          title: 'Teknoloji Stratejisi ve Organizasyon Mimarisi',
          topics: [
            'Yüksek performanslı mühendislik ve tasarım ekipleri kurma',
            'Teknik borç yönetimi ve uzun vadeli platform yatırımları',
            'Kültür, işe alım kalibrasyonu ve performans değerlendirme',
          ],
        },
        {
          week: '5–8. Hafta',
          title: 'Ürün Ekonomisi ve Küresel Ölçeklenme',
          topics: [
            'Veri odaklı ürün stratejisi ve birim ekonomi modelleme',
            'Çok bölgeli mimari, mevzuat uyumu ve kurumsal dönüşüm',
            'Kritik kriz yönetimi ve iş sürekliliği liderliği',
          ],
        },
        {
          week: '9–11. Hafta',
          title: 'Üretim Düzeyinde Yeni Nesil Sistemler',
          topics: [
            'Kurumsal ölçekte akıllı sistem mimarileri ve değerlendirme metrikleri',
            'Maliyet, gecikme ve güvenlik dengesinin stratejik yönetimi',
            'Geleceğe dayanıklı platform tasarımı',
          ],
        },
        {
          week: '12–14. Hafta',
          title: 'Ustalık Tezi ve Zirve Sunumu',
          topics: [
            'Gerçek bir kurumsal dönüşüm veya yeni girişim mimarisi oluşturma',
            'Sektör liderlerinden oluşan danışma kurulu sunumu',
            'Mezuniyet ve seçkin liderlik ağına katılım',
          ],
        },
      ],
      outcomes: [
        'Büyük ölçekli mühendislik ve ürün organizasyonlarını güvenle yönetme',
        'Teknoloji kararlarını iş hedefleri ve sürdürülebilir büyüme ile hizalama',
        'Sektörün önde gelen kurucu ve direktörleriyle kalıcı profesyonel ağ kurma',
      ],
    },
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    name: 'Zeynep Karahan',
    role: 'Kıdemli Ürün Tasarımcısı',
    company: 'Vega Finans',
    completedTier: '3. Kademe Mezunu',
    rating: 5,
    quote:
      'Öncesinde tasarım sistemi kararlarımız ekipten ekibe tutarsız ilerliyordu. 3. Kademe sonrasında tüm ürün ailesini tek bir token mimarisine taşıdık ve teslim süremiz %40 kısaldı.',
    initials: 'ZK',
    avatarBg: 'bg-[#1d1d1f] text-white',
  },
  {
    id: 't2',
    name: 'Emre Yıldırım',
    role: 'Yazılım Geliştirme Uzmanı',
    company: 'Kuzey Teknoloji',
    completedTier: '1. Kademe Mezunu',
    rating: 5,
    quote:
      'Kendi başıma dağınık kaynaklardan öğrenmeye çalışırken sürekli tıkanıyordum. 1. Kademe’nin düzenli müfredatı ve haftalık birebir incelemeleri sayesinde 8 haftada ilk iş teklifimi aldım.',
    initials: 'EY',
    avatarBg: 'bg-[#0071e3] text-white',
  },
  {
    id: 't3',
    name: 'Selin Demirtaş',
    role: 'Full-Stack Mühendis',
    company: 'Pera Dijital',
    completedTier: '2. Kademe Mezunu',
    rating: 5,
    quote:
      'Sadece ön yüz geliştirirken sunucu mimarisi ve test otomasyonu gözümü korkutuyordu. 2. Kademe sprint simülasyonlarıyla artık uçtan uca projeleri tek başıma canlıya alabiliyorum.',
    initials: 'SD',
    avatarBg: 'bg-[#3a3a3c] text-white',
  },
  {
    id: 't4',
    name: 'Murat Aksoy',
    role: 'Teknoloji Direktörü (CTO)',
    company: 'Arden Lojistik',
    completedTier: '4. Kademe Mezunu',
    rating: 5,
    quote:
      'Büyüyen mühendislik ekibimizi ölçeklerken hem teknik strateji hem organizasyon tarafında net bir çerçeveye ihtiyacım vardı. 4. Kademe’deki vaka analizleri doğrudan yol haritamıza yön verdi.',
    initials: 'MA',
    avatarBg: 'bg-[#1d1d1f] text-white',
  },
  {
    id: 't5',
    name: 'Defne Çelik',
    role: 'Ön Yüz Mimarı',
    company: 'Mavi Bulut',
    completedTier: '3. Kademe Mezunu',
    rating: 5,
    quote:
      'Performans darboğazlarını tahminle değil gerçek ölçümlerle çözmeyi öğrendim. Program bitiminde çalıştığım platformun sayfa açılış süresini 2.8 saniyeden 0.9 saniyeye düşürdük.',
    initials: 'DÇ',
    avatarBg: 'bg-[#0071e3] text-white',
  },
  {
    id: 't6',
    name: 'Kerem Arslan',
    role: 'Ürün Yöneticisi',
    company: 'Solis Sağlık',
    completedTier: '2. Kademe Mezunu',
    rating: 5,
    quote:
      'Teknik ekiplerle aynı dili konuşmak için katıldım. API tasarımı ve veri modelleme modülleri sayesinde geliştirme ekibimizle planlama toplantılarımız çok daha verimli hale geldi.',
    initials: 'KA',
    avatarBg: 'bg-[#3a3a3c] text-white',
  },
  {
    id: 't7',
    name: 'Elif Nur Aydın',
    role: 'Arayüz Geliştiricisi',
    company: 'Nova Stüdyo',
    completedTier: '1. Kademe Mezunu',
    rating: 5,
    quote:
      'Her derste gereksiz karmaşadan arındırılmış, doğrudan pratiğe dönen anlatımlar vardı. Mezun olurken elimde dört gerçek proje ve güçlü bir mühendislik disiplini oluştu.',
    initials: 'EA',
    avatarBg: 'bg-[#1d1d1f] text-white',
  },
  {
    id: 't8',
    name: 'Barış Özkan',
    role: 'Baş Yazılım Mimarı',
    company: 'Atlas Ödeme Sistemleri',
    completedTier: '4. Kademe Mezunu',
    rating: 5,
    quote:
      '4. Kademe yalnızca teknik derinlik değil, seçkin bir liderlik topluluğu sunuyor. Kurul önündeki ustalık tezi savunması kariyerimin en öğretici deneyimlerinden biriydi.',
    initials: 'BÖ',
    avatarBg: 'bg-[#0071e3] text-white',
  },
];

export const INFO_DOCUMENTS: Record<string, InfoDocument> = {
  gizlilik: {
    id: 'gizlilik',
    title: 'Gizlilik Politikası',
    subtitle: 'Kişisel verilerinizin güvenliği ve işlenme ilkeleri',
    updatedAt: 'Son güncelleme: 15 Ekim 2026',
    sections: [
      {
        heading: '1. Toplanan Bilgiler',
        body: 'Sonsuz Akademi platformunda ön kayıt, hesap oluşturma veya bilgi talebi sırasında paylaştığınız ad, soyad, e-posta adresi, telefon numarası ve eğitim tercihleriniz yalnızca talep ettiğiniz eğitim hizmetinin sunulması amacıyla toplanır.',
      },
      {
        heading: '2. Veri Güvenliği ve Saklama',
        body: 'Tüm kullanıcı verileri uçtan uca şifreli bağlantılar (TLS 1.3) üzerinden aktarılır ve yetkisiz erişime karşı güncel güvenlik standartlarıyla korunur. Verileriniz üçüncü taraflarla ticari amaçla paylaşılmaz.',
      },
      {
        heading: '3. Kullanıcı Hakları',
        body: 'Dilediğiniz zaman iletisim@sonsuzakademi.com adresine başvurarak kayıtlı bilgilerinizin güncellenmesini, dışa aktarılmasını veya tamamen silinmesini talep edebilirsiniz.',
      },
    ],
  },
  kullanim: {
    id: 'kullanim',
    title: 'Kullanım Koşulları',
    subtitle: 'Platform erişimi ve eğitim materyalleri kullanım esasları',
    updatedAt: 'Son güncelleme: 15 Ekim 2026',
    sections: [
      {
        heading: '1. Hizmet Kapsamı',
        body: 'Sonsuz Akademi, dört kademeden oluşan çevrimiçi ve hibrit eğitim programları, canlı atölyeler ve mentorluk oturumları sunar. Müfredat içerikleri sektör standartlarına göre dönemsel olarak güncellenir.',
      },
      {
        heading: '2. Fikri Mülkiyet',
        body: 'Platformda yer alan tüm ders videoları, yazılı dokümanlar, proje şablonları ve görsel tasarımlar Sonsuz Akademi’nin fikri mülkiyetindedir; kişisel öğrenme amacı dışında çoğaltılamaz veya dağıtılamaz.',
      },
      {
        heading: '3. Katılım ve Sertifikasyon',
        body: 'Kademe sertifikaları, ilgili programın zorunlu proje teslimlerini ve değerlendirme kriterlerini başarıyla tamamlayan katılımcılara dijital doğrulama koduyla birlikte verilir.',
      },
    ],
  },
  kvkk: {
    id: 'kvkk',
    title: 'KVKK Aydınlatma Metni',
    subtitle: '6698 Sayılı Kişisel Verilerin Korunması Kanunu kapsamında bilgilendirme',
    updatedAt: 'Son güncelleme: 15 Ekim 2026',
    sections: [
      {
        heading: 'Veri Sorumlusu',
        body: 'Sonsuz Akademi Eğitim Teknolojileri A.Ş. (Büyükdere Cad. No: 193, Kanyon Ofis Kat: 8, Levent / İstanbul) veri sorumlusu sıfatıyla kişisel verilerinizi 6698 sayılı KVKK’ya uygun olarak işler.',
      },
      {
        heading: 'İşleme Amaçları ve Hukuki Sebep',
        body: 'Başvuru süreçlerinin yürütülmesi, eğitim danışmanlığı iletişiminin sağlanması ve yasal yükümlülüklerin yerine getirilmesi amaçlarıyla; sözleşmenin kurulması ve açık rıza hukuki sebeplerine dayanılarak işlenmektedir.',
      },
      {
        heading: 'İlgili Kişi Hakları (Madde 11)',
        body: 'KVKK’nın 11. maddesi uyarınca verilerinizin işlenip işlenmediğini öğrenme, düzeltme, silme ve itiraz etme haklarınızı yazılı olarak veya kayıtlı e-posta üzerinden kullanabilirsiniz.',
      },
    ],
  },
  cerez: {
    id: 'cerez',
    title: 'Çerez Politikası',
    subtitle: 'Web sitemizde kullanılan çerez türleri ve tercih yönetimi',
    updatedAt: 'Son güncelleme: 15 Ekim 2026',
    sections: [
      {
        heading: 'Zorunlu Çerezler',
        body: 'Oturum güvenliği, sayfa gezinmesi ve form gönderimlerinin düzgün çalışması için teknik olarak gerekli olan çerezlerdir.',
      },
      {
        heading: 'Performans ve Tercih Çerezleri',
        body: 'Platform hızını ölçmek ve kullanıcı deneyimini iyileştirmek amacıyla anonimleştirilmiş istatistiksel veriler üretir. Tarayıcı ayarlarınızdan çerez tercihlerinizi dilediğiniz zaman değiştirebilirsiniz.',
      },
    ],
  },
  hakkimizda: {
    id: 'hakkimizda',
    title: 'Sonsuz Akademi Hakkında',
    subtitle: 'Yalın tasarım, derin mühendislik ve kademeli uzmanlık',
    updatedAt: 'İstanbul · Kuruluş 2022',
    sections: [
      {
        heading: 'Yaklaşımımız',
        body: 'Sonsuz Akademi, yüzeysel video kursları yerine dört aşamalı yapılandırılmış bir ustalık yolculuğu sunmak için kuruldu. Her kademe bir öncekini tamamlar ve katılımcıyı ölçülebilir proje çıktılarıyla bir üst seviyeye hazırlar.',
      },
      {
        heading: 'Rakamlarla Sonsuz Akademi',
        body: 'Bugüne kadar 3.400’den fazla mezun, 48 deneyimli eğitmen ve 60’ı aşkın kurumsal iş ortağıyla Türkiye’nin en seçkin teknoloji ve tasarım eğitim ekosistemlerinden birini inşa ettik.',
      },
    ],
  },
  egitmenler: {
    id: 'egitmenler',
    title: 'Eğitmen ve Mentor Kadrosu',
    subtitle: 'Sektörde aktif olarak üretim yapan kıdemli uzmanlar',
    updatedAt: '48 Aktif Eğitmen & Mentor',
    sections: [
      {
        heading: 'Seçim Kriterlerimiz',
        body: 'Tüm eğitmenlerimiz en az 8 yıl sektör deneyimine sahip, büyük ölçekli dijital ürünler geliştirmiş ve aktif olarak yazılım mimarisi, ürün tasarımı veya teknoloji liderliği rollerinde görev alan profesyonellerden oluşur.',
      },
      {
        heading: 'Birebir Rehberlik',
        body: 'Her sınıfta kontenjan en fazla 20 katılımcı ile sınırlandırılır. Bu sayede her katılımcı proje incelemelerinde doğrudan uzman geri bildirimi alır.',
      },
    ],
  },
  sss: {
    id: 'sss',
    title: 'Sıkça Sorulan Sorular',
    subtitle: 'Kayıt, ders programı ve sertifikasyon hakkında merak edilenler',
    updatedAt: 'Güncel Başvuru Dönemi',
    sections: [
      {
        heading: 'Hangi kademeden başlamalıyım?',
        body: 'Ön kayıt formunu doldurduktan sonra eğitim danışmanlarımız kısa bir seviye değerlendirme görüşmesi planlar. Deneyiminize göre doğrudan 2. veya 3. Kademe’den başlamanız mümkündür.',
      },
      {
        heading: 'Dersler canlı mı yoksa kayıtlı mı?',
        body: 'Tüm temel dersler ve atölyeler canlı olarak işlenir; katılım sağlayamadığınız oturumların yüksek çözünürlüklü kayıtlarına ömür boyu erişebilirsiniz.',
      },
      {
        heading: 'Ödeme ve taksit seçenekleri nelerdir?',
        body: 'Tüm kademe programlarında kredi kartına 9 aya kadar taksit ve erken kayıt dönemlerinde %15 avantaj sağlanmaktadır.',
      },
    ],
  },
  kurumsal: {
    id: 'kurumsal',
    title: 'Kurumsal Eğitim Çözümleri',
    subtitle: 'Teknoloji ve ürün ekipleri için özelleştirilmiş akademi programları',
    updatedAt: '60+ Kurumsal İş Ortağı',
    sections: [
      {
        heading: 'Şirketinize Özel Müfredat',
        body: 'Mevcut teknoloji yığınınıza ve ekip hedeflerinize göre 1. Kademe’den 4. Kademe’ye kadar modüler kurumsal gelişim programları kurguluyoruz.',
      },
      {
        heading: 'İletişim',
        body: 'Kurumsal teklif ve demo oturumu talepleriniz için iletisim@sonsuzakademi.com adresinden veya +90 (212) 480 42 00 numaralı hattan ekibimize ulaşabilirsiniz.',
      },
    ],
  },
};
