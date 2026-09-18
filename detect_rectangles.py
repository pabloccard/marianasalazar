import sys
import cv2
import numpy as np

# Carregar a imagem
image_path = sys.argv[1] if len(sys.argv) > 1 else 'public/sections/SESSAO03.webp'
image = cv2.imread(image_path)
gray = cv2.cvtColor(image, cv2.COLOR_BGR2GRAY)

# Usar Canny Edge Detection
edges = cv2.Canny(gray, 50, 150)

# Dilatar as bordas para conectar cantos arredondados
kernel = np.ones((5,5), np.uint8)
dilated = cv2.dilate(edges, kernel, iterations=2)

# Encontrar contornos
contours, _ = cv2.findContours(dilated, cv2.RETR_EXTERNAL, cv2.CHAIN_APPROX_SIMPLE)

rects = []
for cnt in contours:
    x, y, w, h = cv2.boundingRect(cnt)
    
    # Filtros: width > 300 e height > 400 (para pegar as duas caixas pequenas e a grande)
    if w > 300 and h > 400 and w < 1390:
        aspect_ratio = float(w) / float(h)
        rects.append((x, y, w, h, aspect_ratio))

# Ordenar por Y
rects = sorted(rects, key=lambda r: r[1])

print(f"Total width of image: {image.shape[1]}")
print(f"Total height of image: {image.shape[0]}")
print(f"Found {len(rects)} potential rectangles:")
for i, (x, y, w, h, ar) in enumerate(rects):
    print(f"Rectangle {i+1}: X={x}, Y={y}, Width={w}, Height={h}, Aspect Ratio={ar:.3f}")
    pct_x = (x / image.shape[1]) * 100
    pct_y = (y / image.shape[0]) * 100
    pct_w = (w / image.shape[1]) * 100
    pct_h = (h / image.shape[0]) * 100
    print(f"CSS (percentages): top: {pct_y:.4f}%, left: {pct_x:.4f}%, width: {pct_w:.4f}%, height: {pct_h:.4f}%")
