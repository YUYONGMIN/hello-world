// 3Dギャラリーの実装
let scene, camera, renderer, controls;
let artworks = [];
let mouse = new THREE.Vector2();
let raycaster = new THREE.Raycaster();
let hoveredObject = null;

// カメラ移動制御（作品を向くように初期位置を調整）
let cameraPosition = new THREE.Vector3(0, 1.5, 2);
let cameraTarget = new THREE.Vector3(0, 1.5, -4);
let keys = {
    w: false, a: false, s: false, d: false,
    up: false, down: false, left: false, right: false
};

// 作品データ（壁に沿って配置・重なり解消）
const worksData = [
    // 後ろの壁（横並び・十分な間隔）
    { 
        title: "Webサイトリニューアル", 
        category: "Web Design",
        image: "images/サムネイル.jpg",
        position: { x: -3, y: 1.5, z: -4.8 },
        rotation: { x: 0, y: 0, z: 0 }
    },
    { 
        title: "モバイルアプリUI", 
        category: "UI/UX Design",
        image: "images/work3.svg",
        position: { x: 0, y: 1.5, z: -4.8 },
        rotation: { x: 0, y: 0, z: 0 }
    },
    { 
        title: "ブランドアイデンティティ", 
        category: "Branding",
        image: "images/work4.svg",
        position: { x: 3, y: 1.5, z: -4.8 },
        rotation: { x: 0, y: 0, z: 0 }
    },
    // 左の壁（横並び）
    { 
        title: "ECサイト構築", 
        category: "Web Development",
        image: "images/work2.svg",
        position: { x: -4.8, y: 1.5, z: -2.5 },
        rotation: { x: 0, y: Math.PI / 2, z: 0 }
    },
    { 
        title: "Webアプリケーション", 
        category: "Web Development",
        image: "images/work6.svg",
        position: { x: -4.8, y: 1.5, z: 0.5 },
        rotation: { x: 0, y: Math.PI / 2, z: 0 }
    },
    // 右の壁
    { 
        title: "ランディングページ", 
        category: "Web Design",
        image: "images/work5.svg",
        position: { x: 4.8, y: 1.5, z: -1 },
        rotation: { x: 0, y: -Math.PI / 2, z: 0 }
    }
];

// 3Dギャラリーの初期化
function init3DGallery() {
    const container = document.getElementById('gallery-canvas');
    if (!container) return;

    // シーンの作成
    scene = new THREE.Scene();
    scene.background = new THREE.Color(0xf5f5f0); // 明るいベージュ色

    // カメラの作成
    camera = new THREE.PerspectiveCamera(
        75, 
        container.clientWidth / container.clientHeight, 
        0.1, 
        1000
    );
    camera.position.copy(cameraPosition);

    // レンダラーの作成
    renderer = new THREE.WebGLRenderer({ 
        canvas: container, 
        antialias: true,
        alpha: true 
    });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    // シャドウマップを完全に無効化
    renderer.shadowMap.enabled = false;

    // ライティング
    setupLighting();

    // 床の作成
    createFloor();

    // ギャラリー空間の作成
    createGallerySpace();

    // 作品の配置
    createArtworks();

    // コントロールの設定
    setupControls();

    // イベントリスナーの設定
    setupEventListeners();

    // アニメーションループの開始
    animate();
}

