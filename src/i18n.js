import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { meta, introdata, dataabout, worktimeline, skills, certificates, contactConfig, logotext } from './content_option';

// Pisahkan teks ID
const resources = {
  en: {
    translation: {
      logotext: logotext,
      meta: meta,
      introdata: {
        title: "I’m Andi Arif R.",
        animated: {
          first: "Product Architect",
          second: "IT Infrastructure Engineer",
          third: "AI Data Evaluator",
          fourth: "Visual Designer",
          fifth: "Digital Ads Analyst",
          sixth: "Tech Generalist"
        },
        description: "My journey started in visual design, moved through AI data evaluation, and evolved into IT infrastructure and product architecture. I don't just specialize in one thing; I understand the whole stack. Whether I'm managing servers, writing code, or designing interfaces, my goal is always the same: build systems that actually work.",
        your_img_url: "/assets/images/andi-light-nobg.png",
        your_img_url_light: "/assets/images/andi-light-nobg.png"
      },
      dataabout: {
        title: "Summary",
        greeting: "Hi, I'm Andi.",
        aboutme: "My career is built on a diverse foundation—starting as a visual designer, navigating the complexities of AI data evaluation, and ultimately architecting robust IT infrastructure and products. This multi-disciplinary background gives me a unique perspective: I understand the aesthetic appeal needed to engage users, the data precision required for AI, and the technical stability demanded by backend systems. Whether I'm provisioning servers for YLive Studio or troubleshooting enterprise networks, I bring a holistic approach to problem-solving. I don't just fix isolated issues; I connect the dots across the entire tech stack to build solutions that are efficient, scalable, and beautifully functional.",
        question: "Let's build something."
      },
      worktimeline: worktimeline,
      skills: [
        { name: "IT Support & Troubleshooting", value: 90 },
        { name: "HTML5 & CSS3", value: 90 },
        { name: "Graphic & UI/UX Design", value: 85 },
        { name: "AI Prompting & Data Evaluation", value: 85 },
        { name: "PHP & MySQL", value: 80 },
        { name: "Python (Scripting & Data)", value: 80 },
        { name: "JavaScript (ES6+)", value: 75 },
        { name: "React.js", value: 70 },
        { name: "Digital Marketing & SEO", value: 70 }
      ],
      certificates: certificates,
      contactConfig: contactConfig,
      nav: {
        home: "Home",
        about: "About",
        contact: "Contact"
      },
      home: {
        prefix: "I am a",
        btn_about: "About Me",
        btn_contact: "Contact"
      },
      about: {
        title: "About me",
        age_title: "Time on Earth",
        journey: "Professional Journey",
        skills: "Skills",
        certs: "Certificates"
      },
      contact: {
        title: "Contact Me",
        get_in_touch: "Get in touch",
        name_ph: "Name",
        email_ph: "Email",
        msg_ph: "Message",
        send: "Send",
        sending: "Sending...",
        success: "Success! Thank you for your message.",
        error: "Failed to send message. Please try again."
      }
    }
  },
  id: {
    translation: {
      logotext: logotext,
      meta: {
        title: "Andi Arif R.",
        description: "Saya Andi Arif R. Merancang antarmuka kreatif & membangun sistem handal. Sedang bekerja di Jakarta."
      },
      introdata: {
        title: "Saya Andi Arif R.",
        animated: {
          first: "Arsitek Produk",
          second: "Teknisi Infrastruktur TI",
          third: "Evaluator Data AI",
          fourth: "Desainer Visual",
          fifth: "Analis Iklan Digital",
          sixth: "Generalist Teknologi"
        },
        description: "Perjalanan saya bermula dari desain visual, merambah ke evaluasi data AI, hingga berevolusi menjadi arsitektur produk dan infrastruktur TI. Saya tidak hanya mendalami satu bidang; saya memahami keseluruhannya. Baik saat mengelola server, menulis kode, maupun merancang antarmuka, tujuan saya tetap sama: membangun sistem yang benar-benar berfungsi.",
        your_img_url: "/assets/images/andi-light-nobg.png",
        your_img_url_light: "/assets/images/andi-light-nobg.png"
      },
      dataabout: {
        title: "Ringkasan",
        greeting: "Hai, saya Andi.",
        aboutme: "Karier saya dibangun di atas fondasi yang beragam—dimulai sebagai desainer visual, menavigasi kompleksitas evaluasi data AI, dan akhirnya merancang infrastruktur TI dan arsitektur produk yang tangguh. Latar belakang multi-disiplin ini memberi saya perspektif unik: saya memahami estetika yang dibutuhkan untuk memikat pengguna, presisi data yang diperlukan untuk AI, serta stabilitas teknis yang dituntut oleh sistem backend. Baik saat saya mengelola server untuk YLive Studio atau menangani jaringan perusahaan, saya selalu membawa pendekatan holistik dalam pemecahan masalah. Saya tidak sekadar memperbaiki isu yang terisolasi; saya menghubungkan titik-titik di seluruh tumpukan teknologi untuk membangun sistem yang efisien, terukur, dan berfungsi dengan indah.",
        question: "Mari bangun sesuatu."
      },
      worktimeline: [
        { jobtitle: "Arsitek Otomatisasi & Kreator Konten", where: "YLive Studio", date: "2025 - Sekarang" },
        { jobtitle: "Spesialis Infrastruktur & Solusi TI", where: "PT. Afresto Sistem Indonesia", date: "2020 - Sekarang" },
        { jobtitle: "Asesor Iklan Internet", where: "Telus International AI Data", date: "2019 - 2024" },
        { jobtitle: "Penilai Kualitas Iklan", where: "Welocalized", date: "2023 - 2023" },
        { jobtitle: "Evaluator Mesin Pencari", where: "Telus International AI Data", date: "2019 - 2019" },
        { jobtitle: "Desainer Visual Merek", where: "PT. Kaisa Rossie Tour & Travel", date: "2017 - 2020" }
      ],
      skills: [
        { name: "Dukungan TI & Pemecahan Masalah", value: 90 },
        { name: "HTML5 & CSS3", value: 90 },
        { name: "Desain Grafis & UI/UX", value: 85 },
        { name: "Prompting AI & Evaluasi Data", value: 85 },
        { name: "PHP & MySQL", value: 80 },
        { name: "Python (Skrip & Data)", value: 80 },
        { name: "JavaScript (ES6+)", value: 75 },
        { name: "React.js", value: 70 },
        { name: "Pemasaran Digital & SEO", value: 70 }
      ],
      certificates: certificates,
      contactConfig: {
        YOUR_EMAIL: contactConfig.YOUR_EMAIL,
        YOUR_FONE: contactConfig.YOUR_FONE,
        description: "Terima kasih sudah mampir! Jika Anda memiliki proyek yang ingin didiskusikan, membutuhkan keahlian teknis, atau sekadar ingin menjajaki potensi kolaborasi, saya selalu terbuka untuk peluang baru. Hubungi saya melalui email atau telepon, dan mari diskusikan bagaimana kita bisa bekerja sama.",
        YOUR_SERVICE_ID: contactConfig.YOUR_SERVICE_ID,
        YOUR_TEMPLATE_ID: contactConfig.YOUR_TEMPLATE_ID,
        YOUR_USER_ID: contactConfig.YOUR_USER_ID,
      },
      nav: {
        home: "Beranda",
        about: "Tentang",
        contact: "Kontak"
      },
      home: {
        prefix: "Saya seorang",
        btn_about: "Tentang Saya",
        btn_contact: "Kontak"
      },
      about: {
        title: "Tentang saya",
        age_title: "Waktu di Bumi",
        journey: "Perjalanan Karir",
        skills: "Keahlian",
        certs: "Sertifikat"
      },
      contact: {
        title: "Hubungi Saya",
        get_in_touch: "Kirim Pesan",
        name_ph: "Nama",
        email_ph: "Email",
        msg_ph: "Pesan",
        send: "Kirim",
        sending: "Mengirim...",
        success: "Sukses! Terima kasih atas pesan Anda.",
        error: "Gagal mengirim pesan. Silakan coba lagi."
      }
    }
  },
  ja: {
    translation: {
      logotext: logotext,
      meta: {
        title: "Andi Arif R.",
        description: "アンディ・アリフ・Rです。創造的なインターフェースを設計し、信頼性の高いシステムを構築しています。現在ジャカルタに勤務。"
      },
      introdata: {
        title: "アンディ・アリフ・R",
        animated: {
          first: "プロダクトアーキテクト",
          second: "ITインフラエンジニア",
          third: "AIデータ評価者",
          fourth: "ビジュアルデザイナー",
          fifth: "デジタル広告アナリスト",
          sixth: "テック・ジェネラリスト"
        },
        description: "私の歩みはビジュアルデザインから始まり、AIデータ評価を経て、ITインフラとプロダクトアーキテクチャへと進化しました。一つの分野に特化するのではなく、全体を理解しています。サーバー管理、コーディング、インターフェース設計のいずれにおいても、私の目標は常に一つです。それは「実際に機能するシステムを構築すること」です。",
        your_img_url: "/assets/images/andi-light-nobg.png",
        your_img_url_light: "/assets/images/andi-light-nobg.png"
      },
      dataabout: {
        title: "概要",
        greeting: "こんにちは、アンディです。",
        aboutme: "私のキャリアは、ビジュアルデザイナーとしてのスタートから、AIデータ評価の複雑さを経て、最終的に強固なITインフラストラクチャとプロダクトを設計するに至るまで、多様な基盤の上に築かれています。この多分野にわたる経歴が私に独自の視点を与えてくれています。ユーザーを惹きつける美しさ、AIに必要なデータの精度、そしてバックエンドシステムに求められる技術的な安定性を同時に理解しています。YLive Studioのサーバー構築であれ、企業のネットワークのトラブルシューティングであれ、私は常に包括的なアプローチで問題解決に取り組みます。単に個別の問題を直すのではなく、技術スタック全体の点と点をつなぎ合わせ、効率的でスケーラブル、かつ美しく機能するソリューションを構築します。",
        question: "何か作りましょう。"
      },
      worktimeline: [
        { jobtitle: "オートメーションアーキテクト＆コンテンツクリエイター", where: "YLive Studio", date: "2025 - 現在" },
        { jobtitle: "ITインフラ・ソリューションスペシャリスト", where: "PT. Afresto Sistem Indonesia", date: "2020 - 現在" },
        { jobtitle: "インターネット広告アセッサー", where: "Telus International AI Data", date: "2019 - 2024" },
        { jobtitle: "広告品質評価者", where: "Welocalized", date: "2023 - 2023" },
        { jobtitle: "検索エンジン評価者", where: "Telus International AI Data", date: "2019 - 2019" },
        { jobtitle: "ビジュアルブランドデザイナー", where: "PT. Kaisa Rossie Tour & Travel", date: "2017 - 2020" }
      ],
      skills: [
        { name: "ITサポートとトラブルシューティング", value: 90 },
        { name: "HTML5 & CSS3", value: 90 },
        { name: "グラフィック＆UI/UXデザイン", value: 85 },
        { name: "AIプロンプティングとデータ評価", value: 85 },
        { name: "PHP & MySQL", value: 80 },
        { name: "Python (スクリプトとデータ)", value: 80 },
        { name: "JavaScript (ES6+)", value: 75 },
        { name: "React.js", value: 70 },
        { name: "デジタルマーケティングとSEO", value: 70 }
      ],
      certificates: certificates,
      contactConfig: {
        YOUR_EMAIL: contactConfig.YOUR_EMAIL,
        YOUR_FONE: contactConfig.YOUR_FONE,
        description: "ご訪問ありがとうございます！検討中のプロジェクトがある場合、専門的な技術が必要な場合、またはコラボレーションの可能性を探りたい場合など、私は常に新しい機会に対してオープンです。メールまたは電話でお問い合わせください。どのように協力できるか話し合いましょう。",
        YOUR_SERVICE_ID: contactConfig.YOUR_SERVICE_ID,
        YOUR_TEMPLATE_ID: contactConfig.YOUR_TEMPLATE_ID,
        YOUR_USER_ID: contactConfig.YOUR_USER_ID,
      },
      nav: {
        home: "ホーム",
        about: "私について",
        contact: "連絡先"
      },
      home: {
        prefix: "私は",
        btn_about: "私について",
        btn_contact: "連絡先"
      },
      about: {
        title: "私について",
        age_title: "地球での時間",
        journey: "職歴",
        skills: "スキル",
        certs: "資格"
      },
      contact: {
        title: "お問い合わせ",
        get_in_touch: "連絡を取る",
        name_ph: "名前",
        email_ph: "メール",
        msg_ph: "メッセージ",
        send: "送信",
        sending: "送信中...",
        success: "成功しました！メッセージありがとうございます。",
        error: "送信に失敗しました。もう一度お試しください。"
      }
    }
  },
  zh: {
    translation: {
      logotext: logotext,
      meta: {
        title: "Andi Arif R.",
        description: "我是 Andi Arif R。设计创意界面，构建可靠系统。目前在雅加达工作。"
      },
      introdata: {
        title: "我是 Andi Arif R.",
        animated: {
          first: "产品架构师",
          second: "IT 基础设施工程师",
          third: "AI 数据评估员",
          fourth: "视觉设计师",
          fifth: "数字广告分析师",
          sixth: "全栈技术多面手"
        },
        description: "我的旅程始于视觉设计，随后进入 AI 数据评估领域，最终演变为 IT 基础设施和产品架构。我不局限于单一领域；我了解整个技术栈。无论是管理服务器、编写代码还是设计界面，我的目标始终如一：构建真正管用的系统。",
        your_img_url: "/assets/images/andi-light-nobg.png",
        your_img_url_light: "/assets/images/andi-light-nobg.png"
      },
      dataabout: {
        title: "简介",
        greeting: "你好，我是 Andi。",
        aboutme: "我的职业生涯建立在多元化的基础之上——从视觉设计师起步，经历过复杂的 AI 数据评估，最终致力于构建强大的 IT 基础设施和产品架构。这种跨学科的背景赋予了我独特的视角：我了解吸引用户所需的审美、AI 所需的数据精度，以及后端系统所要求的技术稳定性。无论是在 YLive Studio 部署服务器，还是排除企业网络故障，我始终采用整体的思维方式来解决问题。我不只是修复孤立的问题；我将整个技术栈的各个点连接起来，构建高效、可扩展且运行完美的解决方案。",
        question: "我们一起做点什么吧。"
      },
      worktimeline: [
        { jobtitle: "自动化架构师兼内容创作者", where: "YLive Studio", date: "2025 - 至今" },
        { jobtitle: "IT 基础设施和解决方案专家", where: "PT. Afresto Sistem Indonesia", date: "2020 - 至今" },
        { jobtitle: "互联网广告评估员", where: "Telus International AI Data", date: "2019 - 2024" },
        { jobtitle: "广告质量评估员", where: "Welocalized", date: "2023 - 2023" },
        { jobtitle: "搜索引擎评估员", where: "Telus International AI Data", date: "2019 - 2019" },
        { jobtitle: "视觉品牌设计师", where: "PT. Kaisa Rossie Tour & Travel", date: "2017 - 2020" }
      ],
      skills: [
        { name: "IT支持与故障排除", value: 90 },
        { name: "HTML5 & CSS3", value: 90 },
        { name: "平面设计与 UI/UX", value: 85 },
        { name: "AI 提示工程与数据评估", value: 85 },
        { name: "PHP & MySQL", value: 80 },
        { name: "Python (脚本与数据)", value: 80 },
        { name: "JavaScript (ES6+)", value: 75 },
        { name: "React.js", value: 70 },
        { name: "数字营销与 SEO", value: 70 }
      ],
      certificates: certificates,
      contactConfig: {
        YOUR_EMAIL: contactConfig.YOUR_EMAIL,
        YOUR_FONE: contactConfig.YOUR_FONE,
        description: "感谢您的访问！如果您有项目想法、需要技术专长，或者只是想探索潜在的合作，我总是对新机会持开放态度。请通过电子邮件或电话联系，让我们讨论如何合作。",
        YOUR_SERVICE_ID: contactConfig.YOUR_SERVICE_ID,
        YOUR_TEMPLATE_ID: contactConfig.YOUR_TEMPLATE_ID,
        YOUR_USER_ID: contactConfig.YOUR_USER_ID,
      },
      nav: {
        home: "主页",
        about: "关于",
        contact: "联系"
      },
      home: {
        prefix: "我是一名",
        btn_about: "关于我",
        btn_contact: "联系"
      },
      about: {
        title: "关于我",
        age_title: "在地球上的时间",
        journey: "职业旅程",
        skills: "技能",
        certs: "证书"
      },
      contact: {
        title: "联系我",
        get_in_touch: "保持联系",
        name_ph: "姓名",
        email_ph: "电子邮件",
        msg_ph: "信息",
        send: "发送",
        sending: "发送中...",
        success: "成功！感谢您的留言。",
        error: "发送信息失败。请重试。"
      }
    }
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    }
  });

export default i18n;