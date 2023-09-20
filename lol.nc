G90 (Usar medidas absolutas)
G21 (Trabajar en mm)

G28 X0 Y0 (Posicionar en origen)

G01 Z5 F500 (Bajar herramienta a Z5 a 500 mm/min)

G01 X20 Y20 F800 (Mover a X20 Y20 a 800 mm/min)
G01 X80 Y20 (Mover a X80 en eje X)
G01 X80 Y80 (Mover a Y80 en eje Y)
G01 X20 Y80 (Cerrar contour)
G01 X20 Y20 (Volver al punto inicial)

G00 Z10 (Subir herramienta)

G28 X0 Y0 (Volver a origen)

M30 (Finalizar programa)