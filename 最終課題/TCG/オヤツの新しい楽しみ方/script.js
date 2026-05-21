// Initial data for example cases
const initialData = {
    "pino": {
        productName: "ピノ",
        category: "発見・収集型",
        originalPurpose: "一口サイズのアイスクリームとして、手軽に楽しむ",
        userReinterpretation: "星型やハート型などのレアな形状のピノを探して楽しむ",
        newCulture: "レアピノ探しがSNSで話題となり、見つけた時の喜びをシェアする文化",
        why: "同じ商品でも形が違うことで特別感を感じられ、発見の喜びがある",
        discovery: "製品のランダム性が新しいエンターテイメント価値を生み出している"
    },
    "koala-march": {
        productName: "コアラのマーチ",
        category: "発見・収集型", 
        originalPurpose: "チョコレート菓子として、手軽に食べられるお菓子",
        userReinterpretation: "コアラの絵柄の違いを探し、レアな柄を見つける",
        newCulture: "まゆげコアラなど特殊な柄を見つけることがちょっとした幸運とされる文化",
        why: "一つ一つ違う絵柄が印刷されているため、宝探しのような楽しさがある",
        discovery: "大量生産品の中にも個性を見つけ出そうとする人間の探究心"
    },
    "kancho": {
        productName: "カンチョ", 
        category: "発見・収集型",
        originalPurpose: "韓国のチョコレート菓子として楽しむ",
        userReinterpretation: "お菓子の表面に書かれた様々な名前を探す",
        newCulture: "自分の名前や友達の名前を探すゲーム的な楽しみ方",
        why: "パーソナライゼーションされた感覚で、特別感を味わえる",
        discovery: "個人の名前という身近な要素が商品に組み込まれることの効果"
    },
    "apollo": {
        productName: "アポロ",
        category: "発見・収集型",
        originalPurpose: "二色のチョコレート菓子として楽しむ",
        userReinterpretation: "まれに現れる星型のチョコレートを探す",
        newCulture: "星型アポロを見つけた時の特別感をシェアする文化", 
        why: "通常の三角形とは異なる形状に遭遇することで、サプライズ感を得られる",
        discovery: "期待値を裏切る形で提供される驚きの価値"
    },
    "gari-gari-kun": {
        productName: "ガリガリ君",
        category: "感情・幸運型",
        originalPurpose: "かき氷風アイスキャンディーとして楽しむ",
        userReinterpretation: "棒に書かれた「あたり」を確認して、もう一本もらえるかどうかを楽しむ",
        newCulture: "当たりが出ることへの期待感とドキドキ感を楽しむ文化",
        why: "食べ終わった後にもう一度楽しめる可能性があるという期待感",
        discovery: "消費の瞬間を延長し、追加の価値を提供するシステム"
    },
    "ssangssangba": {
        productName: "サンサンバー",
        category: "感情・幸運型", 
        originalPurpose: "二本組のアイスキャンディーとして楽しむ",
        userReinterpretation: "二本に分ける時、どちらが大きく割れるかを楽しむ",
        newCulture: "友達や恋人と一緒に、どちらが大きな方を取るかでコミュニケーションを取る",
        why: "偶然によって決まる結果が、ちょっとした運試しになる",
        discovery: "商品の構造的特徴が社会的な遊びに発展する可能性"
    },
    "pokemon-pan": {
        productName: "ポケモンパン",
        category: "発見・収集型",
        originalPurpose: "パンとして栄養を摂取する",
        userReinterpretation: "付属のランダムシールを集めてコレクションを完成させる",
        newCulture: "シール目的でパンを購入し、レアシールの価値が高まる文化",
        why: "ランダム要素とコレクション欲求が組み合わされることで継続的な購買意欲が生まれる",
        discovery: "食品と非食品要素の組み合わせが新しい価値を創造する"
    },

    "alfort": {
        productName: "ビンツ",
        category: "こだわり・挑戦型",
        originalPurpose: "チョコレートに色んな絵が刻まれているお菓子として楽しむ韓国のお菓子", 
        userReinterpretation: "チョコレート周辺の部分だけを先に食べて、絵の部分を最後まで残す",
        newCulture: "「絵を最後まで壊さない」という遊び方で、最後まで絵の形を保つことにこだわる文化",
        why: "商品のデザイン性を最大限に活用し、ストーリー性を持たせて楽しむ",
        discovery: "商品の形状デザインが新しい食べ方の物語を生み出す"
    },
    "cup-noodle": {
        productName: "カップ麺",
        category: "こだわり・挑戦型",
        originalPurpose: "インスタント麺として手軽に食事をする",
        userReinterpretation: "フタの上に重しとして様々な物を置く行為",
        newCulture: "カップ麺専用のフィギュアが商品化され、フタの上に置くことが一つの文化になる",
        why: "待ち時間を有効活用し、実用性とデコレーション性を兼ね備えた楽しみ方",
        discovery: "商品の機能的制約が新しい関連商品市場を創造する"
    },
    "kitkat": {
        productName: "キットカット",
        category: "感情・幸運型",
        originalPurpose: "ウエハースとチョコレートの組み合わせを楽しむお菓子",
        userReinterpretation: "「Kit Kat」の音が「きっと勝つ」に聞こえることから、受験や試験の応援として贈る",
        newCulture: "受験シーズンには応援メッセージ入りのキットカットが販売され、お守り代わりに使われる文化",
        why: "言葉の音の類似性から、商品に願掛けの意味を見出す",
        discovery: "言語的な連想が商品に新しい象徴的価値を与える力"
    },
    "yeot": {
        productName: "ヨット（棒状のあめ）",
        category: "感情・幸運型",
        originalPurpose: "韓国の伝統的な水飴菓子として楽しむ",
        userReinterpretation: "試験前に食べると「떨어지지 않는다（落ちない）」という言い伝えから、合格祈願として食べる",
        newCulture: "受験生の間で縁起の良い食べ物として定着し、試験前の儀式的な食べ物になる",
        why: "粘着性のある食品の特性を「くっつく＝合格する」と解釈する文化的背景",
        discovery: "食品の物理的特性が精神的な支えや文化的な意味に転換される現象"
    },
    "pocky": {
        productName: "ポッキー", 
        category: "感情・幸運型",
        originalPurpose: "プレッツェルにチョコレートをコーティングしたお菓子として楽しむ",
        userReinterpretation: "11月11日をポッキーの形（細い棒状）に見立てて「ポッキーの日」として楽しむ",
        newCulture: "ポッキーの日には友達や恋人とポッキーを分け合い、SNSに投稿する文化",
        why: "商品の形状と日付の数字の類似性から連想された特別な日",
        discovery: "商品の形状が暦と結びつくことで新しい記念日文化を創造する"
    },

    "tabekko-doubutsu": {
        productName: "たべっ子どうぶつ",
        category: "発見・収集型",
        originalPurpose: "動物ビスケットとして食べる",
        userReinterpretation: "英語・動物探しを楽しむ",
        newCulture: "学習お菓子・親子コミュニケーション",
        why: "遊びながら学べるから"
    },
    "super-cup": {
        productName: "明治エッセルスーパーカップ",
        category: "こだわり・挑戦型",
        originalPurpose: "アイスとして食べる",
        userReinterpretation: "混ぜ方・すくい方・溶かし方を楽しむ",
        newCulture: "食べ方比較・SNS共有",
        why: "自分なりの食べ方を表現できるから"
    },
    "dalgona": {
        productName: "ダルゴナ",
        category: "こだわり・挑戦型",
        originalPurpose: "甘いお菓子として食べる",
        userReinterpretation: "形を壊さずに抜き取るゲーム",
        newCulture: "チャレンジ文化・SNS動画",
        why: "成功と失敗を楽しめるから"
    },
    "buldak-ramen": {
        productName: "ブルダック炒め麺",
        category: "こだわり・挑戦型",
        originalPurpose: "辛いラーメンとして食べる",
        userReinterpretation: "激辛チャレンジを楽しむ",
        newCulture: "リアクション動画・YouTube企画",
        why: "辛さそのものが体験になるから"
    },
    "kinoko-takenoko": {
        productName: "きのこの山&たけのこの里",
        category: "こだわり・挑戦型",
        originalPurpose: "チョコスナックとして食べる",
        userReinterpretation: "「きのこ派」「たけのこ派」に分かれて楽しむ",
        newCulture: "ネット論争・SNSミーム・派閥文化",
        why: "食べるだけではなく、「自分はどちらが好きか」を共有したくなるから",
        discovery: "商品選択が個性やアイデンティティの表現になる"
    },
    "fortune-cookie": {
        productName: "フォーチュンクッキー",
        category: "感情・幸運型",
        originalPurpose: "クッキーとして食べる",
        userReinterpretation: "中に入った運勢やメッセージを楽しむ",
        newCulture: "運試し文化・メッセージ共有",
        why: "食べるだけではなく、「何が書かれているか」を楽しめるから",
        discovery: "食べ物が運勢体験のツールになる"
    },
    "fue-ramune": {
        productName: "フエラムネ",
        category: "こだわり・挑戦型",
        originalPurpose: "ラムネ菓子として食べる",
        userReinterpretation: "口にくわえて笛のように音を鳴らして遊ぶ",
        newCulture: "音遊び・友達との遊び文化",
        why: "穴の空いた形が、食べる以外の遊び方を生み出したから",
        discovery: "商品の形状が音遊びという新しい楽しみを創造する"
    },
    "mentos": {
        productName: "メントス",
        category: "こだわり・挑戦型",
        originalPurpose: "キャンディとして食べる",
        userReinterpretation: "コーラに入れて噴き出すということがネット上で有名になり、その実験を楽しむ",
        newCulture: "実験動画・YouTubeチャレンジ・SNS投稿する文化が生まれた",
        why: "お菓子の性質が、食べる以外の遊びや実験につながったから",
        discovery: "食品の科学的性質が新しいエンターテイメントコンテンツを生み出す"
    }
};