// ライティングの設定（明るく変更）
function setupLighting() {
    // 環境光（明るく）
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.8);
    scene.add(ambientLight);

    // 指向性ライト（明るく、シャドウ完全無効化）
    const directionalLight = new THREE.DirectionalLight(0xffffff, 1.2);
    directionalLight.position.set(10, 10, 5);
    directionalLight.castShadow = false; // シャドウを無効化
    scene.add(directionalLight);

    // 追加の指向性ライト（左から、シャドウなし）
    const directionalLight2 = new THREE.DirectionalLight(0xffffff, 0.8);
    directionalLight2.position.set(-10, 8, 5);
    directionalLight2.castShadow = false; // シャドウを無効化
    scene.add(directionalLight2);

    // スポットライト（シャドウ設定を調整）
    const spotLight = new THREE.SpotLight(0xffffff, 0.8);
    spotLight.position.set(0, 8, 0);
    spotLight.angle = Math.PI / 4;
    spotLight.penumbra = 0.3;
    spotLight.decay = 1;
    spotLight.distance = 200;
    spotLight.castShadow = false; // スポットライトのシャドウも無効化
    scene.add(spotLight);

    // 天井ライト
    const ceilingLight = new THREE.PointLight(0xffffff, 0.6, 30);
    ceilingLight.position.set(0, 4.5, -2);
    scene.add(ceilingLight);
}

// 床の作成
function createFloor() {
    const floorGeometry = new THREE.PlaneGeometry(20, 20);
    const floorMaterial = new THREE.MeshLambertMaterial({ 
        color: 0x8B4513, // 褐色（サドルブラウン）
        transparent: false
    });
    const floor = new THREE.Mesh(floorGeometry, floorMaterial);
    floor.rotation.x = -Math.PI / 2;
    floor.position.y = 0;
    floor.receiveShadow = false; // 影受けを無効化
    scene.add(floor);
}

// ギャラリー空間の作成
function createGallerySpace() {
    // 黄色い壁の作成
    const wallMaterial = new THREE.MeshLambertMaterial({ 
        color: 0xFFD700, // 黄色（ゴールド）
        transparent: false
    });

    // 後ろの壁
    const backWallGeometry = new THREE.PlaneGeometry(12, 5);
    const backWall = new THREE.Mesh(backWallGeometry, wallMaterial);
    backWall.position.set(0, 2.5, -5);
    backWall.receiveShadow = false; // 影受けを無効化
    scene.add(backWall);

    // 左の壁
    const leftWallGeometry = new THREE.PlaneGeometry(10, 5);
    const leftWall = new THREE.Mesh(leftWallGeometry, wallMaterial);
    leftWall.rotation.y = Math.PI / 2;
    leftWall.position.set(-5, 2.5, 0);
    leftWall.receiveShadow = false; // 影受けを無効化
    scene.add(leftWall);

    // 右の壁
    const rightWall = new THREE.Mesh(leftWallGeometry, wallMaterial);
    rightWall.rotation.y = -Math.PI / 2;
    rightWall.position.set(5, 2.5, 0);
    rightWall.receiveShadow = false; // 影受けを無効化
    scene.add(rightWall);

    // 天井
    const ceilingGeometry = new THREE.PlaneGeometry(12, 10);
    const ceilingMaterial = new THREE.MeshLambertMaterial({ 
        color: 0xFFFACD // 薄い黄色（レモンシフォン）
    });
    const ceiling = new THREE.Mesh(ceilingGeometry, ceilingMaterial);
    ceiling.rotation.x = Math.PI / 2;
    ceiling.position.set(0, 5, -2.5);
    scene.add(ceiling);
}

// 作品の作成
function createArtworks() {
    worksData.forEach((work, index) => {
        createArtwork(work, index);
    });
}

