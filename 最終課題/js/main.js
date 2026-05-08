// DOMコンテンツロード後に実行
document.addEventListener('DOMContentLoaded', function() {
    
    // ナビゲーション関連の要素を取得
    const navToggle = document.getElementById('nav-toggle');
    const navMenu = document.getElementById('nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');
    
    // ハンバーガーメニューの切り替え
    if (navToggle) {
        navToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            navToggle.classList.toggle('active');
        });
    }
    
    // ナビゲーションリンクをクリックしたときにメニューを閉じる（モバイル）
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navMenu.classList.remove('active');
            navToggle.classList.remove('active');
        });
    });
    
    // スクロール時のナビゲーション背景変更
    window.addEventListener('scroll', function() {
        const header = document.querySelector('header');
        if (window.scrollY > 100) {
            header.style.backgroundColor = 'rgba(255, 255, 255, 0.98)';
            header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
        } else {
            header.style.backgroundColor = 'rgba(255, 255, 255, 0.95)';
            header.style.boxShadow = 'none';
        }
    });
    
    // 強制的なスムーズスクロール実装
    console.log('JavaScriptが読み込まれました');
    
    // DOMが完全に読み込まれてから実行
    setTimeout(() => {
        console.log('スムーズスクロール設定開始');
        
        // 全ナビリンクを取得
        const navLinks = document.querySelectorAll('a[href^="#"]');
        console.log('見つかったナビリンク数:', navLinks.length);
        
        navLinks.forEach((link, index) => {
            console.log(`リンク${index + 1}:`, link.getAttribute('href'));
            
            link.addEventListener('click', function(event) {
                event.preventDefault();
                event.stopPropagation();
                
                const targetId = this.getAttribute('href');
                console.log('=== クリック検知 ===');
                console.log('ターゲットID:', targetId);
                
                const targetElement = document.querySelector(targetId);
                console.log('ターゲット要素:', targetElement);
                
                if (targetElement) {
                    // ヘッダーの高さを取得
                    const header = document.querySelector('header');
                    const headerHeight = header ? header.offsetHeight : 80;
                    console.log('ヘッダーの高さ:', headerHeight);
                    
                    // ターゲットの位置を計算
                    const elementPosition = targetElement.offsetTop;
                    const offsetPosition = elementPosition - headerHeight - 20;
                    console.log('要素の位置:', elementPosition);
                    console.log('スクロール先:', offsetPosition);
                    
                    // スクロール実行
                    try {
                        window.scrollTo({
                            top: offsetPosition,
                            behavior: 'smooth'
                        });
                        console.log('スムーズスクロール実行完了');
                    } catch (error) {
                        console.log('スムーズスクロール失敗、通常スクロールを実行');
                        window.scrollTo(0, offsetPosition);
                    }
                    
                    // モバイルメニューを閉じる
                    const navMenu = document.getElementById('nav-menu');
                    const navToggle = document.getElementById('nav-toggle');
                    if (navMenu && navToggle) {
                        navMenu.classList.remove('active');
                        navToggle.classList.remove('active');
                        console.log('モバイルメニューを閉じました');
                    }
                } else {
                    console.error('ターゲット要素が見つかりません:', targetId);
                }
            });
        });
        
        console.log('スムーズスクロール設定完了');
    }, 500);
    
    // お問い合わせフォームは削除されました
    
    // 作品カードのホバー効果（モバイルでタップ時）
    const workCards = document.querySelectorAll('.work-card');
    workCards.forEach(card => {
        // タッチデバイスでのタップ処理
        card.addEventListener('touchstart', function() {
            this.classList.add('touch-active');
        });
        
        card.addEventListener('touchend', function() {
            setTimeout(() => {
                this.classList.remove('touch-active');
            }, 150);
        });
    });
    
    // 画像の遅延読み込み（Intersection Observer）
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    if (img.dataset.src) {
                        img.src = img.dataset.src;
                        img.removeAttribute('data-src');
                        observer.unobserve(img);
                    }
                }
            });
        });
        
        // data-src属性を持つ画像を監視
        document.querySelectorAll('img[data-src]').forEach(img => {
            imageObserver.observe(img);
        });
    }
    
    // スクロールアニメーション（要素が表示されたときにアニメーション）
    const animationObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });
    
    // アニメーション対象要素を監視
    document.querySelectorAll('.work-card, .about-content, .contact-content').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
        animationObserver.observe(el);
    });
    
});

// ウィンドウリサイズ時の処理
window.addEventListener('resize', function() {
    const navMenu = document.getElementById('nav-menu');
    const navToggle = document.getElementById('nav-toggle');
    
    // デスクトップサイズになったときにモバイルメニューを閉じる
    if (window.innerWidth > 768) {
        navMenu.classList.remove('active');
        navToggle.classList.remove('active');
    }
});

// トップに戻るボタンの機能（オプション）
function createScrollToTopButton() {
    const button = document.createElement('button');
    button.innerHTML = '↑';
    button.className = 'scroll-to-top';
    button.style.cssText = `
        position: fixed;
        bottom: 20px;
        right: 20px;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        background-color: var(--primary-color);
        color: white;
        border: none;
        font-size: 18px;
        cursor: pointer;
        opacity: 0;
        transition: opacity 0.3s, transform 0.3s;
        z-index: 1000;
        transform: translateY(10px);
    `;
    
    document.body.appendChild(button);
    
    // スクロール位置に応じてボタンの表示/非表示
    window.addEventListener('scroll', function() {
        if (window.scrollY > 500) {
            button.style.opacity = '1';
            button.style.transform = 'translateY(0)';
        } else {
            button.style.opacity = '0';
            button.style.transform = 'translateY(10px)';
        }
    });
    
    // ボタンクリックでトップにスクロール
    button.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// トップに戻るボタンを作成（オプション機能）
// createScrollToTopButton();