// Sample user posts
const samplePosts = [
    {
        productName: "じゃがりこ",
        originalPurpose: "スティック状のポテトスナックとして食べる",
        userReinterpretation: "容器を使って即席サラダを作る",
        why: "容器がちょうど良いサイズで、お湯を注げばマッシュポテトになるから",
        category: "preference",
        categoryName: "こだわり型",
        imageUrl: ""
    },
    {
        productName: "うまい棒",
        originalPurpose: "安価なスナック菓子として楽しむ",
        userReinterpretation: "穴を活用して笛として遊ぶ",
        why: "中央に穴が空いているので、吹くと音が出て面白い",
        category: "discovery-collection",
        categoryName: "発見・収集型",
        imageUrl: ""
    },
    {
        productName: "チロルチョコ",
        originalPurpose: "小さなチョコレートとして手軽に食べる",
        userReinterpretation: "様々な味のコレクションとして集める",
        why: "季節限定や地域限定など、種類が豊富で全部集めたくなる",
        category: "discovery-collection",
        categoryName: "発見・収集型",
        imageUrl: ""
    }
];

// DOM elements
const modal = document.getElementById('detailModal');
const closeBtn = document.querySelector('.close');
const shareForm = document.getElementById('shareForm');
const archiveGrid = document.getElementById('archiveGrid');
const filterTabs = document.querySelectorAll('.filter-tab');