// 個別作品の作成（壁面配置）
function createArtwork(workData, index) {
    // フレームの作成
    const frameGeometry = new THREE.BoxGeometry(2.2, 1.6, 0.1);
    const frameMaterial = new THREE.MeshLambertMaterial({ color: 0x4a4a4a }); // ダークグレーフレーム
    const frame = new THREE.Mesh(frameGeometry, frameMaterial);

    // 作品平面の作成
    const artGeometry = new THREE.PlaneGeometry(2, 1.4);
    
    // テクスチャローダー
    const loader = new THREE.TextureLoader();
    
    // デフォルトマテリアル（画像が読み込めない場合）
    const defaultMaterial = new THREE.MeshLambertMaterial({ 
        color: 0xffffff,
        map: createTextTexture(workData.title)
    });
    
    const artwork = new THREE.Mesh(artGeometry, defaultMaterial);
    
    // 画像の読み込み試行
    loader.load(
        workData.image,
        function(texture) {
            // 成功時
            artwork.material = new THREE.MeshLambertMaterial({ map: texture });
        },
        undefined,
        function(error) {
            // エラー時はデフォルトマテリアルのまま
            console.log('Image loading failed, using default material');
        }
    );

    // 位置と回転の設定
    frame.position.copy(workData.position);
    frame.rotation.set(workData.rotation.x, workData.rotation.y, workData.rotation.z);
    
    artwork.position.copy(workData.position);
    artwork.rotation.set(workData.rotation.x, workData.rotation.y, workData.rotation.z);
    
    // 壁から少し前に出す
    if (workData.rotation.y === 0) {
        // 後ろの壁
        artwork.position.z += 0.06;
    } else if (workData.rotation.y === Math.PI / 2) {
        // 左の壁
        artwork.position.x += 0.06;
    } else if (workData.rotation.y === -Math.PI / 2) {
        // 右の壁
        artwork.position.x -= 0.06;
    }

    // データの追加
    artwork.userData = workData;
    frame.userData = workData;

    // シャドウの設定（全てのシャドウを無効化）
    frame.castShadow = false;
    artwork.castShadow = false;

    // シーンに追加
    scene.add(frame);
    scene.add(artwork);
    
    artworks.push(artwork);
}

// テキストテクスチャの作成
function createTextTexture(text) {
    const canvas = document.createElement('canvas');
    const context = canvas.getContext('2d');
    canvas.width = 512;
    canvas.height = 256;

    // 背景
    context.fillStyle = '#f0f0f0';
    context.fillRect(0, 0, canvas.width, canvas.height);

    // テキスト
    context.fillStyle = '#333';
    context.font = 'bold 32px Arial';
    context.textAlign = 'center';
    context.fillText(text, canvas.width / 2, canvas.height / 2);

    const texture = new THREE.CanvasTexture(canvas);
    return texture;
}

// カメラ制御とキーボード操作
function setupControls() {
    let isMouseDown = false;
    let mouseX = 0, mouseY = 0;
    let rotationX = 0, rotationY = 0;
    let targetRotationX = 0, targetRotationY = 0;

    const canvas = document.getElementById('gallery-canvas');
    const moveSpeed = 0.1;

    // キーボードイベントリスナー
    document.addEventListener('keydown', (event) => {
        switch(event.code) {
            case 'KeyW':
            case 'ArrowUp':
                keys.w = true;
                break;
            case 'KeyS':
            case 'ArrowDown':
                keys.s = true;
                break;
            case 'KeyA':
            case 'ArrowLeft':
                keys.a = true;
                break;
            case 'KeyD':
            case 'ArrowRight':
                keys.d = true;
                break;
        }
    });

    document.addEventListener('keyup', (event) => {
        switch(event.code) {
            case 'KeyW':
            case 'ArrowUp':
                keys.w = false;
                break;
            case 'KeyS':
            case 'ArrowDown':
                keys.s = false;
                break;
            case 'KeyA':
            case 'ArrowLeft':
                keys.a = false;
                break;
            case 'KeyD':
            case 'ArrowRight':
                keys.d = false;
                break;
        }
    });

    // マウス操作
    canvas.addEventListener('mousedown', (event) => {
        isMouseDown = true;
        mouseX = event.clientX;
        mouseY = event.clientY;
    });

    canvas.addEventListener('mouseup', () => {
        isMouseDown = false;
    });

    canvas.addEventListener('mousemove', (event) => {
        if (isMouseDown) {
            const deltaX = event.clientX - mouseX;
            const deltaY = event.clientY - mouseY;
            
            targetRotationY += deltaX * 0.005;
            targetRotationX += deltaY * 0.005;
            targetRotationX = Math.max(-Math.PI / 6, Math.min(Math.PI / 6, targetRotationX));
            
            mouseX = event.clientX;
            mouseY = event.clientY;
        }

        // マウス位置の更新（レイキャスティング用）
        const rect = canvas.getBoundingClientRect();
        mouse.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
        mouse.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;
    });

    // カメラの更新
    function updateCamera() {
        // キーボードによる移動
        const direction = new THREE.Vector3();
        camera.getWorldDirection(direction);
        direction.y = 0; // Y軸の移動を制限
        direction.normalize();

        const right = new THREE.Vector3();
        right.crossVectors(direction, new THREE.Vector3(0, 1, 0)).normalize();

        if (keys.w) {
            cameraPosition.add(direction.clone().multiplyScalar(moveSpeed));
        }
        if (keys.s) {
            cameraPosition.sub(direction.clone().multiplyScalar(moveSpeed));
        }
        if (keys.a) {
            cameraPosition.sub(right.clone().multiplyScalar(moveSpeed));
        }
        if (keys.d) {
            cameraPosition.add(right.clone().multiplyScalar(moveSpeed));
        }

        // 境界制限
        cameraPosition.x = Math.max(-4.5, Math.min(4.5, cameraPosition.x));
        cameraPosition.z = Math.max(-4.5, Math.min(4.5, cameraPosition.z));
        cameraPosition.y = Math.max(0.5, Math.min(3, cameraPosition.y));

        // マウスによる回転
        rotationX += (targetRotationX - rotationX) * 0.1;
        rotationY += (targetRotationY - rotationY) * 0.1;

        // カメラ位置と向きの更新
        camera.position.copy(cameraPosition);
        
        cameraTarget.copy(cameraPosition);
        cameraTarget.add(new THREE.Vector3(
            Math.sin(rotationY),
            Math.sin(rotationX),
            Math.cos(rotationY)
        ));
        
        camera.lookAt(cameraTarget);
        
        requestAnimationFrame(updateCamera);
    }
    updateCamera();
}

