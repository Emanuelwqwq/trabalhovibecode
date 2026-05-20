"""
Script para remover o fundo da imagem PS5 e deixar com fundo transparente
Usando diferentes técnicas para melhor resultado
"""

from PIL import Image, ImageEnhance
import numpy as np
import os

# Caminhos
input_path = 'fotos/ps5.jfif'
output_path = 'fotos/ps5.png'

def remover_fundo_avancado(imagem_path, saida_path):
    """
    Remove o fundo da imagem usando técnicas avançadas
    """
    try:
        print("🎮 Processando imagem PS5...")
        
        # Abrir a imagem
        img = Image.open(imagem_path)
        print(f"✅ Imagem carregada: {img.size}")
        
        # Converter para RGBA
        img = img.convert('RGBA')
        
        # Converter para array numpy
        data = np.array(img)
        
        # Analisar a cor predominante (que será o fundo)
        # Fazer sample do canto superior esquerdo (geralmente tem o fundo)
        sample_region = data[:50, :50, :]  # 50x50 pixels do canto
        
        # Cor média do fundo
        fundo_color = np.mean(sample_region, axis=(0, 1))
        print(f"ℹ️  Cor do fundo detectada: RGB{tuple(fundo_color[:3])}")
        
        # Separar canais
        r, g, b, a = data[:,:,0], data[:,:,1], data[:,:,2], data[:,:,3]
        
        # Calcular distância da cor em relação ao fundo
        distancia = np.sqrt(
            (r.astype(float) - fundo_color[0])**2 +
            (g.astype(float) - fundo_color[1])**2 +
            (b.astype(float) - fundo_color[2])**2
        )
        
        # Limiar adaptativo (quanto menor, mais agressivo)
        limiar = 50
        
        # Criar máscara (True = fundo, False = objeto)
        mascara = distancia < limiar
        
        # Aplicar dilatação leve para limpar pequenos artefatos
        from scipy import ndimage
        mascara = ndimage.binary_dilation(mascara, iterations=2)
        mascara = ndimage.binary_erosion(mascara, iterations=1)
        
        # Inverter: True agora = transparente
        transparente = mascara
        
        # Aplicar transparência
        data[transparente, 3] = 0
        data[~transparente, 3] = 255
        
        # Criar nova imagem
        resultado = Image.fromarray(data, 'RGBA')
        
        # Salvar como PNG
        resultado.save(saida_path, 'PNG')
        print(f"✅ Imagem salva com sucesso: {saida_path}")
        print(f"ℹ️  Fundo transparente aplicado!")
        
    except Exception as e:
        print(f"❌ Erro ao processar imagem: {e}")
        # Fallback: método simples
        print("⚠️  Tentando método simples...")
        remover_fundo_simples(imagem_path, saida_path)

def remover_fundo_simples(imagem_path, saida_path):
    """
    Remove o fundo branco/similar usando limiar de cor simples
    """
    try:
        img = Image.open(imagem_path).convert('RGBA')
        data = img.getdata()
        
        newData = []
        limiar = 230
        
        for item in data:
            # Se o pixel é muito claro (fundo claro)
            if item[0] > limiar and item[1] > limiar and item[2] > limiar:
                newData.append((item[0], item[1], item[2], 0))
            else:
                newData.append(item)
        
        img.putdata(newData)
        img.save(saida_path)
        print(f"✅ Imagem salva: {saida_path}")
        
    except Exception as e:
        print(f"❌ Erro: {e}")

if __name__ == "__main__":
    if os.path.exists(input_path):
        print(f"📷 Processando: {input_path}")
        remover_fundo_simples(input_path, output_path)
    else:
        print(f"❌ Arquivo não encontrado: {input_path}")