// Category names mapping
const categoryNames = {
    "discovery-collection": "発見・収集型",
    "preference-challenge": "こだわり・挑戦型", 
    "emotion-luck": "感情・幸運型"
};

// User posts storage
let userPosts = [...samplePosts];

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    setupCardClickEvents();
    setupModalEvents();
    setupFormSubmission();
    setupFilterTabs();
    renderArchive();
    setupSmoothScrolling();
    setupScrollIndicator();
});

// Setup card click events
function setupCardClickEvents() {
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        card.addEventListener('click', function() {
            const productId = this.dataset.product;
            if (initialData[productId]) {
                showModal(initialData[productId]);
            }
        });
        
        // Add keyboard accessibility
        card.addEventListener('keypress', function(e) {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                this.click();
            }
        });
        
        card.setAttribute('tabindex', '0');
        card.setAttribute('role', 'button');
    });
}

// Show modal with product details
function showModal(data) {
    document.getElementById('modalProductName').textContent = data.productName;
    document.getElementById('modalOriginalPurpose').textContent = data.originalPurpose;
    document.getElementById('modalUserReinterpretation').textContent = data.userReinterpretation;
    document.getElementById('modalNewCulture').textContent = data.newCulture;
    document.getElementById('modalWhy').textContent = data.why;
    
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
    
    // Focus management for accessibility
    modal.focus();
}

// Setup modal events
function setupModalEvents() {
    // Close modal events
    closeBtn.addEventListener('click', closeModal);
    
    window.addEventListener('click', function(event) {
        if (event.target === modal) {
            closeModal();
        }
    });
    
    // Keyboard navigation
    document.addEventListener('keydown', function(event) {
        if (event.key === 'Escape' && modal.style.display === 'block') {
            closeModal();
        }
    });
}

