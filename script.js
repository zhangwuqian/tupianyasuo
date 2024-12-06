document.addEventListener('DOMContentLoaded', function() {
    const imageInput = document.getElementById('imageInput');
    const qualitySlider = document.getElementById('quality');
    const qualityValue = document.getElementById('qualityValue');
    const originalPreview = document.getElementById('originalPreview');
    const compressedPreview = document.getElementById('compressedPreview');
    const originalSize = document.getElementById('originalSize');
    const compressedSize = document.getElementById('compressedSize');
    const downloadBtn = document.getElementById('downloadBtn');
    const settingsArea = document.getElementById('settingsArea');
    const previewArea = document.getElementById('previewArea');

    let originalImage = null;

    // 监听图片上传
    imageInput.addEventListener('change', function(e) {
        const file = e.target.files[0];
        if (!file) return;

        // 显示原始文件大小
        originalSize.textContent = formatFileSize(file.size);

        // 预览原始图片
        const reader = new FileReader();
        reader.onload = function(e) {
            originalImage = new Image();
            originalImage.src = e.target.result;
            originalPreview.src = e.target.result;

            originalImage.onload = function() {
                // 显示设置区域和预览区域
                settingsArea.style.display = 'block';
                previewArea.style.display = 'flex';
                // 触发首次压缩
                compressImage();
            };
        };
        reader.readAsDataURL(file);
    });

    // 监听质量滑块变化
    qualitySlider.addEventListener('input', function() {
        qualityValue.textContent = this.value + '%';
        compressImage();
    });

    // 压缩图片
    function compressImage() {
        if (!originalImage) return;

        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');

        // 设置画布尺寸
        canvas.width = originalImage.width;
        canvas.height = originalImage.height;

        // 绘制图片
        ctx.drawImage(originalImage, 0, 0);

        // 压缩图片
        const quality = qualitySlider.value / 100;
        const compressedDataUrl = canvas.toDataURL('image/jpeg', quality);

        // 显示压缩后的图片
        compressedPreview.src = compressedDataUrl;

        // 计算压缩后的文件大小
        const compressedSize = calculateBase64Size(compressedDataUrl);
        document.getElementById('compressedSize').textContent = formatFileSize(compressedSize);

        // 更新下载按钮
        downloadBtn.onclick = () => {
            const link = document.createElement('a');
            link.download = 'compressed_image.jpg';
            link.href = compressedDataUrl;
            link.click();
        };
    }

    // 格式化文件大小
    function formatFileSize(bytes) {
        if (bytes === 0) return '0 Bytes';
        const k = 1024;
        const sizes = ['Bytes', 'KB', 'MB', 'GB'];
        const i = Math.floor(Math.log(bytes) / Math.log(k));
        return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
    }

    // 计算Base64图片大小
    function calculateBase64Size(base64String) {
        const padding = base64String.endsWith('==') ? 2 : 1;
        return Math.floor((base64String.length * 3) / 4) - padding;
    }
}); 