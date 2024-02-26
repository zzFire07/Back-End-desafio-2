# Usa la imagen oficial de Node.js como base
FROM node:18

# Establece el directorio de trabajo en /app
WORKDIR /app

# Copia los archivos de tu aplicación al directorio de trabajo
COPY package*.json ./

# Instala las dependencias
RUN npm install

# Copia el resto de los archivos de la aplicación
COPY . .

# Expone el puerto en el que la aplicación se ejecuta
EXPOSE 4200

# Comando para ejecutar la aplicación
CMD ["node", "back/src/index.js"]