// Close modal
function closeModal() {
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

// Setup form submission
function setupFormSubmission() {
    shareForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const formData = new FormData(this);
        const newPost = {
            productName: formData.get('productName'),
            originalPurpose: formData.get('originalPurpose'),
            userReinterpretation: formData.get('userReinterpretation'),
            why: formData.get('why'),
            category: formData.get('category'),
            categoryName: categoryNames[formData.get('category')],
            imageUrl: formData.get('imageUrl') || ''
        };
        
        // Add to user posts
        userPosts.unshift(newPost);
        
        // Re-render archive
        renderArchive();
        
        // Reset form
        this.reset();
        
        // Show success message
        showNotification('投稿が完了しました！');
        
        // Scroll to archive section
        document.getElementById('archive').scrollIntoView({ behavior: 'smooth' });
    });
}

// Setup filter tabs
function setupFilterTabs() {
    filterTabs.forEach(tab => {
        tab.addEventListener('click', function() {
            // Remove active class from all tabs
            filterTabs.forEach(t => t.classList.remove('active'));
            
            // Add active class to clicked tab
            this.classList.add('active');
            
            // Filter posts
            const filter = this.dataset.filter;
            renderArchive(filter);
        });
    });
}

// Render archive posts
function renderArchive(filter = 'all') {
    let postsToShow = userPosts;
    
    if (filter !== 'all') {
        postsToShow = userPosts.filter(post => post.category === filter);
    }
    
    archiveGrid.innerHTML = '';
    
    postsToShow.forEach((post, index) => {
        const card = createArchiveCard(post, index);
        archiveGrid.appendChild(card);
    });
    
    if (postsToShow.length === 0) {
        archiveGrid.innerHTML = '<p style="grid-column: 1 / -1; text-align: center; color: #7f8c8d; font-size: 1.2rem; padding: 2rem;">該当する投稿がありません</p>';
    }
}

// Create archive card
function createArchiveCard(post, index) {
    const card = document.createElement('div');
    card.className = 'archive-card';
    card.dataset.category = post.category;
    
    card.innerHTML = `
        <div class="archive-card-header">
            <h3 class="archive-card-title">${escapeHtml(post.productName)}</h3>
            <span class="archive-card-category">${escapeHtml(post.categoryName)}</span>
        </div>
        <div class="archive-card-body">
            <div class="archive-card-text">
                <strong>楽しみ方：</strong>${escapeHtml(post.userReinterpretation)}
            </div>
        </div>
    `;
    
    // Add click event to show more details
    card.addEventListener('click', function() {
        showUserPostModal(post);
    });
    
    card.style.cursor = 'pointer';
    card.setAttribute('tabindex', '0');
    card.setAttribute('role', 'button');
    
    // Add keyboard accessibility
    card.addEventListener('keypress', function(e) {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            this.click();
        }
    });
    
    return card;
}