// イベントリスナーの設定
function setupEventListeners() {
    // カメラリセットボタン
    const resetButton = document.getElementById('reset-camera');
    if (resetButton) {
        resetButton.addEventListener('click', () => {
            cameraPosition.set(0, 1.5, 2);
            cameraTarget.set(0, 1.5, -4);
            targetRotationX = 0;
            targetRotationY = 0;
            rotationX = 0;
            rotationY = 0;
        });
    }

    // ウィンドウリサイズ対応
    window.addEventListener('resize', () => {
        const canvas = document.getElementById('gallery-canvas');
        if (canvas && camera && renderer) {
            camera.aspect = canvas.clientWidth / canvas.clientHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(canvas.clientWidth, canvas.clientHeight);
        }
    });
}

// アニメーションループ
function animate() {
    requestAnimationFrame(animate);

    // レイキャスティング（ホバー検知）
    raycaster.setFromCamera(mouse, camera);
    const intersects = raycaster.intersectObjects(artworks);

    if (intersects.length > 0) {
        const intersectedObject = intersects[0].object;
        if (hoveredObject !== intersectedObject) {
            hoveredObject = intersectedObject;
            const workInfo = document.getElementById('work-info');
            if (workInfo) {
                workInfo.textContent = `${intersectedObject.userData.title} - ${intersectedObject.userData.category}`;
            }
            document.body.style.cursor = 'pointer';
        }
    } else {
        if (hoveredObject) {
            hoveredObject = null;
            const workInfo = document.getElementById('work-info');
            if (workInfo) {
                workInfo.textContent = '作品にカーソルを合わせてください';
            }
            document.body.style.cursor = 'default';
        }
    }

    renderer.render(scene, camera);
}

// DOMロード後に初期化
document.addEventListener('DOMContentLoaded', () => {
    // Three.jsが読み込まれるまで少し待つ
    setTimeout(() => {
        if (typeof THREE !== 'undefined') {
            init3DGallery();
        } else {
            console.error('Three.js library not loaded');
        }
    }, 100);
});