// Show user post modal
function showUserPostModal(post) {
    document.getElementById('modalProductName').textContent = post.productName;
    document.getElementById('modalOriginalPurpose').textContent = post.originalPurpose;
    document.getElementById('modalUserReinterpretation').textContent = post.userReinterpretation;
    document.getElementById('modalNewCulture').textContent = 'ユーザー投稿のため詳細情報はありません';
    document.getElementById('modalWhy').textContent = post.why;
    
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

// Setup smooth scrolling for navigation links
function setupSmoothScrolling() {
    const navLinks = document.querySelectorAll('.nav-links a[href^="#"]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const offsetTop = targetSection.offsetTop - 80; // Account for fixed header
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Utility function to escape HTML
function escapeHtml(text) {
    const map = {
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#039;'
    };
    return text.replace(/[&<>"']/g, function(m) { return map[m]; });
}

// Show notification
function showNotification(message) {
    // Create notification element
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: #4ECDC4;
        color: white;
        padding: 1rem 2rem;
        border-radius: 10px;
        box-shadow: 0 5px 20px rgba(0,0,0,0.2);
        z-index: 3000;
        transform: translateX(400px);
        transition: transform 0.3s ease;
        font-weight: 500;
    `;
    notification.textContent = message;
    
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    // Remove after 3 seconds
    setTimeout(() => {
        notification.style.transform = 'translateX(400px)';
        setTimeout(() => {
            if (notification.parentNode) {
                notification.parentNode.removeChild(notification);
            }
        }, 300);
    }, 3000);
}

// Header remains visible at all times
const header = document.querySelector('.header');
if (header) {
    header.style.transform = 'translateY(0)';
}

// Add intersection observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe category sections for animation
document.addEventListener('DOMContentLoaded', function() {
    const categorySection = document.querySelectorAll('.category-section');
    categorySection.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(30px)';
        section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(section);
    });
});

// Touch/swipe support for card sliders on mobile
let isDown = false;
let startX;
let scrollLeft;

document.querySelectorAll('.card-slider').forEach(slider => {
    slider.addEventListener('mousedown', (e) => {
        isDown = true;
        slider.classList.add('active');
        startX = e.pageX - slider.offsetLeft;
        scrollLeft = slider.scrollLeft;
    });
    
    slider.addEventListener('mouseleave', () => {
        isDown = false;
        slider.classList.remove('active');
    });
    
    slider.addEventListener('mouseup', () => {
        isDown = false;
        slider.classList.remove('active');
    });
    
    slider.addEventListener('mousemove', (e) => {
        if (!isDown) return;
        e.preventDefault();
        const x = e.pageX - slider.offsetLeft;
        const walk = (x - startX) * 2;
        slider.scrollLeft = scrollLeft - walk;
    });
    
    // Touch events for mobile
    slider.addEventListener('touchstart', (e) => {
        startX = e.touches[0].pageX - slider.offsetLeft;
        scrollLeft = slider.scrollLeft;
    });
    
    slider.addEventListener('touchmove', (e) => {
        if (!startX) return;
        const x = e.touches[0].pageX - slider.offsetLeft;
        const walk = (x - startX) * 2;
        slider.scrollLeft = scrollLeft - walk;
    });
});

// Performance optimization: Lazy loading for images
document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('img[data-src]');
    
    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                imageObserver.unobserve(img);
            }
        });
    });
    
    images.forEach(img => imageObserver.observe(img));
});

// Error handling for form validation
function validateForm(formData) {
    const requiredFields = ['productName', 'originalPurpose', 'userReinterpretation', 'why', 'category'];
    const errors = [];
    
    requiredFields.forEach(field => {
        if (!formData.get(field) || formData.get(field).trim() === '') {
            errors.push(`${getFieldLabel(field)}は必須項目です`);
        }
    });
    
    return errors;
}

function getFieldLabel(fieldName) {
    const labels = {
        productName: '商品名',
        originalPurpose: '本来の目的',
        userReinterpretation: '自分だけの楽しみ方',
        why: 'なぜそのように楽しむのか',
        category: 'カテゴリー'
    };
    return labels[fieldName] || fieldName;
}

// Analytics tracking (placeholder for future implementation)
function trackEvent(eventName, properties = {}) {
    console.log('Event tracked:', eventName, properties);
    // This would integrate with analytics services in a real application
}

// Track user interactions
document.addEventListener('DOMContentLoaded', function() {
    // Track card clicks
    document.querySelectorAll('.card').forEach(card => {
        card.addEventListener('click', function() {
            trackEvent('card_clicked', {
                product: this.dataset.product
            });
        });
    });
    
    // Track form submissions
    shareForm.addEventListener('submit', function() {
        trackEvent('form_submitted', {
            category: document.getElementById('category').value
        });
    });
    
    // Track filter usage
    filterTabs.forEach(tab => {
        tab.addEventListener('click', function() {
            trackEvent('filter_clicked', {
                filter: this.dataset.filter
            });
        });
    });
});

// Setup scroll indicator
function setupScrollIndicator() {
    const scrollIndicator = document.querySelector('.scroll-indicator');
    if (scrollIndicator) {
        scrollIndicator.addEventListener('click', function() {
            const categoriesSection = document.getElementById('categories');
            if (categoriesSection) {
                categoriesSection.scrollIntoView({ 
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    }
}



// Add parallax effect to background images
window.addEventListener('scroll', function() {
    const scrolled = window.pageYOffset;
    const bgItems = document.querySelectorAll('.bg-item');
    
    bgItems.forEach((item, index) => {
        const speed = 0.5 + (index * 0.1);
        const yPos = -(scrolled * speed);
        item.style.transform = `translateY(${yPos}px) rotate(${scrolled * 0.01}deg)`;
    });
});

// Add hover sound effect (visual feedback)
function addHoverFeedback() {
    const interactiveElements = document.querySelectorAll('.scroll-indicator');
    
    interactiveElements.forEach(element => {
        element.addEventListener('mouseenter', function() {
            this.style.filter = 'brightness(1.1)';
        });
        
        element.addEventListener('mouseleave', function() {
            this.style.filter = 'brightness(1)';
        });
    });
}

document.addEventListener('DOMContentLoaded', addHoverFeedback);

console.log('🍭 食べるだけじゃない - Internet Culture Archive loaded successfully!');
console.log('🎮 Interactive elements: Tags, Previews, Scroll indicator');
console.log('📱 Responsive design: Mobile optimized');
console.log('🎨 Animations: Floating, Parallax, Hover effects');